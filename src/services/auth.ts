const baseUrl = "https://fakestoreapi.com";

export const loginUser = () => {
  return fetch("https://api.storerestapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: "marklyan@gmail.com",
      password: "simple_password",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const createUser = async () => {
  return fetch("https://api.storerestapi.com/auth/register", {
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
