import React, { useEffect, useState } from 'react';
import Service from './services/api';
import { User } from './components';
interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    Service.get<IUser[]>('/users').then(response=>{
      setUsers(response.data);
    })
  },[]);
  return (
    <div className="App">
     {users.map(user => <User user={user}/>)}
    </div>
  );
}

export default App;
