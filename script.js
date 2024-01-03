//first create the HTML
//create the start button
//link the start button to the javascript

//we need a function, when the start button is clicked a timer begins and displays in the timer DIV
//also when the start button is clicked, the start div is hidden, and the questions section is refreshed with
//the first set of questions.

//write the function that decides to either progress after a question is answered completely 
//or when answered incompletely deducts time from the clock.

//the function should progress to game over status after all the questions are answered. 
//game over should also be reached if time runs out on the clock.

//write a new function that works after the game has ended.
//the end function should be a promt where the user can enter their initials and their score is saved.

const startButton = document.getElementById(".start-button");
const questionSec = document.getElementById(".question-sec")
const CorrectBox = document.getElementById(".correct-incorrect")
const Timer = document.getElementById(".Timer")
const HighScore = document.getElementById(".highscore")
const Correct = "That's Right"
const Incorrect = "Nope!"

onclick(ev: MouseEvent): 
let questions = [
    {
        Number: 1
        ,question: "What does a # mean in HTML?",
        answer: "The element ID",
        choices: [
            "Its a number",
            "The element ID",
            "A telephone number",
            "Its a deleted property",

        ]
    }
        ,{
            Number: 2
            ,question: "What is a P tag?",
            answer: "The paragraph element tag",
            choices: [
                "A spraypaint object",
                "The property symbol",
                "The paragraph element tag",
                "A function named Property",
    
            ]
    }
    ,{
        Number: 3
        ,question: "What is javascript?",
        answer: "A programming language",
        choices: [
            "A coffe bar",
            "A programming language",
            "A program to write novels",
            "A form of martial arts",

        ]
    }
]
document.getElementById("start-button").addEventListener("click", start);
   start ()
if { 
   
        
    };

else {


}

function UserQuestions = {
    
}


start()