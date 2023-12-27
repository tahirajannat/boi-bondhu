export default function PageRight({ classes = '', children, title }) {
    return (
        <div className={`col-span-4   ${classes}`}>
            {title ? (
                <div className=' pb-8 '>
                    <h2 className='text-[17px] font-semibold gray-800 mt-2.5'>
                        {title}
                    </h2>
                </div>
            ) : (
                ''
            )}
            <div className={`my-20 ${classes}`}>{children}</div>
        </div>
    );
}
