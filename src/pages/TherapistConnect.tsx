import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calendar, 
  User, 
  MapPin, 
  Clock, 
  Video, 
  Phone, 
  Users,
  Star,
  CheckCircle,
  Heart
} from "lucide-react";

const TherapistConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredMethod: "",
    timeSlot: "",
    concerns: "",
    previousTherapy: false,
    insurance: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! A qualified therapist will contact you within 24 hours.");
  };

  const therapists = [
    {
      name: "Dr. Sarah Chen",
      specialties: ["Anxiety", "Depression", "CBT"],
      rating: 4.9,
      experience: "8 years",
      image: "👩‍⚕️",
      availability: "Mon-Fri 9AM-6PM"
    },
    {
      name: "Dr. Michael Rodriguez",
      specialties: ["Trauma", "PTSD", "EMDR"],
      rating: 4.8,
      experience: "12 years", 
      image: "👨‍⚕️",
      availability: "Tue-Sat 10AM-7PM"
    },
    {
      name: "Dr. Emily Thompson",
      specialties: ["Couples", "Family", "Relationships"],
      rating: 4.9,
      experience: "10 years",
      image: "👩‍⚕️",
      availability: "Mon-Thu 8AM-5PM"
    }
  ];

  const sessionTypes = [
    {
      type: "Individual Therapy",
      icon: User,
      description: "One-on-one sessions with a licensed therapist",
      duration: "50 minutes",
      price: "$120-180"
    },
    {
      type: "Couples Therapy", 
      icon: Users,
      description: "Joint sessions for relationship counseling",
      duration: "60 minutes",
      price: "$150-220"
    },
    {
      type: "Group Therapy",
      icon: Users,
      description: "Small group sessions with shared experiences",
      duration: "90 minutes", 
      price: "$60-90"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Connect with a <span className="text-gradient">Licensed Therapist</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take the next step in your mental health journey. Our qualified therapists 
            are here to provide professional, compassionate care.
          </p>
        </div>

        {/* Session Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {sessionTypes.map((session, index) => {
            const Icon = session.icon;
            return (
              <Card key={index} className="therapy-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{session.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{session.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="text-primary font-semibold">{session.price}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Therapists */}
        <Card className="therapy-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Featured Therapists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {therapists.map((therapist, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{therapist.image}</div>
                    <h4 className="font-semibold">{therapist.name}</h4>
                    <div className="flex items-center justify-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm">{therapist.rating}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({therapist.experience})
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {therapist.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {therapist.availability}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Booking Form */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="therapy-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Schedule Your Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Session Preference</label>
                    <Select value={formData.preferredMethod} onValueChange={(value) => setFormData({...formData, preferredMethod: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center">
                            <Video className="h-4 w-4 mr-2" />
                            Video Call
                          </div>
                        </SelectItem>
                        <SelectItem value="phone">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            Phone Call
                          </div>
                        </SelectItem>
                        <SelectItem value="in-person">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            In-Person
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time Slot</label>
                  <Select value={formData.timeSlot} onValueChange={(value) => setFormData({...formData, timeSlot: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What would you like to work on?</label>
                  <Textarea
                    value={formData.concerns}
                    onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                    placeholder="Briefly describe what brings you to therapy (optional)"
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Insurance Provider</label>
                  <Input
                    value={formData.insurance}
                    onChange={(e) => setFormData({...formData, insurance: e.target.value})}
                    placeholder="e.g., Blue Cross, Aetna, or 'Self-pay'"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="previous-therapy"
                    checked={formData.previousTherapy}
                    onCheckedChange={(checked) => setFormData({...formData, previousTherapy: checked as boolean})}
                  />
                  <label htmlFor="previous-therapy" className="text-sm">
                    I have been to therapy before
                  </label>
                </div>

                <Button type="submit" className="w-full calm-button">
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Session
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Panel */}
          <div className="space-y-6">
            <Card className="therapy-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-success" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Initial Response</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll match you with a qualified therapist within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Therapist Contact</h4>
                      <p className="text-sm text-muted-foreground">
                        Your therapist will reach out to schedule your first session
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">First Session</h4>
                      <p className="text-sm text-muted-foreground">
                        Begin your therapeutic journey with professional support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="therapy-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  Why Choose Professional Therapy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Licensed and trained professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Evidence-based treatment approaches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Personalized treatment plans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Confidential and secure sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Insurance accepted</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="therapy-card gradient-hero text-white">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-3 text-white" />
                <h3 className="font-semibold mb-2">Ready to Begin?</h3>
                <p className="text-sm text-white/90">
                  Taking the step to seek professional help is courageous. 
                  You deserve support on your journey to better mental health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistConnect;