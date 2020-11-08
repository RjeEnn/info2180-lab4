document.addEventListener('DOMContentLoaded', function() {
    var searchBtn = document.getElementById("search");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                searchBtn.onclick = function(event) {
                    var txt = httpRequest.responseText;
                    alert(txt);
                };
            } else {
                alert(httpRequest.status);
            }
        }
    };

    httpRequest.open('GET', 'http://localhost/info2180-lab4/superheroes.php');
    httpRequest.send();

})