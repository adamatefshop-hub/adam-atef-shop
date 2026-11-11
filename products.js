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

// ===================================================================
// MONNAIE DE JEU & JEUX INDIVIDUELS
// Prix de référence en USD. Disponibilité confirmée sur WhatsApp.
// ===================================================================

const GRADIENTS = [
  ["#1E3A78", "#2F5BEA"], ["#0F766E", "#14B8A6"], ["#7C2D12", "#EA580C"], ["#581C87", "#A855F7"],
  ["#831843", "#EC4899"], ["#14532D", "#22C55E"], ["#1E293B", "#475569"], ["#7F1D1D", "#EF4444"],
  ["#0C4A6E", "#0EA5E9"], ["#713F12", "#EAB308"]
];

function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

// Carte de monnaie / recharge : options = [[label, usd], ...]
function currency(name, brand, icon, colors, desc, options) {
  return {
    id: slugify(name), name, brand, category: "currency", categoryLabel: "Monnaie de jeu",
    icon, colors, description: desc,
    options: options.map(o => ({ name: o[0], priceUSD: o[1] }))
  };
}

// Jeu individuel : plateformes { pc, ps, xbox } = prix USD (omettre si indisponible)
function game(name, brand, icon, desc, prices) {
  const options = [];
  if (prices.pc != null) options.push({ name: "PC (clé Steam)", priceUSD: prices.pc });
  if (prices.ps != null) options.push({ name: "PlayStation 5", priceUSD: prices.ps });
  if (prices.xbox != null) options.push({ name: "Xbox Series X|S", priceUSD: prices.xbox });
  const idx = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADIENTS.length;
  return {
    id: slugify(name), name, brand, category: "games", categoryLabel: "Jeux",
    icon, colors: GRADIENTS[idx], description: desc, options
  };
}

