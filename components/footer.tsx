import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Tebita Innovations"
              width={150}
              height={50}
              className="h-10 w-auto "
            />
            <p className="text-sm text-secondary-foreground/80">
              Dropping innovation into your business. We specialize in modern web solutions that help Ethiopian
              businesses grow and thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link target="_blank" href='https://web.facebook.com/profile.php?id=61580406096564'>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary-foreground/80 hover:text-secondary-foreground"
              >
                
                <Facebook className="h-4 w-4" />
              </Button>
                </Link>
                <Link target="_blank" href='https://t.me/Tebita_Innovations'>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary-foreground/80 hover:text-secondary-foreground"
              >
                <Image src='/telegram.svg' width={16} height={16} alt="" />
                {/* <Twitter className="h-4 w-4" /> */}
              </Button>
                </Link>
                <Link target="_blank" href='https://www.linkedin.com/company/tebita-innovations/'>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary-foreground/80 hover:text-secondary-foreground"
              >
               <Linkedin className="h-4 w-4" />
              </Button>
               </Link> 
               <Link target="_blank" href='https://www.instagram.com/tebita_innovations?igsh=MW1kNnAzdXAwYnNvdA=='>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary-foreground/80 hover:text-secondary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Button>
                </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Shopping Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-pages"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/services/appointments"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Appointment Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ordering"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Online Ordering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  href="/faq"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-secondary-foreground/80">info@tebitainnovations.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-secondary-foreground/80">+251 963798300</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-secondary-foreground/80">Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Tebita Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
