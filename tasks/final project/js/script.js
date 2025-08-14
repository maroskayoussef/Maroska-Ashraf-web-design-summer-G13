   


 $(function () {
  $('.flash-slider').owlCarousel({
    loop: true,
    items:5,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 500,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
 
  });
});
$(function () {
  $('.products-carousel').owlCarousel({
    loop: true,
    items:8,
    margin: 16,      
    nav: false,     
    dots: false,       
    smartSpeed: 500,
    autoplay:true,
   
  });
});

$(function () {
  $('.blog-slider').owlCarousel({
    loop: true,
    items:3,
    margin: 20,
    nav: true,
    dots: false,
    smartSpeed: 500,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],

  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  const durationSecs = 7 * 3600 + 59 * 60 + 59;
  const endAt = Date.now() + durationSecs * 1000;

  function tick() {
    let remaining = Math.max(0, Math.floor((endAt - Date.now()) / 1000));
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;

    hoursEl.textContent   = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  tick();
  const timer = setInterval(() => {
    tick();
    if (Date.now() >= endAt) clearInterval(timer);
  }, 1000);
});

function handleChangeImg(el) {
    const main = document.getElementById('mainImage');
    if (!main) return;
    main.src = el.src;
     document.querySelectorAll('.product-thumb').forEach(img => {
      img.classList.remove('active-product-thumb');
    });
    el.classList.add('active-product-thumb');
  }

function handleFilter(category) {
  let categories = document.querySelectorAll('.categories');

  categories.forEach(element => {
    if (category === 'All' || element.dataset.category === category) {
      element.classList.remove('d-none');
    } else {
      element.classList.add('d-none');
    }
  });
}

function setActiveTab(btn){
  document.querySelectorAll('.pd-tablist .nav-link').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  if (!form) return;

  form.setAttribute('novalidate', '');

  const fields = form.querySelectorAll('.contact-input');

  function ensureError(input) {
    let el = input.nextElementSibling;
    if (!el || !el.classList || !el.classList.contains('error-msg')) {
      el = document.createElement('div');
      el.className = 'error-msg text-danger small mt-1';
      input.insertAdjacentElement('afterend', el);
    }
    return el;
  }

  function showError(input, msg) { ensureError(input).textContent = msg; }
  function clearError(input) {
    const el = input.nextElementSibling;
    if (el && el.classList && el.classList.contains('error-msg')) el.textContent = '';
  }

  function validateRequired() {
    let ok = true;
    fields.forEach(input => {
      if (input.value.trim() === '') {
        showError(input, 'This field is required');
        ok = false;
      } else {
        clearError(input);
      }
    });
    return ok;
  }

  fields.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') clearError(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();               
    if (!validateRequired()) {
      const first = Array.from(fields).find(f => f.value.trim() === '');
      if (first) first.focus();
      return;
    }

    let banner = document.getElementById('thankyouBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'thankyouBanner';
      banner.className = 'alert alert-success';
      banner.textContent = 'Thank you! Your message has been sent.';
      form.parentNode.insertBefore(banner, form);
    } else {
      banner.classList.remove('d-none');
    }

    form.reset();
    fields.forEach(clearError);
  });
});
