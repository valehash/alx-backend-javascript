import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
    var photo_body;
    uploadPhoto()
        .then((res, rej) => {
            photo_body = res.body;
            return createUser();        
        })
        .then((res, rej) => {
            console.log(` ${photo_body}  ${res.firstName} ${res.lastName}`)
        })
        .catch(err => {
            console.error('Signup system offline', err);
        });
}
