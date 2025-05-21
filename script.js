// Script para a aplicação de revelação do bebê
document.addEventListener('DOMContentLoaded', function() {
    // Elementos das telas
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const correctScreen = document.getElementById('correct-screen');
    const incorrectScreen = document.getElementById('incorrect-screen');
    
    // Botões de navegação
    const startButton = document.getElementById('start-button');
    const boyOption = document.getElementById('boy-option');
    const girlOption = document.getElementById('girl-option');
    const shareButton = document.getElementById('share-button');
    const shareButtonIncorrect = document.getElementById('share-button-incorrect');
    
    // Adicionar eventos aos botões
    startButton.addEventListener('click', function() {
        welcomeScreen.classList.remove('active');
        questionScreen.classList.add('active');
        
        // Adicionar animação de entrada
        questionScreen.style.animation = 'fadeIn 0.8s ease-in-out';
    });
    
    // Opção menino (resposta incorreta)
    boyOption.addEventListener('click', function() {
        questionScreen.classList.remove('active');
        incorrectScreen.classList.add('active');
        
        // Adicionar animação de revelação
        setTimeout(function() {
            document.querySelector('#incorrect-screen .reveal-text').style.animation = 'fadeIn 1.5s ease-in-out';
        }, 500);
        
        // Adicionar confetes para a revelação
        createConfetti();
    });
    
    // Opção menina (resposta correta)
    girlOption.addEventListener('click', function() {
        questionScreen.classList.remove('active');
        correctScreen.classList.add('active');
        
        // Adicionar animação de revelação
        setTimeout(function() {
            document.querySelector('#correct-screen .reveal-text').style.animation = 'fadeIn 1.5s ease-in-out';
        }, 500);
        
        // Adicionar confetes para a revelação
        createConfetti();
    });
    
    // Compartilhar (ambas as telas)
    shareButton.addEventListener('click', shareResult);
    shareButtonIncorrect.addEventListener('click', shareResult);
    
    // Função para compartilhar o resultado
    function shareResult() {
        if (navigator.share) {
            navigator.share({
                title: 'Revelação do Bebê',
                text: 'É uma menina! Vamos dar as boas-vindas à pequena Manuella! 👶🎀',
                url: window.location.href
            })
            .catch(error => console.log('Erro ao compartilhar:', error));
        } else {
            alert('Compartilhe esta notícia especial: É uma menina! Vamos dar as boas-vindas à pequena Manuella! 👶🎀');
        }
    }
    
    // Função para criar confetes na tela
    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Cores em tons de rosa para menina
            const colors = ['#ff6b8b', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffe5ec'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            confetti.style.backgroundColor = randomColor;
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.opacity = Math.random();
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            document.body.appendChild(confetti);
            
            // Remover confetes após a animação
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Adicionar estilos CSS para os confetes
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: #ff6b8b;
            top: -10px;
            z-index: 1000;
            animation: fall linear forwards;
        }
        
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar efeito de hover nas imagens
    const images = document.querySelectorAll('.parents-image, .ultrasound-image');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
