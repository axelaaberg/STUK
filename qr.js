function initQR(){
    const qrBtn = document.querySelector('.icon-btn[aria-label="QR"]');
    const overlay = document.getElementById('qr-overlay');
    const qrCode = overlay && overlay.querySelector('.qr-code-container');

    if(!qrBtn || !overlay) return;

    function showQrCode(){
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden','false');
        if(qrCode) qrCode.focus();
    }

    function hideQrCode(){
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden','true');
    }

    qrBtn.addEventListener('click', function(e){
        e.stopPropagation();
        showQrCode();
    });

    overlay.addEventListener('click', function(e){
        if(e.target === overlay) hideQrCode();
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && overlay.classList.contains('open')) hideQrCode();
    });
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initQR);

} else {
    initQR();
}


