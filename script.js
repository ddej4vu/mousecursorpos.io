// Fare pozisyonunu güncelleyen fonksiyon
function updateMousePosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    const positionDiv = document.getElementById('position');
    positionDiv.textContent = `X: ${x}, Y: ${y}`;
}

// Fare hareketini dinle
document.addEventListener('mousemove', updateMousePosition);
