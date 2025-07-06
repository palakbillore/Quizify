// this file render the question
let netScore;
function renderQuiz(quizData) {
    const loader = document.getElementById('loader')

    loader.style.display = "none"

    const totalNoOfQ = document.getElementById("totalQNumberCount")
    if (totalNoOfQ) {
        totalNoOfQ.textContent = `Total Question : ${quizData.questions.length} `;
    }
    const container = document.getElementById("quizContainer")
    container.innerHTML = "";
    quizData.questions.forEach((q, idx) => {
        const questionDiv = document.createElement("div")
        questionDiv.className = "mb-6 p-4 bg-white rounded-lg shadow "

        const questionTitle = document.createElement("h3")
        questionTitle.className = "font-semibold mb-2"

        questionTitle.textContent = `${idx + 1} : ${q.question}`
        questionDiv.appendChild(questionTitle);


        q.options.forEach((opt, optIdx) => {

            const label = document.createElement("label")
            label.className = "block mb-2 "
            label.innerHTML = `
    <input type="radio" name="q${idx}" value="${optIdx}" class="mr-2" > ${opt}
    `
            questionDiv.appendChild(label)
        })
        container.appendChild(questionDiv)
    });

    const btn = document.createElement('button')
    btn.textContent = "Submit Button"
    btn.className = "mt-4 rounded  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-white font-semibold px-4 py-2 "

    btn.onclick = () => calculateScore(quizData)
    container.appendChild(btn)


    const corretans = parseInt((netScore * 100) / totalNoOfQ);

    console.log(corretans);
    const wrong = parseInt(100 - corretans)

    const pdiv = document.createElement('div')
    pdiv.className = "rounded-full"

    const divc1 = document.createElement('div')
    divc1.className = `w-[${corretans}]`
    const divc2 = document.createElement('div')
    divc2.className = `w-[${wrong}]`

    pdiv.appendChild(divc1)
    pdiv.appendChild(divc2)
    container.appendChild(pdiv)

}



function calculateScore(quizData) {
    netScore = 0
    quizData.questions.forEach((q, idx) => {
        const select = document.querySelector(`input[name="q${idx}"]:checked`)
        if (select) {
            const selectedIdx = parseInt(select.value, 10)
            if (selectedIdx === q.correctIndex) {
                netScore++;
            }
        }
    }

    )
    // alert(`your score is ${netScore}`
    const totalQue = quizData.questions.length;

    const wAns = totalQue - netScore;
    const totalScore = (netScore * 100) / totalQue;
    const resultWindow = document.getElementById("popUpWindow");
    resultWindow.style.display = "block"
    console.log(totalScore)


    const percentageTag = document.getElementById("percentageTag");
    percentageTag.textContent = `${totalScore}%`;
    const correctAnsTag = document.getElementById("correctAnsTag");
    correctAnsTag.textContent = `${netScore}`
    const worngAns = document.getElementById("worngAns");
    worngAns.textContent = `${wAns}`
    const totalQ = document.getElementById("totalQ");
    totalQ.textContent = `${totalQue}`
    const rwaRation = document.getElementById("rwaRation");
    rwaRation.textContent = ` ${netScore}/${totalQue}`
    const accuracyx = document.getElementById("accuracy");
    accuracyx.textContent = `${totalScore}%`

    const bar = document.getElementById("bar");
    bar.style.width = `${totalScore}%`;



}

function offWindow() {
    console.log("buton was clusjn ");
    location.reload();

}


