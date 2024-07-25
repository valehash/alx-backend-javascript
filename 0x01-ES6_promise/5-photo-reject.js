export default function uploadphoto(fileName) {
    return new Promise((rej) => { 
        const response = ` ${fileName} cannot be processed`
        rej(response)
    })
}