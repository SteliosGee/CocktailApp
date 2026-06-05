from django.db import models
from django.contrib.auth.models import User


class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Cocktail(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    emoji = models.CharField(max_length=10, default='🍹')
    image_url = models.URLField(max_length=500, blank=True, default='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800')
    is_alcoholic = models.BooleanField(default=True)
    base_spirit = models.CharField(max_length=100, blank=True)
    steps = models.TextField(blank=True)
    preparation_time = models.IntegerField(help_text='Preparation time in minutes', default=5)

    name_el = models.CharField(max_length=200, blank=True, default='')
    description_el = models.TextField(blank=True, default='')
    base_spirit_el = models.CharField(max_length=100, blank=True, default='')
    steps_el = models.TextField(blank=True, default='')

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class CocktailIngredient(models.Model):
    cocktail = models.ForeignKey(Cocktail, on_delete=models.CASCADE, related_name='cocktail_ingredients')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='cocktail_ingredients')
    quantity = models.CharField(max_length=50)
    unit = models.CharField(max_length=50, blank=True)

    class Meta:
        unique_together = ('cocktail', 'ingredient')

    def __str__(self):
        return f"{self.cocktail.name} - {self.ingredient.name}: {self.quantity} {self.unit}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    theme = models.CharField(max_length=20, default='light', choices=[('light', 'Light'), ('dark', 'Dark')])
    units = models.CharField(max_length=20, default='metric', choices=[('metric', 'Metric'), ('imperial', 'Imperial')])
    language = models.CharField(max_length=10, default='en')

    def __str__(self):
        return f"Profile of {self.user.username}"


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites')
    cocktail = models.ForeignKey(Cocktail, on_delete=models.CASCADE, related_name='favorited_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'cocktail')
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} - {self.cocktail.name}"
