var questions = [
    {
        "question" : "Q1: What does head HTML stand for?",
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
        "option_4" : "o4: Cascading Style Shape",
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

load_questions(0);

function load_questions(i) {

    document.getElementById("question").innerHTML = questions[i].question;

    document.getElementById("o1").innerHTML = questions[i].option_1;

    document.getElementById("o2").innerHTML = questions[i].option_2;
    
    document.getElementById("o3").innerHTML = questions[i].option_3;

    document.getElementById("o4").innerHTML = questions[i].option_4;
    
}