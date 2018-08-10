console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    // clearError()

    var entryName = document.getElementById('name').value.trim()

        if (entryName === "") {
            rejectNameField()
        } else {acceptNameField()
        }

    var entryCarYear = document.getElementById('car-year').value.trim()

        if (entryCarYear === "") {
            rejectCarYear()
        } else {acceptCarYear()
        }


    var entryCarMake = document.getElementById('car-make').value.trim()

    if (entryCarMake === "") {
        rejectCarMake()
    }
    else acceptCarMake()
        

    var entryCarModel = document.getElementById('car-model').value.trim()

        if (entryCarModel === "") {
            rejectCarModel()
        }
        else 
            acceptCarModel()

    carSection ()


// function to make sure Car section isn't partially entered 

    function carSection () {
        if (entryCarYear === "" || entryCarMake === "" || entryCarModel === "") {

        var errorDiv = document.createElement('div')
        // errorDiv.innerText = 'Required field!'

        var field = document.getElementById('car-field')
        console.log(field)
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')
        }
}
 

// resume variable declarations

    var entryStartDate = document.getElementById('start-date').value.trim()

        if (entryStartDate === "") {
            rejectStartDate()
        }
        else acceptStartDate()

    var entryDays = document.getElementById('days').value.trim()

        if (entryDays === "") {
            rejectDaysField()
        }
        else rejectDaysField()

    var entryCard = document.getElementById('credit-card').value.trim()

        if (entryCard === "") {
            rejectCard()
        }
        else acceptCard()

    var entryCvv = document.getElementById('cvv').value.trim()

        if (entryCvv === "") {
            rejectCvv()
        }
        else acceptCvv()

    var entryExpiration = document.getElementById('expiration').value.trim()

        if (entryExpiration === "") {
            rejectExpiration()
        }
        else acceptExpiration()

// var errorMessages 

})


////////  reject (red) and accept (green) functions

function rejectNameField() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('name-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function acceptNameField() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('name-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectCarYear () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-year')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function acceptCarYear() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-year')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectCarMake () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-make')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}
function acceptCarMake() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-model')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectCarModel () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-model')
    field.classList.add('input-invalid')
}

function acceptCarModel () {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('car-model')
    field.classList.add('input-valid')
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


