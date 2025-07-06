let topic
let count
let level

function handleGenerateQuiz() {
    topic = document.getElementById("topicInput").value.trim();

    count = document.getElementById("number").value

    level = document.querySelector('input[name="level"]:checked')?.value
    if (!topic || !count || !level) {
        alert("All field are required ")
    }
    if (count < 1) {
        alert("Minimum one question is required")
    }

    const loader = document.getElementById('loader')

    loader.style.display = "flex"

    askAI(topic, level, count)

}

//  function generatemyquiz(){
//   const loader = document.getElementById('loader')

//     loader.style.display = "flex"
//   }



async function askAI(topic, level, count) {

    const prompt = ` You are Ai quiz genrator . Based on the following contrent  . genrate a MCQ question
    
    Rules :
    -Provide questions on the behalf on difficulty  level ${level}
    -Each questions having a 4 options  (1 correct , 3 wrong)
    -genrate a atleast ${count}  no of questions,
    -Each  questions object must have "quesion', "options", and "correctIndex"
    -Provide a array called "answer" with correct answer for each qestions
     
    conent : 
    """${topic}"""

    Return only a valid JSON object as :

    {
      "level":"${level}",
      "questions":[.........],
      "answer":[.......]
    }

    `


    try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${keys}`, // your API key
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // model: "deepseek/deepseek-r1-0528:free",
                model: "deepseek/deepseek-chat:free",
                messages: [
                    {
                        role: "system",
                        content: "you will generate MCQ quizzes in JSON"

                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            })
        });

        const data = await res.json();

        // ✅ Extract actual AI response
        const reply = data.choices?.[0]?.message?.content || "No response";

        const jasonFormat = reply.replace(/```json|```/g, '').trim()

        const quizData = await JSON.parse(jasonFormat)
        console.log(quizData);

        renderQuiz(quizData)

    } catch (err) {
        console.error("❌ Error:", err);
        document.getElementById("response").innerText = "Failed to fetch AI response.";
    }
}

