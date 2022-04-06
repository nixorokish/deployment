console.log('JS connected')

const addAddressBtn = document.querySelector('#newAddressBtn')
const linebreak = document.createElement("br")

function addInputBoxes() {
    const addrInput = document.createElement('input') // create address input
    addrInput.type = 'text'
    addrInput.placeholder = 'copy address here'

    const addressesDiv = document.querySelector('#addresses') // find addresses div

    addressesDiv.appendChild(addrInput) // append addresses div
    addressesDiv.appendChild(linebreak)

    const nicknameInput = document.createElement('input') // create address input
    nicknameInput.type = 'text'
    nicknameInput.placeholder = 'add a nickname'

    const nicknamesDiv = document.querySelector('#nicknames') // find nicknames div

    nicknamesDiv.appendChild(nicknameInput)
    nicknamesDiv.appendChild(linebreak)
}

addAddressBtn.addEventListener('click', addInputBoxes)