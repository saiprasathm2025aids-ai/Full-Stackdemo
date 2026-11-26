import { useState } from "react";

function Login(){
    const navigate=useNavigate();
    const[formdata,setFormdata]=useState({user:"",pass:""})

    const print = (e)=>{
        e.preventDefault();
        console.log(formdata)
        alert("Login Succesfully")
    };
function handlechange(e){
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
}
    return( 
    <>
    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter username." required type="text" name="user" onChange={handlechange} />
    
        <label>Password </label>
        <input placeholder="Enter Password" required type="password" name="pass" onChange={handlechange} />

        <button type="submit">Submit</button>
    </form>
 
    </>
    );
}
export default Login;