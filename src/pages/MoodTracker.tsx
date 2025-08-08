import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, TrendingUp, Heart, Plus } from "lucide-react";

interface MoodEntry {
  id: string;
  date: Date;
  mood: number;
  emoji: string;
  note: string;
}

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState<MoodEntry[]>([
    {
      id: "1",
      date: new Date(Date.now() - 86400000), // Yesterday
      mood: 4,
      emoji: "😊",
      note: "Had a good day at work and felt productive"
    },
    {
      id: "2", 
      date: new Date(Date.now() - 2 * 86400000), // 2 days ago
      mood: 3,
      emoji: "😐",
      note: "Feeling neutral today, nothing too exciting"
    },
    {
      id: "3",
      date: new Date(Date.now() - 3 * 86400000), // 3 days ago
      mood: 2,
      emoji: "😟",
      note: "Struggled with anxiety about upcoming presentation"
    }
  ]);

  const moods = [
    { value: 1, emoji: "😢", label: "Very Sad", color: "text-red-500" },
    { value: 2, emoji: "😟", label: "Sad", color: "text-orange-500" },
    { value: 3, emoji: "😐", label: "Neutral", color: "text-yellow-500" },
    { value: 4, emoji: "😊", label: "Happy", color: "text-green-500" },
    { value: 5, emoji: "😄", label: "Very Happy", color: "text-primary" }
  ];

  const handleSaveMood = () => {
    if (selectedMood === null) return;

    const selectedMoodData = moods.find(m => m.value === selectedMood);
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: new Date(),
      mood: selectedMood,
      emoji: selectedMoodData?.emoji || "😐",
      note: note
    };

    setEntries(prev => [newEntry, ...prev]);
    setSelectedMood(null);
    setNote("");
  };

  const getAverageMood = () => {
    if (entries.length === 0) return 0;
    const sum = entries.reduce((acc, entry) => acc + entry.mood, 0);
    return (sum / entries.length).toFixed(1);
  };

  const getMoodTrend = () => {
    if (entries.length < 2) return "neutral";
    const recent = entries.slice(0, 3).reduce((acc, entry) => acc + entry.mood, 0) / Math.min(3, entries.length);
    const older = entries.slice(3, 6).reduce((acc, entry) => acc + entry.mood, 0) / Math.min(3, entries.slice(3).length);
    
    if (recent > older + 0.5) return "improving";
    if (recent < older - 0.5) return "declining";
    return "stable";
  };

  const trend = getMoodTrend();
  const trendColors = {
    improving: "text-green-500",
    declining: "text-red-500",
    stable: "text-blue-500"
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Mood <span className="text-gradient">Tracker</span>
          </h1>
          <p className="text-muted-foreground">
            Track your daily emotions and observe patterns in your mental wellness journey
          </p>
        </div>

        {/* Mood Input */}
        <Card className="therapy-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-primary" />
              How are you feeling today?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-5 gap-4">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                      selectedMood === mood.value
                        ? "border-primary bg-primary/10 scale-105"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2 emoji-mood">{mood.emoji}</div>
                      <div className="text-sm font-medium">{mood.label}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Add a note (optional)
                </label>
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What's contributing to your mood today? Any thoughts or events worth noting..."
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                onClick={handleSaveMood}
                disabled={selectedMood === null}
                className="w-full calm-button"
              >
                <Plus className="h-4 w-4 mr-2" />
                Save Mood Entry
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="therapy-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {getAverageMood()}
              </div>
              <div className="text-sm text-muted-foreground">Average Mood</div>
              <div className="text-xs text-muted-foreground mt-1">Last 7 days</div>
            </CardContent>
          </Card>

          <Card className="therapy-card">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">{entries.length}</div>
              <div className="text-sm text-muted-foreground">Total Entries</div>
              <div className="text-xs text-muted-foreground mt-1">Keep tracking!</div>
            </CardContent>
          </Card>

          <Card className="therapy-card">
            <CardContent className="p-6 text-center">
              <div className={`text-3xl font-bold mb-2 ${trendColors[trend]}`}>
                <TrendingUp className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-sm text-muted-foreground capitalize">{trend}</div>
              <div className="text-xs text-muted-foreground mt-1">Recent trend</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Entries */}
        <Card className="therapy-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarDays className="h-5 w-5 mr-2 text-primary" />
              Recent Mood Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            {entries.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No mood entries yet</p>
                <p className="text-sm text-muted-foreground">Start tracking your mood above!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div key={entry.id} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl">{entry.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium">
                          {moods.find(m => m.value === entry.mood)?.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {entry.date.toLocaleDateString()} at {entry.date.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                      {entry.note && (
                        <p className="text-sm text-muted-foreground">{entry.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="therapy-card mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              Mood Insights
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Tracking Benefits:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Identify emotional patterns</li>
                  <li>• Recognize triggers and stressors</li>
                  <li>• Celebrate positive trends</li>
                  <li>• Share insights with therapists</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tips for Success:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Track consistently, even on difficult days</li>
                  <li>• Be honest about your feelings</li>
                  <li>• Add notes for context</li>
                  <li>• Look for weekly and monthly patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MoodTracker;