
function myorder() {
  var res = confirm("Please confirm your order!");
  if (res == true) document.getElementById("successmsgorder").innerHTML = "  ORDERD SUCCESSFULLY !";
}
function mysubmission() {
  confirm("Please confirm!");
}

const orderName=document.getElementById('orderName');
const orderEmail=document.getElementById('orderEmail');
const orderPhone=document.getElementById('orderPhone');
const orderPin=document.getElementById('orderPin');
const orderQuantity=document.getElementById('orderQuantity');

// console.log(orderName, orderEmail, orderPhone, orderPin);
orderName.addEventListener('blur',()=>{
    console.log("Name is blurred");
    //validate name here
    let regex = /^([a-zA-Z])([\ 0-9a-zA-Z]){0,20}$/;
    let str = orderName.value;
    console.log(regex, str);
    if ( regex.test(str)) {
        console.log('Name matched');
        orderName.classList.remove('is-invalid');
        orderName.classList.add('is-valid');
    }
    else{
        console.log('Name not matched');
        orderName.classList.remove('is-valid');
        orderName.classList.add('is-invalid');
    }
})
orderEmail.addEventListener('blur',()=>{
    console.log("Email is blurred");
    //validate email here
    let regex = /^([_0-9\-\.a-zA-Z]+)@([_0-9\-\.a-zA-Z]+)\.([a-zA-Z\.]+)$/;
    let str = orderEmail.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Email matched');
        orderEmail.classList.remove('is-invalid');
        orderEmail.classList.add('is-valid');
    }
    else{
        console.log('Email not matched');
        orderEmail.classList.remove('is-valid');
        orderEmail.classList.add('is-invalid');
    }
})
orderPhone.addEventListener('blur',()=>{
    console.log("Phone is blurred");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = orderPhone.value;
    console.log(regex, str);
    if (regex.test(str) ) {
        console.log('Phone matched');
        orderPhone.classList.remove('is-invalid');
        orderPhone.classList.add('is-valid');
    }
    else{
        console.log('Phone not matched');
        orderPhone.classList.remove('is-valid');
        orderPhone.classList.add('is-invalid');
    }
})
orderPin.addEventListener('blur',()=>{
    console.log("Pin is blurred");
    //validate name here
    let regex = /^([0-9]){6}$/;
    let str = orderPin.value;
    console.log(regex, str);
    if (regex.test(str) ) {
        console.log('Pin matched');
        orderPin.classList.remove('is-invalid');
        orderPin.classList.add('is-valid');
    }
    else{
        console.log('Pin not matched');
        orderPin.classList.remove('is-valid');
        orderPin.classList.add('is-invalid');
    }
})
orderQuantity.addEventListener('blur',()=>{
    console.log("Quantity is blurred");
    //validate name here
    let regex = /^([0-9]+)$/;
    let str = orderQuantity.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Quantity matched');
        orderQuantity.classList.remove('is-invalid');
        orderQuantity.classList.add('is-valid');
    }
    else{
        console.log('Quantity not matched');
        orderQuantity.classList.remove('is-valid');
        orderQuantity.classList.add('is-invalid');
    }
})
orderCity.addEventListener('blur',()=>{
    console.log("City is blurred");
    //validate name here
    let regex = /^([a-zA-Z]+)$/;
    let str = orderCity.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('City matched');
        orderCity.classList.remove('is-invalid');
        orderCity.classList.add('is-valid');
    }
    else{
        console.log('City not matched');
        orderCity.classList.remove('is-valid');
        orderCity.classList.add('is-invalid');
    }
})