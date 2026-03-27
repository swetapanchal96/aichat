export const getAuthHeader = () => {
  const token = localStorage.getItem("superadmintoken");

  return {
    Authorization: `Bearer ${token}`,
  };
};