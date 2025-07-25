const tree = document.getElementById('tree');
const input = document.getElementById('wishInput');

function getRandomPosition() {
  const x = Math.random() * 260 + 20; // stay within tree area
  const y = Math.random() * 300 + 20;
  return { x, y };
}

function addWish() {
  const text = input.value.trim();
  if (!text) return;
  
  const wish = {
    text,
    position: getRandomPosition()
  };

  createOrb(wish);
  saveWish(wish);
  input.value = '';
}

function createOrb(wish) {
  const orb = document.createElement('div');
  orb.className = 'wish-orb';
  orb.style.left = `${wish.position.x}px`;
  orb.style.top = `${wish.position.y}px`;
  orb.title = wish.text;
  orb.onclick = () => alert(`✨ Wish: ${wish.text}`);
  tree.appendChild(orb);
}

function saveWish(wish) {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  wishes.push(wish);
  localStorage.setItem('wishes', JSON.stringify(wishes));
}

function loadWishes() {
  const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
  wishes.forEach(createOrb);
}

loadWishes();
