/* ============================================================
   YSM FITNESS STORE — Product Data & Cart Logic
   ============================================================ */

const PRODUCTS = [

    // ---- HOODIES ----
    {
        id: 'hoodie-black',
        name: 'YSM Hoodie — "Write Your Own Story" Black',
        category: 'hoodies',
        tag: 'Best seller',
        price: 550,
        unit: '',
        img: 'images/store-hoodie-black.png',
        desc: 'Heavyweight oversized hoodie in jet black. "Write your own story." embroidered on chest. 400gsm cotton-blend, kangaroo pocket, dropped shoulders.'
    },
    {
        id: 'hoodie-brown',
        name: 'YSM Hoodie — "I Worked Out Today" Brown',
        category: 'hoodies',
        tag: '',
        price: 550,
        unit: '',
        img: 'images/store-hoodie-brown.png',
        desc: 'Rich dark brown heavyweight hoodie. "I worked out today. Mostly my doubts." — for those who show up regardless. Oversized fit, ribbed cuffs.'
    },
    {
        id: 'hoodie-olive',
        name: 'YSM Hoodie — Olive',
        category: 'hoodies',
        tag: '',
        price: 550,
        unit: '',
        img: 'images/store-hoodie-olive.png',
        desc: 'Dark military olive heavyweight hoodie. Small YSM logo embroidered on chest. Clean, minimal, built different. 400gsm, oversized fit.'
    },
    {
        id: 'hoodie-cream',
        name: 'YSM Hoodie — Cream',
        category: 'hoodies',
        tag: '',
        price: 550,
        unit: '',
        img: 'images/store-hoodie-cream.png',
        desc: 'Warm cream/sand heavyweight hoodie. The lightest colourway in the range — pairs with everything. 400gsm cotton-blend, oversized fit, kangaroo pocket.'
    },
    {
        id: 'hoodie-grey',
        name: 'YSM Hoodie — "We\'re On This" Grey',
        category: 'hoodies',
        tag: '',
        price: 550,
        unit: '',
        img: 'images/store-hoodie-grey.png',
        desc: 'Heather grey heavyweight hoodie. "We\'re on this." — a reminder that the work is happening. Dropped shoulders, kangaroo pocket, ribbed hem.'
    },

    // ---- CREWNECKS ----
    {
        id: 'crew-black',
        name: 'YSM Crewneck Sweatshirt — Black',
        category: 'crewnecks',
        tag: 'Popular',
        price: 450,
        unit: '',
        img: 'images/store-crew-black.png',
        desc: 'Heavyweight black crewneck. Embroidered YSM logo on chest. 380gsm fleece-lined interior, boxy fit, ribbed collar and cuffs.'
    },
    {
        id: 'crew-brown',
        name: 'YSM Crewneck Sweatshirt — Brown',
        category: 'crewnecks',
        tag: '',
        price: 450,
        unit: '',
        img: 'images/store-crew-brown.png',
        desc: 'Dark chocolate crewneck sweatshirt. Small YSM embroidery on chest. Oversized boxy silhouette, warm fleece lining, ribbed trim.'
    },
    {
        id: 'crew-olive',
        name: 'YSM Crewneck Sweatshirt — Olive',
        category: 'crewnecks',
        tag: '',
        price: 450,
        unit: '',
        img: 'images/store-crew-olive.png',
        desc: 'Military olive crewneck. YSM embroidered logo. The same heavyweight build — no hood, all mindset. Boxy fit, premium fleece.'
    },
    {
        id: 'crew-cream',
        name: 'YSM Crewneck Sweatshirt — Cream',
        category: 'crewnecks',
        tag: '',
        price: 450,
        unit: '',
        img: 'images/store-crew-cream.png',
        desc: 'Warm cream crewneck sweatshirt. Embroidered YSM logo on chest. Boxy oversized silhouette, 380gsm fleece lining, ribbed collar and cuffs.'
    },
    {
        id: 'crew-grey',
        name: 'YSM Crewneck Sweatshirt — Grey',
        category: 'crewnecks',
        tag: '',
        price: 450,
        unit: '',
        img: 'images/store-crew-grey.png',
        desc: 'Heather grey crewneck sweatshirt. Embroidered YSM logo on chest. Relaxed boxy fit, 380gsm, ribbed collar, cuffs and waist.'
    },

    // ---- TEES ----
    {
        id: 'tee-plain-black',
        name: 'YSM Tee — Plain Logo Black',
        category: 'tees',
        tag: 'Essential',
        price: 250,
        unit: '',
        img: 'images/store-tee-plain-black.png',
        desc: 'The essential. Heavyweight black oversized tee with just the YSM logo on the chest. 190gsm cotton, clean minimal design — let your actions do the talking.'
    },
    {
        id: 'tee-discipline',
        name: 'YSM Tee — "Discipline Today. Freedom Tomorrow." Black',
        category: 'tees',
        tag: 'Popular',
        price: 250,
        unit: '',
        img: 'images/store-tee-discipline.png',
        desc: '"Discipline today. Freedom tomorrow." Screen-printed on premium 190gsm heavyweight black tee. Oversized athletic cut, breathable cotton.'
    },
    {
        id: 'tee-progress',
        name: 'YSM Tee — "Progress Not Perfection" Olive',
        category: 'tees',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/store-tee-progress.png',
        desc: '"Progress not perfection." — olive heavyweight tee. Because every rep, every step counts. 190gsm, oversized fit, clean chest print.'
    },
    {
        id: 'tee-far',
        name: 'YSM Tee — "I Didn\'t Come This Far" Brown',
        category: 'tees',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/store-tee-far.png',
        desc: '"I didn\'t come this far to only come this far." Brown heavyweight tee. A daily reminder to keep pushing. 190gsm, oversized cut.'
    },
    {
        id: 'tee-focus',
        name: 'YSM Tee — "Focus on Becoming" Grey',
        category: 'tees',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/store-tee-focus.png',
        desc: '"Focus on becoming; not on competing." Grey heavyweight tee. Run your own race. 190gsm cotton, clean chest typography.'
    },
    {
        id: 'tee-sparkle',
        name: 'YSM Tee — "I Don\'t Sweat, I Sparkle" Black',
        category: 'tees',
        tag: 'New',
        price: 250,
        unit: '',
        img: 'images/store-tee-sparkle.png',
        desc: '"I don\'t sweat, I sparkle — with effort." For those who bring the energy every session. Heavyweight black tee, oversized fit.'
    },
    {
        id: 'tee-exercise',
        name: 'YSM Tee — "My Favorite Exercise" Olive',
        category: 'tees',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/store-tee-exercise.png',
        desc: '"My favorite exercise is discovering what I told myself I\'d do." Olive heavyweight tee. A note to self, worn proud. 190gsm, oversized fit.'
    },
    {
        id: 'tee-plain-grey',
        name: 'YSM Tee — Plain Logo Grey',
        category: 'tees',
        tag: '',
        price: 250,
        unit: '',
        img: 'images/store-tee-plain-grey.png',
        desc: 'Heather grey minimalist tee. Just "ysm." — clean, quiet, confident. 190gsm cotton, oversized fit. Pair with any colourway.'
    },

    // ---- JOGGERS ----
    {
        id: 'jogger-black',
        name: 'YSM Jogger Pants — Black',
        category: 'joggers',
        tag: 'Best seller',
        price: 480,
        unit: '',
        img: 'images/store-jogger-black.png',
        desc: '350gsm fleece jogger pants in jet black. Tapered leg, elastic waistband with drawstring, ribbed ankle cuffs, YSM embroidered on thigh.'
    },
    {
        id: 'jogger-brown',
        name: 'YSM Jogger Pants — Brown',
        category: 'joggers',
        tag: '',
        price: 480,
        unit: '',
        img: 'images/store-jogger-brown.png',
        desc: 'Dark chocolate fleece joggers. Match with the brown hoodie or crew for the full set. Tapered fit, elastic cuffs, YSM thigh embroidery.'
    },
    {
        id: 'jogger-olive',
        name: 'YSM Jogger Pants — Olive',
        category: 'joggers',
        tag: '',
        price: 480,
        unit: '',
        img: 'images/store-jogger-olive.png',
        desc: 'Military olive fleece joggers. Premium 350gsm, tapered silhouette, ribbed ankle cuffs, YSM embroidered branding. Pairs with the olive crew.'
    },
    {
        id: 'jogger-grey',
        name: 'YSM Jogger Pants — Grey',
        category: 'joggers',
        tag: 'New',
        price: 480,
        unit: '',
        img: 'images/store-jogger-grey.png',
        desc: 'Heather grey fleece joggers. The everyday essential. Soft fleece interior, tapered leg, ribbed cuffs, and YSM embroidery on thigh.'
    },

    // ---- GYM ACCESSORIES ----
    {
        id: 'gear-gloves',
        name: 'Gym Gloves — Premium Grip',
        category: 'accessories',
        tag: 'Best seller',
        price: 180,
        unit: '',
        img: 'images/store-gear-gloves.png',
        desc: 'Ventilated neoprene with silicone grip palm, pull-on tabs, and wrist support strap.'
    },
    {
        id: 'gear-jumprope',
        name: 'Speed Jump Rope',
        category: 'accessories',
        tag: '',
        price: 120,
        unit: '',
        img: 'images/store-gear-jumprope.png',
        desc: 'Adjustable steel cable with ball-bearing handles. Smooth rotation for double-unders.'
    },
    {
        id: 'gear-resistance',
        name: 'Resistance Band Set — 5-Level',
        category: 'accessories',
        tag: '',
        price: 350,
        unit: '',
        img: 'images/store-gear-bands.png',
        desc: 'Five bands from light to heavy, with carry bag and door anchor. Full-body resistance.'
    },
    {
        id: 'gear-bag',
        name: 'YSM Duffle Bag — 40L',
        category: 'accessories',
        tag: 'New',
        price: 650,
        unit: '',
        img: 'images/store-gear-duffle.png',
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
   HELPERS
   ============================================================ */
const APPAREL_CATS = ['hoodies', 'crewnecks', 'tees', 'joggers'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

function isApparel(product) {
    return APPAREL_CATS.indexOf(product.category) !== -1;
}

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
        const apparel = isApparel(p);

        const sizePicker = apparel
            ? '<div class="size-picker" data-pid="' + p.id + '">'
                + '<span class="size-label">Size:</span>'
                + SIZES.map(s =>
                    '<button class="size-btn" data-size="' + s + '">' + s + '</button>'
                  ).join('')
              + '</div>'
            : '';

        return '<article class="store-card">'
            + '<img class="store-card-img" src="' + imgSrc + '" alt="' + p.name + '" loading="lazy">'
            + '<div class="store-card-body">'
            + '<h3>' + p.name + '</h3>'
            + tagHtml
            + '<p>' + p.desc + '</p>'
            + sizePicker
            + '<div class="store-card-footer">'
            + '<span class="store-price">K' + (p.price > 0 ? p.price.toLocaleString() : 'Ask') + '<span class="price-unit">' + p.unit + '</span></span>'
            + '<button class="btn-add-cart" data-id="' + p.id + '" data-name="' + p.name + '" data-price="' + p.price + '" data-img="' + imgSrc + '" data-apparel="' + apparel + '">'
            + (apparel ? 'Select Size' : 'Add to Cart')
            + '</button>'
            + '</div></div></article>';
    }).join('');

    // Size button selection — pick size, close picker, arm the add button
    grid.querySelectorAll('.size-picker').forEach(function(picker) {
        picker.querySelectorAll('.size-btn').forEach(function(sBtn) {
            sBtn.addEventListener('click', function() {
                picker.querySelectorAll('.size-btn').forEach(function(b) { b.classList.remove('selected'); });
                sBtn.classList.add('selected');
                // Close the picker
                picker.classList.remove('open');
                // Update add button
                const card = picker.closest('.store-card');
                const addBtn = card.querySelector('.btn-add-cart');
                addBtn.textContent = 'Add — ' + sBtn.dataset.size;
                addBtn.classList.remove('needs-size');
                addBtn.dataset.sizeReady = 'true';
            });
        });
    });

    // Add to cart / toggle size picker
    grid.querySelectorAll('.btn-add-cart').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const apparel = btn.dataset.apparel === 'true';

            if (!apparel) {
                // Accessories — add directly
                addToCart({
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: parseInt(btn.dataset.price),
                    img: btn.dataset.img,
                    size: ''
                });
                btn.classList.add('added');
                btn.textContent = '\u2713 Added';
                return;
            }

            // If size already chosen, add to cart
            if (btn.dataset.sizeReady === 'true') {
                const card = btn.closest('.store-card');
                const selected = card.querySelector('.size-btn.selected');
                const size = selected ? selected.dataset.size : '';
                addToCart({
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: parseInt(btn.dataset.price),
                    img: btn.dataset.img,
                    size: size
                });
                btn.classList.add('added');
                btn.textContent = '\u2713 ' + size + ' — Added';
                return;
            }

            // Otherwise open/close the size picker
            const card = btn.closest('.store-card');
            const picker = card.querySelector('.size-picker');
            const isOpen = picker.classList.contains('open');

            // Close all other open pickers first
            grid.querySelectorAll('.size-picker.open').forEach(function(p) {
                p.classList.remove('open');
            });

            if (!isOpen) {
                picker.classList.add('open');
                btn.textContent = 'Pick a size \u2191';
            } else {
                btn.textContent = 'Select Size';
            }
        });
    });
}

