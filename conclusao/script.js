document.addEventListener('DOMContentLoaded', function() {
    const wavePath = document.getElementById('wavePath');
    const somCachoeira = document.getElementById('somCachoeira');
    
    const audioControl = document.createElement('button');
    audioControl.id = 'audio-control';
    audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
    document.body.appendChild(audioControl);

    let isPlaying = false;
    
    somCachoeira.volume = 0.6;
    somCachoeira.play().catch(error => {
        console.log("Reprodução automática bloqueada. Use o controle de áudio.");
        audioControl.style.display = 'block';
    });
    
    audioControl.addEventListener('click', function() {
        if (isPlaying) {
            somCachoeira.pause();
            audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
            isPlaying = false;
        } else {
            somCachoeira.play();
            audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
            isPlaying = true;
        }
    });
    
    let offset = 0;
    const speed = 0.05; 

    function animateWave() {
        offset += speed;
        
        const d = `M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,138.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`;
        
        const waveElement = document.querySelector('.wave');
        waveElement.style.transform = `translateX(-${offset % 100}%)`;

        requestAnimationFrame(animateWave);
    }

    animateWave();
});