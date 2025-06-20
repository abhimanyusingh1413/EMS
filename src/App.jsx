import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashborad'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStrogae'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // console.log(authData.userData.employees);

  // useEffect(() => {
  //   if(authData.userData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData.userData]);

  const handleLogin = (email,password) => {
    if(email == 'admin@gmail.com' && password == '123'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData.userData){
      const employee = authData.userData.employees.find((e)=> e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }else{
      console.log("Invalid credentials");
    }
  }

  
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    { user == 'admin' ?<AdminDashboard/> :(user == 'employee'? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App

