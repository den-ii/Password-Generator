const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

btn1 = document.getElementById('one');
btn2 = document.getElementById('two');
major_btn = document.getElementById('major');

major_btn.addEventListener('click', function() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < 15; i++) {
    let num = Math.floor(Math.random() *     
   characters.length);
    password1 += characters[num];
  }
  btn1.textContent = password1;
  
  for (let i = 0; i < 15; i++) {
    let num = Math.floor(Math.random() * characters.length);
    password2 += characters[num];
  }
  btn2.textContent = password2;
})
btn1.addEventListener('click', copy);
btn2.addEventListener('click', copy);

let body = document.querySelector('body');
let copyEl = document.getElementById('copied');
//body.addEventListener('click', function() {
  //copyEl.style.display = 'none';
  
//})
function copy() {
  let content = this.textContent;
  navigator.clipboard.writeText(content);
  copyEl.style.display = 'block';
}