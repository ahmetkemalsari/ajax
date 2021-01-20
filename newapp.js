document.getElementById("change").addEventListener("click",change);

function change(e){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");
    xhr.onload = function(){
        if(this.status){
           const response = JSON.parse(this.responseText);
           const amount = Number(document.getElementById("amount").value);
           rate = response.rates.TRY;
           if(amount != ""){
            document.getElementById("tl").value = rate * amount;
           }
        }
    }

    xhr.send();

}