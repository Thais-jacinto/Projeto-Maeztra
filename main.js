var popup = () => {
    const modal = document.querySelector('.modal');
    modal.innerHTML = `
    <div id="moda">
      <div><button class="botaoFechar" onclick="botaoFechara()">FECHAR</button></div>
        <div id="containerModal">       
            <div class="imagem"><img src="img/correr.png" alt="cartao"> </div>   
            <div class="BemVindo"> 
                <img src="img/newsletter.png" alt="cartao"> 
                <div>
                <p class="bVindoEmail">BEM VINDO À MAEZTRA</p> 
                <p class="textEmail">Receba em Primeira mão</p>
                <p class="textEmail" id="textDescEmail">desconto e ofertas exclusivas</p>
                </div>
                <input  onblur="validacaoEmail(f1.email) placeholder="Digite seu e-mail" type="text" class="inputEmail">
                <button  onclick="btnnModal()" id="botaoModal">ENVIAR <img src="img/aviaozinho.png" class="aviao" alt="aviao de papel"></button> 
            </div>                     
        </div>
    </div>`;
}

// Função pra ver se o formulario ta sendo "enviado"
window.addEventListener("load",popup);

const botaoFechara = () => {
    document.querySelector("#moda").remove()
};
 function btnnModal() {
     alert ('Enviado <3')
 }

//
 
function validacaoEmail(field) {
    usuario = field.value.substring(0,field.value.indexOf("@"));
    dominio = field.value.substring
    
}