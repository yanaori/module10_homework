const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const width = window.screen.width;
  const height = window.screen.height;

  alert(`Размер экрана: ${width} x ${height}`);
});