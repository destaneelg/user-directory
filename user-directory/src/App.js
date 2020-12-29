import React, { useEffect, useState } from "react";
import FilterFirst from "./FilterFunction";
import FilterLast from "./FilterLast";
import Table from "./Table";
import{ getUsers } from "./API"
import './App.css';

function App() {
  const [initialUsers, updateUsers] = useState([]);
  const [usersToRender, updateRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateUsers(results));
  }, []);

  return (
    <div className="container">
    <h1>User Directory</h1>
    <div className="row"> 
      <p>
      Search by first name below:
    <FilterFirst users={initialUsers} updateUsers={updateRender} />
      Search by last name below:
    <FilterLast users={initialUsers} updateUsers={updateRender} />
    </p>
    </div>
    <div className="row">
    <Table className="col-12" users={usersToRender} />
    </div>
  
  </div>
   
  );
}
export default App;
