import { setUserData } from '../utils';

const apiURL = `http://localhost:3009`;
const apiEndpoints = {
  auth: `api/auth`,
  user: `api/user`,
  book: `api/books`,
  options: `api/options`,
};
const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};
//   const requestOptions = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: userEmail,
//       password: userPass,
//     }),
//   };
//   try {
//     const response = await fetch(
//       "http://localhost:3009/api/user",
//       requestOptions
//     );
const getData = async (inputParams, apiEndpoint) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...inputParams,
    }),
  };
  const requestOptionsNoParams = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(
      `${apiURL}/${apiEndpoint}`,
      inputParams ? requestOptions : requestOptionsNoParams
    );

    const data = await response.json();

    // printResponse(await response);

    if (await data) {
      return data?.response;
    }
    // if (data?.response?.status === 'Ok') {
    //   toast(`${data?.response?.messages}`);
    // } else toast(`${data?.response?.status}`);
  } catch (error) {
    printResponse(await error);
    // return {
    //   status: 'Failed.',
    //   message: 'An Unknown Error Occurred on client side',
    // };

    // toast('Something Wrong Or Duplicate Email !!');
  }
};

const getDataQueryParams = async (inputParams, apiEndpoint) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${apiURL}/${apiEndpoint}/${inputParams}`);

    const data = await response.json();

    printResponse(await data);

    if (await data) {
      return data?.response;
    }
    // if (data?.response?.status === 'Ok') {
    //   toast(`${data?.response?.messages}`);
    // } else toast(`${data?.response?.status}`);
  } catch (error) {
    printResponse(await error);
    // return {
    //   status: 'Failed.',
    //   message: 'An Unknown Error Occurred on client side',
    // };

    // toast('Something Wrong Or Duplicate Email !!');
  }
};
const login = async (inputParams, apiEndpoint) => {
  try {
    // http://localhost:3009/api/user/test@gmail.com/test1234
    const response = await fetch(
      `${apiURL}/${apiEndpoint}/${inputParams?.email}/${inputParams?.password}`,
      requestOptions
    );

    const data = await response.json();

    printResponse(await data);
    if ((await data?.response?.status) == 200) {
      setUserData(data?.response?.userData);
    }
    return await data?.response;
  } catch (error) {
    // printResponse(await error, 'err');
    return {
      status: 'Failed.',
      message: 'An Unknown Error Occurred on client side',
    };

    // toast('Something Wrong Or Duplicate Email !!');
  }
};

const getController = {
  sayHi: (param) => alert('Hello ' + param),

  signIn: async (inputParams) => await login(inputParams, apiEndpoints?.user),

  getBooks: async () => await getData(false, apiEndpoints?.book),

  getOptions: async () => await getData(false, apiEndpoints?.options),

  getSingleBookInfo: async (bookID) =>
    await getDataQueryParams(bookID, apiEndpoints?.book),
};

const printResponse = (data, ...rest) => {
  console.log(`🔥 ~returned response : `, data);
};
export default getController;
