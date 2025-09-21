import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle, Star, Users, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Astrological Guidance | Astova",
  description:
    "Get in touch with Astova's astrology experts. Contact us via WhatsApp, email, or phone for personalized astrological guidance and support.",
  keywords: "contact astrologer, astrology consultation, WhatsApp astrology, astrology support, astrological guidance",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Get instant responses to your astrology questions",
      value: "+1 (555) 123-STAR",
      action: "Chat Now",
      href: "https://wa.me/15551234567",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses within 24 hours",
      value: "hello@astova.com",
      action: "Send Email",
      href: "mailto:hello@astova.com",
      primary: false,
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Schedule a personal consultation call",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
      primary: false,
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM PST" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM PST" },
  ]

  const faqs = [
    {
      question: "How accurate are your predictions?",
      answer:
        "Our AI-powered system uses authentic Vedic astrology principles with 95%+ accuracy rate, validated by thousands of satisfied users.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all premium services. Your satisfaction is our priority.",
    },
    {
      question: "Do you offer personal consultations?",
      answer: "Yes, our Professional plan includes one-hour phone consultations with certified astrologers.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use bank-level encryption to protect your data and never share personal information with third parties.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <MessageCircle className="h-4 w-4 mr-2" />
            24/7 Support Available
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Get in <span className="text-gradient">Touch</span> with Our Experts
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Have questions about your cosmic journey? Our astrology experts are here to guide you. Reach out via
            WhatsApp for instant support or schedule a consultation.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Personalized Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${
                  method.primary
                    ? "border-primary/50 shadow-lg ring-2 ring-primary/20"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <CardHeader className="text-center">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${
                      method.primary ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="text-lg font-semibold mb-4">{method.value}</div>
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${
                        method.primary ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                      }`}
                    >
                      {method.action}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with personalized guidance.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What can we help you with?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your astrological questions or concerns..."
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Support Available</span>
                    </div>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Astova Headquarters</div>
                        <div className="text-muted-foreground text-sm">
                          123 Cosmic Avenue
                          <br />
                          San Francisco, CA 94102
                          <br />
                          United States
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span>4.9/5 rating from 10,000+ users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Certified astrology experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>100% privacy guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>24-hour response time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
            <MessageCircle className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need <span className="text-gradient">Instant Help</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Chat with our astrology experts on WhatsApp for immediate guidance and support. Available 24/7 for your
            cosmic questions.
          </p>
          <Link href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Chat on WhatsApp
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
