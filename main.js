const cards = Array.from(document.querySelectorAll('.book-card'));
const btns  = Array.from(document.querySelectorAll('.filter-btn'));
const empty = document.getElementById('empty');

const counts = {all:0, cbse:0, grad:0, tamil:0, neet:0};

cards.forEach(c => {
  counts.all++;
  c.dataset.cats.split(' ').forEach(cat => { 
    if(counts[cat]!==undefined) counts[cat]++; 
  });
});

Object.entries(counts).forEach(([k,v]) => {
  const el = document.getElementById('cnt-'+k);
  if(el) el.textContent = v;
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const show = filter==='all' || card.dataset.cats.split(' ').includes(filter);
      card.classList.toggle('hidden', !show);
      if(show) visible++;
    });
    empty.style.display = visible===0 ? 'block' : 'none';
  });
});
