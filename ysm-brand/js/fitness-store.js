/* ============================================================
   YSM FITNESS STORE — Product Data & Cart Logic
   ============================================================ */

const PRODUCTS = [
    // ---- Apparel ----
    {
        id: 'app-hoodie-black',
        name: 'YSM Heavyweight Hoodie — Black',
        category: 'apparel',
        tag: 'Best seller',
        price: 550,
        unit: '',
        img: 'images/fitness-store-hoodie-black.svg',
        desc: '400gsm cotton-blend hoodie with embroidered YSM logo. Oversized fit, kangaroo pocket.'
    },
    {
        id: 'app-hoodie-cream',
        name: 'YSM Heavyweight Hoodie — Cream',
        category: 'apparel',
        tag: '',
        price: 550,
        unit: '',
        img: 'images/fitness-store-hoodie-cream.svg',
        desc: 'Same heavyweight build, cream colourway. Dropped shoulders, ribbed cuffs, relaxed fit.'
    },
    {
        id: 'app-tee-black',
        name: 'YSM Training Tee — Black',
        category: 'apparel',
        tag: 'Popular',
        price: 250,
        unit: '',
        img: 'images/fitness-store-tee-black.svg',
        desc: '190gsm heavyweight tee. Screen-printed YSM chest logo. Cropped athletic cut.'
    },
    {
        id: 'app-tee-white',
        name: 'YSM Training Tee — White',
        category: 'apparel',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/fitness-store-tee-white.svg',
        desc: 'Same athletic fit in crisp white. Breathable cotton, perfect for gym and casual wear.'
    },
    {
        id: 'app-sweatpants',
        name: 'YSM Sweatpants — Charcoal',
        category: 'apparel',
        tag: 'New',
        price: 480,
        unit: '',
        img: 'images/fitness-store-sweatpants.svg',
        desc: '350gsm fleece sweatpants with tapered leg, elastic cuffs, and YSM embroidery on thigh.'
    },
    {
        id: 'app-shorts',
        name: 'YSM Gym Shorts — Black',
        category: 'apparel',
        tag: '',
        price: 320,
        unit: '',
        img: 'images/fitness-store-shorts.svg',
        desc: 'Lightweight woven shorts with inner liner, zipper pocket, and reflective YSM branding.'
    },

    // ---- Gym Accessories ----
    {
        id: 'gear-gloves',
        name: 'Gym Gloves — Premium Grip',
        category: 'accessories',
        tag: 'Best seller',
        price: 180,
        unit: '',
        img: 'images/fitness-store-gloves.svg',
        desc: 'Ventilated neoprene with silicone grip palm, pull-on tabs, and wrist support strap.'
    },
    {
        id: 'gear-jumprope',
        name: 'Speed Jump Rope',
        category: 'accessories',
        tag: '',
        price: 120,
        unit: '',
        img: 'images/fitness-store-jumprope.svg',
        desc: 'Adjustable steel cable with ball-bearing handles. Smooth rotation for double-unders.'
    },
    {
        id: 'gear-resistance',
        name: 'Resistance Band Set — 5-Level',
        category: 'accessories',
        tag: '',
        price: 350,
        unit: '',
        img: 'images/fitness-store-bands.svg',
        desc: 'Five bands from light to heavy, with carry bag and door anchor. Full-body resistance.'
    },
    {
        id: 'gear-towel',
        name: 'YSM Gym Towel — Quick Dry',
        category: 'accessories',
        tag: '',
        price: 140,
        unit: '',
        img: 'images/fitness-store-towel.svg',
        desc: 'Microfibre fast-dry towel with YSM print. Compact fold, snaps closed for easy carry.'
    },
    {
        id: 'gear-headband',
        name: 'YSM Training Headband',
        category: 'accessories',
        tag: '',
        price: 80,
        unit: '',
        img: 'images/fitness-store-headband.svg',
        desc: 'Moisture-wicking sweatband with silicone grip interior. Keeps sweat out of your eyes.'
    },
    {
        id: 'gear-bag',
        name: 'YSM Duffle Bag — 40L',
        category: 'accessories',
        tag: 'New',
        price: 650,
        unit: '',
        img: 'images/fitness-store-duffle.svg',
        desc: 'Waterproof ripstop duffle with shoe compartment, wet pocket, and YSM reflective logo.'
    }
];

/* ============================================================
   CART STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('ysm_fitness_cart')) || [];

/* ============================================================
   DOM REFS
   ============================================================ */
const grid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartList = document.getElementById('cartList');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const drawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('cartOverlay');
const toast = document.getElementById('toast');
const catTabs = document.querySelectorAll('.category-tab');

/* ============================================================
   RENDER PRODUCT GRID
   ============================================================ */
