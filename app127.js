function savetoDb(data) {
     return new Promise((resolve, reject) => {
     let internetSpeed  = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure: weak connection");
        }
     });
} 
        




 savetoDb("shreyas pagar")
 .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
})
.then((result) => {
    console,log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("Sonu");
})
.then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
});    
