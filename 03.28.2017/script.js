var form = document.getElementById('form');
var span = document.getElementById('span');
var message = document.getElementById('message');
var name =  document.getElementById('name');
var surname =  document.getElementById('surname');
var answer = document.getElementById('answer');
var btn  = document.getElementById('btn');
var isare = ['*','+','-','/'];
var index = Math.floor(Math.random() * 4);
var birinci_reqem =  Math.floor(Math.random() * 10)+1;
var ikinci_reqem =  Math.floor(Math.random() * 10)+1;
console.log(birinci_reqem +' '+ ikinci_reqem);
span.innerText = birinci_reqem + isare[index] + ikinci_reqem + "="

var result = 0;
if(isare[index] == "+"){
  result = birinci_reqem + ikinci_reqem;
}else if(isare[index] == "-"){
  result = birinci_reqem + ikinci_reqem;
}else{
  result = birinci_reqem + ikinci_reqem;
}
console.log(result);
form.addEventListener('submit', function(event){
  event.prevenrDefault();
  if(name.value != "" && surname.value != ""){
      if(answer.value != ""){
          if(parseInt(answer.value) == result){
              message.innerText = "Congrad"
          }
          else{
            message.innerText = "Cavab duz deyil"
          }
      }else{
        message.innerText = "Riyazi hesablamni yaz!"
      }
  }else{
    message.innerText = "Bos olmasin!"
  }
});
