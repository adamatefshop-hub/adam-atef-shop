// ===================================================================
// ADAM ATEF SHOP — APPLICATION ENGINE & INTERACTIVE LOGIC
// ===================================================================

let currentCategory = "all";
let searchQuery = "";
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  renderExchangeRateBadge();
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  updateCartBadge();
  setupConverter();
  setupKeyboardShortcuts();
  lucide.createIcons();
});

// Affiche le taux de change
function renderExchangeRateBadge() {
  const rateEls = document.querySelectorAll(".current-exchange-rate");
  rateEls.forEach(el => {
    el.textContent = `1$ = ${STORE_CONFIG.exchangeRateUSD.toFixed(2)} DT`;
  });
}

// Conversion USD -> DT
function toDT(priceUSD) {
  return (priceUSD * STORE_CONFIG.exchangeRateUSD).toFixed(2);
}

// Conversion DT -> USD
function toUSD(priceDT) {
  return (priceDT / STORE_CONFIG.exchangeRateUSD).toFixed(2);
}

// -----------------------------------------------------------------
// RENDU DES PRODUITS DU CATALOGUE
// -----------------------------------------------------------------
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = (currentCategory === "all") || (product.category === currentCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const countEl = document.getElementById("products-count");
  if (countEl) countEl.textContent = `${filtered.length} service${filtered.length > 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-500 shadow-inner">
          <i data-lucide="package-search" class="w-10 h-10"></i>
        </div>
        <h3 class="text-lg font-bold text-white">Aucun service trouvé pour "${searchQuery}"</h3>
        <p class="text-xs text-gray-400 max-w-md mx-auto mt-2 leading-relaxed">
          Nous pouvons activer n'importe quel abonnement ou jeu Steam/Console sur mesure. Contactez directement Adam Atef sur WhatsApp !
        </p>
        <button onclick="orderCustomItem()" class="mt-5 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-gray-950 font-black rounded-xl text-xs inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          Demander sur WhatsApp (+216 51 725 481)
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
      <div class="product-card group relative bg-gradient-to-b from-gray-900/90 to-gray-950/90 border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between" data-id="${product.id}">
        
        <!-- Header Visual Thumbnail -->
        <div class="relative h-44 overflow-hidden bg-gray-950 border-b border-gray-800/60">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          
          <!-- Badges overlay -->
          <div class="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
              <i data-lucide="${product.icon}" class="w-3.5 h-3.5"></i>
              ${product.categoryLabel}
            </span>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-black shadow-md">
              ${product.badge}
            </span>
          </div>

          <!-- Brand watermark -->
          <div class="absolute bottom-2.5 left-3 text-[11px] font-bold text-gray-300 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${product.brand}
          </div>
        </div>

        <!-- Body content -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-black text-white group-hover:text-emerald-300 transition-colors line-clamp-1 mb-1.5">
              ${product.name}
            </h3>

            <p class="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
              ${product.description}
            </p>
          </div>

          <!-- Plan selector -->
          <div class="mt-auto">
            <label class="block text-[11px] font-semibold text-gray-400 mb-1.5">Formule / Montant :</label>
            <div class="relative">
              <select onchange="updateSelectedOption('${product.id}', this.value)" class="w-full bg-gray-950/90 border border-gray-800 text-gray-200 text-xs rounded-xl px-3 py-2.5 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none cursor-pointer appearance-none transition">
                ${product.options.map((opt, idx) => `
                  <option value="${idx}" ${idx === 0 ? "selected" : ""}>
                    ${opt.name} — $${opt.priceUSD} (${toDT(opt.priceUSD)} DT)
                  </option>
                `).join('')}
              </select>
              <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
            </div>
          </div>
        </div>

        <!-- Footer Price & Buy -->
        <div class="p-5 pt-3 border-t border-gray-800/80 bg-gray-950/60">
          <div class="flex items-baseline justify-between py-2">
            <div>
              <span class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Prix en Dinars</span>
              <div class="text-2xl font-black text-emerald-400 tracking-tight" id="price-dt-${product.id}">
                ${initialPriceDT} <span class="text-xs font-bold text-emerald-300">DT</span>
              </div>
            </div>
            <div class="text-right">
              <span class="block text-[10px] font-semibold text-gray-500">Équivalent</span>
              <span class="text-xs font-bold text-gray-400" id="price-usd-${product.id}">
                ≈ $${initialOption.priceUSD} USD
              </span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="grid grid-cols-5 gap-2 mt-2">
            <button onclick="addToCart('${product.id}')" class="col-span-2 py-2.5 px-3 bg-gray-900 hover:bg-gray-800 text-gray-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 border border-gray-700/80 hover:border-gray-600" title="Ajouter au Panier">
              <i data-lucide="shopping-cart" class="w-4 h-4 text-gray-400"></i>
              <span>+ Panier</span>
            </button>
            <button onclick="orderDirectWhatsApp('${product.id}')" class="col-span-3 py-2.5 px-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-gray-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-lg shadow-emerald-500/20">
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

function updateSelectedOption(productId, optionIndex) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const opt = product.options[parseInt(optionIndex, 10)];
  if (!opt) return;

  const priceDtEl = document.getElementById(`price-dt-${productId}`);
  const priceUsdEl = document.getElementById(`price-usd-${productId}`);

  if (priceDtEl) priceDtEl.innerHTML = `${toDT(opt.priceUSD)} <span class="text-xs font-bold text-emerald-300">DT</span>`;
  if (priceUsdEl) priceUsdEl.textContent = `≈ $${opt.priceUSD} USD`;
}

function getSelectedOptionFor(productId) {
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!card || !product) return { product, option: product.options[0] };
  const select = card.querySelector('select');
  const index = select ? parseInt(select.value, 10) : 0;
  return { product, option: product.options[index] || product.options[0] };
}

// -----------------------------------------------------------------
// COMMANDES WHATSAPP PRÉ-REMPLIES
// -----------------------------------------------------------------
function orderDirectWhatsApp(productId) {
  const { product, option } = getSelectedOptionFor(productId);
  const priceDT = toDT(option.priceUSD);

  const message = `Bonjour Adam Atef Shop ! 👋
Je souhaite commander le service suivant :

📦 *Produit :* ${product.name}
🎯 *Formule :* ${option.name}
💰 *Prix :* ${priceDT} DT (~$${option.priceUSD} USD)
💳 *Mode de paiement :* (D17 / Flouci au 51725481)

Pouvez-vous me confirmer la disponibilité pour que j'envoie le reçu ? Merci !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function orderCustomItem() {
  const message = `Bonjour Adam Atef Shop ! 👋
Je recherche un jeu, abonnement ou code digital spécifique qui n'est pas affiché sur le site.
Pouvez-vous me donner son tarif en Dinars Tunisiens (Taux: 1$ = 3.85 DT) ? Merci !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// -----------------------------------------------------------------
// COPIER LE NUMÉRO D17 / FLOUCI EN 1 CLIC
// -----------------------------------------------------------------
function copyPaymentNumber(num = "51725481", elementId = "copy-feedback") {
  navigator.clipboard.writeText(num).then(() => {
    showToast(`Numéro D17 / Flouci (${num}) copié !`);
    const feedback = document.getElementById(elementId);
    if (feedback) {
      feedback.textContent = "Copié ! ✅";
      feedback.classList.remove("hidden");
      setTimeout(() => feedback.classList.add("hidden"), 2000);
    }
  }).catch(() => {
    showToast(`Numéro : ${num}`);
  });
}

// -----------------------------------------------------------------
// CONVERTISSEUR DE DEVISE EN DIRECT (1$ = 3.85 DT)
// -----------------------------------------------------------------
function setupConverter() {
  const usdInput = document.getElementById("converter-usd");
  const dtInput = document.getElementById("converter-dt");
  if (!usdInput || !dtInput) return;

  usdInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) {
      dtInput.value = (val * STORE_CONFIG.exchangeRateUSD).toFixed(2);
    } else {
      dtInput.value = "";
    }
  });

  dtInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) {
      usdInput.value = (val / STORE_CONFIG.exchangeRateUSD).toFixed(2);
    } else {
      usdInput.value = "";
    }
  });
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
  localStorage.setItem("adam_atef_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("adam_atef_cart");
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

function renderCartModal() {
  const itemsContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total-dt");
  const totalUsdContainer = document.getElementById("cart-total-usd");
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center text-gray-400">
        <div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-600">
          <i data-lucide="shopping-bag" class="w-8 h-8"></i>
        </div>
        <p class="text-sm font-bold text-white">Votre panier est vide</p>
        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Ajoutez des abonnements ChatGPT, Netflix ou cartes Steam en un clic.</p>
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
      <div class="flex items-center justify-between p-3.5 bg-gray-900/90 border border-gray-800 rounded-xl">
        <div class="flex-1 pr-3">
          <h4 class="text-xs font-bold text-white leading-tight">${item.name}</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">${item.optionName}</p>
          <p class="text-xs font-black text-emerald-400 mt-1">${(item.priceDT * item.qty).toFixed(2)} DT <span class="text-gray-500 font-normal">($${(item.priceUSD * item.qty).toFixed(2)})</span></p>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex items-center bg-gray-950 border border-gray-800 rounded-lg p-0.5">
            <button onclick="updateCartQty('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-gray-800 transition">
              -
            </button>
            <span class="w-6 text-center text-xs font-bold text-white">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white rounded hover:bg-gray-800 transition">
              +
            </button>
          </div>
          <button onclick="removeCartItem('${item.id}')" class="p-1.5 text-gray-500 hover:text-rose-400 rounded-lg transition" title="Supprimer">
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

function submitCartToWhatsApp() {
  if (cart.length === 0) {
    showToast("Votre panier est vide !");
    return;
  }

  const paymentSelect = document.getElementById("cart-payment-method");
  const selectedPayment = paymentSelect ? paymentSelect.value : "D17 (La Poste Tunisienne)";

  let totalDT = 0;
  let totalUSD = 0;

  const itemsListText = cart.map((item, idx) => {
    const itemTotal = (item.priceDT * item.qty).toFixed(2);
    totalDT += item.priceDT * item.qty;
    totalUSD += item.priceUSD * item.qty;
    return `${idx + 1}. *${item.name}* (${item.optionName})\n   Qté: ${item.qty} | Prix: ${itemTotal} DT ($${(item.priceUSD * item.qty).toFixed(2)})`;
  }).join('\n\n');

  const message = `Bonjour Adam Atef Shop ! 👋
Je souhaite valider ma commande :

📋 *RÉCAPITULATIF DU PANIER :*
${itemsListText}

━━━━━━━━━━━━━━━━━━━━
💵 *TOTAL À PAYER :* *${totalDT.toFixed(2)} DT* (~$${totalUSD.toFixed(2)} USD)
💳 *Mode de paiement choisi :* ${selectedPayment}
📲 *Numéro de paiement D17/Flouci :* 51 725 481
━━━━━━━━━━━━━━━━━━━━

Merci de me confirmer la commande pour que je vous envoie la capture du reçu !`;

  const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// -----------------------------------------------------------------
// EVENT LISTENERS & UI NAVIGATION
// -----------------------------------------------------------------
function setupEventListeners() {
  // Category tabs
  const tabButtons = document.querySelectorAll(".category-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => {
        b.classList.remove("active", "bg-emerald-500", "text-black", "font-black", "shadow-lg", "shadow-emerald-500/20");
        b.classList.add("bg-gray-900/80", "text-gray-300", "hover:bg-gray-800");
      });
      btn.classList.add("active", "bg-emerald-500", "text-black", "font-black", "shadow-lg", "shadow-emerald-500/20");
      btn.classList.remove("bg-gray-900/80", "text-gray-300", "hover:bg-gray-800");

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

// Keyboard shortcuts (Cmd+K / Ctrl+K pour la recherche)
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      const input = document.getElementById("search-input");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
}

// Toast notification
function showToast(text) {
  let toast = document.getElementById("ui-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ui-toast";
    toast.className = "fixed bottom-5 right-5 z-50 bg-gray-900/95 backdrop-blur-md border border-emerald-500/40 text-emerald-400 font-bold text-xs px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-20 opacity-0";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> <span class="text-white">${text}</span>`;
  lucide.createIcons();
  toast.classList.remove("translate-y-20", "opacity-0");

  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 2500);
}
