  const nav = document.getElementById('topNav');
    const spacer   = document.getElementById('topNavSpacer');

  const trigger = document.getElementById('firstNavTrigger');

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      nav.classList.remove('fixed-top', 'fixed');
      document.body.classList.remove('has-fixed-topnav');
      document.body.style.setProperty('--topnav-h', '0px');
            spacer.style.height = '0px';

    } 
    else {
      nav.classList.add('fixed-top', 'fixed');
      const h = nav.offsetHeight || 0;
      document.body.style.setProperty('--topnav-h', h + 'px');
      document.body.classList.add('has-fixed-topnav');
            spacer.style.height = h + 'px';

    }
  });
  io.observe(trigger);

  io.observe(trigger);