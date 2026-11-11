// ===================================================================
// CATALOGUE DES PRODUITS & SERVICES DIGITAUX - ADAM ATEF SHOP
// Prix en USD et convertis automatiquement en DT (Taux: 1$ = 3.9 DT)
// ===================================================================

const CATEGORIES_METADATA = {
  all: {
    label: "Tous les Services",
    icon: "sparkles",
    badge: "Catalogue Complet"
  },
  ai: {
    label: "Intelligence Artificielle",
    icon: "bot",
    badge: "Top Productivité",
    accent: "from-cyan-500/20 to-emerald-500/10",
    border: "border-cyan-500/30",
    color: "#06b6d4"
  },
  gaming: {
    label: "Jeux & Consoles (PC, PS5, Xbox)",
    icon: "gamepad-2",
    badge: "Codes Instantanés",
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    color: "#3b82f6"
  },
  steam: {
    label: "Steam & PC",
    icon: "gamepad",
    badge: "Gaming PC",
    accent: "from-blue-600/20 to-sky-500/10",
    border: "border-blue-500/30",
    color: "#0ea5e9"
  },
  ps5: {
    label: "PlayStation 5 & PS4",
    icon: "layers",
    badge: "PS Store",
    accent: "from-indigo-600/20 to-blue-500/10",
    border: "border-indigo-500/30",
    color: "#6366f1"
  },
  xbox: {
    label: "Xbox & Game Pass",
    icon: "box",
    badge: "Xbox Live",
    accent: "from-green-600/20 to-emerald-500/10",
    border: "border-green-500/30",
    color: "#22c55e"
  },
  streaming: {
    label: "Streaming & Cinéma",
    icon: "film",
    badge: "Divertissement",
    accent: "from-rose-500/20 to-purple-500/10",
    border: "border-rose-500/30",
    color: "#f43f5e"
  }
};

