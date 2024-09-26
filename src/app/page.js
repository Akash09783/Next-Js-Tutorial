"use client"
import {useState} from 'react'
import './globals.css'
import Link from 'next/link';
import {useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Next js</h1>
     <User name="aks"/>
     <Link href="/Login">Go To Login</Link>
<button onClick={()=>router.push("/About")} >Go To About</button>
<button onClick={()=>router.push("/Login")} >Go To zczxcxzcxzc</button>
    </div>
  );
}


const User =( props)=>{
  const [name,setName] = useState("akash")
  const Clickk=()=>{
    alert("fruit")
  }
  const click22=(item)=>{
alert(item)
  }
  const click3=()=>{
    setName("zzz")
  }
  const innerComp=()=>{
    return(
      <h1>asdasdasd</h1>
    )

  }
  return(
    <div className='flex flex-col'>
      <h1>My name is {props.name}</h1>
      <h1 className="font-semibold">Events,states,functions {name}</h1>
      <button className='bg-blue-600 ' onClick={Clickk}>Click me</button>
      <button className='bg-red-800' onClick={()=>click22("cxvxv")} >click 2</button>
      <button onClick={()=>click3(setName)}>click3</button>
      {innerComp()}
    
    </div>


  )

}