const keyboard = document.getElementById('keyboard');
const lastKey = document.getElementById('last-key');

const keys = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  'Backspace', 'Enter', 'Space'
];


keys.forEach(key => {
  const keyEl = document.createElement('div');
  keyEl.classList.add('key');
  

  keyEl.textContent = key === 'Space' ? 'SPACE' : key;
  keyEl.dataset.key = key.toLowerCase();
  
  keyboard.appendChild(keyEl);
});


function getTargetKey(e) {
  let keyName = e.key.toLowerCase();
  
  if (e.key === ' ') keyName = 'space';
  if (e.key === 'Enter') keyName = 'enter';
  if (e.key === 'Backspace') keyName = 'backspace';
  
  return document.querySelector(`.key[data-key="${keyName}"]`);
}


document.addEventListener('keydown', (e) => {
  const activeKey = getTargetKey(e);
  
  if (activeKey) {
    activeKey.classList.add('pressed');
    lastKey.textContent = e.key === ' ' ? 'SPACE' : e.key.toUpperCase();
  }
});

document.addEventListener('keyup', (e) => {
  const activeKey = getTargetKey(e);
  
  if (activeKey) {
    activeKey.classList.remove('pressed');
  }
});
