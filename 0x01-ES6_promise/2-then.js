export default function handleResponseFromAPI(promise) {
        promise.then((promise) => {
                console.log('Got a response from the API');
        })
        promise.catch((promise) => {
                console.log("GOt a response from the API")
        })
}
