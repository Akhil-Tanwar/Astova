import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, Star, TrendingUp, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Astrology Blog - Insights & Predictions | Astova",
  description:
    "Explore the latest astrology insights, predictions, and cosmic wisdom. Learn about Vedic astrology, planetary transits, and spiritual guidance from our expert astrologers.",
  keywords:
    "astrology blog, vedic astrology, horoscope insights, planetary transits, spiritual guidance, astrology articles",
}

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Mercury Retrograde 2025: Complete Guide to Navigate Cosmic Chaos",
    excerpt:
      "Discover how Mercury retrograde affects your communication, technology, and travel plans. Learn practical tips to thrive during this cosmic phenomenon.",
    author: "Dr. Priya Sharma",
    date: "2025-01-18",
    readTime: "8 min read",
    category: "Planetary Transits",
    image: "/mercury-retrograde-cosmic-space.jpg",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Your Moon Sign: The Hidden Key to Your Emotions",
      excerpt:
        "While your sun sign gets all the attention, your moon sign reveals your deepest emotional patterns and subconscious desires.",
      author: "Raj Patel",
      date: "2025-01-15",
      readTime: "6 min read",
      category: "Birth Chart Analysis",
      image: "/moon-phases-astrology.jpg",
    },
    {
      id: 3,
      title: "AI Meets Ancient Wisdom: The Future of Vedic Astrology",
      excerpt:
        "Explore how artificial intelligence is revolutionizing traditional astrology while preserving its authentic spiritual essence.",
      author: "Dr. Priya Sharma",
      date: "2025-01-12",
      readTime: "10 min read",
      category: "Technology",
      image: "/ai-technology-cosmic-stars.jpg",
    },
    {
      id: 4,
      title: "Love Compatibility: Beyond Sun Signs",
      excerpt: "Discover the deeper layers of astrological compatibility that go far beyond simple sun sign matching.",
      author: "Maya Singh",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Relationships",
      image: "/love-compatibility-hearts-stars.jpg",
    },
    {
      id: 5,
      title: "Career Astrology: Finding Your Professional Path",
      excerpt: "Learn how your birth chart reveals your ideal career path and the best timing for professional moves.",
      author: "Arjun Gupta",
      date: "2025-01-08",
      readTime: "9 min read",
      category: "Career",
      image: "/career-success-professional-stars.jpg",
    },
    {
      id: 6,
      title: "Gemstone Therapy: Harnessing Planetary Energies",
      excerpt:
        "Discover how specific gemstones can amplify positive planetary influences and protect against negative energies.",
      author: "Dr. Priya Sharma",
      date: "2025-01-05",
      readTime: "5 min read",
      category: "Remedies",
      image: "/gemstones-crystals-healing.jpg",
    },
    {
      id: 7,
      title: "Saturn Return: Your Cosmic Coming of Age",
      excerpt:
        "Understanding the transformative power of Saturn return and how to navigate this crucial life transition.",
      author: "Raj Patel",
      date: "2025-01-03",
      readTime: "8 min read",
      category: "Life Cycles",
      image: "/saturn-planet-transformation.jpg",
    },
  ]

  const categories = [
    { name: "All Posts", count: 25 },
    { name: "Planetary Transits", count: 8 },
    { name: "Birth Chart Analysis", count: 6 },
    { name: "Relationships", count: 5 },
    { name: "Career", count: 4 },
    { name: "Remedies", count: 2 },
  ]

  const popularTags = [
    "Mercury Retrograde",
    "Moon Phases",
    "Love Compatibility",
    "Career Astrology",
    "Vedic Astrology",
    "Gemstones",
    "Saturn Return",
    "AI Astrology",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <BookOpen className="h-4 w-4 mr-2" />
            Cosmic Wisdom
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Astrology <span className="text-gradient">Insights</span> & Wisdom
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Explore the mysteries of the cosmos with expert insights, predictions, and guidance. Discover how ancient
            wisdom meets modern understanding.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most popular and insightful content</p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 text-balance">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">Stay updated with the latest cosmic insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 text-balance">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 hover:text-primary cursor-pointer transition-colors"
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Cosmic Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get weekly astrology insights and predictions delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" />
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            Dive deeper into your astrological profile with our AI-powered services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Get Your Free Kundli
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
