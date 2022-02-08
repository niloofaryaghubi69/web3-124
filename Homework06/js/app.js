var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var image = ["♠","♣","♥","♦"];
var game =[];


var $player1 = document.getElementById('player1');
var $player2 = document.getElementById('player2');
var $player3 = document.getElementById('player3');
var $output1 = document.getElementById('output1');
var $output2 = document.getElementById('output2');
var $output3 = document.getElementById('output3');
var $output4 = document.getElementById('output4');

function card (){
    for (var i=0 ; i < image.length ; i++ ){
        for (var j=0 ; j < numbers.length ; j++)
         game.push(numbers[j] + image[i]);
    }
    return game ;
};

function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

$player1.onclick = function() {
    game =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    game = shuffle (card ());
    $output1.innerHTML = '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' +game[1] + '</p>' + '</div>';
    $output2.innerHTML = '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
};

$player2.onclick = function() {
    game =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    game = shuffle (card());
    $output1.innerHTML =  '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[1] + '</p>' + '</div>';
    $output2.innerHTML =  '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
    $output3.innerHTML =  '<h3 class="text-center">PLAYER 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[4] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[5] + '</p>' + '</div>';
};

$player3.onclick = function() {
    game =[];
    $output1.innerHTML = '';
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output4.innerHTML = '';

    game = shuffle (card());
    $output1.innerHTML = '<h3 class="text-center">PLAYER 1</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[0] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[1] + '</p>' + '</div>';
    $output2.innerHTML = '<h3 class="text-center">PLAYER 2</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[2] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[3] + '</p>' + '</div>';
    $output3.innerHTML = '<h3 class="text-center">PLAYER 3</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[4] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[5] + '</p>' + '</div>';
    $output4.innerHTML = '<h3 class="text-center">PLAYER 4</h3>' + '<div class="d-flex justify-content-center">' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[6] + '</p>' + '<p class="display-4 bg-white rounded py-5 m-1 text-center">' + game[7] + '</p>' + '</div>';
};


