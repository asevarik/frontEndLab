import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { userSignUpObject, UserSignUpObject } from "../../zodvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/RouterConfig/Context/authContext";

const SignUp = () => {
  const {handleSignUp} = useAuth()
  const form = useForm<UserSignUpObject>({
    resolver: zodResolver(userSignUpObject),
    defaultValues:{
      email:"asevarik@gmail.com",
      password:"medika@1234",
      username:"jhon wick",
      name:"The Undertaker"
    }
  });
  
  return (
    <Card>
      <CardHeader> <CardTitle>SignUp</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-8">

          
           <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="password"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="cursor-pointer">SignUp</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
};

export default SignUp;
