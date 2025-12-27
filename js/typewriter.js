const text ="WiB - Web isaiev Balance. Take your balance";
const speed = 100;
let index = 0;

function typewriter(){
    if (index < text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typewriter, speed);
    }
}

typewriter();