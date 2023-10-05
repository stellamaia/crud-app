import './App.css';
import { DataProvider } from './DataContext';
import TaskList from './TaskList'; // Importe outros componentes conforme necessário
import UserList from './UserList';
function App() {
  return (
    <DataProvider>
      <div className="App">
        {/* Renderize os componentes que desejam acessar o contexto aqui */}
        <TaskList />
        <UserList />
        {/* Adicione outros componentes conforme necessário */}
      </div>
    </DataProvider>
  )
}

export default App;
