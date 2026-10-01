// function getDataFromInternet(successCallback){
//   console.log('Getting data from Internet');
//   successCallback('Shaikh Ashraf Aslam');
// }
// getDataFromInternet((data)=>{
//  console.log(`Data is Fetched ${data}`);
// });

function getDataFromInternetUsingPromises(){
    let  promise = new Promise((resolve,reject)=>{
 for(let i=0; i<100;i++) console.log(i);
//  resolve("Shaikh Ashraf Aslam");
 reject("Internet Timeout");

    });
    return promise;
}
getDataFromInternetUsingPromises()
.then((data)=>{
    console.log(`Data is Fetched ${data}`);
})
.catch((error)=>{
    console.log(`Error: ${error}`);
})
.finally(()=>{
    console.log('Finally block');
});