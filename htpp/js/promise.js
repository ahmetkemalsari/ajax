function denemePromise(deger){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof deger === "number"){
                resolve(deger + 2);
            }else{
                reject (new Error("lütfen bir sayı giriniz"));
            }
        },4000)
    });
}

denemePromise(14).then(response => {
    console.log(response);
    return response + "a";
}).then(response =>{
    console.log(response);
}).catch( err => {
    console.error(err);
})