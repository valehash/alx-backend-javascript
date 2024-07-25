export default function uploadphoto(fileName) {
    return new Promise((respolve, reject) => { 
        const response = ` ${fileName} cannot be processed`
        reject(new Error(response));
    })
}