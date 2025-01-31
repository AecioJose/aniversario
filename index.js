const messages1 = [
    "Obrigado por ser quem você é...",
    "Melhor líder que eu já tive 🎯",
    "e que poderia ter. ",
    "Pastora Káylla 📖 ",
    "obrigado pelos conselhos",
    "e pelos esporros 🤡",
    "Obrigado por tudo!",
    "o aniversário é seu, mas nós que somos abençoados pela sua VIDA♥...",
    "sou muito grato a Deus por ter VOCÊ e o BUDA em minha vida!",
    "em breve estarei ganhando muitos doláres, daqui do Brasil 🇧🇷",
    "e poderei dar presentes bons!",
    "Hoje meu presente pra você foi meu tempo.",
    "Espero que tenha gostado desse presente diferente kkkkkkk.",
    "E isso não foi gerado por I.A. kkkkkkk",
    "É NOIX tia káylla 😎",
    "TRINTOU UHUULLLLLLLL!",
    "Eu sei que ainda não, mas 2027 ta perto👀",
    "Feliz aniversário, Káyllão! 🎉"
];

const messages2 = [
    "Que a sua fome e sede pelo PAI aumente a cada dia! 🔥🔥🔥",
    "AMÉM 🙏🏻"
];


function startCycle() {
    document.getElementById("loading").style.display = "flex";
     setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        typeMessages(0);
    }, 3000);
}

function typeMessages(index) {
    if (index < messages1.length) {
        typeMessage(messages1[index], 100, () => {
            setTimeout(() => typeMessages(index + 1), 1000);
        });
    } else {
        setTimeout(startConfetti, 500);
        setTimeout(image, 700);
        setTimeout(messagetwo, 10000);
    }
}

function messagetwo(){
    typeMessage(messages2[0], 100, () => {
        setTimeout(() => {
            typeMessage(messages2[1], 100);
            setTimeout(resetCycle, 6000); 
        }, 2000);
    });
}

function resetCycle() {
    // Ocultar imagem, limpar mensagem e resetar opacidade
    document.getElementById("img").style.opacity = 0;
    document.getElementById("message").style.display = "none";
    startCycle();
}

function typeMessage(text, speed, callback) {
    let i = 0;
    let messageElement = document.getElementById("message");
    messageElement.style.display = "block";
    messageElement.innerHTML = "";
    function type() {
        if (i < text.length) {
            messageElement.innerHTML = text.slice(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(type, speed);
        } else {
            messageElement.innerHTML = text;
            setTimeout(callback, 1000);
        }
    }
    type();
}

function startConfetti() {
    var duration = 5 * 1000;
    var end = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 100,
            startVelocity: 15,
            origin: { x: Math.random(), y: -0.1 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 100,
            startVelocity: 15,
            origin: { x: Math.random(), y: -0.1 }
        });

        confetti({
            particleCount: 7,
            angle: 60,
            spread: 100,
            startVelocity: 20,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 100,
            startVelocity: 20,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function image(){
    const imagem = document.getElementById("img");
    
    let opacity = 0; 

    function aumentarOpacidade() {
        if (opacity < 1) {
            opacity += 0.01;
            imagem.style.opacity = opacity;
            requestAnimationFrame(aumentarOpacidade); 
        }
    }

    aumentarOpacidade();
}

// Começar o ciclo quando a página carregar
window.onload = startCycle;
