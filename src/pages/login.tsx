import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsGithub } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";


export default function Login(){
  return (
    <section className="flex min-h-screen bg-background justify-center items-center">
      <form className="flex flex-1 flex-col border p-6 gap-6 rounded-md max-w-md">
        <header className="flex flex-col justify-center items-center">
          <h1 className="font-medium text-2xl text-primary">Welcome back</h1>
          <p className="text-muted-foreground mt-2">Please enter your details to sign in.</p>
        </header>
        <article className="flex justify-center items-center gap-4">
          {[ BsApple, FcGoogle, BsGithub]
          .map((Icon, index) => (
            <Button key={index} variant="outline" className="w-full h-14">
              <Icon className="w-4 h-4" color="#000"/>
            </Button>
          ))}
        </article>
        <div className="flex w-full items-center justify-center gap-4 overflow-hidden text-muted-foreground text-sm mb-6">
          <Separator/>OR<Separator/>
        </div>
        <div className="space-y-6">
          <Input type="email" id="email" placeholder="Enter your email..." />
          <Input type="password" id="password" placeholder="• • • • • • • • • • " />
        </div>
        <div className="flex gap-2 items-center justify-start">
          <Checkbox id="remember"/>
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >Remember me</label>
        </div>
        <Link href="/home">
          <Button className="w-full">
            Sign in
          </Button>
        </Link>
        <Link href="/register">
          <p className="text-muted-foreground text-center">Dont have an account yet? Sign Up </p>
        </Link>
      </form>
    </section>
  )
}