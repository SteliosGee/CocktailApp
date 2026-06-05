from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Q
from .models import Ingredient, Cocktail, CocktailIngredient, UserProfile, Favorite
from .serializers import (
    IngredientSerializer, CocktailListSerializer, CocktailDetailSerializer,
    CocktailIngredientSerializer, RegisterSerializer, LoginSerializer,
    UserProfileSerializer, FavoriteSerializer, UserSerializer
)


class StandardPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


# --- Cocktails ---
class CocktailListCreateView(generics.ListAPIView):
    serializer_class = CocktailListSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = StandardPagination

    def get_queryset(self):
        qs = Cocktail.objects.all()
        search = self.request.query_params.get('search')
        if search:
            qs = qs.filter(Q(name__icontains=search) | Q(description__icontains=search))

        is_alcoholic = self.request.query_params.get('is_alcoholic')
        if is_alcoholic is not None:
            qs = qs.filter(is_alcoholic=is_alcoholic.lower() in ('true', '1'))

        base_spirit = self.request.query_params.get('base_spirit')
        if base_spirit:
            spirits = [s.strip() for s in base_spirit.split(',') if s.strip()]
            if len(spirits) == 1:
                qs = qs.filter(base_spirit__iexact=spirits[0])
            elif spirits:
                from django.db.models import Q
                q = Q()
                for s in spirits:
                    q |= Q(base_spirit__iexact=s)
                qs = qs.filter(q)

        ingredient = self.request.query_params.get('ingredient')
        if ingredient:
            ingredients = [i.strip() for i in ingredient.split(',') if i.strip()]
            if len(ingredients) == 1:
                qs = qs.filter(cocktail_ingredients__ingredient__name__icontains=ingredients[0]).distinct()
            elif ingredients:
                from django.db.models import Q
                q = Q()
                for i in ingredients:
                    q |= Q(cocktail_ingredients__ingredient__name__icontains=i)
                qs = qs.filter(q).distinct()

        return qs


class CocktailDetailView(generics.RetrieveAPIView):
    queryset = Cocktail.objects.all()
    serializer_class = CocktailDetailSerializer
    permission_classes = [permissions.AllowAny]


# --- Ingredients ---
class IngredientListView(generics.ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    permission_classes = [permissions.AllowAny]


# --- Auth ---
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_view(request):
    login_id = request.data.get('username') or request.data.get('email') or ''
    password = request.data.get('password', '')
    if not login_id or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=login_id, password=password)
    if not user:
        try:
            user_obj = User.objects.get(email=login_id)
            user = authenticate(username=user_obj.username, password=password)
        except User.DoesNotExist:
            pass

    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserSerializer(user).data
        })
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# --- Profile ---
@api_view(['GET', 'PUT'])
@permission_classes([permissions.IsAuthenticated])
def profile_view(request):
    profile, _ = UserProfile.objects.get_or_create(user=request.user)
    if request.method == 'GET':
        return Response(UserProfileSerializer(profile).data)
    elif request.method == 'PUT':
        for field in ['theme', 'units', 'language']:
            if field in request.data:
                setattr(profile, field, request.data[field])
        profile.save()
        return Response(UserProfileSerializer(profile).data)


# --- Favorites ---
class FavoriteListCreateView(generics.ListCreateAPIView):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = StandardPagination

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user).select_related('cocktail')

    def create(self, request, *args, **kwargs):
        cocktail_id = request.data.get('cocktail_id')
        if not cocktail_id:
            return Response({'error': 'cocktail_id is required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            cocktail = Cocktail.objects.get(pk=cocktail_id)
        except Cocktail.DoesNotExist:
            return Response({'error': 'Cocktail not found'}, status=status.HTTP_404_NOT_FOUND)
        fav, created = Favorite.objects.get_or_create(user=request.user, cocktail=cocktail)
        if not created:
            return Response({'error': 'Already in favorites'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(fav)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class FavoriteDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)


# --- Delete Account ---
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def delete_account_view(request):
    password = request.data.get('password', '')
    if not password:
        return Response({'error': 'Password is required'}, status=status.HTTP_400_BAD_REQUEST)

    user = request.user
    if not user.check_password(password):
        return Response({'error': 'Incorrect password'}, status=status.HTTP_400_BAD_REQUEST)

    token = Token.objects.filter(user=user).first()
    if token:
        token.delete()
    user.delete()
    return Response({'success': True}, status=status.HTTP_200_OK)
