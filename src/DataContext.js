import React, { createContext, useContext, useState, useEffect } from "react";
//importando as bibliotecas e hooks necessários para criar o contexto
import axios from 'axios'

const DataContext = createContext();
//Cria um contexto de dados usando a função createContext()
//Este contexto será usado para compartilhar 

export const useData = () => {
    return useContext(DataContext);
}//Exportando a função useData(), isso permitirá outros componentes acessarem o contexto de dados
//e portanto, o estado global e as funções disponibilizadas por ele.
//Isso é feito usando o hook 'useContext' com o contexto 'DataContext'


export const DataProvider = ({ children }) => {
    //Exporta um componente chamado DataProvider, responsável por carregar os dados iniciais da API 
    //e disponibilizá-los para outros componentes filhos. Ele recebe children como propriedade
    //que representa os componentes filhos encapsulados por ele.
    const [task, setTask] = useState([]);
    const [users, setUsers] = useState([]);
    //Usa o hook 'useState' para criar dois estados locais, 'tasks' e 'users'
    //Esses estados são usados para armazenar os dados obtidos da API.
    //Inicialmente ambos estão vazios.
}


//Você usa o 'useEffect' paraq fazer duas solicitações HTTP à API ao montar o component
//'[]'significa que a função será executada apenas uma vez apos a montagem do component
//As responses são usadas para definir os estados 'tasks' e 'users', preenchendo-os com os dados da API.

useEffect(() => {
    //Busca as tarefas da API
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            setTask(response.data)
        })
        .catch((error) => {
            console.log('Erro ao buscar tarefas', error);
        });
    //Buscar os usuários da API
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log('Erro ao buscar usuários', error);
        });
}, []);
//fUNÇÕES DE GERENCIAMENTO DE TAREFAS
//Serão usadas para manipular tarefas na API e atualizar o estado local.
const addTask = (newTask) => {
    //Lógica para adicionar tarefa na API e atualizar o estado.
    setTask([...task, newTask]);
};
//const seria o metodo em vue
const editTask = (taskId, updatedTask) => {
    //Lógica para editar tarefa na API e atualizar o estado.
    setTask(task.map((task) => task.id === taskId ? updatedTask : task));
};
const deleteTask = (taskId) => {
    //Lógica para deletar tarefa na API e atualizar o estado.
    setTask(task.filter((task) => task.id !== taskId));

}
return (
    //Retorna o contexto dos dados(DataContext.Provider) envolvendo todos os componentes filhos
    //e passa um objeto como valor do contexto, que inclui os estados 'tasks' , 'users'
    // e as funções  de gerenciamento de tarefas.
    //Isso tornará esses valores e funções acessíveis  a partir de qualquer componentes que consuma este contexto.
    <DataContext.Provider value={{ task, users, addTask, editTask, deleteTask }}>
        {children}
    </DataContext.Provider>

    //configurou um contexto de dados que pode ser usado para compartilhar informações 
    //e funcionalidades relacionadas a tarefas e usuários em toda a sua aplicação React.
    // Componentes podem acessar essas informações e funções usando o useData()
    // exportado. Certifique-se de importar e usar o DataProvider em torno dos componentes
    // que precisam acessar esse contexto.
)







// function DataContext() {
//     return (
//         <div>
//         <p>DataContext</p>

//         </div>
//     )
// }
export default DataContext;