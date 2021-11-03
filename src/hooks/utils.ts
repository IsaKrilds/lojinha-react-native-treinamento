export const successObject = (response: any) => {
  return {
    success: true,
    status: response.status,
    data: response.data,
    headers: response.headers,
  };
};

export const errorObject = (error: any) => {
  return {
    success: false,
    error: error.request._response,
    status: error.request.status,
  };
};
