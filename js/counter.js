// JavaScript Document
//window.onload = function () {
  //const downbutton = document.getElementById('down');
  //const upbutton = document.getElementById('up');
  /*const text = document.getElementById('textbox');

  downbutton.addEventListener('click', (event) => {
  if(text.value >= 1) {
    text.value--;
  }
  });

  upbutton.addEventListener('click', (event) => {
    text.value++;
  })



}()*/

window.onload = function() {

     // オブジェクトと変数の準備
     var count_disp = document.getElementById('textbox');
     var count_up_btn = document.getElementById("up");
     var count_value = 0

	 count_up_btn.onclick = function (){
          count_value += 1;
          count_disp.innerHTML = count_value;
     };

	};