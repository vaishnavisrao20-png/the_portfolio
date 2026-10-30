// Project cards: tags + screenshot preview that follows the cursor and cycles while hovering
document.querySelectorAll('.card').forEach(card => {
  const shots = card.dataset.shots.split(',');
  const tags = card.dataset.tags.split('|');
  const img = card.querySelector('.preview img');
  const prev = card.querySelector('.preview');
  card.querySelector('.tag-wrap').innerHTML = tags.map(t => `<b>${t}</b>`).join('');
  let i = 0, timer;
  const show = () => { img.src = shots[i % shots.length]; i++; };
  card.addEventListener('mouseenter', () => { i = 0; show(); timer = setInterval(show, 1100); });
  card.addEventListener('mouseleave', () => clearInterval(timer));
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    prev.style.left = (e.clientX - r.left) + 'px';
    prev.style.top = (e.clientY - r.top) + 'px';
  });
});
