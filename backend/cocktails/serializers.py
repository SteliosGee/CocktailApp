from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Ingredient, Cocktail, CocktailIngredient, UserProfile, Favorite


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']


class CocktailIngredientSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer(read_only=True)
    ingredient_id = serializers.PrimaryKeyRelatedField(
        queryset=Ingredient.objects.all(), source='ingredient', write_only=True
    )

    class Meta:
        model = CocktailIngredient
        fields = ['id', 'ingredient', 'ingredient_id', 'quantity', 'unit']


class CocktailListSerializer(serializers.ModelSerializer):
    is_favorited = serializers.SerializerMethodField()

    class Meta:
        model = Cocktail
        fields = ['id', 'name', 'description', 'emoji', 'image_url', 'is_alcoholic', 'base_spirit', 'preparation_time', 'is_favorited']

    def _get_lang(self):
        request = self.context.get('request')
        return request.query_params.get('lang', 'en') if request else 'en'

    def get_name(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.name_el:
            return obj.name_el
        return obj.name

    def get_description(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.description_el:
            return obj.description_el
        return obj.description

    def get_base_spirit(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.base_spirit_el:
            return obj.base_spirit_el
        return obj.base_spirit

    def get_is_favorited(self, obj):
        user = self.context.get('request') and self.context['request'].user
        if user and user.is_authenticated:
            return Favorite.objects.filter(user=user, cocktail=obj).exists()
        return False


class CocktailDetailSerializer(serializers.ModelSerializer):
    cocktail_ingredients = CocktailIngredientSerializer(many=True, read_only=True)
    is_favorited = serializers.SerializerMethodField()
    favorite_id = serializers.SerializerMethodField()

    class Meta:
        model = Cocktail
        fields = ['id', 'name', 'description', 'emoji', 'image_url', 'is_alcoholic', 'base_spirit', 'steps', 'preparation_time', 'cocktail_ingredients', 'is_favorited', 'favorite_id']

    def _get_lang(self):
        request = self.context.get('request')
        return request.query_params.get('lang', 'en') if request else 'en'

    def get_name(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.name_el:
            return obj.name_el
        return obj.name

    def get_description(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.description_el:
            return obj.description_el
        return obj.description

    def get_base_spirit(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.base_spirit_el:
            return obj.base_spirit_el
        return obj.base_spirit

    def get_steps(self, obj):
        lang = self._get_lang()
        if lang == 'el' and obj.steps_el:
            return obj.steps_el
        return obj.steps

    def get_is_favorited(self, obj):
        user = self.context.get('request') and self.context['request'].user
        if user and user.is_authenticated:
            return Favorite.objects.filter(user=user, cocktail=obj).exists()
        return False

    def get_favorite_id(self, obj):
        user = self.context.get('request') and self.context['request'].user
        if user and user.is_authenticated:
            fav = Favorite.objects.filter(user=user, cocktail=obj).first()
            return fav.id if fav else None
        return None


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        UserProfile.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'theme', 'units', 'language']


class FavoriteSerializer(serializers.ModelSerializer):
    cocktail = CocktailDetailSerializer(read_only=True)
    cocktail_id = serializers.PrimaryKeyRelatedField(
        queryset=Cocktail.objects.all(), source='cocktail', write_only=True
    )

    class Meta:
        model = Favorite
        fields = ['id', 'cocktail', 'cocktail_id', 'created_at']
