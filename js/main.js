
function consultaCep(){
    var cep = document.getElementById("cep").value;
    $.ajax({
        url:`https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro); //ajax
            $("#bairro").html(response.bairro); //ajax
            $("#localidade").html(response.localidade); //ajax
            $("#uf").html(response.uf); //ajax
            $("#tituloCep").html("CEP: " + response.cep); //ajax
            $(".cep").show();
            
           // document.getElementById("bairro").innerHTML =response.bairro; //javaScript
           // document.getElementById("localidade").innerHTML =response.localidade; //javaScript
           // document.getElementById("uf").innerHTML =response.uf; //javaScript
           // document.getElementById("ibge").innerHTML =response.ibge; //javaScript
           // document.getElementById("ddd").innerHTML =response.ddd; //javaScript

        }
    })
}

$(function(){
    $(".cep").hide();
});