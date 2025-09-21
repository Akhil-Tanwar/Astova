import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Star, Sparkles, ArrowRight, Sun, Moon, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Daily Horoscope & Personalized Predictions | Astova",
  description:
    "Get personalized daily horoscope and astrological predictions with Astova's AI-powered system. Discover your lucky numbers, colors, and daily guidance based on your birth chart.",
  keywords:
    "daily horoscope, personalized predictions, daily astrology, lucky numbers, astrological guidance, vedic predictions",
}

export default function DailyPredictionsPage() {
  const features = [
    "Personalized daily horoscope based on your birth chart",
    "Lucky numbers and colors for the day",
    "Auspicious timings for important activities",
    "Planetary transit effects on your life",
    "Career and business guidance",
    "Health and wellness tips",
    "Relationship and love insights",
    "Weekly and monthly forecasts",
  ]

  const predictionTypes = [
    {
      icon: Sun,
      title: "Daily Horoscope",
      description: "Personalized predictions for each day based on your unique birth chart",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Professional insights and opportunities for career growth",
    },
    {
      icon: Moon,
      title: "Love & Relationships",
      description: "Romantic prospects and relationship harmony predictions",
    },
    {
      icon: Star,
      title: "Lucky Elements",
      description: "Daily lucky numbers, colors, and gemstones for positive energy",
    },
  ]

  const samplePrediction = {
    date: "January 20, 2025",
    overall: "Excellent",
    luckyNumber: "7, 14, 21",
    luckyColor: "Royal Blue",
    prediction:
      "Today brings excellent opportunities for career advancement. Your communication skills will be particularly sharp, making it an ideal day for important meetings or presentations.",
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Updated Daily
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Daily <span className="text-gradient">Predictions</span> & Horoscope
              </h1>

              <p className="text-xl text-muted-foreground text-balance mb-8">
                Start each day with cosmic clarity. Get personalized daily horoscopes, lucky elements, and astrological
                guidance tailored to your unique birth chart.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Get Today's Prediction
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  View Sample Report
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Personalized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-primary/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Today's Prediction
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{samplePrediction.date}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <div className="text-sm font-semibold">Overall</div>
                      <div className="text-lg font-bold text-primary">{samplePrediction.overall}</div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded">
                      <div className="text-sm font-semibold">Lucky Color</div>
                      <div className="text-sm font-bold">{samplePrediction.luckyColor}</div>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-3 rounded">
                    <div className="text-sm font-semibold mb-2">Lucky Numbers</div>
                    <div className="text-lg font-bold text-primary">{samplePrediction.luckyNumber}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{samplePrediction.prediction}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll <span className="text-gradient">Discover</span> Daily
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Comprehensive daily insights across all aspects of your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {predictionTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="text-gradient">Daily Guidance</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Everything you need to make the most of each day
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

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Enter your birth details once to get personalized predictions forever
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Daily Updates</h3>
              <p className="text-muted-foreground">
                Receive fresh predictions every day based on current planetary positions
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Plan Your Day</h3>
              <p className="text-muted-foreground">
                Use insights to make informed decisions and maximize opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your <span className="text-gradient">Daily Journey</span> Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Never miss an opportunity or face a challenge unprepared. Get your personalized daily predictions now.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            Get Today's Prediction
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
