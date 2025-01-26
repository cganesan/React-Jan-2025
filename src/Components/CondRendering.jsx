import React, { useState } from "react";

// const CondRendering = ()=>{
//     const [login, setLogin]= useState(false);

// const handleLogin = ()=>{
//     setLogin((prevState)=>!prevState)
// }

// //const logginin = login? Sign+" "+In : SignOut;

//     return (
//         <div className="condRendering">
//             <h1>Condtiotnal Rendering Exmaple- Login screen</h1>
//             <button onClick= {handleLogin}>{login? "Sign in" : "Sign out"}</button>
//             <h2>{login?" Hi User! Welcome" : "Please login to continue"}</h2>
//         </div>
//     )
// }

const CondRendering = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prevState) => !prevState);
  };
  //ternary operator

  const dog = login ? "Sign Out" : "sign in";

  return (
    <div className="condRendering">
      <h2>This is Conditional rendering example</h2>
      <button onClick={handleLogin}>{dog}</button>
      <h3>{login ? "Hi, Welcome" : "Please login to continue"}</h3>
    </div>
  );
};

export default CondRendering;
