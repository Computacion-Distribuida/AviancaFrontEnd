import React from 'react';
import './styles/Login.css';
import { Auth } from 'aws-amplify';
function Login() {
  
  return (
    <div className="login-container">
      {/* <button onClick={()=> Auth.federatedSignIn()}>normal</button>
      <button onClick={checkUser}>Check User</button>
      <button onClick={signOut}>Sign Out</button> */}
    </div>
  );
}

export default Login;
