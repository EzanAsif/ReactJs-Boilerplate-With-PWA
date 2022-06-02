export const getUserDataFunc = async () => {
  try {
    let value;
    value = await localStorage.getItem("token");
    if (value) return value;
  } catch (e) {
    console.log(e);
  }
};

export const setUserDataFunc = async (v) => {
  await localStorage.setItem("token", JSON.stringify(v));
  let userToken = await localStorage.getItem("token");
  return userToken;
};
