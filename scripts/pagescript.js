var d = new Date();
var time = 0;

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

var goButton = document.getElementById("go");

goButton.onclick = function open(){
    var count = document.getElementById("uncode").value;
    count = parseInt(count);

    switch(count){
        case 1:
            document.getElementById("one").style.opacity = 0;
            break;

        case 2:
            document.getElementById("two").style.opacity = 0;
            break;

        case 3:
            document.getElementById("three").style.opacity = 0;
            break;

        case 4:
            document.getElementById("four").style.opacity = 0;
            break;

        case 5:
            document.getElementById("five").style.opacity = 0;
            break;

        case 6:
            document.getElementById("six").style.opacity = 0;
            break;

        case 7:
            document.getElementById("seven").style.opacity = 0;
            break;

        case 8:
            document.getElementById("eight").style.opacity = 0;
            break;

        case 9:
            document.getElementById("nine").style.opacity = 0;
            break;
    }

    document.getElementById("uncode").value = "";
}

$(document).keydown(function(event){
if(event.keyCode == 123){
    return false;
}
else if (event.ctrlKey && event.shiftKey && event.keyCode == 73){        
    return false;
}
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});