const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      alert(`Searching for: ${searchInput.value}`);
      searchInput.classList.remove('active');
      searchInput.value = '';
    }
  });
  

  const popular_btn = document.getElementById('popular_btn');
  const recent_btn = document.getElementById('recent_btn');
  const pop_div_area = document.getElementById('pop_div_area');
  
  function loadPopular() {
    popular_btn.classList.add('active');
    recent_btn.classList.remove('active');
    pop_div_area.innerHTML = `
      <h3>En Çok Tıklanan Makaleler</h3>
      <ol>
        <li>Makale 1</li>
        <li>Makale 2</li>
        <li>Makale 3</li>
      </ol>
    `;
  }
  
  function loadRecent() {
    recent_btn.classList.add('active');
    popular_btn.classList.remove('active');
    pop_div_area.innerHTML = `
      <h3>En Son Yüklenen Makaleler</h3>
      <ol>
        <li>Makale 1</li>
        <li>Makale 2</li>
        <li>Makale 3</li>
      </ol>
    `;
  }

  function loadPopular() {
    popular_btn.classList.add('active');
    recent_btn.classList.remove('active');
    pop_div_area.innerHTML = `
      <h3>En Çok Tıklanan Makaleler</h3>
      <ul class="pop_article_list">
        <li>
          <a href="article_1.html" class="pop_article">
            <span class="pop_title">Özberk Özdemir Dünyayıdaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa</span>
            <div class="meta_line">
              <span class="category ai">AI</span>
              <span class="author">by Mia Chan</span>
            </div>
          </a>
        </li>
        <li>
          <a href="article_2.html" class="pop_article">
            <span class="pop_title">Makale 2 Başlığı</span>
            <div class="meta_line">
              <span class="category tech">Tech</span>
              <span class="author">by John Doe</span>
            </div>
          </a>
        </li>
        <li>
          <a href="article_3.html" class="pop_article">
            <span class="pop_title">Makale 3 Başlığı</span>
            <div class="meta_line">
              <span class="category science">Science</span>
              <span class="author">by Elif Yılmaz</span>
            </div>
          </a>
        </li>
      </ul>
    `;
  }
  
  function loadRecent() {
    recent_btn.classList.add('active');
    popular_btn.classList.remove('active');
    pop_div_area.innerHTML = `
      <h3>En Son Yüklenen Makaleler</h3>
      <ul class="pop_article_list">
        <li>
          <a href="article_4.html" class="pop_article">
            <span class="pop_title">Makale 4 Başlığı</span>
            <div class="meta_line">
              <span class="category ai">AI</span>
              <span class="author">by Zeynep Kaya</span>
            </div>
          </a>
        </li>
        <li>
          <a href="article_5.html" class="pop_article">
            <span class="pop_title">Makale 5 Başlığı</span>
            <div class="meta_line">
              <span class="category tech">Tech</span>
              <span class="author">by Onur Demir</span>
            </div>
          </a>
        </li>
        <li>
          <a href="article_6.html" class="pop_article">
            <span class="pop_title">Makale 6 Başlığı</span>
            <div class="meta_line">
              <span class="category science">Science</span>
              <span class="author">by Elif Yılmaz</span>
            </div>
          </a>
        </li>
      </ul>
    `;
  }
  
  // Event listenerlar
  popular_btn.addEventListener('click', loadPopular);
  recent_btn.addEventListener('click', loadRecent);
  
  function scrollCategory(button, direction) {
    const cardsContainer = button.closest('.category_block').querySelector('.category_cards');
    const scrollAmount = 300 * direction; // her tıklamada 300px kay

    cardsContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  // Sayfa yüklendiğinde otomatik olarak "Popular"'ı göster
  window.addEventListener('DOMContentLoaded', loadPopular);

  const slider = document.getElementById('slider');
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  const totalSlides = 4;
  
  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  
  function slideToNext() {
    index = (index + 1) % totalSlides;
    updateSlider();
  }
  
  setInterval(slideToNext, 20000);
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      index = parseInt(dot.getAttribute('data-index'));
      updateSlider();
    });
  });
  
  const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');

leftArrow.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

rightArrow.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

function scrollCategory(button, direction) {
  const categoryBlock = button.closest('.category_block');
  const cardContainer = categoryBlock.querySelector('.category_cards');
  const cardWidth = cardContainer.querySelector('.category_card').offsetWidth + 20; // 20: gap
  cardContainer.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const parallax = document.querySelector('.parallax-image');

  function handleParallax() {
    const scrollY = window.scrollY;
    const section = parallax.parentElement;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Görüntü ekrandaysa işlem yap
    if (scrollY + window.innerHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
      const offset = (scrollY - sectionTop) * 0.3; // kayma oranı
      parallax.style.transform = `translateY(${offset}px) scale(1.1)`;
    }
  }

  window.addEventListener('scroll', handleParallax);
  handleParallax(); // sayfa yüklenirken de çalışsın
});