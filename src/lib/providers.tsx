import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"


export function Providers({children}: {children: ReactNode}){
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}