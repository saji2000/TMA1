var questions = [
    {
        "question" : "Roughly how many percent of websites use JavaScript?",
        "option_1" : "O1: 38%",
        "option_2" : "O2: 49%",
        "option_3" : "O3: 82%",
        "option_4" : "O4: 98%",
        "answer" : "O4: 98%"
    },
    {
        "question" : "Which one is not a way to declare a variable?",
        "option_1" : "O1: var",
        "option_2" : "O2: int",
        "option_3" : "O3: const",
        "option_4" : "O4: let",
        "answer" : "O2: int"
    },
    {
        "question" : "Which one is the operator for multiplication?",
        "option_1" : "O1: &",
        "option_2" : "O2: #",
        "option_3" : "O3: *",
        "option_4" : "O4: x",
        "answer" : "O3: *"
      },
    {
        "question" : "Which one is the correct way to declare an array called \"a\" with element 1 and 2?",
        "option_1" : "O1: array a = [1, 2]",
        "option_2" : "O2: let a = [1, 2]",
        "option_3" : "O3: var a = [1, 2]",
        "option_4" : "O4: const a = [1, 2]",
        "answer" : "O4: const a = [1, 2]"
      },
    {
        "question" : "Which for loop is correct?",
        "option_1" : "O1: for(int i = 0; i < n; i++{...}",
        "option_2" : "O2: while(int i = 0; i < n; i++{...}",
        "option_3" : "O3: for(int i == 0; i < n; i++{...}",
        "option_4" : "O4: for(int i = 0, i < n, i++{...}",
        "answer" : "O1: for(int i = 0; i < n; i++{...}"
    },
    {
        "question" : "How can we change the element with id \"finish\" to \"goodbye\"?",
        "option_1" : "O1: document.getElementById(finish).html = \"goodbye\"",
        "option_2" : "O2: document.getElementById(\"finish\").html = goodbye",
        "option_3" : "O3: element.getElementById(\"finish\").innerHTML = goodbye",
        "option_4" : "O4: document.getElementById(\"finish\").innerHTML = \"goodbye\"",
        "answer" : "O4: document.getElementById(\"finish\").innerHTML = \"goodbye\""
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