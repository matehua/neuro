import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Play, Info, ArrowRight, CheckCircle2 } from "lucide-react";
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

  // Legacy sample exercises - to be removed
  /*
  const sampleExercises = [
    {
      id: "cervical-retraction",
      name: "Cervical Retraction",
      category: "neck",
      difficulty: "beginner",
      description: "A gentle exercise to improve neck posture and reduce strain on the cervical spine.",
      image: "/images/exercises/cervical-retraction.jpg",
      videoUrl: "/videos/exercises/cervical-retraction.mp4",
      targetAreas: ["Neck", "Upper Trapezius"],
      relatedConditions: ["Cervical Disc Herniation", "Neck Pain", "Cervical Radiculopathy"]
    },
    {
      id: "neck-rotation",
      name: "Neck Rotation",
      category: "neck",
      difficulty: "beginner",
      description: "Gentle rotation of the neck to improve range of motion and reduce stiffness.",
      image: "/images/exercises/neck-rotation.jpg",
      videoUrl: "/videos/exercises/neck-rotation.mp4",
      targetAreas: ["Neck", "Sternocleidomastoid", "Cervical Spine"],
      relatedConditions: ["Neck Stiffness", "Cervical Spondylosis", "Whiplash"]
    },
    {
      id: "neck-side-bend",
      name: "Neck Side Bend",
      category: "neck",
      difficulty: "beginner",
      description: "Lateral flexion of the neck to stretch the side neck muscles and improve mobility.",
      image: "/images/exercises/neck-side-bend.jpg",
      videoUrl: "/videos/exercises/neck-side-bend.mp4",
      targetAreas: ["Neck", "Scalenes", "Upper Trapezius"],
      relatedConditions: ["Neck Pain", "Cervical Radiculopathy", "Muscle Tension"]
    },
    {
      id: "neck-extension",
      name: "Neck Extension",
      category: "neck",
      difficulty: "beginner",
      description: "Controlled backward movement of the head to strengthen posterior neck muscles.",
      image: "/images/exercises/neck-extension.jpg",
      videoUrl: "/videos/exercises/neck-extension.mp4",
      targetAreas: ["Posterior Neck", "Suboccipitals", "Upper Trapezius"],
      relatedConditions: ["Forward Head Posture", "Neck Pain", "Cervical Hypomobility"]
    },
    {
      id: "isometric-neck-flexion",
      name: "Isometric Neck Flexion",
      category: "neck",
      difficulty: "intermediate",
      description: "Strengthens the anterior neck muscles through gentle resistance without movement.",
      image: "/images/exercises/isometric-neck-flexion.jpg",
      videoUrl: "/videos/exercises/isometric-neck-flexion.mp4",
      targetAreas: ["Anterior Neck", "Sternocleidomastoid", "Scalenes"],
      relatedConditions: ["Neck Weakness", "Cervical Instability", "Forward Head Posture"]
    },
    {
      id: "isometric-neck-extension",
      name: "Isometric Neck Extension",
      category: "neck",
      difficulty: "intermediate",
      description: "Strengthens the posterior neck muscles through gentle resistance without movement.",
      image: "/images/exercises/isometric-neck-extension.jpg",
      videoUrl: "/videos/exercises/isometric-neck-extension.mp4",
      targetAreas: ["Posterior Neck", "Upper Trapezius", "Suboccipitals"],
      relatedConditions: ["Neck Weakness", "Cervical Instability", "Neck Pain"]
    },
    {
      id: "isometric-neck-lateral-flexion",
      name: "Isometric Neck Lateral Flexion",
      category: "neck",
      difficulty: "intermediate",
      description: "Strengthens the lateral neck muscles through gentle resistance without movement.",
      image: "/images/exercises/isometric-neck-lateral-flexion.jpg",
      videoUrl: "/videos/exercises/isometric-neck-lateral-flexion.mp4",
      targetAreas: ["Lateral Neck", "Scalenes", "Sternocleidomastoid"],
      relatedConditions: ["Neck Weakness", "Cervical Instability", "Neck Pain"]
    },
    {
      id: "chin-tucks",
      name: "Chin Tucks",
      category: "neck",
      difficulty: "beginner",
      description: "Strengthens deep neck flexors and helps correct forward head posture.",
      image: "/images/exercises/chin-tucks.jpg",
      videoUrl: "/videos/exercises/chin-tucks.mp4",
      targetAreas: ["Deep Neck Flexors", "Cervical Spine"],
      relatedConditions: ["Forward Head Posture", "Neck Pain", "Upper Cross Syndrome"]
    },
    {
      id: "neck-clock",
      name: "Neck Clock Exercise",
      category: "neck",
      difficulty: "intermediate",
      description: "Controlled movement of the head in a circular pattern to improve neck mobility.",
      image: "/images/exercises/neck-clock.jpg",
      videoUrl: "/videos/exercises/neck-clock.mp4",
      targetAreas: ["Cervical Spine", "Neck Muscles", "Upper Trapezius"],
      relatedConditions: ["Neck Stiffness", "Cervical Spondylosis", "Reduced Mobility"]
    },
    {
      id: "upper-trapezius-stretch",
      name: "Upper Trapezius Stretch",
      category: "neck",
      difficulty: "beginner",
      description: "Stretches the upper trapezius muscle to relieve tension and improve neck mobility.",
      image: "/images/exercises/upper-trapezius-stretch.jpg",
      videoUrl: "/videos/exercises/upper-trapezius-stretch.mp4",
      targetAreas: ["Upper Trapezius", "Neck"],
      relatedConditions: ["Neck Tension", "Headaches", "Upper Cross Syndrome"]
    },
    {
      id: "levator-scapulae-stretch",
      name: "Levator Scapulae Stretch",
      category: "neck",
      difficulty: "intermediate",
      description: "Stretches the levator scapulae muscle to relieve tension in the neck and upper back.",
      image: "/images/exercises/levator-scapulae-stretch.jpg",
      videoUrl: "/videos/exercises/levator-scapulae-stretch.mp4",
      targetAreas: ["Levator Scapulae", "Neck", "Upper Back"],
      relatedConditions: ["Neck Pain", "Upper Back Pain", "Tension Headaches"]
    },
    {
      id: "neck-flexor-strengthening",
      name: "Neck Flexor Strengthening",
      category: "neck",
      difficulty: "intermediate",
      description: "Strengthens the anterior neck muscles to improve posture and stability.",
      image: "/images/exercises/neck-flexor-strengthening.jpg",
      videoUrl: "/videos/exercises/neck-flexor-strengthening.mp4",
      targetAreas: ["Anterior Neck", "Deep Neck Flexors"],
      relatedConditions: ["Forward Head Posture", "Neck Weakness", "Cervical Instability"]
    },
    {
      id: "neck-extensor-strengthening",
      name: "Neck Extensor Strengthening",
      category: "neck",
      difficulty: "intermediate",
      description: "Strengthens the posterior neck muscles to improve posture and stability.",
      image: "/images/exercises/neck-extensor-strengthening.jpg",
      videoUrl: "/videos/exercises/neck-extensor-strengthening.mp4",
      targetAreas: ["Posterior Neck", "Upper Trapezius", "Suboccipitals"],
      relatedConditions: ["Forward Head Posture", "Neck Weakness", "Cervical Instability"]
    },
    {
      id: "scapular-retraction-with-neck-retraction",
      name: "Scapular Retraction with Neck Retraction",
      category: "neck",
      difficulty: "intermediate",
      description: "Combines scapular and neck retraction to improve posture and strengthen upper back and neck muscles.",
      image: "/images/exercises/scapular-retraction-with-neck-retraction.jpg",
      videoUrl: "/videos/exercises/scapular-retraction-with-neck-retraction.mp4",
      targetAreas: ["Neck", "Upper Back", "Rhomboids", "Trapezius"],
      relatedConditions: ["Forward Head Posture", "Upper Cross Syndrome", "Neck Pain"]
    },
    {
      id: "neck-mobility-with-rotation",
      name: "Neck Mobility with Rotation",
      category: "neck",
      difficulty: "advanced",
      description: "Combines multiple neck movements to improve overall mobility and coordination.",
      image: "/images/exercises/neck-mobility-with-rotation.jpg",
      videoUrl: "/videos/exercises/neck-mobility-with-rotation.mp4",
      targetAreas: ["Cervical Spine", "Neck Muscles", "Upper Trapezius"],
      relatedConditions: ["Neck Stiffness", "Cervical Spondylosis", "Reduced Mobility"]
    },
    {
      id: "deep-neck-flexor-activation",
      name: "Deep Neck Flexor Activation",
      category: "neck",
      difficulty: "advanced",
      description: "Targets the deep neck flexor muscles to improve cervical stability and posture.",
      image: "/images/exercises/deep-neck-flexor-activation.jpg",
      videoUrl: "/videos/exercises/deep-neck-flexor-activation.mp4",
      targetAreas: ["Deep Neck Flexors", "Longus Colli", "Longus Capitis"],
      relatedConditions: ["Cervical Instability", "Forward Head Posture", "Neck Pain"]
    },
    {
      id: "prone-cobra",
      name: "Prone Cobra",
      category: "upper-back",
      difficulty: "beginner",
      description: "Strengthens the upper back muscles and improves posture.",
      image: "/images/exercises/prone-cobra.jpg",
      videoUrl: "/videos/exercises/prone-cobra.mp4",
      targetAreas: ["Upper Back", "Rhomboids", "Lower Trapezius"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "scapular-retraction",
      name: "Scapular Retraction",
      category: "upper-back",
      difficulty: "beginner",
      description: "Strengthens the rhomboids and middle trapezius to improve posture and reduce upper back pain.",
      image: "/images/exercises/scapular-retraction.jpg",
      videoUrl: "/videos/exercises/scapular-retraction.mp4",
      targetAreas: ["Rhomboids", "Middle Trapezius", "Upper Back"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "wall-angels",
      name: "Wall Angels",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Improves thoracic mobility and strengthens the muscles between the shoulder blades.",
      image: "/images/exercises/wall-angels.jpg",
      videoUrl: "/videos/exercises/wall-angels.mp4",
      targetAreas: ["Upper Back", "Rhomboids", "Serratus Anterior", "Rotator Cuff"],
      relatedConditions: ["Thoracic Kyphosis", "Rounded Shoulders", "Shoulder Impingement"]
    },
    {
      id: "band-pull-aparts",
      name: "Band Pull-Aparts",
      category: "upper-back",
      difficulty: "beginner",
      description: "Strengthens the upper back muscles and improves shoulder stability using resistance bands.",
      image: "/images/exercises/band-pull-aparts.jpg",
      videoUrl: "/videos/exercises/band-pull-aparts.mp4",
      targetAreas: ["Rhomboids", "Middle Trapezius", "Posterior Deltoids"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Weakness", "Poor Posture"]
    },
    {
      id: "seated-rows",
      name: "Seated Rows",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the upper and mid-back muscles using resistance bands or cables.",
      image: "/images/exercises/seated-rows.jpg",
      videoUrl: "/videos/exercises/seated-rows.mp4",
      targetAreas: ["Latissimus Dorsi", "Rhomboids", "Middle Trapezius"],
      relatedConditions: ["Upper Back Weakness", "Poor Posture", "Thoracic Kyphosis"]
    },
    {
      id: "thoracic-extension-foam-roller",
      name: "Thoracic Extension on Foam Roller",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Improves thoracic spine mobility and reduces stiffness using a foam roller.",
      image: "/images/exercises/thoracic-extension-foam-roller.jpg",
      videoUrl: "/videos/exercises/thoracic-extension-foam-roller.mp4",
      targetAreas: ["Thoracic Spine", "Erector Spinae", "Intercostals"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Reduced Mobility"]
    },
    {
      id: "prone-t-raises",
      name: "Prone T Raises",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the middle trapezius and rhomboids while lying prone.",
      image: "/images/exercises/prone-t-raises.jpg",
      videoUrl: "/videos/exercises/prone-t-raises.mp4",
      targetAreas: ["Middle Trapezius", "Rhomboids", "Posterior Deltoids"],
      relatedConditions: ["Upper Back Weakness", "Rounded Shoulders", "Poor Posture"]
    },
    {
      id: "prone-y-raises",
      name: "Prone Y Raises",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the lower trapezius and serratus anterior while lying prone.",
      image: "/images/exercises/prone-y-raises.jpg",
      videoUrl: "/videos/exercises/prone-y-raises.mp4",
      targetAreas: ["Lower Trapezius", "Serratus Anterior", "Rhomboids"],
      relatedConditions: ["Scapular Dyskinesis", "Shoulder Impingement", "Upper Back Weakness"]
    },
    {
      id: "prone-w-raises",
      name: "Prone W Raises",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the rotator cuff and rhomboids while lying prone.",
      image: "/images/exercises/prone-w-raises.jpg",
      videoUrl: "/videos/exercises/prone-w-raises.mp4",
      targetAreas: ["Rotator Cuff", "Rhomboids", "Middle Trapezius"],
      relatedConditions: ["Shoulder Impingement", "Rotator Cuff Weakness", "Upper Back Pain"]
    },
    {
      id: "cat-camel",
      name: "Cat-Camel",
      category: "upper-back",
      difficulty: "beginner",
      description: "Improves mobility of the entire spine, including the thoracic region.",
      image: "/images/exercises/cat-camel.jpg",
      videoUrl: "/videos/exercises/cat-camel.mp4",
      targetAreas: ["Thoracic Spine", "Erector Spinae", "Core"],
      relatedConditions: ["Spinal Stiffness", "Upper Back Pain", "Reduced Mobility"]
    },
    {
      id: "thoracic-rotation",
      name: "Thoracic Rotation",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Improves rotational mobility of the thoracic spine.",
      image: "/images/exercises/thoracic-rotation.jpg",
      videoUrl: "/videos/exercises/thoracic-rotation.mp4",
      targetAreas: ["Thoracic Spine", "Erector Spinae", "Obliques"],
      relatedConditions: ["Thoracic Stiffness", "Upper Back Pain", "Reduced Rotational Mobility"]
    },
    {
      id: "wall-slides",
      name: "Wall Slides",
      category: "upper-back",
      difficulty: "beginner",
      description: "Improves scapular mobility and strengthens the serratus anterior and lower trapezius.",
      image: "/images/exercises/wall-slides.jpg",
      videoUrl: "/videos/exercises/wall-slides.mp4",
      targetAreas: ["Serratus Anterior", "Lower Trapezius", "Upper Back"],
      relatedConditions: ["Scapular Dyskinesis", "Shoulder Impingement", "Poor Posture"]
    },
    {
      id: "shoulder-external-rotation",
      name: "Shoulder External Rotation",
      category: "upper-back",
      difficulty: "beginner",
      description: "Strengthens the external rotators of the shoulder to improve stability and posture.",
      image: "/images/exercises/shoulder-external-rotation.jpg",
      videoUrl: "/videos/exercises/shoulder-external-rotation.mp4",
      targetAreas: ["Infraspinatus", "Teres Minor", "Posterior Deltoid"],
      relatedConditions: ["Rotator Cuff Weakness", "Shoulder Impingement", "Upper Cross Syndrome"]
    },
    {
      id: "lat-pulldown",
      name: "Lat Pulldown",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the latissimus dorsi and other upper back muscles using resistance bands or cables.",
      image: "/images/exercises/lat-pulldown.jpg",
      videoUrl: "/videos/exercises/lat-pulldown.mp4",
      targetAreas: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
      relatedConditions: ["Upper Back Weakness", "Poor Posture", "Shoulder Instability"]
    },
    {
      id: "face-pulls",
      name: "Face Pulls",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Targets the posterior deltoids, middle trapezius, and external rotators of the shoulder.",
      image: "/images/exercises/face-pulls.jpg",
      videoUrl: "/videos/exercises/face-pulls.mp4",
      targetAreas: ["Posterior Deltoids", "Middle Trapezius", "Rotator Cuff"],
      relatedConditions: ["Rounded Shoulders", "Upper Cross Syndrome", "Shoulder Impingement"]
    },
    {
      id: "reverse-fly",
      name: "Reverse Fly",
      category: "upper-back",
      difficulty: "intermediate",
      description: "Strengthens the posterior deltoids and rhomboids using light weights or resistance bands.",
      image: "/images/exercises/reverse-fly.jpg",
      videoUrl: "/videos/exercises/reverse-fly.mp4",
      targetAreas: ["Posterior Deltoids", "Rhomboids", "Middle Trapezius"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Weakness", "Poor Posture"]
    },
    {
      id: "bird-dog",
      name: "Bird Dog",
      category: "core",
      difficulty: "beginner",
      description: "Improves core stability and strengthens the lower back muscles.",
      image: "/images/exercises/bird-dog.jpg",
      videoUrl: "/videos/exercises/bird-dog.mp4",
      targetAreas: ["Core", "Lower Back", "Gluteal Muscles"],
      relatedConditions: ["Lower Back Pain", "Lumbar Instability", "Core Weakness"]
    },
    {
      id: "plank",
      name: "Plank",
      category: "core",
      difficulty: "beginner",
      description: "Strengthens the core, shoulders, and back while maintaining a neutral spine position.",
      image: "/images/exercises/plank.jpg",
      videoUrl: "/videos/exercises/plank.mp4",
      targetAreas: ["Core", "Shoulders", "Back"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Poor Posture"]
    },
    {
      id: "modified-plank",
      name: "Modified Plank",
      category: "core",
      difficulty: "beginner",
      description: "A gentler version of the plank that still effectively strengthens the core muscles.",
      image: "/images/exercises/modified-plank.jpg",
      videoUrl: "/videos/exercises/modified-plank.mp4",
      targetAreas: ["Core", "Shoulders", "Back"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Poor Posture"]
    },
    {
      id: "abdominal-bracing",
      name: "Abdominal Bracing",
      category: "core",
      difficulty: "beginner",
      description: "Activates the deep core muscles to improve stability and protect the spine.",
      image: "/images/exercises/abdominal-bracing.jpg",
      videoUrl: "/videos/exercises/abdominal-bracing.mp4",
      targetAreas: ["Transverse Abdominis", "Core", "Lower Back"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Lumbar Instability"]
    },
    {
      id: "supine-toe-taps",
      name: "Supine Toe Taps",
      category: "core",
      difficulty: "beginner",
      description: "Strengthens the lower abdominals while maintaining a stable spine.",
      image: "/images/exercises/supine-toe-taps.jpg",
      videoUrl: "/videos/exercises/supine-toe-taps.mp4",
      targetAreas: ["Lower Abdominals", "Core", "Hip Flexors"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Diastasis Recti"]
    },
    {
      id: "heel-slides",
      name: "Heel Slides",
      category: "core",
      difficulty: "beginner",
      description: "Gently activates the core muscles while moving the legs in a controlled manner.",
      image: "/images/exercises/heel-slides.jpg",
      videoUrl: "/videos/exercises/heel-slides.mp4",
      targetAreas: ["Core", "Lower Abdominals", "Hip Flexors"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Lumbar Instability"]
    },
    {
      id: "glute-bridge-core",
      name: "Glute Bridge",
      category: "core",
      difficulty: "beginner",
      description: "Strengthens the core, gluteal muscles, and lower back.",
      image: "/images/exercises/glute-bridge-core.jpg",
      videoUrl: "/videos/exercises/glute-bridge-core.mp4",
      targetAreas: ["Core", "Gluteal Muscles", "Lower Back"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Gluteal Weakness"]
    },
    {
      id: "pallof-press",
      name: "Pallof Press",
      category: "core",
      difficulty: "intermediate",
      description: "Strengthens the core's ability to resist rotation, improving stability.",
      image: "/images/exercises/pallof-press.jpg",
      videoUrl: "/videos/exercises/pallof-press.mp4",
      targetAreas: ["Core", "Obliques", "Transverse Abdominis"],
      relatedConditions: ["Core Weakness", "Rotational Instability", "Lower Back Pain"]
    },
    {
      id: "pelvic-tilt",
      name: "Pelvic Tilt",
      category: "lower-back",
      difficulty: "beginner",
      description: "Helps relieve lower back pain and improves core activation.",
      image: "/images/exercises/pelvic-tilt.jpg",
      videoUrl: "/videos/exercises/pelvic-tilt.mp4",
      targetAreas: ["Lower Back", "Abdominals"],
      relatedConditions: ["Lumbar Disc Herniation", "Lower Back Pain", "Sacroiliac Joint Pain"]
    },
    {
      id: "prone-press-up",
      name: "Prone Press-Up",
      category: "lower-back",
      difficulty: "beginner",
      description: "Extends the lumbar spine to help relieve disc-related pain and improve mobility.",
      image: "/images/exercises/prone-press-up.jpg",
      videoUrl: "/videos/exercises/prone-press-up.mp4",
      targetAreas: ["Lumbar Spine", "Erector Spinae"],
      relatedConditions: ["Lumbar Disc Herniation", "Spinal Stenosis", "Lower Back Pain"]
    },
    {
      id: "knee-to-chest",
      name: "Knee to Chest",
      category: "lower-back",
      difficulty: "beginner",
      description: "Gently stretches the lower back and hip muscles to relieve tension.",
      image: "/images/exercises/knee-to-chest.jpg",
      videoUrl: "/videos/exercises/knee-to-chest.mp4",
      targetAreas: ["Lower Back", "Gluteal Muscles", "Hip Flexors"],
      relatedConditions: ["Lower Back Pain", "Lumbar Stiffness", "Sciatica"]
    },
    {
      id: "child-pose",
      name: "Child's Pose",
      category: "lower-back",
      difficulty: "beginner",
      description: "A gentle stretch for the lower back, hips, and thighs that helps relieve tension.",
      image: "/images/exercises/child-pose.jpg",
      videoUrl: "/videos/exercises/child-pose.mp4",
      targetAreas: ["Lower Back", "Hips", "Thighs"],
      relatedConditions: ["Lower Back Pain", "Lumbar Stiffness", "Stress-Related Back Pain"]
    },
    {
      id: "lumbar-rotation",
      name: "Lumbar Rotation",
      category: "lower-back",
      difficulty: "beginner",
      description: "Improves rotational mobility of the lumbar spine and helps relieve tension.",
      image: "/images/exercises/lumbar-rotation.jpg",
      videoUrl: "/videos/exercises/lumbar-rotation.mp4",
      targetAreas: ["Lumbar Spine", "Obliques", "Hip Rotators"],
      relatedConditions: ["Lower Back Pain", "Lumbar Stiffness", "Facet Joint Pain"]
    },
    {
      id: "cat-cow",
      name: "Cat-Cow Stretch",
      category: "lower-back",
      difficulty: "beginner",
      description: "Improves mobility of the entire spine, including the lumbar region.",
      image: "/images/exercises/cat-cow-lower-back.jpg",
      videoUrl: "/videos/exercises/cat-cow-lower-back.mp4",
      targetAreas: ["Lumbar Spine", "Erector Spinae", "Core"],
      relatedConditions: ["Lower Back Pain", "Lumbar Stiffness", "Reduced Mobility"]
    },
    {
      id: "prone-leg-lift",
      name: "Prone Leg Lift",
      category: "lower-back",
      difficulty: "intermediate",
      description: "Strengthens the lower back and gluteal muscles while lying prone.",
      image: "/images/exercises/prone-leg-lift.jpg",
      videoUrl: "/videos/exercises/prone-leg-lift.mp4",
      targetAreas: ["Erector Spinae", "Gluteal Muscles", "Hamstrings"],
      relatedConditions: ["Lower Back Weakness", "Lumbar Instability", "Gluteal Weakness"]
    },
    {
      id: "bird-dog-lower-back",
      name: "Bird Dog",
      category: "lower-back",
      difficulty: "intermediate",
      description: "Improves core stability and strengthens the lower back muscles.",
      image: "/images/exercises/bird-dog-lower-back.jpg",
      videoUrl: "/videos/exercises/bird-dog-lower-back.mp4",
      targetAreas: ["Lower Back", "Core", "Gluteal Muscles"],
      relatedConditions: ["Lower Back Pain", "Lumbar Instability", "Core Weakness"]
    },
    {
      id: "supine-hamstring-stretch",
      name: "Supine Hamstring Stretch",
      category: "lower-back",
      difficulty: "beginner",
      description: "Stretches the hamstrings while supporting the lower back.",
      image: "/images/exercises/supine-hamstring-stretch.jpg",
      videoUrl: "/videos/exercises/supine-hamstring-stretch.mp4",
      targetAreas: ["Hamstrings", "Lower Back"],
      relatedConditions: ["Lower Back Pain", "Hamstring Tightness", "Sciatica"]
    },
    {
      id: "piriformis-stretch-lower-back",
      name: "Piriformis Stretch",
      category: "lower-back",
      difficulty: "beginner",
      description: "Stretches the piriformis muscle to relieve sciatic nerve compression and lower back pain.",
      image: "/images/exercises/piriformis-stretch-lower-back.jpg",
      videoUrl: "/videos/exercises/piriformis-stretch-lower-back.mp4",
      targetAreas: ["Piriformis", "Gluteal Muscles", "Lower Back"],
      relatedConditions: ["Piriformis Syndrome", "Sciatica", "Lower Back Pain"]
    },
    {
      id: "hip-flexor-stretch",
      name: "Hip Flexor Stretch",
      category: "lower-back",
      difficulty: "beginner",
      description: "Stretches the hip flexors to reduce strain on the lower back.",
      image: "/images/exercises/hip-flexor-stretch.jpg",
      videoUrl: "/videos/exercises/hip-flexor-stretch.mp4",
      targetAreas: ["Hip Flexors", "Psoas", "Lower Back"],
      relatedConditions: ["Lower Back Pain", "Anterior Pelvic Tilt", "Hip Flexor Tightness"]
    },
    {
      id: "supine-marching",
      name: "Supine Marching",
      category: "lower-back",
      difficulty: "beginner",
      description: "Strengthens the core while maintaining a neutral spine position.",
      image: "/images/exercises/supine-marching.jpg",
      videoUrl: "/videos/exercises/supine-marching.mp4",
      targetAreas: ["Core", "Hip Flexors", "Lower Back"],
      relatedConditions: ["Lower Back Pain", "Core Weakness", "Lumbar Instability"]
    },
    {
      id: "side-lying-quad-stretch",
      name: "Side-Lying Quad Stretch",
      category: "lower-back",
      difficulty: "intermediate",
      description: "Stretches the quadriceps while supporting the lower back in a side-lying position.",
      image: "/images/exercises/side-lying-quad-stretch.jpg",
      videoUrl: "/videos/exercises/side-lying-quad-stretch.mp4",
      targetAreas: ["Quadriceps", "Hip Flexors", "Lower Back"],
      relatedConditions: ["Lower Back Pain", "Anterior Pelvic Tilt", "Quadriceps Tightness"]
    },
    {
      id: "standing-lumbar-extension",
      name: "Standing Lumbar Extension",
      category: "lower-back",
      difficulty: "intermediate",
      description: "Gently extends the lumbar spine in a standing position to improve mobility.",
      image: "/images/exercises/standing-lumbar-extension.jpg",
      videoUrl: "/videos/exercises/standing-lumbar-extension.mp4",
      targetAreas: ["Lumbar Spine", "Erector Spinae"],
      relatedConditions: ["Lumbar Disc Herniation", "Spinal Stenosis", "Lower Back Pain"]
    },
    {
      id: "lumbar-stabilization",
      name: "Lumbar Stabilization Exercise",
      category: "lower-back",
      difficulty: "advanced",
      description: "Improves core stability and strengthens the muscles supporting the lower back.",
      image: "/images/exercises/lumbar-stabilization.jpg",
      videoUrl: "/videos/exercises/lumbar-stabilization.mp4",
      targetAreas: ["Core", "Lower Back", "Transverse Abdominis"],
      relatedConditions: ["Lumbar Instability", "Lower Back Pain", "Spondylolisthesis"]
    },
    {
      id: "cat-cow",
      name: "Cat-Cow Stretch",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves spine mobility and helps relieve tension in the back.",
      image: "/images/exercises/cat-cow.jpg",
      videoUrl: "/videos/exercises/cat-cow.mp4",
      targetAreas: ["Entire Spine", "Core"],
      relatedConditions: ["Spinal Stiffness", "General Back Pain", "Reduced Mobility"]
    },
    {
      id: "seated-thoracic-rotation",
      name: "Seated Thoracic Rotation",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves rotational mobility of the thoracic spine while seated.",
      image: "/images/exercises/seated-thoracic-rotation.jpg",
      videoUrl: "/videos/exercises/seated-thoracic-rotation.mp4",
      targetAreas: ["Thoracic Spine", "Obliques", "Erector Spinae"],
      relatedConditions: ["Thoracic Stiffness", "Upper Back Pain", "Reduced Rotational Mobility"]
    },
    {
      id: "seated-side-bend",
      name: "Seated Side Bend",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves lateral flexibility of the spine while seated.",
      image: "/images/exercises/seated-side-bend.jpg",
      videoUrl: "/videos/exercises/seated-side-bend.mp4",
      targetAreas: ["Lateral Spine", "Quadratus Lumborum", "Intercostals"],
      relatedConditions: ["Lateral Stiffness", "Side Pain", "Reduced Side Bending"]
    },
    {
      id: "hip-circles",
      name: "Hip Circles",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves hip mobility and reduces stiffness in the lower back.",
      image: "/images/exercises/hip-circles.jpg",
      videoUrl: "/videos/exercises/hip-circles.mp4",
      targetAreas: ["Hip Joints", "Lower Back", "Pelvis"],
      relatedConditions: ["Hip Stiffness", "Lower Back Pain", "Reduced Hip Mobility"]
    },
    {
      id: "shoulder-rolls",
      name: "Shoulder Rolls",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves shoulder mobility and reduces tension in the upper back and neck.",
      image: "/images/exercises/shoulder-rolls.jpg",
      videoUrl: "/videos/exercises/shoulder-rolls.mp4",
      targetAreas: ["Shoulders", "Upper Back", "Neck"],
      relatedConditions: ["Shoulder Stiffness", "Upper Back Tension", "Neck Pain"]
    },
    {
      id: "wrist-circles",
      name: "Wrist Circles",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves wrist mobility and reduces stiffness in the forearms.",
      image: "/images/exercises/wrist-circles.jpg",
      videoUrl: "/videos/exercises/wrist-circles.mp4",
      targetAreas: ["Wrists", "Forearms"],
      relatedConditions: ["Wrist Stiffness", "Carpal Tunnel Syndrome", "Forearm Tension"]
    },
    {
      id: "ankle-circles",
      name: "Ankle Circles",
      category: "mobility",
      difficulty: "beginner",
      description: "Improves ankle mobility and reduces stiffness in the lower legs.",
      image: "/images/exercises/ankle-circles.jpg",
      videoUrl: "/videos/exercises/ankle-circles.mp4",
      targetAreas: ["Ankles", "Lower Legs"],
      relatedConditions: ["Ankle Stiffness", "Plantar Fasciitis", "Lower Leg Tension"]
    },
    {
      id: "neck-mobility-sequence",
      name: "Neck Mobility Sequence",
      category: "mobility",
      difficulty: "beginner",
      description: "A sequence of gentle movements to improve neck mobility in all directions.",
      image: "/images/exercises/neck-mobility-sequence.jpg",
      videoUrl: "/videos/exercises/neck-mobility-sequence.mp4",
      targetAreas: ["Neck", "Upper Cervical Spine", "Lower Cervical Spine"],
      relatedConditions: ["Neck Stiffness", "Cervical Spondylosis", "Reduced Neck Mobility"]
    },
    {
      id: "piriformis-stretch",
      name: "Piriformis Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the piriformis muscle to relieve sciatic nerve compression.",
      image: "/images/exercises/piriformis-stretch.jpg",
      videoUrl: "/videos/exercises/piriformis-stretch.mp4",
      targetAreas: ["Piriformis", "Gluteal Muscles"],
      relatedConditions: ["Piriformis Syndrome", "Sciatica", "Hip Pain"]
    },
    {
      id: "hamstring-stretch",
      name: "Hamstring Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the hamstring muscles to improve flexibility and reduce tension in the lower back.",
      image: "/images/exercises/hamstring-stretch.jpg",
      videoUrl: "/videos/exercises/hamstring-stretch.mp4",
      targetAreas: ["Hamstrings", "Lower Back"],
      relatedConditions: ["Hamstring Tightness", "Lower Back Pain", "Sciatica"]
    },
    {
      id: "calf-stretch",
      name: "Calf Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the calf muscles to improve ankle mobility and reduce tension in the lower legs.",
      image: "/images/exercises/calf-stretch.jpg",
      videoUrl: "/videos/exercises/calf-stretch.mp4",
      targetAreas: ["Calves", "Achilles Tendon"],
      relatedConditions: ["Calf Tightness", "Plantar Fasciitis", "Achilles Tendinopathy"]
    },
    {
      id: "quadriceps-stretch",
      name: "Quadriceps Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the quadriceps muscles to improve knee mobility and reduce tension in the front of the thigh.",
      image: "/images/exercises/quadriceps-stretch.jpg",
      videoUrl: "/videos/exercises/quadriceps-stretch.mp4",
      targetAreas: ["Quadriceps", "Knee Joint"],
      relatedConditions: ["Quadriceps Tightness", "Knee Pain", "Patellofemoral Pain"]
    },
    {
      id: "hip-flexor-stretch",
      name: "Hip Flexor Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the hip flexor muscles to improve hip mobility and reduce tension in the lower back.",
      image: "/images/exercises/hip-flexor-stretch-stretching.jpg",
      videoUrl: "/videos/exercises/hip-flexor-stretch-stretching.mp4",
      targetAreas: ["Hip Flexors", "Psoas", "Lower Back"],
      relatedConditions: ["Hip Flexor Tightness", "Lower Back Pain", "Anterior Pelvic Tilt"]
    },
    {
      id: "chest-stretch",
      name: "Chest Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the chest muscles to improve posture and reduce tension in the upper body.",
      image: "/images/exercises/chest-stretch.jpg",
      videoUrl: "/videos/exercises/chest-stretch.mp4",
      targetAreas: ["Chest", "Anterior Shoulders"],
      relatedConditions: ["Rounded Shoulders", "Upper Cross Syndrome", "Poor Posture"]
    },
    {
      id: "upper-trapezius-stretch-stretching",
      name: "Upper Trapezius Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the upper trapezius muscle to reduce tension in the neck and upper back.",
      image: "/images/exercises/upper-trapezius-stretch-stretching.jpg",
      videoUrl: "/videos/exercises/upper-trapezius-stretch-stretching.mp4",
      targetAreas: ["Upper Trapezius", "Neck"],
      relatedConditions: ["Neck Tension", "Headaches", "Upper Cross Syndrome"]
    },
    {
      id: "levator-scapulae-stretch-stretching",
      name: "Levator Scapulae Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the levator scapulae muscle to reduce tension in the neck and upper back.",
      image: "/images/exercises/levator-scapulae-stretch-stretching.jpg",
      videoUrl: "/videos/exercises/levator-scapulae-stretch-stretching.mp4",
      targetAreas: ["Levator Scapulae", "Neck", "Upper Back"],
      relatedConditions: ["Neck Pain", "Upper Back Pain", "Tension Headaches"]
    },
    {
      id: "rhomboid-stretch",
      name: "Rhomboid Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the rhomboid muscles to reduce tension in the upper back.",
      image: "/images/exercises/rhomboid-stretch.jpg",
      videoUrl: "/videos/exercises/rhomboid-stretch.mp4",
      targetAreas: ["Rhomboids", "Upper Back"],
      relatedConditions: ["Upper Back Pain", "Shoulder Blade Pain", "Poor Posture"]
    },
    {
      id: "latissimus-dorsi-stretch",
      name: "Latissimus Dorsi Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the latissimus dorsi muscles to improve shoulder mobility and reduce tension in the mid-back.",
      image: "/images/exercises/latissimus-dorsi-stretch.jpg",
      videoUrl: "/videos/exercises/latissimus-dorsi-stretch.mp4",
      targetAreas: ["Latissimus Dorsi", "Mid-Back", "Shoulders"],
      relatedConditions: ["Mid-Back Pain", "Shoulder Stiffness", "Poor Posture"]
    },
    {
      id: "thoracic-extension-stretch",
      name: "Thoracic Extension Stretch",
      category: "stretching",
      difficulty: "intermediate",
      description: "Stretches the thoracic spine into extension to improve posture and reduce kyphosis.",
      image: "/images/exercises/thoracic-extension-stretch.jpg",
      videoUrl: "/videos/exercises/thoracic-extension-stretch.mp4",
      targetAreas: ["Thoracic Spine", "Upper Back"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "seated-forward-fold",
      name: "Seated Forward Fold",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the entire posterior chain, including the back, hamstrings, and calves.",
      image: "/images/exercises/seated-forward-fold.jpg",
      videoUrl: "/videos/exercises/seated-forward-fold.mp4",
      targetAreas: ["Lower Back", "Hamstrings", "Calves"],
      relatedConditions: ["Lower Back Pain", "Hamstring Tightness", "Poor Flexibility"]
    },
    {
      id: "childs-pose-stretch",
      name: "Child's Pose",
      category: "stretching",
      difficulty: "beginner",
      description: "A gentle stretch for the back, hips, and thighs that helps relieve tension.",
      image: "/images/exercises/childs-pose-stretch.jpg",
      videoUrl: "/videos/exercises/childs-pose-stretch.mp4",
      targetAreas: ["Lower Back", "Hips", "Thighs"],
      relatedConditions: ["Lower Back Pain", "Hip Tightness", "Stress-Related Tension"]
    },
    {
      id: "butterfly-stretch",
      name: "Butterfly Stretch",
      category: "stretching",
      difficulty: "beginner",
      description: "Stretches the inner thighs and hips to improve hip mobility.",
      image: "/images/exercises/butterfly-stretch.jpg",
      videoUrl: "/videos/exercises/butterfly-stretch.mp4",
      targetAreas: ["Inner Thighs", "Hips", "Groin"],
      relatedConditions: ["Hip Tightness", "Groin Strain", "Limited Hip Mobility"]
    },
    {
      id: "figure-four-stretch",
      name: "Figure Four Stretch",
      category: "stretching",
      difficulty: "intermediate",
      description: "Stretches the gluteal muscles and external hip rotators to improve hip mobility.",
      image: "/images/exercises/figure-four-stretch.jpg",
      videoUrl: "/videos/exercises/figure-four-stretch.mp4",
      targetAreas: ["Gluteal Muscles", "Hip Rotators", "Lower Back"],
      relatedConditions: ["Hip Pain", "Piriformis Syndrome", "Sciatica"]
    },
    {
      id: "wall-slide",
      name: "Wall Slide",
      category: "posture",
      difficulty: "intermediate",
      description: "Improves shoulder mobility and posture.",
      image: "/images/exercises/wall-slide.jpg",
      videoUrl: "/videos/exercises/wall-slide.mp4",
      targetAreas: ["Shoulders", "Upper Back", "Scapular Muscles"],
      relatedConditions: ["Rounded Shoulders", "Thoracic Outlet Syndrome", "Poor Posture"]
    },
    {
      id: "wall-angel",
      name: "Wall Angel",
      category: "posture",
      difficulty: "beginner",
      description: "Improves posture by strengthening the muscles between the shoulder blades and stretching the chest.",
      image: "/images/exercises/wall-angel.jpg",
      videoUrl: "/videos/exercises/wall-angel.mp4",
      targetAreas: ["Upper Back", "Shoulders", "Chest"],
      relatedConditions: ["Rounded Shoulders", "Upper Cross Syndrome", "Poor Posture"]
    },
    {
      id: "chin-tuck-posture",
      name: "Chin Tuck",
      category: "posture",
      difficulty: "beginner",
      description: "Improves neck posture by strengthening the deep neck flexors and reducing forward head position.",
      image: "/images/exercises/chin-tuck-posture.jpg",
      videoUrl: "/videos/exercises/chin-tuck-posture.mp4",
      targetAreas: ["Deep Neck Flexors", "Cervical Spine"],
      relatedConditions: ["Forward Head Posture", "Neck Pain", "Upper Cross Syndrome"]
    },
    {
      id: "doorway-stretch",
      name: "Doorway Stretch",
      category: "posture",
      difficulty: "beginner",
      description: "Stretches the chest muscles to improve posture and reduce rounded shoulders.",
      image: "/images/exercises/doorway-stretch.jpg",
      videoUrl: "/videos/exercises/doorway-stretch.mp4",
      targetAreas: ["Chest", "Anterior Shoulders"],
      relatedConditions: ["Rounded Shoulders", "Upper Cross Syndrome", "Poor Posture"]
    },
    {
      id: "scapular-retraction-posture",
      name: "Scapular Retraction",
      category: "posture",
      difficulty: "beginner",
      description: "Strengthens the muscles between the shoulder blades to improve posture and reduce rounded shoulders.",
      image: "/images/exercises/scapular-retraction-posture.jpg",
      videoUrl: "/videos/exercises/scapular-retraction-posture.mp4",
      targetAreas: ["Rhomboids", "Middle Trapezius", "Upper Back"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "thoracic-extension-posture",
      name: "Thoracic Extension",
      category: "posture",
      difficulty: "intermediate",
      description: "Improves thoracic spine extension to reduce kyphosis and improve overall posture.",
      image: "/images/exercises/thoracic-extension-posture.jpg",
      videoUrl: "/videos/exercises/thoracic-extension-posture.mp4",
      targetAreas: ["Thoracic Spine", "Upper Back"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "wall-stand",
      name: "Wall Stand",
      category: "posture",
      difficulty: "beginner",
      description: "Improves overall posture by aligning the spine against a wall.",
      image: "/images/exercises/wall-stand.jpg",
      videoUrl: "/videos/exercises/wall-stand.mp4",
      targetAreas: ["Entire Spine", "Core", "Gluteal Muscles"],
      relatedConditions: ["Poor Posture", "Forward Head", "Rounded Shoulders"]
    },
    {
      id: "pelvic-tilt-posture",
      name: "Pelvic Tilt",
      category: "posture",
      difficulty: "beginner",
      description: "Improves pelvic alignment and reduces excessive lordosis in the lower back.",
      image: "/images/exercises/pelvic-tilt-posture.jpg",
      videoUrl: "/videos/exercises/pelvic-tilt-posture.mp4",
      targetAreas: ["Pelvis", "Lower Back", "Abdominals"],
      relatedConditions: ["Anterior Pelvic Tilt", "Lower Back Pain", "Poor Posture"]
    },
    {
      id: "shoulder-blade-squeeze",
      name: "Shoulder Blade Squeeze",
      category: "posture",
      difficulty: "beginner",
      description: "Strengthens the muscles between the shoulder blades to improve posture.",
      image: "/images/exercises/shoulder-blade-squeeze.jpg",
      videoUrl: "/videos/exercises/shoulder-blade-squeeze.mp4",
      targetAreas: ["Rhomboids", "Middle Trapezius", "Upper Back"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Pain", "Poor Posture"]
    },
    {
      id: "prone-i-y-t",
      name: "Prone I-Y-T",
      category: "posture",
      difficulty: "intermediate",
      description: "Strengthens the upper back and shoulder muscles to improve posture.",
      image: "/images/exercises/prone-i-y-t.jpg",
      videoUrl: "/videos/exercises/prone-i-y-t.mp4",
      targetAreas: ["Upper Back", "Shoulders", "Trapezius"],
      relatedConditions: ["Rounded Shoulders", "Upper Back Weakness", "Poor Posture"]
    },
    {
      id: "seated-posture-correction",
      name: "Seated Posture Correction",
      category: "posture",
      difficulty: "beginner",
      description: "Improves awareness of proper seated posture and strengthens the muscles needed to maintain it.",
      image: "/images/exercises/seated-posture-correction.jpg",
      videoUrl: "/videos/exercises/seated-posture-correction.mp4",
      targetAreas: ["Entire Spine", "Core", "Upper Back"],
      relatedConditions: ["Poor Posture", "Back Pain", "Neck Pain"]
    },
    {
      id: "standing-posture-correction",
      name: "Standing Posture Correction",
      category: "posture",
      difficulty: "beginner",
      description: "Improves awareness of proper standing posture and strengthens the muscles needed to maintain it.",
      image: "/images/exercises/standing-posture-correction.jpg",
      videoUrl: "/videos/exercises/standing-posture-correction.mp4",
      targetAreas: ["Entire Spine", "Core", "Gluteal Muscles"],
      relatedConditions: ["Poor Posture", "Back Pain", "Neck Pain"]
    },
    {
      id: "brugger-relief-position",
      name: "Brugger Relief Position",
      category: "posture",
      difficulty: "beginner",
      description: "A position that helps counteract the effects of prolonged sitting and improves posture.",
      image: "/images/exercises/brugger-relief-position.jpg",
      videoUrl: "/videos/exercises/brugger-relief-position.mp4",
      targetAreas: ["Upper Back", "Shoulders", "Chest"],
      relatedConditions: ["Rounded Shoulders", "Upper Cross Syndrome", "Poor Posture"]
    },
    {
      id: "neck-retraction-posture",
      name: "Neck Retraction",
      category: "posture",
      difficulty: "beginner",
      description: "Improves neck posture by strengthening the deep neck flexors and reducing forward head position.",
      image: "/images/exercises/neck-retraction-posture.jpg",
      videoUrl: "/videos/exercises/neck-retraction-posture.mp4",
      targetAreas: ["Deep Neck Flexors", "Cervical Spine"],
      relatedConditions: ["Forward Head Posture", "Neck Pain", "Upper Cross Syndrome"]
    },
    {
      id: "posture-awareness-exercise",
      name: "Posture Awareness Exercise",
      category: "posture",
      difficulty: "beginner",
      description: "Improves awareness of proper posture throughout daily activities.",
      image: "/images/exercises/posture-awareness-exercise.jpg",
      videoUrl: "/videos/exercises/posture-awareness-exercise.mp4",
      targetAreas: ["Entire Spine", "Core", "Upper Back"],
      relatedConditions: ["Poor Posture", "Back Pain", "Neck Pain"]
    },
    {
      id: "mcgill-curl-up",
      name: "McGill Curl-Up",
      category: "core",
      difficulty: "intermediate",
      description: "A spine-sparing core exercise that minimizes disc pressure while strengthening abdominals.",
      image: "/images/exercises/mcgill-curl-up.jpg",
      videoUrl: "/videos/exercises/mcgill-curl-up.mp4",
      targetAreas: ["Core", "Rectus Abdominis", "Transverse Abdominis"],
      relatedConditions: ["Lumbar Disc Herniation", "Core Weakness", "Lower Back Pain"]
    },
    {
      id: "side-plank",
      name: "Side Plank",
      category: "core",
      difficulty: "intermediate",
      description: "Strengthens the lateral core muscles and improves spinal stability.",
      image: "/images/exercises/side-plank.jpg",
      videoUrl: "/videos/exercises/side-plank.mp4",
      targetAreas: ["Lateral Core", "Quadratus Lumborum", "Obliques"],
      relatedConditions: ["Scoliosis", "Lateral Shift", "Core Weakness"]
    },
    {
      id: "modified-side-plank",
      name: "Modified Side Plank",
      category: "core",
      difficulty: "beginner",
      description: "A gentler version of the side plank that still effectively strengthens the lateral core muscles.",
      image: "/images/exercises/modified-side-plank.jpg",
      videoUrl: "/videos/exercises/modified-side-plank.mp4",
      targetAreas: ["Lateral Core", "Obliques", "Quadratus Lumborum"],
      relatedConditions: ["Core Weakness", "Scoliosis", "Lateral Shift"]
    },
    {
      id: "bird-dog-progression",
      name: "Bird Dog Progression",
      category: "core",
      difficulty: "advanced",
      description: "An advanced version of the bird dog exercise that further challenges core stability.",
      image: "/images/exercises/bird-dog-progression.jpg",
      videoUrl: "/videos/exercises/bird-dog-progression.mp4",
      targetAreas: ["Core", "Lower Back", "Gluteal Muscles"],
      relatedConditions: ["Core Weakness", "Lumbar Instability", "Lower Back Pain"]
    },
    {
      id: "plank-with-leg-lift",
      name: "Plank with Leg Lift",
      category: "core",
      difficulty: "advanced",
      description: "Challenges core stability by adding leg lifts to the standard plank position.",
      image: "/images/exercises/plank-with-leg-lift.jpg",
      videoUrl: "/videos/exercises/plank-with-leg-lift.mp4",
      targetAreas: ["Core", "Hip Flexors", "Gluteal Muscles"],
      relatedConditions: ["Core Weakness", "Lumbar Instability", "Poor Balance"]
    },
    {
      id: "russian-twist",
      name: "Russian Twist",
      category: "core",
      difficulty: "intermediate",
      description: "Strengthens the obliques and improves rotational control of the trunk.",
      image: "/images/exercises/russian-twist.jpg",
      videoUrl: "/videos/exercises/russian-twist.mp4",
      targetAreas: ["Obliques", "Rectus Abdominis", "Hip Flexors"],
      relatedConditions: ["Core Weakness", "Rotational Instability", "Poor Coordination"]
    },
    {
      id: "segmental-rotation",
      name: "Segmental Rotation",
      category: "core",
      difficulty: "beginner",
      description: "Improves rotational mobility of the spine while maintaining core stability.",
      image: "/images/exercises/segmental-rotation.jpg",
      videoUrl: "/videos/exercises/segmental-rotation.mp4",
      targetAreas: ["Obliques", "Transverse Abdominis", "Spine Rotators"],
      relatedConditions: ["Rotational Stiffness", "Core Weakness", "Lower Back Pain"]
    },
    {
      id: "thoracic-extension",
      name: "Thoracic Extension",
      category: "mobility",
      difficulty: "intermediate",
      description: "Improves thoracic spine mobility and reduces stiffness.",
      image: "/images/exercises/thoracic-extension.jpg",
      videoUrl: "/videos/exercises/thoracic-extension.mp4",
      targetAreas: ["Thoracic Spine", "Erector Spinae"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Reduced Mobility"]
    },
    {
      id: "thoracic-rotation-foam-roller",
      name: "Thoracic Rotation with Foam Roller",
      category: "mobility",
      difficulty: "intermediate",
      description: "Improves thoracic spine rotation using a foam roller for support.",
      image: "/images/exercises/thoracic-rotation-foam-roller.jpg",
      videoUrl: "/videos/exercises/thoracic-rotation-foam-roller.mp4",
      targetAreas: ["Thoracic Spine", "Obliques", "Intercostals"],
      relatedConditions: ["Thoracic Stiffness", "Upper Back Pain", "Reduced Rotational Mobility"]
    },
    {
      id: "hip-flexor-mobility",
      name: "Hip Flexor Mobility",
      category: "mobility",
      difficulty: "intermediate",
      description: "Improves hip flexor mobility and reduces tension in the lower back.",
      image: "/images/exercises/hip-flexor-mobility.jpg",
      videoUrl: "/videos/exercises/hip-flexor-mobility.mp4",
      targetAreas: ["Hip Flexors", "Psoas", "Lower Back"],
      relatedConditions: ["Hip Flexor Tightness", "Lower Back Pain", "Anterior Pelvic Tilt"]
    },
    {
      id: "hip-rotator-mobility",
      name: "Hip Rotator Mobility",
      category: "mobility",
      difficulty: "intermediate",
      description: "Improves rotational mobility of the hip joints.",
      image: "/images/exercises/hip-rotator-mobility.jpg",
      videoUrl: "/videos/exercises/hip-rotator-mobility.mp4",
      targetAreas: ["Hip Rotators", "Piriformis", "Gluteal Muscles"],
      relatedConditions: ["Hip Stiffness", "Piriformis Syndrome", "Sciatica"]
    },
    {
      id: "shoulder-mobility-sequence",
      name: "Shoulder Mobility Sequence",
      category: "mobility",
      difficulty: "intermediate",
      description: "A sequence of movements to improve shoulder mobility in all directions.",
      image: "/images/exercises/shoulder-mobility-sequence.jpg",
      videoUrl: "/videos/exercises/shoulder-mobility-sequence.mp4",
      targetAreas: ["Shoulders", "Rotator Cuff", "Scapular Muscles"],
      relatedConditions: ["Shoulder Stiffness", "Frozen Shoulder", "Rotator Cuff Tendinopathy"]
    },
    {
      id: "spine-wave",
      name: "Spine Wave",
      category: "mobility",
      difficulty: "intermediate",
      description: "A flowing movement that improves mobility throughout the entire spine.",
      image: "/images/exercises/spine-wave.jpg",
      videoUrl: "/videos/exercises/spine-wave.mp4",
      targetAreas: ["Entire Spine", "Core", "Hip Flexors"],
      relatedConditions: ["Spinal Stiffness", "Poor Posture", "Reduced Mobility"]
    },
    {
      id: "thread-the-needle",
      name: "Thread the Needle",
      category: "mobility",
      difficulty: "intermediate",
      description: "Improves thoracic spine rotation and shoulder mobility.",
      image: "/images/exercises/thread-the-needle.jpg",
      videoUrl: "/videos/exercises/thread-the-needle.mp4",
      targetAreas: ["Thoracic Spine", "Shoulders", "Upper Back"],
      relatedConditions: ["Upper Back Stiffness", "Shoulder Pain", "Reduced Rotational Mobility"]
    },
    {
      id: "advanced-spine-mobility",
      name: "Advanced Spine Mobility",
      category: "mobility",
      difficulty: "advanced",
      description: "A comprehensive sequence to improve mobility throughout the entire spine.",
      image: "/images/exercises/advanced-spine-mobility.jpg",
      videoUrl: "/videos/exercises/advanced-spine-mobility.mp4",
      targetAreas: ["Entire Spine", "Core", "Hip Flexors"],
      relatedConditions: ["Spinal Stiffness", "Poor Posture", "Reduced Mobility"]
    },
    {
      id: "dead-bug",
      name: "Dead Bug",
      category: "core",
      difficulty: "intermediate",
      description: "A safe core exercise that maintains neutral spine position while challenging stability.",
      image: "/images/exercises/dead-bug.jpg",
      videoUrl: "/videos/exercises/dead-bug.mp4",
      targetAreas: ["Core", "Transverse Abdominis", "Hip Flexors"],
      relatedConditions: ["Lower Back Pain", "Core Weakness", "Lumbar Instability"]
    },
    {
      id: "dead-bug-progression",
      name: "Dead Bug Progression",
      category: "core",
      difficulty: "advanced",
      description: "An advanced version of the dead bug exercise that further challenges core stability.",
      image: "/images/exercises/dead-bug-progression.jpg",
      videoUrl: "/videos/exercises/dead-bug-progression.mp4",
      targetAreas: ["Core", "Transverse Abdominis", "Hip Flexors"],
      relatedConditions: ["Lower Back Pain", "Core Weakness", "Lumbar Instability"]
    },
    {
      id: "plank-shoulder-taps",
      name: "Plank Shoulder Taps",
      category: "core",
      difficulty: "intermediate",
      description: "Challenges core stability by adding shoulder taps to the standard plank position.",
      image: "/images/exercises/plank-shoulder-taps.jpg",
      videoUrl: "/videos/exercises/plank-shoulder-taps.mp4",
      targetAreas: ["Core", "Shoulders", "Obliques"],
      relatedConditions: ["Core Weakness", "Rotational Instability", "Poor Balance"]
    },
    {
      id: "mountain-climber",
      name: "Mountain Climber",
      category: "core",
      difficulty: "intermediate",
      description: "A dynamic exercise that strengthens the core while also providing cardiovascular benefits.",
      image: "/images/exercises/mountain-climber.jpg",
      videoUrl: "/videos/exercises/mountain-climber.mp4",
      targetAreas: ["Core", "Hip Flexors", "Shoulders"],
      relatedConditions: ["Core Weakness", "Poor Endurance", "Deconditioning"]
    },
    {
      id: "reverse-crunch",
      name: "Reverse Crunch",
      category: "core",
      difficulty: "intermediate",
      description: "Targets the lower abdominals while minimizing strain on the neck and upper back.",
      image: "/images/exercises/reverse-crunch.jpg",
      videoUrl: "/videos/exercises/reverse-crunch.mp4",
      targetAreas: ["Lower Abdominals", "Hip Flexors", "Core"],
      relatedConditions: ["Core Weakness", "Lower Back Pain", "Diastasis Recti"]
    },
    {
      id: "bridge",
      name: "Glute Bridge",
      category: "lower-back",
      difficulty: "beginner",
      description: "Strengthens the gluteal muscles and improves lumbar stability.",
      image: "/images/exercises/glute-bridge.jpg",
      videoUrl: "/videos/exercises/glute-bridge.mp4",
      targetAreas: ["Gluteal Muscles", "Lower Back", "Hamstrings"],
      relatedConditions: ["Lower Back Pain", "Gluteal Weakness", "Sacroiliac Joint Pain"]
    }
  ];
  */

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
                    <Link to="/patient-resources/assessment-tools">Take Assessment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/patient-resources/patient-dashboard">Track Your Progress</Link>
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
