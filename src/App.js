import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';
import swal from 'sweetalert';
class App extends Component {
renderHeader(){
  return(
    <header className="App-header">
    <h1 className="App-title">User Directory</h1>
    </header>
  )
}

renderLogin(){
  return(
    <div className="loginForm">
      <h1 className="loginFormHeader"><b>Log-in Page</b></h1>
      <form>
        <div class="form-group">
          <label>Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" placeholder="password"></input>  
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{this.login()}}>Log-In</button>
      </form>
    </div>
    )
}
render() {
  return(
<div className="App">
  {this.renderHeader()}
  {!this.state.user && this.renderLogin()}
  {this.state.user && !this.state.addUser && this.renderToDoList()}
  {this.state.addUser && this.renderaddUser()}
  {this.state.user && !this.state.addUser && this.renderLogOut()}

</div>
    );
 }

renderaddUser() {
  return(
  <div className="loginForm">
    <h1 className="todoHeader">New user</h1>
    <form className="addUserForm">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="email" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
     </div>
     <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter Email"/>
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input type="text" className="form-control" id="salary" aria-describedby="emailHelp" placeholder="Enter Salary"/>
      </div>
      <a class="btn-floating btn-large waves-effect waves-light blue " onClick={()=>{
        this.addUserData()
      }}><i class="material-icons">+
      </i>
      </a>
    </form>
    <button className="btn btn-danger addUserForm" onClick={()=>{
      this.canceladdUser()
          }}>Cancel</button>
    </div>
    )
}

renderToDoList(){
  return(

    <div className="renderToDoList">
      <h1 className="todoHeader">User List</h1>
      <div className="userList">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col" className="centerAll">Number</th>
              <th scope="col" className="centerAll">First Name</th>
              <th scope="col" className="centerAll">Last Name</th>
              <th scope="col" className="centerAll">Email</th>
              <th scope="col" className="centerAll">Salary</th>
              <th scope="col" className="centerAll">Join Date</th>
              <th scope="col" className="centerAll">Edit</th>
              <th scope="col" className="centerAll">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map((value, index)=>{
              return(
                this.state.editIndex !== index ? <tr>
                   <th scope="row" id={index+1}>{index+1}</th>
                   <td className="centerAll" id={index+2}>{value.firstName}</td>
                   <td className="centerAll" id={index+ 3}>{value.lastName}</td>
                   <td className="centerAll" id={index+ 4}>{value.email}</td>
                   <td className="centerAll" id={index+ 5}>{value.salary}</td>
                   <td className="centerAll" id={index+ 6}>{value.joinDate}</td>
                   <td className="centerAll" id={index+7}><button onClick={()=>{
                         this.edituser(index)
                       }} className="btn btn-primary">Edit</button></td>
                      <td className="centerAll" id={index+8}><button onClick={()=>{
                       this.deleteuser(index)
                      }} className="btn btn-danger">Delete</button></td>
                </tr>
                : <tr>
                  <th scope="row"  id={index+1}>{index+1} </th>
                  <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.firstName} onChange={this.updateFirstName}/></td>
                  <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.lastName} onChange={this.updateLastName}/></td>
                  <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.email} onChange={this.updateEmail}/></td>
                  <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.salary} onChange={this.updateSalary}/></td>
                  <td className="centerAll" id={index+6+'edit'}><input type="text" defaultValue={value.joinDate}/></td>
                  <td className="centerAll" id={index+7+"edit"}><button onClick={()=>{
                    this.updateuser(index)
                  }} className="btn btn-info">Update</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <a class="btn-floating btn-large waves-effect waves-light green" onClick={()=>{
        this.addUser()
      }}><i class="material-icons">+</i>
      </a>  
    </div>
  )
}

renderLogOut(){
   return(
     <div className="LogOut">
       <button className="btn btn-warning" onClick={()=>{
         this.logOut();
       }}>Log Out</button>
     </div>
   )
 };

 
 login() {
  const email = document.getElementById(`email`).value;
  const password = document.getElementById('password').value;
  email === "admin@domain.com" && password === "admin" ? this.setState({
    user:{
      email : email,
      password : password    
    }
      }) : swal("The username or password did not match our records", "Please correct information and try again.");
}

addUser() {
    this.setState({
        addUser : true,
      })
}

canceladdUser(){
  this.setState({
    addUser : false,
  })
}

addUserData(){
  
  const date = new Date();
  const firstName = document.getElementById(`firstName`).value;
  const lastName = document.getElementById(`lastName`).value;
  const email2 = document.getElementById(`emailInput`).value;
  const salary = document.getElementById(`salary`).value;
  const joinDate = date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()
  this.state.userList.push(
    {
      firstName : firstName,
      lastName :  lastName,
      email : email2,
      salary : salary,
      joinDate : joinDate

    },
  )
    this.setState({
      addUser : false,
    })
}

updateFirstName(e){
  this.setState({
    editedFirstName : e.target.value
  }
  )
  }

  updateLastName(e){
    this.setState({
      editedLastName : e.target.value
    })
  }

  updateEmail(e){
    this.setState({
      editedEmail : e.target.value
    })
    }
    
  updateSalary(e){
    this.setState({
      editedSalary : e.target.value
    })
      }

logOut(){
  this.setState({
    user : false
  })
  
}
updateuser(){
  const edI = this.state.editIndex
  this.state.editedFirstName && (this.state.userList[edI].firstName = this.state.editedFirstName)
  this.state.editedLastName && (this.state.userList[edI].lastName = this.state.editedLastName)
  this.state.editedEmail && (this.state.userList[edI].email = this.state.editedEmail)
  this.state.editedSalary && (this.state.userList[edI].salary = this.state.editedSalary)
  this.setState({

    editIndex : null
  })
}

deleteuser(index){
 const empList = this.state.userList;
  empList.splice(index, 1)
 this.setState({
   empList
 })
}

 constructor(){
    
  super();
  this.state={
    userList : [
      {
        firstName : "Sally ",
        lastName :  "Parker",
        email : "sally.parker@email.com",
        salary : "20,000",
        joinDate : "10/20/2020"

      },
      {
        firstName : "Brenda",
        lastName :  "Washington",
        email : "brenda.washington@email.com",
        salary : "450,000",
        joinDate : "08/30/2020"

      },
      {
        firstName : "Paul",
        lastName :  "Davis",
        email : "pauldavis@email.com",
        salary : "120,000",
        joinDate : '05/16/2020'

      }
    ],
    addUser : false,
    editIndex : null,
  }
  this.updateFirstName = this.updateFirstName.bind(this)
  this.updateLastName = this.updateLastName.bind(this)
  this.updateEmail = this.updateEmail.bind(this)
  this.updateSalary = this.updateSalary.bind(this)
  
}

}
export default App;
