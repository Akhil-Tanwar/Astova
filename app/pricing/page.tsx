import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Heart, Calendar, Crown, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - AI Astrology Services | Astova",
  description:
    "Choose the perfect plan for your astrological journey. From free Kundli generation to premium matchmaking and daily predictions. Transparent pricing with no hidden fees.",
  keywords: "astrology pricing, kundli price, matchmaking cost, horoscope subscription, astrology plans",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with basic astrology insights",
      features: [
        "Basic Kundli generation",
        "Simple compatibility check",
        "Daily horoscope (generic)",
        "Basic planetary positions",
        "Community support",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Star,
    },
    {
      name: "Premium",
      price: "$19",
      period: "month",
      description: "Comprehensive astrology services for serious seekers",
      features: [
        "Detailed Kundli with remedies",
        "Advanced compatibility analysis",
        "Personalized daily predictions",
        "Career & health guidance",
        "Lucky elements & timings",
        "Monthly forecasts",
        "Priority email support",
        "Unlimited reports",
      ],
      buttonText: "Start Premium",
      buttonVariant: "default" as const,
      popular: true,
      icon: Zap,
    },
    {
      name: "Professional",
      price: "$49",
      period: "month",
      description: "Advanced features for astrology professionals and enthusiasts",
      features: [
        "Everything in Premium",
        "Advanced Dasha predictions",
        "Relationship counseling insights",
        "Business & investment timing",
        "Gemstone recommendations",
        "Yearly detailed forecasts",
        "Phone consultation (1 hour)",
        "Custom report generation",
        "API access for developers",
      ],
      buttonText: "Go Professional",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Crown,
    },
  ]

  const features = [
    {
      title: "Instant Results",
      description: "Get your astrological insights in seconds, not days",
    },
    {
      title: "100% Accurate",
      description: "Based on authentic Vedic astrology calculations",
    },
    {
      title: "Privacy Protected",
      description: "Your personal data is encrypted and secure",
    },
    {
      title: "Cancel Anytime",
      description: "No long-term commitments or hidden fees",
    },
  ]

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.",
    },
    {
      question: "Is there a free trial for premium plans?",
      answer:
        "We offer a 7-day free trial for all premium plans. You can cancel anytime during the trial period without being charged.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and digital wallets. All payments are processed securely through Stripe.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us for a full refund.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Transparent Pricing
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Choose Your <span className="text-gradient">Cosmic Journey</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            From free basic insights to comprehensive professional analysis. Find the perfect plan for your astrological
            needs.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "border-primary/50 shadow-lg scale-105" : "border-border/50 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Astova</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Experience the perfect blend of ancient wisdom and modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service <span className="text-gradient">Comparison</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              See what's included in each plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Instant Kundli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Free Plan</span>
                    <span className="text-muted-foreground">Basic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Plan</span>
                    <span className="text-primary">Detailed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Plan</span>
                    <span className="text-primary">Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Matchmaking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Free Plan</span>
                    <span className="text-muted-foreground">Basic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Plan</span>
                    <span className="text-primary">Comprehensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Plan</span>
                    <span className="text-primary">Expert Level</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Daily Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Free Plan</span>
                    <span className="text-muted-foreground">Generic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Plan</span>
                    <span className="text-primary">Personalized</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Plan</span>
                    <span className="text-primary">Detailed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your <span className="text-gradient">Cosmic Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join thousands of users who have discovered their destiny with Astova's AI-powered astrology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Start Free Trial
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
