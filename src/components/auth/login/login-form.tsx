import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // const [email, setEmail] = React.useState("");
  // const [error, setError] = React.useState("");
  // const [password, setPassword] = React.useState("");
  //
  // const handleLogin = () => {
  //   if (email === "") {
  //     setError("Email is required");
  //     return;
  //   }
  //   if (password === "") {
  //     setError("Password is required");
  //     return;
  //   }
  //   setError("");
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
  // };
  //
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full flex-col gap-2">
          <Button>Continue with google</Button>
          <Button>Continue with apple</Button>
          <Button>Continue with facebook</Button>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 py-4">
          <Separator className="w-full" />
          <div>or</div>
          <Separator className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2">
            <Label className="flex flex-col gap-1">
              <span>Email</span>
              <Input
                className="p-5"
                type="email"
                placeholder="acmeinc@example.com"
              />
            </Label>
            <Label className="flex flex-col gap-1">
              <span>Password</span>
              <Input className="p-5" type="password" placeholder="**********" />
            </Label>
            <Button type="submit">Login</Button>
            <p className="text-center text-[13.5px]">
              Don't have an account? Sign up{" "}
              <Link to="/auth/sign-up">
                <span className="underline">here</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
