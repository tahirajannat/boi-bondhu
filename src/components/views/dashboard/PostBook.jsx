import React from 'react';
import { preferences, tags } from '../../../utility/data';
import Input from '../../common/Input';
import Select from '../../common/Select';
import DescriptionBox from './DescriptionBox';

const PostBook = () => {
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

                    <Input
                        className={' w-full'}
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
