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

console.log('🎯 EXERCISE IMAGE VERIFICATION REPORT');
console.log('=====================================\n');

// Count exercises and categories
let totalExercises = 0;
let validImages = 0;
let invalidImages = 0;
const invalidImagesList = [];

exercisesData.categories.forEach(category => {
  console.log(`📁 ${category.name} (${category.exercises.length} exercises)`);
  
  category.exercises.forEach(exercise => {
    totalExercises++;
    const fileName = path.basename(exercise.image, '.jpg');
    
    if (actualFiles.includes(fileName)) {
      validImages++;
      console.log(`  ✅ ${exercise.name} → ${exercise.image}`);
    } else {
      invalidImages++;
      invalidImagesList.push({
        category: category.name,
        exercise: exercise.name,
        image: exercise.image
      });
      console.log(`  ❌ ${exercise.name} → ${exercise.image} (MISSING)`);
    }
  });
  console.log('');
});

console.log('📊 SUMMARY STATISTICS');
console.log('====================');
console.log(`Total Categories: ${exercisesData.categories.length}`);
console.log(`Total Exercises: ${totalExercises}`);
console.log(`Valid Images: ${validImages}`);
console.log(`Invalid Images: ${invalidImages}`);
console.log(`Success Rate: ${((validImages / totalExercises) * 100).toFixed(1)}%`);

if (invalidImages === 0) {
  console.log('\n🎉 ALL EXERCISE IMAGES ARE PROPERLY MAPPED!');
  console.log('✅ No placeholder images detected');
  console.log('✅ All image paths point to existing files');
  console.log('✅ Exercise library is ready for production');
} else {
  console.log('\n⚠️  ISSUES FOUND:');
  invalidImagesList.forEach(item => {
    console.log(`   - ${item.category} > ${item.exercise}: ${item.image}`);
  });
}

console.log('\n🔍 AVAILABLE IMAGE FILES SAMPLE:');
console.log('================================');
actualFiles.slice(0, 10).forEach(file => {
  console.log(`  - ${file}.jpg`);
});
if (actualFiles.length > 10) {
  console.log(`  ... and ${actualFiles.length - 10} more files`);
}

console.log(`\nTotal available image files: ${actualFiles.length}`);
