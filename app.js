document.addEventListener('DOMContentLoaded', function() {
    var searchBtn = document.getElementById("search");
    var resultSec = document.getElementById("result");
    var input = document.getElementById("field");

    var httpRequest = new XMLHttpRequest();

    searchBtn.onclick = function(event) {
        event.preventDefault();
        var url = `http://localhost/info2180-lab4/superheroes.php?query=${input.value}`;
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    resultSec.innerHTML = "";
                    try {
                        var res = JSON.parse(httpRequest.response);
                    }
                    catch(err) {
                        resultSec.innerHTML = "Superhero not found";
                    }
                    if(input.value == "") {
                        li = "";
                        for(var x = 0; x < res.length; x++) {
                            li += "<li>" + res[x]['alias'] + "</li>";
                        }
                        resultSec.innerHTML = "<ul>" + li + "</ul>";
                    } else {
                        let alias = document.createElement("h3");
                        alias.textContent = res['alias'];
                        let name = document.createElement("h4");
                        name.textContent = 'A.K.A. ' + res['name'];
                        let descrip = document.createElement("p");
                        descrip.textContent = res['biography'];

                        resultSec.appendChild(alias);
                        resultSec.appendChild(name);
                        resultSec.appendChild(descrip);
                    }
                } else {
                    alert("There was a problem with the request.");
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    };    

    

})