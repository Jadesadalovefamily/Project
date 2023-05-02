const questions = [
    {
        question: "ภาพใดเป็นภาพของพยัญชนะ ก - ไก่ ?",

        optionA: "<img src='ซ.png' width='110' height='110'>",
        optionB: "<img src='ค.png' width='110' height='110'>",
        optionC: "<img src='ข.png' width='110' height='110'>",
        optionD: "<img src='ก.png' width='110' height='110'>",
        correctOption: "optionD"
    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะ ข - ไข่ ?  ",
      optionA: "<img src='ฐ.png' width='110' height='110'>",
      optionB: "<img src='ข.png' width='110' height='110'>",
      optionC: "<img src='ย.png' width='110' height='110'>",
      optionD: "<img src='ฟ.png' width='110' height='110'>",
      correctOption: "optionB"
    },

    {
      question: "ภาพข้างต้นเป็นภาพของพยัญชนะอะไร <img src='ซ.png' width='110' height='110'> ?",
      optionA: "ก - ไก่",
      optionB: "ล - ลิง",
      optionC: "ฮ - นกฮูก",
      optionD: "ซ - โซ่",
      correctOption: "optionD"
    },

    {
      question: "พยัญชนะตัวใดอยู่ถัดมาจาก ม - ม้า",
      optionA: "อ - อ่าง",
      optionB: "ฬ - จุฬา",
      optionC: "ด - เด็ก",
      optionD: "ย - ยักษ์",
      correctOption: "optionD"

    },

    {
      question: "ภาพข้างต้นเป็นภาพของพยัญชนะอะไร <img src='ฟ.png' width='110' height='110'> ?",
      optionA: "ข - ไข่",
      optionB: "ต - เต่า",
      optionC: "ฟ - ฟัน",
      optionD: "ก - ไก่",
      correctOption: "optionC"

    },

    {
      question: "พยัญชนะตัวใดอยู่ถัดมาจาก ก - ไก่",
      optionA: "จ - จาน",
      optionB: "ฃ - ขวด",
      optionC: "ค - ควาย",
      optionD: "ข - ไข่",
      correctOption: "optionD"
    },

    {
        question: "ภาพข้างต้นเป็นภาพของพยัญชนะอะไร <img src='ฏ.png' width='110' height='110'> ?",
        optionA: "ฏ - ปฏัก",
        optionB: "ฎ - ชฎา",
        optionC: "ถ - ถุง",
        optionD: "ฐ - ฐาน",
        correctOption: "optionA"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะ ต - เต่า ?",
      optionA: "<img src='ส.png' width='110' height='110'>",
      optionB: "<img src='ก.png' width='110' height='110'>",
      optionC: "<img src='ต.png' width='110' height='110'>",
      optionD: "<img src='ฟ.png' width='110' height='110'>",
      correctOption: "optionC"
    },

    {
      question: "ตัวเลือกข้อใดไม่เป็นภาพของพยัญชนะไทย ?",
      optionA: "<img src='ไม้ไต่คู้(_็).png' width='110' height='110'>",
      optionB: "<img src='ค.png' width='110' height='110'>",
      optionC: "<img src='ข.png' width='110' height='110'>",
      optionD: "<img src='ก.png' width='110' height='110'>",
      correctOption: "optionA"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะ ย - ยักษ์ ?",
      optionA: "<img src='ต.png' width='110' height='110'>",
      optionB: "<img src='ฟ.png' width='110' height='110'>",
      optionC: "<img src='ข.png' width='110' height='110'>",
      optionD: "<img src='ย.png' width='110' height='110'>",
      correctOption: "optionD"

    },

    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะ ฐ - ฐาน ?",
      optionA: "<img src='ส.png' width='110' height='110'>",
      optionB: "<img src='ก.png' width='110' height='110'>",
      optionC: "ไม่มีข้อใดถูก",
      optionD: "<img src='ฟ.png' width='110' height='110'>",
      correctOption: "optionC"
    },

    {
        question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะไทย ?",
        optionA: "ถูกทุกข้อ",
        optionB: "<img src='ข.png' width='110' height='110'>",
        optionC: "<img src='ย.png' width='110' height='110'>",
        optionD: "<img src='ฟ.png' width='110' height='110'>",
        correctOption: "optionA"
    },


    {
      question: "ตัวเลือกข้อใดเป็นภาพของพยัญชนะ ส - เสือ ?  ",
      optionA: "<img src='ฐ.png' width='110' height='110'>",
      optionB: "<img src='ส.png' width='110' height='110'>",
      optionC: "<img src='ย.png' width='110' height='110'>",
      optionD: "<img src='ฟ.png' width='110' height='110'>",
        correctOption: "optionB"
    },

    {
      question: "ตัวเลือกข้อใดไม่เป็นภาพของพยัญชนะไทย ?",
      optionA: "<img src='ส.png' width='110' height='110'>",
      optionB: "<img src='ค.png' width='110' height='110'>",
      optionC: "<img src='ข.png' width='110' height='110'>",
      optionD: "<img src='ไปยาลน้อย(ฯ).png' width='110' height='110'>",
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