// Sample menu data
const weeklyMenu = {
    monday: [
      { name: "Pizza", price: "$13" },
      { name: "Salad", price: "$8" },
      { name: "Burger (Chickpea)", price: "$12" },
      { name: "Natural Juices", price: "$7" }
    ],
    tuesday: [
      { name: "Tacos", price: "$10" },
      { name: "Wraps", price: "$9" },
      { name: "Sorrell", price: "$7" },
    ],
    wednesday: [
        { name: "Wild Rice + Okra", price: "$15/$20" },
        { name: "Pasta", price: "$15/$20" },
        { name: "Chana & Quinoa", price: "$15/$20" },
        { name: "Pumpkin Stew", price: "$15/$20" },
        { name: "Toss Salad", price: "$15" },
        { name: "Natural Juices", price: "$7" }
    ],
    thursday: [
      { name: "Pizza", price: "$13" },
      { name: "Burger (Quinoa)", price: "$12" },
      { name: "Double Burger", price: "$14" },
      { name: "Natural Juices", price: "$7" }
    ],
    friday: [
        { name: "Wild Rice + Okra", price: "$15/$20" },
        { name: "Alfredo Pasta", price: "$15/$20" },
        { name: "Chana & Quinoa", price: "$15/$20" },
        { name: "Veg Stew", price: "$15/$20" },
        { name: "Toss Salad", price: "$15" },
        { name: "Sorrel & Lime Drinks", price: "$7" }
    ],
    saturday: [
      { name: "Pizza (Half/Whole)", price: "$13/$25" },
      { name: "Burgers (Chickpea/Quinoa)", price: "$12" },
      { name: "Double Burgers", price: "$14" },
      { name: "Mushroom Wraps", price: "$14" },
      { name: "Tofu/Mushroom Wraps", price: "$12" },
      { name: "Tofu Burger Combo", price: "$12" },
      { name: "Tofu Sandwich", price: "$10" },
      { name: "Sorrell", price: "$7" }
    ]
  };

// Get the menu container from the DOM
const menuContainer = document.getElementById('menu');

// Function to to display the selected day's menu
function showMenu(day) {
    // Get the menu items for the selected day
    const menuItems = weeklyMenu[day];
}

// Clear the previous menu
menuContainer.innerHTML = ''; 

// Loop through menuItems and display each one
menuItems.forEach(item => {
    // Create a div for each menu item
    const menuItemDiv = document.createElement('div');
    menuItems.classList.add('menu-item');
});  

// Get the menu items for the day
const menuItems = weeklyMenu.monday;

// Add the item name and price
menuItems.innerHTML = `
    <p>${item.name}</p>
    <p>${item.price}</p>
`;

// Append the menu item to the menu container
menuContainer.appendChild(menuItems);

// Show Saturday's menu by default on page load
window.onload = function() {
    showMenu('saturday');
}   