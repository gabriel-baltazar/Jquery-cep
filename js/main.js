
function consultaCep(){
    let cep = document.getElementById("cep").value;
    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro); //jquery
            document.getElementById("bairro").innerHTML =response.bairro; //javaScript
            document.getElementById("localidade").innerHTML =response.localidade; //javaScript
            document.getElementById("uf").innerHTML =response.uf; //javaScript
            document.getElementById("ibge").innerHTML =response.ibge; //javaScript
            document.getElementById("ddd").innerHTML =response.ddd; //javaScript

        }
    })
}