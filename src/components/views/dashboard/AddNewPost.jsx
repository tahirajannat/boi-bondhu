import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorConvertToHTML from '../../common/EditorConvertToHTML';

export default function AddNewPost() {
    return (
        <form>
            <div className='space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-xl font-semibold leading-7 text-gray-900'>
                        Add New Post
                    </h2>
                    {/* <p className='mt-1 text-sm leading-6 text-gray-600'>
                        This information will be displayed publicly so be
                        careful what you share.
                    </p> */}

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='username'
                                className='block text-base font-medium leading-6 text-gray-900'
                            >
                                Post Title
                            </label>
                            <div className='mt-2'>
                                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                                    {/* <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'></span> */}
                                    <input
                                        type='text'
                                        name='username'
                                        id='username'
                                        autoComplete='username'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-6'
                                        placeholder='  This is a post title'
                                    />
                                </div>
                            </div>
                            <div className='flex gap-20 items-center'>
                                <span className='flex select-none items-center  text-gray-500 sm:text-sm'>
                                    https://www.boibondhu.com/post-title
                                </span>
                                <div className='mt-2 flex items-center gap-x-3'>
                                    <button
                                        type='button'
                                        className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-full'>
                            <label
                                htmlFor='about'
                                className='block text-base font-medium leading-6 text-gray-900'
                            >
                                Post Description
                            </label>
                            <div className='my-10'>
                                <EditorConvertToHTML height={500} />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full'>
                        <label
                            htmlFor='about'
                            className='block text-base font-medium leading-6 text-gray-900'
                        >
                            Post Excerpt
                        </label>
                        <div className='my-4'>
                            <EditorConvertToHTML height={200} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button
                    type='button'
                    className='text-sm font-semibold leading-6 text-gray-900'
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    Save
                </button>
            </div>
        </form>
    );
}
