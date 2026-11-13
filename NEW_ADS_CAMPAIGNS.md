# 📢 Nouvelles Campagnes Facebook Ads (v2) — Adam Atef Shop (Tunisie)

> **Référentiel Officiel & Contrôle Qualité**
> - **Boutique :** Adam Atef Shop — [https://adamatefshop-hub.github.io/adam-atef-shop/](https://adamatefshop-hub.github.io/adam-atef-shop/)
> - **Page Facebook :** Adam Atef Shop (ID : `1524552757399708`)
> - **Contact WhatsApp Officiel :** `+216 51 725 481` ([https://wa.me/21651725481](https://wa.me/21651725481))
> - **Paiement Local (D17 & Flouci) :** `51 725 481` (`51725481`) *(Virement bancaire / mandat possible sur demande)*
> - **Taux de Change Officiel (`config.js`) :** **`1 USD = 3.9 DT`** (`priceUSD * 3.9`, vérifié ligne par ligne contre `products.js`)
> - **Stratégie Algorithme Facebook :** Les légendes (`message`) gardent le corps du post sans lien externe (`https://...`) afin de maximiser la portée organique et les partages, tout en affichant les coordonnées WhatsApp (`+216 51 725 481`) et D17/Flouci (`51 725 481`). Les liens cliquables directs (`wa.me` + boutique) sont placés dans le **1er commentaire épinglé** juste après publication.

---

## 📋 Manifeste Récapitulatif des 4 Nouvelles Campagnes

| # | Campagne | Visuel (`assets/`) | URL Image Live (GitHub Pages) | Accroche / Prix d'Appel (`1$ = 3.9 DT`) | Audience Cible (Tunisie) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ad 1** | Recharges Gaming Populaires | `ad_new_currencies.jpg` | `https://adamatefshop-hub.github.io/adam-atef-shop/assets/ad_new_currencies.jpg` | Dès **3.90 DT** (Free Fire, PUBG UC, Roblox, Fortnite V-Bucks & Crew) | Gamers Mobile, PC & Console (13–28 ans) + Parents |
| **Ad 2** | Competitive Gaming & 70+ Jeux | `ad_new_competitive_games.jpg` | `https://adamatefshop-hub.github.io/adam-atef-shop/assets/ad_new_competitive_games.jpg` | Dès **19.50 DT** (Valorant, LoL, Genshin, FC 26, GTA V, Minecraft, CoD, Wukong) | Gamers Compétitifs PC/PS5/Xbox & Fans AAA |
| **Ad 3** | Service Sur Demande (Conciergerie) | `ad_new_concierge.jpg` | `https://adamatefshop-hub.github.io/adam-atef-shop/assets/ad_new_concierge.jpg` | **1$ = 3.9 DT** · Aucun paiement avant confirmation de disponibilité | Tout Tunisien sans carte internationale (Devs, Créateurs, Étudiants, Gamers) |
| **Ad 4** | Nouveaux Modèles IA 2026 (Astra & Fable) | `ad_new_ai_astra_fable.jpg` | `https://adamatefshop-hub.github.io/adam-atef-shop/assets/ad_new_ai_astra_fable.jpg` | **78.00 DT** (ChatGPT Astra & Claude Fable) · Midjourney dès **39.00 DT** · Canva **19.50 DT** | Développeurs, Étudiants (PFE), Freelancers, Designers & Créateurs |

---

## 🎮 AD 1 — Recharges Gaming Populaires (`ad_new_currencies.jpg`)

### 🔎 Vérification Tarifs (`products.js` × `3.9`)
| Produit (`id`) | Formule | Prix USD | Prix DT (`priceUSD * 3.9`) |
| :--- | :--- | :--- | :--- |
| `free-fire-diamants` | 100 / 520 / 1 060 / 2 180 Diamants | $1 / $5 / $10 / $20 | **3.90 DT** / **19.50 DT** / **39.00 DT** / **78.00 DT** |
| `pubg-mobile-uc` | 60 / 325 / 660 / 1 800 UC | $1 / $5 / $10 / $25 | **3.90 DT** / **19.50 DT** / **39.00 DT** / **97.50 DT** |
| `robux-roblox` | 800 / 2 000 / 4 500 / 10 000 Robux | $10 / $25 / $50 / $100 | **39.00 DT** / **97.50 DT** / **195.00 DT** / **390.00 DT** |
| `fortnite-v-bucks` | 1 000 / 2 800 / 5 000 / 13 500 V-Bucks | $9 / $23 / $36 / $90 | **35.10 DT** / **89.70 DT** / **140.40 DT** / **351.00 DT** |
| `fortnite-crew` | Club de Fortnite 1 mois / 3 mois | $12 / $36 | **46.80 DT** / **140.40 DT** |

### 📝 Exact `message` pour `FACEBOOK_CREATE_PHOTO_POST`
```text
🔥 Ya gamers fi Tounes ! Rechargetek Free Fire, PUBG, Roblox w Fortnite b D17 walla Flouci — dès 3.90 DT barka ! 🎮⚡

Ma3andekch carte internationale bech techri el Pass walla el skin elli t7eb 3lih ? 3and Adam Atef Shop, tcharji fi d9ayeq w b soum el sarf el s7i7 (1$ = 3.9 DT) :

💎 Free Fire Diamants (Recharge directe par ID joueur ou code officiel) :
▪️ 100 Diamants : 3.90 DT
▪️ 520 Diamants : 19.50 DT
▪️ 1 060 Diamants : 39.00 DT
▪️ 2 180 Diamants : 78.00 DT

🎯 PUBG Mobile UC :
▪️ 60 UC : 3.90 DT
▪️ 325 UC : 19.50 DT
▪️ 660 UC : 39.00 DT
▪️ 1 800 UC : 97.50 DT

🧱 Roblox Robux (Cartes officielles) :
▪️ 800 Robux : 39.00 DT
▪️ 2 000 Robux : 97.50 DT
▪️ 4 500 Robux : 195.00 DT

⚡ Fortnite V-Bucks & Club Fortnite (Crew) :
▪️ 1 000 V-Bucks : 35.10 DT | 2 800 V-Bucks : 89.70 DT | 5 000 V-Bucks : 140.40 DT
▪️ Club de Fortnite (Crew) 1 Mois (Pass de combat + 1 000 V-Bucks + Pack Skins) : 46.80 DT

✅ Codes officiels & activation sur votre compte / par ID joueur
⚡ Livraison express en 5 à 15 min sur WhatsApp : +216 51 725 481
💳 Paiement 100% Tunisien : D17 / Flouci au 51 725 481

👇 Tagui sahbek elli yal3eb m3ak fi squad ! Lien direct du catalogue & WhatsApp en 1 clic fi awel commentaire 👇

#FreeFireTunisie #PUBGMobileTunisie #FortniteTunisie #RobloxTunisie #GamingTunisia #D17 #Flouci #AdamAtefShop #RechargesGamingTN
```

### 💬 1er Commentaire Optimisé (CTA + Liens + Hashtags)
```text
📲 Commander maintenant sur WhatsApp (livraison en 5 à 15 min) :
👉 https://wa.me/21651725481 (+216 51 725 481)

🛒 Voir tous les packs et le calculateur 1$ = 3.9 DT sur notre boutique :
👉 https://adamatefshop-hub.github.io/adam-atef-shop/

💳 Paiement D17 / Flouci : 51725481 (51 725 481) — Envoie la capture du reçu sur WhatsApp et reçois ton code ou ta recharge par ID juste après !

💬 Chnouwa el skin walla el Pass elli bech techrih el youm : Free Fire, PUBG, Roblox walla Fortnite ?

#VBucksTunisie #RobuxTN #DiamantsFreeFireTN #UCTunisie #GamersTN
```

---

## ⚔️ AD 2 — Competitive Gaming & 70+ Jeux Catalogue (`ad_new_competitive_games.jpg`)

### 🔎 Vérification Tarifs (`products.js` × `3.9`)
| Produit (`id`) | Formule | Prix USD | Prix DT (`priceUSD * 3.9`) |
| :--- | :--- | :--- | :--- |
| `valorant-points` | 475 / 1 000 / 2 050 / 3 650 VP | $5 / $10 / $20 / $35 | **19.50 DT** / **39.00 DT** / **78.00 DT** / **136.50 DT** |
| `league-of-legends-rp` | 575 / 1 380 / 2 800 RP | $5 / $10 / $20 | **19.50 DT** / **39.00 DT** / **78.00 DT** |
| `genshin-impact-cristaux` | 300 / 980 / 1 980 / 3 280 Cristaux | $5 / $15 / $30 / $50 | **19.50 DT** / **58.50 DT** / **117.00 DT** / **195.00 DT** |
| `ea-fc-points` | 1 050 / 2 800 / 5 900 / 12 000 FC Points | $8 / $22 / $45 / $90 | **31.20 DT** / **85.80 DT** / **175.50 DT** / **351.00 DT** |
| `ea-sports-fc-26` | Jeu complet PC / PS5 / Xbox | $70 | **273.00 DT** |
| `grand-theft-auto-v` | GTA V PC (Steam/Rockstar) / PS5 & Xbox | $15 / $20 | **58.50 DT** / **78.00 DT** |
| `gta-online-shark-cards` | Red Shark / Green / Bull / Great White | $2 / $5 / $10 / $20 | **7.80 DT** / **19.50 DT** / **39.00 DT** / **78.00 DT** |
| `minecraft-java-bedrock` | Java & Bedrock (PC / PS5 / Xbox) | $30 | **117.00 DT** |
| `minecoins-minecraft` | 1 020 / 1 720 / 3 500 Minecoins | $8 / $13 / $26 | **31.20 DT** / **50.70 DT** / **101.40 DT** |
| `call-of-duty-points` | 1 100 / 2 400 / 5 000 / 10 000 CP | $10 / $20 / $40 / $80 | **39.00 DT** / **78.00 DT** / **156.00 DT** / **312.00 DT** |
| `call-of-duty-black-ops-6` | Jeu complet PC / PS5 / Xbox | $70 | **273.00 DT** |
| `black-myth-wukong` | Jeu complet PC (Steam) / PS5 | $60 | **234.00 DT** |
| `counter-strike-2-prime` | Statut Prime PC (Compte Steam) | $15 | **58.50 DT** |
| `red-dead-redemption-2` | PC / PS5 / Xbox | $30 | **117.00 DT** |
| `elden-ring` | PC / PS5 / Xbox | $60 | **234.00 DT** |

### 📝 Exact `message` pour `FACEBOOK_CREATE_PHOTO_POST`
```text
⚔️ Gamers Valorant, LoL, Genshin, FC 26 & GTA fi Tounes : tes recharges compétitives dès 19.50 DT & 70+ jeux PC/Console (taux fixe 1$ = 3.9 DT) ! 🎮🔥

Plus besoin de carte internationale pour débloquer ton Vandal, ton skin LoL, tes vœux Genshin ou les derniers jeux PC & Console :

🎯 Recharges Compétitives & Monnaies In-Game :
▪️ Valorant Points (VP) : 475 VP à 19.50 DT | 1 000 VP à 39.00 DT | 2 050 VP à 78.00 DT | 3 650 VP à 136.50 DT
▪️ League of Legends (RP) : 575 RP à 19.50 DT | 1 380 RP à 39.00 DT | 2 800 RP à 78.00 DT
▪️ Genshin Impact Cristaux : 300 à 19.50 DT | 980 à 58.50 DT | 1 980 à 117.00 DT | 3 280 à 195.00 DT
▪️ EA Sports FC Points : 1 050 Points à 31.20 DT | 2 800 Points à 85.80 DT | 5 900 Points à 175.50 DT
▪️ Call of Duty Points (CP) : 1 100 CP à 39.00 DT | 2 400 CP à 78.00 DT | 5 000 CP à 156.00 DT

🕹️ Jeux Complets & Hits du Catalogue (PC, PS5 & Xbox) :
▪️ GTA V : 58.50 DT (PC) / 78.00 DT (PS5 & Xbox) · Shark Cards dès 7.80 DT (100k GTA$)
▪️ Minecraft Java & Bedrock : 117.00 DT (PC / PS5 / Xbox) · Minecoins dès 31.20 DT
▪️ Black Myth: Wukong : 234.00 DT (PC / PS5)
▪️ EA SPORTS FC 25 / FC 26 & CoD Black Ops 6 : 273.00 DT (PC / PS5 / Xbox)
▪️ + 70+ jeux & services au catalogue (CS2 Prime 58.50 DT, RDR2 117.00 DT, Elden Ring 234.00 DT) et TOUT jeu sur demande !

✅ Clés officielles & activation sur votre compte / code direct
⚡ Livraison rapide en 5 à 15 min sur WhatsApp : +216 51 725 481
💳 Paiement D17 / Flouci au 51 725 481 (Taux garanti 1$ = 3.9 DT)

👇 Tagui ton duo Valorant / LoL / FC 26 ! Lien du catalogue 70+ jeux & WhatsApp en 1er commentaire 👇

#ValorantTunisie #LeagueOfLegendsTN #GenshinImpactTunisie #EAFC26Tunisie #GTAVTunisie #MinecraftTunisie #BlackMythWukong #GamingTunisia #D17 #Flouci #AdamAtefShop
```

### 💬 1er Commentaire Optimisé (CTA + Liens + Hashtags)
```text
📲 Commander maintenant sur WhatsApp (réponse en 5 à 15 min) :
👉 https://wa.me/21651725481 (+216 51 725 481)

🛒 Explorer les 70+ jeux, recharges et titres AAA sur le site :
👉 https://adamatefshop-hub.github.io/adam-atef-shop/

💳 D17 / Flouci : 51725481 (51 725 481). Tu cherches un autre jeu PC, PS5 ou Xbox ? Envoie-nous le titre sur WhatsApp pour avoir le prix exact en DT (1$ = 3.9 DT) avant tout paiement !

💬 Chnouwa el prochain skin walla jeu elli bech takhouh : Valorant VP, LoL RP, FC 26 walla Black Myth: Wukong ?

#ValoTN #LoLTN #CallOfDutyTunisie #FIFATunisie #PCMasterRaceTunisie #PS5Tunisie
```

---

## 🌍 AD 3 — Service Sur Demande ("On achète N'IMPORTE QUEL service au monde !") (`ad_new_concierge.jpg`)

### 🔎 Vérification Politique & Tarifs (`index.html` `#sur-demande` + `config.js`)
- **Règle d'or (`config.js`) :** Taux fixe transparent **`1 USD = 3.9 DT`**
- **Garantie (`index.html` ligne 167) :** *« Aucun paiement avant confirmation de la disponibilité »*
- **Contact & Paiement :** WhatsApp `+216 51 725 481` (`https://wa.me/21651725481`) · D17 / Flouci `51 725 481` (`51725481`)

### 📝 Exact `message` pour `FACEBOOK_CREATE_PHOTO_POST`
```text
🌍 Ma3andekch carte internationale fi Tounes ? On achète N'IMPORTE QUEL service au monde pour toi en Dinars Tunisiens ! 🇹🇳💳

Carte Technologique bloquée ou épuisée ? Paiement refusé sur un site étranger ? Chez Adam Atef Shop, dis-nous juste ce dont tu as besoin — on te l'obtient au taux clair de 1$ = 3.9 DT :

💻 Dev, SaaS & Outils Pro : Cursor, GitHub Copilot, domaines, hébergement, crédits API, Notion
🎨 Création & Bureautique : Adobe Creative Cloud, CapCut Pro, Figma, Microsoft Office / 365
🎓 Formations & Carrière : Coursera, Udemy, certifications et examens en ligne
🎬 Streaming & Apps : Netflix, YouTube Premium, Spotify, Disney+, Crunchyroll
📱 Cartes Cadeaux & Consoles : Apple / App Store, Google Play, Nintendo Switch eShop, Steam, PSN, Xbox
✨ Et N'IMPORTE QUEL autre logiciel, abonnement ou jeu vidéo introuvable en Tunisie !

Comment ça marche en 3 étapes simples ?
1️⃣ Envoie le nom ou le lien du service sur WhatsApp : +216 51 725 481
2️⃣ On vérifie et on te confirme le prix exact en DT (1$ = 3.9 DT) — AUCUN paiement avant confirmation de disponibilité !
3️⃣ Paye par D17 ou Flouci au 51 725 481 — Activation sur votre compte ou code officiel en 5 à 15 min ⚡

📌 Enregistre ce post (Save) w tagui sahbek elli dima wa7el fel paiement international !
👇 Lien direct du formulaire "Sur Demande" & WhatsApp en 1 clic fi awel commentaire 👇

#Tunisie #CarteTechnologique #DevTunisie #FreelanceTunisie #EtudiantsTunisie #PaiementEnDinar #AchatEnLigneTunisie #D17 #Flouci #AdamAtefShop
```

### 💬 1er Commentaire Optimisé (CTA + Liens + Hashtags)
```text
📲 Envoie le nom ou le lien du service dont tu as besoin sur WhatsApp :
👉 https://wa.me/21651725481 (+216 51 725 481)

📝 Remplis directement notre formulaire "Service sur demande" & teste le calculateur 1$ = 3.9 DT :
👉 https://adamatefshop-hub.github.io/adam-atef-shop/#sur-demande

🛡️ Rappel de garantie : Aucun paiement avant confirmation de la disponibilité et du montant exact en dinars. Paiement local D17 / Flouci : 51725481 (51 725 481).

💬 Chnouwa el service, logiciel walla carte cadeau elli t7eb techrih w ma najamtech tkhallessou ? Ektbelna fel commentaires !

#CursorTunisie #GitHubCopilotTN #AdobeTunisie #CapCutProTN #CourseraTN #NintendoTunisie #AppleCardTN #GooglePlayTunisie
```

---

## 🤖 AD 4 — Nouveaux Modèles IA 2026 : ChatGPT Astra & Claude Fable (`ad_new_ai_astra_fable.jpg`)

### 🔎 Vérification Tarifs (`products.js` × `3.9`)
| Produit (`id`) | Formule | Prix USD | Prix DT (`priceUSD * 3.9`) |
| :--- | :--- | :--- | :--- |
| `chatgpt-plus` | ChatGPT Plus (Astra, GPT-4o & Canvas) — 1 Mois / 2 Mois / 3 Mois | $20 / $40 / $60 | **78.00 DT** / **156.00 DT** / **234.00 DT** |
| `claude-pro` | Claude Pro (Fable, Sonnet 3.5 & Opus) — 1 Mois / 2 Mois | $20 / $40 | **78.00 DT** / **156.00 DT** |
| `midjourney` | Midjourney AI — Plan Basic 1 Mois / Plan Standard 1 Mois | $10 / $30 | **39.00 DT** / **117.00 DT** |
| `canva-pro` | Canva Pro (Magic Studio) — 1 Mois / 6 Mois / 12 Mois | $5 / $20 / $35 | **19.50 DT** / **78.00 DT** / **136.50 DT** |

### 📝 Exact `message` pour `FACEBOOK_CREATE_PHOTO_POST`
```text
🧠 Nouvelle Ère IA 2026 fi Tounes ! ChatGPT Plus (Astra) & Claude Pro (Fable) dispos dès maintenant en Dinars Tunisiens — bla carte internationale ! 🚀🇹🇳

Développeur, étudiant (PFE), freelancer walla créateur de contenu ? Passe au niveau supérieur avec les nouveaux modèles phares au taux fixe garanti 1$ = 3.9 DT :

🤖 ChatGPT Plus (Modèle Astra, GPT-4o, DALL-E 3 & Canvas) :
▪️ 1 Mois : 78.00 DT ($20) | 2 Mois : 156.00 DT ($40) | 3 Mois : 234.00 DT ($60)

⚡ Claude Pro (Modèle Fable, Sonnet 3.5 & Opus — contexte 200k tokens) :
▪️ 1 Mois : 78.00 DT ($20) | 2 Mois : 156.00 DT ($40)

🎨 Midjourney AI (Génération d'Images HD) :
▪️ Plan Basic 1 Mois : 39.00 DT ($10) | Plan Standard 1 Mois : 117.00 DT ($30)

✨ Canva Pro (Magic Studio) :
▪️ 1 Mois : 19.50 DT ($5) | 6 Mois : 78.00 DT ($20) | 12 Mois : 136.50 DT ($35)

💡 Besoin de Cursor, GitHub Copilot ou un autre outil IA ? Disponible aussi sur demande à 1$ = 3.9 DT !

✅ Activation sur votre compte (procédure confirmée avant paiement)
⚡ Livraison en 5 à 15 min sur WhatsApp : +216 51 725 481
💳 Paiement 100% local : D17 / Flouci au 51 725 481

👇 Tagui sahbek fel PFE walla fel freelance ! Lien du catalogue IA & WhatsApp en 1 clic fi awel commentaire 👇

#ChatGPTAstra #ClaudeFable #IATunisie #DevTunisie #FreelanceTunisie #PFETunisie #MidjourneyTunisie #CanvaProTunisie #D17 #Flouci #AdamAtefShop
```

### 💬 1er Commentaire Optimisé (CTA + Liens + Hashtags)
```text
📲 Activer ChatGPT Astra, Claude Fable, Midjourney ou Canva Pro sur WhatsApp (5 à 15 min) :
👉 https://wa.me/21651725481 (+216 51 725 481)

🛒 Accéder au catalogue IA complet & calculateur 1$ = 3.9 DT :
👉 https://adamatefshop-hub.github.io/adam-atef-shop/

💳 D17 / Flouci : 51725481 (51 725 481) — Envoie simplement la capture du reçu sur WhatsApp juste après confirmation.

💬 Enti team ChatGPT Astra 🤖 walla team Claude Fable ⚡ fel code wel rédaction ?

#ChatGPTTunisie #ClaudeProTN #OpenAITunisie #AnthropicTunisie #EtudiantsTunisie #TechTunisie
```
