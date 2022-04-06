console.log('JS connected')

const addAddressBtn = document.querySelector('#newAddressBtn')

function addInputBoxes() {
    const addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.name = 'test';
    const inputsDiv = document.querySelector('#inputs')
    inputsDiv.appendChild(addrInput)
}

addAddressBtn.addEventListener('click', addInputBoxes)