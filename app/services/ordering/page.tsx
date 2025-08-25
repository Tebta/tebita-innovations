import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  UtensilsCrossed,
  Smartphone,
  Clock,
  CreditCard,
  ArrowRight,
  Check,
  TrendingUp,
  Users,
  Bell,
} from "lucide-react"

export default function OrderingPage() {
  const features = [
    "Digital menu management",
    "Real-time order tracking",
    "Payment gateway integration",
    "Kitchen display system",
    "Customer notifications",
    "Delivery management",
    "Inventory integration",
    "Analytics and reporting",
    "Multi-location support",
    "Loyalty program integration",
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Online ordering can increase sales by up to 40%",
    },
    {
      icon: Clock,
      title: "Faster Service",
      description: "Reduce wait times and improve customer satisfaction",
    },
    {
      icon: Users,
      title: "Better Experience",
      description: "Customers can browse, customize, and order at their pace",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <UtensilsCrossed className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-semibold">Online Ordering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background mb-6">
                Digital Ordering for Restaurants & Cafes
              </h1>
              <p className="text-lg text-background mb-8 leading-relaxed">
                Transform your restaurant with a complete online ordering system. Perfect for hotels, restaurants, and
                cafes looking to increase sales and improve customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Launch Your System
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Demo</Link>
                </Button> */}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/50 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Mobile Orders</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-accent/10 rounded">
                        <span className="text-sm">Order #1234 - Preparing</span>
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-secondary/10 rounded">
                        <span className="text-sm">Order #1235 - Ready</span>
                        <Bell className="h-4 w-4 text-secondary" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                        <span className="text-sm">Order #1236 - Delivered</span>
                        <CreditCard className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Restaurant Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional ordering methods limit growth and create operational inefficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">60%</div>
                <div className="text-sm text-muted-foreground">of customers prefer ordering online for convenience</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">30%</div>
                <div className="text-sm text-muted-foreground">higher average order value with online ordering</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-right">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">15 min</div>
                <div className="text-sm text-muted-foreground">average time saved per order with digital systems</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Complete Ordering Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage online orders efficiently and profitably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 gap-y-6 mx-auto md:max-w-3xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Grow Your Restaurant Business</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See immediate improvements in sales, efficiency, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Perfect For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Any food service business looking to modernize their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Restaurants</h3>
                <p className="text-sm text-muted-foreground">Fine dining, casual, fast food</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-100">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Cafes</h3>
                <p className="text-sm text-muted-foreground">Coffee shops, bakeries</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Hotels</h3>
                <p className="text-sm text-muted-foreground">Room service, hotel dining</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Food Trucks</h3>
                <p className="text-sm text-muted-foreground">Mobile food vendors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Modernize Your Restaurant?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join successful restaurants that have increased their revenue with online ordering systems.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Your System Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
