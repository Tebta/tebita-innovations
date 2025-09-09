'use client'
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Boxes } from "./ui/background-boxes"
import { cn } from "@/lib/utils"

const Hero = () => {
    return (
        <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            
            {/* Content Container */}
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto relative z-30 space-y-6">
                {/* Heading */}
                <h1 className={cn(
                    "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                )}>
                    Dropping{" "}
                    <span className="text-primary relative font-black inline-block">
                        Innovation
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
                    </span>{" "}
                    Into Your Business
                </h1>
                
                {/* Description */}
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                    Transform your Ethiopian business with modern web solutions — from shopping websites and landing pages to appointment systems and online ordering platforms
                </p>
                
                {/* Buttons */}
                <div className={cn(
                    "flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full px-4",
                    "sm:gap-4 md:gap-6"
                )}>
                    <Button asChild size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                            Start Your Project
                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="w-full sm:w-auto text-base md:text-lg text-white px-6 py-5 md:px-8 md:py-6 bg-primary">
                        <Link href="/portfolio" className="flex items-center justify-center">
                            View Our Work
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero