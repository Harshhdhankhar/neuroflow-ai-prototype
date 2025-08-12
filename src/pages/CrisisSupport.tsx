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

const crisisResources = {
  INDIA: [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "18002738255",
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
  ]
}; 

const countries = [
  { code: "INDIA", name: "India" }, 
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

const CrisisSupport = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("INDIA");

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Title */}
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
                    Call 102 (IND) 
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
                {crisisResources[selectedCountry]?.map((resource, index) => (
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

          {/* Alternative Support Options */}
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="h-5 w-5 mr-2 text-primary" />
                Alternative Support Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* ... keep your original support options here ... */}
            </CardContent>
          </Card>
        </div>

        {/* Immediate Steps */}
        {/* ... keep your original steps, warning signs, and message code ... */}

      </div>
    </div>
  );
};

export default CrisisSupport;
