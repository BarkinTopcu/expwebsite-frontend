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
  