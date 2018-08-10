console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    // clearError()

    var entryName = document.getElementById('name').value.trim()

    if (entryName === "") {
        rejectNameField()
        // addNameHint()    
    }

    var entryCarYear = document.getElementById('car-year').value.trim()

    if (entryCarYear === "") {
        rejectCarYear()
    }

    var entryCarMake = document.getElementById('car-make').value.trim()

    if (entryCarMake === "") {
        rejectCarMake()
    }

    var entryCarModel = document.getElementById('car-model').value.trim()

    if (entryCarModel === "") {
        rejectCarModel()
    }

    var entryStartDate = document.getElementById('start-date').value.trim()

    if (entryStartDate === "") {
        rejectStartDate()
    }

    var entryDays = document.getElementById('days').value.trim()

    if (entryDays === "") {
        rejectDaysField()
    }

    var entryCard = document.getElementById('credit-card').value.trim()

    if (entryCard === "") {
        rejectCard()
    }

    var entryCvv = document.getElementById('cvv').value.trim()

    if (entryCvv === "") {
        rejectCvv()
    }

    var entryExpiration = document.getElementById('expiration').value.trim()

    if (entryExpiration === "") {
        rejectExpiration()
    }
})


////////  reject field functions

function rejectNameField() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('name-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectCarYear () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectCarMake () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectCarModel () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-field')
    field.classList.add('input-invalid')
}

function rejectStartDate() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('start-date-field')
    field.classList.add('input-invalid')
}

function rejectDaysField() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('days-field')
    field.classList.add('input-invalid')
}

function rejectCard() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('credit-card-field')
    field.classList.add('input-invalid')
}

function rejectCvv() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('cvv-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectExpiration() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('expiration-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}