const PRODUCTS_DATA = [
  // -----------------------------------------------------------------
  // 1. AI APPS & SUBSCRIPTIONS
  // -----------------------------------------------------------------
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (GPT-4o & Canvas)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Bestseller IA",
    brand: "OpenAI",
    icon: "bot",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    description: "Accès prioritaire illimité à GPT-4o, génération d'images DALL-E 3, Canvas et analyse de documents.",
    options: [
      { name: "Recharge / Activation 1 Mois ($20)", priceUSD: 20 },
      { name: "Abonnement 2 Mois ($40)", priceUSD: 40 },
      { name: "Abonnement 3 Mois ($60)", priceUSD: 60 }
    ]
  },
  {
    id: "claude-pro",
    name: "Claude Pro (Anthropic)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Dev & Code",
    brand: "Anthropic",
    icon: "cpu",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    accentColor: "from-amber-500/20 via-orange-500/10 to-transparent",
    description: "Accès à Claude 3.5 Sonnet & Opus avec fenêtre de contexte géante de 200k tokens. Idéal développeurs.",
    options: [
      { name: "Recharge / Activation 1 Mois ($20)", priceUSD: 20 },
      { name: "Abonnement 2 Mois ($40)", priceUSD: 40 }
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney AI (Génération d'Images)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Design & Art",
    brand: "Midjourney",
    icon: "sparkles",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    description: "Le générateur d'art et d'images photoréalistes le plus puissant au monde. Rendu professionnel.",
    options: [
      { name: "Plan Basic 1 Mois ($10)", priceUSD: 10 },
      { name: "Plan Standard 1 Mois ($30)", priceUSD: 30 }
    ]
  },
  {
    id: "canva-pro",
    name: "Canva Pro (Magic Studio)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Design Express",
    brand: "Canva",
    icon: "palette",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    description: "Outils magiques IA, effaceur d'arrière-plan instantané, millions de modèles et assets premium.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 5 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 35 }
    ]
  },

  // -----------------------------------------------------------------
  // 2. STEAM & PC GAMING
  // -----------------------------------------------------------------
  {
    id: "steam-wallet-us",
    name: "Steam Wallet Cards (Global & US)",
    category: "steam",
    categoryLabel: "Steam Gaming",
    badge: "Code Instantané",
    brand: "Valve Steam",
    icon: "gamepad-2",
    image: "assets/steam_gaming_ad_1794407787926.jpg",
    accentColor: "from-blue-600/20 via-sky-500/10 to-transparent",
    description: "Rechargez votre portefeuille Steam instantanément pour acheter jeux PC, skins CS2, et DLCs sans carte.",
    options: [
      { name: "Steam Wallet $5 Code", priceUSD: 5 },
      { name: "Steam Wallet $10 Code", priceUSD: 10 },
      { name: "Steam Wallet $20 Code", priceUSD: 20 },
      { name: "Steam Wallet $50 Code", priceUSD: 50 },
      { name: "Steam Wallet $100 Code", priceUSD: 100 }
    ]
  },
  {
    id: "steam-game-keys",
    name: "Clés de Jeux Steam (Sur Demande)",
    category: "steam",
    categoryLabel: "Steam Gaming",
    badge: "Jeux PC AAA",
    brand: "Steam Store",
    icon: "disc",
    image: "assets/steam_gaming_ad_1794407787926.jpg",
    accentColor: "from-indigo-600/20 via-blue-500/10 to-transparent",
    description: "Commandez n'importe quel titre Steam (Black Myth Wukong, EA FC 25, GTA V, Cyberpunk). Donnez-nous le nom !",
    options: [
      { name: "Jeu Valeur $10", priceUSD: 10 },
      { name: "Jeu Valeur $25", priceUSD: 25 },
      { name: "Jeu Valeur $50", priceUSD: 50 },
      { name: "Jeu Valeur $70 (Nouveauté AAA)", priceUSD: 70 }
    ]
  },

  // -----------------------------------------------------------------
  // 3. PLAYSTATION 5 & PS4
  // -----------------------------------------------------------------
  {
    id: "psn-cards",
    name: "Cartes PlayStation Store (PSN US & FR)",
    category: "ps5",
    categoryLabel: "PlayStation",
    badge: "Top Vente Console",
    brand: "Sony PlayStation",
    icon: "gamepad",
    image: "assets/playstation_ps5_ad_1794407805924.jpg",
    accentColor: "from-blue-700/20 via-indigo-600/10 to-transparent",
    description: "Codes officiels pour PlayStation Store. Achetez jeux PS5/PS4, DLCs, V-Bucks Fortnite et FC Points.",
    options: [
      { name: "PSN Card $10 (Store US)", priceUSD: 10 },
      { name: "PSN Card $25 (Store US)", priceUSD: 25 },
      { name: "PSN Card $50 (Store US)", priceUSD: 50 },
      { name: "PSN Card $100 (Store US)", priceUSD: 100 },
      { name: "PSN Card 10€ (Store FR)", priceUSD: 11.5 },
      { name: "PSN Card 25€ (Store FR)", priceUSD: 28.5 },
      { name: "PSN Card 50€ (Store FR)", priceUSD: 56.5 }
    ]
  },
  {
    id: "ps-plus-subscription",
    name: "Abonnement PlayStation Plus",
    category: "ps5",
    categoryLabel: "PlayStation",
    badge: "Multijoueur & Jeux",
    brand: "PlayStation Plus",
    icon: "layers",
    image: "assets/playstation_ps5_ad_1794407805924.jpg",
    accentColor: "from-amber-600/20 via-orange-500/10 to-transparent",
    description: "Multijoueur en ligne, 3 jeux offerts chaque mois et accès au catalogue de hits PlayStation.",
    options: [
      { name: "PS Plus Essential 1 Mois", priceUSD: 12 },
      { name: "PS Plus Essential 3 Mois", priceUSD: 28 },
      { name: "PS Plus Extra 3 Mois", priceUSD: 42 },
      { name: "PS Plus Deluxe / Premium 3 Mois", priceUSD: 52 }
    ]
  },

  // -----------------------------------------------------------------
  // 4. XBOX & GAME PASS
  // -----------------------------------------------------------------
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass Ultimate",
    category: "xbox",
    categoryLabel: "Xbox & PC",
    badge: "Meilleure Offre Gaming",
    brand: "Xbox Game Pass",
    icon: "box",
    image: "assets/xbox_gamepass_ad_1794407828521.jpg",
    accentColor: "from-emerald-600/20 via-green-500/10 to-transparent",
    description: "Plus de 400 jeux console, PC et Cloud Gaming inclus, plus tout le catalogue EA Play et le Xbox Live Gold.",
    options: [
      { name: "Game Pass Ultimate 1 Mois", priceUSD: 10 },
      { name: "Game Pass Ultimate 3 Mois", priceUSD: 29 },
      { name: "Game Pass Ultimate 6 Mois", priceUSD: 55 },
      { name: "Game Pass Ultimate 12 Mois", priceUSD: 95 }
    ]
  },
  {
    id: "xbox-gift-cards",
    name: "Cartes Cadeaux Xbox Wallet (US)",
    category: "xbox",
    categoryLabel: "Xbox & PC",
    badge: "Boutique Xbox",
    brand: "Microsoft Xbox",
    icon: "credit-card",
    image: "assets/xbox_gamepass_ad_1794407828521.jpg",
    accentColor: "from-green-700/20 via-emerald-600/10 to-transparent",
    description: "Rechargez votre solde Microsoft pour acquérir les derniers jeux Xbox Series X|S, extensions et skins.",
    options: [
      { name: "Xbox Card $10", priceUSD: 10 },
      { name: "Xbox Card $25", priceUSD: 25 },
      { name: "Xbox Card $50", priceUSD: 50 },
      { name: "Xbox Card $100", priceUSD: 100 }
    ]
  },

  // -----------------------------------------------------------------
  // 5. STREAMING SERVICES
  // -----------------------------------------------------------------
  {
    id: "netflix-gift-card",
    name: "Netflix Carte Cadeau & Profil Privé",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "4K Ultra HD",
    brand: "Netflix",
    icon: "film",
    image: "assets/streaming_subscriptions_ad_1794407751080.jpg",
    accentColor: "from-rose-600/20 via-red-500/10 to-transparent",
    description: "Vos séries et films préférés en 4K UHD. Codes officiels rechargeables ou profil privé sécurisé.",
    options: [
      { name: "Carte Cadeau $15 (1-2 Mois)", priceUSD: 15 },
      { name: "Carte Cadeau $25 (2-3 Mois)", priceUSD: 25 },
      { name: "Carte Cadeau $50 (~5 Mois)", priceUSD: 50 },
      { name: "Profil Privé UHD 1 Mois", priceUSD: 4.5 }
    ]
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium Individuel",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "Audio HD Sans Pub",
    brand: "Spotify",
    icon: "music",
    image: "assets/streaming_subscriptions_ad_1794407751080.jpg",
    accentColor: "from-green-600/20 via-emerald-500/10 to-transparent",
    description: "Musique illimitée, zappage infini, mode hors-ligne sans aucune publicité sur mobile et PC.",
    options: [
      { name: "Carte Cadeau $10", priceUSD: 10 },
      { name: "Abonnement Individuel 3 Mois", priceUSD: 15 },
      { name: "Abonnement Individuel 6 Mois", priceUSD: 28 },
      { name: "Abonnement Individuel 12 Mois", priceUSD: 50 }
    ]
  },
  {
    id: "shahid-vip",
    name: "Shahid VIP (شاهد)",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "Cinéma Arabe & Séries",
    brand: "Shahid MBC",
    icon: "tv",
    image: "assets/streaming_subscriptions_ad_1794407751080.jpg",
    accentColor: "from-purple-600/20 via-indigo-500/10 to-transparent",
    description: "Les productions arabes exclusives, séries exclusives du ramadan et cinéma du Moyen-Orient en HD.",
    options: [
      { name: "Abonnement 1 Mois VIP", priceUSD: 6 },
      { name: "Abonnement 3 Mois VIP", priceUSD: 16 },
      { name: "Abonnement 12 Mois VIP", priceUSD: 45 }
    ]
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium & Music",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "Zéro Pub",
    brand: "YouTube",
    icon: "play-circle",
    image: "assets/streaming_subscriptions_ad_1794407751080.jpg",
    accentColor: "from-red-600/20 via-rose-500/10 to-transparent",
    description: "Vidéos sans pub, lecture en tâche de fond téléphone éteint et accès complet à YouTube Music.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 4 },
      { name: "Abonnement 3 Mois", priceUSD: 11 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 38 }
    ]
  }
];
