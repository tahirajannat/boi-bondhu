import React, { useState } from 'react';

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
    console.log(
      `🔥 ~ file: DashboardUser.js ~ line 32 ~ handleUpload ~ e`,
      e.target
    );

    const formData = new FormData();
    formData.append('image', image.raw);
    console.log(
      `🔥 ~ file: DashboardUser.js ~ line 18 ~ handleUpload ~ formData`,
      e.target
    );

    // await fetch("YOUR_URL", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });
  };

  const handleSubmit = (event) => {
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
    console.log(
      `🔥 ~ file: DashboardUser.js ~ line 38 ~ handleSubmit ~ data`,
      data
    );
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    // data.set('username', data.get('username').toUpperCase());

    // Do your Axios stuff here
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div className='container mx-auto px-44  my-10 '>
      <div className='bg-white  shadow-lg border'>
        <div className='grid grid-cols-12 gap-2 py-6'>
          <div className='col-span-5 block border mx-8 py-4'>
            <label htmlFor='upload-button'>
              {image.preview ? (
                <img src={image.preview} alt='dummy' width='300' height='150' />
              ) : (
                <>
                  <div className='mx-8 border border-red-100'>
                    <img
                      class='block mx-auto border-2 border-red-200'
                      src='https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4'
                      alt=''
                    />
                  </div>
                  <h5 className='text-center my-2'>Upload your photo</h5>
                </>
              )}
            </label>
          </div>
          <div className='col-span-7 text-left pr-8'>
            <form>
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
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Flowbite'
                    required=''
                  />
                </div>
                <div>
                  <label
                    for='category'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Book Category
                  </label>
                  <input
                    type='text'
                    id='category'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Flowbite'
                    required=''
                  />
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
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>Choose Your Area</option>
                    <option value='MR'>Mirpur</option>
                    <option value='Dh'>Dhanmondi</option>
                    <option value='MH'>Mohammadpur</option>
                    <option value='BH'>Bashundhora</option>
                    <option value='RM'>Rampura</option>
                    <option value='BD'>Badda</option>
                    <option value='NL'>Nilkhet</option>
                    <option value='AG'>Agargao</option>
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
                    rows='3'
                    placeholder='Your message'
                  ></textarea>
                </div>
              </div>

              <input
                type='file'
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleChange}
              />
              <br />
              <button
                onClick={handleUpload}
                className='bg-black text-white px-8 py-2 rounded-md mb-6 hover:shadow-lg'
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </form>
  );
}

// <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Enter username</label>
//         <input id="username" name="username" type="text" />
//         <button>Send data!</button>
//       </form>
