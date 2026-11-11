// ===================================================================
// CATALOGUE DES PRODUITS & SERVICES DIGITAUX
// Prix en USD et convertis automatiquement en DT (Taux: 1$ = 3.85 DT)
// ===================================================================

const PRODUCTS_DATA = [
  // -----------------------------------------------------------------
  // 1. STREAMING SERVICES
  // -----------------------------------------------------------------
  {
    id: "netflix-gift-card",
    name: "Netflix Gift Card & Abonnement",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "Populaire",
    icon: "film",
    description: "Accès à des milliers de films et séries en 4K Ultra HD. Activation sur votre propre compte ou profil privé.",
    options: [
      { name: "Carte Cadeau $15 (1-2 Mois)", priceUSD: 15 },
      { name: "Carte Cadeau $25 (2-3 Mois)", priceUSD: 25 },
      { name: "Carte Cadeau $50 (~5 Mois)", priceUSD: 50 },
      { name: "Profil Privé UHD 1 Mois", priceUSD: 4.5 }
    ]
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "Indispensable",
    icon: "music",
    description: "Musique illimitée sans publicité, écoute hors ligne et haute fidélité audio.",
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
    badge: "Films & Séries Arabes",
    icon: "tv",
    description: "Les meilleures séries arabes exclusives, le cinéma du Moyen-Orient et programmes du ramadan en avant-première.",
    options: [
      { name: "Abonnement 1 Mois VIP", priceUSD: 6 },
      { name: "Abonnement 3 Mois VIP", priceUSD: 16 },
      { name: "Abonnement 12 Mois VIP", priceUSD: 45 }
    ]
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    category: "streaming",
    categoryLabel: "Streaming",
    badge: "No Ads",
    icon: "play-circle",
    description: "Zéro publicité sur YouTube, lecture en arrière-plan sur smartphone et YouTube Music inclus.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 4 },
      { name: "Abonnement 3 Mois", priceUSD: 11 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 38 }
    ]
  },

  // -----------------------------------------------------------------
  // 2. AI APPS & SUBSCRIPTIONS
  // -----------------------------------------------------------------
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (GPT-4o & Canvas)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Best Seller AI",
    icon: "bot",
    description: "Accès prioritaire à GPT-4o, génération d'images DALL-E 3, navigation web, analyse de données et vitesse maximale.",
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
    badge: "Dev & Writing",
    icon: "cpu",
    description: "Modèles Claude 3.5 Sonnet & Opus, capacité de contexte géante (200k tokens), idéal pour développeurs et rédacteurs.",
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
    icon: "sparkles",
    description: "Le meilleur moteur de génération visuelle au monde. Créez des illustrations ultra-réalistes et créatives.",
    options: [
      { name: "Plan Basic 1 Mois ($10)", priceUSD: 10 },
      { name: "Plan Standard 1 Mois ($30)", priceUSD: 30 }
    ]
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    badge: "Design Express",
    icon: "palette",
    description: "Outils magiques AI, suppression d'arrière-plan en un clic, modèles premium illimités pour vos réseaux sociaux.",
    options: [
      { name: "Abonnement 1 Mois", priceUSD: 5 },
      { name: "Abonnement 6 Mois", priceUSD: 20 },
      { name: "Abonnement 12 Mois", priceUSD: 35 }
    ]
  },

  // -----------------------------------------------------------------
  // 3. STEAM & PC GAMING
  // -----------------------------------------------------------------
  {
    id: "steam-wallet-us",
    name: "Steam Wallet Cards (Global / US)",
    category: "steam",
    categoryLabel: "Steam Gaming",
    badge: "Code Instantané",
    icon: "gamepad-2",
    description: "Rechargez votre portefeuille Steam instantanément pour acheter tous les jeux PC, skins CS2, Dota 2 et DLCs.",
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
    badge: "Jeux PC",
    icon: "disc",
    description: "Commandez n'importe quel jeu Steam (Black Myth Wukong, EA FC 25, GTA V, Cyberpunk...). Donnez-nous le titre !",
    options: [
      { name: "Jeu Valeur $10", priceUSD: 10 },
      { name: "Jeu Valeur $25", priceUSD: 25 },
      { name: "Jeu Valeur $50", priceUSD: 50 },
      { name: "Jeu Valeur $70 (Nouveauté AAA)", priceUSD: 70 }
    ]
  },

  // -----------------------------------------------------------------
  // 4. PLAYSTATION 5 & PS4
  // -----------------------------------------------------------------
  {
    id: "psn-cards",
    name: "Cartes PlayStation Network (PSN US & FR)",
    category: "ps5",
    categoryLabel: "PlayStation",
    badge: "Top Vente Console",
    icon: "gamepad",
    description: "Codes officiels pour le PlayStation Store. Achetez jeux PS5/PS4, DLCs, V-Bucks Fortnite, FC Points et plus.",
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
    icon: "layers",
    description: "Jouez en ligne avec vos amis, téléchargez des jeux gratuits chaque mois et profitez du catalogue PS Plus.",
    options: [
      { name: "PS Plus Essential 1 Mois", priceUSD: 12 },
      { name: "PS Plus Essential 3 Mois", priceUSD: 28 },
      { name: "PS Plus Extra 3 Mois", priceUSD: 42 },
      { name: "PS Plus Deluxe / Premium 3 Mois", priceUSD: 52 }
    ]
  },

  // -----------------------------------------------------------------
  // 5. XBOX & GAME PASS
  // -----------------------------------------------------------------
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass Ultimate",
    category: "xbox",
    categoryLabel: "Xbox & PC",
    badge: "Le Meilleur Deal",
    icon: "box",
    description: "Accès à plus de 400 jeux console, PC et Cloud Gaming. Inclut EA Play et le multijoueur Xbox Live Gold.",
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
    icon: "credit-card",
    description: "Rechargez votre compte Xbox / Microsoft pour acheter jeux, add-ons et monnaies virtuelles.",
    options: [
      { name: "Xbox Card $10", priceUSD: 10 },
      { name: "Xbox Card $25", priceUSD: 25 },
      { name: "Xbox Card $50", priceUSD: 50 },
      { name: "Xbox Card $100", priceUSD: 100 }
    ]
  }
];
