import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUP"
import { useEffect } from "react"
import { useAuth } from "@/RouterConfig/Context/authContext"
import { useNavigate } from "react-router"

const Auth = () => {
     const {isAuthenticated} = useAuth()
      const navigate = useNavigate()
    useEffect(()=>{
        console.log("sisea",isAuthenticated);
        if(isAuthenticated){
          
          
          //redirect the User to Home Screen
          navigate('/')
        }
      },[isAuthenticated])
  return (
    <div className="flex justify-center items-center h-screen w-screen">
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">SignUp</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login/>
      </TabsContent>
      <TabsContent value="signup">
        <SignUp/>
      </TabsContent>
      </Tabs>
      </div>
  )
}

export default Auth