import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { HelpCircle, Clock, CreditCard, Settings, Shield, Phone, ArrowRight } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What services does Tebita Innovations offer?",
          answer:
            "We specialize in four main areas: E-commerce websites for online shopping, Landing pages for marketing campaigns, Appointment scheduling systems for service providers, and Online ordering systems for restaurants and cafes. Each solution is tailored specifically for Ethiopian businesses.",
        },
        {
          question: "Why should I choose Tebita Innovations over other web development companies?",
          answer:
            "We combine deep understanding of the Ethiopian market with international technology standards. Our team speaks your language, understands local business culture, and creates solutions that resonate with Ethiopian customers. Plus, we offer ongoing support and competitive pricing.",
        },
        {
          question: "Do you work with businesses outside of Ethiopia?",
          answer:
            "While our primary focus is Ethiopian businesses, we do work with international clients, especially those targeting Ethiopian markets or diaspora communities. Our expertise in local market dynamics can be valuable for global businesses entering Ethiopia.",
        },
      ],
    },
    {
      title: "Project Timeline & Process",
      icon: Clock,
      questions: [
        {
          question: "How long does it take to build a website?",
          answer:
            "Timeline varies by project complexity: Simple landing pages take 1-2 weeks, E-commerce websites take 3-6 weeks, Appointment systems take 2-4 weeks, and Online ordering systems take 3-5 weeks. We provide detailed timelines during our initial consultation.",
        },
        {
          question: "What is your development process?",
          answer:
            "Our process has 4 stages: 1) Discovery - understanding your business and requirements, 2) Design - creating mockups and user experience, 3) Development - building and testing your solution, 4) Launch & Support - deployment and ongoing maintenance.",
        },
        {
          question: "Can I see progress during development?",
          answer:
            "We provide regular updates and staging environments where you can see your project's progress. We believe in transparent communication and involve you throughout the development process.",
        },
        {
          question: "What if I need changes during development?",
          answer:
            "Minor changes and feedback are part of our process. For major scope changes, we'll discuss timeline and cost implications upfront. We're flexible and want to ensure you're completely satisfied with the final result.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      icon: CreditCard,
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Pricing varies based on project complexity and features. Landing pages start from 15,000 ETB, E-commerce sites from 35,000 ETB, Appointment systems from 25,000 ETB, and Online ordering systems from 30,000 ETB. Contact us for a detailed quote.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes! We offer flexible payment options including 50% upfront and 50% on completion, or monthly payment plans for larger projects. We work with you to find a payment structure that fits your budget.",
        },
        {
          question: "Are there any ongoing costs?",
          answer:
            "Hosting and domain costs are separate (typically 2,000-5,000 ETB annually). We also offer optional maintenance packages starting from 2,000 ETB monthly for updates, security, and support.",
        },
        {
          question: "Do you provide hosting and domain services?",
          answer:
            "Yes, we can handle hosting and domain registration for you, or work with your existing providers. We recommend reliable hosting solutions that ensure your website performs well for Ethiopian users.",
        },
      ],
    },
    {
      title: "Technical & Maintenance",
      icon: Settings,
      questions: [
        {
          question: "Can I update my website content myself?",
          answer:
            "Yes! We build user-friendly admin panels that allow you to update content, add products, manage appointments, or modify menus without technical knowledge. We also provide training on how to use these systems.",
        },
        {
          question: "What happens if my website breaks or has issues?",
          answer:
            "We provide ongoing support and maintenance services. Critical issues are addressed within 24 hours. We also offer different support packages based on your needs, from basic email support to priority phone support.",
        },
        {
          question: "Will my website work on mobile phones?",
          answer:
            "All our websites are mobile-responsive and optimized for smartphones and tablets. Given that most Ethiopian internet users access websites via mobile, this is a priority for all our projects.",
        },
        {
          question: "Do you provide training on how to use the system?",
          answer:
            "Yes, we provide comprehensive training sessions (in-person or virtual) to ensure you and your team can effectively use and manage your new system. We also provide documentation and video tutorials.",
        },
      ],
    },
    {
      title: "Security & Reliability",
      icon: Shield,
      questions: [
        {
          question: "How secure are your websites?",
          answer:
            "Security is our top priority. We implement SSL certificates, secure payment processing, regular security updates, data encryption, and follow industry best practices. All e-commerce and appointment systems include robust security measures.",
        },
        {
          question: "What about data backup and recovery?",
          answer:
            "We implement automated daily backups and can quickly restore your website if needed. Your data is stored securely and we maintain multiple backup copies to ensure business continuity.",
        },
        {
          question: "Do you comply with data protection regulations?",
          answer:
            "Yes, we follow international data protection standards and Ethiopian regulations. We implement proper data handling, user consent mechanisms, and privacy policies to protect your customers' information.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6">
              Frequently Asked{" "}
              <span className="text-primary relative">
                Questions
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-background max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our services, process, and how we can help transform your business
              with digital solutions.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact" className="flex items-center gap-2">
                Still Have Questions?
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">Didn't Find Your Answer?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help! Get in touch and we'll answer any questions about your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <Phone className="h-5 w-5" />
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
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
