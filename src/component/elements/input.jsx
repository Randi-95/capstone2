import "../../App.css";

function Input(props){
    const {nama, type} = props
    return(
        <div className="relative">
        <input type={type} id="email" placeholder=" "
            className="mt-4  peer block w-full rounded-md px-3 pt-5 pb-4 text-sm font-medium outline-none transition-all dark:text-white bg-gray-100 dark:bg-[#2D2D2D]" required/>
        <label for="email"
            className="absolute left-3 top-2 text-gray-500 text-xs font-medium transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500">
            {nama}
        </label>
    </div>
    


    )
}

export default Input;