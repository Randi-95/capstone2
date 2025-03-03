const CardAbout = (props) => {
    const {children, shadow} = props
    return (
        <div className={` bg-[#f4f8fb] p-2 rounded-[30px] border-solid border-[1.5px] border-[#e7e7f5] ${shadow}`}>
            <div className="px-5 py-3 bg-white rounded-[30px] border-solid border-[1.5px] border-[#e7e7f5] shadow">
                {children}
            </div>
        </div>
    )
}

export default CardAbout