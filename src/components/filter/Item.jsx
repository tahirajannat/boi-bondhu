import React from 'react';

// React Component to display individual item
const Item = ({
    name,
    category,
    author,
    image,
    published,
    title,
    description,
    tag,
    area,
}) => (
    <div className='item-container'>
        <div>
            <span className='item-label'>Name:</span>
            {name}
        </div>
        <div>
            <span className='item-label'>Category:</span>
            {category}
        </div>
    </div>
);

export default Item;
