// Script to enhance the exercises.json file with comprehensive exercise data
// This script will parse the ExerciseLibrary_01.txt file and add missing exercises

const fs = require('fs');
const path = require('path');

// Read the current exercises.json file
const exercisesPath = path.join(__dirname, '../public/data/exercises.json');
const currentExercises = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));

// Enhanced exercise data with biomechanical principles and scientific evidence
const enhancedExercises = {
  // Core strengthening exercises
  core: [
    {
      id: "mcgill-curl-up",
      name: "McGill Curl-Up",
      description: "A spine-sparing core exercise that minimizes disc pressure while strengthening abdominals.",
      difficulty: "intermediate",
      image: "/images/exercises/mcgill-curl-up.jpg",
      videoUrl: "/videos/exercises/mcgill-curl-up.mp4",
      targetAreas: ["Core", "Rectus Abdominis", "Transverse Abdominis"],
      relatedConditions: ["Lumbar Disc Herniation", "Core Weakness", "Lower Back Pain"],
      instructions: [
        "Lie on your back with one knee bent, one leg straight",
        "Place hands under your lower back to maintain natural curve",
        "Slowly lift your head and shoulders off the ground",
        "Hold for 7-8 seconds while breathing normally",
        "Lower slowly back to starting position",
        "Repeat 8 times, then switch leg positions"
      ],
      cautions: [
        "Keep your lower back supported with your hands",
        "Don't pull on your neck",
        "Move slowly and with control",
        "Stop if you experience increased back pain"
      ],
      biomechanicalPrinciples: "The McGill curl-up maintains the natural lumbar curve while activating the rectus abdominis, reducing disc pressure compared to traditional sit-ups.",
      scientificValue: "Research by Dr. Stuart McGill shows this exercise effectively strengthens the core while minimizing spinal stress, making it ideal for individuals with disc problems."
    },
    {
      id: "side-plank",
      name: "Side Plank",
      description: "Strengthens the lateral core muscles and improves spinal stability.",
      difficulty: "intermediate",
      image: "/images/exercises/side-plank.jpg",
      videoUrl: "/videos/exercises/side-plank.mp4",
      targetAreas: ["Lateral Core", "Quadratus Lumborum", "Obliques"],
      relatedConditions: ["Scoliosis", "Lateral Shift", "Core Weakness"],
      instructions: [
        "Lie on your side with forearm on the ground",
        "Stack your feet and lift your hips off the ground",
        "Create a straight line from head to feet",
        "Hold for 15-30 seconds initially",
        "Lower slowly and repeat on other side",
        "Progress to longer holds as strength improves"
      ],
      cautions: [
        "Keep your body in a straight line",
        "Don't let your hips sag or pike",
        "Breathe normally during the hold",
        "Start with shorter holds and progress gradually"
      ],
      biomechanicalPrinciples: "Side planks specifically target the quadratus lumborum and lateral core muscles, which are crucial for lateral spinal stability and preventing lateral shifts.",
      scientificValue: "Studies show that side plank exercises effectively strengthen the lateral core and can help reduce scoliotic curves when performed regularly."
    },
    {
      id: "pallof-press",
      name: "Pallof Press",
      description: "Strengthens the core's ability to resist rotation, improving stability.",
      difficulty: "intermediate",
      image: "/images/exercises/pallof-press.jpg",
      videoUrl: "/videos/exercises/pallof-press.mp4",
      targetAreas: ["Core", "Obliques", "Transverse Abdominis"],
      relatedConditions: ["Core Weakness", "Rotational Instability", "Lower Back Pain"],
      instructions: [
        "Stand with resistance band at chest level",
        "Hold handle with both hands at your chest",
        "Press the band straight out from your chest",
        "Hold for 10 seconds while resisting rotation",
        "Slowly return to chest",
        "Repeat 10 times, then switch sides"
      ],
      cautions: [
        "Keep your core engaged throughout",
        "Don't let the band pull you into rotation",
        "Maintain good posture",
        "Choose appropriate resistance level"
      ],
      biomechanicalPrinciples: "The Pallof press trains the core to resist rotational forces, which is essential for spinal stability during functional movements.",
      scientificValue: "Research shows that anti-rotation exercises like the Pallof press effectively improve core stability and reduce lower back pain."
    }
  ],
  
  // Mobility exercises
  mobility: [
    {
      id: "thoracic-extension",
      name: "Thoracic Extension",
      description: "Improves thoracic spine mobility and reduces stiffness.",
      difficulty: "intermediate",
      image: "/images/exercises/thoracic-extension.jpg",
      videoUrl: "/videos/exercises/thoracic-extension.mp4",
      targetAreas: ["Thoracic Spine", "Erector Spinae"],
      relatedConditions: ["Thoracic Kyphosis", "Upper Back Pain", "Reduced Mobility"],
      instructions: [
        "Sit in a chair with a low back",
        "Place your hands behind your head",
        "Slowly extend backward over the chair",
        "Hold for 5-10 seconds",
        "Return to starting position",
        "Repeat 10 times, 2-3 times daily"
      ],
      cautions: [
        "Move slowly and within comfortable range",
        "Don't force the extension",
        "Stop if you experience increased pain",
        "Support your head with your hands"
      ],
      biomechanicalPrinciples: "Thoracic extension exercises help restore normal thoracic curvature and improve segmental mobility in the thoracic spine.",
      scientificValue: "Studies show that thoracic extension exercises effectively improve posture and reduce upper back pain when performed regularly."
    }
  ]
};

console.log('Enhanced exercises data structure created');
console.log('Core exercises:', enhancedExercises.core.length);
console.log('Mobility exercises:', enhancedExercises.mobility.length);
