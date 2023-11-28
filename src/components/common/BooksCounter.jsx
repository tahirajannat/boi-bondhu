export default function BooksCounter({ items }) {
    // Assuming 'items' is an array of objects with a 'category' property

    const countCategoryItems = (category) => {
        return items.filter((item) => item.category === category).length;
    };

    // Assuming you have an array of unique categories
    const uniqueCategories = [...new Set(items.map((item) => item.category))];

    return (
        <div className='ml-4 text-teal-700 font-bold '>
            <ul className='h-6 w-6 rounded-full bg-white shadow-sm mx-auto items-center flex justify-center'>
                {uniqueCategories.map((category) => (
                    <li key={category}>{countCategoryItems(category)}</li>
                ))}
            </ul>
        </div>
    );
}
