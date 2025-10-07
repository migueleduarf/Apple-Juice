// Global State
let currentPage = 'home';
let cartItems = [];
let favorites = [];
let searchTerm = '';
let selectedCategory = 'Todos';
let currentUser = null;
let theme = 'light';
let products = [];

// Products Database with Dynamic Promotions
const baseProducts = [
  {
    id: 1,
    name: "Placa de Vídeo RTX 4080 Super - 16GB GDDR6X",
    price: 6999.99,
    originalPrice: 8999.99,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBnYW1pbmd8ZW58MXx8fHwxNzU5NDQxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 267,
    category: "Gaming"
  },
  {
    id: 2,
    name: "Processador AMD Ryzen 7 7800X3D - 8 Cores/16 Threads",
    price: 3199.99,
    originalPrice: 3999.99,
    image: "https://images.unsplash.com/photo-1555617981-dac675c97c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jZXNzb3IlMjBhbWQlMjByeXplbnxlbnwxfHx8fDE3NTk0NDE1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 198,
    category: "Gaming"
  },
  {
    id: 3,
    name: "Monitor 4K 32\" IPS - 144Hz HDR Gaming",
    price: 2499.99,
    originalPrice: 3299.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZ2FtaW5nJTIwNGt8ZW58MXx8fHwxNzU5NDQxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 342,
    category: "Gaming"
  },
  {
    id: 4,
    name: "Teclado Mecânico RGB - Switches Cherry MX Blue",
    price: 649.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNsYWRvJTIwbWVjYW5pY28lMjByZ2J8ZW58MXx8fHwxNzU5NDQxNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 523,
    category: "Gaming"
  },
  {
    id: 5,
    name: "Cadeira Gamer Ergonômica - Suporte Lombar Premium",
    price: 1299.99,
    originalPrice: 1799.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjaGFpcnxlbnwxfHx8fDE3NTk0NDE1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 189,
    category: "Home Office"
  },
  {
    id: 6,
    name: "Mesa Gamer LED RGB - Altura Ajustável",
    price: 899.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBkZXNrfGVufDF8fHx8MTc1OTQ0MTUzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 156,
    category: "Home Office"
  },
  // Periféricos
  {
    id: 7,
    name: "Mouse Gamer RGB 12000 DPI - Sensor Óptico Premium",
    price: 299.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VzZSUyMGdhbWluZ3xlbnwxfHx8fDE3NTk0NDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 412,
    category: "Periféricos"
  },
  {
    id: 8,
    name: "Headset Gamer 7.1 Surround - Som Imersivo",
    price: 349.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkc2V0JTIwZ2FtaW5nfGVufDF8fHx8MTc1OTQ0MTU0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 298,
    category: "Periféricos"
  },
  {
    id: 9,
    name: "Webcam 4K Ultra HD - Streaming Profissional",
    price: 599.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1611532736947-7c2cb99e5451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJjYW0lMjA0a3xlbnwxfHx8fDE3NTk0NDE1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 167,
    category: "Periféricos"
  },
  {
    id: 10,
    name: "Mousepad XXL Gaming - Base Antiderrapante",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VzZXBhZCUyMGdhbWluZ3xlbnwxfHx8fDE3NTk0NDE1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 234,
    category: "Periféricos"
  },
  // Componentes
  {
    id: 11,
    name: "Memória RAM DDR5 32GB 5600MHz - Kit Dual Channel",
    price: 1899.99,
    originalPrice: 2299.99,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjByYW18ZW58MXx8fHwxNzU5NDQxNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 145,
    category: "Componentes"
  },
  {
    id: 12,
    name: "SSD NVMe 2TB Gen4 - Velocidade Extrema",
    price: 1299.99,
    originalPrice: 1699.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzc2QlMjBudm1lfGVufDF8fHx8MTc1OTQ0MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 234,
    category: "Componentes"
  },
  {
    id: 13,
    name: "Fonte Modular 850W 80+ Gold - Eficiência Máxima",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN1cHBseXxlbnwxfHx8fDE3NTk0NDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 187,
    category: "Componentes"
  },
  {
    id: 14,
    name: "Cooler CPU AIO 240mm RGB - Refrigeração Líquida",
    price: 699.99,
    originalPrice: 949.99,
    image: "https://images.unsplash.com/photo-1555617981-dac675c97c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29sZXIlMjBjcHV8ZW58MXx8fHwxNzU5NDQxNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 156,
    category: "Componentes"
  },
  {
    id: 15,
    name: "Motherboard X670E ATX - AMD AM5 DDR5",
    price: 1899.99,
    originalPrice: 2399.99,
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXJib2FyZHxlbnwxfHx8fDE3NTk0NDE1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 98,
    category: "Componentes"
  }
];

