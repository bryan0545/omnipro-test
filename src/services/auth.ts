const baseUrl = "https://api.storerestapi.com";

export const loginUser = () => {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: "marklyan@gmail.com",
      password: "simple_password2",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const createUser = async () => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      name: "Alex Pi",
      email: "example@mail.com",
      number: 12025550108,
      password: "Simple12345",
      password_repeat: "Simple12345",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
