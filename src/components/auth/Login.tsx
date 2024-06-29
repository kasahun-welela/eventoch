import { Card } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/validations/LoginSchema";
import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleViewPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = () => {};
  return (
    <>
      <Card className="max-w-md md:mx-auto p-5 md:my-10 my-16   mx-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-base">
                      Username
                    </FormLabel>
                    <FormControl>
                      <div className="relative  flex bg-input items-center pl-3  rounded-lg focus-within:ring-1 focus-within:ring-primary">
                        <i className="ri-user-line h-6 w-6 mr-1  stroke-current text-primary"></i>
                        <Input
                          placeholder="User email"
                          autoCapitalize="none"
                          autoComplete="username"
                          type="username"
                          autoCorrect="off"
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
                      </div>
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
                    <FormLabel className="text-muted-foreground text-base">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center bg-input rounded-lg pl-3 focus-within:ring-1 focus-within:ring-primary">
                        <i className="ri-lock-password-line h-6 w-6 mr-1 text-primary"></i>
                        <Input
                          placeholder="**********"
                          type={showPassword ? "text" : "password"}
                          autoCapitalize="none"
                          autoComplete="password"
                          autoCorrect="off"
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                          {showPassword ? (
                            <i
                              className="ri-eye-line h-6 w-6"
                              onClick={toggleViewPassword}
                            ></i>
                          ) : (
                            <i
                              className="ri-eye-off-line h-6 w-6"
                              onClick={toggleViewPassword}
                            ></i>
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <Link to="/signup" className="hover:text-primary">
                {" "}
                Register
              </Link>
              <Link to="/forgot_password" className="hover:text-primary">
                Forgot Password
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full  h-14 rounded-xl text-base hover:opacity-70 "
            >
              Login{" "}
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
}

export default Login;
