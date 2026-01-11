import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Settings from './components/Settings'
import { Categories } from './assets/categories'
import Question from './components/Question'

const CATEGORIES = Categories;
let questionNumber = 0;

function App() {

  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState('');
  const [gameStart, setGameStart] = useState('not');
  const [gameData, setGameData] = useState({});
 
  useEffect(() => {
    if (questions.length > 0) {
      setQuestion();
      setGameStart('yes');
    }

  }, [questions]);

  function decodeHtml(html) {
  const txt = new DOMParser().parseFromString(html, "text/html");
  return txt.documentElement.textContent;
  }

  function setQuestion(){
      if(questionNumber >= questions.length){
        setGameStart('not');
      }
      setActiveQuestion(questions[questionNumber])
      questionNumber +=1;
  }


  function startGame(data){
    
    setGameData(gameData => ({...gameData, data}))
    setGameStart('loading')
    let URL = `https://opentdb.com/api.php?amount=${data.nr_of_questions}`;

    if (data.category !== 'any') {
      URL += `&category=${data.category}`;
    }

    if (data.difficulty !== 'any') {
      URL += `&difficulty=${data.difficulty}`;
    }

    if (data.type !== 'any') {
      URL += `&type=${data.type}`;
    }

    fetch(URL)
    .then(res => res.json())
    .then(data => {
      const formatted = data.results.map(q => ({
      ...q,
      question: decodeHtml(q.question),
      correct_answer: decodeHtml(q.correct_answer),
      incorrect_answers: q.incorrect_answers.map(a => decodeHtml(a))
      }));
      setQuestions(() => formatted);
    })
    .catch(err => console.log(err));
  }



  return (  
    <div className='py-10'>
      <Header/>
      <div className='py-10 w-full flex justify-center'>
        {
          gameStart === 'not' ? <Settings startGame={startGame} categories={CATEGORIES}/> : gameStart === 'loading' ? 'Loading' : <Question qw={activeQuestion} next={setQuestion}/>
        }

      </div>
    </div>
  )
}

export default App