function renderProducts(category) {
    if (category === undefined) category = 'all';
    const filtered = category === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === category);

    grid.innerHTML = filtered.map(p => {
        const imgSrc = p.img;
        const tagHtml = p.tag ? '<span class="product-tag">' + p.tag + '</span>' : '';
        const inCart = cart.find(c => c.id === p.id);
        const btnText = inCart ? '\u2713 Added' : 'Add to Cart';
        const btnCls = inCart ? 'btn-add-cart added' : 'btn-add-cart';

        return '<article class="store-card">'
            + '<img class="store-card-img" src="' + imgSrc + '" alt="' + p.name + '" loading="lazy">'
            + '<div class="store-card-body">'
            + '<h3>' + p.name + '</h3>'
            + tagHtml
            + '<p>' + p.desc + '</p>'
            + '<div class="store-card-footer">'
            + '<span class="store-price">K' + (p.price > 0 ? p.price.toLocaleString() : 'Ask') + '<span class="price-unit">' + p.unit + '</span></span>'
            + '<button class="' + btnCls + '" data-id="' + p.id + '" data-name="' + p.name + '" data-price="' + p.price + '" data-img="' + imgSrc + '">' + btnText + '</button>'
            + '</div></div></article>';
    }).join('');

    // Attach add-to-cart listeners
    grid.querySelectorAll('.btn-add-cart:not(.added)').forEach(function(btn) {
        btn.addEventListener('click', function() {
            addToCart({
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: parseInt(btn.dataset.price),
                img: btn.dataset.img
            });
            btn.classList.add('added');
            btn.textContent = '\u2713 Added';
        });
    });
}

/* ============================================================
   CART OPERATIONS
   ============================================================ */
function addToCart(product) {
    const existing = cart.find(function(c) { return c.id === product.id; });
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push(Object.assign({}, product, { qty: 1 }));
    }
    saveCart();
    updateCartUI();
    showToast('Added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(function(c) { return c.id !== id; });
    saveCart();
    updateCartUI();
    const btn = grid.querySelector('.btn-add-cart[data-id="' + id + '"]');
    if (btn) {
        btn.classList.remove('added');
        btn.textContent = 'Add to Cart';
    }
}

function updateQty(id, delta) {
    const item = cart.find(function(c) { return c.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('ysm_fitness_cart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
}

function getCartCount() {
    return cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
}

/* ============================================================
   UPDATE CART UI
   ============================================================ */
function updateCartUI() {
    const count = getCartCount();
    cartCount.textContent = count;

    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartList.innerHTML = '';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cartList.innerHTML = cart.map(function(item) {
        return '<div class="cart-item" data-id="' + item.id + '">'
            + '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '" loading="lazy">'
            + '<div class="cart-item-info">'
            + '<h4>' + item.name + '</h4>'
            + '<span class="cart-item-price">K' + (item.price * item.qty).toLocaleString() + '</span>'
            + '</div>'
            + '<div class="cart-item-controls">'
            + '<button class="qty-btn" data-action="dec" data-id="' + item.id + '">&minus;</button>'
            + '<span class="cart-item-qty">' + item.qty + '</span>'
            + '<button class="qty-btn" data-action="inc" data-id="' + item.id + '">+</button>'
            + '<button class="qty-btn remove-item" data-action="remove" data-id="' + item.id + '">&times;</button>'
            + '</div></div>';
    }).join('');

    // Attach qty listeners
    cartList.querySelectorAll('.qty-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const id = btn.dataset.id;
            const action = btn.dataset.action;
            if (action === 'inc') updateQty(id, 1);
            else if (action === 'dec') updateQty(id, -1);
            else if (action === 'remove') removeFromCart(id);
        });
    });

    cartSubtotal.textContent = 'K' + getCartTotal().toLocaleString();
}

/* ============================================================
   CART DRAWER TOGGLE
   ============================================================ */
function openCart() {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('cartTrigger').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

/* ============================================================
   CHECKOUT VIA WHATSAPP
   ============================================================ */
document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cart.length === 0) return;

    var items = cart.map(function(i) {
        return '- ' + i.name + ' x' + i.qty + ' = K' + (i.price * i.qty).toLocaleString();
    }).join('%0A');

    var total = getCartTotal().toLocaleString();
    var msg = 'Hi%20The%20YSM%20Brand,%20I%27d%20like%20to%20order%20the%20following%20from%20the%20Fitness%20Store%3A%0A%0A' + items + '%0A%0ATotal%3A%20K' + total + '%0A%0ACan%20you%20confirm%20availability%20and%20delivery%3F';

    window.open('https://wa.me/260975228899?text=' + msg, '_blank');
});

/* ============================================================
   CATEGORY FILTERING
   ============================================================ */
catTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        catTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        renderProducts(tab.dataset.category);
    });
});

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
var toastTimer;

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

/* ============================================================
   INIT
   ============================================================ */
renderProducts('all');
updateCartUI();
