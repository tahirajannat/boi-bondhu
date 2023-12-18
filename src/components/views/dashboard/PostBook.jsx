import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../../redux/reducers/productShopSlice';
import { preferences, tags } from '../../../utility/data';
import { dhakaCity } from '../../../utility/dhakaCity';
import Input from '../../common/Input';
import Select from '../../common/Select';
import SingleSelect from '../../common/SingleSelect';
import DescriptionBox from './DescriptionBox';

const PostBook = () => {
    const dispatch = useDispatch();
    const productShop = useSelector(selectProductShop);
    console.log('first category', productShop.allBooks.category);
    const [products, setProducts] = useState(productShop.allBooks);

    const categories = products.map((product) => product.category);
    console.log('all categories', categories);
    // const filterBuySell = (buySell, categories) => {
    //     let filterBuySell = buySell;
    //     if (categories.length > 0) {
    //         filterBuySell = filterBuySell.filter(
    //             (book) => book.category === book.category
    //         );
    //     }

    //     return filterBuySell;
    // };
    // useEffect(() => {
    //     setBuySell(filterBuySell(productShop.allBooks, categories));
    // }, [productShop.allBooks]);
    // console.log('category', buySell);

    const mappedOptionList = dhakaCity.map((option) => ({
        value: option.id, // Use the correct property here (e.g., option.value)
        label: option.area_name.bn ? option.area_name.bn : option.area_name.bn,
    }));

    return (
        <div>
            <div className='py-4 px-16'>
                <label for='name' className='text-sm text-gray-600'>
                    Book Title
                </label>

                <Input
                    className={'wm-block wm-w-72 sm:wm-w-[15.5rem] xl:wm-w-72'}
                    placeholder={'Enter Book Title'}
                    name='Enter Book Title'
                    type={'text'}
                    required={true}
                    value={''}
                    // onChange={}
                />
            </div>
            <div className='py-4 px-16'>
                <label for='name' className='text-sm text-gray-600'>
                    Author Name
                </label>

                <Input
                    className={' wm-w-full'}
                    placeholder={'Enter Author Name'}
                    name='title'
                    type={'text'}
                    required={true}
                    value={''}
                    // onChange={}
                />
            </div>

            <div className='py-4 px-16 flex justify-between gap-6'>
                <div className='w-full'>
                    <label for='name' className='text-sm text-gray-600'>
                        Area
                    </label>

                    {/* <Input
                        className={' w-full'}
                        placeholder={'Enter your Area'}
                        name='title'
                        type={'text'}
                        required={true}
                        value={''}
                        // onChange={}
                    /> */}
                    {/* <Select title={'Area'} items={dhakaCity} /> */}
                    <SingleSelect optionList={mappedOptionList} />
                    {/* <SearchSelect
                        loadOptions={mappedOptionList}
                        option={mappedOptionList}
                        // value={}
                        onChange={handleProductSelect}
                    /> */}
                </div>
                <div className='w-full'>
                    <label for='name' className='text-sm text-gray-600'>
                        Category
                    </label>

                    <Input
                        className={'wm-block wm-w-auto'}
                        placeholder={'Enter your Area'}
                        name='title'
                        type={'text'}
                        required={true}
                        value={''}
                        // onChange={}
                    />
                </div>
                <div className='w-full'>
                    <label for='name' className='text-sm text-gray-600'>
                        Tag
                    </label>

                    <Input
                        className={
                            'wm-block wm-w-72 sm:wm-w-[15.5rem] xl:wm-w-72'
                        }
                        placeholder={'Enter tag'}
                        name='title'
                        type={'text'}
                        required={true}
                        value={''}
                        // onChange={}
                    />
                </div>
            </div>
            <div className='py-4 px-16 flex justify-between gap-6'>
                <div className='py-4 w-full'>
                    <Select title={'Tag'} items={tags} />
                </div>
                <div className='py-4  w-full'>
                    <Select title={'Preference'} items={preferences} />
                </div>
            </div>

            <div className='py-4 px-16'>
                <DescriptionBox />
            </div>
        </div>
    );
};

export default PostBook;
