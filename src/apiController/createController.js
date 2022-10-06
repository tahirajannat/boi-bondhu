import { toast } from 'react-toastify';

const apiURL = `http://localhost:3009`;

const apiEndpoints = {
  auth: `api/auth`,
  book: `api/books`,
};

const createData = async (inputParams, apiEndpoint, uploadType) => {
  console.log(
    `🔥 ~ file: createController.js ~ line 11 ~ createData ~ inputParams`,
    [...inputParams]
  );
  // uploadType = 'file' / 'text'
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...inputParams,
    }),
  };

  const requestOptionsNoHeader = {
    method: 'POST',
    body: inputParams,
  };
  try {
    const response = await fetch(
      `${apiURL}/${apiEndpoint}`,
      uploadType === 'text' ? requestOptions : requestOptionsNoHeader
    );
    const data = await response.json();
    if (await data) {
      // printResponse(await data);

      return data?.response;
    }
  } catch (error) {
    printResponse(await error, true);
    return {
      status: 'Failed.',
      message: 'An Unknown Error Has Been Occurred.',
    };
  }
};

const createController = {
  sayHi: (param) => toast('Hello ' + param),

  signUp: async (inputParams) =>
    await createData(inputParams, apiEndpoints?.auth),

  uploadBook: async (inputParams) =>
    await createData(inputParams, apiEndpoints?.book),
};

const printResponse = (data, isError, ...rest) => {
  isError
    ? console.log(`🥵 ERROR : `, data)
    : console.log(`🔥 Get Response : `, data);
};
export default createController;
