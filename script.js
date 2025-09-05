// Sample recipe data
const recipes = 
   [
  {
    id: 1,
    name: "Paneer Butter Masala",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Rich and creamy curry made with paneer, butter, and tomato gravy.",
    ingredients: "Paneer, butter, tomatoes, cream, onions, garlic, ginger, garam masala",
    image: "https://sandhyahariharan.co.uk/wp-content/uploads/2022/07/paneer-butter-masala-2.jpg"
  },
  {
    id: 3,
    name: "Masala Dosa",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-60",
    description: "Crispy rice crepe stuffed with spiced potato filling, served with chutney and sambar.",
    ingredients: "Rice, urad dal, potatoes, curry leaves, green chilies, mustard seeds",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gPSMIK3sUiRUDNve5tgZh2FrCEAgpxb-tw&s"
  },
  {
    id: 4,
    name: "Chole Bhature",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-60",
    description: "Fried fluffy bread served with spicy chickpea curry.",
    ingredients: "Chickpeas, flour, onions, tomatoes, ginger, garlic, garam masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qZYqLr9OgwtfLJkC1ETQUn4oS__y5tjYBQ&s"
  },
  {
    id: 6,
    name: "Idli Sambar",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Steamed rice cakes served with spicy lentil stew and coconut chutney.",
    ingredients: "Rice, urad dal, toor dal, tamarind, curry leaves, coconut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR_wP79RQXv1rShNTWgPHDtxnqnRfboBLdQ&s"
  },
  {
    id: 8,
    name: "Aloo Paratha",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Stuffed whole wheat bread with spiced potato filling, served with butter or yogurt.",
    ingredients: "Wheat flour, potatoes, green chilies, onions, butter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxueufrBj0wynq0knzDYAqTIfVMo7-uk-icg&s"
  },
  {
    id: 10,
    name: "Pav Bhaji",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Spiced mashed vegetable curry served with buttered bread rolls.",
    ingredients: "Potatoes, tomatoes, peas, capsicum, butter, pav bread",
    image: "https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900"
  },
  {
    id: 11,
    name: "Dal Tadka",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Yellow lentils cooked and tempered with ghee, garlic, and red chilies.",
    ingredients: "Toor dal, ghee, garlic, cumin, onions, tomatoes",
    image: "https://i0.wp.com/www.dhabastyle.com/wp-content/uploads/2017/04/maxresdefault-1.jpg?fit=1100%2C619&ssl=1"
  },
  {
    id: 13,
    name: "Pani Puri",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Crispy puris filled with spicy tangy water and potato stuffing.",
    ingredients: "Sooji, potatoes, tamarind, mint, green chilies, chickpeas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorqQfvieS0ikzzKGuxNL9kkj52CTGVtA0CA&s"
  },
  {
    id: 15,
    name: "Vegetable Pulao",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Fragrant rice dish cooked with vegetables and spices.",
    ingredients: "Basmati rice, carrots, beans, peas, onions, bay leaves, cloves",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh8JwS9wEk8r2un31eZJtUqoEIveNLTHibg&s"
  },
  {
    id: 17,
    name: "Dhokla",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Steamed savory cake made with gram flour, popular in Gujarat.",
    ingredients: "Gram flour, yogurt, lemon juice, green chili, mustard seeds, curry leaves",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Dhokla_on_Gujrart.jpg"
  },
  {
    id: 18,
    name: "Palak Paneer",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-45",
    description: "Paneer cubes cooked in a smooth spinach gravy.",
    ingredients: "Paneer, spinach, onions, garlic, ginger, green chilies",
    image: "https://www.chefajaychopra.com/assets/img/recipe/1-1666433552palakpaneer1webp.webp"
  },
  {
    id: 19,
    name: "Vada Pav",
    cuisine: "indian",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Mumbai’s famous street food made with spicy potato fritter in bread bun.",
    ingredients: "Potatoes, gram flour, pav bread, garlic chutney, green chilies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4Bg-PSNOU142m2TooCDwaXqYrCJsV5vHnQ&s"
  },
  {
    id: 20,
    name: "Goan Prawn Curry",
    cuisine: "indian",
    diet: "non-vegetarian",
    prepTime: "under-45",
    description: "Spicy and tangy curry made with prawns and coconut milk.",
    ingredients: "Prawns, coconut milk, tamarind, curry leaves, green chilies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9aNawBQ5AuNbJA689MGVPfw60uH6gJ9afw&s"
  }


];

let filteredRecipes = [...recipes];

// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const cuisineSelect = document.getElementById('cuisine');
const dietSelect = document.getElementById('diet');
const prepTimeSelect = document.getElementById('prep-time');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displayRecipes(recipes);
  setupNavigation();
});

// Navigation functionality
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Scroll to section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Update active link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Scroll to explore section
function scrollToExplore() {
  document.getElementById('explore').scrollIntoView({
    behavior: 'smooth'
  });
}

// Display recipes in the grid
function displayRecipes(recipesToShow) {
  recipesGrid.innerHTML = '';
  
  if (recipesToShow.length === 0) {
    recipesGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: var(--color-secondary);">No recipes found matching your criteria.</p>';
    return;
  }
  
  recipesToShow.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    recipesGrid.appendChild(recipeCard);
  });
}

// Create individual recipe card
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  
  const prepTimeText = {
    'under-30': 'Under 30 min',
    '30-60': '30-60 min',
    'over-60': 'Over 60 min'
  };
  
  const cuisineText = recipe.cuisine === 'all' ? 'Mixed' : recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
  const dietText = recipe.diet === 'all' ? 'Any diet' : recipe.diet.charAt(0).toUpperCase() + recipe.diet.slice(1);
  
  card.innerHTML = `
    <div class="recipe-image-container">
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" 
           onerror="this.src='https://via.placeholder.com/400x300/e5d0ac/6d2323?text=Recipe+Image'">
    </div>
    <div class="recipe-content">
      <h3>${recipe.name}</h3>
      <div class="recipe-meta">
        <span>${cuisineText}</span>
        <span>${dietText}</span>
        <span>${prepTimeText[recipe.prepTime]}</span>
      </div>
      <p class="recipe-description">${recipe.description}</p>
      <p class="recipe-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients}</p>
    </div>
  `;
  
  return card;
}

// Search functionality
function searchRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  applyFilters(searchTerm);
}

// Add event listener for Enter key in search input
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchRecipes();
  }
});

// Filter recipes based on dropdowns
function filterRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  applyFilters(searchTerm);
}

// Apply all filters
function applyFilters(searchTerm = '') {
  const cuisineFilter = cuisineSelect.value;
  const dietFilter = dietSelect.value;
  const prepTimeFilter = prepTimeSelect.value;
  
  filteredRecipes = recipes.filter(recipe => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.toLowerCase().includes(searchTerm);
    
    // Cuisine filter
    const matchesCuisine = cuisineFilter === 'all' || recipe.cuisine === cuisineFilter;
    
    // Diet filter
    const matchesDiet = dietFilter === 'all' || recipe.diet === dietFilter;
    
    // Prep time filter
    const matchesPrepTime = prepTimeFilter === 'all' || recipe.prepTime === prepTimeFilter;
    
    return matchesSearch && matchesCuisine && matchesDiet && matchesPrepTime;
  });
  
  displayRecipes(filteredRecipes);
}

// Clear all filters
function clearFilters() {
  searchInput.value = '';
  cuisineSelect.value = 'all';
  dietSelect.value = 'all';
  prepTimeSelect.value = 'all';
  displayRecipes(recipes);
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});