from django.contrib import admin
from .models import Ingredient, Cocktail, CocktailIngredient, UserProfile, Favorite


@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class CocktailIngredientInline(admin.TabularInline):
    model = CocktailIngredient
    extra = 1


@admin.register(Cocktail)
class CocktailAdmin(admin.ModelAdmin):
    list_display = ['name', 'base_spirit', 'is_alcoholic', 'preparation_time']
    list_filter = ['is_alcoholic', 'base_spirit']
    search_fields = ['name', 'description']
    inlines = [CocktailIngredientInline]


@admin.register(CocktailIngredient)
class CocktailIngredientAdmin(admin.ModelAdmin):
    list_display = ['cocktail', 'ingredient', 'quantity', 'unit']
    list_filter = ['cocktail', 'ingredient']


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'theme', 'units', 'language']


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ['user', 'cocktail', 'created_at']
