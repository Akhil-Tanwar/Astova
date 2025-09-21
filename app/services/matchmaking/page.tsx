import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Matchmaking & Compatibility Analysis | Astova",
  description:
    "Find your perfect match with Astova's AI-powered astrological matchmaking. Get detailed compatibility analysis, Guna matching, and relationship guidance based on Vedic astrology.",
  keywords:
    "astrological matchmaking, compatibility analysis, guna matching, marriage compatibility, vedic matchmaking, horoscope matching",
}

export default function MatchmakingPage() {
  const features = [
    "Comprehensive compatibility scoring (0-100%)",
    "Traditional Guna matching (36 points system)",
    "Detailed relationship dynamics analysis",
    "Marriage timing predictions",
    "Partner characteristics and traits",
    "Potential challenges and solutions",
    "Remedial measures for better harmony",
    "Long-term relationship prospects",
  ]

  const compatibilityFactors = [
    {
      title: "Mental Compatibility",
      description: "Intellectual connection and communication harmony",
    },
    {
      title: "Emotional Bonding",
      description: "Emotional understanding and support levels",
    },
    {
      title: "Physical Attraction",
      description: "Natural chemistry and physical compatibility",
    },
    {
      title: "Spiritual Connection",
      description: "Shared values and spiritual alignment",
    },
    {
      title: "Financial Harmony",
      description: "Money management and financial goals compatibility",
    },
    {
      title: "Family Integration",
      description: "Compatibility with each other's families",
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
                <Heart className="h-4 w-4 mr-2" />
                Premium Service
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                AI-Powered <span className="text-gradient">Matchmaking</span>
              </h1>

              <p className="text-xl text-muted-foreground text-balance mb-8">
                Find your perfect cosmic match with our advanced AI-powered compatibility analysis. Get detailed
                insights into relationship harmony based on authentic Vedic astrology principles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Check Compatibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View Sample Report
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Detailed Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Privacy Protected</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Compatibility Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-gradient">87%</div>
                    <div className="text-lg font-semibold">Excellent Match</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-primary/10 p-3 rounded">
                        <div className="font-semibold">Guna Score</div>
                        <div className="text-2xl font-bold text-primary">31/36</div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded">
                        <div className="font-semibold">Mangal Dosha</div>
                        <div className="text-sm text-green-500">Compatible</div>
                      </div>
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
              Comprehensive <span className="text-gradient">Compatibility Analysis</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Our AI analyzes multiple dimensions of compatibility to give you the complete picture
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

      {/* Compatibility Factors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Analyze</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Our comprehensive analysis covers all aspects of relationship compatibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compatibilityFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{factor.title}</h3>
                  <p className="text-muted-foreground text-sm">{factor.description}</p>
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
              How Our <span className="text-gradient">Matchmaking</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Enter Birth Details</h3>
              <p className="text-muted-foreground">
                Provide birth details for both partners including date, time, and location
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes compatibility using traditional Vedic astrology methods
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed compatibility report with scores and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your <span className="text-gradient">Perfect Match</span> Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Discover if you and your partner are cosmically aligned for a harmonious relationship
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            Check Your Compatibility
            <Heart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
