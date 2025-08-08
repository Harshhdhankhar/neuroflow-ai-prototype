import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Shield, 
  Heart, 
  AlertTriangle,
  MapPin,
  ExternalLink,
  Headphones
} from "lucide-react";

const CrisisSupport = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const crisisResources = {
    US: [
      {
        name: "National Suicide Prevention Lifeline",
        phone: "988",
        description: "24/7 crisis support and suicide prevention",
        website: "https://suicidepreventionlifeline.org"
      },
      {
        name: "Crisis Text Line",
        phone: "Text HOME to 741741",
        description: "Free, 24/7 crisis support via text",
        website: "https://crisistextline.org"
      },
      {
        name: "NAMI National Helpline",
        phone: "1-800-950-NAMI (6264)",
        description: "Mental health support and resources",
        website: "https://nami.org"
      }
    ],
    UK: [
      {
        name: "Samaritans",
        phone: "116 123",
        description: "Free 24/7 emotional support",
        website: "https://samaritans.org"
      },
      {
        name: "Mind",
        phone: "0300 123 3393",
        description: "Mental health information and support",
        website: "https://mind.org.uk"
      },
      {
        name: "NHS 111",
        phone: "111",
        description: "Non-emergency medical helpline",
        website: "https://111.nhs.uk"
      }
    ],
    CA: [
      {
        name: "Canada Suicide Prevention Service",
        phone: "1-833-456-4566",
        description: "24/7 bilingual crisis support",
        website: "https://talksuicide.ca"
      },
      {
        name: "Kids Help Phone",
        phone: "1-800-668-6868",
        description: "24/7 support for youth",
        website: "https://kidshelpphone.ca"
      },
      {
        name: "Mental Health Commission of Canada",
        phone: "613-683-3755",
        description: "Mental health resources and support",
        website: "https://mentalhealthcommission.ca"
      }
    ]
  };

  const countries = [
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "CA", name: "Canada" }
  ];

  const warningSignsData = [
    "Talking about wanting to die or hurt oneself",
    "Looking for ways to kill oneself",
    "Talking about feeling hopeless or having no purpose",
    "Talking about feeling trapped or in unbearable pain",
    "Talking about being a burden to others",
    "Increasing use of alcohol or drugs",
    "Acting anxious, agitated, or reckless",
    "Sleeping too little or too much",
    "Withdrawing or feeling isolated",
    "Showing rage or talking about seeking revenge",
    "Displaying extreme mood swings"
  ];

  const immediateSteps = [
    {
      title: "Stay Safe",
      description: "Remove any immediate means of harm from your environment",
      icon: Shield
    },
    {
      title: "Reach Out",
      description: "Call a crisis hotline or contact emergency services",
      icon: Phone
    },
    {
      title: "Stay Connected",
      description: "Contact a trusted friend, family member, or mental health professional",
      icon: Heart
    },
    {
      title: "Get Help",
      description: "Go to your nearest emergency room or call 911/emergency services",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Crisis <span className="text-gradient">Support</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're in crisis or having thoughts of self-harm, you're not alone. 
            Help is available 24/7. Your life matters.
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="mb-8 border-destructive/50 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">
                  If you're in immediate danger
                </h3>
                <p className="text-sm mb-4">
                  If you are having thoughts of suicide or self-harm, please reach out for help immediately.
                  You deserve support and care.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive" size="sm" className="crisis-button">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 911 (US) / 999 (UK) / 911 (CA)
                  </Button>
                  <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Crisis Chat
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Country Selection */}
        <Card className="therapy-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Select Your Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Crisis Resources */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Crisis Hotlines - {countries.find(c => c.code === selectedCountry)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {crisisResources[selectedCountry as keyof typeof crisisResources].map((resource, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">{resource.name}</h4>
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-mono text-lg text-primary">{resource.phone}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="h-5 w-5 mr-2 text-primary" />
                Alternative Support Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                    Crisis Text Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Text-based crisis support for when calling feels too difficult
                  </p>
                  <div className="text-primary font-mono">Text HOME to 741741</div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Online Chat Support
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Live chat support available on crisis websites
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Start Online Chat
                  </Button>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-primary" />
                    Peer Support Communities
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with others who understand what you're going through
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Immediate Steps */}
        <Card className="therapy-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              If You're Having a Crisis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {immediateSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Warning Signs */}
        <Card className="therapy-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
              Warning Signs to Watch For
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              If you notice these signs in yourself or others, it's important to seek help immediately:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{sign}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support Message */}
        <Card className="therapy-card mt-8 gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">You Are Not Alone</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Crisis can feel overwhelming, but help is available. Every day, people find their way through 
              difficult times with support. Your life has value, and there are people who want to help you.
              Recovery is possible, and you deserve to feel better.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrisisSupport;