const CardAbout = (props) => {
    const {children, shadow} = props
    return (
        <div className={` bg-[#f4f8fb] dark:bg-[#1f2937] p-2 rounded-[30px] border-solid border-[1.5px] border-[#e7e7f5] dark:border-[#374151] ${shadow} `}>
            <div className="px-5 py-3 bg-white dark:bg-[#111827] rounded-[30px] border-solid border-[1.5px] border-[#e7e7f5] dark:border-[#374151] shadow dark:shadow-lg">
                {children}
            </div>
        </div>
    )
}

export default CardAbout