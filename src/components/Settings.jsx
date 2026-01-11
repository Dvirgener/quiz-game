import { useRef } from "react";
import VirgButton from "./virg-components/VirgButton";
import VirgInput from "./virg-components/VirgInput";
import VirgSelect from "./virg-components/VirgSelect";
export default function Settings({startGame, categories}){

    const setName = useRef();
    const setAge = useRef();
    const setQuizType = useRef();
    const setCategory = useRef();
    const setDifficulty = useRef();
    const setNumberOfQuestions = useRef();

    function startButClick(){
        let data = {
            name: setName.current.value,
            age: setAge.current.value,
            type: setQuizType.current.value,
            category: setCategory.current.value,
            difficulty: setDifficulty.current.value,
            nr_of_questions: setNumberOfQuestions.current.value,
            score : 0,
        }

        startGame(data);
    }

    return(
        <div className="w-100 border p-4 rounded-md outline-1 outline-stone-600 shadow-md shadow-stone-400 bg-gray-50">
            <p className="font-extrabold text-2xl">Game Settings</p>
            
            {/* input Name */}
            <VirgInput ref={setName} label="Name" type="text" />

            {/* input Age */}
            <VirgInput ref={setAge} label="Age" type="number" />

            {/* input Quiz Type */}
            <VirgSelect ref={setQuizType} label="Quiz Type">
                    <option value="any">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
            </VirgSelect>

            {/* input Category */}
            <VirgSelect ref={setCategory} label="Category">
                 <option value="any">Any Category</option>
                {
                    categories.trivia_categories.map((category)=> (<option key={category.id} value={category.id}>{category.name}</option>))
                }
            </VirgSelect>

            {/* input Difficulty */}
            <VirgSelect ref={setDifficulty} label="Difficulty">
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
            </VirgSelect>

            {/* input Number of Questions */}
            <VirgSelect ref={setNumberOfQuestions} label="Number of Questions">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
            </VirgSelect>
            
            <div className="flex flex-col items-center">
                <VirgButton label="Start" onClick={startButClick}/>
            </div>

        </div>
    )
}
