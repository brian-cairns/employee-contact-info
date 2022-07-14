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

let availability = {
  'Mon': [],
  'Tue': [],
  'Wed': [],
  'Thu': [],
  'Fri': [],
  'Sat': []
}

let start1 = document.getElementById('start1')
start1.addEventListener('change', (e) => {
  availability.Mon.push(e.target.value);
  console.log(e.target.value)
})

let am1 = document.getElementById('am1')
am1.addEventListener('change', (e) => {
  availability.Mon.push(e.target.value);
  console.log(e.target.value)
})

let stop1 = document.getElementById('stop1')
stop1.addEventListener('change', (e) => {
  availability.Mon.push(e.target.value);
  console.log(e.target.value)
})

let pm1 = document.getElementById('pm1')
pm1.addEventListener('change', (e) => {
  availability.Mon.push(e.target.value);
  console.log(e.target.value)
})

let start2 = document.getElementById('start2')
start2.addEventListener('change', (e) => {
  availability.Tue.push(e.target.value);
  console.log(e.target.value)
})

let am2 = document.getElementById('am2')
am2.addEventListener('change', (e) => {
  availability.Tue.push(e.target.value);
  console.log(e.target.value)
})

let stop2 = document.getElementById('stop2')
stop2.addEventListener('change', (e) => {
  availability.Tue.push(e.target.value);
  console.log(e.target.value)
})

let pm2 = document.getElementById('pm2')
pm2.addEventListener('change', (e) => {
  availability.Tue.push(e.target.value);
  console.log(e.target.value)
})

let start3 = document.getElementById('start3')
start3.addEventListener('change', (e) => {
  availability.Wed.push(e.target.value);
  console.log(e.target.value)
})

let am3 = document.getElementById('am3')
am3.addEventListener('change', (e) => {
  availability.Wed.push(e.target.value);
  console.log(e.target.value)
})

let stop3 = document.getElementById('stop3')
stop3.addEventListener('change', (e) => {
  availability.Wed.push(e.target.value);
  console.log(e.target.value)
})

let pm3 = document.getElementById('pm3')
pm3.addEventListener('change', (e) => {
  availability.Wed.push(e.target.value);
  console.log(e.target.value)
})

let start4 = document.getElementById('start4')
start4.addEventListener('change', (e) => {
  availability.Wed.push(e.target.value);
  console.log(e.target.value)
})

let am4 = document.getElementById('am4')
am4.addEventListener('change', (e) => {
  availability.Thu.push(e.target.value);
  console.log(e.target.value)
})

let stop4 = document.getElementById('stop4')
stop4.addEventListener('change', (e) => {
  availability.Thu.push(e.target.value);
  console.log(e.target.value)
})

let pm4 = document.getElementById('pm4')
pm4.addEventListener('change', (e) => {
  availability.Thu.push(e.target.value);
  console.log(e.target.value)
})

let start5 = document.getElementById('start5')
start5.addEventListener('change', (e) => {
  availability.Thu.push(e.target.value);
  console.log(e.target.value)
})

let am5 = document.getElementById('am5')
am5.addEventListener('change', (e) => {
  availability.Fri.push(e.target.value);
  console.log(e.target.value)
})

let stop5 = document.getElementById('stop5')
stop5.addEventListener('change', (e) => {
  availability.Fri.push(e.target.value);
  console.log(e.target.value)
})

let pm5 = document.getElementById('pm5')
pm5.addEventListener('change', (e) => {
  availability.Fri.push(e.target.value);
  console.log(e.target.value)
})

let start6 = document.getElementById('start6')
start6.addEventListener('change', (e) => {
  availability.Sat.push(e.target.value);
  console.log(e.target.value)
})

let am6 = document.getElementById('am6')
am6.addEventListener('change', (e) => {
  availability.Sat.push(e.target.value);
  console.log(e.target.value)
})

let stop6 = document.getElementById('stop6')
stop6.addEventListener('change', (e) => {
  availability.Sat.push(e.target.value);
  console.log(e.target.value)
})

let pm6 = document.getElementById('pm6')
pm6.addEventListener('change', (e) => {
  availability.Sat.push(e.target.value);
  console.log(e.target.value)
})

async function getTraining() {
    let training = new Promise((res) => {
    if (document.getElementById('Tue').checked) { res('Tuesday') }
    if (document.getElementById('Sat').checked) { res('Saturday') }
    if (document.getElementById('other')) { res(document.getElementById('other-training')) }
    })
  return training
}
    
let comments = document.getElementById('comments')
comments.addEventListener('change', (e) => {
    newForm.comments = e.target.value;
    console.log(newForm.comments)
})
    
document.getElementById('submit').addEventListener("click", async (event) => {
    newForm.availability = availability
    const training = await getTraining()
    newForm.training = training
    console.log(newForm)
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