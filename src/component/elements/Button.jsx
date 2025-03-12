import { Link } from "react-router-dom";

function Button(props) {
    const {
        to,
        classCustom = '',
        bgColor = 'bg-black',
        text = 'text-white',
        border = 'border-gray-500',
        hover = '',
        hoverText = '',
        textSize = 'text-[16px]',
        padddingXY = 'px-[20px] py-[8px]',
        borderRadius = 'rounded-lg',
        children
    } = props;

    return (
        <Link to={to} className={`${bgColor} ${classCustom} ${padddingXY} cursor-pointer border-[1px] ${border} ${borderRadius} duration-[0.3s] group ${hover} flex items-center justify-center`}>
            <p className={`${text} font-[700] ${textSize} ${hoverText}`}>
                {children}
            </p>
        </Link>
    );
}

export default Button;