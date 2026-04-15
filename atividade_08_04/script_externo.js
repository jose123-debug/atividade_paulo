// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

let form = document.getElementById("id_formulario");


form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let endereco = document.getElementById("id_endereço").value;
    let pizzaSelecionada = document.querySelector('input[name="radio_s"]:checked');
    if (!pizzaSelecionada) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }


    //1ª Opção
    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]');
    let checks_selecionados = "";
    for(let i = 0; i < checkbox.length; i++){
        console.log(checkbox[i]);
        if(checkbox[i].checked){
            checks_selecionados += `${checkbox[i].value} `;
        }
    }
    
    console.log(checks_selecionados)
    
    let resultado = document.getElementById("id_resultado");
    resultado.innerHTML += `<p><strong>Pedido de ${nome}</strong><br>Endereço: ${endereco}<br>Pizza: ${pizzaSelecionada.value}<br>Ingredientes: ${checks_selecionados || 'Nenhum'}</p>`;
    //2ª Opção
    // let checks_selecionados2 = "";
    // let checkbox_outrOpcao = document.querySelectorAll('input[name="checkbox_tech"]:checked');
    
    // for(let i = 0; i < checkbox_outrOpcao.length; i++){
    //     checks_selecionados2 += ` ${checkbox_outrOpcao[i].value} `;
    //     // checks_selecionados += checkbox[i].checked
    // }

    // console.log(checks_selecionados2)

    //Exemplo de como mostrar na tela
   // let bloco = document.createElement("div");
    //bloco.setAttribute("class", "caixa");
    //bloco.innerHTML = 
    //`${nome} ${email} ${idade} ${radio} ${checks_selecionados}`;
    //document.body.appendChild(bloco);
    //bloco.innerHTML=
    //`Nome: ${nome} <br/>
    //Email: ${email}
    //Idade: ${idade}
    //Radio: ${radio}
    // `
    // document.body.appendChild(bloco);

   

});