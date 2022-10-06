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
                <input placeholder="Digite seu e-mail" type="text" class="inputEmail">
                <button id="botaoModal">ENVIAR <img src="img/aviaozinho.png" class="aviao" alt="aviao de papel"></button> 
            </div>                     
        </div>
    </div>`;
}
window.addEventListener("load",popup);

const botaoFechara = () => {
    document.querySelector("#moda").remove()
}