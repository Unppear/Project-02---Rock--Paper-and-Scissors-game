const enemyOp = document.querySelectorAll('.enemy_options div');
let elementos = document.querySelectorAll('.player_options div > img');
let playerOpt = "";
let enemyOpt = "";
let validation = document.querySelector('.validation');

function val(){
   if(playerOpt === "paper"){
      if(enemyOpt === "paper"){
         validation.innerHTML = 'No one wins';
      }
      else if(enemyOpt === "rock"){
         validation.innerHTML = "You win!!!";
      }
      else if(enemyOpt === "scissors"){
         validation.innerHTML = 'Enemy wins!';
      }
   }

   if(playerOpt === "rock"){
      if(enemyOpt === "paper"){
         validation.innerHTML = 'Enemy wins!';
      }
      else if(enemyOpt === "rock"){
         validation.innerHTML = 'No one wins';
      }
      else if(enemyOpt === "scissors"){
         validation.innerHTML = 'You wins!!!';
      }
   }

   if(playerOpt === "scissors"){
      if(enemyOpt === "paper"){
         validation.innerHTML = 'You wins!!!';
      }
      else if(enemyOpt === "rock"){
         validation.innerHTML = 'Enemy wins!';
      }
      else if(enemyOpt === "scissors"){
         validation.innerHTML = 'No one wins';
      }
   }
}

let resetEnemy = ()=>{
   for(let i = 0; i < enemyOp.length; i++){
      enemyOp[i].childNodes[0].style.border = 'none';
   }
}

let enemyPlay = ()=>{
   let random = Math.floor(Math.random()*3);
   resetEnemy();
   for(let i = 0; i < enemyOp.length; i++){
      if(i === random){
         enemyOp[i].childNodes[0].style.border = '4px solid red';
         enemyOpt = enemyOp[i].childNodes[0].getAttribute('opt');
      }
   }

   val();
}
let reset = ()=>{
    for(let i = 0; i < elementos.length; i++){
       elementos[i].style.border = 'none';      
    }
   }
   
for(let i = 0; i < elementos.length; i++){
     elementos[i].addEventListener('click', (t)=>{
        reset();
        t.target.style.border = '4px solid red';
        playerOpt = t.target.getAttribute('opt');

        enemyPlay();
     })
}