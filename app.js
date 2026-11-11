// ===================================================================
// ADAM ATEF SHOP — APPLICATION LOGIC
// ===================================================================

let currentCategory = "all";
let searchQuery = "";
let cart = [];
const PAGE_SIZE = 24;
let visibleCount = PAGE_SIZE;

function showMoreProducts() {
  visibleCount += PAGE_SIZE;
  renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  renderExchangeRateBadge();
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  updateCartBadge();
  setupConverter();
  lucide.createIcons();
});

function rate() { return STORE_CONFIG.exchangeRateUSD; }
function fmtRate() { return `1$ = ${rate()} DT`; }

function renderExchangeRateBadge() {
  document.querySelectorAll(".current-exchange-rate").forEach(el => { el.textContent = fmtRate(); });
}

function toDT(priceUSD) { return (priceUSD * rate()).toFixed(2); }

// -----------------------------------------------------------------
// CATALOGUE
// -----------------------------------------------------------------
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;
  const q = searchQuery.toLowerCase();

  const filtered = PRODUCTS_DATA.filter(p => {
    const okCat = currentCategory === "all" || p.category === currentCategory;
    const okSearch = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) ||
                     p.brand.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q);
    return okCat && okSearch;
  });

  const countEl = document.getElementById("products-count");
  if (countEl) countEl.textContent = `${filtered.length} service${filtered.length > 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white border border-slate-200 rounded-xl">
        <p class="font-display font-bold text-navy-900">Aucun résultat</p>
        <p class="text-sm text-slate-500 mt-1">Dites-nous ce que vous cherchez, nous vous donnons le prix en dinars.</p>
        <button onclick="orderCustomItem()" class="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg">
          <i data-lucide="message-circle" class="w-4 h-4"></i> Demander sur WhatsApp
        </button>
      </div>`;
    lucide.createIcons();
    return;
  }

  const visible = filtered.slice(0, visibleCount);
  const moreWrap = document.getElementById("show-more-wrap");
  if (moreWrap) moreWrap.classList.toggle("hidden", filtered.length <= visibleCount);

  container.innerHTML = visible.map(p => {
    const first = p.options[0];
    const header = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy">`
      : `<div class="w-full h-full flex items-center justify-center" style="background:linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})">
           <i data-lucide="${p.icon || 'gamepad-2'}" class="w-14 h-14 text-white/90" stroke-width="1.5"></i>
         </div>`;
    return `
    <article class="product-card bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg hover:border-slate-300 transition" data-id="${p.id}">
      <div class="relative h-40 bg-slate-100">
        ${header}
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[11px] font-semibold text-navy-900">${p.categoryLabel}</span>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <div class="text-[11px] font-semibold text-accent uppercase tracking-wide">${p.brand}</div>
        <h3 class="font-display font-bold text-navy-900 mt-1 line-clamp-1">${p.name}</h3>
        <p class="text-sm text-slate-600 mt-1.5 leading-relaxed line-clamp-2">${p.description}</p>

        <label class="block text-xs font-medium text-slate-500 mt-4 mb-1.5">Formule</label>
        <select onchange="updateSelectedOption('${p.id}', this.value)" class="w-full bg-white border border-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent">
          ${p.options.map((o, i) => `<option value="${i}">${o.name}</option>`).join("")}
        </select>

        <div class="mt-auto pt-5">
          <div class="flex items-end justify-between mb-3">
            <div>
              <div class="font-display text-2xl font-extrabold text-navy-900" id="price-dt-${p.id}">${toDT(first.priceUSD)} <span class="text-sm font-bold text-slate-500">DT</span></div>
            </div>
            <div class="text-xs text-slate-500" id="price-usd-${p.id}">≈ $${first.priceUSD}</div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <button onclick="addToCart('${p.id}')" class="col-span-2 py-2.5 text-sm font-semibold text-navy-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition">Ajouter</button>
            <button onclick="orderDirectWhatsApp('${p.id}')" class="col-span-3 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition">Commander</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");

  lucide.createIcons();
}

function updateSelectedOption(productId, idx) {
  const p = PRODUCTS_DATA.find(x => x.id === productId);
  const o = p && p.options[parseInt(idx, 10)];
  if (!o) return;
  const dt = document.getElementById(`price-dt-${productId}`);
  const usd = document.getElementById(`price-usd-${productId}`);
  if (dt) dt.innerHTML = `${toDT(o.priceUSD)} <span class="text-sm font-bold text-slate-500">DT</span>`;
  if (usd) usd.textContent = `≈ $${o.priceUSD}`;
}

function getSelectedOptionFor(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  const select = card && card.querySelector("select");
  const i = select ? parseInt(select.value, 10) : 0;
  return { product, option: product.options[i] || product.options[0] };
}

// -----------------------------------------------------------------
// WHATSAPP ORDERS
// -----------------------------------------------------------------
function openWhatsApp(message) {
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function orderDirectWhatsApp(productId) {
  const { product, option } = getSelectedOptionFor(productId);
  openWhatsApp(`Bonjour Adam Atef Shop,
Je souhaite commander :

Produit : ${product.name}
Formule : ${option.name}
Prix : ${toDT(option.priceUSD)} DT (~$${option.priceUSD})
Paiement : D17 / Flouci au 51725481

Pouvez-vous confirmer la disponibilité ? Merci.`);
}

function requestCustomService() {
  const box = document.getElementById("custom-request");
  const need = box ? box.value.trim() : "";
  if (!need) { showToast("Décrivez le service dont vous avez besoin"); if (box) box.focus(); return; }
  openWhatsApp(`Bonjour Adam Atef Shop,
J'ai besoin du service suivant :

${need}

Pouvez-vous me donner le prix en dinars et le délai ? Merci.`);
}

function orderCustomItem() {
  openWhatsApp(`Bonjour Adam Atef Shop,
Je cherche un jeu ou un abonnement qui n'est pas dans la liste. Pouvez-vous me donner le prix en dinars (${fmtRate()}) ? Merci.`);
}

function copyPaymentNumber(num = "51725481") {
  const done = () => {
    showToast(`Numéro ${num} copié`);
    const fb = document.getElementById("copy-feedback");
    if (fb) { fb.textContent = "Numéro copié"; fb.classList.remove("hidden"); setTimeout(() => fb.classList.add("hidden"), 2000); }
  };
  if (navigator.clipboard) navigator.clipboard.writeText(num).then(done).catch(() => showToast(`Numéro : ${num}`));
  else showToast(`Numéro : ${num}`);
}

// -----------------------------------------------------------------
// CONVERTER
// -----------------------------------------------------------------
function setupConverter() {
  const usd = document.getElementById("converter-usd");
  const dt = document.getElementById("converter-dt");
  if (!usd || !dt) return;
  usd.value = 20;
  dt.value = (20 * rate()).toFixed(2);
  usd.addEventListener("input", e => {
    const v = parseFloat(e.target.value);
    dt.value = (!isNaN(v) && v >= 0) ? (v * rate()).toFixed(2) : "";
  });
  dt.addEventListener("input", e => {
    const v = parseFloat(e.target.value);
    usd.value = (!isNaN(v) && v >= 0) ? (v / rate()).toFixed(2) : "";
  });
}

// -----------------------------------------------------------------
// CART
// -----------------------------------------------------------------
function addToCart(productId) {
  const { product, option } = getSelectedOptionFor(productId);
  const id = `${productId}-${option.name}`;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, productId, name: product.name, optionName: option.name, priceUSD: option.priceUSD, qty: 1 });
  saveCart(); updateCartBadge();
  showToast(`${product.name} ajouté au panier`);
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartModal();
}

