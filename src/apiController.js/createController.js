import { toast } from 'react-toastify';

const apiURL = `http://localhost:3009`;

const apiEndpoints = {
  auth: `api/auth`,
};

const createData = async (inputParams, apiEndpoint) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // username: userName,
      // email: userEmail,
      // password: userPass,
      ...inputParams,
    }),
  };
  try {
    const response = await fetch(`${apiURL}/${apiEndpoint}`, requestOptions);

    const data = await response.json();

    // printResponse(await data);

    if (await data) {
      return data?.response;
    }
    // if (data?.response?.status === 'Ok') {
    //   toast(`${data?.response?.messages}`);
    // } else toast(`${data?.response?.status}`);
  } catch (error) {
    printResponse(await error);
    return {
      status: 'Failed.',
      message: 'An Unknown Error Occurred on client side',
    };

    // toast('Something Wrong Or Duplicate Email !!');
  }
};

const createController = {
  sayHi: (param) => toast('Hello ' + param),

  signUp: async (inputParams) =>
    await createData(inputParams, apiEndpoints?.auth),
};

const printResponse = (data, ...rest) => {
  console.log(`🔥 ~returned response : `, data);
};
export default createController;
