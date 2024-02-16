const useMainLayoutModel = () => {
  try {
    return {
      footer: `justCoder ${new Date().getFullYear()}`,
      footerLink: "http://www.justcoder.co.uk",
    };
  } catch (error) {
    return error;
  }
};

export default useMainLayoutModel;
