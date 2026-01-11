import { useEffect } from "react"
import VirgButton from "./virg-components/VirgButton"

export default function Question({qw, next}){

    return(
        <>
        <div className="w-max border py-4 px-50 rounded-md outline-1 outline-stone-600 shadow-md shadow-stone-400 bg-gray-50">
            {qw.question}
        </div>
        <VirgButton label="next" onClick={next}/>
        </>

    )
}