// ===================================================================
// APPLICATION JAVASCRIPT - LOGIQUE DU SITE & COMMANDES WHATSAPP
// ===================================================================

let currentCategory = "all";
let searchQuery = "";
let cart = [];

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderExchangeRateBadge();
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  updateCartBadge();
  lucide.createIcons();
});

// Affiche le taux de change
function renderExchangeRateBadge() {
  const rateEls = document.querySelectorAll(".current-exchange-rate");
  rateEls.forEach(el => {
    el.textContent = `1$ = ${STORE_CONFIG.exchangeRateUSD.toFixed(2)} DT`;
  });
}

// Calcule le prix en Dinars Tunisiens
function toDT(priceUSD) {
  return (priceUSD * STORE_CONFIG.exchangeRateUSD).toFixed(2);
}

// Filtrage et Rendu des Cartes Produits
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = (currentCategory === "all") || (product.category === currentCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-400">
        <i data-lucide="package-search" class="w-16 h-16 mx-auto mb-4 text-gray-500"></i>
        <p class="text-xl font-semibold">Aucun service trouvé pour cette recherche</p>
        <p class="text-sm mt-1">Vous cherchez un autre jeu ou abonnement ? Contactez-nous directement sur WhatsApp !</p>
        <button onclick="orderCustomItem()" class="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium inline-flex items-center gap-2 transition">
          <i data-lucide="message-circle" class="w-5 h-5"></i>
          Demander sur WhatsApp
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(product => {
    const initialOption = product.options[0];
    const initialPriceDT = toDT(initialOption.priceUSD);

    return `
      <div class="product-card group relative bg-gray-900/90 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition duration-300 flex flex-col justify-between" data-id="${product.id}">
        <!-- Badge -->
        <div class="p-6 pb-2">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <i data-lucide="${product.icon}" class="w-3.5 h-3.5"></i>
              ${product.categoryLabel}
            </span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-300 font-medium">
              ${product.badge}
            </span>
          </div>

          <h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition mb-2">
            ${product.name}
          </h3>

          <p class="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
            ${product.description}
          </p>

          <!-- Plan Selection Dropdown -->
          <div class="mb-4">
            <label class="block text-xs font-medium text-gray-400 mb-1.5">Choisissez l'offre / durée :</label>
            <select onchange="updateSelectedOption('${product.id}', this.value)" class="w-full bg-gray-950 border border-gray-700 text-gray-200 text-xs rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer">
              ${product.options.map((opt, idx) => `
                <option value="${idx}" ${idx === 0 ? "selected" : ""}>
                  ${opt.name} — $${opt.priceUSD} (${toDT(opt.priceUSD)} DT)
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Price & Action Footer -->
        <div class="p-6 pt-0 border-t border-gray-800/60 mt-auto bg-gray-950/40">
          <div class="flex items-baseline justify-between py-3">
            <span class="text-xs text-gray-400">Prix en Dinars :</span>
            <div class="text-right">
              <div class="text-2xl font-black text-emerald-400" id="price-dt-${product.id}">
                ${initialPriceDT} <span class="text-sm font-semibold">DT</span>
              </div>
              <div class="text-xs text-gray-400" id="price-usd-${product.id}">
                ≈ $${initialOption.priceUSD} USD
              </div>
            </div>
          </div>

          <div class="grid grid-cols-5 gap-2 mt-2">
            <button onclick="addToCart('${product.id}')" class="col-span-2 py-2.5 px-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-95 border border-gray-700" title="Ajouter au Panier">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i>
              <span>+ Panier</span>
            </button>
            <button onclick="orderDirectWhatsApp('${product.id}')" class="col-span-3 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 shadow-lg shadow-emerald-950">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>Commander</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Met à jour l'affichage de l'option choisie
function updateSelectedOption(productId, optionIndex) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const opt = product.options[parseInt(optionIndex, 10)];
  if (!opt) return;

  const priceDtEl = document.getElementById(`price-dt-${productId}`);
  const priceUsdEl = document.getElementById(`price-usd-${productId}`);

  if (priceDtEl) priceDtEl.innerHTML = `${toDT(opt.priceUSD)} <span class="text-sm font-semibold">DT</span>`;
  if (priceUsdEl) priceUsdEl.textContent = `≈ $${opt.priceUSD} USD`;
}

// Récupère l'option courante sélectionnée dans le DOM
function getSelectedOptionFor(productId) {
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!card || !product) return { product, option: product.options[0] };
  const select = card.querySelector('select');
  const index = select ? parseInt(select.value, 10) : 0;
  return { product, option: product.options[index] || product.options[0] };
}

// Commande directe par WhatsApp
function orderDirectWhatsApp(productId) {
  const { product, option } = getSelectedOptionFor(productId);
  const priceDT = toDT(option.priceUSD);

  const message = `Bonjour ${STORE_CONFIG.storeName} ! 👋
Je souhaite commander le service suivant :

📦 *Produit :* ${product.name}
🎯 *Option :* ${option.name}
💰 *Prix :* ${priceDT} DT (~$${option.priceUSD} USD)

💳 *Moyen de paiement souhaité :* (Flouci / D17 / Virement)

Pouvez-vous me confirmer la disponibilité et m'envoyer les coordonnées de paiement ? Merci !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// Demande personnalisée sur WhatsApp
function orderCustomItem() {
  const message = `Bonjour ${STORE_CONFIG.storeName} ! 👋
Je cherche un jeu, abonnement ou service qui n'est pas affiché sur votre site.
Pouvez-vous me donner son tarif en Dinars Tunisiens et m'aider à le commander ? Merci !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// -----------------------------------------------------------------
// GESTION DU PANIER
// -----------------------------------------------------------------

function addToCart(productId) {
  const { product, option } = getSelectedOptionFor(productId);
  const cartItemId = `${productId}-${option.name}`;

  const existing = cart.find(item => item.id === cartItemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: cartItemId,
      productId: product.id,
      name: product.name,
      optionName: option.name,
      priceUSD: option.priceUSD,
      priceDT: parseFloat(toDT(option.priceUSD)),
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartBadge();
  showToast(`"${product.name}" ajouté au panier !`);
}

function updateCartQty(cartItemId, delta) {
  const item = cart.find(i => i.id === cartItemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== cartItemId);
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartModal();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.id !== cartItemId);
  saveCartToStorage();
  updateCartBadge();
  renderCartModal();
}

function clearCart() {
  cart = [];
  saveCartToStorage();
  updateCartBadge();
  renderCartModal();
}

function saveCartToStorage() {
  localStorage.setItem("pixelstore_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("pixelstore_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = count;
    b.classList.toggle("hidden", count === 0);
  });
}

// Ouvre / Ferme le tiroir Panier
function toggleCartModal(open) {
  const modal = document.getElementById("cart-modal");
  if (!modal) return;
  if (open) {
    renderCartModal();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Rendu du contenu du panier
function renderCartModal() {
  const itemsContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total-dt");
  const totalUsdContainer = document.getElementById("cart-total-usd");
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-12 text-center text-gray-400">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 text-gray-600"></i>
        <p class="text-base font-semibold">Votre panier est vide</p>
        <p class="text-xs text-gray-500 mt-1">Parcourez le catalogue et ajoutez vos abonnements ou jeux préférés.</p>
      </div>
    `;
    if (totalContainer) totalContainer.textContent = "0.00 DT";
    if (totalUsdContainer) totalUsdContainer.textContent = "$0.00";
    lucide.createIcons();
    return;
  }

  let totalDT = 0;
  let totalUSD = 0;

  itemsContainer.innerHTML = cart.map(item => {
    const itemTotalDT = item.priceDT * item.qty;
    totalDT += itemTotalDT;
    totalUSD += item.priceUSD * item.qty;

    return `
      <div class="flex items-center justify-between p-3.5 bg-gray-900 border border-gray-800 rounded-xl">
        <div class="flex-1 pr-3">
          <h4 class="text-sm font-semibold text-white leading-tight">${item.name}</h4>
          <p class="text-xs text-gray-400 mt-0.5">${item.optionName}</p>
          <p class="text-xs font-bold text-emerald-400 mt-1">${item.priceDT.toFixed(2)} DT <span class="text-gray-500 font-normal">($${item.priceUSD})</span></p>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex items-center bg-gray-950 border border-gray-800 rounded-lg p-1">
            <button onclick="updateCartQty('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-gray-800 transition">
              -
            </button>
            <span class="w-7 text-center text-xs font-bold text-white">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-gray-800 transition">
              +
            </button>
          </div>
          <button onclick="removeCartItem('${item.id}')" class="p-1.5 text-gray-500 hover:text-red-400 rounded-lg transition" title="Supprimer">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalContainer) totalContainer.textContent = `${totalDT.toFixed(2)} DT`;
  if (totalUsdContainer) totalUsdContainer.textContent = `~$${totalUSD.toFixed(2)} USD`;
  lucide.createIcons();
}

// Finaliser commande du Panier sur WhatsApp
function submitCartToWhatsApp() {
  if (cart.length === 0) {
    showToast("Votre panier est vide !");
    return;
  }

  const paymentSelect = document.getElementById("cart-payment-method");
  const selectedPayment = paymentSelect ? paymentSelect.value : "Flouci / D17";

  let totalDT = 0;
  let totalUSD = 0;

  const itemsListText = cart.map((item, idx) => {
    const itemTotal = (item.priceDT * item.qty).toFixed(2);
    totalDT += item.priceDT * item.qty;
    totalUSD += item.priceUSD * item.qty;
    return `${idx + 1}. *${item.name}* (${item.optionName})\n   Qté: ${item.qty} | Prix: ${itemTotal} DT ($${item.priceUSD * item.qty})`;
  }).join('\n\n');

  const message = `Bonjour ${STORE_CONFIG.storeName} ! 👋
Je souhaite valider ma commande :

📋 *RÉCAPITULATIF DU PANIER :*
${itemsListText}

━━━━━━━━━━━━━━━━━━━━
💵 *TOTAL À PAYER :* *${totalDT.toFixed(2)} DT* (~$${totalUSD.toFixed(2)} USD)
💳 *Mode de paiement choisi :* ${selectedPayment}
━━━━━━━━━━━━━━━━━━━━

Merci de me confirmer la commande et de me transmettre les coordonnées pour effectuer le paiement !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// -----------------------------------------------------------------
// EVENT LISTENERS & UI
// -----------------------------------------------------------------

function setupEventListeners() {
  // Category tabs
  const tabButtons = document.querySelectorAll(".category-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("active", "bg-emerald-500", "text-black", "font-bold");
        b.classList.add("bg-gray-800/80", "text-gray-300");
      });
      btn.classList.add("active", "bg-emerald-500", "text-black", "font-bold");
      btn.classList.remove("bg-gray-800/80", "text-gray-300");

      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }
}

// Notification Toast simple
function showToast(text) {
  let toast = document.getElementById("ui-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ui-toast";
    toast.className = "fixed bottom-5 right-5 z-50 bg-emerald-600 text-white font-medium text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-20 opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> ${text}`;
  lucide.createIcons();
  toast.classList.remove("translate-y-20", "opacity-0");

  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 2500);
}
