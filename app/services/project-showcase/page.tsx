import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Counter } from "@/components/counter"
import { ProgressBar } from "@/components/progress-bar"
import Link from "next/link"
import {
  Presentation,
  Target,
  TrendingUp,
  Zap,
  ArrowRight,
  Check,
  Building2,
  Sofa,
  Hammer,
  Coffee,
  Palette,
  Camera,
} from "lucide-react"

export default function ProjectShowcasePage() {
  const features = [
    "Interactive portfolio galleries",
    "Before/after project displays",
    "Client testimonial integration",
    "Service category organization",
    "Mobile-responsive design",
    "SEO-optimized content",
    "Contact form integration",
    "Social media connectivity",
    "Custom branding elements",
    "Performance analytics",
  ]

  const benefits = [
    {
      icon: Target,
      title: "Professional Credibility",
      description: "Showcase your best work to build trust with potential clients",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get your portfolio online in days with our streamlined process",
    },
    {
      icon: TrendingUp,
      title: "More Inquiries",
      description: "Convert visitors into leads with compelling project displays",
    },
  ]

  const industries = [
    {
      icon: Building2,
      title: "Architecture Firms",
      description: "Showcase building designs, floor plans, and completed projects",
      examples: ["Residential homes", "Commercial buildings", "Interior designs"],
    },
    {
      icon: Sofa,
      title: "Furniture Companies",
      description: "Display furniture collections, custom pieces, and room setups",
      examples: ["Living room sets", "Custom cabinets", "Office furniture"],
    },
    {
      icon: Hammer,
      title: "Construction Companies",
      description: "Highlight construction projects, renovations, and capabilities",
      examples: ["Home renovations", "Commercial construction", "Landscaping"],
    },
    {
      icon: Coffee,
      title: "Restaurants & Cafes",
      description: "Feature signature dishes, ambiance, and dining experiences",
      examples: ["Menu highlights", "Restaurant interiors", "Special events"],
    },
    {
      icon: Palette,
      title: "Creative Agencies",
      description: "Present design work, branding projects, and creative campaigns",
      examples: ["Logo designs", "Marketing campaigns", "Web designs"],
    },
    {
      icon: Camera,
      title: "Photography Studios",
      description: "Create stunning galleries for different photography styles",
      examples: ["Wedding photography", "Product shots", "Portrait sessions"],
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
                <Presentation className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-semibold">Project Showcase</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background mb-6">
                Showcase Your Work, Win More Clients
              </h1>
              <p className="text-lg text-background mb-8 leading-relaxed">
                Professional project showcase websites that help businesses across all sectors display their work, build
                credibility, and attract more customers in Ethiopia and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Create Your Showcase
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
                <div className="relative bg-card rounded-2xl p-8 shadow-lg">
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-lg mb-4">Project Impact Metrics</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Client Inquiries</span>
                        <Counter end={340} suffix="%" className="text-2xl font-bold text-primary" />
                      </div>
                      <ProgressBar value={85} label="Portfolio Engagement" showValue />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Project Visibility</span>
                        <Counter end={250} suffix="%" className="text-2xl font-bold text-accent" />
                      </div>
                      <ProgressBar value={92} label="Client Satisfaction" showValue barClassName="bg-accent" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Business Growth</span>
                        <Counter end={180} suffix="%" className="text-2xl font-bold text-secondary" />
                      </div>
                      <ProgressBar value={78} label="Lead Conversion" showValue barClassName="bg-secondary" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Business Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many talented businesses struggle to effectively showcase their work and attract new clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6 text-center">
                <Counter end={70} suffix="%" className="text-3xl font-bold text-destructive mb-2" />
                <div className="text-sm text-muted-foreground">of businesses lack professional portfolios</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <Counter end={45} suffix="%" className="text-3xl font-bold text-destructive mb-2" />
                <div className="text-sm text-muted-foreground">lose clients due to poor presentation</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-right">
              <CardContent className="p-6 text-center">
                <Counter end={85} suffix="%" className="text-3xl font-bold text-destructive mb-2" />
                <div className="text-sm text-muted-foreground">of clients check portfolios before hiring</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Perfect for All Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From architecture to restaurants, showcase your work professionally across any sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="space-y-1">
                    {industry.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Showcase Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to present your work professionally and attract more clients
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Transform Your Business Presence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See immediate improvements in client perception and business inquiries
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

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proven Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our project showcase websites deliver measurable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <Counter end={150} suffix="+" className="text-3xl font-bold text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Businesses Showcased</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-100">
              <CardContent className="p-6 text-center">
                <Counter end={89} suffix="%" className="text-3xl font-bold text-accent mb-2" />
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-200">
              <CardContent className="p-6 text-center">
                <Counter end={240} suffix="%" className="text-3xl font-bold text-secondary mb-2" />
                <div className="text-sm text-muted-foreground">Average Inquiry Increase</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-300">
              <CardContent className="p-6 text-center">
                <Counter end={95} suffix="%" className="text-3xl font-bold text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Mobile Responsiveness</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Showcase Your Work?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a professional showcase that highlights your best projects and attracts more clients.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Showcase
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
