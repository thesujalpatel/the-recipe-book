const recipes = 
   [
  {
    id: 1,
    name: "Paneer Butter Masala",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Rich and creamy curry made with paneer, butter, and tomato gravy.",
    ingredients: "Paneer, butter, tomatoes, cream, onions, garlic, ginger, garam masala",
    image: "https://sandhyahariharan.co.uk/wp-content/uploads/2022/07/paneer-butter-masala-2.jpg",
    steps: [
      "Cut paneer into cubes.",
      "Prepare tomato gravy with onions, garlic, ginger.",
      "Add butter, cream, and paneer cubes.",
      "Simmer and serve hot."
    ]
  },
  {
    id: 2,
    name: "Masala Dosa",
    diet: "vegetarian",
    prepTime: "over-60",
    description: "Crispy rice crepe stuffed with spiced potato filling, served with chutney and sambar.",
    ingredients: "Rice, urad dal, potatoes, curry leaves, green chilies, mustard seeds",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gPSMIK3sUiRUDNve5tgZh2FrCEAgpxb-tw&s",
    steps: [
      "Soak rice and urad dal overnight.",
      "Grind and ferment batter.",
      "Prepare potato filling.",
      "Cook dosa and fill with masala."
    ]
  },
  {
    id: 3,
    name: "Chole Bhature",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Fried fluffy bread served with spicy chickpea curry.",
    ingredients: "Chickpeas, flour, onions, tomatoes, ginger, garlic, garam masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qZYqLr9OgwtfLJkC1ETQUn4oS__y5tjYBQ&s",
    steps: [
      "Soak and boil chickpeas.",
      "Prepare spicy curry base.",
      "Fry bhature and serve with chole."
    ]
  },
  {
    id: 4,
    name: "Idli Sambar",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Steamed rice cakes served with spicy lentil stew and coconut chutney.",
    ingredients: "Rice, urad dal, toor dal, tamarind, curry leaves, coconut",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR_wP79RQXv1rShNTWgPHDtxnqnRfboBLdQ&s",
    steps: [
      "Soak rice and urad dal.",
      "Grind and ferment batter.",
      "Steam idlis.",
      "Prepare sambar and chutney."
    ]
  },
  {
    id: 5,
    name: "Aloo Paratha",
    diet: "vegetarian",
    prepTime: "over-60",
    description: "Stuffed whole wheat bread with spiced potato filling, served with butter or yogurt.",
    ingredients: "Wheat flour, potatoes, green chilies, onions, butter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxueufrBj0wynq0knzDYAqTIfVMo7-uk-icg&s",
    steps: [
      "Boil and mash potatoes.",
      "Prepare dough and stuffing.",
      "Roll and cook parathas.",
      "Serve with butter or yogurt."
    ]
  },
  {
    id: 6,
    name: "Pav Bhaji",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Spiced mashed vegetable curry served with buttered bread rolls.",
    ingredients: "Potatoes, tomatoes, peas, capsicum, butter, pav bread",
    image: "https://bhojmasale.com/cdn/shop/articles/delicious-pav-bhaji-recipe-a-step-by-step-guide-930907_1024x1024.webp?v=1739152900",
    steps: [
      "Boil and mash vegetables (potatoes, peas, capsicum).",
      "Cook with tomatoes, onions, and spices.",
      "Mash and simmer with butter.",
      "Toast pav bread with butter and serve with bhaji."
    ]
  },
  {
    id: 7,
    name: "Dal Tadka",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Yellow lentils cooked and tempered with ghee, garlic, and red chilies.",
    ingredients: "Toor dal, ghee, garlic, cumin, onions, tomatoes",
    image: "https://i0.wp.com/www.dhabastyle.com/wp-content/uploads/2017/04/maxresdefault-1.jpg?fit=1100%2C619&ssl=1",
    steps: [
      "Boil toor dal until soft.",
      "Prepare tadka with ghee, garlic, cumin, and red chilies.",
      "Add onions and tomatoes to tadka.",
      "Mix tadka into dal and simmer."
    ]
  },
  {
    id: 8,
    name: "Pani Puri",
    diet: "vegetarian",
    prepTime: "over-60",
    description: "Crispy puris filled with spicy tangy water and potato stuffing.",
    ingredients: "Sooji, potatoes, tamarind, mint, green chilies, chickpeas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorqQfvieS0ikzzKGuxNL9kkj52CTGVtA0CA&s",
    steps: [
      "Prepare puris from sooji and fry until crispy.",
      "Make spicy tangy water with tamarind, mint, and green chilies.",
      "Boil and mash potatoes and chickpeas for stuffing.",
      "Fill puris with stuffing and dip in flavored water."
    ]
  },
  {
    id: 9,
    name: "Vegetable Pulao",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Fragrant rice dish cooked with vegetables and spices.",
    ingredients: "Basmati rice, carrots, beans, peas, onions, bay leaves, cloves",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh8JwS9wEk8r2un31eZJtUqoEIveNLTHibg&s",
    steps: [
      "Wash and soak basmati rice.",
      "Sauté vegetables and spices in oil.",
      "Add rice and water, cook until done.",
      "Fluff and serve hot."
    ]
  },
  {
    id: 10,
    name: "Dhokla",
    diet: "vegetarian",
    prepTime: "over-60",
    description: "Steamed savory cake made with gram flour, popular in Gujarat.",
    ingredients: "Gram flour, yogurt, lemon juice, green chili, mustard seeds, curry leaves",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Dhokla_on_Gujrart.jpg",
    steps: [
      "Mix gram flour, yogurt, lemon juice, and spices to make batter.",
      "Let batter ferment.",
      "Steam batter until cooked.",
      "Prepare tempering and pour over dhokla."
    ]
  },
  {
    id: 11,
    name: "Palak Paneer",
    diet: "vegetarian",
    prepTime: "30-60",
    description: "Paneer cubes cooked in a smooth spinach gravy.",
    ingredients: "Paneer, spinach, onions, garlic, ginger, green chilies",
    image: "https://www.chefajaychopra.com/assets/img/recipe/1-1666433552palakpaneer1webp.webp",
    steps: [
      "Blanch and puree spinach.",
      "Sauté onions, garlic, ginger, and chilies.",
      "Add spinach puree and paneer cubes.",
      "Simmer and serve hot."
    ]
  },
  {
    id: 12,
    name: "Vada Pav",
    diet: "vegetarian",
    prepTime: "under-30",
    description: "Mumbai’s famous street food made with spicy potato fritter in bread bun.",
    ingredients: "Potatoes, gram flour, pav bread, garlic chutney, green chilies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4Bg-PSNOU142m2TooCDwaXqYrCJsV5vHnQ&s",
    steps: [
      "Boil and mash potatoes with spices.",
      "Shape into balls and dip in gram flour batter.",
      "Deep fry until golden.",
      "Serve in pav bread with chutney."
    ]
  },

  {
    id: 13,
    name: "Chana Masala",
    diet: "vegan",
    prepTime: "30-60",
    description: "Spiced chickpea curry cooked with onions, tomatoes, and Indian spices.",
    ingredients: "Chickpeas, onions, tomatoes, garlic, ginger, garam masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl949jrdLZseI1fRYRqcoOiKw-RR8xMmNRNw&s",
    steps: [
      "Soak and boil chickpeas.",
      "Sauté onions, garlic, and ginger.",
      "Add tomatoes and spices, cook until thick.",
      "Add chickpeas and simmer."
    ]
  },
  {
    id: 14,
    name: "Vegan Dal Tadka",
    diet: "vegan",
    prepTime: "over-60",
    description: "Yellow lentils cooked with turmeric and tempered with oil, garlic, and chilies.",
    ingredients: "Toor dal, onions, tomatoes, garlic, cumin, chili powder, oil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMGvL1fKs_FIa6SSdCictZQ1YnLRGEcsQYg&s",
    steps: [
      "Boil toor dal with turmeric.",
      "Prepare tadka with oil, garlic, cumin, and chilies.",
      "Add onions and tomatoes to tadka.",
      "Mix tadka into dal and simmer."
    ]
  },
  {
    id: 15,
    name: "Vegan Buddha Bowl",
    diet: "vegan",
    prepTime: "under-30",
    description: "Healthy grain bowl with quinoa, roasted veggies, avocado, and tahini dressing.",
    ingredients: "Quinoa, sweet potato, spinach, avocado, chickpeas, tahini",
    image: "https://plantbasednews.org/app/uploads/2020/09/vegan-buddha-bowl-recipe.jpg",
    steps: [
      "Cook quinoa as per instructions.",
      "Roast sweet potato and chickpeas.",
      "Arrange spinach, avocado, and veggies in bowl.",
      "Drizzle with tahini dressing."
    ]
  },
  {
    id: 16,
    name: "Vegan Tofu Stir-Fry",
    diet: "vegan",
    prepTime: "over-60",
    description: "Quick stir-fry with tofu, vegetables, and soy sauce.",
    ingredients: "Tofu, broccoli, carrots, soy sauce, garlic, sesame oil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcW-E2-Ae8WQfqg1-7W56Pu-nhqvAGGuzcw&s",
    steps: [
      "Cut tofu and vegetables into pieces.",
      "Stir-fry garlic in sesame oil.",
      "Add tofu and vegetables, cook until tender.",
      "Add soy sauce and serve."
    ]
  },

  {
    id: 17,
    name: "Rajma Masala (Gluten-Free)",
    diet: "gluten-free",
    prepTime: "30-60",
    description: "Kidney bean curry with rich onion-tomato base, naturally gluten-free.",
    ingredients: "Kidney beans, onions, tomatoes, ginger, garlic, garam masala",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rajma-recipe-rajma-masala.jpg",
    steps: [
      "Soak and boil kidney beans.",
      "Sauté onions, ginger, garlic, and tomatoes.",
      "Add spices and beans, cook until thick.",
      "Serve hot with rice."
    ]
  },
  {
    id: 18,
    name: "Quinoa Salad",
    diet: "gluten-free",
    prepTime: "over-60",
    description: "Light and refreshing quinoa salad with fresh vegetables and lemon dressing.",
    ingredients: "Quinoa, cucumber, tomatoes, lemon juice, olive oil, parsley",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5tfW8qDvdh9hWcxxNin7H0qgw17K4XuKpw&s",
    steps: [
      "Cook quinoa and let cool.",
      "Chop vegetables and parsley.",
      "Mix quinoa, veggies, and dressing.",
      "Serve chilled."
    ]
  },
  {
    id: 19,
    name: "South Indian Curd Rice",
    diet: "gluten-free",
    prepTime: "under-30",
    description: "Cooling dish made with yogurt and rice, tempered with curry leaves.",
    ingredients: "Rice, yogurt, curry leaves, green chilies, ginger, coriander",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbmRPJgxXrNTdCKwm-i0sLR0OO8oL6aYCJA&s",
    steps: [
      "Cook rice and let cool.",
      "Mix rice with yogurt and salt.",
      "Prepare tempering with curry leaves, chilies, and ginger.",
      "Pour tempering over rice and serve."
    ]
  }


];

