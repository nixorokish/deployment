console.log('JS connected')

const addAddressBtn = document.querySelector('#newAddressBtn')
const linebreak = document.createElement("br")

function addInputBoxes() {
    const addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.name = 'test';
    const inputsDiv = document.querySelector('#inputs')
    inputsDiv.appendChild(addrInput)
    inputsDiv.appendChild(linebreak)
}

addAddressBtn.addEventListener('click', addInputBoxes)