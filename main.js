// WORKSカードクリック時、対応するdetailsを開いてスクロール
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    const targetId = card.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    target.open = true;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
