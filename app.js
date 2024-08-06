function random() {
    const random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random").innerText = random;
}
