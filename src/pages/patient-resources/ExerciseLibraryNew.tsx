import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Info, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";

// Define types for our exercise data
interface Exercise {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  image: string;
  instructions: string[];
  cautions: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
}

interface ExerciseData {
  categories: Category[];
}

export default function ExerciseLibrary() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Fetch exercise data
  const { data: exerciseData, isLoading, error } = useQuery<ExerciseData>({
    queryKey: ['exerciseData'],
    queryFn: async () => {
      const response = await fetch('/data/exercises.json');
      if (!response.ok) {
        throw new Error('Failed to fetch exercise data');
      }
      return response.json();
    }
  });

  // Define exercise categories
  const categories = [
    { id: "all", name: "All Exercises" },
    ...(exerciseData?.categories.map(cat => ({ id: cat.id, name: cat.name })) || [])
  ];

  // Define difficulty levels
  const difficultyLevels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" }
  ];

  // Get all exercises from all categories
  const getAllExercises = (): Exercise[] => {
    if (!exerciseData) return [];
    return exerciseData.categories.flatMap(category => category.exercises);
  };

  // Filter exercises based on selected category, difficulty, and search query
  const getFilteredExercises = (): Exercise[] => {
    let filtered = getAllExercises();

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryData = exerciseData?.categories.find(cat => cat.id === selectedCategory);
      filtered = categoryData?.exercises || [];
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(exercise => exercise.difficulty === selectedDifficulty);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        exercise =>
          exercise.name.toLowerCase().includes(query) ||
          exercise.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  // Get filtered exercises
  const filteredExercises = getFilteredExercises();

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Open exercise detail dialog
  const openExerciseDetail = (exercise: Exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Exercise Library
              </h1>
              <p className="text-muted-foreground mb-8">
                Explore our comprehensive collection of spine-specific exercises designed by neurosurgical experts to help strengthen your spine and reduce pain.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for exercises..."
                  className="pl-10 pr-4 py-6 rounded-full"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Exercise Categories */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Filter by:</span>
              </div>
              <div className="w-48">
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficultyLevels.map((level) => (
                      <SelectItem key={level.id} value={level.id}>
                        {level.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Exercise Grid */}
        <section className="py-8">
          <div className="container">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading exercises...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Error loading exercises. Please try again later.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-8">
                  {selectedCategory === "all"
                    ? "All Exercises"
                    : categories.find(c => c.id === selectedCategory)?.name}
                  {selectedDifficulty !== "all" && ` - ${difficultyLevels.find(d => d.id === selectedDifficulty)?.name} Level`}
                  <span className="text-muted-foreground ml-2 text-lg">({filteredExercises.length} exercises)</span>
                </h2>
                {filteredExercises.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No exercises found matching your criteria. Try adjusting your filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredExercises.map((exercise) => (
                      <Card key={exercise.id} className="bg-card shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden group">
                          <img
                            src={exercise.image}
                            alt={exercise.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="secondary" size="icon" className="rounded-full" onClick={() => openExerciseDetail(exercise)}>
                              <Info className="h-6 w-6" />
                            </Button>
                          </div>
                          <Badge className="absolute top-2 right-2" variant={
                            exercise.difficulty === "beginner" ? "outline" :
                            exercise.difficulty === "intermediate" ? "secondary" : "default"
                          }>
                            {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle>{exercise.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {exercise.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" onClick={() => openExerciseDetail(exercise)}>
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Exercise Detail Dialog */}
        {selectedExercise && (
          <Dialog open={!!selectedExercise} onOpenChange={(open) => !open && setSelectedExercise(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedExercise.name}</DialogTitle>
                <DialogDescription>
                  <Badge variant={
                    selectedExercise.difficulty === "beginner" ? "outline" :
                    selectedExercise.difficulty === "intermediate" ? "secondary" : "default"
                  } className="mt-2">
                    {selectedExercise.difficulty.charAt(0).toUpperCase() + selectedExercise.difficulty.slice(1)} Level
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img
                    src={selectedExercise.image}
                    alt={selectedExercise.name}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground mb-6">{selectedExercise.description}</p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="instructions">
                      <AccordionTrigger className="text-lg font-semibold">Instructions</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal pl-5 space-y-2">
                          {selectedExercise.instructions.map((instruction, index) => (
                            <li key={index} className="text-muted-foreground">{instruction}</li>
                          ))}
                        </ol>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cautions">
                      <AccordionTrigger className="text-lg font-semibold">Cautions & Contraindications</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedExercise.cautions.map((caution, index) => (
                            <li key={index} className="text-muted-foreground">{caution}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setSelectedExercise(null)}>Close</Button>
                <Button>Add to My Exercises</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {/* Exercise Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Regular Exercise for Spine Health</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Strengthens Supporting Muscles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regular exercise strengthens the muscles that support your spine, reducing the load on spinal structures and decreasing the risk of injury.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Improves Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stretching exercises improve flexibility and range of motion, reducing stiffness and making daily activities easier to perform.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Enhances Posture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Targeted exercises help correct postural imbalances that can contribute to spine problems and chronic pain.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-md">
                <CardHeader>
                  <CardTitle>Reduces Pain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Appropriate exercises can help reduce pain by improving circulation, releasing endorphins, and addressing the underlying causes of discomfort.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-primary/5 rounded-lg p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Get Your Personalized Exercise Plan</h2>
                <p className="text-muted-foreground mb-8">
                  Take our comprehensive assessment to receive a customized exercise program tailored to your specific condition, symptoms, and goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/patient-resources/individual-spine-health-program#assessment">Take Assessment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/patient-resources/individual-spine-health-program#dashboard">Track Your Progress</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
