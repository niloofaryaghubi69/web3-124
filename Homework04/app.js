var count = Math.floor(Math.random() * 3);
var output = document.getElementById('output');
var round = 0;
var you = 0;
var equal = 0;
var computer = 0;



function rock () {
  answer = 0;
  count = Math.floor(Math.random() * 3);
  round ++;

  document.getElementById('round').innerHTML ='ROUND'+ round;
  if (count == 0) {
      output.innerHTML = '<i class="las la-fist-raised la-8x "></i><i class="las la-fist-raised la-8x "></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-info">EQUAL</h2>';
      equal ++;
  } else if (count == 1) {
      output.innerHTML = '<i class="las la-fist-raised la-8x "></i> <i class="las la-hand-paper la-8x"></i>';
      document.getElementById('try').innerHTML ='<h2 class="text-center text-danger">YOU LOSE</h2>';
      computer ++;
  } else{
      output.innerHTML = '<i class="las la-fist-raised la-8x "></i><i class="las la-hand-scissors la-8x"></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WIN</h2>';
      you ++;
  }
  document.getElementById('you').innerHTML ='You' + you;
  document.getElementById('equal').innerHTML ='EQUAL' + equal;
  document.getElementById('computer').innerHTML ='COMPUTER' + computer;
}
function paper () {
  answer = 1;
  count = Math.floor(Math.random() * 3);
  round ++;

  document.getElementById('round').innerHTML ='ROUND' + round;
  if (count == 0) {
      output.innerHTML = '<i class="las la-hand-paper la-8x"></i><i class="las la-fist-raised la-8x "></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WIN</h2>';
      you ++;
  }  else if (count == 1) {
      output.innerHTML = '<i class="las la-hand-paper la-8x"></i> <i class="las la-hand-paper la-8x"></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-info">EQUAL</h2>';
      equal ++;
  }  else {
      output.innerHTML = '<i class="las la-hand-paper la-8x"></i><i class="las la-hand-scissors la-8x"></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-danger">YOU LOSE</h2>';
      computer ++;
  }
  document.getElementById('you').innerHTML ='You' + you;
  document.getElementById('equal').innerHTML ='EQUAL' + equal;
  document.getElementById('computer').innerHTML ='COMPUTER' + computer;
}
function scissors () {
  answer = 2;
  count = Math.floor(Math.random() * 3);
  round ++;

  document.getElementById('round').innerHTML ='ROUND' + round;
  if (count == 0) {
      output.innerHTML = '<i class="las la-hand-scissors la-8x"></i><i class="las la-fist-raised la-8x "></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-danger">YOU LOSE</h2>';
      computer ++;
  }  else if (count == 1) {
      output.innerHTML = '<i class="las la-hand-scissors la-8x"></i> <i class="las la-hand-paper la-8x"></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WIN</h2>';
      you ++;
  }  else {
      output.innerHTML = '<i class="las la-hand-scissors la-8x"></i><i class="las la-hand-scissors la-8x"></i>';
      document.getElementById('try').innerHTML = '<h2 class="text-center text-info">EQUAL</h2>';
      equal ++;
  }
  document.getElementById('you').innerHTML ='You' + you;
  document.getElementById('equal').innerHTML ='EQUAL' + equal;
  document.getElementById('computer').innerHTML ='COMPUTER' + computer;
}


  