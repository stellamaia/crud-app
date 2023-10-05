// UserList.js
import React from 'react';
import { useData } from './DataContext';

const UserList = () => {
  const { users } = useData();

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}<br /> <br />
            {user.username}<br /> <br />
            {user.email}<br /> <br />
            {/* {user.address}<br/> <br/>  */}
            {user.phone}<br /> <br />
            {user.website}<br /> <br />
            {user.company}<br /> <br />




          </li>

        ))}
      </ul>
      <ul>
        {users.map((Addres) => (
          <li>
            {{ addres.Address }}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((company) => (
          <li>
            {{ company.Company }}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
