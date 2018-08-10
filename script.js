console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

// clearError()

var invalidName = document.getElementById('name').value.trim()

    if (name === "") {  
        rejectNameField()
        addNameHint()    
    }



////// TEMPORARILY SUSPENDED CAR FIELDS

    
// var invalidCarYear = document.getElementById('car-year').value.trim()

// if (name === "") {  
//     rejectCarYear()    
// }    


// var invalidCarMake = document.getElementById('car-make').value.trim()

// if (name === "") {  
//     rejectCarMake()    
// }    


// var invalidCarModel = document.getElementById('car-model').value.trim()

// if (name === "") {  
//     rejectCarModel()    
// }    


var invalidStartDate = document.getElementById('start-date').value.trim()

    if (name === "") {
        rejectStartDate()
    }


var invalidDays = document.getElementById('days').value.trim()

if (name === "") {  
    rejectDaysField()    
}


var invalidCard = document.getElementById('credit-card').value.trim()

if (name === "") {  
    rejectCard()    
}


var invalidCvv = document.getElementById('cvv').value.trim()

if (name === "") {  
    rejectCvv()
}

var invalidExperation = document.getElementById('expiration').value.trim()

if (name === "") {  
    rejectExpiration()




////////  reject field functions

function rejectNameField () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('name-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

/////

// function rejectCarName () {

//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('input-invalid')
//     // errorDiv.innerText = 'Required field!'

//     var field = document.getElementById('car-field')
//     field.parentElement.appendChild(errorDiv)
//     field.classList.add('input-invalid')
// }

// function rejectCarMake () {

//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('input-invalid')
//     // errorDiv.innerText = 'Required field!'

//     var field = document.getElementById('car-field')
//     field.parentElement.appendChild(errorDiv)
//     field.classList.add('input-invalid')
// }

// function rejectCarModel () {

//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('input-invalid')
//     // errorDiv.innerText = 'Required field!'

//     var field = document.getElementById('car-field')
//     field.parentElement.appendChild(errorDiv)
//     field.classList.add('input-invalid')
// }

/////

function rejectStartDate () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('start-date-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectDaysField () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('days-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectCard () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('credit-card-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectCvv () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('cvv-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

function rejectExpiration () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    // errorDiv.innerText = 'Required field!'

    var field = document.getElementById('expiration-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('input-invalid')
}

////////  add field hint functions



function addNameHint () {

    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')


}