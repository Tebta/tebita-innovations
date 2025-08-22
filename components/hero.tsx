'use client'
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Boxes } from "./ui/background-boxes"
import { cn } from "@/lib/utils"

const Hero = () => {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <p className="text-sm text-muted-foreground   mx-auto leading-relaxed">
            Transform your Ethiopian business with modern web solutions — from shopping websites and landing pages to appointment systems and online ordering platforms
            </p>
            <h1 className={cn("md:text-7xl font-bold text-center animate-fade-in-up text-xl text-white relative z-20")}>
            Dropping{" "}
              <span className="text-primary relative font-black">
                Innovation
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
              </span>{" "}
              Into Your Business
            </h1>
            <div className={cn("flex z-20 mt-8 flex-col sm:flex-row gap-4 justify-center items-center")}>
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="text-lg text-white px-8 py-6 bg-primary">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
         

        </div>
    )
}

export default Hero