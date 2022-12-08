var questions = [
    {
        "question" : "What does XML stand for?",
        "option_1" : "O1: Extensible Markup Language",
        "option_2" : "O2: Excess Markup Language",
        "option_3" : "O3: Extensible Machine Language",
        "option_4" : "O4: Extensible Machine Line",
        "answer" : "O1: Extensible Markup Language"
    },
    {
        "question" : "Most important reason for using XML instead of HTML?",
        "option_1" : "O1: Lower level language and faster compile time",
        "option_2" : "O2: Simpler language syntax",
        "option_3" : "O3: Reusability of the code",
        "option_4" : "O4: More established in the industry",
        "answer" : "O3: Reusability of the code"
    },
    {
        "question" : "Best way to apply styling to XML elements?",
        "option_1" : "O1: XSD",
        "option_2" : "O2: XSL",
        "option_3" : "O3: In-line styling",
        "option_4" : "O4: Javascript",
        "answer" : "O2: XSL"
      },
    {
        "question" : "What is Ajax?",
        "option_1" : "O1: Ajax  is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications.",
        "option_2" : "O2: Ajax  is a set of frameworks that uses various web technologies on the client-side to create asynchronous web applications.",
        "option_3" : "O3: Ajax  is a set of development techniques that uses various web technologies on the server-side to create synchronous mobile applications.",
        "option_4" : "O4: Ajax  is a set of programming languages that uses various web technologies on the client-side to create asynchronous web applications.",
        "answer" : "O1: Ajax  is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications."
      },
    {
        "question" : "What is Https Request?",
        "option_1" : "O1: XMLHttpRequest is used to request data from a web server",
        "option_2" : "O2: Https request helps with connecting to another file locally",
        "option_3" : "O3: Https request is a function that creates a buffer between files",
        "option_4" : "O4: XMLHttpsRequest creates a XML request for a css style file",
        "answer" : "O1: XMLHttpRequest is used to request data from a web server"
    },
    {
        "question" : "What does setRequestHeader() do?",
        "option_1" : "O1: Header is requested",
        "option_2" : "O2: checks if HTML header has changed",
        "option_3" : "O3: Adds a label/value pair to the footer to be sent",
        "option_4" : "O4: Adds a label/value pair to the header to be sent",
        "answer" : "O4: Adds a label/value pair to the header to be sent"
    },

];

const grade = [];
let score = 0;
let i = 0;
let string = "";

load_questions(0);

function sum(n){
    let sum = 0;
    for(let k = 0; k < n.length; k++){
        sum += n[k];
    }
    return sum;
}

// loads the new questions
function load_questions(j) {

    document.getElementById("question").innerHTML = questions[j].question;

    document.getElementById("o1").innerHTML = questions[j].option_1;

    document.getElementById("o2").innerHTML = questions[j].option_2;
    
    document.getElementById("o3").innerHTML = questions[j].option_3;

    document.getElementById("o4").innerHTML = questions[j].option_4;

    if(j + 1 == questions.length){
        document.getElementById("next_button").innerHTML = "finish";
    }
    
}

function check_next(next) {

    // if the user has pressed the back button
    if(!next){
        if (i + 1 == questions.length){
            document.getElementById("next_button").innerHTML = "next";
        }
        i--;
        load_questions(i);
        return;
    }

    // checking the answers
    if (document.getElementById("option_1").checked && questions[i].option_1 == questions[i].answer) {
       grade[i] = 1;
    }
    else if (document.getElementById("option_2").checked && questions[i].option_2 == questions[i].answer) {
        grade[i] = 1;
    }
    else if(document.getElementById("option_3").checked && questions[i].option_3 == questions[i].answer) {
        grade[i] = 1;
    }
    else if (document.getElementById("option_4").checked && questions[i].option_4 == questions[i].answer) {
        grade[i] = 1;
    }
    else {
        grade[i] = 0;
    }
    

    i++;
    
    // quiz finished
    if(questions.length - 1 < i){

        score = sum(grade);

        string = "Your grade is "+ score + " out of " + questions.length;

		document.getElementById('finish').innerHTML = string;

        document.getElementById('question_1').innerHTML= "Question 1: " + questions[0].question;
        document.getElementById('answer_1').innerHTML= "Answer 1: "+ questions[0].answer;

        document.getElementById('question_2').innerHTML= "Question 2: " + questions[1].question;
        document.getElementById('answer_2').innerHTML= "Answer 2: "+ questions[1].answer;
        
        document.getElementById('question_3').innerHTML= "Question 3: " + questions[2].question;
        document.getElementById('answer_3').innerHTML= "Answer 3: "+ questions[2].answer;

        document.getElementById('question_4').innerHTML="Question 4: " + questions[3].question;
        document.getElementById('answer_4').innerHTML="Answer 4: "+ questions[3].answer;
               
        document.getElementById('question_5').innerHTML="Question 5: " + questions[4].question;
        document.getElementById('answer_5').innerHTML="Answer 5: "+ questions[4].answer;

        document.getElementById('question_6').innerHTML="Question 6: " + questions[5].question;
        document.getElementById('answer_6').innerHTML="Answer 6: "+ questions[5].answer;

        document.getElementById("back_button").remove();
        document.getElementById("next_button").remove();
    }
    
    load_questions(i);
    
}