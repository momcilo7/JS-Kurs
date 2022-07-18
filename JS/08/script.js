config ={

    'ime_prezime':{
        minlength:5,
        maxlength:50,
        required:true,
    },

    'korisnicko_ime':{
        minlength:3,
        maxlength:50,
        required:true,
    },

    'email':{
        required:true,
        email:true,
        maxlength:50,
        minlength:5
    },

    'broj_telefona':{
        minlength:9,
        maxlength:13,
        phone:true,
    },
    'postal_code':{
        minlength:2,
        maxlength:5,
        zip:true,
    },

    'lozinka':{
        minlength:8,
        maxlength:50,
        matching:'ponovi_lozinku'
    },

    'ponovi_lozinku':{
        minlength:8,
        maxlength:50,
        matching:'lozinka'
    }
}

let validator = new Validator(config,'#registrationForm');