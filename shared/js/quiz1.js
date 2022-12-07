var questions = [
    {
        "question" : "What does head HTML stand for?",
        "option_1" : "O1: Hyper Text Markup Language",
        "option_2" : "O2: High Text Markup Language",
        "option_3" : "O3: Hyper Text Machine Language",
        "option_4" : "O4: High Time Machine Licence",
        "answer" : "O1: Hyper Text Markup Language"
    },
    {
        "question" : "Which one is not part of the page-structure elements?",
        "option_1" : "O1: nav",
        "option_2" : "O2: header",
        "option_3" : "O3: footer",
        "option_4" : "O4: paragraph",
        "answer" : "O4: paragraph"
    },
    {
        "question" : "Which input option provides only one selectable option?",
        "option_1" : "O1: checkbox",
        "option_2" : "O2: radio",
        "option_3" : "O3: submit",
        "option_4" : "O4: password",
        "answer" : "O2: radio"
      },
    {
        "question" : "What does CSS stand for?",
        "option_1" : "O1: Cascading Style Sheets",
        "option_2" : "O2: Classic Style Sheets",
        "option_3" : "O3: Custom Style Sheets",
        "option_4" : "O4: Cascading Style Shape",
        "answer" : "O1: Cascading Style Sheets"
      },
    {
        "question" : "Which attribute is used for changing the color of text?",
        "option_1" : "O1: text-color",
        "option_2" : "O2: color-text",
        "option_3" : "O3: color",
        "option_4" : "O4: colour",
        "answer" : "O3: color"
    },
    {
        "question" : "How can we change the style of a certain class in CSS?",
        "option_1" : "O1: using \".\" before the class name",
        "option_2" : "O2: using \"#\" before the class name",
        "option_3" : "O3: using \"*\" before the class name",
        "option_4" : "O4: using \"$\" before the class name",
        "answer" : "O1: using \".\" before the class name"
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

    // if the user has pressed the back buttonf
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