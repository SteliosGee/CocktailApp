from django.urls import path
from . import views

urlpatterns = [
    path('cocktails/', views.CocktailListCreateView.as_view(), name='cocktail-list'),
    path('cocktails/<int:pk>/', views.CocktailDetailView.as_view(), name='cocktail-detail'),
    path('ingredients/', views.IngredientListView.as_view(), name='ingredient-list'),
    path('auth/register/', views.register_view, name='register'),
    path('auth/login/', views.login_view, name='login'),
    path('user/profile/', views.profile_view, name='profile'),
    path('favorites/', views.FavoriteListCreateView.as_view(), name='favorite-list'),
    path('favorites/<int:pk>/', views.FavoriteDeleteView.as_view(), name='favorite-delete'),
    path('auth/delete-account/', views.delete_account_view, name='delete-account'),
]
