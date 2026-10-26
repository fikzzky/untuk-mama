const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const typing = document.getElementById("typing");
const particles = document.getElementById("particles");

const letter = `Mimi...

Terima kasih karena sudah selalu ada untukku.

Mungkin aku belum menjadi anak yang sempurna.
Kadang aku masih sering membuat Mimi lelah, khawatir, bahkan kecewa.

Maaf ya, Mi.

Terima kasih karena tetap sabar menghadapi aku.

Terima kasih karena selalu berusaha memberikan yang terbaik.

Aku ingin suatu hari nanti bisa membuat Mimi bangga.

Aku ingin membalas semua kebaikan yang sudah Mimi berikan.

Semoga Allah selalu menjaga kesehatan Mimi.

Semoga umur Mimi penuh keberkahan.

Semoga rezeki Mimi selalu dilancarkan.

Semoga setiap doa Mimi dikabulkan.

Aku sayang Mimi.

🤍

— Dari Dude ❤️`;

let index = 0;
let typingSpeed = 35;

function typeWriter(){
    if(index < letter.length){
        typing.innerHTML += letter.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

openBtn.addEventListener("click",()=>{

    envelope.style.display="none";

    paper.style.display="block";

    typing.innerHTML="";
    index=0;

    typeWriter();

});

closeBtn.addEventListener("click",()=>{

    paper.style.display="none";

    envelope.style.display="block";

});

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    p.innerHTML=Math.random()>0.5?"❤️":"🌸";

    p.style.left=Math.random()*100+"vw";

    p.style.fontSize=(18+Math.random()*18)+"px";

    p.style.animationDuration=(6+Math.random()*5)+"s";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },11000);

}

setInterval(createParticle,450);
