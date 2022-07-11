let submit = document.getElementById('submit')
console.log(submit)
const formName = 'employeeContactInfo'
console.log('form: ' + formName)
let newForm = {}

let name = document.querySelector('input#name')
name.addEventListener('change', (e) => {
	console.log('changed')
	newForm.name = e.target.value;
  console.log(newForm.name);
  })
  
let email = document.querySelector('input#email')
email.addEventListener('change', (e) => {
	newForm.email = e.target.value;
  console.log(newForm.email);
})

let address = document.querySelector('input#address')
address.addEventListener('change', (e) => {
	newForm.address = e.target.value;
  console.log(newForm.address);
})

let city = document.querySelector('input#city')
city.addEventListener('change', (e) => {
	newForm.city = e.target.value;
  console.log(newForm.city);
})

let state = document.querySelector('input#state')
state.addEventListener('change', (e) => {
	newForm.state = e.target.value;
  console.log(newForm.state);
})

let zip = document.querySelector('input#zip')
zip.addEventListener('change', (e) => {
	newForm.zip = e.target.value;
  console.log(newForm.zip);
})

let phone = document.querySelector('input#phone')
phone.addEventListener('change', (e) => {
	newForm.phone = e.target.value;
  console.log(newForm.phone);
})

let emergencyContactName = document.querySelector('input#emergencyContactName')
emergencyContactName.addEventListener('change', (e) => {
	newForm.emergencyContactName = e.target.value;
  console.log(newForm.emergencyContactName);
})

let emergencyContactPhone = document.querySelector('input#emergencyContactPhone')
emergencyContactPhone.addEventListener('change', (e) => {
	newForm.emergencyContactPhone = e.target.value;
  console.log(newForm.emergencyContactPhone);
})

class Workday {
    constructor(day, start, stop) {
        this.day = day;
        this.start = start;
        this.stop = stop
    }
}

async function getAvailability() {
    let availability = []
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    for (let i = 0; i < 6; i++) {
        let day = new Workday
        day.day = days[i];
        let start = document.getElementById(`start${i}`);
        let startAm = document.getElementById(`am${i}`);
        let stop = document.getElementById(`stop${i}`);
        let stopPm = document.getElementById(`pm${i}`);
        day.start = [start, startAm]
        day.stop = [stop, stopPm]
        availability.push(day)
    }
    return availability
}

function getTraining() {
    var training
    if (document.getElementById('Tue')) { training = 'Tuesday' }
    if (document.getElementById('Sat')) { training = 'Saturday' }
    else {training = document.getElementById('other-training')}
}
    
let comments = document.querySelector('input#comments')
comments.addEventListener('change', (e) => {
    newForm.comments = e.target.value;
    console.log(newForm.comments)
})
    
document.getElementById('submit').addEventListener("click", async (event) => {
    const availability = await getAvailability()
    newForm.availability = availability
    const training = await getTraining()
    submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}