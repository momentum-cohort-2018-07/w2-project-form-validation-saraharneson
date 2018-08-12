console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

// I'm not getting how to incorporate the clear error part; I'm commenting out for now
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
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')
        }
        // var field = document.getElementById('car-field')
        // field.appendChild(errorDiv)
        // field.classList.add('input-valid')

        else if (entryCarYear !== "" && entryCarMake !== "" && entryCarModel !== "") {

            var errorDiv = document.createElement('div')
            // errorDiv.innerText = 'Required field!'
    
            var field = document.getElementById('car-field')
            field.appendChild(errorDiv)
            field.classList.add('input-valid')
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
        else acceptDaysField()

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
})


// Sample from class for reference

// function clearError () {
//     var field = document.getElementById('name-field')
//     field.classList.remove('error')
//     // same as: field.parentElement.getElementsByClassName('.error-msg')[0]
//     var errorMsg = field.parentElement.querySelector('.error-msg')
//     if (errorMsg) {
//       errorMsg.remove()
//     }
//   }


////////  reject (red) and accept (green) functions

function rejectNameField() {

    var errorDiv = document.createElement('div')

    // errorDiv.classList.add('error-msg')
    // errorDiv.innerText = 'Required field'

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

// start car field functions (do I need them given the carSection function above?

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

// end car field functions


function rejectStartDate() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('start-date-field')
    field.classList.add('input-invalid')
}

function acceptStartDate() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('start-date-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

// accept start date ^^ not working for some reason; everything else is 


function rejectDaysField() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('days-field')
    field.classList.add('input-invalid')
}

function acceptDaysField() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('days-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectCard() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('credit-card-field')
    field.classList.add('input-invalid')
}

function acceptCard() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('credit-card-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectCvv() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('cvv-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function acceptCvv() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('cvv-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function rejectExpiration() {

    var errorDiv = document.createElement('div')

    var field = document.getElementById('expiration-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function acceptExpiration() {

    var errorDiv = document.createElement('div')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('expiration-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-valid')
}

function clearError () {
    var field = document.getElementById('name')
    field.classList.remove('error')

    var errorMsg = field.parentElement.querySelector('.error-msg')
    if (errorMsg) {
      errorMsg.remove()
    }
  }