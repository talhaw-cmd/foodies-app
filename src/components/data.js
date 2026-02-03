const restaurantData = [
  // --- FAST FOOD (Verified) ---
  { id: 1, name: "Beef Burger", category: "Fast Food", price: 750, rating: 4.8, image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg", description: "Classic beef patty with cheese and toasted buns." },
  { id: 2, name: "Pepperoni Pizza", category: "Fast Food", price: 1200, rating: 4.7, image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg", description: "Hot pizza topped with pepperoni slices and melted cheese." },
  { id: 3, name: "French Fries", category: "Fast Food", price: 300, rating: 4.5, image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg", description: "Golden crispy potato fries with sea salt." },
  { id: 4, name: "Club Sandwich", category: "Fast Food", price: 550, rating: 4.4, image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg", description: "Multi-layered sandwich with chicken, lettuce, and egg." },
  { id: 5, name: "Chicken Nuggets", category: "Fast Food", price: 450, rating: 4.3, image: "https://images.pexels.com/photos/6061398/pexels-photo-6061398.jpeg", description: "Crispy breaded chicken bites served with dip." },
  { id: 6, name: "Hot Dog", category: "Fast Food", price: 400, rating: 4.2, image: "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg", description: "Grilled sausage in a bun with mustard and ketchup." },

  // --- MAIN COURSE & STEAKS ---
  { id: 7, name: "Grilled Salmon", category: "Main Course", price: 2200, rating: 4.9, image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg", description: "Pan-seared salmon fillet with lemon and herbs." },
  { id: 8, name: "Beef Steak", category: "Main Course", price: 2800, rating: 4.8, image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg", description: "Juicy grilled steak served with garlic butter." },
  { id: 9, name: "Roasted Chicken", category: "Main Course", price: 1400, rating: 4.7, image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg", description: "Tender whole roasted chicken with crispy skin." },
  { id: 10, name: "Lamb Chops", category: "Main Course", price: 2600, rating: 4.8, image: "https://images.pexels.com/photos/17342805/pexels-photo-17342805.jpeg", description: "Succulent grilled lamb chops with rosemary." },

  // --- PASTA ---
  { id: 11, name: "Spaghetti", category: "Pasta", price: 850, rating: 4.6, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", description: "Italian pasta with tomato sauce and basil." },
  { id: 12, name: "Fettuccine Alfredo", category: "Pasta", price: 950, rating: 4.5, image: "https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg", description: "Creamy white sauce pasta with parmesan." },
  { id: 13, name: "Lasagna", category: "Pasta", price: 1100, rating: 4.7, image: "https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg", description: "Layered pasta with beef and bechamel sauce." },

  // --- BREAKFAST ---
  { id: 14, name: "Pancakes", category: "Breakfast", price: 600, rating: 4.7, image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", description: "Fluffy pancakes topped with honey and berries." },
  { id: 15, name: "Avocado Toast", category: "Breakfast", price: 500, rating: 4.6, image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg", description: "Toasted sourdough with mashed avocado and egg." },
  { id: 16, name: "Waffles", category: "Breakfast", price: 550, rating: 4.5, image: "https://images.pexels.com/photos/1510682/pexels-photo-1510682.jpeg", description: "Belgian waffles with chocolate drizzle." },

  // --- SALADS ---
  { id: 17, name: "Caesar Salad", category: "Salads", price: 650, rating: 4.5, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", description: "Fresh romaine lettuce with croutons and dressing." },
  { id: 18, name: "Greek Salad", category: "Salads", price: 600, rating: 4.4, image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg", description: "Salad with feta cheese, olives, and cucumbers." },

  // --- JAPANESE & SEAFOOD ---
  { id: 19, name: "Sushi Platter", category: "Japanese", price: 2500, rating: 4.9, image: "https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg", description: "Assorted fresh sushi and maki rolls." },
  { id: 20, name: "Shrimp Scampi", category: "Seafood", price: 1800, rating: 4.6, image: "https://images.pexels.com/photos/5695932/pexels-photo-5695932.jpeg", description: "Garlic butter shrimp served with herbs." },

  // --- DESSERTS ---
  { id: 21, name: "Chocolate Cake", category: "Dessert", price: 700, rating: 4.8, image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg", description: "Rich dark chocolate cake slice." },
  { id: 22, name: "Cheesecake", category: "Dessert", price: 750, rating: 4.7, image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg", description: "Creamy cheesecake with a berry glaze." },
  { id: 23, name: "Macarons", category: "Dessert", price: 800, rating: 4.6, image: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg", description: "Sweet and colorful French macarons." },
  { id: 24, name: "Ice Cream Scoop", category: "Dessert", price: 300, rating: 4.5, image: "https://images.pexels.com/photos/1352245/pexels-photo-1352245.jpeg", description: "Pure vanilla ice cream with mint leaf." },

  // --- BEVERAGES ---
  { id: 25, name: "Cappuccino", category: "Beverages", price: 400, rating: 4.6, image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg", description: "Hot coffee with frothed milk and art." },
  { id: 26, name: "Orange Juice", category: "Beverages", price: 350, rating: 4.7, image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg", description: "Freshly squeezed natural orange juice." },
  { id: 27, name: "Iced Tea", category: "Beverages", price: 300, rating: 4.4, image: "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg", description: "Chilled lemon-flavored iced tea." },
  { id: 28, name: "Smoothie Bowl", category: "Beverages", price: 600, rating: 4.5, image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg", description: "Thick fruit smoothie with granola toppings." },

  // --- STARTERS ---
  { id: 29, name: "Garlic Bread", category: "Starters", price: 250, rating: 4.3, image: "https://images.pexels.com/photos/7190367/pexels-photo-7190367.jpeg", description: "Buttery toasted bread with garlic seasoning." },
  { id: 30, name: "Tomato Soup", category: "Starters", price: 450, rating: 4.5, image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg", description: "Warm and creamy roasted tomato soup." }
];

export default restaurantData;