// import React, { useState } from 'react';
// import { books } from '../../utility/data';
// import FilterCategory from '../filter/FilterCategory';
// import ProductList from '../filter/ProductList';

// export default function Shop() {
//     const [products, setProducts] = useState(books);
//     const [categories, setCategories] = useState({});

//     const handleChange = (name) => {
//         setCategories((prevCategories) => ({
//             ...prevCategories,
//             [name]: !prevCategories[name],
//         }));
//     };

//     const checkedProducts = Object.entries(categories)
//         .filter(([, isChecked]) => isChecked)
//         .map(([category]) => category);

//     const filteredProducts = products.filter(({ category }) =>
//         checkedProducts.includes(category)
//     );
//     console.log('first', filteredProducts);

//     return (
//         <div className=' flex'>
//             {products.map((product) => (
//                 <FilterCategory
//                     key={product.id}
//                     id={product.id}
//                     title={product.category}
//                     name={product.category}
//                     checked={categories[product.category]}
//                     handleChange={() => handleChange(product.category)}
//                 />
//             ))}

//             <div>
//                 {' '}
//                 <ProductList
//                     products={
//                         filteredProducts.length != 0 ? filteredProducts : ''
//                     }
//                 />
//             </div>
//         </div>
//     );
// }
