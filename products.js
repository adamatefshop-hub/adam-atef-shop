// ===================================================================
// CATALOGUE DES PRODUITS & SERVICES DIGITAUX - ADAM ATEF SHOP
// Prix en USD et convertis automatiquement en DT (Taux: 1$ = 3.9 DT)
// 100% avec images haute définition officielles (Steam CDN & Artworks)
// ===================================================================

const CATEGORIES_METADATA = {
  all: { label: "Tous les Services", icon: "sparkles", badge: "Catalogue Complet" },
  ai: { label: "Intelligence Artificielle", icon: "bot", badge: "Top Productivité", color: "#06b6d4" },
  games: { label: "Jeux Vidéo", icon: "gamepad-2", badge: "Clés Officielles", color: "#3b82f6" },
  currency: { label: "Monnaie de Jeu", icon: "coins", badge: "Recharges & V-Bucks", color: "#f59e0b" },
  steam: { label: "Cartes Steam", icon: "gamepad", badge: "Steam Wallet", color: "#0ea5e9" },
  ps5: { label: "Cartes PlayStation", icon: "layers", badge: "PS Store & PS Plus", color: "#6366f1" },
  xbox: { label: "Cartes Xbox", icon: "box", badge: "Xbox & Game Pass", color: "#22c55e" },
  streaming: { label: "Streaming & Cinéma", icon: "film", badge: "Divertissement", color: "#f43f5e" }
};

