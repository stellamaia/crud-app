import React from 'react';
import { useData } from './DataContext';
import './App.css';

const UserList = () => {
  const { users } = useData();

  return (
    <div>
      <h2>Usuários</h2>
      <div className='row'>
        {users.map((user) => (



          <div key={user.id} className='container col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>

            <ul className='container-ul'>
            <li>
              <p>
                <strong>Nome:</strong> {user.name}
              </p>
              <p>
                <strong>Sobrenome:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Endereço:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </p>
              <p>
                <strong>Telefone:</strong> {user.phone}
              </p>
              <p>
                <strong>Site web:</strong> {user.website}
              </p>
              <p>
                <strong>Empresa:</strong> {user.company.name}
              </p>
            </li>
            </ul>
          </div>
      
   
  
        ))}
    </div>
    </div >
  );
};

export default UserList;
