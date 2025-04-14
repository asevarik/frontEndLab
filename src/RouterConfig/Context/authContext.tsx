// src/contexts/AuthContext.tsx
import { UserLoginObject, UserSignUpObject } from '@/Pages/Auth/zodvalidations';
import { createContext, useContext, useEffect, useState } from 'react';

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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    //TODO :- Change this to global Context Handler
    const fetchUser = async () => {
      try {
        // const res = await fetch('/api/me', { credentials: 'include' });
        // if (res.ok) {
        //   const userData = await res.json();
        // }
        console.log("setting the user");
        
        // setUser({id:"1abcd123",name:'Abhishek',role:'admin'});

      } catch {
        setUser(null);
      } 
    };
    fetchUser();
  }, []);

  const handleSignIn = (data:UserLoginObject)=>{
    //TODO: implement the login functionality here
    console.log("from the authcontext singin",data);
  }

  const handleSignUp = (data:UserSignUpObject)=>{
    //TODO: implement the signUP functionality here
    console.log("from the authcontext singup",data);
    
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
