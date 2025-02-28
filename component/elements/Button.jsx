
function Button(props){
    const {bgColor = 'bg-black', text = 'text-white', border = 'border-gray-500', hover = '', hoverText = '',textSize= 'text-[16px]', padddingXY = 'px-[20px] py-[8px]', borderRadius='rounded-lg' , children} = props;
    return(
        <button className={`${bgColor} ${padddingXY} cursor-pointer border-[1px] ${border} ${borderRadius} duration-[0.3s] group ${hover}`}><p className={`${text} font-[700] flex items-center justify-center ${textSize} ${hoverText} `}>{children}</p></button>
    )
}

export default Button;