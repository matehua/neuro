import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
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
import SafeImage from "@/components/SafeImage";

// Define types for our exercise data
interface Exercise {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  image: string;
  videoUrl?: string;
  targetAreas: string[];
  relatedConditions: string[];
  instructions: string[];
  cautions: string[];
  biomechanicalPrinciples?: string;
  scientificValue?: string;
  contraindications?: string[];
  modifications?: string[];
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

  // Fetch exercise data using simple fetch
  const [exerciseData, setExerciseData] = useState<ExerciseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/data/exercises.json?v=${Date.now()}`, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch exercise data');
        }
        const data = await response.json();
        setExerciseData(data);
        setError(null);
      } catch (err) {

        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <Layout pageTitle="Exercise Library" seoData={{
      title: "Exercise Library | Spine Health Exercises | miNEURO",
      description: "Comprehensive collection of spine-specific exercises designed by neurosurgical experts to help strengthen your spine and reduce pain.",
      keywords: "spine exercises, back exercises, neck exercises, core strengthening, posture exercises, physical therapy"
    }}>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
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

        {/* Safety Warning Section */}
        <section className="py-8 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">⚠️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">Important Safety Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Before Starting Any Exercise:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Consult your healthcare provider before beginning any exercise program</li>
                        <li>• Stop immediately if you experience increased pain, dizziness, or numbness</li>
                        <li>• Never exercise while taking strong pain medications that may mask injury</li>
                        <li>• Avoid exercises during acute injury or inflammation phases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Medical Conditions Requiring Caution:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Recent spinal surgery or fractures</li>
                        <li>• Severe osteoporosis or bone density issues</li>
                        <li>• Active infections or inflammatory conditions</li>
                        <li>• Cardiovascular conditions or uncontrolled blood pressure</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Remember:</strong> These exercises are for educational purposes only and should not replace professional medical advice.
                      Always work with qualified healthcare professionals for personalized treatment plans.
                    </p>
                  </div>
                </div>
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
                          <SafeImage
                            src={exercise.image}
                            alt={exercise.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            fallbackSrc="/images/exercises/postural-awareness-spine.jpg"
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
                  <SafeImage
                    src={selectedExercise.image}
                    alt={selectedExercise.name}
                    className="w-full h-auto rounded-lg object-cover mb-4"
                    fallbackSrc="/images/exercises/postural-awareness-spine.jpg"
                  />
                  {selectedExercise.videoUrl && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Video Demonstration</h4>
                      <video
                        controls
                        className="w-full rounded-lg"
                        poster={selectedExercise.image}
                      >
                        <source src={selectedExercise.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground mb-4">{selectedExercise.description}</p>

                  {selectedExercise.targetAreas && selectedExercise.targetAreas.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Target Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExercise.targetAreas.map((area, index) => (
                          <Badge key={index} variant="secondary">{area}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedExercise.relatedConditions && selectedExercise.relatedConditions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Related Conditions</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExercise.relatedConditions.map((condition, index) => (
                          <Badge key={index} variant="outline">{condition}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="instructions">
                      <AccordionTrigger className="text-lg font-semibold">Step-by-Step Instructions</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal pl-5 space-y-2">
                          {selectedExercise.instructions.map((instruction, index) => (
                            <li key={index} className="text-muted-foreground">{instruction}</li>
                          ))}
                        </ol>
                      </AccordionContent>
                    </AccordionItem>

                    {selectedExercise.biomechanicalPrinciples && (
                      <AccordionItem value="biomechanics">
                        <AccordionTrigger className="text-lg font-semibold">Biomechanical Principles</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{selectedExercise.biomechanicalPrinciples}</p>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {selectedExercise.scientificValue && (
                      <AccordionItem value="scientific">
                        <AccordionTrigger className="text-lg font-semibold">Scientific Evidence</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{selectedExercise.scientificValue}</p>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    <AccordionItem value="cautions">
                      <AccordionTrigger className="text-lg font-semibold">Cautions & Safety Guidelines</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedExercise.cautions.map((caution, index) => (
                            <li key={index} className="text-muted-foreground">{caution}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    {selectedExercise.contraindications && selectedExercise.contraindications.length > 0 && (
                      <AccordionItem value="contraindications">
                        <AccordionTrigger className="text-lg font-semibold text-red-600">⚠️ Contraindications</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            {selectedExercise.contraindications.map((contraindication, index) => (
                              <li key={index} className="text-red-600">{contraindication}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {selectedExercise.modifications && selectedExercise.modifications.length > 0 && (
                      <AccordionItem value="modifications">
                        <AccordionTrigger className="text-lg font-semibold">Exercise Modifications</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            {selectedExercise.modifications.map((modification, index) => (
                              <li key={index} className="text-muted-foreground">{modification}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
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
      </div>
    </Layout>
  );
}
