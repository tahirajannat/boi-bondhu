import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Page from '../../pages/Page';
import PageLeft from '../../pages/PageLeft';
import PageRight from '../../pages/PageRight';
import AddNewPost from './AddNewPost';

export default function Posts() {
    return (
        <Page classes='!gap-x-20'>
            <PageLeft>
                <AddNewPost />
            </PageLeft>
            <PageRight>
                <div className='col-span-full'>
                    <label
                        htmlFor='photo'
                        className='block text-sm font-medium leading-6 text-gray-900'
                    >
                        Photo
                    </label>
                    <div className='mt-2 flex items-center gap-x-3'>
                        <UserCircleIcon
                            className='h-12 w-12 text-gray-300'
                            aria-hidden='true'
                        />
                        <button
                            type='button'
                            className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        >
                            Change
                        </button>
                    </div>
                </div>
                <div className='border-b border-gray-900/10 pb-4 my-4'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Author
                    </h2>

                    <div className='flex items-center gap-x-3'>
                        <input
                            id='push-email'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                        <label
                            htmlFor='push-email'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Tahira
                        </label>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <input
                            id='push-nothing'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                        <label
                            htmlFor='push-nothing'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Salman
                        </label>
                    </div>
                </div>
                <div className='border-b border-gray-900/10 pb-4 my-4'>
                    <div className='sm:col-span-3'>
                        <label
                            htmlFor='first-name'
                            className='block text-sm font-medium leading-6 text-gray-900'
                        >
                            Tags
                        </label>
                        <div className='mt-4'>
                            <div className='mt-4 space-y-3'>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='comments'
                                            name='comments'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='comments'
                                            className='font-medium text-gray-900'
                                        >
                                            Comments
                                        </label>
                                    </div>
                                </div>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='candidates'
                                            name='candidates'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='candidates'
                                            className='font-medium text-gray-900'
                                        >
                                            Candidates
                                        </label>
                                    </div>
                                </div>
                                <div className='relative flex gap-x-3'>
                                    <div className='flex h-6 items-center'>
                                        <input
                                            id='offers'
                                            name='offers'
                                            type='checkbox'
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                    </div>
                                    <div className='text-sm leading-6'>
                                        <label
                                            htmlFor='offers'
                                            className='font-medium text-gray-900'
                                        >
                                            Offers
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 flex gap-6'>
                            <div className=' basis-[70%]'>
                                <input
                                    type='text'
                                    name='first-name'
                                    id='first-name'
                                    autoComplete='given-name'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                            <button
                                type='button'
                                className='text-xs font-semibold px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600   '
                            >
                                + Add New
                            </button>
                        </div>
                    </div>
                </div>

                <div className=' pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Categories
                    </h2>

                    <div className='mt-4'>
                        <div className='mt-4 space-y-3'>
                            <div className='relative flex gap-x-3'>
                                <div className='flex h-6 items-center'>
                                    <input
                                        id='comments'
                                        name='comments'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                </div>
                                <div className='text-sm leading-6'>
                                    <label
                                        htmlFor='comments'
                                        className='font-medium text-gray-900'
                                    >
                                        Comments
                                    </label>
                                </div>
                            </div>
                            <div className='relative flex gap-x-3'>
                                <div className='flex h-6 items-center'>
                                    <input
                                        id='candidates'
                                        name='candidates'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                </div>
                                <div className='text-sm leading-6'>
                                    <label
                                        htmlFor='candidates'
                                        className='font-medium text-gray-900'
                                    >
                                        Candidates
                                    </label>
                                </div>
                            </div>
                            <div className='relative flex gap-x-3'>
                                <div className='flex h-6 items-center'>
                                    <input
                                        id='offers'
                                        name='offers'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                </div>
                                <div className='text-sm leading-6'>
                                    <label
                                        htmlFor='offers'
                                        className='font-medium text-gray-900'
                                    >
                                        Offers
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-full'>
                    <label
                        htmlFor='cover-photo'
                        className='block text-base font-medium leading-6 text-gray-900'
                    >
                        Feature Image
                    </label>
                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                        <div className='text-center'>
                            <PhotoIcon
                                className='mx-auto h-12 w-12 text-gray-300'
                                aria-hidden='true'
                            />
                            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                <label
                                    htmlFor='file-upload'
                                    className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                                >
                                    <span>Upload a file</span>
                                    <input
                                        id='file-upload'
                                        name='file-upload'
                                        type='file'
                                        className='sr-only'
                                    />
                                </label>
                                <p className='pl-1'>or drag and drop</p>
                            </div>
                            <p className='text-xs leading-5 text-gray-600'>
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
            </PageRight>
        </Page>
    );
}
