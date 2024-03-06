import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload]).then((values) => {
    const result = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        result.push({ status: val.status, value: val.value });
      } else {
        result.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return result;
  });
}
