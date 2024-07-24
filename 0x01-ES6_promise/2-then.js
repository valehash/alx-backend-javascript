function handleResponseFromAPI(promise) {
        promise.then((promise) => {

                console.log('Got a response from the API');
                return {
                        status: 200,
                        body: 'success',
                };
        })
        promise.catch((promise) => {
                console.log("GOt a response from the API")
                return new Error();
        })
}

export default handleResponseFromAPI;