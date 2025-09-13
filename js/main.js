let red = 0, green = 0, blue = 0;
let adjust, rgb;

document.querySelector('#red').addEventListener('click', () => colorChanger('red', 15));
document.querySelector('#green').addEventListener('click', () => colorChanger('green', 15));
document.querySelector('#blue').addEventListener('click', () => colorChanger('blue', 15));

document.querySelector('#mred').addEventListener('click', () => colorChanger('red', -15));
document.querySelector('#mgreen').addEventListener('click', () => colorChanger('green', -15));
document.querySelector('#mblue').addEventListener('click', () => colorChanger('blue', -15));

document.querySelector('#random').addEventListener('click', random);
document.querySelector('#reset').addEventListener('click', reset);


 
function colorChanger(color, adjust) {
   let number = 0;

   if (color == 'red')
      number = red += adjust;
   else if (color == 'green')
      number = green += adjust;
   else if (color == 'blue')
      number = blue += adjust;

   rgb = `rgba(${red},${green},${blue})`;
  


   document.querySelector(`#${color}_result`).innerText = number;
   document.querySelector('#color_box').style.backgroundColor = rgb;
   document.querySelector('#title').style.color = rgb;
}

function reset() {
   red = 0
   green = 0
   blue = 0
   rgb = `rgba(${red},${green},${blue})`;

   document.querySelector('#red_result').innerText = red
   document.querySelector('#blue_result').innerText = blue
   document.querySelector('#green_result').innerText = green
   document.querySelector('#color_box').style.backgroundColor = rgb
   document.querySelector('#title').style.color = rgb

}

function random() {
   red = Math.floor(Math.random() * 256)
   green = Math.floor(Math.random() * 256)
   blue = Math.floor(Math.random() * 256);
   rgb = `rgba(${red},${green},${blue})`;

 document.querySelector('#red_result').innerText = red
   document.querySelector('#blue_result').innerText = blue
   document.querySelector('#green_result').innerText = green
   document.querySelector('#color_box').style.backgroundColor = rgb
   document.querySelector('#title').style.color = rgb

}