// Dynamic Promotion Functions
function getTimeBasedPromotions() {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();
  const dayOfMonth = now.getDate();
  
  const seed = dayOfMonth * 100 + Math.floor(hour / 6);
  
  const timeBasedPromos = {
    earlyMorning: hour >= 0 && hour < 6 ? ['Gaming'] : [],
    morning: hour >= 6 && hour < 12 ? ['Home Office'] : [],
    afternoon: hour >= 12 && hour < 18 ? ['Uso Profissional'] : [],
    evening: hour >= 18 ? ['Acessórios'] : []
  };
  
  const weeklyPromos = {
    monday: dayOfWeek === 1 ? ['Gaming'] : [],
    tuesday: dayOfWeek === 2 ? ['Home Office'] : [],
    wednesday: dayOfWeek === 3 ? ['Uso Profissional'] : [],
    thursday: dayOfWeek === 4 ? ['Acessórios'] : [],
    friday: dayOfWeek === 5 ? ['Gaming', 'Home Office', 'Uso Profissional', 'Acessórios'] : [],
    weekend: (dayOfWeek === 0 || dayOfWeek === 6) ? ['Gaming'] : []
  };
  
  return {
    seed,
    timeBasedPromos: Object.values(timeBasedPromos).flat(),
    weeklyPromos: Object.values(weeklyPromos).flat(),
    hour,
    dayOfWeek
  };
}

function shouldBeOnSale(productId, category) {
  const promoData = getTimeBasedPromotions();
  const { seed, timeBasedPromos, weeklyPromos, hour, dayOfWeek } = promoData;
  
  const random = ((productId * seed * 9301 + 49297) % 233280) / 233280;
  
  let saleChance = 0.6;
  
  if (timeBasedPromos.includes(category)) {
    saleChance += 0.2;
  }
  
  if (weeklyPromos.includes(category)) {
    saleChance += 0.15;
  }
  
  if (dayOfWeek === 5) {
    saleChance = 0.95;
  }
  
  if ((dayOfWeek === 0 || dayOfWeek === 6) && category === 'Gaming') {
    saleChance = 0.9;
  }
  
  return random < saleChance;
}

function shouldBeBestSeller(productId, category) {
  const promoData = getTimeBasedPromotions();
  const { seed, hour } = promoData;
  
  const random = ((productId * seed * 7919 + 11731) % 233280) / 233280;
  
  let bestsellerChance = 0.3;
  
  if (productId <= 20) bestsellerChance += 0.2;
  
  if (hour >= 18 && hour <= 22) {
    bestsellerChance += 0.1;
  }
  
  return random < bestsellerChance;
}

function applyDynamicPromotions() {
  return baseProducts.map(product => ({
    ...product,
    isOnSale: shouldBeOnSale(product.id, product.category),
    isBestSeller: shouldBeBestSeller(product.id, product.category)
  }));
}

// Current Promo Info Function
function getCurrentPromoInfo() {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();
  
  if (dayOfWeek === 5) {
    return {
      title: "🔥 FLASH FRIDAY",
      description: "Super descontos em TODAS as categorias! Aproveite!",
      badge: "Todas Categorias",
      color: "bg-red-600",
      discount: "até 50%"
    };
  }
  
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return {
      title: "🎮 WEEKEND GAMER",
      description: "Final de semana é hora de jogar! Gaming em destaque!",
      badge: "Gaming Intenso",
      color: "bg-purple-600",
      discount: "até 45%"
    };
  }
  
  if (hour >= 0 && hour < 6) {
    return {
      title: "🌙 SUPER MADRUGADA",
      description: "Promoções especiais em produtos Gaming para madrugadores!",
      badge: "Gaming Noturno",
      color: "bg-indigo-600",
      discount: "até 35%"
    };
  } else if (hour >= 6 && hour < 12) {
    return {
      title: "🌅 OFERTA MATINAL",
      description: "Componentes e periféricos com preços especiais para você começar bem o dia!",
      badge: "Componentes & Periféricos",
      color: "bg-emerald-600",
      discount: "até 35%"
    };
  } else if (hour >= 12 && hour < 18) {
    return {
      title: "💼 TARDE PROFISSIONAL",
      description: "Soluções profissionais com preços exclusivos da tarde!",
      badge: "Uso Profissional",
      color: "bg-green-600",
      discount: "até 40%"
    };
  } else {
    return {
      title: "🎮 NOITE DOS GAMERS",
      description: "Acessórios e periféricos em promoção para a noite!",
      badge: "Acessórios",
      color: "bg-orange-600",
      discount: "até 25%"
    };
  }
}

// Initialize
function init() {
  loadTheme();
  initializeProducts();
  renderPage();
  startPromoTimer();
  
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Hide loading screen
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  }, 1000);
}

function initializeProducts() {
  products = applyDynamicPromotions();
}

