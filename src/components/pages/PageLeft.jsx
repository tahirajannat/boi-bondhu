export default function PageLeft({ classes = '', children, title }) {
    return (
        <div className={`col-span-8 ${classes}`}>
            {title ? (
                <div className=' pb-8 ml-10'>
                    <h2 className='text-[23px] font-semibold gray-800'>
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
