import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the exercises.json file
const exercisesPath = path.join(__dirname, '../public/data/exercises.json');
const exercisesData = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));

// Get list of actual exercise image files
const exerciseImagesDir = path.join(__dirname, '../public/images/exercises');
const actualFiles = fs.readdirSync(exerciseImagesDir)
  .filter(file => file.endsWith('.jpg'))
  .map(file => file.replace('.jpg', ''));

console.log('Available exercise image files:');
actualFiles.forEach(file => console.log(`  - ${file}.jpg`));
console.log(`\nTotal available files: ${actualFiles.length}\n`);

// Function to find best matching file for an exercise
function findBestMatch(exerciseName, exerciseId, currentImagePath) {
  const currentFileName = path.basename(currentImagePath, '.jpg');
  
  // If current file exists, keep it
  if (actualFiles.includes(currentFileName)) {
    return currentImagePath;
  }
  
  // Try to find a match based on exercise ID or name
  const searchTerms = [
    exerciseId,
    exerciseName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    exerciseName.toLowerCase().replace(/[^a-z0-9]/g, ''),
    exerciseName.toLowerCase().replace(/\s+/g, '-'),
    exerciseName.toLowerCase().replace(/\s+/g, '')
  ];
  
  for (const term of searchTerms) {
    // Exact match
    if (actualFiles.includes(term)) {
      return `/images/exercises/${term}.jpg`;
    }
    
    // Partial match
    const partialMatch = actualFiles.find(file => 
      file.includes(term) || term.includes(file)
    );
    if (partialMatch) {
      return `/images/exercises/${partialMatch}.jpg`;
    }
  }
  
  // Special cases for common exercise names
  const specialMappings = {
    'postural-awareness': 'postural-awareness-spine',
    'glute-bridges': 'glute-bridge-exercise',
    'clamshells': 'clam-shell-exercise',
    'wall-stand': 'wall-slides', // if wall-stand doesn't exist
    'superman': 'superman', // should exist
    'bird-dog': 'bird-dog',
    'dead-bug': 'dead-bug',
    'plank': 'plank',
    'side-plank': 'side-plank'
  };
  
  if (specialMappings[exerciseId] && actualFiles.includes(specialMappings[exerciseId])) {
    return `/images/exercises/${specialMappings[exerciseId]}.jpg`;
  }
  
  // Return original if no match found
  return currentImagePath;
}

// Track changes
let changesCount = 0;
const changes = [];

// Process all exercises
exercisesData.categories.forEach(category => {
  category.exercises.forEach(exercise => {
    const originalPath = exercise.image;
    const newPath = findBestMatch(exercise.name, exercise.id, originalPath);
    
    if (originalPath !== newPath) {
      changes.push({
        exercise: exercise.name,
        id: exercise.id,
        category: category.name,
        from: originalPath,
        to: newPath
      });
      exercise.image = newPath;
      changesCount++;
    }
  });
});

// Display changes
if (changes.length > 0) {
  console.log('Image path corrections:');
  changes.forEach(change => {
    console.log(`\n${change.category} > ${change.exercise}`);
    console.log(`  FROM: ${change.from}`);
    console.log(`  TO:   ${change.to}`);
  });
  
  // Write updated file
  fs.writeFileSync(exercisesPath, JSON.stringify(exercisesData, null, 2));
  console.log(`\n✅ Updated ${changesCount} exercise image paths in exercises.json`);
} else {
  console.log('✅ All exercise image paths are already correct!');
}

// Check for missing images
console.log('\nChecking for missing image files...');
const missingImages = [];
exercisesData.categories.forEach(category => {
  category.exercises.forEach(exercise => {
    const fileName = path.basename(exercise.image, '.jpg');
    if (!actualFiles.includes(fileName)) {
      missingImages.push({
        exercise: exercise.name,
        category: category.name,
        image: exercise.image
      });
    }
  });
});

if (missingImages.length > 0) {
  console.log('\n⚠️  Missing image files:');
  missingImages.forEach(missing => {
    console.log(`  - ${missing.category} > ${missing.exercise}: ${missing.image}`);
  });
} else {
  console.log('✅ All exercise images are available!');
}
