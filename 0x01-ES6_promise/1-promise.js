function getResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        // Simulating a successful response
        if (success === true) {
            const response = {
                status: 200,
                body: { message: "Success" }
            };
            resolve(response);
       }else{
                const response = "The fake API is not working currently";
                reject(new Error(response));
            }
            });
        } 
export default function getResponseFromAPI()