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
  
  popular_btn.addEventListener('click', () => {
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
  });
  
  recent_btn.addEventListener('click', () => {
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
  });