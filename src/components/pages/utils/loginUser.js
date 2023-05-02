export const loginUser = async (user) => {
  try {
    const data = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    });
    return data;
  } catch (error) {
    return error;
  }
};
