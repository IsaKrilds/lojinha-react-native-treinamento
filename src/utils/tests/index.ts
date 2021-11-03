const fakeSuccessFetch = (data: any) =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data,
        }),
      50,
    );
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {fakeSuccessFetch};
