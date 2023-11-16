'use client'

import { BellDot } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const links = [
  {title: "Home", path: "/dashboard", variant: "outline"},
  {title: "info", path: "/info", variant: "link"},
  {title: "home", path: "/dashboard", variant: "link"},
  {title: "home", path: "/dashboard", variant: "link"},
]

export function Navbar(){
  return (
    <nav className="w-full flex justify-between py-4">
      <div className="flex gap-3 items-center">
        <span className="w-8 h-8 bg-primary/20 flex justify-center items-center rounded-full uppercase text-xs">kr</span>
        <p>Kaue Recio</p>
      </div>
      <div className="flex items-center gap-2">
        {links.map((link, index) => (
          <Link href={link.path} key={index}>
            <Button variant={link.variant}>{link.title}</Button>
          </Link>
        ))}
        <Button variant="outline" size="icon">
          <BellDot className="h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}