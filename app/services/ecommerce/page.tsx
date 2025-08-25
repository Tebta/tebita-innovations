import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Smartphone, ArrowRight, Check } from "lucide-react"

export default function EcommercePage() {
  const features = [
    "Custom product catalog management",
    "Secure payment gateway integration",
    "Inventory tracking and management",
    "Order processing and fulfillment",
    "Customer account management",
    "Mobile-responsive design",
    "SEO optimization",
    "Analytics and reporting",
    "Multi-language support",
    "Social media integration",
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: "Increase Sales",
      description: "Reach customers 24/7 and expand your market beyond physical location",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Optimized for all devices ensuring customers can shop anywhere, anytime",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices to protect customer data and transactions",
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
                <ShoppingCart className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-semibold">E-commerce Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background mb-6">
                Shopping Websites That Drive Sales
              </h1>
              <p className="text-lg text-background mb-8 leading-relaxed">
                Transform your physical store into a thriving online business. Our e-commerce platforms are designed
                specifically for Ethiopian businesses, with local payment integration and customer behavior insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Store
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Examples</Link>
                </Button> */}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/50 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-card/90 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Online Store</div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 text-center">
                      <CreditCard className="h-8 w-8 text-accent mx-auto mb-2" />
                      <div className="text-sm font-medium">Payments</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <Package className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-sm font-medium">Inventory</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Analytics</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many Ethiopian businesses are losing customers and revenue by relying solely on physical stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">70%</div>
                <div className="text-sm text-muted-foreground">
                  of customers now prefer shopping online for convenience
                </div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Online stores work around the clock while physical stores are closed
                </div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-right">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">300%</div>
                <div className="text-sm text-muted-foreground">
                  Average increase in customer reach with online presence
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Complete E-commerce Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful online store, tailored for Ethiopian businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mx-auto md:max-w-3xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center  space-x-3 animate-fade-in-up"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Your Business Needs This</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your business operations and customer experience
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join successful Ethiopian businesses that have transformed their sales with our e-commerce solutions.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Today
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
