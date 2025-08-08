import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Heart, 
  Users, 
  Award, 
  Brain,
  CheckCircle,
  Eye,
  Clock
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care", 
      description: "We approach mental health with empathy, understanding, and genuine care for every individual."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and wellbeing are our top priorities. We provide crisis support and professional resources."
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "All conversations are encrypted and confidential. Your privacy is protected at every level."
    },
    {
      icon: Users,
      title: "Stigma-Free Zone",
      description: "We believe mental health care should be accessible without judgment or stigma."
    }
  ];

  const privacyPoints = [
    "End-to-end encryption for all communications",
    "No data sharing with third parties",
    "HIPAA-compliant security measures", 
    "Anonymous chat options available",
    "Data retention policies that protect you",
    "Secure, encrypted data storage"
  ];

  const teamMembers = [
    {
      name: "Dr. Alexandra Martinez",
      role: "Chief Clinical Officer",
      credentials: "PhD in Clinical Psychology",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. James Chen",
      role: "Head of AI Development",
      credentials: "PhD in Computer Science, AI Ethics",
      image: "👨‍💻"
    },
    {
      name: "Sarah Thompson",
      role: "Director of Crisis Support",
      credentials: "MSW, Crisis Intervention Specialist",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-gradient">NeuroFlow AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make mental health support accessible, affordable, 
            and stigma-free for everyone. Your wellbeing matters.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="therapy-card mb-12">
          <CardContent className="p-8 text-center">
            <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mental health struggles affect millions, yet many barriers prevent people from getting help: 
              cost, stigma, availability, and accessibility. NeuroFlow AI bridges these gaps by providing 
              24/7 AI-powered emotional support, crisis resources, and connections to professional care 
              in a safe, judgment-free environment.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="therapy-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card className="therapy-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2 text-primary" />
              How NeuroFlow AI Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">AI-Powered Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our empathetic AI companion provides immediate emotional support using 
                  evidence-based therapeutic approaches and natural language processing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Mood Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your emotional patterns with our intuitive mood tracker. 
                  Visualize your progress and identify triggers over time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Professional Connection</h3>
                <p className="text-sm text-muted-foreground">
                  When you're ready, seamlessly connect with licensed therapists 
                  who can provide ongoing professional care.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Your privacy is fundamental to mental health care. We implement industry-leading 
                security measures to protect your data and conversations.
              </p>
              <div className="space-y-3">
                {privacyPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-primary" />
                Data Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What We Collect</h4>
                  <p className="text-sm text-muted-foreground">
                    Only the information necessary to provide support: chat messages, 
                    mood entries, and optional profile information.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">How We Use It</h4>
                  <p className="text-sm text-muted-foreground">
                    To provide personalized support, improve our AI responses, 
                    and connect you with appropriate resources.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Your Control</h4>
                  <p className="text-sm text-muted-foreground">
                    You can delete your data at any time and control what 
                    information you share with our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <Card className="therapy-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Our Expert Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Credentials */}
        <Card className="therapy-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Credentials & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-3">Clinical Standards</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Evidence-based therapeutic approaches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Licensed mental health professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Continuous clinical oversight</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Crisis intervention protocols</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Technical Compliance</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">HIPAA compliant infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">SOC 2 Type II certification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Regular security audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">AI ethics review board</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="therapy-card gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We're committed to transparency and building trust. If you have questions about 
              our platform, privacy practices, or how we can help, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center justify-center">
                <Heart className="h-4 w-4 mr-2" />
                <span>Always Here to Help</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;