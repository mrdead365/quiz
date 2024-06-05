import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const questions = [
  {
    question : 'Where is Warsak Dam of Pakistan situated?',
    options: ['Punjab','Sindh','Khyber Pakhtunkhwa','Balochistan'],
    correctAnswer:'Khyber Pakhtunkhwa'
  },
  {
    question : 'Shakarparrian is situated in?',
    options: ['Islamabad','Rawalpindi','Murree','Peshawar'],
    correctAnswer:'Islamabad'
  },
  {
    question : 'Identify the largest cantonment of Pakistan?',
    options: ['Quetta Cantt','Kharian Cantt','Okara Cantt','Karachi Cantt'],
    correctAnswer:'Kharian Cantt'
  },
  {
    question : 'The Kargil incident happened in?',
    options: ['1998','1997','1999','2000'],
    correctAnswer:'1999'
  },
  {
    question : 'In which of the following city Military College Jhelum is located?',
    options: ['Risalpur','Islamabad','Sarai Alam Gir','Sargodha'],
    correctAnswer:'Sarai Alam Gir'
  },

]


function App() {
  const [qScore, setQScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [cQuestion, setcQuestion] = useState(0);

  const handleAnswer = (selectAnswer)=>{
    selectAnswer === questions[cQuestion].correctAnswer && setQScore (qScore +1)

    const nextQ = cQuestion + 1  ;

    if(nextQ < questions.length){
      setcQuestion(nextQ)
    }else{
      setShowScore(true);
      qScore == questions.length -1 && setShowText(true)
    }
  }



  return (
    <div className="main">
      <h1 className="text1"> MY Quiz App</h1>
      <div className="quiz-app">

        {showScore ? (<div className="score-section">
          <h4 className="text">you scored {qScore} out of {questions.length}</h4>  

          {showText && (
            <h4 className="text"> you did it 🎉🎆</h4>
          )}
          </div>): 
        <>
          <div className="question-count">
            <span> Question {cQuestion + 1}</span> / {questions.length}
          </div>
          <div className="question-text">{questions[cQuestion].question}</div>
          <div className="answer-section">
            {questions[cQuestion].options.map((option)=> (<button className="answer-btn" key={option} onClick={()=> handleAnswer(option)}>
              {option}
            </button>))}
          </div>
        </>

          
        }
        
      </div>
    </div>
  );
}

export default App;
