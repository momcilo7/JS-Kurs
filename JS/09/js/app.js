let session = new Session();
session = session.getSession();
if (session !== ''){
    window.location.href = 'hexa.html';
}
let config = {
    'korisnicko_ime':{
        required:true,
        minlength : 3,
        maxlength: 20
    },

    'email':{
        email:true,
        required:true,
        minlength : 5,
        maxlength: 50
    },

    'lozinka':{
        required:true,
        minlength:7,
        maxlength:25,
        matching:'ponovi_lozinku'
    },

    'ponovi_lozinku':{
        required:true,
        minlength:7,
        maxlength:25,
        matching:'lozinka'
    }
}
let validator = new Validator(config,'#r');
document.querySelector('#aReg').addEventListener('click',() => {
    document.querySelector('.modal-div').classList.toggle('hidden');
    document.querySelector('#regforms').classList.toggle('hidden');
})

document.querySelector('#close-modal').addEventListener('click',(e) => {
    document.querySelector('.modal-div').classList.toggle('hidden');
    document.querySelector('#regforms').classList.toggle('hidden');
})






document.querySelector('#r').addEventListener('submit', e=>{
    e.preventDefault;

    if(validator.validationPassed()){
        
        let user = new User();

        user.username = document.querySelector('#korisnicko_ime').value;
        user.email = document.querySelector('#email').value;
        user.password = document.querySelector('#lozinka').value;

        user.create();
        alert("Uspesno ste se registrovali");

    }else{

        alert("Greska");
    }
})

document.querySelector('#regforms').addEventListener('submit', e =>{
    e.preventDefault();

    let email= document.querySelector('#login_email').value;
    let password = document.querySelector('#login_password').value;

    let user = new User;
    user.email = email;
    user.password =password;
    user.login();
})
