var clock = parseInt(prompt("what time during the day you do so?"));

switch (clock) {
    case 8:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Wake up</h1>';
        break;
    case 9:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Wake up</h1>';
        break;
    case 10:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 11:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 12:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Lunch</h1>';
        break;
    case 13:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 14:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 15:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 16:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 17:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Go to work</h1>';
        break;
    case 18:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Gym</h1>';
        break;
    case 19:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Dinner time</h1>';
        break;
    case 20:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Watch Tv</h1>';
        break;
    case 21:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Watch Tvp</h1>';
        break;
    case 22:
        document.getElementById("output").innerHTML ='<h1  class="text-center text-success bg-dark p-3">Time to go to sleep</h1>';
        break;
    default:
        document.getElementById("output").innerHTML = '<h1  class="text-success text-center p-3 bg-dark">You should be sleeping.</h1>';  

}