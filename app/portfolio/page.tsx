import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Calendar, ShoppingCart, FileText, UtensilsCrossed, Star, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Addis Fashion Store",
      category: "E-commerce",
      description:
        "Complete online shopping platform for a local fashion retailer with inventory management and payment integration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["E-commerce", "Payment Gateway", "Inventory"],
      icon: ShoppingCart,
      results: "300% increase in sales within 3 months",
      testimonial: "Tebita transformed our small shop into a thriving online business!",
      client: "Sarah Alemayehu, Owner",
    },
    {
      id: 2,
      title: "Bethel Medical Clinic",
      category: "Appointment System",
      description:
        "Streamlined appointment booking system for a medical clinic with patient management and automated reminders.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Healthcare", "Booking System", "Notifications"],
      icon: Calendar,
      results: "60% reduction in no-shows, 80% less phone calls",
      testimonial: "The system has completely streamlined our operations. Patients love the convenience!",
      client: "Dr. Meron Tadesse, Medical Director",
    },
    {
      id: 3,
      title: "Blue Nile Restaurant",
      category: "Online Ordering",
      description:
        "Digital ordering system for a popular Ethiopian restaurant with real-time order tracking and delivery management.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Restaurant", "Online Ordering", "Delivery"],
      icon: UtensilsCrossed,
      results: "40% increase in orders, improved customer satisfaction",
      testimonial: "Professional, reliable, and truly understands the Ethiopian market. Perfect system!",
      client: "Dawit Bekele, Manager",
    },
    {
      id: 4,
      title: "TechStart Ethiopia",
      category: "Landing Page",
      description:
        "High-converting landing page for a tech startup's product launch with lead generation and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Startup", "Lead Generation", "Analytics"],
      icon: FileText,
      results: "250% increase in lead conversion rate",
      testimonial: "The landing page exceeded our expectations and drove incredible results for our launch.",
      client: "Hanan Yosef, Founder",
    },
    {
      id: 5,
      title: "Habesha Coffee House",
      category: "E-commerce",
      description:
        "Online coffee shop with subscription service, custom blends ordering, and loyalty program integration.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Coffee", "Subscription", "Loyalty Program"],
      icon: ShoppingCart,
      results: "150% growth in online sales, 500+ subscribers",
      testimonial: "Our online presence has brought our traditional coffee culture to customers worldwide.",
      client: "Alemseged Teshome, Owner",
    },
    {
      id: 6,
      title: "Wellness Center Addis",
      category: "Appointment System",
      description:
        "Comprehensive booking system for a wellness center offering multiple services with staff scheduling.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Wellness", "Multi-Service", "Staff Management"],
      icon: Calendar,
      results: "90% booking efficiency improvement",
      testimonial: "Managing appointments across multiple services has never been easier.",
      client: "Marta Girma, Center Manager",
    },
  ]

  const categories = ["All", "E-commerce", "Landing Page", "Appointment System", "Online Ordering"]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-primary relative">
                Portfolio
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Discover how we've helped Ethiopian businesses transform their operations and achieve remarkable growth
              through innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up delay-100">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-3xl font-bold text-primary mb-2">250%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <project.icon className="h-3 w-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm font-medium text-primary mb-2">{project.results}</div>
                    <div className="flex items-start space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xs text-muted-foreground italic mt-2 line-clamp-2">
                      "{project.testimonial}"
                    </blockquote>
                    <div className="text-xs font-medium mt-1">- {project.client}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Success Story Spotlight</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Addis Fashion Store Transformation</h3>
                  <p className="text-muted-foreground">
                    A small local fashion retailer struggling with limited reach and manual inventory management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">The Challenge</h4>
                  <p className="text-muted-foreground text-sm">
                    Limited to walk-in customers, no online presence, manual inventory tracking, and difficulty
                    competing with larger retailers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete e-commerce platform with automated inventory management, secure payment processing, and
                    mobile-optimized design.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">The Results</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• 300% increase in sales within 3 months</li>
                    <li>• Expanded customer base beyond Addis Ababa</li>
                    <li>• Reduced inventory management time by 70%</li>
                    <li>• 24/7 sales capability</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Card className="p-6">
                <div className="text-center mb-6">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Success metrics"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">Before</div>
                      <div className="text-sm text-muted-foreground">Local customers only</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">After</div>
                      <div className="text-sm text-muted-foreground">Nationwide reach</div>
                    </div>
                  </div>
                </div>
                <blockquote className="text-center italic text-muted-foreground">
                  "Tebita Innovations didn't just build us a website - they transformed our entire business model and
                  opened doors we never knew existed."
                </blockquote>
                <div className="text-center font-medium mt-2">- Sarah Alemayehu, Store Owner</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we ensure every project delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                We understand your business, goals, and challenges through detailed consultation.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                Custom design and user experience tailored to your brand and Ethiopian market.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">
                Build robust, secure, and scalable solutions using modern technologies.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground text-sm">
                Smooth deployment with ongoing support and optimization for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a digital solution that transforms your business and drives remarkable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
