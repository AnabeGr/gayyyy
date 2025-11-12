// script.js

const btnNo = document.getElementById('no');
const btnYes = document.getElementById('yes');
const card = document.getElementById('card');
const answerDiv = document.getElementById('answer');
const questionDiv = document.getElementById('question');
const body = document.body;

// ---------------- FUNÇÃO PARA BOTÃO "NÃO" ----------------
// Torna o botão "Não" irritante, mudando de posição aleatoriamente
btnNo.addEventListener('mouseover', () => {
    // Garante que o botão "Não" só se move se a resposta ainda não foi dada
    if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
        const x = Math.random() * (card.clientWidth - btnNo.clientWidth) * 0.8;
        const y = Math.random() * (card.clientHeight - btnNo.clientHeight) * 0.8;
        
        btnNo.style.position = 'absolute';
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    }
});

// Reseta a posição do botão quando o mouse sai para garantir que ele não suma
btnNo.addEventListener('mouseout', () => {
    btnNo.style.position = 'static';
});

// ---------------- FUNÇÃO PARA BOTÃO "SIM" ----------------
// Exibe a resposta final
btnYes.addEventListener('click', () => {
    questionDiv.style.display = 'none';
    answerDiv.style.display = 'block';
});

// ---------------- FUNÇÃO PARA CORAÇÕES FLUTUANTES ----------------
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    
    // Posição inicial (largura aleatória no topo)
    heart.style.left = `${Math.random() * 100}vw`;
    
    // Adiciona uma duração de animação aleatória para variar a velocidade
    heart.style.animationDuration = `${Math.random() * 8 + 6}s`; 
    
    body.appendChild(heart);
    
    // Remove o coração após a animação para limpar o DOM
    setTimeout(() => {
        heart.remove();
    }, 15000); 
}

// Cria um novo coração a cada 300ms
setInterval(createHeart, 300);
