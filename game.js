 player1  = localStorage.getItem("player1"); 
 player2  = localStorage.getItem("player2"); 
 player1score = 0; 
 player2score = 0;
 console.log(player1 + player2)
 document.getElementById("player1name").innerHTML = player1 + " : ";
 document.getElementById("player2name").innerHTML = player2 + " : ";
 document.getElementById("player1score").innerHTML = player1score;
 document.getElementById("player2score").innerHTML = player2score;
 document.getElementById("questionturn").innerHTML = "Question turn : " + player1;
 document.getElementById("answerturn").innerHTML = "Answer turn : " + player2;
 questionturn = "player1"; 
 answerturn = "player2"; 

 function send() {
    number1 = document.getElementById("number1input").value; 
    number2 = document.getElementById("number2input").value; 
    actualanswer = parseInt(number1) * parseInt(number2); 
    question = ' <h4 id = "question">'+ number1 + " * " + number2+' </h4>'
    input = '<br><h4 id = "answerlabel"> Answer: </h4><input id = "answerinput" class = "form-control" type = "number"></h4>'
    checkrow = '<button class = "btn btn-warning" id = "checkbtn" onclick = "check()"> Check </button>'
    row = question + input + checkrow; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("number1input").value = ""; 
    document.getElementById("number2input").value = "";  

 }

 function check() {
   getanswer = document.getElementById("answerinput").value; 
   if(getanswer == actualanswer) {
      if(answerturn == "player1") {
         player1score = player1score + 1; 
         document.getElementById("player1score").innerHTML = player1score;
      }
      else{
         player2score = player2score + 1; 
         document.getElementById("player2score").innerHTML = player2score; 
      }
   }
   if(questionturn=="player1") {
      questionturn = "player2"
      document.getElementById("questionturn").innerHTML = "Question turn : " + player2;
   }
   else{
      questionturn = "player1"
      document.getElementById("questionturn").innerHTML = "Question turn : " + player1;
   }
   if(answerturn=="player1") {
      answerturn = "player2"
      document.getElementById("answerturn").innerHTML = "Answer turn : " + player2;
   }
   else{
      answerturn = "player1"
      document.getElementById("answerturn").innerHTML = "Answer turn : " + player1;
   }
   document.getElementById("output").innerHTML = ""; 
 }
