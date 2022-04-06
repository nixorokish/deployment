console.log('JS connected')

const addAddressBtn = document.querySelector('#newAddressBtn')
const linebreak = document.createElement("br")

function addInputBoxes() {
    const addrInput = document.createElement('input') // create address input
    addrInput.type = 'text'
    addrInput.placeholder = 'copy address here'

    const addressesDiv = document.querySelector('#addresses') // find addresses div

    addressesDiv.appendChild(addrInput, linebreak) // append addresses div

    const nicknameInput = document.createElement('input') // create address input
    nicknameInput.type = 'text'
    nicknameInput.placeholder = 'add a nickname'

    const nicknamesDiv = document.querySelector('#nicknames') // find nicknames div

    nicknamesDiv.appendChild(nicknameInput, linebreak)
}

addAddressBtn.addEventListener('click', addInputBoxes)