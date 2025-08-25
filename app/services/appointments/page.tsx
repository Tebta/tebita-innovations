import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, Bell, ArrowRight, Check, BarChart3 } from "lucide-react"

export default function AppointmentsPage() {
  const features = [
    "Online booking calendar",
    "Automated appointment reminders",
    "Patient/client management",
    "Payment integration",
    "Staff scheduling",
    "Mobile app access",
    "Email and SMS notifications",
    "Appointment history tracking",
    "Cancellation and rescheduling",
    "Multi-location support",
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce phone calls and manual scheduling by 80%",
    },
    {
      icon: Users,
      title: "Better Experience",
      description: "Clients can book appointments 24/7 at their convenience",
    },
    {
      icon: BarChart3,
      title: "Reduce No-Shows",
      description: "Automated reminders decrease missed appointments by 60%",
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
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-semibold">Appointment Systems</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background mb-6">
                Streamline Your Appointment Booking
              </h1>
              <p className="text-lg text-background mb-8 leading-relaxed">
                Perfect for doctors, psychologists, consultants, and service providers. Let clients book appointments
                online while you focus on providing excellent service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Your System
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">See Demo</Link>
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
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Today's Schedule</span>
                      </div>
                      <span className="text-xs text-muted-foreground">8 appointments</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-accent/10 rounded">
                        <span className="text-sm">9:00 AM - Sarah A.</span>
                        <Bell className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-secondary/10 rounded">
                        <span className="text-sm">10:30 AM - John D.</span>
                        <Clock className="h-4 w-4 text-secondary" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-primary/10 rounded">
                        <span className="text-sm">2:00 PM - Mary K.</span>
                        <Users className="h-4 w-4 text-primary" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Scheduling Problem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manual appointment scheduling is time-consuming and leads to errors, double-bookings, and frustrated
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">40%</div>
                <div className="text-sm text-muted-foreground">of appointment no-shows due to poor communication</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">2 hrs</div>
                <div className="text-sm text-muted-foreground">Daily time spent on phone scheduling appointments</div>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-right">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">25%</div>
                <div className="text-sm text-muted-foreground">
                  of potential clients give up due to booking difficulties
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Complete Appointment Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage appointments efficiently and professionally
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Transform Your Practice</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See immediate improvements in efficiency and client satisfaction
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
              Any service-based business that relies on appointments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Medical Clinics</h3>
                <p className="text-sm text-muted-foreground">Doctors, dentists, specialists</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-100">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Mental Health</h3>
                <p className="text-sm text-muted-foreground">Psychologists, therapists</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Consultants</h3>
                <p className="text-sm text-muted-foreground">Business, legal, financial</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up delay-300">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Beauty & Wellness</h3>
                <p className="text-sm text-muted-foreground">Salons, spas, fitness</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Streamline Your Appointments?</h2>
            <p className="text-lg mb-8 opacity-90">
              Stop losing time on manual scheduling. Let's build your appointment system today.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Now
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
