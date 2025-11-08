// script.js - simple interactivity for the Noorify demo
(function(){
  const langToggle = document.getElementById('langToggle');
  const heroText = document.getElementById('heroText');
  const catTitle = document.getElementById('catTitle');
  const featuredTitle = document.getElementById('featuredTitle');
  const reviewsTitle = document.getElementById('reviewsTitle');

  // Simple bilingual text set (English <-> Bengali)
  const text = {
    bn: {
      langLabel: 'বাংলা',
      heroH1: '<h1 class="offer-title">নতুন অফারে<br><span class="large">60% ছাড়</span></h1><p class="hero-sub">শুধু সীমিত সময়ের জন্য — এখনই চেক করুন</p><a class="btn-primary" href="#">এখনই কিনুন</a>',
      categories: ['Men','Women','Electronics','Home'],
      catTitle: 'শ্রেণীসমূহ',
      featuredTitle: 'ফিচারড প্রোডাক্ট',
      reviewsTitle: 'ক্রেতাদের মতামত'
    },
    en: {
      langLabel: 'English',
      heroH1: '<h1 class="offer-title">New Offer<br><span class="large">60% OFF</span></h1><p class="hero-sub">Limited time only — check it out now</p><a class="btn-primary" href="#">Shop Now</a>',
      categories: ['Men','Women','Electronics','Home'],
      catTitle: 'Categories',
      featuredTitle: 'Featured Products',
      reviewsTitle: 'Customer Reviews'
    }
  };

  // start in Bengali
  let current = 'bn';
  function renderLanguage(lang){
    current = lang;
    langToggle.textContent = text[lang].langLabel;
    heroText.innerHTML = text[lang].heroH1;
    catTitle.textContent = text[lang].catTitle;
    featuredTitle.textContent = text[lang].featuredTitle;
    reviewsTitle.textContent = text[lang].reviewsTitle;
    // update category names (simple, left as icons so English words okay)
    const cats = document.querySelectorAll('.cat-card .cat-name');
    text[lang].categories.forEach((c,i)=>{ if(cats[i]) cats[i].textContent = c });
  }

  langToggle.addEventListener('click',function(){
    renderLanguage(current === 'bn' ? 'en' : 'bn');
  });

  // initialize
  renderLanguage('bn');
})();