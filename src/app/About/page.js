"use client"
import { useRouter } from "next/navigation";

const About = () =>{
    const router = useRouter()
    const navigate=(name)=>{
router.push(name)
    }
    return(
     
        <div>
           <h1>About</h1>
        <button onClick={()=>router.push("/")} >Go To Home</button>
        <button onClick={()=>navigate("/")} >Go</button>
        </div>
    )
}
export default About;