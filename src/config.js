let keys;

async function fetchEnv() {
    try {
        const res = await fetch('https://quizserver-buv5.onrender.com/api/config');
        const data = await res.json();

        keys = data.apiUrl


    } catch (err) {
        console.error("❌ Failed to fetch config:", err);
    }
}

fetchEnv()