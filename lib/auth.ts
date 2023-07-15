export const getResetPasswordToken = () => {
  if (!window) return;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('token');
};