function startPromoTimer() {
  setInterval(() => {
    initializeProducts();
    if (currentPage === 'home') {
      renderFeaturedProducts();
      renderHeroSection();
    }
  }, 6 * 60 * 60 * 1000); // Update every 6 hours
}

// Theme Management
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme = savedTheme;
  } else {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme();
}

function toggleTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  applyTheme();
  showToast(`Tema alterado para ${theme === 'dark' ? 'escuro' : 'claro'}`, 'info');
}

function applyTheme() {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}

// Navigation
function navigateTo(page) {
  currentPage = page;
  renderPage();
  closeMobileMenu();
  toggleCart(false);
}

function renderPage() {
  const mainContent = document.getElementById('main-content');
  
  switch (currentPage) {
    case 'home':
      renderHomePage(mainContent);
      break;
    case 'gaming':
      renderCategoryPage(mainContent, 'Gaming');
      break;
    case 'home-office':
      renderCategoryPage(mainContent, 'Home Office');
      break;
    case 'professional':
      renderCategoryPage(mainContent, 'Uso Profissional');
      break;
    case 'accessories':
      renderCategoryPage(mainContent, 'Acessórios');
      break;
    case 'peripherals':
      renderPeripheralsPage(mainContent);
      break;
    case 'components':
      renderComponentsPage(mainContent);
      break;
    case 'promotions':
      renderPromotionsPage(mainContent);
      break;
    case 'checkout':
      renderCheckoutPage(mainContent);
      break;
    default:
      renderHomePage(mainContent);
  }
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Home Page Components
function renderHomePage(container) {
  container.innerHTML = `
    ${renderHeroSection()}
    ${renderCategorySection()}
    ${renderFeaturedProducts()}
    ${renderNewsletter()}
    ${renderFooter()}
  `;
}

function renderHeroSection() {
  const promoInfo = getCurrentPromoInfo();
  const timeLeft = getTimeLeft();
  
  return `
    <section class="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Banner de Promoção Dinâmica -->
        <div class="${promoInfo.color} text-white rounded-lg p-4 mb-8 text-center shadow-lg">
          <div class="flex flex-col sm:flex-row items-center justify-between">
            <div class="flex-1">
              <h3 class="text-lg font-bold">${promoInfo.title}</h3>
              <p class="text-sm opacity-90">${promoInfo.description}</p>
            </div>
            <div class="flex items-center gap-4 mt-2 sm:mt-0">
              <span class="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                ${promoInfo.badge}
              </span>
              <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                ${promoInfo.discount}
              </span>
              ${timeLeft ? `<span class="bg-black/20 px-3 py-1 rounded-full text-sm">⏰ ${timeLeft}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Bem-vindo à 
              <span class="text-red-800"> Apple Juice</span>
            </h1>
            <p class="text-xl text-muted-foreground mb-8">
              Sua loja especializada em peças de PC, gaming, home office e acessórios tecnológicos. 
              Encontre os melhores produtos com preços incríveis!
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button onclick="scrollToProducts()" class="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg transition-colors">
                Ver Produtos
              </button>
              <button onclick="scrollToNewsletter()" class="border border-border bg-background text-foreground px-6 py-3 rounded-lg transition-colors hover:bg-muted">
                Promoções do Dia
              </button>
            </div>
            
            <div class="mt-12 flex items-center space-x-8 text-sm text-muted-foreground">
              <div class="flex items-center">
                <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">✓</span>
                Frete Grátis acima de R$ 299
              </div>
              <div class="flex items-center">
                <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">✓</span>
                Parcelamento em até 12x
              </div>
              <div class="flex items-center">
                <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full mr-2">✓</span>
                Garantia estendida
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1733945761533-727f49908d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wdXRlciUyMHNldHVwfGVufDF8fHx8MTc1OTQ0MTUwOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Setup Gaming Professional"
              class="rounded-lg shadow-2xl w-full h-auto"
              onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwVjIwME0xNTAgMTUwSDE1MCIgc3Ryb2tlPSIjOUIwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+'"
            />
            <div class="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg transform rotate-12">
              <span class="font-bold">OFERTA!</span>
              <p class="text-sm">${promoInfo.discount} OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCategorySection() {
  return `
    <section id="categorias" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">Categorias</h2>
          <p class="text-lg text-muted-foreground">Navegue pelas nossas categorias especializadas</p>
        </div>
        
        <!-- Categorias Principais -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
          <div onclick="navigateTo('gaming')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="text-red-800 mb-4">
              <i data-lucide="gamepad-2" class="w-12 h-12 mx-auto"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Gaming</h3>
            <p class="text-muted-foreground text-sm">PCs, placas de vídeo</p>
          </div>
          
          <div onclick="navigateTo('home-office')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="text-red-800 mb-4">
              <i data-lucide="home" class="w-12 h-12 mx-auto"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Home Office</h3>
            <p class="text-muted-foreground text-sm">Monitores, cadeiras</p>
          </div>
          
          <div onclick="navigateTo('professional')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="text-red-800 mb-4">
              <i data-lucide="briefcase" class="w-12 h-12 mx-auto"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Profissional</h3>
            <p class="text-muted-foreground text-sm">Workstations, servidores</p>
          </div>
          
          <div onclick="navigateTo('accessories')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="text-red-800 mb-4">
              <i data-lucide="headphones" class="w-12 h-12 mx-auto"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Acessórios</h3>
            <p class="text-muted-foreground text-sm">Cabos, hubs</p>
          </div>
        </div>

        <!-- Categorias Específicas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onclick="navigateTo('peripherals')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800">
            <div class="text-red-800 mb-4">
              <i data-lucide="mouse" class="w-10 h-10 mx-auto"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Periféricos</h3>
            <p class="text-muted-foreground text-sm">Teclados, mouses, headsets</p>
          </div>
          
          <div onclick="navigateTo('components')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800">
            <div class="text-red-800 mb-4">
              <i data-lucide="cpu" class="w-10 h-10 mx-auto"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Componentes</h3>
            <p class="text-muted-foreground text-sm">Processadores, memórias, SSDs</p>
          </div>
          
          <div onclick="navigateTo('promotions')" class="card cursor-pointer text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/20 dark:to-orange-900/20 border-yellow-200 dark:border-orange-800">
            <div class="text-orange-600 mb-4">
              <i data-lucide="percent" class="w-10 h-10 mx-auto"></i>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-400">Promoções</h3>
            <p class="text-muted-foreground text-sm">Ofertas especiais e descontos</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFeaturedProducts() {
  const filteredProducts = getFilteredProducts();
  const promoStats = getPromoStats();
  
  return `
    <section id="produtos" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${selectedCategory === 'Todos' && !searchTerm ? renderPromoStats(promoStats) : ''}
        
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            ${selectedCategory === 'Todos' ? 'Produtos em Destaque' : `Categoria: ${selectedCategory}`}
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            ${searchTerm ? `Resultados para "${searchTerm}"` : 'Confira nossa seleção especial de produtos com os melhores preços e qualidade garantida'}
          </p>
          ${filteredProducts.length > 0 ? `
            <p class="text-sm text-muted-foreground/70 mt-2">
              ${filteredProducts.length} produto${filteredProducts.length !== 1 ? 's' : ''} encontrado${filteredProducts.length !== 1 ? 's' : ''}
            </p>
          ` : ''}
        </div>

        ${filteredProducts.length === 0 ? `
          <div class="text-center py-12">
            <h3 class="text-xl font-semibold text-foreground mb-4">
              Nenhum produto encontrado
            </h3>
            <p class="text-muted-foreground mb-6">
              Tente ajustar sua busca ou explorar outras categorias
            </p>
            <button onclick="scrollToCategories()" class="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-lg transition-colors">
              Ver Categorias
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${filteredProducts.map(product => renderProductCard(product)).join('')}
          </div>

          <div class="text-center mt-12">
            <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" class="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg transition-colors">
              Voltar ao Topo
            </button>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderPromoStats(stats) {
  return `
    <div class="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold mb-2">${stats.onSale}</div>
          <div class="text-sm opacity-90">Produtos em Promoção</div>
          <div class="text-xs opacity-75">
            ${stats.total > 0 ? `${Math.round((stats.onSale / stats.total) * 100)}%` : '0%'} do catálogo
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold mb-2">${stats.bestSellers}</div>
          <div class="text-sm opacity-90">Best Sellers</div>
          <div class="text-xs opacity-75">Mais vendidos agora</div>
        </div>
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold mb-2">${stats.total}</div>
          <div class="text-sm opacity-90">Total de Produtos</div>
          <div class="text-xs opacity-75">Catálogo completo</div>
        </div>
      </div>
      <div class="text-center mt-4 text-sm opacity-90">
        🔥 Promoções atualizadas dinamicamente • Descontos especiais por horário
      </div>
    </div>
  `;
}

function renderProductCard(product) {
  const isFavorite = favorites.includes(product.id);
  
  return `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="relative">
        <img 
          src="${product.image}" 
          alt="${product.name}"
          class="product-image"
          onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgNzBWMTMwTTEyMCAxMDBIMTgwIiBzdHJva2U9IiM5QjAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4='"
        />
        ${product.isOnSale ? '<div class="badge badge-sale absolute top-2 left-2">OFERTA</div>' : ''}
        ${product.isBestSeller ? '<div class="badge badge-bestseller absolute top-2 right-2">BEST SELLER</div>' : ''}
        
        <button 
          onclick="event.stopPropagation(); toggleFavorite(${product.id})" 
          class="absolute bottom-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
        >
          <i data-lucide="heart" class="w-4 h-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}"></i>
        </button>
      </div>
      
      <div class="p-4">
        <div class="category-badge">${product.category}</div>
        
        <h3 class="font-semibold text-foreground mb-2 mt-6">${product.name}</h3>
        
        <div class="star-rating mb-2">
          ${renderStars(product.rating)}
          <span class="text-sm text-muted-foreground ml-2">(${product.reviews})</span>
        </div>
        
        <div class="flex items-center gap-2 mb-4">
          <span class="price-current">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          ${product.isOnSale ? `<span class="price-original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        
        <button 
          onclick="event.stopPropagation(); addToCart(${product.id})" 
          class="w-full bg-red-800 hover:bg-red-900 text-white py-2 rounded-lg transition-colors"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHtml = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i data-lucide="star" class="star w-4 h-4"></i>';
  }
  
  if (hasHalfStar) {
    starsHtml += '<i data-lucide="star" class="star star-half w-4 h-4"></i>';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i data-lucide="star" class="star star-empty w-4 h-4"></i>';
  }
  
  return starsHtml;
}

function renderNewsletter() {
  const nextPromo = getNextPromoChange();
  const timeLeft = getTimeLeft();
  
  return `
    <section id="newsletter" class="py-16 bg-gradient-to-r from-red-600 to-red-800 dark:from-red-800 dark:to-red-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="bg-white/20 rounded-full p-3 mr-4">
            <i data-lucide="gift" class="w-8 h-8 text-white"></i>
          </div>
          <div class="text-left">
            <h2 class="text-3xl font-bold text-white mb-2">
              Receba Ofertas Exclusivas
            </h2>
            <p class="text-red-100">
              Seja o primeiro a saber sobre promoções, lançamentos e descontos especiais
            </p>
          </div>
        </div>

        <div class="bg-background rounded-lg p-8 shadow-xl border border-border">
          <form onsubmit="subscribeNewsletter(event)">
            <div class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <div class="relative flex-1">
                <i data-lucide="mail" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                <input 
                  type="email" 
                  id="newsletter-email"
                  placeholder="Seu melhor e-mail"
                  class="pl-10 pr-4 py-3 text-base w-full border border-border rounded-lg bg-background"
                  required
                />
              </div>
              <button 
                type="submit"
                class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </div>
          </form>
          
          <div class="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div class="flex items-center">
              <span class="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
              Ofertas exclusivas
            </div>
            <div class="flex items-center">
              <span class="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
              Sem spam
            </div>
            <div class="flex items-center">
              <span class="bg-red-100 text-red-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
              Cancele quando quiser
            </div>
          </div>
        </div>

        ${timeLeft ? `
          <div class="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="flex items-center justify-center gap-3 text-white">
              <i data-lucide="clock" class="w-5 h-5 text-yellow-300"></i>
              <span class="text-sm">
                <strong>Próxima mudança:</strong> ${nextPromo.nextPromoType} em ${timeLeft}
              </span>
            </div>
          </div>
        ` : ''}

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <div>
            <div class="text-2xl font-bold">50K+</div>
            <div class="text-red-100">Clientes satisfeitos</div>
          </div>
          <div>
            <div class="text-2xl font-bold">100+</div>
            <div class="text-red-100">Produtos disponíveis</div>
          </div>
          <div>
            <div class="text-2xl font-bold">24/7</div>
            <div class="text-red-100">Suporte técnico</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-muted border-t border-border py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="bg-red-800 text-white p-2 rounded-lg mr-3">
                <i data-lucide="apple" class="w-6 h-6"></i>
              </div>
              <span class="text-xl font-bold text-foreground">Apple Juice</span>
            </div>
            <p class="text-muted-foreground mb-4">
              Sua loja especializada em tecnologia com os melhores preços e qualidade garantida.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-muted-foreground hover:text-foreground">
                <i data-lucide="facebook" class="w-5 h-5"></i>
              </a>
              <a href="#" class="text-muted-foreground hover:text-foreground">
                <i data-lucide="twitter" class="w-5 h-5"></i>
              </a>
              <a href="#" class="text-muted-foreground hover:text-foreground">
                <i data-lucide="instagram" class="w-5 h-5"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold text-foreground mb-4">Categorias</h4>
            <ul class="space-y-2">
              <li><a href="#" onclick="navigateTo('gaming')" class="text-muted-foreground hover:text-foreground">Gaming</a></li>
              <li><a href="#" onclick="navigateTo('home-office')" class="text-muted-foreground hover:text-foreground">Home Office</a></li>
              <li><a href="#" onclick="navigateTo('professional')" class="text-muted-foreground hover:text-foreground">Profissional</a></li>
              <li><a href="#" onclick="navigateTo('accessories')" class="text-muted-foreground hover:text-foreground">Acessórios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-foreground mb-4">Suporte</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Central de Ajuda</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Contato</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Garantia</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Trocas e Devoluções</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-foreground mb-4">Empresa</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Sobre Nós</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Termos de Uso</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Privacidade</a></li>
              <li><a href="#" class="text-muted-foreground hover:text-foreground">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-border mt-8 pt-8 text-center">
          <p class="text-muted-foreground">
            © 2024 Apple Juice. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  `;
}

// Category Page
function renderCategoryPage(container, category) {
  const categoryProducts = products.filter(p => p.category === category);
  
  container.innerHTML = `
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-8">
          <button onclick="navigateTo('home')" class="flex items-center text-muted-foreground hover:text-foreground mr-4">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar
          </button>
          <h1 class="text-3xl font-bold text-foreground">${category}</h1>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${categoryProducts.map(product => renderProductCard(product)).join('')}
        </div>
      </div>
    </div>
  `;
}

// Checkout Page
function renderCheckoutPage(container) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  container.innerHTML = `
    <div class="py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-8">
          <button onclick="navigateTo('home')" class="flex items-center text-muted-foreground hover:text-foreground mr-4">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar
          </button>
          <h1 class="text-3xl font-bold text-foreground">Finalizar Compra</h1>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div class="card mb-6">
              <h2 class="text-xl font-semibold mb-4">Dados de Entrega</h2>
              <form id="checkout-form" onsubmit="processCheckout(event)">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">Nome Completo</label>
                    <input type="text" required class="w-full p-3 border border-border rounded-lg">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">E-mail</label>
                    <input type="email" required class="w-full p-3 border border-border rounded-lg">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">CEP</label>
                    <input type="text" required class="w-full p-3 border border-border rounded-lg">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">Endereço</label>
                    <input type="text" required class="w-full p-3 border border-border rounded-lg">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-2">Cidade</label>
                      <input type="text" required class="w-full p-3 border border-border rounded-lg">
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2">Estado</label>
                      <select required class="w-full p-3 border border-border rounded-lg">
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div class="card">
              <h2 class="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              <div class="space-y-4">
                ${cartItems.map(item => `
                  <div class="flex items-center justify-between py-2 border-b border-border">
                    <div>
                      <h4 class="font-medium">${item.name}</h4>
                      <p class="text-sm text-muted-foreground">Qtd: ${item.quantity}</p>
                    </div>
                    <span class="font-semibold">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                `).join('')}
                
                <div class="border-t border-border pt-4">
                  <div class="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span class="text-red-800">R$ ${total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  form="checkout-form"
                  class="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg transition-colors mt-4"
                >
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Utility Functions
function getFilteredProducts() {
  return products.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || 
      product.category === selectedCategory ||
      (selectedCategory === 'Profissional' && product.category === 'Uso Profissional');
    
    return matchesSearch && matchesCategory;
  });
}

function getPromoStats() {
  const onSale = products.filter(p => p.isOnSale).length;
  const bestSellers = products.filter(p => p.isBestSeller).length;
  return { onSale, bestSellers, total: products.length };
}

function getNextPromoChange() {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();
  
  let nextChangeTime = new Date(now);
  let nextPromoType = '';
  
  if (dayOfWeek === 5) {
    nextChangeTime.setDate(nextChangeTime.getDate() + 1);
    nextChangeTime.setHours(0, 0, 0, 0);
    nextPromoType = '🎮 Weekend Gamer';
  }
  else if (dayOfWeek === 0 || dayOfWeek === 6) {
    const daysUntilMonday = dayOfWeek === 0 ? 1 : 2;
    nextChangeTime.setDate(nextChangeTime.getDate() + daysUntilMonday);
    nextChangeTime.setHours(0, 0, 0, 0);
    nextPromoType = '☀️ Manhã Produtiva';
  }
  else if (dayOfWeek === 4 && hour >= 18) {
    nextChangeTime.setDate(nextChangeTime.getDate() + 1);
    nextChangeTime.setHours(0, 0, 0, 0);
    nextPromoType = '🔥 Flash Friday';
  }
  else {
    const currentSlot = Math.floor(hour / 6);
    const nextSlotHour = (currentSlot + 1) * 6;
    
    if (nextSlotHour >= 24) {
      nextChangeTime.setDate(nextChangeTime.getDate() + 1);
      nextChangeTime.setHours(0, 0, 0, 0);
      nextPromoType = '☀️ Manhã Produtiva';
    } else {
      nextChangeTime.setHours(nextSlotHour, 0, 0, 0);
      if (nextSlotHour === 6) nextPromoType = '☀️ Manhã Produtiva';
      else if (nextSlotHour === 12) nextPromoType = '💼 Tarde Profissional';
      else if (nextSlotHour === 18) nextPromoType = '🎮 Noite dos Gamers';
      else nextPromoType = '🌙 Super Madrugada';
    }
  }
  
  return { nextChangeTime, nextPromoType };
}

function getTimeLeft() {
  const nextPromo = getNextPromoChange();
  const now = new Date();
  const diff = nextPromo.nextChangeTime.getTime() - now.getTime();
  const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hoursLeft > 0) {
    return `${hoursLeft}h ${minutesLeft}m`;
  } else {
    return `${minutesLeft}m`;
  }
}

// Event Handlers
function handleSearch(term) {
  searchTerm = term;
  if (currentPage === 'home') {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.innerHTML = renderFeaturedProducts();
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
}

function toggleCart(show = null) {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  
  if (show === null) {
    const isOpen = !cartSidebar.classList.contains('translate-x-full');
    show = !isOpen;
  }
  
  if (show) {
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
    renderCart();
  } else {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cartItems.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  updateCartCount();
  showToast(`${product.name} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cartItems.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    updateCartCount();
    renderCart();
  }
}

function updateCartCount() {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function renderCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  if (!cartItemsElement || !cartTotalElement) return;
  
  if (cartItems.length === 0) {
    cartItemsElement.innerHTML = `
      <div class="text-center py-8">
        <p class="text-muted-foreground">Seu carrinho está vazio</p>
      </div>
    `;
    cartTotalElement.textContent = 'R$ 0,00';
    return;
  }
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartItemsElement.innerHTML = cartItems.map(item => `
    <div class="flex items-center gap-4 py-4 border-b border-border">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded" 
           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMiAyMFY0NE0yMCAzMkg0NCIgc3Ryb2tlPSIjOUIwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+'">
      <div class="flex-1">
        <h4 class="font-medium text-foreground">${item.name}</h4>
        <p class="text-sm text-muted-foreground">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
        <div class="flex items-center gap-2 mt-2">
          <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 rounded bg-muted hover:bg-border flex items-center justify-center">
            <i data-lucide="minus" class="w-4 h-4"></i>
          </button>
          <span class="w-8 text-center">${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 rounded bg-muted hover:bg-border flex items-center justify-center">
            <i data-lucide="plus" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
      <button onclick="removeFromCart(${item.id})" class="p-2 text-red-500 hover:bg-red-50 rounded">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');
  
  cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Produto removido dos favoritos', 'info');
  } else {
    favorites.push(productId);
    showToast('Produto adicionado aos favoritos', 'success');
  }
  
  // Update UI
  if (currentPage === 'home') {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.innerHTML = renderFeaturedProducts();
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
}

function toggleLogin() {
  const loginModal = document.getElementById('login-modal');
  if (loginModal) {
    loginModal.classList.toggle('hidden');
  }
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Simulate login
  currentUser = { email, name: email.split('@')[0] };
  showToast(`Bem-vindo, ${currentUser.name}!`, 'success');
  toggleLogin();
}

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('product-modal');
  const title = document.getElementById('product-modal-title');
  const content = document.getElementById('product-modal-content');
  
  if (!modal || !title || !content) return;
  
  title.textContent = product.name;
  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <img 
          src="${product.image}" 
          alt="${product.name}"
          class="w-full h-64 object-cover rounded-lg"
          onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgODBWMTc2TTE1MiAxMjhIMjQ4IiBzdHJva2U9IiM5QjAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4='"
        />
      </div>
      <div>
        <div class="mb-4">
          <span class="badge badge-sale">${product.category}</span>
          ${product.isOnSale ? '<span class="badge badge-sale ml-2">OFERTA</span>' : ''}
          ${product.isBestSeller ? '<span class="badge badge-bestseller ml-2">BEST SELLER</span>' : ''}
        </div>
        
        <div class="star-rating mb-4">
          ${renderStars(product.rating)}
          <span class="text-sm text-muted-foreground ml-2">(${product.reviews} avaliações)</span>
        </div>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="text-3xl font-bold text-red-800">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          ${product.isOnSale ? `<span class="text-xl text-muted-foreground line-through">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        
        <div class="space-y-4">
          <button 
            onclick="addToCart(${product.id}); closeProductModal();" 
            class="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-lg transition-colors"
          >
            Adicionar ao Carrinho
          </button>
          
          <button 
            onclick="toggleFavorite(${product.id})" 
            class="w-full border border-border bg-background text-foreground py-3 rounded-lg transition-colors hover:bg-muted"
          >
            ${favorites.includes(product.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
        </div>
        
        <div class="mt-6 text-sm text-muted-foreground">
          <p><strong>Categoria:</strong> ${product.category}</p>
          <p><strong>Avaliação:</strong> ${product.rating}/5 (${product.reviews} avaliações)</p>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById('newsletter-email').value;
  
  if (email) {
    showToast('Inscrição realizada com sucesso!', 'success');
    document.getElementById('newsletter-email').value = '';
  }
}

function processCheckout(event) {
  event.preventDefault();
  
  // Simulate checkout process
  setTimeout(() => {
    showToast('Pedido realizado com sucesso!', 'success');
    cartItems = [];
    updateCartCount();
    navigateTo('home');
  }, 1000);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="flex items-center justify-between">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="ml-4 p-1">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Trigger reflow and add show class
  toast.offsetHeight;
  toast.classList.add('show');
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.remove();
        }
      }, 300);
    }
  }, 5000);
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Scroll functions
function scrollToProducts() {
  const productsSection = document.getElementById('produtos');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToNewsletter() {
  const newsletterSection = document.getElementById('newsletter');
  if (newsletterSection) {
    newsletterSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToCategories() {
  const categoriesSection = document.getElementById('categorias');
  if (categoriesSection) {
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// New Category Pages
function renderPeripheralsPage(container) {
  const peripheralProducts = products.filter(p => p.category === 'Periféricos');
  
  container.innerHTML = `
    <div class="min-h-screen bg-background">
      <div class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onclick="navigateTo('home')" class="inline-flex items-center mb-6 text-purple-200 hover:text-white transition-colors">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar ao Início
          </button>
          <div class="flex items-center justify-center mb-6">
            <i data-lucide="mouse" class="w-16 h-16 mr-4"></i>
            <div>
              <h1 class="text-4xl font-bold mb-2">Periféricos Gaming</h1>
              <p class="text-xl text-purple-200">Teclados, mouses, headsets e acessórios para performance máxima</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-4">Produtos em Destaque</h2>
            <p class="text-lg text-muted-foreground">${peripheralProducts.length} produtos encontrados</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${peripheralProducts.map(product => renderProductCard(product)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderComponentsPage(container) {
  const componentProducts = products.filter(p => p.category === 'Componentes');
  
  container.innerHTML = `
    <div class="min-h-screen bg-background">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onclick="navigateTo('home')" class="inline-flex items-center mb-6 text-blue-200 hover:text-white transition-colors">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar ao Início
          </button>
          <div class="flex items-center justify-center mb-6">
            <i data-lucide="cpu" class="w-16 h-16 mr-4"></i>
            <div>
              <h1 class="text-4xl font-bold mb-2">Componentes PC</h1>
              <p class="text-xl text-blue-200">Processadores, memórias, SSDs e mais para seu build</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-4">Componentes Premium</h2>
            <p class="text-lg text-muted-foreground">${componentProducts.length} produtos encontrados</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${componentProducts.map(product => renderProductCard(product)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderPromotionsPage(container) {
  const promoInfo = getCurrentPromoInfo();
  const onSaleProducts = products.filter(p => p.isOnSale);
  const promoStats = getPromoStats();
  
  container.innerHTML = `
    <div class="min-h-screen bg-background">
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button onclick="navigateTo('home')" class="inline-flex items-center mb-6 text-red-200 hover:text-white transition-colors">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar ao Início
          </button>
          <div class="flex items-center justify-center mb-6">
            <i data-lucide="percent" class="w-16 h-16 mr-4"></i>
            <div>
              <h1 class="text-4xl font-bold mb-2">🔥 Promoções Ativas</h1>
              <p class="text-xl text-red-200">Ofertas especiais com descontos imperdíveis</p>
            </div>
          </div>
          
          <!-- Banner de Promoção Atual -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 border border-white/20">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-2">${promoInfo.title}</h3>
                <p class="text-lg opacity-90">${promoInfo.description}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="bg-white text-gray-800 px-4 py-2 rounded-full font-medium">
                  ${promoInfo.badge}
                </span>
                <span class="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  ${promoInfo.discount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Estatísticas de Promoções -->
      <div class="py-8 bg-gradient-to-r from-red-500 to-red-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold mb-2">${promoStats.onSale}</div>
              <div class="text-sm opacity-90">Produtos em Promoção</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold mb-2">${promoStats.bestSellers}</div>
              <div class="text-sm opacity-90">Best Sellers</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold mb-2">${Math.round((promoStats.onSale / promoStats.total) * 100)}%</div>
              <div class="text-sm opacity-90">Do catálogo em oferta</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-4">Produtos em Promoção</h2>
            <p class="text-lg text-muted-foreground">${onSaleProducts.length} ofertas ativas agora</p>
          </div>
          
          ${onSaleProducts.length === 0 ? `
            <div class="text-center py-12">
              <i data-lucide="percent" class="w-16 h-16 mx-auto text-muted-foreground mb-4"></i>
              <h3 class="text-xl font-semibold text-foreground mb-4">Nenhuma promoção ativa no momento</h3>
              <p class="text-muted-foreground mb-6">As promoções mudam dinamicamente. Volte em breve!</p>
              <button onclick="navigateTo('home')" class="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-lg transition-colors">
                Ver Todos os Produtos
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${onSaleProducts.map(product => renderProductCard(product)).join('')}
            </div>
          `}
        </div>
      </div>
    </div>
  `;
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);