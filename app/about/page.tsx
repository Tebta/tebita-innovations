import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Droplets, Target, Eye, Heart, Users, Award, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6">
              About{" "}
              <span className="text-primary relative">
                Tebita
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
              </span>{" "}
              Innovations
            </h1>
            <p className="text-lg  text-white max-w-3xl mx-auto leading-relaxed">
              Like a single drop of water that creates ripples across a pond, we believe small innovations can transform
              entire businesses and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <Droplets className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">The Story Behind Tebita</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In Amharic, "Tebita" means a single drop of water. This simple yet powerful concept embodies our
                  philosophy: just as a single drop can create endless ripples, one innovative solution can transform an
                  entire business ecosystem.
                </p>
                <p>
                  Founded in the heart of Ethiopia, Tebita Innovations was born from a vision to bridge the digital
                  divide for local businesses. We witnessed countless Ethiopian entrepreneurs with brilliant ideas but
                  limited access to modern technology solutions.
                </p>
                <p>
                  Our journey began with a simple question: "How can we make cutting-edge web technology accessible and
                  affordable for every Ethiopian business?" Today, we're proud to be that catalyst for digital
                  transformation across the country.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Droplets className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Origin</h3>
                    <p className="text-muted-foreground">
                      From a single idea to ripples of innovation across Ethiopian businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose & Vision</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Driving digital transformation for Ethiopian businesses through innovative solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Mission Card */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-sidebar-foreground to-chart-3 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-full animate-fade-in-left">
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed flex-grow">
              To empower Ethiopian businesses with innovative, affordable, and user-friendly digital solutions that
              drive growth, enhance customer engagement, and create lasting competitive advantages in the modern
              marketplace.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">Empowerment focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-sidebar-primary to-sidebar-ring rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-full animate-fade-in-right">
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-sidebar-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed flex-grow">
              To be the leading catalyst for digital transformation in Ethiopia, where every business, regardless of
              size, has access to world-class technology solutions that enable them to thrive in the digital age.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-3 h-3 rounded-full bg-primary"></div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">Future oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local First</h3>
              <p className="text-muted-foreground text-sm">
                We understand Ethiopian culture, business practices, and market needs, ensuring solutions that truly
                resonate.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We deliver high-quality solutions that meet international standards while remaining accessible and
                affordable.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted-foreground text-sm">
                We work closely with our clients as partners, understanding their unique challenges and goals.
              </p>
            </div>

            <div className="text-center animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-muted-foreground text-sm">
                We build robust, secure, and maintainable solutions that businesses can depend on for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Tebita Innovations?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines global technology standards with deep local market understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left flex flex-col items-center justify-center w-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  We understand that time is money. Our streamlined processes ensure quick turnaround times without
                  compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable Solutions</h3>
                <p className="text-muted-foreground">
                  High-quality doesn't have to mean high-cost. We offer competitive pricing that makes modern technology
                  accessible to all businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end at delivery. We provide continuous support and maintenance to ensure your
                  success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-left">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Development Team</h3>
                <p className="text-muted-foreground mb-4">
                  Expert developers skilled in modern web technologies, ensuring your solutions are built to last.
                </p>
                <div className="text-sm text-primary font-medium">Full-Stack Development</div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Team</h3>
                <p className="text-muted-foreground mb-4">
                  Creative designers who understand both aesthetics and user experience for maximum impact.
                </p>
                <div className="text-sm text-primary font-medium">UI/UX Design</div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Team</h3>
                <p className="text-muted-foreground mb-4">
                  Dedicated support specialists ensuring your systems run smoothly and your questions are answered.
                </p>
                <div className="text-sm text-primary font-medium">24/7 Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30 text-primary-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how Tebita Innovations can help transform your business with the right digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary text-background hover:bg-background/90 text-lg px-8 py-6"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
