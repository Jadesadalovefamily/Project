const questions = [
    {
        question: "ภาพใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว B ?",

        optionA: "<img src='M.png' width='110' height='110'>",
        optionB: "<img src='E.png' width='110' height='110'>",
        optionC: "<img src='C.png' width='110' height='110'>",
        optionD: "<img src='B.png' width='110' height='110'>",
        correctOption: "optionD"
    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว L ?  ",
      optionA: "<img src='K.png' width='110' height='110'>",
      optionB: "<img src='L.png' width='110' height='110'>",
      optionC: "<img src='B.png' width='110' height='110'>",
      optionD: "<img src='A.png' width='110' height='110'>",
      correctOption: "optionB"
    },

    {
      question: "ภาพข้างต้นเป็นภาพของพยัญชนะภาษาอังกฤษ ตัวอะไร <img src='K.png' width='110' height='110'> ?",
      optionA: "Q",
      optionB: "Z",
      optionC: "O",
      optionD: "K่",
      correctOption: "optionD"
    },

    {
      question: "พยัญชนะภาษาอังกฤษ ตัวใดอยู่ถัดมาจากตัว C",
      optionA: "K",
      optionB: "F",
      optionC: "E",
      optionD: "D",
      correctOption: "optionD"

    },

    {
      question: "ภาพข้างต้นเป็นภาพของพยัญชนะภาษาอังกฤษ ตัวอะไร <img src='I.png' width='110' height='110'> ?",
      optionA: "K",
      optionB: "H",
      optionC: "I",
      optionD: "A",
      correctOption: "optionC"

    },

    {
        question: "ภาพข้างต้นเป็นภาพของพยัญชนะภาษาอังกฤษ ตัวอะไร <img src='E.png' width='110' height='110'> ?",
        optionA: "E",
        optionB: "F",
        optionC: "G",
        optionD: "H",
        correctOption: "optionA"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว C ?",
      optionA: "<img src='B.png' width='110' height='110'>",
      optionB: "<img src='A.png' width='110' height='110'>",
      optionC: "<img src='C.png' width='110' height='110'>",
      optionD: "<img src='D.png' width='110' height='110'>",
      correctOption: "optionC"
    },

    {
      question: "ตัวเลือกข้อใดไม่เป็นภาพของพยัญชนะภาษาอังกฤษ ?",
      optionA: "<img src='ไม้ไต่คู้(_็).png' width='110' height='110'>",
      optionB: "<img src='L.png' width='110' height='110'>",
      optionC: "<img src='K.png' width='110' height='110'>",
      optionD: "<img src='B.png' width='110' height='110'>",
      correctOption: "optionA"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว D",
      optionA: "<img src='B.png' width='110' height='110'>",
      optionB: "<img src='A.png' width='110' height='110'>",
      optionC: "<img src='C.png' width='110' height='110'>",
      optionD: "<img src='D.png' width='110' height='110'>",
      correctOption: "optionD"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว M ?",
      optionA: "<img src='A.png' width='110' height='110'>",
      optionB: "<img src='F.png' width='110' height='110'>",
      optionC: "ไม่มีข้อใดถูก",
      optionD: "<img src='I.png' width='110' height='110'>",
      correctOption: "optionC"
    },

    {
        question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ?",
        optionA: "ถูกทุกข้อ",
        optionB: "<img src='A.png' width='110' height='110'>",
        optionC: "<img src='B.png' width='110' height='110'>",
        optionD: "<img src='C.png' width='110' height='110'>",
        correctOption: "optionA"
    },


    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะภาษาอังกฤษ ตัว F ?  ",
      optionA: "<img src='M.png' width='110' height='110'>",
      optionB: "<img src='F.png' width='110' height='110'>",
      optionC: "<img src='C.png' width='110' height='110'>",
      optionD: "<img src='B.png' width='110' height='110'>",
        correctOption: "optionB"
    },

    {
      question: "ตัวเลือกข้อใดไม่เป็นภาพของพยัญชนะภาษาอังกฤษ ?",
      optionA: "<img src='F.png' width='110' height='110'>",
      optionB: "<img src='M.png' width='110' height='110'>",
      optionC: "<img src='L.png' width='110' height='110'>",
      optionD: "<img src='ไม้ไต่คู้(_็).png' width='110' height='110'>",
        correctOption: "optionD"
    }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "ปรับปรุง, กรุณาฝึกฝนเพิ่มเติม"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "ดี, กรุณาฝึกฝนเพิ่มเติม"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "ยอดเยี่ยม"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
