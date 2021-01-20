class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        this.xhr.open("GET",url); // bağlantı açık

        this.xhr.onload = () =>  {
          

            if(this.xhr.status == 200){
                callback(null,this.xhr.responseText); // istek bitti
            }else{
                // hata durumu
                callback("bir hata oluştu kardeş nalet olası kodlarına bir göz atsan iyi olur ",null);
            }
        }
        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // Json Verisi Göndereceğiz
        
        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
               
                callback(null,this.xhr.responseText);
            }else{
               
                callback("POST Request : Bir Hata Oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("PUT request : Hata Oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("Delete request : Hata Oluştu");
            }
        }
        this.xhr.send();
    }

}
const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        //hata
    }
});
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:13,title:"opsss"}, function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         // hata durumu
//     }
// });

// const request1 = new Request();
// request1.post("https://jsonplaceholder.typicode.com/albums",{userId:3,title:"Root"},function(err,response){
//     if(err === null){
//           //  başarılı
//                 console.log(response);
//             }else{
//            //     hata durumu
//             }
// });
// request.get("https://jsonplaceholder.typicode.com/albums",function (err,respose){
//     if(err === null){
//       //  başarılı
//         console.log(respose);
//     }else{
//       //  hata durumu
//     }
// });
