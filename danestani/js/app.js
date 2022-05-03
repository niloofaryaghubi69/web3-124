const apiKey = "602778:626eac02d05ee3.77386967";

const dogme= document.getElementById("dogme");
const content = document.getElementById('content')

dogme.addEventListener('click' , getResult)
dogme.addEventListener('click' , function(){
        content.classList.add('bgcolor')
})

function getResult(){
    loadJSON("GET", `https://one-api.ir/danestani/?token=${apiKey}` , displayResult)
}

function loadJSON(method , url , callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method , url);
    xhr.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4){
            callback(JSON.parse(this.response));
        }
    }
    xhr.send();
}

function displayResult(response) {
    console.log(response)
    content.innerHTML = `${response.result.Content}`;
    
}