PRODUCTS_DATA.push(
  // ------------------------- MONNAIE DE JEU -------------------------
  currency("Robux (Roblox)", "Roblox", "blocks", ["#B91C1C", "#EF4444"], "Cartes cadeaux Roblox pour acheter des Robux, avatars et objets en jeu.",
    [["800 Robux ($10)", 10], ["2 000 Robux ($25)", 25], ["4 500 Robux ($50)", 50], ["10 000 Robux ($100)", 100]]),
  currency("Fortnite V-Bucks", "Epic Games", "zap", ["#4C1D95", "#8B5CF6"], "V-Bucks pour la boutique d'objets Fortnite, le Pass de combat et les skins.",
    [["1 000 V-Bucks", 9], ["2 800 V-Bucks", 23], ["5 000 V-Bucks", 36], ["13 500 V-Bucks", 90]]),
  currency("Minecoins (Minecraft)", "Minecraft", "pickaxe", ["#166534", "#4ADE80"], "Minecoins pour le Marketplace Minecraft : skins, mondes et packs de textures.",
    [["1 020 Minecoins", 8], ["1 720 Minecoins", 13], ["3 500 Minecoins", 26]]),
  currency("GTA Online Shark Cards", "Rockstar Games", "banknote", ["#14532D", "#16A34A"], "Shark Cards pour obtenir des GTA\$ dans GTA Online.",
    [["Red Shark (100 000 GTA$)", 2], ["Green Shark (250 000 GTA$)", 5], ["Bull Shark (500 000 GTA$)", 10], ["Great White (1 250 000 GTA$)", 20], ["Whale Shark (3 500 000 GTA$)", 50], ["Megalodon (8 000 000 GTA$)", 100]]),
  currency("Call of Duty Points", "Activision", "crosshair", ["#1F2937", "#6B7280"], "Points COD pour le Battle Pass et les packs d'armes sur Warzone, Black Ops et Mobile.",
    [["1 100 CP", 10], ["2 400 CP", 20], ["5 000 CP", 40], ["10 000 CP", 80]]),
  currency("EA FC Points", "EA Sports", "trophy", ["#0F172A", "#2563EB"], "FC Points pour ouvrir des packs dans Ultimate Team.",
    [["1 050 FC Points", 8], ["2 800 FC Points", 22], ["5 900 FC Points", 45], ["12 000 FC Points", 90]]),
  currency("Free Fire Diamants", "Garena", "flame", ["#9A3412", "#F97316"], "Diamants Free Fire pour skins, personnages et Elite Pass.",
    [["100 Diamants", 1], ["520 Diamants", 5], ["1 060 Diamants", 10], ["2 180 Diamants", 20]]),
  currency("PUBG Mobile UC", "Krafton", "target", ["#713F12", "#CA8A04"], "UC pour le Royale Pass, skins et caisses PUBG Mobile.",
    [["60 UC", 1], ["325 UC", 5], ["660 UC", 10], ["1 800 UC", 25]]),
  currency("Valorant Points", "Riot Games", "swords", ["#7F1D1D", "#F43F5E"], "Valorant Points pour skins d'armes, agents et Battle Pass.",
    [["475 VP", 5], ["1 000 VP", 10], ["2 050 VP", 20], ["3 650 VP", 35]]),
  currency("League of Legends RP", "Riot Games", "shield", ["#1E3A8A", "#3B82F6"], "Riot Points pour skins, champions et passes de League of Legends.",
    [["575 RP", 5], ["1 380 RP", 10], ["2 800 RP", 20]]),
  currency("Genshin Impact Cristaux", "HoYoverse", "gem", ["#0E7490", "#22D3EE"], "Cristaux de la Genèse pour tirages de personnages et d'armes.",
    [["300 Cristaux", 5], ["980 Cristaux", 15], ["1 980 Cristaux", 30], ["3 280 Cristaux", 50]]),
  currency("Apex Legends Coins", "EA", "star", ["#7F1D1D", "#DC2626"], "Apex Coins pour le Battle Pass, skins légendaires et packs.",
    [["1 000 Apex Coins", 10], ["2 150 Apex Coins", 20], ["4 350 Apex Coins", 40]]),
  currency("Fortnite Crew", "Epic Games", "crown", ["#312E81", "#6366F1"], "Abonnement Fortnite Crew : Pass de combat, 1 000 V-Bucks par mois et skin exclusif.",
    [["1 mois", 12], ["3 mois", 36]]),

  // ------------------------- JEUX -------------------------
  game("Minecraft Java & Bedrock", "Mojang", "pickaxe", "Les éditions Java et Bedrock pour PC, ou l'édition Bedrock sur console.", { pc: 30, ps: 30, xbox: 30 }),
  game("Grand Theft Auto V", "Rockstar Games", "car", "GTA V avec GTA Online, solo et mode histoire complet.", { pc: 15, ps: 20, xbox: 20 }),
  game("Red Dead Redemption 2", "Rockstar Games", "tent", "Western en monde ouvert, histoire complète et Red Dead Online.", { pc: 30, ps: 30, xbox: 30 }),
  game("EA Sports FC 26", "EA Sports", "trophy", "Le dernier opus de football avec Ultimate Team et modes carrière.", { pc: 70, ps: 70, xbox: 70 }),
  game("Call of Duty: Black Ops 7", "Activision", "crosshair", "Campagne, multijoueur et Zombies.", { pc: 70, ps: 70, xbox: 70 }),
  game("Call of Duty: Black Ops 6", "Activision", "crosshair", "Campagne, multijoueur et Zombies.", { pc: 70, ps: 70, xbox: 70 }),
  game("Call of Duty: Modern Warfare III", "Activision", "crosshair", "Campagne, multijoueur et Zombies.", { pc: 60, ps: 60, xbox: 60 }),
  game("Battlefield 6", "EA", "shield", "Shooter militaire à grande échelle, solo et multijoueur.", { pc: 70, ps: 70, xbox: 70 }),
  game("Elden Ring", "FromSoftware", "sword", "RPG d'action en monde ouvert, créé avec George R. R. Martin.", { pc: 60, ps: 60, xbox: 60 }),
  game("Sekiro: Shadows Die Twice", "FromSoftware", "sword", "Action-aventure exigeante dans le Japon féodal.", { pc: 60, ps: 60, xbox: 60 }),
  game("Dark Souls III", "FromSoftware", "flame", "Le dernier chapitre de la saga Dark Souls.", { pc: 40, ps: 40, xbox: 40 }),
  game("Cyberpunk 2077", "CD Projekt Red", "cpu", "RPG futuriste à Night City, avec l'extension Phantom Liberty en option.", { pc: 30, ps: 30, xbox: 30 }),
  game("The Witcher 3: Wild Hunt", "CD Projekt Red", "sword", "Édition complète du RPG culte avec extensions.", { pc: 15, ps: 20, xbox: 20 }),
  game("Baldur's Gate 3", "Larian Studios", "dices", "RPG au tour par tour, coopératif jusqu'à 4 joueurs.", { pc: 60, ps: 60 }),
  game("Hogwarts Legacy", "Warner Bros.", "wand", "RPG en monde ouvert dans l'univers de Harry Potter.", { pc: 40, ps: 40, xbox: 40 }),
  game("God of War (2018)", "Santa Monica Studio", "axe", "Kratos et Atreus dans les royaumes nordiques.", { pc: 20, ps: 20 }),
  game("God of War Ragnarök", "Santa Monica Studio", "axe", "La suite de God of War, fin de la saga nordique.", { pc: 50, ps: 50 }),
  game("Marvel's Spider-Man 2", "Insomniac Games", "bug", "Peter Parker et Miles Morales dans un New York ouvert.", { pc: 60, ps: 60 }),
  game("The Last of Us Part I", "Naughty Dog", "heart-pulse", "Remake de l'aventure post-apocalyptique de Joel et Ellie.", { pc: 40, ps: 60 }),
  game("Ghost of Tsushima Director's Cut", "Sucker Punch", "swords", "Samouraï en monde ouvert avec l'extension Iki Island.", { pc: 60, ps: 60 }),
  game("Horizon Forbidden West", "Guerrilla Games", "bow-arrow", "Aloy explore l'Ouest interdit, face à des machines géantes.", { pc: 50, ps: 50 }),
  game("Black Myth: Wukong", "Game Science", "sparkles", "Action-RPG inspiré de La Pérégrination vers l'Ouest.", { pc: 60, ps: 60 }),
  game("Assassin's Creed Shadows", "Ubisoft", "swords", "Assassin's Creed dans le Japon féodal.", { pc: 70, ps: 70, xbox: 70 }),
  game("Forza Horizon 5", "Playground Games", "car", "Course en monde ouvert au Mexique.", { pc: 40, xbox: 40 }),
  game("Gran Turismo 7", "Polyphony Digital", "gauge", "Simulation de course avec plus de 400 voitures.", { ps: 60 }),
  game("Resident Evil 4", "Capcom", "skull", "Remake du classique du survival horror.", { pc: 40, ps: 40, xbox: 40 }),
  game("Resident Evil Village", "Capcom", "skull", "Survival horror à la première personne.", { pc: 20, ps: 20, xbox: 20 }),
  game("Helldivers 2", "Arrowhead", "rocket", "Shooter coopératif à 4 joueurs contre des hordes d'aliens.", { pc: 40, ps: 40 }),
  game("Palworld", "Pocketpair", "paw-print", "Survie et capture de créatures en monde ouvert.", { pc: 30, xbox: 30 }),
  game("Starfield", "Bethesda", "orbit", "RPG spatial de Bethesda avec des centaines de planètes.", { pc: 70, xbox: 70 }),
  game("Diablo IV", "Blizzard", "flame", "Action-RPG, avec ou sans l'extension Vessel of Hatred.", { pc: 70, ps: 70, xbox: 70 }),
  game("Mortal Kombat 1", "NetherRealm", "swords", "Combat avec un nouveau Kombat Kronicle.", { pc: 50, ps: 50, xbox: 50 }),
  game("Tekken 8", "Bandai Namco", "swords", "Le roi du combat 3D, avec Unreal Engine 5.", { pc: 60, ps: 60, xbox: 60 }),
  game("Street Fighter 6", "Capcom", "swords", "Combat avec modes World Tour et Battle Hub.", { pc: 40, ps: 40, xbox: 40 }),
  game("Dragon Ball: Sparking! Zero", "Bandai Namco", "zap", "Plus de 180 personnages dans le combat Budokai Tenkaichi.", { pc: 60, ps: 60, xbox: 60 }),
  game("NBA 2K25", "2K Sports", "dribbble", "Simulation de basketball avec MyCAREER et MyTEAM.", { pc: 60, ps: 60, xbox: 60 }),
  game("WWE 2K25", "2K Sports", "dumbbell", "Catch avec nouveaux modes Island et MyRISE.", { pc: 60, ps: 60, xbox: 60 }),
  game("Counter-Strike 2 Prime", "Valve", "crosshair", "Statut Prime pour CS2 : matchmaking prioritaire et récompenses.", { pc: 15 }),
  game("Rust", "Facepunch", "hammer", "Survie multijoueur en monde ouvert.", { pc: 40 }),
  game("Lethal Company", "Zeekerss", "ghost", "Horreur coopérative jusqu'à 4 joueurs.", { pc: 10 }),
  game("Terraria", "Re-Logic", "pickaxe", "Exploration et construction en 2D.", { pc: 10, ps: 10, xbox: 10 }),
  game("Stardew Valley", "ConcernedApe", "sprout", "Ferme et vie de village, jouable en coopération.", { pc: 15, ps: 15, xbox: 15 }),
  game("Hollow Knight", "Team Cherry", "bug", "Metroidvania 2D dans un royaume d'insectes.", { pc: 15, ps: 15, xbox: 15 }),
  game("Hades", "Supergiant Games", "flame", "Roguelike d'action dans les Enfers grecs.", { pc: 25, ps: 25, xbox: 25 }),
  game("It Takes Two", "Hazelight", "users", "Aventure coopérative à deux joueurs.", { pc: 40, ps: 40, xbox: 40 }),
  game("Split Fiction", "Hazelight", "users", "Aventure coopérative entre science-fiction et fantasy.", { pc: 50, ps: 50, xbox: 50 }),
  game("Sea of Thieves", "Rare", "anchor", "Aventure pirate multijoueur en monde ouvert.", { pc: 40, ps: 40, xbox: 40 }),
  game("Halo: The Master Chief Collection", "343 Industries", "shield", "Six jeux Halo dans une seule collection.", { pc: 40, xbox: 40 }),
  game("Monster Hunter Wilds", "Capcom", "paw-print", "Chasse de monstres dans des écosystèmes vivants.", { pc: 70, ps: 70, xbox: 70 }),
  game("Dying Light 2", "Techland", "biohazard", "Parkour et survie dans une ville post-apocalyptique.", { pc: 30, ps: 30, xbox: 30 }),
  game("Alan Wake 2", "Remedy", "flashlight", "Survival horror narratif.", { pc: 50, ps: 50, xbox: 50 }),
  game("Persona 3 Reload", "Atlus", "moon", "Remake du JRPG culte, dans l'heure cachée.", { pc: 50, ps: 50, xbox: 50 }),
  game("Final Fantasy VII Rebirth", "Square Enix", "sword", "Deuxième partie du remake de FF7.", { pc: 70, ps: 70 }),
  game("Death Stranding Director's Cut", "Kojima Productions", "package", "Livraison dans une Amérique dévastée.", { pc: 40, ps: 40 }),
  game("Dead by Daylight", "Behaviour", "ghost", "Horreur asymétrique à 4 contre 1.", { pc: 20, ps: 20, xbox: 20 }),
  game("Need for Speed Unbound", "EA", "car", "Course de rue avec un style graphique unique.", { pc: 40, ps: 40, xbox: 40 })
);
