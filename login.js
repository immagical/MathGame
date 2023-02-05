function addUser() {
    player1 = document.getElementById("player1input").value; 
    player2 = document.getElementById("player2input").value; 
    localStorage.setItem("player1", player1)
    localStorage.setItem("player2", player2)
    window.location = "game.html"; 
}