import React,{useState}from "react";
import { useEffect } from "react";


export default function Day8() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('Hello,hope your doing good.....');
        setTimeout(()=>{
            setmsg("Congratulation!!!....you have upgraded to next level");
        },2000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}