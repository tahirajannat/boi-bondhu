export default function Page({ classes = '', children, title = '' }) {
    return (
        <div
            id=''
            className={[
                'container px-20 mx-auto sm:grid sm:grid-cols-12 gap-x-6  xl:gap-x-8',
                classes,
            ].join(' ')}
        >
            {title ? (
                <div className='  pb-6 '>
                    <h2 className='text-[25px] font-semibold gray-800'>
                        {title}
                    </h2>
                </div>
            ) : (
                ''
            )}

            {children}
        </div>
    );
}
