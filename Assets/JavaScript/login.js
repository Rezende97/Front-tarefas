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
        'email': formData.userEmail.value,
        'password_user': formData.password.value
    };

    const url = "http://localhost/Projetos-pessoal/projetos-back-end/Api-tarefas/login"

    fetch(url,{
        method: 'POST',
        body: new URLSearchParams(data)
    })
    .then(Response  => Response.json())
    .then(data      => {

        const localstoragesId = localStorage.setItem("id", data.id)
        const localstorages = localStorage.setItem("acesso", data.user)

        window.location.href = "Assets/Paginas/tarefas.html"
    })
    .catch(error    => console.error(error))

    

})


