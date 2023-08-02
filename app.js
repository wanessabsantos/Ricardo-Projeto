nomeEstudantesArray = [];

    function submit() {
        var displayEstudantesArray = [];

        for ( var j =  1; j <= 4; j++)
       
        {
       var nomeEstudantes = document.getElementById("nome_aluno_"+j).value;
       console.log(nomeEstudantes);
       nomeEstudantesArray.push(nomeEstudantes);
        }
       console.log(nomeEstudantesArray);
       
       var lenghtNomeEstudanteArray = nomeEstudantesArray.length;
       console.log(lenghtNomeEstudanteArray);
       
       for ( var k = 0; k < lenghtNomeEstudanteArray; k++)
       {
           displayEstudantesArray.push("<h4>Nome -"+nomeEstudantesArray[k] + "</h4>");
           console.log(displayEstudantesArray);
       }
       console.log(displayEstudantesArray);
       
       var removeAspas = displayEstudantesArray.join(" ");
       console.log(removeAspas);
       document.getElementById("displayNameSemAspas").innerHTML = removeAspas;

    }

    function sorting() {
        nomeEstudantesArray.sort();
        console.log(nomeEstudantesArray);
    }