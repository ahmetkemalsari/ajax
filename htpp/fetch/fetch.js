function getTextFile(){
        fetch("employees.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

        
    }
getTextFile();
