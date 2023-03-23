const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  content.classList.toggle('open');
});