/* ============================================================
   CART OPERATIONS
   ============================================================ */
function cartKey(id, size) {
    return size ? id + '||' + size : id;
}

function addToCart(product) {
    const key = cartKey(product.id, product.size);
    const existing = cart.find(function(c) { return c.cartKey === key; });
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push(Object.assign({}, product, { qty: 1, cartKey: key }));
    }
    saveCart();
    updateCartUI();
    showToast(product.size ? 'Size ' + product.size + ' added!' : 'Added to cart!');
}

function removeFromCart(key) {
    cart = cart.filter(function(c) { return c.cartKey !== key; });
    saveCart();
    updateCartUI();
}

function updateQty(key, delta) {
    const item = cart.find(function(c) { return c.cartKey === key; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(key);
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
        const sizeTag = item.size ? '<span class="cart-item-size">Size: ' + item.size + '</span>' : '';
        return '<div class="cart-item" data-key="' + item.cartKey + '">'
            + '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '" loading="lazy">'
            + '<div class="cart-item-info">'
            + '<h4>' + item.name + '</h4>'
            + sizeTag
            + '<span class="cart-item-price">K' + (item.price * item.qty).toLocaleString() + '</span>'
            + '</div>'
            + '<div class="cart-item-controls">'
            + '<button class="qty-btn" data-action="dec" data-key="' + item.cartKey + '">&minus;</button>'
            + '<span class="cart-item-qty">' + item.qty + '</span>'
            + '<button class="qty-btn" data-action="inc" data-key="' + item.cartKey + '">+</button>'
            + '<button class="qty-btn remove-item" data-action="remove" data-key="' + item.cartKey + '">&times;</button>'
            + '</div></div>';
    }).join('');

    cartList.querySelectorAll('.qty-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const key = btn.dataset.key;
            const action = btn.dataset.action;
            if (action === 'inc') updateQty(key, 1);
            else if (action === 'dec') updateQty(key, -1);
            else if (action === 'remove') removeFromCart(key);
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
        var sizePart = i.size ? ' (Size: ' + i.size + ')' : '';
        return '- ' + i.name + sizePart + ' x' + i.qty + ' = K' + (i.price * i.qty).toLocaleString();
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
