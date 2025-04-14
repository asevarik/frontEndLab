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
import { userLoginObject, UserLoginObject } from "../../zodvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/RouterConfig/Context/authContext";
const Login = () => {
  const {handleSignIn} = useAuth()
  const form = useForm<UserLoginObject>({
    resolver: zodResolver(userLoginObject),
  });
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-8">

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
                  <Input placeholder="shadcn" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="cursor-pointer">Login</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
};

export default Login;
