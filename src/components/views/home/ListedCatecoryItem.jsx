import { useState } from 'react';

import { books } from '../../../utility/data';
import BookCard from '../../common/BookCard';
import Tab from '../../tab/Tab';
import Tabs from '../../tab/Tabs';

export default function ListedCatecoryItem() {
    const [active, setActive] = useState(0);

    // useEffect(() => {
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'X-WP-Nonce': wm_admin_view_object.rest_nonce,
    //     };

    //     axios.get(url, { headers }).then((response) => {
    //         setPrevSettings(response.data.data);
    //     });
    // }, []);

    // const handleReset = (e) => {
    //     e.preventDefault();
    //     dispatch(getWishlistSettings(prevSettings));
    // };

    const handleChange = (newActive) => setActive(newActive);
    return (
        <div className='text-left'>
            <Tabs active={active} onChange={handleChange} displayButton={true}>
                <Tab title='Exchange'>
                    <div className='my-10 grid grid-cols-4 gap-6 text-center'>
                        <BookCard items={books} />
                    </div>
                </Tab>
                <Tab title='Borrow'></Tab>
                <Tab title='Lend'></Tab>
                <Tab title='Buy & Sell'></Tab>
            </Tabs>
        </div>
    );
}
