const id = localStorage.getItem("id")
const nome = localStorage.getItem("acesso")

if (nome) {
    tarefas();
}

async function tarefas(){

    const url = `http://localhost/Projetos-pessoal/projetos-back-end/Api-tarefas/tarefas?id=${id}`;
    
    const dados    = await fetch(url);
    const Response = await dados.json();

    if(Response['error'] == false){
        
        const tbody = document.getElementById('tbody')

        for (let i = 0; i < Response['tarefas'].length; i++) {

            let tr = tbody.insertRow();
            let nome_tarefa = tr.insertCell();
            let motivo = tr.insertCell();
            let tarefa = tr.insertCell();
            let data_horario = tr.insertCell();

            nome_tarefa.innerHTML = Response['tarefas'][i].nome_da_tarefa
            motivo.innerHTML = Response['tarefas'][i].motivo
            tarefa.innerHTML = Response['tarefas'][i].tarefa
            data_horario.innerHTML = Response['tarefas'][i].data_horario

        }        
    }    
}
    
