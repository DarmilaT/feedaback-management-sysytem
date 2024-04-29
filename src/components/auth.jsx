import React, { useState } from 'react';
import {auth} from "../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
export default function Auth(){
    const [emial,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const signIn=async()=>{
       console.log(emial);
       try {
        await createUserWithEmailAndPassword(auth,emial,password)
       } catch (error) {
        console.log(error)
       }
    }
    return <center>
        <div>
        <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}>
        </input>
        <input placeholder="password" onChange={(e)=>setPassword(e.target.value)} type='password'>
        </input>
        <button onClick={signIn}>Sign Up</button>
    </div>
    </center>
}