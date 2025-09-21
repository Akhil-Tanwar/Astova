import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, Star, Clock, Shield, Users, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Instant AI Kundli Generator | Free Birth Chart Analysis | Astova",
  description:
    "Generate your detailed Kundli (birth chart) instantly with Astova's AI-powered generator. Get comprehensive astrological insights, planetary positions, and predictions for free.",
  keywords:
    "instant kundli, AI birth chart, free kundli generator, vedic astrology, planetary positions, dasha predictions",
}

export default function InstantKundliPage() {
  const features = [
    "Detailed planetary positions and aspects",
    "Comprehensive Dasha (planetary periods) analysis",
    "Personalized remedial suggestions",
    "Career and profession guidance",
    "Health and wellness insights",
    "Marriage and relationship predictions",
    "Financial prospects analysis",
    "Lucky gems and colors recommendations",
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your complete Kundli generated in under 30 seconds",
    },
    {
      icon: Shield,
      title: "100% Accurate",
      description: "Based on authentic Vedic astrology calculations",
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Generate your Kundli anytime, anywhere",
    },
    {
      icon: Users,
      title: "Trusted by 50K+",
      description: "Join thousands of satisfied users worldwide",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Most Popular Service
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Instant <span className="text-gradient">AI Kundli</span> Generator
              </h1>

              <p className="text-xl text-muted-foreground text-balance mb-8">
                Discover your cosmic blueprint with our AI-powered Kundli generator. Get detailed birth chart analysis,
                planetary positions, and personalized predictions in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Generate Free Kundli
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View Sample Report
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No Registration Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Instant Results</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Sample Kundli Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-primary/10 p-2 rounded text-xs">
                        <div className="font-semibold">Sun</div>
                        <div className="text-muted-foreground">Leo 15°</div>
                      </div>
                      <div className="bg-primary/10 p-2 rounded text-xs">
                        <div className="font-semibold">Moon</div>
                        <div className="text-muted-foreground">Cancer 8°</div>
                      </div>
                      <div className="bg-primary/10 p-2 rounded text-xs">
                        <div className="font-semibold">Mars</div>
                        <div className="text-muted-foreground">Aries 22°</div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Complete planetary analysis with detailed insights
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Included in Your <span className="text-gradient">Kundli Report</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Get comprehensive astrological insights with our detailed Kundli analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-gradient">AI Kundli Generator</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discover Your <span className="text-gradient">Cosmic Blueprint</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Generate your free Kundli now and unlock the secrets hidden in your birth chart
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            Generate Your Free Kundli Now
            <Zap className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
