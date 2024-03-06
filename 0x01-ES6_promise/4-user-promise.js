export default function signUpUser(fisrtName, lastName) {
  return Promise.resolve({
    firstName: '${firstName}',
    lastName: '${lastName}',
  });
}
