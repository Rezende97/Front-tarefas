import { api_request } from "./functions/api-request.js";

const formData  = document.getElementById('formLogin');

formData.addEventListener('submit', (e) => {

    e.preventDefault();

    if (formData.userEmail.value == '' && formData.password.value == '') {

        console.error('Obrigatório preencher os campos');
        alertify.error('Obrigatório informar o E-mail e o Password');
        return;

    }else if (formData.userEmail.value == '') {

        console.error('Obrigatório preencher o campo E-mail');
        alertify.error('Obrigatório preencher o campo E-mail');
        return;

    }else if (formData.password.value == '') {
        console.error('Obrigatório preencher o campo Password');
        alertify.error('Obrigatório preencher o campo Password');
        return;

    }    

    const data = {
        'name_user': formData.userEmail.value,
        'password_user': formData.password.value
    };

    if (api_request(data, 'POST')) {
        formData.userEmail.value = ''
        formData.password.value  = ''
        window.location.href = "Assets/Paginas/tarefas.html"
    } 

})


