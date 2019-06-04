let rings = document.querySelector('.rings');

let obj = {
  funky: false,
  background: true,
  boxShadow: true,
  outline: true,
  border: true,
  pauseAnimation: false,
};

const gui = new dat.GUI();

gui.add(obj, 'funky')
  .onChange( _ => rings.classList.toggle('funky'));
gui.add(obj, 'background')
  .onChange( _ => rings.classList.toggle('off-background'));
gui.add(obj, 'boxShadow')
  .onChange( _ => rings.classList.toggle('off-box-shadow'));
gui.add(obj, 'outline')
  .onChange( _ => rings.classList.toggle('off-outline'));
gui.add(obj, 'border')
  .onChange( _ => rings.classList.toggle('off-border'));
gui.add(obj, 'pauseAnimation')
  .onChange( _ => rings.classList.toggle('animation-pause'));
