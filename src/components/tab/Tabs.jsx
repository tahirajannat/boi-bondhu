// @ts-ignore
export default function Tabs({
    active,
    onChange,
    children,
    displayButton = false,
}) {
    return (
        <>
            <div className='border-b rounded-sm flex justify-between items-center'>
                <div>
                    {children.map((menu, index) => (
                        <a
                            key={index}
                            onClick={() => onChange(index)}
                            className={
                                active === index
                                    ? 'border-b border-teal-500  hover:text-teal-700 py-4 mr-12 rounded-sm cursor-pointer inline-block items-center text-left text-[15px] text-teal-500  font-bold'
                                    : 'inline-block items-center justify-between cursor-pointer text-left  py-4 mr-12  hover:text-teal-500 text-[15px] text-black font-bold'
                            }
                        >
                            {menu.props.title}
                        </a>
                    ))}
                </div>
                {displayButton ? (
                    <button className='px-2 py-1 h-9 block text-sm font-bold rounded-[4px] text-teal-600 border border-teal-600 hover:bg-slate-100 duration-75 transition-all '>
                        View All
                    </button>
                ) : null}
            </div>
            <div className=''>{children[active]}</div>
        </>
    );
}
