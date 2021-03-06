const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/spikesseafood",
  {
    useMongoClient: true
  }
);

const menuSeed = [
  {
    category: 'appetizer',
    item: 'Lobster Chowder',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Jambalaya with Rice',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Lobster Bisque',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clam Chowder - Red',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clam Chowder - White',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Raw 1/2 Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Raw Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Steamed 1/2 Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Steamed Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Raw Oysters 1/2 Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Raw Oysters Doz',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Stuffed Crab',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Stuffed Scallop',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Crabcake',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'King Crab Leg',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Snow Crab',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mini Carbcake',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Dry Scallop',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Tossed Mixed Green Salad',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Wedge of Iceberg Lettuce',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Smoked Fish Wasabi',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Spikes Appetizer',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Pot of Steamers',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: '1/2 Pot of Steamers',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Bowl of Peel and Eat Shrimp',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Shrimp Cocktail',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Shrimp Stuffed Potato',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Oreganato',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Broiled Garlic Clams',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Clams Casino',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Spikes Garlic Bread',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Spikes Garlic Bread with Mozzarella Cheese',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mussels with Garlic 1/2 order',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mussels with Marinara 1/2 order',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mussels Steamed with garlic full order',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mussels in saffron cream sauce',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Mushrooms stuffed with crabmeat',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'appetizer',
    item: 'Dry Scallops wrapped with bacon',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Stuffed Shrimp Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Fish of The Day',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Steamed Lobster Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Lobster Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Lobster Tail Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Shrimp Parmigiana with Pasta',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Cajun Style Shrimp with Rice',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Shrimp Scampi with Rice',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Shrimp',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Dry Scallops',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Shrimp and Dry Scallops',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Sauteed Flounder Francaise',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Flounder Stuffed with Jumbo Lump Crabmeat',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Crab Cake Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Broiled Seafood Combo',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Cajun Seafood Combo',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Cold Seafood Combo',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Linguine with Red or White Clam Sauce',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Mussels Marinara over Linguine',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Chicken Parmigiana or Francaise',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Dungeness Crab Dinner',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'Snow Crab',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'entrees',
    item: 'King Crab Legs',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Fresh Shrimp Salad Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Fresh Lobster Salad Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Tuns Salad Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Crab Cake Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Fresh Breast of Chicken Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Fresh Flounder Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Tuna Melt Platter',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Maui Burger',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Maui Burger Blackened',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Wasabi Burger',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Wasabi Burger Blackened',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Lobster Roll',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Tomato Stuffed with Shrimp Salad',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Shrimp Salad over Greens',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Lobster Salad Over Greens',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Tomato Stuffed Tuna Salad or Over Greens',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Soft Shell Crab Sandwich',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'sandwiches',
    item: 'Lobster Melt',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'beverages',
    item: 'Coffee',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'beverages',
    item: 'Tea',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'beverages',
    item: 'Iced Tea Fresh Brewed',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'beverages',
    item: 'Cola Diet Cola Root Beer Sprite',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'beverages',
    item: 'Lemonade or Seltzer',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Key Lime Pie',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Swedish Apple Pie',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Chocolate Mousse Pie',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Pecan Pie',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Coconut Mousse Pie',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'desserts',
    item: 'Jello',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'childrens',
    item: 'Fillet of Fish',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'childrens',
    item: 'Chicken Breast',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'childrens',
    item: 'Bowl of Spaghetti with Marinara Sauce',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'childrens',
    item: 'Broiled Shrimp',
    status: 'A',
    date: new Date(Date.now())
  },
  {
    category: 'childrens',
    item: 'Grilled Cheese Mozzarella or Cheddar',
    status: 'A',
    date: new Date(Date.now())
  }
];

// const specialSeed = [
//   {
//     title: 'special',
//     description: 'Grilled Cheese Mozzarella or Cheddar',
//     meal: 'lunch',
//     dateoffered: '20180101',
//     date: new Date(Date.now())
//   }

// ]

db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Special
//   .remove({})
//   .then(() => db.Special.collection.insertMany(specialSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
