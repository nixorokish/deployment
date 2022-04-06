console.log('JS connected')

const addAddressBtn = document.querySelector('#newAddressBtn')
const linebreak = document.createElement("br")

function addInputBoxes() {
    const makeInputField = document.createElement('input') // create address input
    makeInputField.type = 'text'
    makeInputField.placeholder = 'copy address here'

    const addressesDiv = document.querySelector('#addresses') // find addresses div

    addressesDiv.appendChild(makeInputField) // append addresses div
    addressesDiv.appendChild(linebreak)

    makeInputField.placeholder = 'add a nickname'

    const nicknamesDiv = document.querySelector('#nicknames') // find nicknames div

    nicknamesDiv.appendChild(makeInputField)
    nicknamesDiv.appendChild(linebreak)
}

addAddressBtn.addEventListener('click', addInputBoxes)