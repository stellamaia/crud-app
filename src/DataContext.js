import React, { createContext, useContext, useState, useEffect } from "react";
//importando as bibliotecas e hooks necessários para criar o contexto
import axios from 'axios'

const DataContext = createContext();
//Cria um contexto de dados usando a função createContext()
//Este contexto será usado para compartilhar 

export const useData = () => {
    return useContext(DataContext);
}
//Exportando a função useData(), isso permitirá outros componentes acessarem o contexto de dados
//e portanto, o estado global e as funções disponibilizadas por ele.
//Isso é feito usando o hook 'useContext' com o contexto 'DataContext'


export const DataProvider = ({ children }) => {
    //Exporta um componente chamado DataProvider, responsável por carregar os dados iniciais da API 
    //e disponibilizá-los para outros componentes filhos. Ele recebe children como propriedade
    //que representa os componentes filhos encapsulados por ele.
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    //Usa o hook 'useState' para criar dois estados locais, 'tasks' e 'users'
    //Esses estados são usados para armazenar os dados obtidos da API.
    //Inicialmente ambos estão vazios.
    
    //Você usa o 'useEffect' paraq fazer duas solicitações HTTP à API ao montar o component
    //'[]'significa que a função será executada apenas uma vez apos a montagem do component
    //As responses são usadas para definir os estados 'tasks' e 'users', preenchendo-os com os dados da API.

    useEffect(() => {
        //Busca as tarefas da API
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTasks(response.data)
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
        // Simulando uma solicitação POST para adicionar uma nova tarefa à API.
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title: newTask,
          completed: false,
          userId: 1, // Defina o usuário ID apropriado aqui.
        })
          .then((response) => {
            const addedTask = response.data;
            setTasks([...tasks, addedTask]); // Atualiza o estado local com a nova tarefa.
          })
          .catch((error) => {
            console.error('Erro ao adicionar tarefa:', error);
          });
      };
      
    //const seria o metodo em vue
    const editTask = (taskId, updatedTask) => {
        // Simulando uma solicitação PUT para editar uma tarefa na API.
        axios.put(`https://jsonplaceholder.typicode.com/todos/${taskId}`, updatedTask)
          .then((response) => {
            const updatedTaskData = response.data;
            // Atualiza o estado local com a tarefa editada.
            setTasks((prevTasks) => {
              const updatedTasks = prevTasks.map((task) => {
                if (task.id === updatedTaskData.id) {
                  return updatedTaskData;
                }
                return task;
              });
              return updatedTasks;
            });
          })
          .catch((error) => {
            console.error('Erro ao editar tarefa:', error);
          });
      };
      
      const deleteTask = (taskId) => {
        // Simulando uma solicitação DELETE para excluir uma tarefa na API.
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
          .then(() => {
            // Atualiza o estado local excluindo a tarefa.
            setTasks((prevTasks) => {
              const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
              return updatedTasks;
            });
          })
          .catch((error) => {
            console.error('Erro ao excluir tarefa:', error);
          });
      };
      
    const contextValue = {
        tasks,
        users,
        addTask,
        editTask,
        deleteTask,
    };
    //Retorna o contexto dos dados(DataContext.Provider) envolvendo todos os componentes filhos
    //e passa um objeto como valor do contexto, que inclui os estados 'tasks' , 'users'
    // e as funções  de gerenciamento de tarefas.
    //Isso tornará esses valores e funções acessíveis  a partir de qualquer componentes que consuma este contexto.
    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}
    //configurou um contexto de dados que pode ser usado para compartilhar informações 
    //e funcionalidades relacionadas a tarefas e usuários em toda a sua aplicação React.
    // Componentes podem acessar essas informações e funções usando o useData()
    // exportado. Certifique-se de importar e usar o DataProvider em torno dos componentes
    // que precisam acessar esse contexto.

export default DataContext;