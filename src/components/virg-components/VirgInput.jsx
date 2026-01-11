export default function VirgInput({label, type, ref}){
    return(
        <div className="flex flex-col items-start gap-2 my-3 w-full">
            <label htmlFor="">{label} : </label>
            <input ref={ref} type={type} className=" outline-1 px-2 py-2 w-full rounded focus:outline-stone-300" />
        </div>
    )
}