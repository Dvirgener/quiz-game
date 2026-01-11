export default function VirgButton({label, ...props}){

    function clickMe(){
        alert('test');
    }


    return(
        <button {...props} className="py-3 px-8 bg-stone-600 text-white rounded-lg hover:font-bold hover:bg-stone-800 hover:cursor-pointer" >
            {label}
        </button>
    )
}