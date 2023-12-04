export default function Input({
    type = 'text',
    name = '',
    value = '',
    placeholder = '',
    classes = '',
    size = 'wm-h-11 wm-w-72',
    required = false,
    onChange,
}) {
    return (
        <div className=''>
            <input
                className={[
                    'mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500',
                    classes,
                    size,
                ].join(' ')}
                type={type}
                name={name}
                id={name}
                value={value || ''}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}
