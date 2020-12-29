import React, { useState, useEffect } from "react";

var Table = ({ users }) => {
  var [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-2"
              onClick={() => {
                var updateSort = [...users].sort((a, b) => {

                  if (a.name.first < b.name.first) {
                    return -1;}
                  if (a.name.first > b.name.first) {
                    return 1; }
                     return 0;
                });

                updateSortedUsers(updateSort);
              }} >First</th>
            <th scope="col-2"
                 onClick={() => {
                    var updateSort = [...users].sort((a, b) => {
    
                      if (a.name.last < b.name.last) {
                        return -1;}
                      if (a.name.last > b.name.last) {
                        return 1; }
                         return 0;
                    });
    
                    updateSortedUsers(updateSort);
                  }}>Last</th>
            <th scope="col-2">gender</th>
            <th scope="col-2">email</th>
            <th scope="col-2">phone</th>
            <th scope="col-2">picture</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              picture: { thumbnail },
              phone,
              gender,
              email,
              name: { first, last }
            }) => (
              <tr key={email}>
                <th>{first}</th>
                <td>{last}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                <img src={thumbnail} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
