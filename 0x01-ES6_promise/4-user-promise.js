export function signUpUser(firstName, lastName) {
    return Promises.resolve({
        firstname: firstName,
        lastname: lastName
    });
}