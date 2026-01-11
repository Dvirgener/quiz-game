import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {

  const [questions, setQuestions] = useState([]);


  // useEffect(()=>{
  //   fetch("https://opentdb.com/api.php?amount=30")
  //     .then(res => res.json())
  //     .then(data => {
  //       setQuestions(data.results);
  //   })
  //   .catch(err => console.error(err));
  // },[]);
  
  console.log(questions);


  return (
    <>
      <Header/>
      <div>
        
        {/* <table className='border-collapse table-fixed font-mono'>
          <thead>

            <tr className='bg-stone-300 py-7 border font-bold'>
              <th className='border px-3'>Type</th>
              <th className='border px-3'>Difficulty</th>
              <th className='border'>Category</th>
              <th className='border'>Question</th>
              <th className='border px-3'>Correct Answer</th>
            </tr>
          </thead>
          <tbody>

                    {
          questions.map((q,i)=>(
            <tr key={i} className='py-4 border'>
              <td className='border px-2'>{q.type}</td>
              <td className='border px-2'>{q.difficulty}</td>
              <td className='border px-2'>{q.category}</td>
              <td className='border px-2'>{q.question}</td>
              <td className='border px-2'>{q.correct_answer}</td>
            </tr>
          ))
        }


          </tbody>
        </table> */}

      </div>
    </>
  )
}

export default App
