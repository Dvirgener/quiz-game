export default function VirgSelect({label, ref, children}){
    return(
        <div className="flex flex-col items-start gap-2 my-3 w-full">
        <label htmlFor="">{label} :</label>
        <select ref={ref} className="outline-1 px-2 py-3 w-full rounded focus:outline-stone-300">
            {children}
        </select>
        </div>

    )
}