import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
    const photo_body = uploadPhoto();
    const user_body = createUser();

    return Promise.all([photo_body, user_body]).then((res) => {
        console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
        .catch(() => {console.log('Signup system offline'); })
};  