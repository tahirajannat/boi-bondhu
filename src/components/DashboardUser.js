import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import createController from '../apiController/createController';
import getController from '../apiController/getController';
import { UseUser } from '../contexts/AuthContext';

export default function DashboardUser() {
  const { user } = UseUser();
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [inputOptions, setInputOptions] = useState({
    areas: null,
    category: null,
  });
  const [inputtedFormData, setInputtedFormData] = React.useState(null);

  useEffect(() => {
    getInputOptions();
  }, []);

  const getInputOptions = async (e) => {
    const response = await getController.getOptions();

    if ((await response?.status) == 200) {
      response?.data?.length > 0 &&
        setInputOptions({
          areas: JSON.parse(response?.data[0]?.areas),
          category: JSON.parse(response?.data[0]?.category),
        });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleInputChange = (e) => {
    setInputtedFormData({
      ...inputtedFormData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const usersBookInfo = {
      uploadedBy: user?.userID,
      bookTitle: inputtedFormData?.bookTitle,
      bookAuthor: inputtedFormData?.bookAuthor,
      bookDesc: inputtedFormData?.description,
      bookCat: inputtedFormData?.category,
      bookLocation: inputtedFormData?.area,
      // images: image.raw,
      // others: {
      //   extraData: inputtedFormData?.bookTitle,
      // },
    };

    let formData = new FormData();
    formData.append('image', image?.raw);
    formData.append('uploadedBy', user?.userID);
    formData.append('bookTitle', inputtedFormData?.bookTitle);
    formData.append('bookAuthor', inputtedFormData?.bookAuthor);
    formData.append('bookDesc', inputtedFormData?.description);
    formData.append('bookCat', inputtedFormData?.category);
    formData.append('bookLocation', inputtedFormData?.area);

    // formData.append('usersBookInfo', JSON.stringify(usersBookInfo));

    // console.log(
    //   `🔥 ~ file: DashboardUser.js ~ line 47 ~ handleSubmit ~ formData`,
    //   [...formData]
    // );

    // const response = await fetch('http://localhost:3009/api/books', {
    //   method: 'POST',
    //   body: formData,
    // });
    const response = await createController.uploadBook(formData);
    if (response?.status === 200) {
      // setImage({
      //   preview: '',
      //   raw: '',
      // });
      // setInputtedFormData('');
      toast(response?.message);
    } else {
      toast(`${response?.errorMessage}`);
    }
  };
  //
  console.log(
    `🔥 ~ file: DashboardUser.js ~ line 12 ~ DashboardUser ~ inputOptions`,
    inputOptions
  );

  return (
    <div className='container mx-auto px-44  my-10 '>
      <div className='bg-white  shadow-lg border'>
        <div className='grid grid-cols-12 gap-2 py-6'>
          <div className='col-span-5 block border mx-8 py-4'>
            <label htmlFor='upload-button'>
              {image.preview ? (
                <img
                  src={image.preview}
                  alt='dummy'
                  width='300'
                  height='150'
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <>
                  <div
                    className='mx-8 border border-red-100'
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      class='block mx-auto border-2 border-red-200'
                      src='https://png2.cleanpng.com/sh/c39825bce5d813d81684355bf951ca4a/L0KzQYi4UcI5N5IAUJGAYUHnRLe3VsU3P2gATpC8OEK7RIO8UME2OWI9T6I7MUS2RYW5TwBvbz==/5a1d4f06567796.3828425015118702143542.png'
                      alt=''
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <h5
                    className='bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg text-center my-2'
                    style={{ cursor: 'pointer' }}
                  >
                    Upload book image
                  </h5>
                </>
              )}
            </label>
          </div>
          <div className='col-span-7 text-left pr-8'>
            <form onSubmit={handleSubmit}>
              {/* <form onSubmit={handleSubmit}> */}
              {/* <form> */}
              <div class='grid gap-6 mb-6 md:grid-cols-2'>
                <div>
                  <label
                    for='company'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Book Title
                  </label>
                  <input
                    type='text'
                    id='bookTitle'
                    name='bookTitle'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Flowbite'
                    required=''
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    for='company'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Book Author
                  </label>
                  <input
                    type='text'
                    id='bookAuthor'
                    name='bookAuthor'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Rabindranath'
                    required=''
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    for='area'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Book Category
                  </label>
                  <select
                    id='category'
                    name='category'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={handleInputChange}
                  >
                    <option selected>Choose Your Category</option>
                    {inputOptions?.category &&
                      inputOptions?.category.map((categoryName) => {
                        return (
                          <option value={`${categoryName}`}>
                            {categoryName}
                          </option>
                        );
                      })}
                  </select>
                </div>
                {/* <div>
                  <label
                    for='preference'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Select Preference
                  </label>
                  <select
                    id='preference'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>Choose Your Preference</option>
                    <option value='Borrow'>Borrow</option>
                    <option value='Exchange'>Exchange</option>
                    <option value='Lend'>Lend</option>
                  </select>
                </div> */}
                <div>
                  <label
                    for='area'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Select Area
                  </label>
                  <select
                    id='area'
                    name='area'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={handleInputChange}
                  >
                    <option selected>Choose Your Area</option>
                    {/* <option selected>Choose Your Area</option>
                    <option value='Mirpu'>Mirpur</option>
                    <option value='Dhanmondi'>Dhanmondi</option>
                    <option value='Mohammadpur'>Mohammadpur</option>
                    <option value='Bashundhora'>Bashundhora</option>
                    <option value='Rampu'>Rampura</option>
                    <option value='Badda'>Badda</option>
                    <option value='Nilkhet'>Nilkhet</option>
                    <option value='Agargao'>Agargao</option> */}
                    {inputOptions?.areas &&
                      inputOptions?.areas.map((areaName) => {
                        return (
                          <option value={`${areaName}`}>{areaName}</option>
                        );
                      })}
                  </select>
                </div>
                {/* <div>
                  <label
                    for='condition'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Book Condition
                  </label>
                  <input
                    type='text'
                    id='condition'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Book Condition'
                    required=''
                  />
                </div>
                <div>
                  <label
                    for='condition'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Available Date
                  </label>
                  <input
                    type='date'
                    id='date'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Book Condition'
                    required=''
                  />
                </div> */}

                <div class='col-span-2'>
                  <label
                    for='description'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Description
                  </label>
                  <textarea
                    class=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='description'
                    name='description'
                    rows='3'
                    placeholder='Your message'
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <input
                type='file'
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              <br />
              <button
                // onClick={handleUpload}
                type='submit'
                className='bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg'
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
