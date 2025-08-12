document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Top Nav ---
  const nav     = document.getElementById('topNav');
  const spacer  = document.getElementById('topNavSpacer');
  const trigger = document.getElementById('firstNavTrigger');

  if (nav && spacer && trigger) {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove('fixed-top', 'fixed');
        document.body.classList.remove('has-fixed-topnav');
        document.body.style.setProperty('--topnav-h', '0px');
        spacer.style.height = '0px';
      } else {
        nav.classList.add('fixed-top', 'fixed');
        const h = nav.offsetHeight || 0;
        document.body.style.setProperty('--topnav-h', h + 'px');
        document.body.classList.add('has-fixed-topnav');
        spacer.style.height = h + 'px';
      }
    }, { threshold: 0 });

    io.observe(trigger);
  } else {
    console.warn('Sticky nav: missing #topNav, #topNavSpacer, or #firstNavTrigger');
  }

  // --- Product Tabs (Description / Specifications / Reviews) ---
  const links  = document.querySelectorAll('.pd-tab-link');
  const panels = document.querySelectorAll('.pd-tab-panel');

  if (links.length && panels.length) {
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // header active state
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // panel visibility
        panels.forEach(p => p.classList.remove('show'));
        const target = document.querySelector(link.dataset.target);
        if (target) target.classList.add('show');
      });
    });
  }
});
