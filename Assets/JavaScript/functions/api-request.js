// função para realizar requisições HTTP
export async function api_request(data = null, method = 'GET'){

    const url = "http://localhost/Projetos-pessoal/Api-tarefas/";

    if (method == 'GET') {
        fetch(url)
        .then(Response  => Response.json())
        .then(data      => data)
        .catch(error    => console.error(error))
    }

    if (method == 'POST') {
        
        fetch(url,{
            method: method,
            body: new URLSearchParams(data)
        })
        .then(Response  => Response.json())
        .then(data      => {
            console.log(data)
        })
        .catch(error    => console.error(error))
    }

    if (method == 'PUT') {   

        fetch("http://localhost/Projetos-pessoal/Api-tarefas/?id="+data,{
            method: method,
            body: data
        })
        .then(Response  => Response.json())
        .then(data      => data)
        .catch(error    => console.error(error))
    }

    if (method == 'DELETE') {

        fetch("http://localhost/Projetos-pessoal/Api-tarefas/?id="+data,{
            method: method,
            body: data
        })
        .then(Response  => Response.json())
        .then(data      => data)
        .catch(error    => console.error(error))
    }

}