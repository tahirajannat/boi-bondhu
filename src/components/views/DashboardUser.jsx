import React, { useState } from 'react';
import PostBook from './dashboard/PostBook';

export default function DashboardUser() {
    const [image, setImage] = useState({ preview: '', raw: '' });

    const handleChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            });
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const htmlFormData = new htmlFormData();
        htmlFormData.append('image', image.raw);

        await fetch('YOUR_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/htmlForm-data',
            },
            body: htmlFormData,
        });
    };

    return (
        <div className='container mx-auto  pt-6 grid grid-cols-12'>
            <div className='col-span-8'>
                <PostBook />
            </div>
            <div className='col-span-4 bg-white  shadow-lg border'>
                <div className='text-left mx-8 py-4'>
                    <label>Published Date</label>
                    <br />
                    <input
                        type='date'
                        className=' text-red-300 border border-red-300 my-4'
                    />
                </div>
                <div className='block border mx-8 py-4'>
                    <label htmlhtmlFor='upload-button'>
                        {image.preview ? (
                            <>
                                <div className='mx-8 border border-red-100'>
                                    <img
                                        className='block h-56 w-72 object-contain p-6 mx-auto border-2 border-red-200'
                                        src={image.preview}
                                        alt='dummy'
                                        width='300'
                                        height='150'
                                    />
                                </div>
                                <h5 className='bg-black text-white mx-8 my-4 px-8 py-2 rounded-md mb-6 hover:shadow-lg'>
                                    Upload your photo
                                    <input
                                        className='w-full'
                                        type='file'
                                        id='upload-button'
                                        style={{ display: 'none' }}
                                        onChange={handleChange}
                                    />
                                </h5>
                            </>
                        ) : (
                            <>
                                <div className='mx-8 border border-red-100'>
                                    <img
                                        className='block h-56  w-72 object-contain p-6 mx-auto border-2 border-red-200'
                                        src='https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4'
                                        alt=''
                                    />
                                </div>
                                <h5 className='bg-black text-white mx-8 my-4 px-8 py-2 rounded-md mb-6 hover:shadow-lg'>
                                    Upload your photo
                                    <input
                                        className='w-full'
                                        type='file'
                                        id='upload-button'
                                        style={{ display: 'none' }}
                                        onChange={handleChange}
                                    />
                                </h5>
                                {/* <button
                                    onChange={handleChange}
                                    className='bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg'
                                >
                                    Upload
                                    <input
                                        type='file'
                                        id='upload-button'
                                        style={{ display: 'none' }}
                                        onChange={handleChange}
                                    />
                                </button> */}
                            </>
                        )}
                    </label>
                </div>
                {/* <h5 className='bg-black text-white mx-8 my-4 px-8 py-2 rounded-md mb-6 hover:shadow-lg'>
                    Upload your photo
                    <input
                        className='w-full'
                        type='file'
                        id='upload-button'
                        style={{ display: 'none' }}
                        onChange={handleChange}
                    />
                </h5> */}
                {/* 
                <input
                    type='file'
                    id='upload-button'
                    // style={{ display: 'none' }}
                    onChange={handleChange}
                />
                <br /> */}
                {/* <button
                    onClick={handleUpload}
                    className='bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg'
                >
                    Upload
                </button> */}
            </div>
        </div>
    );
}
