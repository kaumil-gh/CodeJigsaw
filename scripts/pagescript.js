var d = new Date();
var time = 0;
var ip = "0.0.0.0";

$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        ip = (data.ip);
        var ipArr = ip.split(".");
        selectRandomImage(ipArr[3])
    });
});

function beginTime(){
    time = d.getTime();
    console.log(time);
}

function stopTime(){
    var d = new Date();
    var time2 = d.getTime();
    console.log(time2);
    var timeTaken = time2 - time;
    var answer = window.prompt("Who do you think this is?");
    console.log(answer);
}

function selectRandomImage(a) {
    var num = parseInt(a);
    num = num % 10;
    
    switch(num){
        case 1:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
            
        case 2:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
        
        case 3:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
            
        case 4:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
        
        case 5:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
            
        case 7:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
        
        case 8:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
            
        case 9:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
            
        case 0:
            document.getElementById("hero-image").src = "../CodeJigsaw/images/img1.png";
            break;
    }
}

var goButton = document.getElementById("go");

goButton.onclick = function open(){
    var unlockCode = document.getElementById("uncode").value;

    switch(unlockCode){
        case "Hardik":
            document.getElementById("one").style.opacity = 0;
            break;

        case "Samkit":
            document.getElementById("two").style.opacity = 0;
            break;

        case "Darshan":
            document.getElementById("three").style.opacity = 0;
            break;

        case "Pratik":
            document.getElementById("four").style.opacity = 0;
            break;

        case "Sanjay":
            document.getElementById("five").style.opacity = 0;
            break;

        case "Dhruvin":
            document.getElementById("six").style.opacity = 0;
            break;

        case "Kaumil":
            document.getElementById("seven").style.opacity = 0;
            break;

        case "Poojan":
            document.getElementById("eight").style.opacity = 0;
            break;

        case "Shivam":
            document.getElementById("nine").style.opacity = 0;
            break;
    }

    document.getElementById("uncode").value = "";
}

/*$(document).keydown(function(event){
if(event.keyCode == 123){
    return false;
}
else if (event.ctrlKey && event.shiftKey && event.keyCode == 73){        
    return false;
}
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});*/
