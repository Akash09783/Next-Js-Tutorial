"use client"
import { useRouter } from "next/navigation"
//nested routing
const Login = () =>{
    const router = useRouter()
    const navigate=(page)=>{
router.push("/Login/" +page)
    }
    return(
        <div>
          <h1>login</h1>
        <button onClick={()=>navigate("/school")}>GO TO SCHOOL</button>
        </div>
      
        
    )
}
export default Login;