const PRODUCTS_DATA = [
  // -----------------------------------------------------------------
  // 1. INTELLIGENCE ARTIFICIELLE
  // -----------------------------------------------------------------
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (Astra, GPT-4o & Canvas)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Bestseller IA",
    brand: "OpenAI",
    icon: "bot",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    description: "Accès complet aux modèles de pointe Astra & GPT-4o, génération d'images DALL-E 3, mode vocal avancé, Canvas et analyse de code.",
    options: [
      { name: "Recharge / Activation 1 Mois ($20)", priceUSD: 20 },
      { name: "Abonnement 2 Mois ($40)", priceUSD: 40 },
      { name: "Abonnement 3 Mois ($60)", priceUSD: 60 }
    ]
  },
  {
    id: "claude-pro",
    name: "Claude Pro (Fable, Sonnet 3.5 & Opus)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Dev & Code",
    brand: "Anthropic",
    icon: "cpu",
    image: "assets/ai_subscriptions_ad_1794407768863.jpg",
    description: "Accès prioritaire aux modèles Fable, Claude 3.5 Sonnet & Opus avec fenêtre de contexte géante de 200k tokens. Idéal développeurs.",
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
    description: "Le générateur d'images photoréalistes le plus puissant au monde. Rendu artistique professionnel.",
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
    description: "Outils magiques IA, effaceur d'arrière-plan instantané, millions de modèles et assets premium.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 5 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 35 }
    ]
  },

  // -----------------------------------------------------------------
  // 2. STREAMING
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
    description: "Vidéos sans pub, lecture en tâche de fond téléphone éteint et accès complet à YouTube Music.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 4 },
      { name: "Abonnement 3 Mois", priceUSD: 11 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 38 }
    ]
  },

  // -----------------------------------------------------------------
  // 3. CARTES STEAM / PSN / XBOX
  // -----------------------------------------------------------------
  {
    id: "steam-wallet-us",
    name: "Steam Wallet Cards (Global & US)",
    category: "steam",
    categoryLabel: "Cartes Steam",
    badge: "Code Instantané",
    brand: "Valve Steam",
    icon: "gamepad-2",
    image: "assets/steam_gaming_ad_1794407787926.jpg",
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
    categoryLabel: "Cartes Steam",
    badge: "Jeux PC AAA",
    brand: "Steam Store",
    icon: "disc",
    image: "assets/steam_gaming_ad_1794407787926.jpg",
    description: "Commandez n'importe quel titre Steam (Black Myth Wukong, EA FC 25, GTA V, Cyberpunk). Donnez-nous le nom !",
    options: [
      { name: "Jeu Valeur $10", priceUSD: 10 },
      { name: "Jeu Valeur $25", priceUSD: 25 },
      { name: "Jeu Valeur $50", priceUSD: 50 },
      { name: "Jeu Valeur $70 (Nouveauté AAA)", priceUSD: 70 }
    ]
  },
  {
    id: "psn-cards",
    name: "Cartes PlayStation Store (PSN US & FR)",
    category: "ps5",
    categoryLabel: "Cartes PlayStation",
    badge: "Top Vente Console",
    brand: "Sony PlayStation",
    icon: "gamepad",
    image: "assets/playstation_ps5_ad_1794407805924.jpg",
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
    categoryLabel: "Cartes PlayStation",
    badge: "Multijoueur & Jeux",
    brand: "PlayStation Plus",
    icon: "layers",
    image: "assets/playstation_ps5_ad_1794407805924.jpg",
    description: "Multijoueur en ligne, 3 jeux offerts chaque mois et accès au catalogue de hits PlayStation.",
    options: [
      { name: "PS Plus Essential 1 Mois", priceUSD: 12 },
      { name: "PS Plus Essential 3 Mois", priceUSD: 28 },
      { name: "PS Plus Extra 3 Mois", priceUSD: 42 },
      { name: "PS Plus Deluxe / Premium 3 Mois", priceUSD: 52 }
    ]
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass Ultimate",
    category: "xbox",
    categoryLabel: "Cartes Xbox",
    badge: "Meilleure Offre Gaming",
    brand: "Xbox Game Pass",
    icon: "box",
    image: "assets/xbox_gamepass_ad_1794407828521.jpg",
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
    categoryLabel: "Cartes Xbox",
    badge: "Boutique Xbox",
    brand: "Microsoft Xbox",
    icon: "credit-card",
    image: "assets/xbox_gamepass_ad_1794407828521.jpg",
    description: "Rechargez votre solde Microsoft pour acquérir les derniers jeux Xbox Series X|S, extensions et skins.",
    options: [
      { name: "Xbox Card $10", priceUSD: 10 },
      { name: "Xbox Card $25", priceUSD: 25 },
      { name: "Xbox Card $50", priceUSD: 50 },
      { name: "Xbox Card $100", priceUSD: 100 }
    ]
  },

  // -----------------------------------------------------------------
  // 4. MONNAIE DE JEU & RECHARGES POPULAIRES
  // -----------------------------------------------------------------
  {
    id: "robux-roblox",
    name: "Robux (Roblox)",
    brand: "Roblox",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "blocks",
    image: "assets/roblox.jpg",
    description: "Cartes cadeaux Roblox officielles pour acheter des Robux, skins, avatars et passes de jeu.",
    options: [
      { name: "800 Robux ($10)", priceUSD: 10 },
      { name: "2 000 Robux ($25)", priceUSD: 25 },
      { name: "4 500 Robux ($50)", priceUSD: 50 },
      { name: "10 000 Robux ($100)", priceUSD: 100 }
    ]
  },
  {
    id: "fortnite-v-bucks",
    name: "Fortnite V-Bucks",
    brand: "Epic Games",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "zap",
    image: "assets/fortnite_vbucks.jpg",
    description: "V-Bucks pour la boutique d'objets Fortnite, le Pass de combat, emotes et skins exclusifs.",
    options: [
      { name: "1 000 V-Bucks", priceUSD: 9 },
      { name: "2 800 V-Bucks", priceUSD: 23 },
      { name: "5 000 V-Bucks", priceUSD: 36 },
      { name: "13 500 V-Bucks", priceUSD: 90 }
    ]
  },
  {
    id: "minecoins-minecraft",
    name: "Minecoins (Minecraft)",
    brand: "Mojang",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "pickaxe",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1672970/header.jpg",
    description: "Minecoins pour le Marketplace Minecraft : mondes créatifs, skins de créateurs et packs de textures.",
    options: [
      { name: "1 020 Minecoins", priceUSD: 8 },
      { name: "1 720 Minecoins", priceUSD: 13 },
      { name: "3 500 Minecoins", priceUSD: 26 }
    ]
  },
  {
    id: "gta-online-shark-cards",
    name: "GTA Online Shark Cards",
    brand: "Rockstar Games",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "banknote",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    description: "Cartes Shark officielles pour renflouer votre compte bancaire Maze Bank dans GTA Online.",
    options: [
      { name: "Red Shark (100 000 GTA$)", priceUSD: 2 },
      { name: "Green Shark (250 000 GTA$)", priceUSD: 5 },
      { name: "Bull Shark (500 000 GTA$)", priceUSD: 10 },
      { name: "Great White (1 250 000 GTA$)", priceUSD: 20 },
      { name: "Whale Shark (3 500 000 GTA$)", priceUSD: 50 },
      { name: "Megalodon (8 000 000 GTA$)", priceUSD: 100 }
    ]
  },
  {
    id: "call-of-duty-points",
    name: "Call of Duty Points (CP)",
    brand: "Activision",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "crosshair",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    description: "Points COD valables sur Warzone, Black Ops 6 et Modern Warfare pour skins et Battle Pass.",
    options: [
      { name: "1 100 CP", priceUSD: 10 },
      { name: "2 400 CP", priceUSD: 20 },
      { name: "5 000 CP", priceUSD: 40 },
      { name: "10 000 CP", priceUSD: 80 }
    ]
  },
  {
    id: "ea-fc-points",
    name: "EA Sports FC Points (FIFA)",
    brand: "EA Sports",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "trophy",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
    description: "Points FC / FIFA pour ouvrir des packs et drafter dans Ultimate Team (FUT).",
    options: [
      { name: "1 050 FC Points", priceUSD: 8 },
      { name: "2 800 FC Points", priceUSD: 22 },
      { name: "5 900 FC Points", priceUSD: 45 },
      { name: "12 000 FC Points", priceUSD: 90 }
    ]
  },
  {
    id: "free-fire-diamants",
    name: "Free Fire Diamants",
    brand: "Garena",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "flame",
    image: "assets/free_fire.jpg",
    description: "Recharge directe de Diamants Free Fire par ID joueur ou code officiel pour Pass et skins.",
    options: [
      { name: "100 Diamants", priceUSD: 1 },
      { name: "520 Diamants", priceUSD: 5 },
      { name: "1 060 Diamants", priceUSD: 10 },
      { name: "2 180 Diamants", priceUSD: 20 }
    ]
  },
  {
    id: "pubg-mobile-uc",
    name: "PUBG Mobile Unknown Cash (UC)",
    brand: "Krafton",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "target",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    description: "Recharge UC PUBG Mobile instantanée pour Royale Pass, caisses d'armes et tenues mythiques.",
    options: [
      { name: "60 UC", priceUSD: 1 },
      { name: "325 UC", priceUSD: 5 },
      { name: "660 UC", priceUSD: 10 },
      { name: "1 800 UC", priceUSD: 25 }
    ]
  },
  {
    id: "valorant-points",
    name: "Valorant Points (VP)",
    brand: "Riot Games",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "swords",
    image: "assets/valorant.jpg",
    description: "Cartes Valorant Points pour acheter les collections de skins Vandal, Phantom et passes de combat.",
    options: [
      { name: "475 VP", priceUSD: 5 },
      { name: "1 000 VP", priceUSD: 10 },
      { name: "2 050 VP", priceUSD: 20 },
      { name: "3 650 VP", priceUSD: 35 }
    ]
  },
  {
    id: "league-of-legends-rp",
    name: "League of Legends RP",
    brand: "Riot Games",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "shield",
    image: "assets/league_of_legends.jpg",
    description: "Riot Points pour débloquer champions, skins légendaires, balises et passes d'événements LoL.",
    options: [
      { name: "575 RP", priceUSD: 5 },
      { name: "1 380 RP", priceUSD: 10 },
      { name: "2 800 RP", priceUSD: 20 }
    ]
  },
  {
    id: "genshin-impact-cristaux",
    name: "Genshin Impact Cristaux de la Genèse",
    brand: "HoYoverse",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "gem",
    image: "assets/genshin_impact.jpg",
    description: "Cristaux primaires pour vos invocations de personnages et d'armes sur Genshin Impact.",
    options: [
      { name: "300 Cristaux", priceUSD: 5 },
      { name: "980 Cristaux", priceUSD: 15 },
      { name: "1 980 Cristaux", priceUSD: 30 },
      { name: "3 280 Cristaux", priceUSD: 50 }
    ]
  },
  {
    id: "apex-legends-coins",
    name: "Apex Legends Coins",
    brand: "EA Respawn",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "star",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    description: "Pièces Apex pour débloquer de nouvelles légendes, skins d'armes légendaires et passes.",
    options: [
      { name: "1 000 Apex Coins", priceUSD: 10 },
      { name: "2 150 Apex Coins", priceUSD: 20 },
      { name: "4 350 Apex Coins", priceUSD: 40 }
    ]
  },
  {
    id: "fortnite-crew",
    name: "Abonnement Club de Fortnite (Crew)",
    brand: "Epic Games",
    category: "currency",
    categoryLabel: "Monnaie de jeu",
    icon: "crown",
    image: "assets/fortnite_crew.jpg",
    description: "Pass de combat inclus, 1 000 V-Bucks par mois et pack de skins exclusifs de l'équipage.",
    options: [
      { name: "1 mois d'abonnement", priceUSD: 12 },
      { name: "3 mois d'abonnement", priceUSD: 36 }
    ]
  },

  // -----------------------------------------------------------------
  // 5. LES 56 JEUX VIDÉO POPULAIRES (AVEC POCHETTES HD STEAM CDN)
  // -----------------------------------------------------------------
  {
    id: "minecraft-java-bedrock",
    name: "Minecraft: Java & Bedrock Edition",
    brand: "Mojang",
    category: "games",
    categoryLabel: "Jeux",
    icon: "pickaxe",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1672970/header.jpg",
    description: "Le jeu de construction et de survie culte. Inclut les deux éditions Java et Bedrock sur PC et console.",
    options: [
      { name: "PC (Compte / Clé Microsoft)", priceUSD: 30 },
      { name: "PlayStation 5 / PS4", priceUSD: 30 },
      { name: "Xbox Series X|S / One", priceUSD: 30 }
    ]
  },
  {
    id: "grand-theft-auto-v",
    name: "Grand Theft Auto V (GTA V)",
    brand: "Rockstar Games",
    category: "games",
    categoryLabel: "Jeux",
    icon: "car",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
    description: "L'édition complète de GTA V avec le solo culte de Los Santos et l'accès complet à GTA Online.",
    options: [
      { name: "PC (Clé Steam / Rockstar)", priceUSD: 15 },
      { name: "PlayStation 5", priceUSD: 20 },
      { name: "Xbox Series X|S", priceUSD: 20 }
    ]
  },
  {
    id: "red-dead-redemption-2",
    name: "Red Dead Redemption 2",
    brand: "Rockstar Games",
    category: "games",
    categoryLabel: "Jeux",
    icon: "tent",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    description: "Le chef-d'œuvre western d'Arthur Morgan en monde ouvert. Solo narratif grandiose et Red Dead Online.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 30 },
      { name: "PlayStation 5", priceUSD: 30 },
      { name: "Xbox Series X|S", priceUSD: 30 }
    ]
  },
  {
    id: "ea-sports-fc-26",
    name: "EA SPORTS FC 25 / FC 26 (FIFA)",
    brand: "EA Sports",
    category: "games",
    categoryLabel: "Jeux",
    icon: "trophy",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
    description: "La référence du football mondial. Ultimate Team, mode Carrière, clubs pros avec toutes les licences officielles.",
    options: [
      { name: "PC (Clé Steam / EA App)", priceUSD: 70 },
      { name: "PlayStation 5", priceUSD: 70 },
      { name: "Xbox Series X|S", priceUSD: 70 }
    ]
  },
  {
    id: "call-of-duty-black-ops-6",
    name: "Call of Duty: Black Ops 6",
    brand: "Activision",
    category: "games",
    categoryLabel: "Jeux",
    icon: "crosshair",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    description: "Le blockbuster FPS d'espionnage. Campagne d'action explosive, multijoueur nerveux et mode Zombies par manches.",
    options: [
      { name: "PC (Clé Steam / Battle.net)", priceUSD: 70 },
      { name: "PlayStation 5", priceUSD: 70 },
      { name: "Xbox Series X|S", priceUSD: 70 }
    ]
  },
  {
    id: "call-of-duty-modern-warfare-iii",
    name: "Call of Duty: Modern Warfare III",
    brand: "Activision",
    category: "games",
    categoryLabel: "Jeux",
    icon: "crosshair",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    description: "Suite directe de MWII avec toutes les maps emblématiques remasterisées et Zombies en monde ouvert.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "black-myth-wukong",
    name: "Black Myth: Wukong",
    brand: "Game Science",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sparkles",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    description: "L'Action-RPG phénomène inspiré de La Pérégrination vers l'Ouest. Graphismes et combats époustouflants.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 }
    ]
  },
  {
    id: "elden-ring",
    name: "Elden Ring",
    brand: "FromSoftware",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sword",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    description: "Le chef-d'œuvre jeu de l'année de FromSoftware et George R. R. Martin dans l'Entre-Terre.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    brand: "CD Projekt Red",
    category: "games",
    categoryLabel: "Jeux",
    icon: "cpu",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    description: "Le RPG futuriste ultime à Night City avec Keanu Reeves et Idris Elba (extension Phantom Liberty).",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 30 },
      { name: "PlayStation 5", priceUSD: 30 },
      { name: "Xbox Series X|S", priceUSD: 30 }
    ]
  },
  {
    id: "the-witcher-3-wild-hunt",
    name: "The Witcher 3: Wild Hunt (Complete Edition)",
    brand: "CD Projekt Red",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sword",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    description: "Incarnez Geralt de Riv dans le RPG fantastique le plus primé de l'histoire avec tous ses DLCs.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 15 },
      { name: "PlayStation 5", priceUSD: 20 },
      { name: "Xbox Series X|S", priceUSD: 20 }
    ]
  },
  {
    id: "baldurs-gate-3",
    name: "Baldur's Gate 3",
    brand: "Larian Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "dices",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "Le RPG de la décennie. Liberté totale, univers D&D immersif et coopération jusqu'à 4 joueurs.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 }
    ]
  },
  {
    id: "hogwarts-legacy",
    name: "Hogwarts Legacy : L'Héritage de Poudlard",
    brand: "Warner Bros.",
    category: "games",
    categoryLabel: "Jeux",
    icon: "wand",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    description: "Vivez votre propre aventure de sorcier dans le Poudlard des années 1800 en monde ouvert magique.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "god-of-war-2018",
    name: "God of War (2018)",
    brand: "PlayStation PC",
    category: "games",
    categoryLabel: "Jeux",
    icon: "axe",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    description: "Kratos et Atreus s'aventurent dans les terres sauvages de la mythologie nordique.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 20 },
      { name: "PlayStation 5", priceUSD: 20 }
    ]
  },
  {
    id: "god-of-war-ragnarok",
    name: "God of War Ragnarök",
    brand: "PlayStation PC",
    category: "games",
    categoryLabel: "Jeux",
    icon: "axe",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
    description: "L'épopée finale nordique de Kratos et Atreus face aux dieux d'Asgard.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 50 },
      { name: "PlayStation 5", priceUSD: 50 }
    ]
  },
  {
    id: "marvels-spider-man-2",
    name: "Marvel's Spider-Man Remastered / Spider-Man 2",
    brand: "PlayStation Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "bug",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    description: "Tissez vos toiles dans New York aux côtés de Peter Parker et Miles Morales contre Venom.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 }
    ]
  },
  {
    id: "the-last-of-us-part-i",
    name: "The Last of Us Part I",
    brand: "Naughty Dog",
    category: "games",
    categoryLabel: "Jeux",
    icon: "heart-pulse",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
    description: "Le chef-d'œuvre post-apocalyptique de Joel et Ellie entièrement recréé avec le moteur PS5.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 60 }
    ]
  },
  {
    id: "ghost-of-tsushima",
    name: "Ghost of Tsushima Director's Cut",
    brand: "PlayStation PC",
    category: "games",
    categoryLabel: "Jeux",
    icon: "swords",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
    description: "Incarnez Jin Sakai, le Samouraï devenu Fantôme, pour libérer l'île de Tsushima de l'invasion mongole.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 }
    ]
  },
  {
    id: "horizon-forbidden-west",
    name: "Horizon Forbidden West Complete Edition",
    brand: "Guerrilla Games",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sparkles",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg",
    description: "Aloy explore l'Ouest prohibé pour affronter de gigantesques machines dans un monde futuriste luxuriant.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 50 },
      { name: "PlayStation 5", priceUSD: 50 }
    ]
  },
  {
    id: "forza-horizon-5",
    name: "Forza Horizon 5",
    brand: "Xbox Game Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "car",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    description: "La référence ultime de la course automobile en monde ouvert à travers les paysages du Mexique.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "helldivers-2",
    name: "Helldivers 2",
    brand: "PlayStation PC",
    category: "games",
    categoryLabel: "Jeux",
    icon: "rocket",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
    description: "Le shooter coopératif à 4 joueurs le plus intense. Répandez la Démocratie face aux hordes d'insectes et robots.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 }
    ]
  },
  {
    id: "palworld",
    name: "Palworld",
    brand: "Pocketpair",
    category: "games",
    categoryLabel: "Jeux",
    icon: "paw-print",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    description: "Capturez des créatures mystérieuses appelées 'Pals', construisez des bases et survivez en multijoueur.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 30 },
      { name: "Xbox Series X|S", priceUSD: 30 }
    ]
  },
  {
    id: "starfield",
    name: "Starfield",
    brand: "Bethesda",
    category: "games",
    categoryLabel: "Jeux",
    icon: "orbit",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg",
    description: "Le RPG spatial nouvelle génération des créateurs de Skyrim. Explorez plus de 1 000 planètes.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 70 },
      { name: "Xbox Series X|S", priceUSD: 70 }
    ]
  },
  {
    id: "diablo-iv",
    name: "Diablo IV",
    brand: "Blizzard Entertainment",
    category: "games",
    categoryLabel: "Jeux",
    icon: "flame",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
    description: "L'Action-RPG sanglant de Blizzard. Affrontez Lilith dans Sanctuaire avec un gameplay de combat frénétique.",
    options: [
      { name: "PC (Clé Steam / Battle.net)", priceUSD: 70 },
      { name: "PlayStation 5", priceUSD: 70 },
      { name: "Xbox Series X|S", priceUSD: 70 }
    ]
  },
  {
    id: "mortal-kombat-1",
    name: "Mortal Kombat 1",
    brand: "Warner Bros.",
    category: "games",
    categoryLabel: "Jeux",
    icon: "swords",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1971870/header.jpg",
    description: "Une nouvelle ère de combats brutaux inaugurée par le Dieu du Feu Liu Kang avec système de Kaméo.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 50 },
      { name: "PlayStation 5", priceUSD: 50 },
      { name: "Xbox Series X|S", priceUSD: 50 }
    ]
  },
  {
    id: "tekken-8",
    name: "Tekken 8",
    brand: "Bandai Namco",
    category: "games",
    categoryLabel: "Jeux",
    icon: "swords",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg",
    description: "Le roi du jeu de combat 3D sous Unreal Engine 5. Système Heat inédit et affrontement légendaire Kazama/Mishima.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "street-fighter-6",
    name: "Street Fighter 6",
    brand: "Capcom",
    category: "games",
    categoryLabel: "Jeux",
    icon: "swords",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1364780/header.jpg",
    description: "Trois modes de jeu révolutionnaires : World Tour, Fighting Ground et Battle Hub avec commandes modernes.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "dragon-ball-sparking-zero",
    name: "Dragon Ball: Sparking! ZERO",
    brand: "Bandai Namco",
    category: "games",
    categoryLabel: "Jeux",
    icon: "zap",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790600/header.jpg",
    description: "Le successeur légendaire de la série Budokai Tenkaichi avec plus de 180 combattants surpuissants.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "nba-2k25",
    name: "NBA 2K25",
    brand: "2K Sports",
    category: "games",
    categoryLabel: "Jeux",
    icon: "trophy",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg",
    description: "La simulation de basketball ultime propulsée par la technologie ProPLAY. Dominez dans MyCAREER et MyTEAM.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "counter-strike-2-prime",
    name: "Counter-Strike 2 Statut Prime",
    brand: "Valve",
    category: "games",
    categoryLabel: "Jeux",
    icon: "crosshair",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    description: "Passez Prime sur CS2 : matchmaking compétitif certifié anti-triche et drops hebdomadaires de caisses.",
    options: [
      { name: "PC (Compte Steam)", priceUSD: 15 }
    ]
  },
  {
    id: "rust",
    name: "Rust",
    brand: "Facepunch Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "hammer",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
    description: "Le jeu de survie multijoueur impitoyable. Construisez votre forteresse, fabriquez vos armes et raidez.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 }
    ]
  },
  {
    id: "lethal-company",
    name: "Lethal Company",
    brand: "Zeekerss",
    category: "games",
    categoryLabel: "Jeux",
    icon: "ghost",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg",
    description: "Jeu d'horreur coopératif viral à 4 joueurs. Fouillez des lunes abandonnées et respectez les quotas.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 10 }
    ]
  },
  {
    id: "terraria",
    name: "Terraria",
    brand: "Re-Logic",
    category: "games",
    categoryLabel: "Jeux",
    icon: "pickaxe",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    description: "Creusez, combattez, explorez et construisez dans l'aventure bac-à-sable 2D aux milliers d'objets.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 10 },
      { name: "PlayStation 5", priceUSD: 10 },
      { name: "Xbox Series X|S", priceUSD: 10 }
    ]
  },
  {
    id: "stardew-valley",
    name: "Stardew Valley",
    brand: "ConcernedApe",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sprout",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    description: "Reprenez la ferme de votre grand-père, cultivez, pêchez et vivez la vie de village en solo ou en coop.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 15 },
      { name: "PlayStation 5", priceUSD: 15 },
      { name: "Xbox Series X|S", priceUSD: 15 }
    ]
  },
  {
    id: "hollow-knight",
    name: "Hollow Knight",
    brand: "Team Cherry",
    category: "games",
    categoryLabel: "Jeux",
    icon: "bug",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    description: "Le chef-d'œuvre du genre Metroidvania en 2D. Explorez le royaume en ruines d'Hallownest.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 15 },
      { name: "PlayStation 5", priceUSD: 15 },
      { name: "Xbox Series X|S", priceUSD: 15 }
    ]
  },
  {
    id: "hades",
    name: "Hades",
    brand: "Supergiant Games",
    category: "games",
    categoryLabel: "Jeux",
    icon: "flame",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    description: "Le rogue-like d'action primé. Bravez les Enfers grecs sous les traits de Zagreus avec l'aide des dieux de l'Olympe.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 25 },
      { name: "PlayStation 5", priceUSD: 25 },
      { name: "Xbox Series X|S", priceUSD: 25 }
    ]
  },
  {
    id: "it-takes-two",
    name: "It Takes Two",
    brand: "Electronic Arts",
    category: "games",
    categoryLabel: "Jeux",
    icon: "users",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    description: "L'aventure coopérative pure récompensée Jeu de l'Année (GOTY). Jouez à deux avec le Pass Ami gratuit.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "sea-of-thieves",
    name: "Sea of Thieves",
    brand: "Xbox Game Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "anchor",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
    description: "L'expérience pirate multijoueur absolue : naviguez, combattez, pillez et devenez une légende pirate.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "halo-the-master-chief-collection",
    name: "Halo: The Master Chief Collection",
    brand: "Xbox Game Studios",
    category: "games",
    categoryLabel: "Jeux",
    icon: "shield",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg",
    description: "Six chefs-d'œuvre Halo réunis dans une seule compilation légendaire avec multijoueur cross-play.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "monster-hunter-wilds",
    name: "Monster Hunter Wilds",
    brand: "Capcom",
    category: "games",
    categoryLabel: "Jeux",
    icon: "paw-print",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg",
    description: "La nouvelle génération de chasse aux monstres dans des écosystèmes dynamiques et vivants.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 70 },
      { name: "PlayStation 5", priceUSD: 70 },
      { name: "Xbox Series X|S", priceUSD: 70 }
    ]
  },
  {
    id: "dying-light-2",
    name: "Dying Light 2 Stay Human",
    brand: "Techland",
    category: "games",
    categoryLabel: "Jeux",
    icon: "biohazard",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg",
    description: "Parkour, survie et combats viscéraux dans une vaste métropole infectée par les zombies.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 30 },
      { name: "PlayStation 5", priceUSD: 30 },
      { name: "Xbox Series X|S", priceUSD: 30 }
    ]
  },
  {
    id: "resident-evil-4",
    name: "Resident Evil 4 Remake",
    brand: "Capcom",
    category: "games",
    categoryLabel: "Jeux",
    icon: "skull",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    description: "La renaissance du classique absolu du survival-horror avec Léon S. Kennedy en mission de sauvetage.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "resident-evil-village",
    name: "Resident Evil Village",
    brand: "Capcom",
    category: "games",
    categoryLabel: "Jeux",
    icon: "skull",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    description: "Ethan Winters affronte Lady Dimitrescu et les monstres d'un village enneigé cauchemardesque.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 20 },
      { name: "PlayStation 5", priceUSD: 20 },
      { name: "Xbox Series X|S", priceUSD: 20 }
    ]
  },
  {
    id: "sekiro-shadows-die-twice",
    name: "Sekiro: Shadows Die Twice",
    brand: "FromSoftware",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sword",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    description: "Jeu de l'Année (GOTY). Maîtrisez le sabre et la prothèse de shinobi dans le Japon féodal de l'ère Sengoku.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 60 },
      { name: "PlayStation 5", priceUSD: 60 },
      { name: "Xbox Series X|S", priceUSD: 60 }
    ]
  },
  {
    id: "dark-souls-iii",
    name: "Dark Souls III",
    brand: "FromSoftware",
    category: "games",
    categoryLabel: "Jeux",
    icon: "flame",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    description: "Le point culminant de la trilogie légendaire des Souls. Combats de boss épiques et ambiance ténébreuse.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  },
  {
    id: "persona-3-reload",
    name: "Persona 3 Reload",
    brand: "SEGA / ATLUS",
    category: "games",
    categoryLabel: "Jeux",
    icon: "moon",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg",
    description: "Le remake magnifique du RPG japonais culte. Explorez l'Heure Sombre et créez des liens inoubliables.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 50 },
      { name: "PlayStation 5", priceUSD: 50 },
      { name: "Xbox Series X|S", priceUSD: 50 }
    ]
  },
  {
    id: "final-fantasy-vii-remake",
    name: "Final Fantasy VII Remake Intergrade",
    brand: "Square Enix",
    category: "games",
    categoryLabel: "Jeux",
    icon: "sword",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
    description: "Revivez l'aventure spectaculaire de Cloud Strife et d'Avalanche à Midgar avec des combats en temps réel.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 70 },
      { name: "PlayStation 5", priceUSD: 70 }
    ]
  },
  {
    id: "death-stranding-directors-cut",
    name: "Death Stranding Director's Cut",
    brand: "Kojima Productions",
    category: "games",
    categoryLabel: "Jeux",
    icon: "package",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg",
    description: "L'expérience unique signée Hideo Kojima avec Norman Reedus pour reconnecter une société fracturée.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 }
    ]
  },
  {
    id: "dead-by-daylight",
    name: "Dead by Daylight",
    brand: "Behaviour Interactive",
    category: "games",
    categoryLabel: "Jeux",
    icon: "ghost",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
    description: "Jeu d'horreur asymétrique 4 contre 1. Survivez en équipe ou incarnez un tueur sanguinaire culte du cinéma.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 20 },
      { name: "PlayStation 5", priceUSD: 20 },
      { name: "Xbox Series X|S", priceUSD: 20 }
    ]
  },
  {
    id: "need-for-speed-unbound",
    name: "Need for Speed Unbound",
    brand: "Electronic Arts",
    category: "games",
    categoryLabel: "Jeux",
    icon: "car",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
    description: "Courses de rue clandestines avec un style visuel graffiti anime innovant. Échappez aux flics de Lakeshore.",
    options: [
      { name: "PC (Clé Steam)", priceUSD: 40 },
      { name: "PlayStation 5", priceUSD: 40 },
      { name: "Xbox Series X|S", priceUSD: 40 }
    ]
  }
];
