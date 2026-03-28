export const getAuthHeader = () => {
  const token = localStorage.getItem("superadmintoken");

  return {
    Authorization: `Bearer ${token}`,
  };
};


export const getCustomerAuthHeader = () => {
  const token = localStorage.getItem("customerToken");

  return {
    Authorization: `Bearer ${token}`,
  };
};