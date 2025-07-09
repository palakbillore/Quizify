
# Quzify Ask AI

An intelligent quiz generator web application that uses DeepSeek R1 AI to automatically generate quiz questions, options, and correct answers based on user input. Users can test themselves, get instant feedback, and view results in real-time.

## Features

- Accepts user input (topic or concept) to generate a quiz  
- Uses DeepSeek R1 API to generate:  
  - A valid question  
  - 4 multiple-choice options  
  - The correct answer  
- Allows user to select answers and submit  
- Displays final score and result summary at the end  
- UI styled with Tailwind CSS  
- Built with HTML, CSS (Tailwind), and Vanilla JavaScript

## Technologies Used

| Technology        | Purpose                                |
|-------------------|----------------------------------------|
| DeepSeek R1 API   | AI-based question generation           |
| HTML              | Structure of the webpage               |
| Tailwind CSS      | Styling and responsive UI design       |
| JavaScript        | Logic for quiz flow and result handling|

## How It Works

1. User enters a topic (e.g., "JavaScript", "Biology")  
2. The app sends this topic to DeepSeek R1 to generate:  
   - A question  
   - Four choices  
   - The correct answer  
3. User selects an answer for each question  
4. On submission, the app calculates the score and shows a detailed result



## Project Structure

```
quzify-ask-ai/
├── index.html
├── script.js
├── style.css (optional, or Tailwind CDN)
└── README.md
```

- **Home** 
![image](https://raw.githubusercontent.com/palakbillore/Quizify/main/src/assets/page1.PNG)
- **Quiz** 
![image](https://raw.githubusercontent.com/palakbillore/Quizify/main/src/assets/page2.PNG)
- **Dashboard** 
![image](https://raw.githubusercontent.com/palakbillore/Quizify/main/src/assets/page3.PNG)


## Getting Started

https://github.com/palakbillore/Quizify/blob/main/src/assets/page1.PNG

### Prerequisites

- A modern web browser  
- DeepSeek R1 API access

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/quzify-ask-ai.git  
   cd quzify-ask-ai  
   ```

2. Set up API Configuration  
   - Obtain your DeepSeek R1 API key  
   - Open `script.js` and update the API section  

3. Open the Application  
   - Open `index.html` in your browser  
   - Or serve it using a local development server

## Usage

1. Launch the app in your browser  
2. Enter a topic or concept  
3. Click "Generate Quiz"  
4. Select your answers  
5. Submit to see your score and feedback

## API Configuration

In `script.js`, update the following with your actual API key:

```js
const API_KEY = 'your-deepseek-api-key';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
```

Ensure you're using the correct DeepSeek R1 model ID when making the request.

## License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute it.

## Contributing

1. Fork this repository  
2. Create a new feature branch  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request
```
