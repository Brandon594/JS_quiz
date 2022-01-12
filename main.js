//function to check quiz score
function check(){
    var score=0
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    if (q1 == "correct"){score++}
    if (q2 == "correct"){score++}
    if (q3 == "correct"){score++}
    if (q4 == "correct"){score++}
    if (q5 == "correct"){score++}
    if (q6 == "correct"){score++}
    if (q7 == "correct"){score++}
    if (q8 == "correct"){score++}
    if (q9 == "correct"){score++}
    if (q10 == "correct"){score++}
    document.write("Your score is:",score,"/10");
//color items(same function)
    if (q1 == "correct"){document.write('<p color="green">What is the capital of Turkey?</p>')}
    else{document.write('<p color="red">What is the capital of Turkey?</p>')}
    
    if (q2 == "correct"){document.write('<p color="green">What is the largest country on Earth?"</p>')}
    else{document.write('<p color="red">' + "What is the largest country on Earth?" + '</p>')}
    
    if (q3 == "correct"){document.write('<p color="green">In 1991, the USSR dissolved into how many countries?</p>')}
    else{document.write('<p color="red">In 1991, the USSR dissolved into how many countries?</p>')}
    
    if (q4 == "correct"){document.write('<p color="green"> Which of these countries does not have nuclear weapons?</p>')}
    else{document.write('<p color="red"> Which of these countries does not have nuclear weapons?</p>')}
    
    if (q5 == "correct"){document.write('<p color="green">Greece shares a border with which of the following countries:</p>')}
    else{document.write('<p color="red">Greece shares a border with which of the following countries:</p>')}
    
    if (q6 == "correct"){document.write('<p color="green">The Byzantine Empire occupied most of which region?</p>')}
    else{document.write('<p color="red">The Byzantine Empire occupied most of which region?</p>')}
    
    if (q7 == "correct"){document.write('<p color="green">What is the capital of Armenia:</p>')}
    else{document.write('<p color="red">What is the capital of Armenia:</p>')}
    
    if (q8 == "correct"){document.write('<p color="green">Which of the following is not a Caucasian country?</p>')}
    else{document.write('<p color="red">Which of the following is not a Caucasian country?</p>')}
    
    if (q9 == "correct"){document.write('<p color="green">The United States has never fought a war in which of the following countries:</p>')}
    else{document.write('<p color="red">The United States has never fought a war in which of the following countries:</p>')}
    
    if (q10 == "correct"){document.write('<p color="green">This region of south-east Europe is known for its terrrible and often-contested borders:</p>')}
    else{document.write('<p color="red">This region of south-east Europe is known for its terrrible and often-contested borders:</p>')}
}