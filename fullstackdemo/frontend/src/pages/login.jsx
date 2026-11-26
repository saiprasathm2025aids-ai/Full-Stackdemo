import { useState } from "react";


function Login() {
    const[email, setEmail] = useState("")
  const[pass, setPass] = useState("")
  const handlesubmit = (event)=>{
    event.preventDefalut();
    console.log(email, pass)
  }
    return ( 
    <>
      <div>Hi</div>
      {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
      */}
      <form onSubmit={handlesubmit}>
        <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
        <button type="submit" >Submit</button>
      </form>
    </>
    
     );
}

export default Login;