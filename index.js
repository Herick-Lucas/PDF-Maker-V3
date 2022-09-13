// Váriaveis de inicialização
var header,aside,center,bside,contBside;

var options = document.getElementsByClassName('contOptionsP');
var tamanhoOptionsP = options.length;

var optionsManual = document.getElementsByClassName('contManual');
var tamanhoManual = optionsManual.length;

for(let i = 0; i < tamanhoOptionsP; i++) {
    options[0].addEventListener('click',start);
}
for(let i = 0; i < tamanhoManual; i++) {
    optionsManual[0].addEventListener('click',manual);
}
//
// Função de Inicialização
function start() {

    let container = document.getElementById('container');

    let selected = this.id;

    container.remove();

    container = document.createElement('div');
    header = document.createElement('div');
    aside = document.createElement('div');
    center = document.createElement('iframe');
    center.setAttribute('name','PDF');
    center.setAttribute('scrolling', 'no');
    bside = document.createElement('div');
    contBside = document.createElement('div');
    contBside.setAttribute('id', 'contBside');

    container.style.display = 'grid';
    container.style.gridTemplateRows = '1.5fr 8.5fr';
    container.style.gridTemplateColumns = '1fr 2fr 1fr';
    container.style.gridTemplateAreas ='"header header header""aside center bside"';
    container.style.width = '100vw';
    container.style.height = '100vh';

    document.body.appendChild(container);

    container.appendChild(header);
    container.appendChild(aside);
    container.appendChild(center);
    container.appendChild(bside);

    bside.appendChild(contBside);

    for(let i = 0; i < container.children.length; i++) {
        container.children[i].setAttribute('Class', 'childrens')
        container.children[i].setAttribute('id', 'children'+i);
    }
    switch (selected) {
        case 'buildNewPDF':
            buildNewPDF();
            break;
        case 'option2':
            console.log('2');
            break;
        case 'option3':
          console.log('3');
          break;
        case 'option4':
            console.log('4');
            break;
        default:
          alert('error');
    }
}

function manual() {
    let container = document.getElementById('container');

    let selected = this.id;

    container.remove();

    container = document.createElement('div');
    header = document.createElement('div');
    aside = document.createElement('div');
    center = document.createElement('div');
    center.setAttribute('name','PDF');
    center.setAttribute('scrolling', 'no');
    bside = document.createElement('div');
    contBside = document.createElement('div');
    contBside.setAttribute('id', 'contBside');

    container.style.display = 'grid';
    container.style.gridTemplateRows = '1.5fr 8.5fr';
    container.style.gridTemplateColumns = '1fr 2fr 1fr';
    container.style.gridTemplateAreas ='"header header header""aside center bside"';
    container.style.width = '100vw';
    container.style.height = '100vh';

    document.body.appendChild(container);

    container.appendChild(header);
    container.appendChild(aside);
    container.appendChild(center);
    container.appendChild(bside);

    bside.appendChild(contBside);

    for(let i = 0; i < container.children.length; i++) {
        container.children[i].setAttribute('Class', 'childrens')
        container.children[i].setAttribute('id', 'children'+i);
    }
    switch (selected) {
        case 'buildNewPDF':
            center.innerHTML = '<p style="margin: 5%;">clique com o botão direito do mouse sobre o elemento após telo inserido para modifaca-lo<br>clique e arraste com o botao esquerdo para move-lo</p>';
            break;
    
        default:
            break;
    }
}
//
// Função de criar novo PDF

