
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};


export const saveUser = (user) => {
  const users = getUsers();
  const exists = users.find(u => u.email === user.email);
  if (exists) return false;
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};


export const authenticate = (email, password) => {
  const users = getUsers();
  return users.find(u => u.email === email && u.password === password);
};
