const COCKTAILS = [
  {
    id: 1,
    name: 'Alexander',
    description: 'A classic creamy cocktail that combines the richness of cognac with the sweetness of crème de cacao. This elegant drink dates back to the late 19th century and remains a beloved after-dinner choice.',
    emoji: '🥃',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with freshly grated nutmeg.',
    ingredients: [
      { name: 'Cognac', quantity: '30', unit: 'ml' },
      { name: 'Creme de Cacao', quantity: '30', unit: 'ml' },
      { name: 'Cream', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 2,
    name: 'Americano',
    description: 'A bitter and refreshing aperitif that originated in Italy in the 1860s. It combines Campari with sweet vermouth and soda water for a light yet complex flavor profile.',
    emoji: '🍷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Campari',
    preparation_time: 3,
    steps: '1. Add Campari and sweet vermouth to an ice-filled glass.\n2. Top with soda water.\n3. Stir gently to combine.\n4. Garnish with a slice of orange or olive.',
    ingredients: [
      { name: 'Campari', quantity: '30', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '30', unit: 'ml' },
      { name: 'Soda Water', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 3,
    name: 'Angel Face',
    description: 'A smooth and balanced cocktail that blends gin, apricot brandy, and Calvados for a fruity yet sophisticated taste. This Prohibition-era drink has a mysterious charm.',
    emoji: '😇',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake vigorously until well chilled.\n3. Strain into a chilled cocktail glass.\n4. Serve without garnish.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Apricot Brandy', quantity: '30', unit: 'ml' },
      { name: 'Calvados', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 4,
    name: 'Aviation',
    description: 'A beautifully colored cocktail with a delicate floral flavor profile. Created in the early 20th century, it combines gin with maraschino liqueur and crème de violette.',
    emoji: '✈️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry if desired.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Creme de Violette', quantity: '15', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '22.5', unit: 'ml' }
    ]
  },
  {
    id: 5,
    name: 'Between the Sheets',
    description: 'A potent and smooth cocktail that combines rum, cognac, triple sec, and lemon juice. This classic drink offers a balanced mix of sweet, sour, and strong flavors.',
    emoji: '🛏️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist if desired.',
    ingredients: [
      { name: 'White Rum', quantity: '30', unit: 'ml' },
      { name: 'Cognac', quantity: '30', unit: 'ml' },
      { name: 'Triple Sec', quantity: '30', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 6,
    name: 'Boulevardier',
    description: 'A sophisticated and bitter cocktail that is essentially a Negroni made with whiskey instead of gin. This elegant drink is perfect for sipping before dinner.',
    emoji: '🥂',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a rocks glass with a large ice cube.\n4. Garnish with an orange peel.',
    ingredients: [
      { name: 'Bourbon', quantity: '45', unit: 'ml' },
      { name: 'Campari', quantity: '30', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 7,
    name: 'Brandy Crusta',
    description: 'A classic New Orleans cocktail from the 1850s that is essentially an upgraded Sidecar. It features brandy with lemon juice and maraschino liqueur, served in a special sugar-rimmed glass.',
    emoji: '💎',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 5,
    steps: '1. Rim a cocktail glass with sugar.\n2. Add all ingredients to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass.\n5. Garnish with a long lemon peel.',
    ingredients: [
      { name: 'Cognac', quantity: '45', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '10', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 8,
    name: 'Casino',
    description: 'A crisp and citrusy gin cocktail that was created in the early 20th century. It combines gin with maraschino liqueur and citrus juices for a refreshing and balanced drink.',
    emoji: '🎰',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Orange Bitters', quantity: '2', unit: 'dashes' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 9,
    name: 'Clover Club',
    description: 'A pre-Prohibition classic from Philadelphia that features gin, raspberry syrup, lemon juice, and egg white. This drink is known for its beautiful pink color and frothy texture.',
    emoji: '☘️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 5,
    steps: '1. Add all ingredients to a shaker without ice.\n2. Dry shake vigorously for 10 seconds.\n3. Add ice and shake again until chilled.\n4. Strain into a chilled cocktail glass.\n5. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '22.5', unit: 'ml' },
      { name: 'Dry Vermouth', quantity: '15', unit: 'ml' },
      { name: 'Raspberry Syrup', quantity: '15', unit: 'ml' },
      { name: 'Egg White', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 10,
    name: 'Daiquiri',
    description: 'A refreshing Cuban cocktail that is the perfect balance of sweet, sour, and strong. Created by American mining engineer Jennings Cox in the late 19th century.',
    emoji: '🍋',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime wheel if desired.',
    ingredients: [
      { name: 'White Rum', quantity: '50', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 11,
    name: 'Dry Martini',
    description: 'The quintessential cocktail, beloved by James Bond and cocktail enthusiasts alike. A sophisticated blend of gin and dry vermouth, served ice-cold with an olive or twist.',
    emoji: '🍸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add gin and dry vermouth to a mixing glass with ice.\n2. Stir well for 20-30 seconds.\n3. Strain into a chilled cocktail glass.\n4. Garnish with an olive or lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '60', unit: 'ml' },
      { name: 'Dry Vermouth', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 12,
    name: 'Gin Fizz',
    description: 'A light and effervescent cocktail that was popularized in New Orleans in the early 20th century. It combines gin with lemon juice, sugar, and soda water for a refreshing drink.',
    emoji: '🫧',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add gin, lemon juice, and sugar to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a highball glass with ice.\n4. Top with soda water.\n5. Garnish with a lemon slice.',
    ingredients: [
      { name: 'Gin', quantity: '60', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' },
      { name: 'Soda Water', quantity: '60', unit: 'ml' },
    ]
  },
  {
    id: 13,
    name: 'Hanky Panky',
    description: 'A classic cocktail created by Ada Coleman at the Savoy Hotel in the early 20th century. It features gin with sweet vermouth and Fernet-Branca for a complex, slightly bitter flavor.',
    emoji: '🎩',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with an orange peel.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '45', unit: 'ml' },
      { name: 'Fernet-Branca', quantity: '7.5', unit: 'ml' }
    ]
  },
  {
    id: 14,
    name: 'Tom Collins',
    description: 'A tall, refreshing cocktail that is essentially a sparkling lemonade with gin. Created in the 19th century, it remains one of the most popular gin-based drinks worldwide.',
    emoji: '🧃',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 3,
    steps: '1. Add gin, lemon juice, and sugar to a Collins glass with ice.\n2. Stir well.\n3. Top with soda water.\n4. Garnish with a lemon slice and cherry.',
    ingredients: [
      { name: 'Gin', quantity: '50', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '25', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '20', unit: 'ml' },
      { name: 'Soda Water', quantity: '90', unit: 'ml' }
    ]
  },
  {
    id: 15,
    name: 'Last Word',
    description: 'A perfectly balanced cocktail that was created at the Detroit Athletic Club in the 1920s. It features equal parts gin, green Chartreuse, maraschino liqueur, and lime juice.',
    emoji: '📝',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime twist if desired.',
    ingredients: [
      { name: 'Gin', quantity: '22', unit: 'ml' },
      { name: 'Green Chartreuse', quantity: '22', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '22', unit: 'ml' },
      { name: 'Lime Juice', quantity: '22', unit: 'ml' }
    ]
  },
  {
    id: 16,
    name: 'Manhattan',
    description: 'A classic whiskey cocktail that originated in the late 19th century. It combines rye whiskey with sweet vermouth and bitters for a smooth, sophisticated drink.',
    emoji: '🏙️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well for 20-30 seconds.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry.',
    ingredients: [
      { name: 'Rye Whiskey', quantity: '50', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '20', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 17,
    name: 'Martinez',
    description: 'A precursor to the modern Martini, this 19th-century cocktail combines gin with sweet vermouth and maraschino liqueur. It is smoother and sweeter than its famous descendant.',
    emoji: '🍸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry or lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '30', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 18,
    name: 'Mary Pickford',
    description: 'A tropical cocktail created in the 1920s and named after the famous actress. It combines rum with pineapple juice, grenadine, and maraschino liqueur for a sweet, fruity drink.',
    emoji: '🎬',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry if desired.',
    ingredients: [
      { name: 'White Rum', quantity: '45', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '15', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Lime Juice', quantity: '5', unit: 'ml' },
      { name: 'Grenadine', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 19,
    name: 'Monkey Gland',
    description: 'A fruity and refreshing cocktail from the 1920s that combines gin with orange juice and grenadine. Despite its unusual name, it is a delicious and easy-drinking drink.',
    emoji: '🐒',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 3,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with an orange slice.',
    ingredients: [
      { name: 'Gin', quantity: '50', unit: 'ml' },
      { name: 'Orange Juice', quantity: '25', unit: 'ml' },
      { name: 'Grenadine', quantity: '5', unit: 'ml' },
      { name: 'Absinthe', quantity: '5', unit: 'ml' }
    ]
  },
  {
    id: 20,
    name: 'Negroni',
    description: 'A perfectly balanced Italian aperitif created in Florence in the 1920s. It combines equal parts gin, Campari, and sweet vermouth for a bitter, aromatic, and complex drink.',
    emoji: '🔴',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 3,
    steps: '1. Add all ingredients to a rocks glass with ice.\n2. Stir gently to combine.\n3. Garnish with an orange peel.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Campari', quantity: '30', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 21,
    name: 'Old Fashioned',
    description: 'The original cocktail, dating back to the early 19th century. It is a simple yet elegant drink that highlights the flavors of bourbon or rye whiskey with sugar and bitters.',
    emoji: '🥃',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add sugar, bitters, and a splash of water to a rocks glass.\n2. Muddle until sugar dissolves.\n3. Add a large ice cube and whiskey.\n4. Stir gently.\n5. Garnish with an orange peel and cherry.',
    ingredients: [
      { name: 'Bourbon', quantity: '50', unit: 'ml' },
      { name: 'Sugar', quantity: '1', unit: 'tsp' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' },
      { name: 'Orange Peel', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 22,
    name: 'Paradise',
    description: 'A fruity and elegant cocktail from the 1920s that combines gin with apricot brandy and orange juice. It offers a delightful balance of sweet and tart flavors.',
    emoji: '🏝️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with an orange twist.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Apricot Brandy', quantity: '15', unit: 'ml' },
      { name: 'Orange Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 23,
    name: "Planter's Punch",
    description: 'A tropical rum punch that dates back to the 19th century. It combines dark rum with fruit juices and spices for a refreshing and complex Caribbean-inspired drink.',
    emoji: '🌴',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a Collins glass with ice.\n4. Top with soda water if desired.\n5. Garnish with a fruit slice.',
    ingredients: [
      { name: 'Dark Rum', quantity: '45', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' },
      { name: 'Orange Juice', quantity: '15', unit: 'ml' },
      { name: 'Grenadine', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 24,
    name: 'Porto Flip',
    description: 'A rich and creamy after-dinner cocktail that combines brandy with port wine and egg yolk. This classic drink has a smooth, velvety texture and sweet flavor.',
    emoji: '🍷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake vigorously until well chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with freshly grated nutmeg.',
    ingredients: [
      { name: 'Cognac', quantity: '15', unit: 'ml' },
      { name: 'Port', quantity: '45', unit: 'ml' },
      { name: 'Egg Yolk', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 25,
    name: 'Ramos Fizz',
    description: 'A luxurious and frothy cocktail from New Orleans that combines gin with cream, egg white, and citrus juices. It requires vigorous shaking to achieve its signature texture.',
    emoji: '🍹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 5,
    steps: '1. Add all ingredients to a shaker without ice.\n2. Dry shake vigorously for 30 seconds.\n3. Add ice and shake again until very cold.\n4. Strain into a chilled Collins glass.\n5. Top with soda water and serve immediately.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Cream', quantity: '30', unit: 'ml' },
      { name: 'Egg White', quantity: '2', unit: 'pc' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' },
      { name: 'Soda Water', quantity: '60', unit: 'ml' },
      { name: 'Orange Flower Water', quantity: '3', unit: 'dashes' }
    ]
  },
  {
    id: 26,
    name: 'Rusty Nail',
    description: 'A strong and warming cocktail that combines Scotch whisky with Drambuie, a honey-herbal liqueur. This classic drink is perfect for sipping on cold evenings.',
    emoji: '🍺',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Scotch',
    preparation_time: 3,
    steps: '1. Add Scotch and Drambuie to a rocks glass with ice.\n2. Stir gently to combine.\n3. Garnish with a lemon twist if desired.',
    ingredients: [
      { name: 'Scotch', quantity: '45', unit: 'ml' },
      { name: 'Drambuie', quantity: '22.5', unit: 'ml' }
    ]
  },
  {
    id: 27,
    name: 'Sazerac',
    description: 'The official cocktail of New Orleans, dating back to the 1850s. It features rye whiskey with Peychauds bitters and an absinthe rinse for a complex, aromatic flavor.',
    emoji: '⚜️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 5,
    steps: '1. Rinse a chilled rocks glass with absinthe.\n2. Add rye whiskey, sugar, and Peychauds bitters to a mixing glass with ice.\n3. Stir well until chilled.\n4. Strain into the prepared glass.\n5. Garnish with a lemon peel.',
    ingredients: [
      { name: 'Rye Whiskey', quantity: '60', unit: 'ml' },
      { name: 'Absinthe', quantity: '5', unit: 'ml' },
      { name: 'Peychauds Bitters', quantity: '2', unit: 'dashes' },
      { name: 'Simple Syrup', quantity: '7.5', unit: 'ml' }
    ]
  },
  {
    id: 28,
    name: 'Sidecar',
    description: 'A classic Prohibition-era cocktail that combines cognac with triple sec and lemon juice. It offers a perfect balance of sweet, sour, and strong flavors.',
    emoji: '🚗',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 4,
    steps: '1. Rim a cocktail glass with sugar.\n2. Add all ingredients to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass.\n5. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Cognac', quantity: '50', unit: 'ml' },
      { name: 'Triple Sec', quantity: '20', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 29,
    name: 'Stinger',
    description: 'A smooth and minty after-dinner cocktail that combines cognac with white crème de menthe. This classic drink is both refreshing and warming.',
    emoji: '🌿',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 3,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a rocks glass with ice.\n4. Garnish with a mint sprig if desired.',
    ingredients: [
      { name: 'Cognac', quantity: '50', unit: 'ml' },
      { name: 'Creme de Menthe', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 30,
    name: 'Tuxedo',
    description: 'An elegant and complex cocktail from the early 20th century. It combines gin with various vermouths and liqueurs for a sophisticated, aromatic drink.',
    emoji: '🤵',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry and lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Dry Vermouth', quantity: '30', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Absinthe', quantity: '2', unit: 'dashes' },
      { name: 'Orange Peel', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 31,
    name: 'Vieux Carré',
    description: 'A complex and aromatic cocktail from the French Quarter of New Orleans. It combines rye whiskey, cognac, and sweet vermouth with herbal liqueurs for a rich flavor profile.',
    emoji: '🎭',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a rocks glass with ice.\n4. Garnish with a cherry and lemon twist.',
    ingredients: [
      { name: 'Rye Whiskey', quantity: '30', unit: 'ml' },
      { name: 'Cognac', quantity: '30', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '15', unit: 'ml' },
      { name: 'Benedictine', quantity: '5', unit: 'ml' },
      { name: 'Peychauds Bitters', quantity: '2', unit: 'dashes' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 32,
    name: 'Whiskey Sour',
    description: 'A classic American cocktail that perfectly balances whiskey with lemon juice and sugar. This refreshing drink dates back to the 19th century and remains a crowd favorite.',
    emoji: '🍋',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a rocks glass with ice.\n4. Garnish with a cherry and orange slice.',
    ingredients: [
      { name: 'Bourbon', quantity: '50', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 33,
    name: 'White Lady',
    description: 'A elegant and citrusy cocktail from the 1920s that combines gin with triple sec and lemon juice. This refined drink is known for its crisp, clean flavor.',
    emoji: '👸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '50', unit: 'ml' },
      { name: 'Triple Sec', quantity: '20', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 34,
    name: 'Bellini',
    description: 'A sparkling Italian cocktail that combines Prosecco with peach puree. Created at Harry\'s Bar in Venice, this drink is perfect for brunch or celebrations.',
    emoji: '🍑',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Prosecco',
    preparation_time: 3,
    steps: '1. Add peach puree to a chilled champagne flute.\n2. Slowly pour Prosecco over the puree.\n3. Gently stir to combine.\n4. Serve immediately.',
    ingredients: [
      { name: 'Prosecco', quantity: '100', unit: 'ml' },
      { name: 'Peach Puree', quantity: '50', unit: 'ml' }
    ]
  },
  {
    id: 35,
    name: 'Black Russian',
    description: 'A simple yet strong cocktail that combines vodka with coffee liqueur. Created in the 1940s, this drink is perfect for those who enjoy a bold, coffee-flavored beverage.',
    emoji: '☕',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 3,
    steps: '1. Add vodka and coffee liqueur to a rocks glass with ice.\n2. Stir gently to combine.\n3. Serve without garnish.',
    ingredients: [
      { name: 'Vodka', quantity: '50', unit: 'ml' },
      { name: 'Coffee Liqueur', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 36,
    name: 'Bloody Mary',
    description: 'A savory and refreshing cocktail that is popular as a brunch drink. It combines vodka with tomato juice and various spices for a complex, savory flavor profile.',
    emoji: '🍅',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 5,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake briefly to combine.\n3. Strain into a highball glass with ice.\n4. Garnish with celery stalk and lemon wedge.',
    ingredients: [
      { name: 'Vodka', quantity: '45', unit: 'ml' },
      { name: 'Tomato Juice', quantity: '90', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' },
      { name: 'Worcestershire Sauce', quantity: '2', unit: 'dashes' },
      { name: 'Tabasco', quantity: '1', unit: 'dash' },
      { name: 'Celery Salt', quantity: '1', unit: 'dash' }
    ]
  },
  {
    id: 37,
    name: 'Caipirinha',
    description: 'The national cocktail of Brazil, made with cachaça, sugar, and lime. This refreshing drink is the perfect balance of sweet, sour, and strong flavors.',
    emoji: '🇧🇷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Cachaca',
    preparation_time: 3,
    steps: '1. Add lime and sugar to a rocks glass.\n2. Muddle until lime releases its juice.\n3. Add cachaça and ice.\n4. Stir gently to combine.',
    ingredients: [
      { name: 'Cachaca', quantity: '60', unit: 'ml' },
      { name: 'Lime', quantity: '1', unit: 'pc' },
      { name: 'Sugar', quantity: '4', unit: 'tsp' }
    ]
  },
  {
    id: 38,
    name: 'Champagne Cocktail',
    description: 'An elegant and festive cocktail that combines Champagne with a sugar cube and Angostura bitters. This classic drink is perfect for celebrations and special occasions.',
    emoji: '🥂',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Champagne',
    preparation_time: 3,
    steps: '1. Place a sugar cube in a champagne flute.\n2. Add Angostura bitters to the sugar cube.\n3. Slowly pour chilled Champagne over the sugar.\n4. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Champagne', quantity: '90', unit: 'ml' },
      { name: 'Cognac', quantity: '10', unit: 'ml' },
      { name: 'Sugar', quantity: '1', unit: 'cube' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 39,
    name: 'Corpse Reviver #2',
    description: 'A classic "hair of the dog" cocktail from the 1930s. It combines gin with triple sec, Lillet Blanc, and lemon juice for a refreshing, slightly bitter drink.',
    emoji: '💀',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Triple Sec', quantity: '30', unit: 'ml' },
      { name: 'Lillet Blanc', quantity: '30', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '30', unit: 'ml' },
      { name: 'Absinthe', quantity: '1', unit: 'dash' }
    ]
  },
  {
    id: 40,
    name: 'Cosmopolitan',
    description: 'A stylish and popular cocktail from the 1990s that combines vodka with triple sec, cranberry juice, and lime juice. This pink drink is both sweet and tart.',
    emoji: '💄',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime twist or orange peel.',
    ingredients: [
      { name: 'Vodka', quantity: '40', unit: 'ml' },
      { name: 'Triple Sec', quantity: '15', unit: 'ml' },
      { name: 'Cranberry Juice', quantity: '30', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 41,
    name: 'Cuba Libre',
    description: 'A refreshing and easy-to-make cocktail that combines rum with Coca-Cola and lime. This classic drink is popular worldwide and perfect for casual occasions.',
    emoji: '🇨🇺',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 3,
    steps: '1. Add lime and simple syrup to a Collins glass.\n2. Muddle to release lime juice.\n3. Add rum and ice.\n4. Top with Coca-Cola.\n5. Stir gently to combine.',
    ingredients: [
      { name: 'White Rum', quantity: '50', unit: 'ml' },
      { name: 'Coca-Cola', quantity: '120', unit: 'ml' },
      { name: 'Lime', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 42,
    name: 'French 75',
    description: 'A sparkling and elegant cocktail that combines gin with Champagne, lemon juice, and sugar. Created during World War I, it is named after the powerful French 75mm field gun.',
    emoji: '🇫🇷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add gin, lemon juice, and sugar to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a champagne flute.\n4. Top with Champagne.\n5. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' },
      { name: 'Champagne', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 43,
    name: 'French Connection',
    description: 'A simple yet sophisticated cocktail that combines cognac with amaretto. This two-ingredient drink offers a rich, nutty flavor profile that is perfect for sipping.',
    emoji: '🗼',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 3,
    steps: '1. Add cognac and amaretto to a rocks glass with ice.\n2. Stir gently to combine.\n3. Serve without garnish.',
    ingredients: [
      { name: 'Cognac', quantity: '35', unit: 'ml' },
      { name: 'Amaretto', quantity: '35', unit: 'ml' }
    ]
  },
  {
    id: 44,
    name: 'Golden Dream',
    description: 'A sweet and creamy cocktail from the 1970s that combines Galliano with triple sec, orange juice, and cream. This dessert-like drink is smooth and indulgent.',
    emoji: '✨',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Galliano',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with freshly grated nutmeg.',
    ingredients: [
      { name: 'Galliano', quantity: '20', unit: 'ml' },
      { name: 'Triple Sec', quantity: '20', unit: 'ml' },
      { name: 'Orange Juice', quantity: '20', unit: 'ml' },
      { name: 'Cream', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 45,
    name: 'Grasshopper',
    description: 'A sweet and minty after-dinner cocktail that is bright green in color. It combines crème de menthe, crème de cacao, and cream for a dessert-like treat.',
    emoji: '🦗',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Creme de Menthe',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with freshly grated nutmeg or mint leaf.',
    ingredients: [
      { name: 'Creme de Menthe', quantity: '20', unit: 'ml' },
      { name: 'Creme de Cacao', quantity: '20', unit: 'ml' },
      { name: 'Cream', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 46,
    name: 'Hemingway Special',
    description: 'A refreshing and slightly bitter cocktail that was Ernest Hemingway\'s favorite drink at El Floridita in Havana. It combines rum with grapefruit juice and maraschino liqueur.',
    emoji: '📖',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime wheel.',
    ingredients: [
      { name: 'White Rum', quantity: '60', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Grapefruit Juice', quantity: '40', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 47,
    name: "Horse's Neck",
    description: 'A simple and refreshing highball cocktail that combines brandy with ginger ale. This classic drink is perfect for casual occasions and easy to prepare.',
    emoji: '🐴',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Brandy',
    preparation_time: 3,
    steps: '1. Add brandy to a Collins glass with ice.\n2. Top with ginger ale.\n3. Stir gently.\n4. Garnish with a long lemon peel.',
    ingredients: [
      { name: 'Cognac', quantity: '40', unit: 'ml' },
      { name: 'Ginger Ale', quantity: '120', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 48,
    name: 'Irish Coffee',
    description: 'A warming and comforting cocktail that combines Irish whiskey with hot coffee, sugar, and cream. Created in Ireland in the 1940s, it is perfect for cold weather.',
    emoji: '☕',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Irish Whiskey',
    preparation_time: 5,
    steps: '1. Warm a coffee mug with hot water.\n2. Add Irish whiskey and sugar.\n3. Fill with hot coffee and stir.\n4. Float whipped cream on top.\n5. Do not stir the cream.',
    ingredients: [
      { name: 'Irish Whiskey', quantity: '50', unit: 'ml' },
      { name: 'Hot Coffee', quantity: '120', unit: 'ml' },
      { name: 'Sugar', quantity: '1', unit: 'tsp' },
      { name: 'Cream', quantity: '50', unit: 'ml' }
    ]
  },
  {
    id: 49,
    name: 'Kir',
    description: 'A classic French aperitif that combines white wine with crème de cassis. Named after the mayor of Dijon, this drink is simple, elegant, and refreshing.',
    emoji: '🍷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'White Wine',
    preparation_time: 3,
    steps: '1. Add crème de cassis to a wine glass.\n2. Top with chilled white wine.\n3. Stir gently to combine.\n4. Serve without garnish.',
    ingredients: [
      { name: 'White Wine', quantity: '90', unit: 'ml' },
      { name: 'Creme de Cassis', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 50,
    name: 'Long Island Iced Tea',
    description: 'A potent and refreshing cocktail that combines five different spirits with sour mix and cola. Despite its name, it contains no actual tea.',
    emoji: '🧊',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add all spirits and sour mix to a Collins glass with ice.\n2. Top with cola.\n3. Stir gently to combine.\n4. Garnish with a lemon wedge.',
    ingredients: [
      { name: 'Vodka', quantity: '15', unit: 'ml' },
      { name: 'Gin', quantity: '15', unit: 'ml' },
      { name: 'White Rum', quantity: '15', unit: 'ml' },
      { name: 'Tequila', quantity: '15', unit: 'ml' },
      { name: 'Triple Sec', quantity: '15', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '30', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '20', unit: 'ml' },
      { name: 'Coca-Cola', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 51,
    name: 'Mai Tai',
    description: 'A tropical rum cocktail created in the 1940s in California. It combines dark and light rum with lime juice and orgeat for a complex, fruity flavor.',
    emoji: '🌺',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a rocks glass with crushed ice.\n4. Garnish with a mint sprig and lime wheel.',
    ingredients: [
      { name: 'Amber Jamaican Rum', quantity: '30', unit: 'ml' },
      { name: 'Martinique Rum', quantity: '30', unit: 'ml' },
      { name: 'Lime Juice', quantity: '30', unit: 'ml' },
      { name: 'Orgeat', quantity: '15', unit: 'ml' },
      { name: 'Orange Curacao', quantity: '15', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '7.5', unit: 'ml' }
    ]
  },
  {
    id: 52,
    name: 'Margarita',
    description: 'The most popular tequila cocktail in the world, combining tequila with lime juice and triple sec. Served in a salt-rimmed glass, it is the perfect balance of sweet, sour, and salty.',
    emoji: '🍹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Tequila',
    preparation_time: 4,
    steps: '1. Rim a rocks glass with salt.\n2. Add all ingredients to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass with ice.\n5. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Tequila', quantity: '50', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Triple Sec', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 53,
    name: 'Mimosa',
    description: 'A sparkling and refreshing cocktail that is perfect for brunch. It combines Champagne with orange juice for a light, fruity, and festive drink.',
    emoji: '🍊',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Champagne',
    preparation_time: 3,
    steps: '1. Pour orange juice into a champagne flute.\n2. Slowly top with chilled Champagne.\n3. Gently stir to combine.\n4. Serve immediately.',
    ingredients: [
      { name: 'Champagne', quantity: '75', unit: 'ml' },
      { name: 'Orange Juice', quantity: '75', unit: 'ml' }
    ]
  },
  {
    id: 54,
    name: 'Mint Julep',
    description: 'The official drink of the Kentucky Derby, this refreshing cocktail combines bourbon with fresh mint and sugar. Served in a silver cup, it is the perfect summer beverage.',
    emoji: '🌿',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Bourbon',
    preparation_time: 4,
    steps: '1. Add mint leaves and sugar to a julep cup.\n2. Gently muddle to release mint oils.\n3. Add bourbon and crushed ice.\n4. Stir until the cup is frosted.\n5. Garnish with a generous mint sprig.',
    ingredients: [
      { name: 'Bourbon', quantity: '60', unit: 'ml' },
      { name: 'Mint', quantity: '4', unit: 'sprigs' },
      { name: 'Powdered Sugar', quantity: '1', unit: 'tsp' },
      { name: 'Water', quantity: '2', unit: 'tsp' }
    ]
  },
  {
    id: 55,
    name: 'Mojito',
    description: 'A refreshing Cuban highball that combines white rum with lime, mint, sugar, and soda water. This classic cocktail is perfect for hot summer days.',
    emoji: '🍃',
    image_url: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 5,
    steps: '1. Add mint leaves to a Collins glass.\n2. Gently muddle to release mint oils.\n3. Add lime juice and sugar.\n4. Muddle again briefly.\n5. Fill with ice and add rum.\n6. Top with soda water.\n7. Stir gently and garnish with a mint sprig.',
    ingredients: [
      { name: 'White Rum', quantity: '45', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Sugar', quantity: '2', unit: 'tsp' },
      { name: 'Mint Leaves', quantity: '6', unit: 'leaves' },
      { name: 'Soda Water', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 56,
    name: 'Moscow Mule',
    description: 'A refreshing and spicy cocktail that combines vodka with ginger beer and lime. Served in a copper mug, this drink is perfect for casual occasions.',
    emoji: '🍺',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 3,
    steps: '1. Add vodka and lime juice to a copper mug with ice.\n2. Top with ginger beer.\n3. Stir gently.\n4. Garnish with a lime wedge and mint sprig.',
    ingredients: [
      { name: 'Vodka', quantity: '45', unit: 'ml' },
      { name: 'Ginger Beer', quantity: '120', unit: 'ml' },
      { name: 'Lime Juice', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 57,
    name: 'Pina Colada',
    description: 'A tropical and creamy cocktail that combines rum with coconut cream and pineapple juice. Created in Puerto Rico, this drink is synonymous with vacation and relaxation.',
    emoji: '🍹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a blender with ice.\n2. Blend until smooth.\n3. Pour into a hurricane glass.\n4. Garnish with a pineapple wedge and cherry.',
    ingredients: [
      { name: 'White Rum', quantity: '50', unit: 'ml' },
      { name: 'Coconut Cream', quantity: '30', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '50', unit: 'ml' }
    ]
  },
  {
    id: 58,
    name: 'Pisco Sour',
    description: 'A frothy and refreshing cocktail from South America that combines pisco with lime juice, sugar, and egg white. This drink is known for its smooth, creamy texture.',
    emoji: '🥃',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Pisco',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker without ice.\n2. Dry shake vigorously for 15 seconds.\n3. Add ice and shake again.\n4. Strain into a chilled cocktail glass.\n5. Garnish with Angostura bitters drops.',
    ingredients: [
      { name: 'Pisco', quantity: '60', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '30', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '20', unit: 'ml' },
      { name: 'Egg White', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 59,
    name: 'Sea Breeze',
    description: 'A light and refreshing cocktail that combines vodka with cranberry and grapefruit juices. This popular drink is perfect for summer and beach gatherings.',
    emoji: '🌊',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 3,
    steps: '1. Add vodka and cranberry juice to a highball glass with ice.\n2. Top with grapefruit juice.\n3. Stir gently.\n4. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Vodka', quantity: '40', unit: 'ml' },
      { name: 'Cranberry Juice', quantity: '120', unit: 'ml' },
      { name: 'Grapefruit Juice', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 60,
    name: 'Sex on the Beach',
    description: 'A fruity and refreshing cocktail that combines vodka with peach schnapps, orange juice, and cranberry juice. This popular drink is perfect for summer parties.',
    emoji: '🏖️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 3,
    steps: '1. Add all ingredients to a highball glass with ice.\n2. Stir gently to combine.\n3. Garnish with an orange slice.',
    ingredients: [
      { name: 'Vodka', quantity: '40', unit: 'ml' },
      { name: 'Peach Schnapps', quantity: '20', unit: 'ml' },
      { name: 'Orange Juice', quantity: '40', unit: 'ml' },
      { name: 'Cranberry Juice', quantity: '40', unit: 'ml' }
    ]
  },
  {
    id: 61,
    name: 'Singapore Sling',
    description: 'A complex and fruity cocktail from the Raffles Hotel in Singapore. It combines gin with various fruit juices and liqueurs for a refreshing, tropical flavor.',
    emoji: '🦁',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 5,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a Collins glass with ice.\n4. Top with soda water if desired.\n5. Garnish with a cherry and pineapple wedge.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Cherry Heering', quantity: '15', unit: 'ml' },
      { name: 'Benedictine', quantity: '7.5', unit: 'ml' },
      { name: 'Cointreau', quantity: '7.5', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '15', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '10', unit: 'ml' },
      { name: 'Grenadine', quantity: '7.5', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '1', unit: 'dash' }
    ]
  },
  {
    id: 62,
    name: 'Tequila Sunrise',
    description: 'A beautiful layered cocktail that combines tequila with orange juice and grenadine. The grenadine creates a sunrise effect as it settles at the bottom of the glass.',
    emoji: '🌅',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Tequila',
    preparation_time: 3,
    steps: '1. Add tequila and orange juice to a Collins glass with ice.\n2. Stir gently.\n3. Slowly pour grenadine down the side of the glass.\n4. Do not stir - let the colors layer.\n5. Garnish with an orange slice and cherry.',
    ingredients: [
      { name: 'Tequila', quantity: '45', unit: 'ml' },
      { name: 'Orange Juice', quantity: '90', unit: 'ml' },
      { name: 'Grenadine', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 63,
    name: 'Vesper',
    description: 'A strong and sophisticated cocktail ordered by James Bond in Casino Royale. It combines gin with vodka and Lillet Blanc for a potent, elegant drink.',
    emoji: '🔫',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon peel.',
    ingredients: [
      { name: 'Gin', quantity: '60', unit: 'ml' },
      { name: 'Vodka', quantity: '15', unit: 'ml' },
      { name: 'Lillet Blanc', quantity: '7.5', unit: 'ml' }
    ]
  },
  {
    id: 64,
    name: 'Zombie',
    description: 'A potent tropical cocktail that combines multiple rums with fruit juices and spices. Created in the 1930s, this drink is known for its strong kick and complex flavor.',
    emoji: '🧟',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 5,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a tall glass with ice.\n4. Top with more rum if desired.\n5. Garnish with a mint sprig and fruit.',
    ingredients: [
      { name: 'Jamaican Rum', quantity: '45', unit: 'ml' },
      { name: 'Puerto Rican Rum', quantity: '15', unit: 'ml' },
      { name: 'Gold Rum', quantity: '30', unit: 'ml' },
      { name: 'Overproof Rum', quantity: '20', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '30', unit: 'ml' },
      { name: 'Lime Juice', quantity: '25', unit: 'ml' },
      { name: 'Grapefruit Juice', quantity: '15', unit: 'ml' },
      { name: 'Grenadine', quantity: '10', unit: 'ml' },
      { name: 'Cinnamon Syrup', quantity: '5', unit: 'ml' },
      { name: 'Absinthe', quantity: '2', unit: 'dashes' }
    ]
  },
  {
    id: 65,
    name: 'Barracuda',
    description: 'A tropical and refreshing cocktail that combines rum with Galliano, pineapple juice, and lime. This drink offers a perfect balance of sweet and tart flavors.',
    emoji: '🐟',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a highball glass with ice.\n4. Top with prosecco if desired.\n5. Garnish with a pineapple wedge.',
    ingredients: [
      { name: 'White Rum', quantity: '30', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '60', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '1', unit: 'dash' },
      { name: 'Prosecco', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 66,
    name: "Bee's Knees",
    description: 'A Prohibition-era cocktail that combines gin with honey syrup and lemon juice. The honey masks the harshness of bootleg gin, creating a smooth, sweet, and sour drink.',
    emoji: '🐝',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Gin', quantity: '50', unit: 'ml' },
      { name: 'Honey Syrup', quantity: '15', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 67,
    name: 'Bramble',
    description: 'A modern classic cocktail from the 1980s that combines gin with blackberry liqueur, lemon juice, and sugar. This drink is known for its beautiful dark color and fruity flavor.',
    emoji: '🫐',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add gin, lemon juice, and sugar to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a rocks glass with crushed ice.\n4. Drizzle blackberry liqueur over the top.\n5. Garnish with fresh berries.',
    ingredients: [
      { name: 'Gin', quantity: '45', unit: 'ml' },
      { name: 'Blackberry Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '25', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 68,
    name: 'Canchanchara',
    description: 'A traditional Cuban cocktail from Trinidad that combines rum with lime juice and honey. This simple yet delicious drink is one of the oldest cocktails in Cuba.',
    emoji: '🇨🇺',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 3,
    steps: '1. Add lime juice and honey to a glass.\n2. Muddle to combine.\n3. Add rum and ice.\n4. Stir gently.\n5. Garnish with a lime wheel.',
    ingredients: [
      { name: 'White Rum', quantity: '60', unit: 'ml' },
      { name: 'Lime Juice', quantity: '30', unit: 'ml' },
      { name: 'Honey Syrup', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 69,
    name: "Dark 'n' Stormy",
    description: 'A refreshing and spicy cocktail that combines dark rum with ginger beer. This popular drink originated in Bermuda and is known for its distinctive layered appearance.',
    emoji: '⛈️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 3,
    steps: '1. Add ginger beer to a Collins glass with ice.\n2. Float dark rum on top.\n3. Do not stir - let the rum float.\n4. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Dark Rum', quantity: '60', unit: 'ml' },
      { name: 'Ginger Beer', quantity: '120', unit: 'ml' },
      { name: 'Lime Juice', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 70,
    name: 'Espresso Martini',
    description: 'A modern classic cocktail that combines vodka with coffee liqueur and fresh espresso. Created in the 1980s, this energizing drink is perfect after dinner.',
    emoji: '☕',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake vigorously until well chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with three coffee beans.',
    ingredients: [
      { name: 'Vodka', quantity: '50', unit: 'ml' },
      { name: 'Coffee Liqueur', quantity: '10', unit: 'ml' },
      { name: 'Espresso', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 71,
    name: 'Fernandito',
    description: 'A simple and refreshing cocktail that combines Fernet-Branca with Coca-Cola. Popular in Argentina, this drink is known for its distinctive bitter-sweet flavor.',
    emoji: '🍷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Fernet-Branca',
    preparation_time: 3,
    steps: '1. Add Fernet-Branca to a Collins glass with ice.\n2. Top with Coca-Cola.\n3. Stir gently.\n4. Serve without garnish.',
    ingredients: [
      { name: 'Fernet-Branca', quantity: '45', unit: 'ml' },
      { name: 'Coca-Cola', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 72,
    name: 'French Martini',
    description: 'A sophisticated cocktail that combines vodka with raspberry liqueur and pineapple juice. Despite its name, this drink is shaken, not stirred.',
    emoji: '🇫🇷',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a raspberry if desired.',
    ingredients: [
      { name: 'Vodka', quantity: '45', unit: 'ml' },
      { name: 'Raspberry Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 73,
    name: 'Illegal',
    description: 'A smoky and complex cocktail that combines mezcal with various liqueurs and citrus juices. This modern classic offers a unique balance of sweet, sour, and smoky flavors.',
    emoji: '🚫',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Mezcal',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime wheel.',
    ingredients: [
      { name: 'Mezcal', quantity: '30', unit: 'ml' },
      { name: 'Maraschino Liqueur', quantity: '22.5', unit: 'ml' },
      { name: 'Lime Juice', quantity: '22.5', unit: 'ml' },
      { name: 'Green Chartreuse', quantity: '22.5', unit: 'ml' }
    ]
  },
  {
    id: 74,
    name: 'Lemon Drop',
    description: 'A sweet and sour cocktail that is essentially a lemon-flavored martini. This popular drink combines vodka with triple sec and lemon juice for a refreshing treat.',
    emoji: '🍋',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Rim a cocktail glass with sugar.\n2. Add all ingredients to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass.\n5. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Vodka', quantity: '50', unit: 'ml' },
      { name: 'Triple Sec', quantity: '20', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 75,
    name: 'Naked and Famous',
    description: 'A modern cocktail from the early 2000s that combines mezcal with green Chartreuse, Aperol, and lime juice. This drink offers a perfect balance of smoky, herbal, and citrus flavors.',
    emoji: '🤪',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Mezcal',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime twist.',
    ingredients: [
      { name: 'Mezcal', quantity: '22.5', unit: 'ml' },
      { name: 'Green Chartreuse', quantity: '22.5', unit: 'ml' },
      { name: 'Aperol', quantity: '22.5', unit: 'ml' },
      { name: 'Lime Juice', quantity: '22.5', unit: 'ml' }
    ]
  },
  {
    id: 76,
    name: 'New York Sour',
    description: 'A variation of the classic Whiskey Sour that adds a float of red wine on top. This beautiful layered drink offers a perfect balance of sweet, sour, and fruity flavors.',
    emoji: '🍎',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add bourbon, lemon juice, and sugar to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a rocks glass with ice.\n4. Float red wine on top by pouring over a spoon.\n5. Serve without stirring.',
    ingredients: [
      { name: 'Bourbon', quantity: '60', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' },
      { name: 'Red Wine', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 77,
    name: 'Old Cuban',
    description: 'A modern classic cocktail that combines rum with lime juice, sugar, and Champagne. This elegant drink is like a sparkling Mojito with added sophistication.',
    emoji: '👴',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add rum, lime juice, sugar, and bitters to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a champagne flute.\n4. Top with Champagne.\n5. Garnish with a mint sprig.',
    ingredients: [
      { name: 'Dark Rum', quantity: '45', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '15', unit: 'ml' },
      { name: 'Angostura Bitters', quantity: '2', unit: 'dashes' },
      { name: 'Champagne', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 78,
    name: 'Paloma',
    description: 'The most popular tequila cocktail in Mexico, combining tequila with grapefruit soda and lime. This refreshing drink is perfect for hot summer days.',
    emoji: '🕊️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Tequila',
    preparation_time: 3,
    steps: '1. Rim a Collins glass with salt.\n2. Add tequila and lime juice to the glass with ice.\n3. Top with grapefruit soda.\n4. Stir gently.\n5. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Tequila', quantity: '50', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Soda Water', quantity: '120', unit: 'ml' },
      { name: 'Grapefruit Juice', quantity: '30', unit: 'ml' },
      { name: 'Salt', quantity: '1', unit: 'pinch' }
    ]
  },
  {
    id: 79,
    name: 'Paper Plane',
    description: 'A modern cocktail from the 2000s that combines bourbon with Aperol, Amaro Nonino, and lemon juice. This drink offers a perfect balance of sweet, bitter, and sour flavors.',
    emoji: '✈️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Bourbon',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist if desired.',
    ingredients: [
      { name: 'Bourbon', quantity: '22.5', unit: 'ml' },
      { name: 'Aperol', quantity: '22.5', unit: 'ml' },
      { name: 'Amaro Nonino', quantity: '22.5', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '22.5', unit: 'ml' }
    ]
  },
  {
    id: 80,
    name: 'Penicillin',
    description: 'A modern classic cocktail from the 2000s that combines scotch with lemon juice, honey-ginger syrup, and an Islay scotch float. This drink is both warming and refreshing.',
    emoji: '💊',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Scotch',
    preparation_time: 4,
    steps: '1. Add blended scotch, lemon juice, and honey-ginger syrup to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a rocks glass with ice.\n4. Float Islay scotch on top.\n5. Garnish with a ginger slice.',
    ingredients: [
      { name: 'Scotch', quantity: '50', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '25', unit: 'ml' },
      { name: 'Honey-Ginger Syrup', quantity: '25', unit: 'ml' },
      { name: 'Islay Scotch', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 81,
    name: 'Russian Spring Punch',
    description: 'A refreshing and fruity cocktail that combines vodka with raspberry liqueur, lemon juice, and soda water. This light drink is perfect for spring and summer.',
    emoji: '🌸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add vodka, raspberry liqueur, and lemon juice to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a Collins glass with ice.\n4. Top with soda water.\n5. Garnish with a lemon wheel.',
    ingredients: [
      { name: 'Vodka', quantity: '40', unit: 'ml' },
      { name: 'Raspberry Liqueur', quantity: '20', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '20', unit: 'ml' },
      { name: 'Soda Water', quantity: '60', unit: 'ml' }
    ]
  },
  {
    id: 82,
    name: 'Spicy Fifty',
    description: 'A modern cocktail that combines vodka with elderflower liqueur, lime juice, and chili. This drink offers a unique balance of sweet, sour, and spicy flavors.',
    emoji: '🌶️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a chili pepper or lime twist.',
    ingredients: [
      { name: 'Vodka', quantity: '40', unit: 'ml' },
      { name: 'Elderflower Liqueur', quantity: '15', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 83,
    name: 'Spritz (Aperol Spritz)',
    description: 'An iconic Italian aperitif that combines Aperol with Prosecco and soda water. This light and refreshing drink is perfect for warm weather and social occasions.',
    emoji: '🥂',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Aperol',
    preparation_time: 3,
    steps: '1. Add Aperol to a wine glass with ice.\n2. Top with Prosecco.\n3. Add a splash of soda water.\n4. Stir gently.\n5. Garnish with an orange slice.',
    ingredients: [
      { name: 'Aperol', quantity: '60', unit: 'ml' },
      { name: 'Prosecco', quantity: '90', unit: 'ml' },
      { name: 'Soda Water', quantity: '30', unit: 'ml' }
    ]
  },
  {
    id: 84,
    name: 'Suffering Bastard',
    description: 'A refreshing and ginger-flavored cocktail that combines gin with bourbon, ginger beer, and lime. Created in Cairo during World War II, it is perfect for hot weather.',
    emoji: '🐪',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 4,
    steps: '1. Add gin, bourbon, and lime juice to a Collins glass with ice.\n2. Top with ginger beer.\n3. Stir gently.\n4. Garnish with a mint sprig and lime wedge.',
    ingredients: [
      { name: 'Gin', quantity: '30', unit: 'ml' },
      { name: 'Bourbon', quantity: '30', unit: 'ml' },
      { name: 'Ginger Beer', quantity: '120', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 85,
    name: 'Tipperary',
    description: 'An Irish cocktail that combines whiskey with sweet vermouth and green Chartreuse. This balanced drink offers a complex mix of herbal and sweet flavors.',
    emoji: '☘️',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Whiskey',
    preparation_time: 4,
    steps: '1. Add all ingredients to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a cherry.',
    ingredients: [
      { name: 'Irish Whiskey', quantity: '50', unit: 'ml' },
      { name: 'Sweet Vermouth', quantity: '25', unit: 'ml' },
      { name: 'Green Chartreuse', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 86,
    name: "Tommy's Margarita",
    description: 'A simplified version of the classic Margarita that replaces triple sec with agave syrup. Created by Julio Bermejo in San Francisco, it highlights the tequila flavor.',
    emoji: '🍹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Tequila',
    preparation_time: 4,
    steps: '1. Rim a rocks glass with salt.\n2. Add tequila, lime juice, and agave syrup to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass with ice.\n5. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Tequila', quantity: '60', unit: 'ml' },
      { name: 'Lime Juice', quantity: '30', unit: 'ml' },
      { name: 'Agave Syrup', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 87,
    name: 'Trinidad Sour',
    description: 'A bold and unique cocktail that uses Angostura bitters as the base spirit. This intense drink combines bitters with orgeat and lemon juice for a complex flavor profile.',
    emoji: '🇹🇹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Angostura Bitters',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lemon twist.',
    ingredients: [
      { name: 'Angostura Bitters', quantity: '45', unit: 'ml' },
      { name: 'Orgeat', quantity: '20', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' },
      { name: 'Rye Whiskey', quantity: '7.5', unit: 'ml' }
    ]
  },
  {
    id: 88,
    name: 'Yellow Bird',
    description: 'A tropical cocktail from the Caribbean that combines rum with Galliano, triple sec, and lime juice. This fruity drink is perfect for beach parties and summer gatherings.',
    emoji: '🐤',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime wheel.',
    ingredients: [
      { name: 'White Rum', quantity: '30', unit: 'ml' },
      { name: 'Galliano', quantity: '15', unit: 'ml' },
      { name: 'Triple Sec', quantity: '15', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' }
    ]
  },
  {
    id: 89,
    name: "Pimm's Cup",
    description: 'A classic British summer drink that combines Pimm\'s No. 1 with lemonade and fresh fruit. This refreshing cocktail is a staple at Wimbledon and garden parties.',
    emoji: '🍸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Pimms No 1',
    preparation_time: 4,
    steps: '1. Add Pimm\'s to a Collins glass with ice.\n2. Top with lemonade.\n3. Add sliced cucumber, strawberries, and orange.\n4. Stir gently.\n5. Garnish with a mint sprig.',
    ingredients: [
      { name: 'Pimms No 1', quantity: '50', unit: 'ml' },
      { name: 'Lemonade', quantity: '150', unit: 'ml' },
      { name: 'Cucumber', quantity: '3', unit: 'slices' }
    ]
  },
  {
    id: 90,
    name: 'Rum Punch',
    description: 'A tropical and fruity cocktail that combines multiple rums with fruit juices and grenadine. This classic party drink is perfect for large gatherings.',
    emoji: '🍹',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Rum',
    preparation_time: 4,
    steps: '1. Add all ingredients to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a Collins glass with ice.\n4. Top with soda water if desired.\n5. Garnish with a fruit slice.',
    ingredients: [
      { name: 'White Rum', quantity: '30', unit: 'ml' },
      { name: 'Dark Rum', quantity: '30', unit: 'ml' },
      { name: 'Orange Juice', quantity: '30', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '30', unit: 'ml' },
      { name: 'Lime Juice', quantity: '15', unit: 'ml' },
      { name: 'Grenadine', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 91,
    name: 'Gimlet',
    description: 'A simple and classic cocktail that combines gin with lime juice. This refreshing drink dates back to the British Royal Navy and remains a timeless favorite.',
    emoji: '🍸',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Gin',
    preparation_time: 3,
    steps: '1. Add gin and lime juice to a mixing glass with ice.\n2. Stir well until chilled.\n3. Strain into a chilled cocktail glass.\n4. Garnish with a lime wheel.',
    ingredients: [
      { name: 'Gin', quantity: '60', unit: 'ml' },
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Simple Syrup', quantity: '10', unit: 'ml' }
    ]
  },
  {
    id: 92,
    name: 'Screwdriver',
    description: 'A simple and popular cocktail that combines vodka with orange juice. This easy-to-make drink is perfect for brunch and casual occasions.',
    emoji: '🪛',
    image_url: '',
    is_alcoholic: true,
    base_spirit: 'Vodka',
    preparation_time: 3,
    steps: '1. Add vodka to a highball glass with ice.\n2. Top with orange juice.\n3. Stir gently.\n4. Garnish with an orange slice.',
    ingredients: [
      { name: 'Vodka', quantity: '50', unit: 'ml' },
      { name: 'Orange Juice', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 93,
    name: 'Virgin Mojito',
    description: 'A refreshing non-alcoholic take on the Cuban classic. Combines lime, mint, sugar, and soda water for a crisp, hydrating drink perfect for any occasion.',
    emoji: '🌿',
    image_url: 'https://placehold.co/800x800/5BBCBF/ffffff?text=Virgin+Mojito&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 5,
    steps: '1. Add mint leaves to a Collins glass.\n2. Gently muddle to release mint oils.\n3. Add lime juice and sugar.\n4. Muddle again briefly.\n5. Fill with ice and top with soda water.\n6. Stir gently and garnish with a mint sprig.',
    ingredients: [
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Sugar', quantity: '2', unit: 'tsp' },
      { name: 'Mint Leaves', quantity: '6', unit: 'leaves' },
      { name: 'Soda Water', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 94,
    name: 'Shirley Temple',
    description: 'A sweet and fizzy mocktail made with ginger ale, grenadine, and orange juice. A classic choice for kids and non-drinkers alike.',
    emoji: '🍒',
    image_url: 'https://placehold.co/800x800/FF6B6B/ffffff?text=Shirley+Temple&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 3,
    steps: '1. Fill a highball glass with ice.\n2. Add grenadine and orange juice.\n3. Top with ginger ale.\n4. Stir gently.\n5. Garnish with a maraschino cherry and orange slice.',
    ingredients: [
      { name: 'Ginger Ale', quantity: '120', unit: 'ml' },
      { name: 'Grenadine', quantity: '10', unit: 'ml' },
      { name: 'Orange Juice', quantity: '30', unit: 'ml' },
      { name: 'Maraschino Cherry', quantity: '1', unit: 'pc' }
    ]
  },
  {
    id: 95,
    name: 'Virgin Pi\u00f1a Colada',
    description: 'A tropical and creamy mocktail that combines coconut cream and pineapple juice. All the flavor of the classic without the rum.',
    emoji: '🥥',
    image_url: 'https://placehold.co/800x800/F7DC6F/ffffff?text=Virgin+Pi%C3%B1a+Colada&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 4,
    steps: '1. Add coconut cream and pineapple juice to a blender with ice.\n2. Blend until smooth.\n3. Pour into a hurricane glass.\n4. Garnish with a pineapple wedge and cherry.',
    ingredients: [
      { name: 'Coconut Cream', quantity: '60', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '90', unit: 'ml' }
    ]
  },
  {
    id: 96,
    name: 'Virgin Mary',
    description: 'A savory and refreshing mocktail made with tomato juice, lemon juice, and spices. The brunch classic without the vodka.',
    emoji: '🍅',
    image_url: 'https://placehold.co/800x800/E74C3C/ffffff?text=Virgin+Mary&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 5,
    steps: '1. Add tomato juice, lemon juice, Worcestershire sauce, and hot sauce to a shaker with ice.\n2. Shake briefly to combine.\n3. Strain into a highball glass with ice.\n4. Garnish with celery stalk and lemon wedge.',
    ingredients: [
      { name: 'Tomato Juice', quantity: '150', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '15', unit: 'ml' },
      { name: 'Worcestershire Sauce', quantity: '2', unit: 'dashes' },
      { name: 'Tabasco', quantity: '1', unit: 'dash' },
      { name: 'Celery Salt', quantity: '1', unit: 'dash' }
    ]
  },
  {
    id: 97,
    name: 'Arnold Palmer',
    description: 'A refreshing half-and-half blend of iced tea and lemonade. Named after the legendary golfer, it is the perfect non-alcoholic refresher.',
    emoji: '🍋',
    image_url: 'https://placehold.co/800x800/8BC34A/ffffff?text=Arnold+Palmer&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 3,
    steps: '1. Fill a highball glass with ice.\n2. Add equal parts chilled iced tea and lemonade.\n3. Stir gently to combine.\n4. Garnish with a lemon slice.',
    ingredients: [
      { name: 'Iced Tea', quantity: '120', unit: 'ml' },
      { name: 'Lemonade', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 98,
    name: 'Seedlip & Tonic',
    description: 'A sophisticated non-alcoholic spirit serve. Seedlip Garden with tonic water and a fresh herb garnish.',
    emoji: '🌱',
    image_url: 'https://placehold.co/800x800/4A90E2/ffffff?text=Seedlip+Tonic&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 3,
    steps: '1. Fill a highball glass with ice.\n2. Add Seedlip Garden.\n3. Top with tonic water.\n4. Stir gently.\n5. Garnish with a rosemary sprig and cucumber slice.',
    ingredients: [
      { name: 'Seedlip Garden', quantity: '50', unit: 'ml' },
      { name: 'Tonic Water', quantity: '120', unit: 'ml' }
    ]
  },
  {
    id: 99,
    name: 'Cinderella',
    description: 'A fruity and vibrant mocktail that blends orange juice, pineapple juice, lemon juice, and grenadine. A colorfully layered non-alcoholic drink.',
    emoji: '🍊',
    image_url: 'https://placehold.co/800x800/FF9800/ffffff?text=Cinderella&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 4,
    steps: '1. Add all juices to a shaker with ice.\n2. Shake well until chilled.\n3. Strain into a highball glass with ice.\n4. Add a splash of grenadine for color.\n5. Garnish with an orange slice and cherry.',
    ingredients: [
      { name: 'Orange Juice', quantity: '60', unit: 'ml' },
      { name: 'Pineapple Juice', quantity: '60', unit: 'ml' },
      { name: 'Lemon Juice', quantity: '30', unit: 'ml' },
      { name: 'Grenadine', quantity: '15', unit: 'ml' }
    ]
  },
  {
    id: 100,
    name: 'Virgin Margarita',
    description: 'A tangy and refreshing mocktail that combines lime juice, agave syrup, and orange juice, served in a salt-rimmed glass.',
    emoji: '🍹',
    image_url: 'https://placehold.co/800x800/FFD700/ffffff?text=Virgin+Margarita&font=noto',
    is_alcoholic: false,
    base_spirit: 'None',
    preparation_time: 4,
    steps: '1. Rim a rocks glass with salt.\n2. Add lime juice, agave syrup, and orange juice to a shaker with ice.\n3. Shake well until chilled.\n4. Strain into the prepared glass with ice.\n5. Garnish with a lime wedge.',
    ingredients: [
      { name: 'Lime Juice', quantity: '20', unit: 'ml' },
      { name: 'Agave Syrup', quantity: '15', unit: 'ml' },
      { name: 'Orange Juice', quantity: '30', unit: 'ml' }
    ]
  }
];
export default COCKTAILS;