function buildNewPDF() {
    var newPDF = window.open('', 'PDF');
    newPDF.document.write('<html><head><meta charset="UTF-8"/><title>newPDF</title><style>body {margin:0px;} .photoCriada {width: 200px;cursor: move;} .divCriada {box-shadow: 0 0 0 1000px black inset; width: 200px;height:200px;} .paragraphCriado {width: 200px;height: 200px;} .itemCriado {cursor: move;} .itemCriadoMovendo, .itemCriadoMovendoT{border: 3px dashed red;z-index: 100;} #move {background-color: cadetblue;} #textArea {width: 300px; height: 300px;} #contButtons {display: flex;} #contButtons > button {width: 40px; height: 40px;} .itemCriadoP {height: 150px;}</style></head><body></body></html>');
    
    newPDF.document.write('<script>function moveElementsT() { let moveElement = false; let elements = document.querySelectorAll(\'.itemCriadoT\'); elements.forEach( (element) => { element.addEventListener(\'mousedown\', callMoveElementsT); element.addEventListener(\'mouseup\', cancelMoveElementsT); function cancelMoveElementsT() { element.removeEventListener(\'mousemove\', moveElementsT);element.removeEventListener(\'mousedown\', callMoveElementsT);element.removeEventListener(\'mouseup\', cancelMoveElementsT); element.removeEventListener(\'mouseup\', cancelMoveElementsT); element.classList.remove(\'itemCriadoMovendoT\'); var buttonMove = document.getElementById(\'move\'); buttonMove.style.backgroundColor = \'cadetblue\';}function callMoveElementsT(event) { if(event.button == 0) { element.addEventListener(\'mousemove\', moveElementsT); moveElement = false;}}function moveElementsT(event) { if(moveElement == false) {element.classList += \' itemCriadoMovendoT\';moveElement = true;} let coordenadas = element.getBoundingClientRect(); element.style.position = \'absolute\'; element.style.left = Math.abs((event.x) - (coordenadas.width/2)) + \'px\'; element.style.top = Math.abs((event.y) - (coordenadas.height/2)) + \'px\';}})}function activateMove() {let contTextArea = document.getElementById(\'contTextArea\');var buttonMove = document.getElementById(\'move\'); buttonMove.style.backgroundColor = \'darkred\'; contTextArea.setAttribute(\'class\', \'itemCriadoT\');moveElementsT();}; function deleteText() {let contTextArea = document.getElementById(\'contTextArea\'); contTextArea.remove();}; function enviarText() {let p = document.createElement(\'p\'); p.setAttribute(\'onmousedown\', \'modifyElements(this)\'); p.setAttribute(\'class\', \'itemCriado\'); p.classList += \' itemCriadoP\';p.style.margin = \'0px\';let textArea = document.getElementById(\'textArea\'); p.innerText = '+'textArea.value'+';document.body.appendChild(p);moveElements();}  function moveElements() { let moveElement = false; let elements = document.querySelectorAll(\'.itemCriado\'); elements.forEach( (element) => { element.addEventListener(\'mousedown\', callMoveElements); element.addEventListener(\'mouseup\', cancelMoveElements); function cancelMoveElements() { element.removeEventListener(\'mousemove\', moveElements);element.classList.remove(\'itemCriadoMovendo\');}function callMoveElements(event) { if(event.button == 0) { element.addEventListener(\'mousemove\', moveElements); moveElement = false;}}function moveElements(event) { if(moveElement == false) {element.classList += \' itemCriadoMovendo\';moveElement = true;} let coordenadas = element.getBoundingClientRect(); element.style.position = \'absolute\'; element.style.left = Math.abs((event.x) - (coordenadas.width/2)) + \'px\'; element.style.top = Math.abs((event.y) - (coordenadas.height/2)) + \'px\';}})}     function modifyElements(object) {object.oncontextmenu = () => {bside = parent.document.getElementById(\'corpo\').children[1].children[3];contBside = bside.children[0];contBside.remove();contBside = document.createElement(\'div\');contBside.setAttribute(\'id\', \'contBside\');bside.appendChild(contBside);function modifyLargura() {const contTamanhoWidth = document.createElement(\'div\');contTamanhoWidth.setAttribute(\'class\', \'contTamanho\');const contLarguraWidth = document.createElement(\'div\');contLarguraWidth.setAttribute(\'class\', \'contLargura\');const larguraWidth = document.createElement(\'p\');larguraWidth.innerText = \'Largura em:\';const selectMedidaWidth = document.createElement(\'select\');const optionMedidaPxWidth = document.createElement(\'option\');optionMedidaPxWidth.innerText = \'px\';const optionMedidaVwWidth = document.createElement(\'option\');optionMedidaVwWidth.innerText = \'vw\';const optionMedidaVhWidth = document.createElement(\'option\');optionMedidaVhWidth.innerText = \'vh\';const optionMedidaPorCentoWidth = document.createElement(\'option\');optionMedidaPorCentoWidth.innerText = \'%\';const optionMedidaPtWidth = document.createElement(\'option\');optionMedidaPtWidth.innerText = \'pt\';const optionMedidaEmWidth = document.createElement(\'option\');optionMedidaEmWidth.innerText = \'em\';const optionMedidaCmWidth = document.createElement(\'option\');optionMedidaCmWidth.innerText = \'cm\';const optionMedidaMmWidth = document.createElement(\'option\');optionMedidaMmWidth.innerText = \'mm\';const optionMedidaPcWidth = document.createElement(\'option\');optionMedidaPcWidth.innerText = \'pc\';const contRangeWidth = document.createElement(\'div\');contRangeWidth.setAttribute(\'class\', \'contRange\');const minWidth = document.createElement(\'p\');minWidth.innerText = \'0\';const rangeWidth = document.createElement(\'input\');rangeWidth.setAttribute(\'type\', \'range\');rangeWidth.setAttribute(\'min\', \'0\');rangeWidth.setAttribute(\'max\', \'500\');const maxWidth = document.createElement(\'p\');maxWidth.innerText = \'500\';const numberWidth = document.createElement(\'input\');numberWidth.setAttribute(\'type\', \'number\');numberWidth.setAttribute(\'class\', \'inputNumber\');selectMedidaWidth.appendChild(optionMedidaPxWidth);selectMedidaWidth.appendChild(optionMedidaVwWidth);selectMedidaWidth.appendChild(optionMedidaVhWidth);selectMedidaWidth.appendChild(optionMedidaPorCentoWidth);selectMedidaWidth.appendChild(optionMedidaPtWidth);selectMedidaWidth.appendChild(optionMedidaCmWidth);selectMedidaWidth.appendChild(optionMedidaEmWidth);selectMedidaWidth.appendChild(optionMedidaMmWidth);selectMedidaWidth.appendChild(optionMedidaPcWidth);contRangeWidth.appendChild(minWidth);contRangeWidth.appendChild(rangeWidth);contRangeWidth.appendChild(maxWidth);contLarguraWidth.appendChild(larguraWidth);contLarguraWidth.appendChild(selectMedidaWidth);contTamanhoWidth.appendChild(contLarguraWidth);contTamanhoWidth.appendChild(contRangeWidth);contTamanhoWidth.appendChild(numberWidth);contBside.appendChild(contTamanhoWidth);rangeWidth.value = object.width;numberWidth.value = object.width;rangeWidth.oninput = () => {object.style.width = rangeWidth.value + selectMedidaWidth.value;numberWidth.value = rangeWidth.value;};numberWidth.oninput = () => {object.style.width = numberWidth.value + selectMedidaWidth.value;rangeWidth.value = numberWidth.value;}}; function modifyAltura() {const contTamanhoHeight = document.createElement(\'div\');contTamanhoHeight.setAttribute(\'class\', \'contTamanho\');const contLarguraHeight = document.createElement(\'div\');contLarguraHeight.setAttribute(\'class\', \'contLargura\');const larguraHeight = document.createElement(\'p\');larguraHeight.innerText = \'Altura em:\';const selectMedidaHeight = document.createElement(\'select\');const optionMedidaPxHeight = document.createElement(\'option\');optionMedidaPxHeight.innerText = \'px\';const optionMedidaVwHeight = document.createElement(\'option\');optionMedidaVwHeight.innerText = \'vw\';const optionMedidaVhHeight = document.createElement(\'option\');optionMedidaVhHeight.innerText = \'vh\';const optionMedidaPorCentoHeight = document.createElement(\'option\');optionMedidaPorCentoHeight.innerText = \'%\';const optionMedidaPtHeight = document.createElement(\'option\');optionMedidaPtHeight.innerText = \'pt\';const optionMedidaEmHeight = document.createElement(\'option\');optionMedidaEmHeight.innerText = \'em\';const optionMedidaCmHeight = document.createElement(\'option\');optionMedidaCmHeight.innerText = \'cm\';const optionMedidaMmHeight = document.createElement(\'option\');optionMedidaMmHeight.innerText = \'mm\';const optionMedidaPcHeight = document.createElement(\'option\');optionMedidaPcHeight.innerText = \'pc\';const contRangeHeight = document.createElement(\'div\');contRangeHeight.setAttribute(\'class\', \'contRange\');const minHeight = document.createElement(\'p\');minHeight.innerText = \'0\';const rangeHeight = document.createElement(\'input\');rangeHeight.setAttribute(\'type\', \'range\');rangeHeight.setAttribute(\'min\', \'0\');rangeHeight.setAttribute(\'max\', \'500\');const maxHeight = document.createElement(\'p\');maxHeight.innerText = \'500\';const numberHeight = document.createElement(\'input\');numberHeight.setAttribute(\'type\', \'number\');numberHeight.setAttribute(\'class\', \'inputNumber\');selectMedidaHeight.appendChild(optionMedidaPxHeight);selectMedidaHeight.appendChild(optionMedidaVwHeight);selectMedidaHeight.appendChild(optionMedidaVhHeight);selectMedidaHeight.appendChild(optionMedidaPorCentoHeight);selectMedidaHeight.appendChild(optionMedidaPtHeight);selectMedidaHeight.appendChild(optionMedidaCmHeight);selectMedidaHeight.appendChild(optionMedidaEmHeight);selectMedidaHeight.appendChild(optionMedidaMmHeight);selectMedidaHeight.appendChild(optionMedidaPcHeight);contRangeHeight.appendChild(minHeight);contRangeHeight.appendChild(rangeHeight);contRangeHeight.appendChild(maxHeight);contLarguraHeight.appendChild(larguraHeight);contLarguraHeight.appendChild(selectMedidaHeight);contTamanhoHeight.appendChild(contLarguraHeight);contTamanhoHeight.appendChild(contRangeHeight);contTamanhoHeight.appendChild(numberHeight);contBside.appendChild(contTamanhoHeight);rangeHeight.value = object.height;numberHeight.value = object.height;rangeHeight.oninput = () => {object.style.height = rangeHeight.value + selectMedidaHeight.value;numberHeight.value = rangeHeight.value;};numberHeight.oninput = () => {object.style.height = numberHeight.value + selectMedidaHeight.value;rangeHeight.value = numberHeight.value;}}; function modifyOpacity() {const contOpacity = document.createElement(\'div\');contOpacity.setAttribute(\'id\', \'contOpacity\');const opacity = document.createElement(\'p\');opacity.innerText = \'Opacidade\';const contRangeOpacity = document.createElement(\'div\');contRangeOpacity.setAttribute(\'id\', \'contRangeOpacity\');contRangeOpacity.setAttribute(\'class\',\'contRange\');const minOpacity = document.createElement(\'p\');minOpacity.innerText = \'0\';const rangeOpacity = document.createElement(\'input\');rangeOpacity.setAttribute(\'type\', \'range\');rangeOpacity.setAttribute(\'min\', \'0\');rangeOpacity.setAttribute(\'max\', \'10\');const maxOpacity = document.createElement(\'p\');maxOpacity.innerText = \'1\'; const rangeOpacityNumber = document.createElement(\'input\');rangeOpacityNumber.setAttribute(\'type\', \'number\');rangeOpacityNumber.setAttribute(\'min\', \'0\');rangeOpacityNumber.setAttribute(\'max\', \'10\');contRangeOpacity.appendChild(minOpacity);contRangeOpacity.appendChild(rangeOpacity);contRangeOpacity.appendChild(maxOpacity);contOpacity.appendChild(opacity);contOpacity.appendChild(contRangeOpacity);contOpacity.appendChild(rangeOpacityNumber);contBside.appendChild(contOpacity);rangeOpacity.oninput = () => {object.style.opacity = rangeOpacity.value/10;rangeOpacityNumber.value = rangeOpacity.value;}; rangeOpacityNumber.oninput = () => {object.style.opacity = rangeOpacityNumber.value/10;rangeOpacity.value = rangeOpacityNumber.value;}}; function modifySobre() {const contSobre = document.createElement(\'div\');contSobre.setAttribute(\'id\', \'contSobre\');const sobre = document.createElement(\'p\');sobre.innerText = \'Sobrepor Item\';const contRangeSobre = document.createElement(\'div\');contRangeSobre.setAttribute(\'id\', \'contRangeSobre\');const minSobre = document.createElement(\'p\');minSobre.innerText = \'0\';const rangeSobre = document.createElement(\'input\');rangeSobre.setAttribute(\'type\', \'range\');rangeSobre.setAttribute(\'min\', \'0\');const maxSobre = document.createElement(\'p\');maxSobre.innerText = \'100\';contRangeSobre.appendChild(minSobre);contRangeSobre.appendChild(rangeSobre);contRangeSobre.appendChild(maxSobre);contSobre.appendChild(sobre);contSobre.appendChild(contRangeSobre);contBside.appendChild(contSobre);rangeSobre.oninput = () => {object.style.zIndex = rangeSobre.value;}}; switch (object.tagName) {case \'IMG\':modifyLargura();modifyAltura();modifyOpacity();modifySobre();break;case \'DIV\':modifyLargura();modifyAltura();modifyOpacity();modifySobre();break;case \'P\':modifyOpacity();modifySobre();break;default:break;}return false;}};</script>');

    function InsertImage() {
        let div = document.createElement('div');
        div.setAttribute('id', 'divPhoto');
        div.textContent = 'Inserir foto';

        let buttonPhoto = document.createElement('input');
        buttonPhoto.setAttribute('type', 'file');
        buttonPhoto.setAttribute('id', 'file');
        buttonPhoto.innerHTML = 'a';

        div.appendChild(buttonPhoto);

        buttonPhoto.onclick = () => {
            let img = document.createElement('img');

            let file = new FileReader();
            
            file.onload = (adress) => {
                (img).src = adress.target.result

                newPDF.document.write('<img onmousedown="modifyElements(this)" draggable="false" class="photoCriada itemCriado" src="'+adress.target.result+'" /><script id="kill">moveElements();document.getElementById(\'kill\').remove()</script>');
            };
            /*
document.getElementById("display_wds").style.display = wlan_wds == 1? "" : "none";*/
            let actualizeInterval = setInterval( () => {
                try {
                    file.readAsDataURL(buttonPhoto.files[0]);
                    clearInterval(actualizeInterval);
                    buttonPhoto.setAttribute('type', 'submit');
                    buttonPhoto.setAttribute('type', 'file');
                } catch {}
            }, 1000)
        }
        aside.appendChild(div)
    }
    function downloadPDF() {
        let buttonDwonload = document.createElement('button');
        buttonDwonload.innerText = 'Baixar PDF';

        buttonDwonload.onclick = () => {
            newPDF.print();
        }
        aside.appendChild(buttonDwonload);
    }
    function InsertDiv() {
        let buttonDiv = document.createElement('button');
        buttonDiv.innerText = 'Inserir divisão';
        buttonDiv.onclick = () => {
            newPDF.document.write('<div onmousedown="modifyElements(this)" class="divCriada itemCriado"></div><script id="kill">moveElements();document.getElementById(\'kill\').remove()</script>');
        }
        aside.appendChild(buttonDiv);
    }
    function insertText() {
        let buttonText = document.createElement('button');
        buttonText.innerText = 'Inserir texto';
        buttonText.onclick = () => {

            newPDF.document.write('<div id="contTextArea"><textarea placeholder="insira seu texto aqui" id="textArea"></textarea><div id="contButtons"><button id="delete" onclick="deleteText()" style="background-color: red;cursor: no-drop;">☹</button><button id="move" onclick="activateMove()" style="cursor: move;">⤲</button><button id="enviar" onclick="enviarText()" style="background-color: green;cursor: alias;">㋡</button></div></div>');

        }
        aside.appendChild(buttonText);
    }
    
    InsertImage();
    downloadPDF();
    InsertDiv();
    insertText();
}
function editExistingPDF() {}
function convertTextToPDF() {}
function buildTextFile() {}