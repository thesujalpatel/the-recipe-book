// Sample recipe data
const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "italian",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Classic Italian pasta dish with eggs, cheese, and pancetta.",
    ingredients: "Spaghetti, eggs, parmesan cheese, pancetta, black pepper",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Chicken Tacos",
    cuisine: "mexican",
    diet: "all",
    prepTime: "under-30",
    description: "Delicious chicken tacos with fresh vegetables and spices.",
    ingredients: "Chicken breast, tortillas, lettuce, tomatoes, onions, lime",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Vegetable Fried Rice",
    cuisine: "chinese",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Quick and easy fried rice with mixed vegetables.",
    ingredients: "Rice, mixed vegetables, soy sauce, garlic, ginger, eggs",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Butter Chicken",
    cuisine: "indian",
    diet: "all",
    prepTime: "30-60",
    description: "Creamy and flavorful Indian curry with tender chicken.",
    ingredients: "Chicken, tomatoes, cream, butter, spices, onions",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Margherita Pizza",
    cuisine: "italian",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    ingredients: "Pizza dough, tomato sauce, mozzarella, fresh basil, olive oil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Quinoa Salad",
    cuisine: "all",
    diet: "vegan",
    prepTime: "under-30",
    description: "Healthy and nutritious quinoa salad with fresh vegetables.",
    ingredients: "Quinoa, cucumber, tomatoes, red onion, olive oil, lemon",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Beef Stir Fry",
    cuisine: "chinese",
    diet: "all",
    prepTime: "under-30",
    description: "Quick beef stir fry with vegetables and savory sauce.",
    ingredients: "Beef strips, bell peppers, broccoli, soy sauce, garlic",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Vegetable Curry",
    cuisine: "indian",
    diet: "vegan",
    prepTime: "30-60",
    description: "Aromatic vegetable curry with coconut milk and spices.",
    ingredients: "Mixed vegetables, coconut milk, curry spices, onions, garlic",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Fish Tacos",
    cuisine: "mexican",
    diet: "all",
    prepTime: "under-30",
    description: "Light and fresh fish tacos with cabbage slaw.",
    ingredients: "White fish, corn tortillas, cabbage, lime, cilantro, avocado",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Mushroom Risotto",
    cuisine: "italian",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Creamy risotto with mushrooms and parmesan cheese.",
    ingredients: "Arborio rice, mushrooms, vegetable broth, parmesan, white wine",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    name: "Gluten-Free Pasta",
    cuisine: "italian",
    diet: "gluten-free",
    prepTime: "under-30",
    description: "Delicious gluten-free pasta with garlic and herbs.",
    ingredients: "Gluten-free pasta, garlic, olive oil, herbs, parmesan",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    name: "Buddha Bowl",
    cuisine: "all",
    diet: "vegan",
    prepTime: "30-60",
    description: "Nutritious bowl with quinoa, vegetables, and tahini dressing.",
    ingredients: "Quinoa, sweet potato, chickpeas, avocado, tahini, greens",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
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