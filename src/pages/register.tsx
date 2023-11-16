import { Chrome, Facebook, Github, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Link from "next/link";

export default function Register(){
  return (
    <section className="flex min-h-screen bg-background justify-center items-center">
      <form className="flex flex-1 flex-col border p-6 gap-6 rounded-md max-w-md">
        <h1 className="font-bold text-3xl mb-4">Create Account</h1>
        <div className="space-y-4">
          <div className="w-full max-w-sm">
            <Label html-for="email">Name</Label>
            <Input type="name" id="name" placeholder="Name" />
          </div>
          <div className="w-full max-w-sm p">
            <Label html-for="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="w-full max-w-sm">
            <Label html-for="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </div>
        <Link href="/home">
          <Button className="w-full">
            Create account
          </Button>
        </Link>
        <Link href="/login">
          <p className="text-muted-foreground -mt-4">Already have an account? Sign-in </p>
        </Link>
        <article className="flex justify-center items-center gap-4">
          {[ Chrome, Facebook, Twitter, Github]
          .map((Icon, index) => (
            <Button key={index} variant="secondary" className="w-14 h-14">
              <Icon/>
            </Button>
          ))}
        </article>
      </form>
    </section>
  )
}