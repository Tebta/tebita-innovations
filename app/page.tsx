import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, ShoppingCart, FileText, Calendar, UtensilsCrossed, Star, Users, Award, Zap } from "lucide-react"
import Hero from "@/components/hero"
import Stats from "@/components/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
    <Hero />
    <Stats />

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the modern marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shopping Websites</h3>
                <p className="text-muted-foreground mb-4">
                  Complete e-commerce platforms for shops and businesses with payment integration and inventory
                  management
                </p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link href="/services/ecommerce">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Landing Pages</h3>
                <p className="text-muted-foreground mb-4">
                  High-converting promotional pages for products, services, and campaigns that drive customer action
                </p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link href="/services/landing-pages">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Appointment Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Streamlined booking systems for doctors, psychologists, consultants, and service providers
                </p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link href="/services/appointments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Online Ordering</h3>
                <p className="text-muted-foreground mb-4">
                  Digital ordering systems for hotels, restaurants, and cafes with real-time order management
                </p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link href="/services/ordering">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Tebita Innovations?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine local understanding with global technology standards to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-left">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast & Modern</h3>
              <p className="text-muted-foreground">
                We use cutting-edge technologies to build fast, responsive, and modern web solutions that perform
                exceptionally across all devices.
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Local Focus</h3>
              <p className="text-muted-foreground">
                Deep understanding of the Ethiopian market and business culture, ensuring solutions that resonate with
                your local customers.
              </p>
            </div>

            <div className="text-center animate-fade-in-right">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful projects that have helped businesses increase sales, improve customer
                engagement, and grow their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join the growing number of Ethiopian businesses that have modernized their operations with our digital
              solutions. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Meeting
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Tebita Innovations transformed our small shop into a thriving online business. Sales increased by
                  300% in just 3 months!"
                </p>
                <div className="font-semibold">Sarah Alemayehu</div>
                <div className="text-sm text-muted-foreground">Owner, Addis Fashion Store</div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The appointment system they built for our clinic has streamlined our operations completely. Patients
                  love the convenience!"
                </p>
                <div className="font-semibold">Dr. Meron Tadesse</div>
                <div className="text-sm text-muted-foreground">Medical Director, Bethel Clinic</div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, reliable, and truly understands the Ethiopian market. Our restaurant's online ordering
                  system is perfect!"
                </p>
                <div className="font-semibold">Dawit Bekele</div>
                <div className="text-sm text-muted-foreground">Manager, Blue Nile Restaurant</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