let filteredRecipes = [...recipes];

const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const dietSelect = document.getElementById('diet');
const prepTimeSelect = document.getElementById('prep-time');

document.addEventListener('DOMContentLoaded', function() {
  displayRecipes(recipes);
  setupNavigation();
});

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      navLinks.forEach(l => l.classList.remove('active'));
      
      this.classList.add('active');
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
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

function scrollToExplore() {
  document.getElementById('explore').scrollIntoView({
    behavior: 'smooth'
  });
}

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

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  const prepTimeText = {
    'under-30': 'Under 30 min',
    '30-60': '30-60 min',
    'over-60': 'Over 60 min'
  };

  const dietText = recipe.diet === 'all' ? 'Any diet' : recipe.diet.charAt(0).toUpperCase() + recipe.diet.slice(1);

  card.innerHTML = `
    <div class="recipe-image-container">
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" 
           onerror="this.src='assets/DefaultRecipeImg.png'; this.onerror=null;" />
    </div>
    <div class="recipe-content">
      <h3>${recipe.name}</h3>
      <div class="recipe-meta">
        <span>${dietText}</span>
        <span>${prepTimeText[recipe.prepTime]}</span>
      </div>
      <p class="recipe-description">${recipe.description}</p>
      <p class="recipe-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients}</p>
    </div>
  `;

  card.addEventListener('click', function() {
    openRecipeModal(recipe);
  });

  return card;
}

