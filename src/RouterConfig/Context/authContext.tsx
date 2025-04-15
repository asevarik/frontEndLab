// src/contexts/AuthContext.tsx
import { userSignIn, userSignUp } from '@/api/auth/auth';
import { api } from '@/api/client';
import { UserLoginObject, UserSignUpObject } from '@/Pages/Auth/zodvalidations';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

type Role = 'user' | 'admin';

interface User {
  id: string;
  name: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  handleSignUp:(data:UserSignUpObject)=>void;
  handleSignIn:(data:UserLoginObject)=>void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    //TODO :- Change this to global Context Handler
    const fetchUser = async () => {
      try {
        const res = await api.get('/api/me', { credentials: 'include' });
        
        console.log("setting the user");
        
        // setUser({id:"1abcd123",name:'Abhishek',role:'admin'});

      } catch {
        setUser(null);
      } 
    };
    fetchUser();
  }, []);

  const handleSignIn = async(data:UserLoginObject)=>{
    try{
      const response = await userSignIn(data);
      
      if(response.statusCode==200){
        toast(response.message)
        setUser({id:"1abcd123",name:'Abhishek',role:'admin'});
      }
    }catch(err:any){
      console.log("errr obejct",err);
      
      toast(err.message)
    }
  }

  const handleSignUp = async(data:UserSignUpObject)=>{
    try{
      const response = await userSignUp(data);
      if(response?.statusCode==200){
        toast(response.message)
        setUser({id:"1abcd123",name:'Abhishek',role:'admin'})
      }
    }catch(err:any){
      console.log("errr obejct",err);
      toast(err.message)
    }
    
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, setUser,handleSignIn,handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
