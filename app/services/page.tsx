import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Heart, Calendar, Star, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI-Powered Astrology Services | Astova",
  description:
    "Explore Astova's comprehensive AI-powered astrology services including instant Kundli generation, matchmaking, and daily predictions. Discover your cosmic destiny today.",
  keywords: "astrology services, AI Kundli, matchmaking, daily horoscope, birth chart analysis, vedic astrology",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: "Instant Kundli",
      description: "Generate detailed birth charts in seconds with our AI-powered Kundli generator.",
      features: [
        "Detailed planetary positions",
        "Dasha predictions",
        "Remedial suggestions",
        "Compatibility analysis",
        "Career guidance",
        "Health insights",
      ],
      href: "/services/instant-kundli",
      badge: "Most Popular",
    },
    {
      icon: Heart,
      title: "Matchmaking",
      description: "Find your perfect cosmic match with AI-powered compatibility analysis.",
      features: [
        "Compatibility scoring",
        "Guna matching (36 points)",
        "Relationship guidance",
        "Marriage timing",
        "Partner characteristics",
        "Remedial measures",
      ],
      href: "/services/matchmaking",
      badge: "Premium",
    },
    {
      icon: Calendar,
      title: "Daily Predictions",
      description: "Start each day with personalized astrological insights tailored to your birth chart.",
      features: [
        "Personalized horoscopes",
        "Lucky numbers & colors",
        "Daily guidance",
        "Auspicious timings",
        "Planetary transits",
        "Weekly forecasts",
      ],
      href: "/services/daily-predictions",
      badge: "Updated Daily",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            AI-Powered Services
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Comprehensive <span className="text-gradient">Astrology Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Discover the power of AI-enhanced Vedic astrology with our comprehensive suite of services. From instant
            Kundli generation to personalized matchmaking and daily predictions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 relative overflow-hidden"
              >
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{service.badge}</Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our <span className="text-gradient">AI Technology</span> Works
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Experience the perfect fusion of ancient Vedic wisdom and cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Input Your Details</h3>
              <p className="text-muted-foreground">
                Provide your birth date, time, and location for precise astrological calculations
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI processes your data using authentic Vedic astrology principles
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Insights</h3>
              <p className="text-muted-foreground">Receive detailed, personalized insights and predictions instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Your <span className="text-gradient">Cosmic Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Choose the service that resonates with your spiritual quest and unlock the secrets of the universe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Get Started Today
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
