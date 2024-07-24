
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an API call with setTimeout
        setTimeout(() => {
            // Simulating a successful response
            const response = {
                status: 200,
                data: { message: "Success" }
            };
            resolve(response);
            
            // Simulating an error response
            // const error = new Error("API request failed");
            // reject(error);
        }, 1000); // Simulating a delay of 1 second
    });
}
