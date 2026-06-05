from django.core.management.base import BaseCommand
from cocktails.models import Ingredient, Cocktail, CocktailIngredient


class Command(BaseCommand):
    help = 'Seed the database with cocktail data'

    def handle(self, *args, **options):
        self.stdout.write('Seeding database...')

        ingredients_data = [
            'White Rum', 'Dark Rum', 'Light Rum', 'Vodka', 'Gin', 'Tequila',
            'Campari', 'Sweet Vermouth', 'Dry Vermouth', 'Aperol', 'Prosecco',
            'Lime Juice', 'Lemon Juice', 'Simple Syrup', 'Sugar', 'Soda Water',
            'Tonic Water', 'Ginger Beer', 'Coconut Cream', 'Pineapple Juice',
            'Mint Leaves', 'Bitters', 'Olive', 'Ice', 'Salt', 'Lime',
            'Triple Sec', 'Cranberry Juice', 'Orange Juice', 'Egg White',
            'Angostura Bitters', 'Grenadine', 'Maraschino Cherry', 'Orange Peel',
            'Coffee Liqueur', 'Cream', 'Tomato Juice', 'Worcestershire Sauce',
            'Hot Sauce', 'Celery Salt', 'Cucumber', 'Basil Leaves', 'Agave Syrup',
            'Mezcal', 'St-Germain', 'Champagne', 'Elderflower Liqueur',
        ]

        ingredients = {}
        for name in ingredients_data:
            ing, _ = Ingredient.objects.get_or_create(name=name)
            ingredients[name] = ing

        cocktails_data = [
            {
                'name': 'Mojito',
                'description': 'A refreshing Cuban highball that balances the sweetness of rum with the zing of fresh lime and the cool aroma of mint. This iconic cocktail was allegedly invented at La Bodeguita del Medio in Havana. Perfect for sipping on a hot summer afternoon.',
                'emoji': '🍃',
                'image_url': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Rum',
                'preparation_time': 5,
                'steps': '1. Add mint leaves, lime juice, and simple syrup to a tall glass.\n2. Gently muddle the mint to release its oils—do not shred the leaves.\n3. Fill the glass with ice, then pour in the white rum.\n4. Top with soda water and stir gently to combine.\n5. Garnish with a fresh mint sprig and a lime wedge.',
                'ingredients': [
                    ('White Rum', '60', 'ml'),
                    ('Lime Juice', '30', 'ml'),
                    ('Simple Syrup', '20', 'ml'),
                    ('Mint Leaves', '10', 'leaves'),
                    ('Soda Water', '60', 'ml'),
                    ('Ice', '1', 'glass'),
                ],
            },
            {
                'name': 'Daiquiri',
                'description': 'The quintessential rum sour—a minimalist masterpiece of white rum, fresh lime juice, and simple syrup. Invented in the early 1900s in Santiago de Cuba, it remains one of the most popular cocktails worldwide. When made well, it is bright, balanced, and utterly refreshing.',
                'emoji': '🍋',
                'image_url': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Rum',
                'preparation_time': 3,
                'steps': '1. Add white rum, fresh lime juice, and simple syrup to a cocktail shaker.\n2. Fill the shaker with ice and shake vigorously for 12–15 seconds until well-chilled.\n3. Double-strain into a chilled coupe glass for a silky texture.\n4. Garnish with a thin lime wheel on the rim.',
                'ingredients': [
                    ('White Rum', '60', 'ml'),
                    ('Lime Juice', '30', 'ml'),
                    ('Simple Syrup', '20', 'ml'),
                    ('Ice', '1', 'cup'),
                ],
            },
            {
                'name': 'Aperol Spritz',
                'description': 'Italy\'s favourite aperitivo—bright orange, bittersweet, and endlessly drinkable. The combination of Aperol, Prosecco, and a splash of soda creates a light, effervescent cocktail that pairs perfectly with a sunny afternoon. Best enjoyed outdoors with friends.',
                'emoji': '🍊',
                'image_url': 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Aperol',
                'preparation_time': 3,
                'steps': '1. Fill a large wine glass with plenty of ice cubes.\n2. Pour 60 ml of Aperol over the ice.\n3. Add 90 ml of chilled Prosecco.\n4. Top with a small splash of soda water (about 30 ml).\n5. Stir gently once and garnish with a fresh orange slice.',
                'ingredients': [
                    ('Aperol', '60', 'ml'),
                    ('Prosecco', '90', 'ml'),
                    ('Soda Water', '30', 'ml'),
                    ('Ice', '1', 'glass'),
                ],
            },
            {
                'name': 'Negroni',
                'description': 'A bold, bitter Italian classic with an almost mathematical balance of gin, Campari, and sweet vermouth. Legend has it that Count Camillo Negroni asked his bartender to strengthen his favourite cocktail by replacing soda water with gin. The result is one of the most iconic cocktails ever created.',
                'emoji': '🔴',
                'image_url': 'https://images.unsplash.com/photo-1574006852726-31f12ad0deb8?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Gin',
                'preparation_time': 3,
                'steps': '1. Add gin, Campari, and sweet vermouth to a mixing glass filled with ice.\n2. Stir steadily for about 20 seconds until properly diluted and chilled.\n3. Strain into a rocks glass over a single large ice cube.\n4. Express an orange peel over the drink and drop it in as garnish.',
                'ingredients': [
                    ('Gin', '30', 'ml'),
                    ('Campari', '30', 'ml'),
                    ('Sweet Vermouth', '30', 'ml'),
                    ('Ice', '1', 'cube'),
                ],
            },
            {
                'name': 'Piña Colada',
                'description': 'A creamy tropical paradise in a glass, blending white rum with luscious coconut cream and sweet pineapple juice. This Puerto Rican classic has been the official drink of San Juan since 1978. Blended with ice, it transforms into a frozen dessert-like indulgence.',
                'emoji': '🍍',
                'image_url': 'https://images.unsplash.com/photo-1587223962401-4960a67e5d7c?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Rum',
                'preparation_time': 5,
                'steps': '1. Add light rum, coconut cream, pineapple juice, and a cup of ice to a blender.\n2. Blend on high until the mixture is completely smooth and frothy.\n3. Pour into a chilled hurricane glass.\n4. Garnish with a fresh pineapple wedge and a maraschino cherry on top.',
                'ingredients': [
                    ('Light Rum', '60', 'ml'),
                    ('Coconut Cream', '60', 'ml'),
                    ('Pineapple Juice', '90', 'ml'),
                    ('Ice', '1', 'cup'),
                ],
            },
            {
                'name': 'Moscow Mule',
                'description': 'A zesty, spicy cocktail served in its signature copper mug that keeps the drink ice-cold. Vodka meets the fiery kick of ginger beer and the bright acidity of fresh lime. Invented in 1941 at the Cock\'n Bull bar in Hollywood, it helped popularise vodka in America.',
                'emoji': '🫏',
                'image_url': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Vodka',
                'preparation_time': 3,
                'steps': '1. Fill a copper mug (or highball glass) with ice.\n2. Pour in vodka and fresh lime juice.\n3. Top with cold ginger beer and give a gentle stir.\n4. Garnish with a lime wheel and a sprig of fresh mint.',
                'ingredients': [
                    ('Vodka', '45', 'ml'),
                    ('Lime Juice', '15', 'ml'),
                    ('Ginger Beer', '120', 'ml'),
                    ('Ice', '1', 'glass'),
                    ('Lime', '1', 'wheel'),
                ],
            },
            {
                'name': 'Cosmopolitan',
                'description': 'A stylish pink cocktail that became a cultural icon in the 1990s thanks to Sex and the City. Citrus vodka meets the tartness of cranberry and the sweetness of Cointreau, creating a perfectly balanced, elegant drink. Best served in a chilled martini glass.',
                'emoji': '💕',
                'image_url': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Vodka',
                'preparation_time': 4,
                'steps': '1. Add citrus vodka, triple sec, cranberry juice, and lime juice to a shaker.\n2. Fill with ice and shake vigorously until well-chilled.\n3. Double-strain into a chilled martini glass.\n4. Garnish with a flamed orange peel for an aromatic finish.',
                'ingredients': [
                    ('Vodka', '45', 'ml'),
                    ('Triple Sec', '15', 'ml'),
                    ('Cranberry Juice', '30', 'ml'),
                    ('Lime Juice', '15', 'ml'),
                    ('Ice', '1', 'cup'),
                ],
            },
            {
                'name': 'Espresso Martini',
                'description': 'A modern classic that combines the rich bitterness of fresh espresso with the smooth warmth of vodka and the sweetness of coffee liqueur. Created by London bartender Dick Bradsell in the 1980s, it is the ultimate after-dinner cocktail that wakes you up while you drink up.',
                'emoji': '☕',
                'image_url': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Vodka',
                'preparation_time': 4,
                'steps': '1. Brew a fresh shot of espresso and let it cool slightly.\n2. Add vodka, coffee liqueur, simple syrup, and espresso to a shaker.\n3. Fill with ice and shake very vigorously for 15 seconds to create a nice foam.\n4. Double-strain into a chilled coupe or martini glass.\n5. Garnish with three coffee beans on the foam.',
                'ingredients': [
                    ('Vodka', '50', 'ml'),
                    ('Coffee Liqueur', '20', 'ml'),
                    ('Simple Syrup', '10', 'ml'),
                    ('Ice', '1', 'cup'),
                ],
            },
            {
                'name': 'Margarita',
                'description': 'Mexico\'s most famous export—a tequila-based cocktail with the bright acidity of lime and the subtle sweetness of orange liqueur. Whether served on the rocks or frozen, the salt-rimmed glass is what makes a margarita truly special. Simple, strong, and unforgettable.',
                'emoji': '🌵',
                'image_url': 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Tequila',
                'preparation_time': 4,
                'steps': '1. Run a lime wedge around the rim of a rocks glass and dip in salt.\n2. Fill the glass with ice to chill it while you prepare the drink.\n3. Add tequila, triple sec, and lime juice to a shaker with ice.\n4. Shake well and strain into the prepared glass over fresh ice.\n5. Garnish with a lime wheel on the rim.',
                'ingredients': [
                    ('Tequila', '50', 'ml'),
                    ('Triple Sec', '25', 'ml'),
                    ('Lime Juice', '30', 'ml'),
                    ('Salt', '1', 'rim'),
                    ('Ice', '1', 'glass'),
                ],
            },
            {
                'name': 'Whiskey Sour',
                'description': 'A timeless whiskey cocktail that balances the warmth of bourbon with the tartness of fresh lemon and a touch of sweetness. The optional egg white adds a luxurious silky texture and a beautiful foamy head. A bar staple since the 1860s that never goes out of style.',
                'emoji': '🥃',
                'image_url': 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
                'is_alcoholic': True,
                'base_spirit': 'Whiskey',
                'preparation_time': 4,
                'steps': '1. Add bourbon, lemon juice, simple syrup, and optional egg white to a shaker.\n2. Dry shake (without ice) for 10 seconds to emulsify the egg white.\n3. Add ice and shake again vigorously for 12 seconds.\n4. Strain into a rocks glass over a large ice cube.\n5. Garnish with a cherry and an orange slice.',
                'ingredients': [
                    ('Vodka', '60', 'ml'),
                    ('Lemon Juice', '30', 'ml'),
                    ('Simple Syrup', '20', 'ml'),
                    ('Egg White', '1', 'optional'),
                    ('Angostura Bitters', '2', 'dashes'),
                    ('Ice', '1', 'cube'),
                ],
            },
        ]

        for data in cocktails_data:
            cocktail, created = Cocktail.objects.get_or_create(
                name=data['name'],
                defaults={
                    'description': data['description'],
                    'emoji': data['emoji'],
                    'image_url': data['image_url'],
                    'is_alcoholic': data['is_alcoholic'],
                    'base_spirit': data['base_spirit'],
                    'preparation_time': data['preparation_time'],
                    'steps': data['steps'],
                }
            )
            if created:
                for ing_name, qty, unit in data['ingredients']:
                    if ing_name in ingredients:
                        CocktailIngredient.objects.create(
                            cocktail=cocktail,
                            ingredient=ingredients[ing_name],
                            quantity=qty,
                            unit=unit,
                        )

        self.stdout.write(self.style.SUCCESS(f'Done! Seeded {len(cocktails_data)} cocktails and {len(ingredients)} ingredients.'))
