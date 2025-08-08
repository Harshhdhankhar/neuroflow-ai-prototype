import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  MessageCircle, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Lock,
  Star,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

const Landing = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "24/7 AI Support",
      description: "Talk to our empathetic AI therapist anytime, anywhere. Get instant emotional support and coping strategies."
    },
    {
      icon: Heart,
      title: "Mood Tracking",
      description: "Track your emotional journey with our simple mood tracker. Visualize patterns and celebrate progress."
    },
    {
      icon: Shield,
      title: "Crisis Resources",
      description: "Access immediate crisis support and emergency resources when you need them most."
    },
    {
      icon: Users,
      title: "Professional Connect",
      description: "Seamlessly connect with licensed therapists when you're ready for human support."
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your conversations are encrypted and confidential. We prioritize your privacy and safety."
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Mental health doesn't follow business hours. We're here whenever you need support."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "NeuroFlow AI helped me through my darkest moments. The AI chat feels so natural and understanding."
    },
    {
      name: "David K.",
      rating: 5,
      text: "Being able to track my mood and see my progress has been incredibly motivating. Great platform!"
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "The crisis support feature gave me peace of mind. Knowing help is just one click away is comforting."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Start a Conversation",
      description: "Open our AI chat and share what's on your mind. No judgment, just support."
    },
    {
      step: "2",
      title: "Track Your Mood",
      description: "Log your daily emotions and see patterns emerge over time."
    },
    {
      step: "3",
      title: "Get Professional Help",
      description: "When ready, connect with licensed therapists for ongoing support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Mental Health,{" "}
              <span className="text-white/90">Our Priority</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Connect with an empathetic AI companion, track your emotional wellness, 
              and access crisis support in a safe, stigma-free environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chat Now
                </Button>
              </Link>
              <Link to="/mood">
                <Button size="lg" variant="default" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Heart className="mr-2 h-5 w-5" />
                  Track Your Mood
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-white/70">
              Free to use • Completely confidential • Available 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-calm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Mental Health Support, <span className="text-gradient">Reimagined</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a new way to care for your mental health with AI-powered support,
              professional resources, and 24/7 availability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="therapy-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How <span className="text-gradient">NeuroFlow AI</span> Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting support for your mental health has never been easier
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-calm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who found support through NeuroFlow AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="therapy-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands who have found support, understanding, and healing with NeuroFlow AI.
            Your mental health matters, and we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your First Chat
              </Button>
            </Link>
            <Link to="/crisis">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Shield className="mr-2 h-5 w-5" />
                Need Immediate Help?
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-white/70">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No Judgment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;