function removeCartItem(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartBadge(); renderCartModal(); }
function clearCart() { cart = []; saveCart(); updateCartBadge(); renderCartModal(); }
function saveCart() { localStorage.setItem("adam_atef_cart", JSON.stringify(cart)); }
function loadCartFromStorage() {
  try { const s = localStorage.getItem("adam_atef_cart"); if (s) cart = JSON.parse(s); } catch (e) { cart = []; }
}

function updateCartBadge() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count-badge").forEach(b => { b.textContent = n; b.classList.toggle("hidden", n === 0); });
}

function toggleCartModal(open) {
  const m = document.getElementById("cart-modal");
  if (!m) return;
  if (open) { renderCartModal(); m.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
  else { m.classList.add("hidden"); document.body.style.overflow = "auto"; }
}

function renderCartModal() {
  const box = document.getElementById("cart-items");
  const totDT = document.getElementById("cart-total-dt");
  const totUSD = document.getElementById("cart-total-usd");
  if (!box) return;

  if (cart.length === 0) {
    box.innerHTML = `<div class="py-16 text-center"><p class="font-display font-bold text-navy-900">Votre panier est vide</p><p class="text-sm text-slate-500 mt-1">Ajoutez un service depuis le catalogue.</p></div>`;
    totDT.textContent = "0.00 DT"; totUSD.textContent = "~$0.00";
    return;
  }

  let dt = 0, usd = 0;
  box.innerHTML = cart.map(i => {
    const lineDT = i.priceUSD * i.qty * rate();
    dt += lineDT; usd += i.priceUSD * i.qty;
    return `
    <div class="flex items-center justify-between gap-3 p-3.5 border border-slate-200 rounded-lg">
      <div class="min-w-0">
        <div class="text-sm font-semibold text-navy-900 truncate">${i.name}</div>
        <div class="text-xs text-slate-500">${i.optionName}</div>
        <div class="text-sm font-bold text-navy-900 mt-1">${lineDT.toFixed(2)} DT</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <div class="flex items-center border border-slate-300 rounded-md">
          <button onclick="updateCartQty('${i.id}', -1)" class="w-7 h-7 text-slate-600 hover:bg-slate-100">−</button>
          <span class="w-6 text-center text-sm font-semibold">${i.qty}</span>
          <button onclick="updateCartQty('${i.id}', 1)" class="w-7 h-7 text-slate-600 hover:bg-slate-100">+</button>
        </div>
        <button onclick="removeCartItem('${i.id}')" class="p-1.5 text-slate-400 hover:text-red-600" title="Supprimer"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>`;
  }).join("");

  totDT.textContent = `${dt.toFixed(2)} DT`;
  totUSD.textContent = `~$${usd.toFixed(2)}`;
  lucide.createIcons();
}

function submitCartToWhatsApp() {
  if (cart.length === 0) { showToast("Votre panier est vide"); return; }
  const pay = document.getElementById("cart-payment-method");
  const method = pay ? pay.value : "D17 (51 725 481)";
  let dt = 0, usd = 0;
  const lines = cart.map((i, n) => {
    const l = i.priceUSD * i.qty * rate();
    dt += l; usd += i.priceUSD * i.qty;
    return `${n + 1}. ${i.name} (${i.optionName})\n   Qté : ${i.qty} | ${l.toFixed(2)} DT`;
  }).join("\n\n");

  openWhatsApp(`Bonjour Adam Atef Shop,
Je souhaite valider ma commande :

${lines}

TOTAL : ${dt.toFixed(2)} DT (~$${usd.toFixed(2)})
Paiement : ${method}

Merci de confirmer pour que j'envoie le reçu.`);
}

// -----------------------------------------------------------------
// UI
// -----------------------------------------------------------------
function setupEventListeners() {
  const tabs = document.querySelectorAll(".category-tab-btn");
  tabs.forEach(btn => btn.addEventListener("click", () => {
    tabs.forEach(b => {
      b.classList.remove("active", "bg-navy-900", "text-white", "border-navy-900");
      b.classList.add("bg-white", "text-slate-600", "border-slate-300");
    });
    btn.classList.add("active", "bg-navy-900", "text-white", "border-navy-900");
    btn.classList.remove("bg-white", "text-slate-600", "border-slate-300");
    currentCategory = btn.getAttribute("data-category");
    visibleCount = PAGE_SIZE;
    renderProducts();
  }));

  const search = document.getElementById("search-input");
  if (search) search.addEventListener("input", e => { searchQuery = e.target.value; visibleCount = PAGE_SIZE; renderProducts(); });
}

function showToast(text) {
  let t = document.getElementById("ui-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "ui-toast";
    t.className = "fixed bottom-24 right-5 z-50 bg-navy-900 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-lg transition-all duration-300 translate-y-4 opacity-0";
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.classList.remove("translate-y-4", "opacity-0");
  setTimeout(() => t.classList.add("translate-y-4", "opacity-0"), 2400);
}
