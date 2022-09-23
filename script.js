let expression ='';
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText == '='){
            expression=eval(expression);
            document.querySelector('input').value = expression;
        }else if(e.target.innerText == 'AC'){
            expression=" ";
            document.querySelector('input').value = expression;
        }else if(e.target.innerText == '+/-'){
            expression=parseInt(expression)*-1;
            document.querySelector('input').value = expression;
        }
        else{
            expression=expression+e.target.innerText;
            document.querySelector('input').value = expression;
        }
    })
})