function openRecipeModal(recipe) {
  const modal = document.getElementById('recipeModal');
  document.getElementById('modalTitle').textContent = recipe.name;
  document.getElementById('modalImg').src = recipe.image;
  document.getElementById('modalImg').alt = recipe.name;
  document.getElementById('modalDescription').textContent = recipe.description + '\n\nIngredients: ' + recipe.ingredients;

  const stepsList = document.getElementById('modalSteps');
  stepsList.innerHTML = '';
  const steps = recipe.steps || ["Cooking steps not available."];
  steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    stepsList.appendChild(li);
  });

  modal.style.display = 'flex';
}

document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('recipeModal').style.display = 'none';
});

document.getElementById('recipeModal').addEventListener('click', function(e) {
  console.log(e.target, this);
  if (e.target === this) {
    this.style.display = 'none';
  }
});

function searchRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  applyFilters(searchTerm);
}

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchRecipes();
  }
});

function filterRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  applyFilters(searchTerm);
}

function applyFilters(searchTerm = '') {
  const dietFilter = dietSelect.value;
  const prepTimeFilter = prepTimeSelect.value;
  
  filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === '' || 
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.toLowerCase().includes(searchTerm);
    

    const matchesDiet = dietFilter === 'all' || recipe.diet === dietFilter;
    
    const matchesPrepTime = prepTimeFilter === 'all' || recipe.prepTime === prepTimeFilter;
    
    return matchesSearch  && matchesDiet && matchesPrepTime;
  });
  
  displayRecipes(filteredRecipes);
}

function clearFilters() {
  searchInput.value = '';
  dietSelect.value = 'all';
  prepTimeSelect.value = 'all';
  displayRecipes(recipes);
}

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