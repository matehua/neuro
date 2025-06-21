import fs from 'fs';

/**
 * Find all duplicate exercise IDs in the exercises.json file
 */
function findAllDuplicateExerciseIds() {
  try {
    const exercisesPath = './public/data/exercises.json';
    const content = fs.readFileSync(exercisesPath, 'utf8');
    const data = JSON.parse(content);
    
    const allIds = [];
    const duplicates = [];
    const idCounts = {};
    
    // Collect all exercise IDs
    data.categories.forEach(category => {
      category.exercises.forEach(exercise => {
        allIds.push(exercise.id);
        idCounts[exercise.id] = (idCounts[exercise.id] || 0) + 1;
      });
    });
    
    // Find duplicates
    Object.entries(idCounts).forEach(([id, count]) => {
      if (count > 1) {
        duplicates.push({ id, count });
      }
    });
    
    console.log('🔍 DUPLICATE EXERCISE ID ANALYSIS');
    console.log('='.repeat(50));
    console.log(`Total exercises: ${allIds.length}`);
    console.log(`Unique IDs: ${Object.keys(idCounts).length}`);
    console.log(`Duplicate IDs found: ${duplicates.length}`);
    console.log();
    
    if (duplicates.length > 0) {
      console.log('❌ DUPLICATE IDs FOUND:');
      duplicates.forEach(duplicate => {
        console.log(`   "${duplicate.id}" appears ${duplicate.count} times`);
      });
      console.log();
      
      console.log('🔧 LOCATIONS OF DUPLICATES:');
      duplicates.forEach(duplicate => {
        console.log(`\n📍 "${duplicate.id}":`);
        data.categories.forEach((category, catIndex) => {
          category.exercises.forEach((exercise, exIndex) => {
            if (exercise.id === duplicate.id) {
              console.log(`   Category: ${category.name} (index ${catIndex})`);
              console.log(`   Exercise: ${exercise.name} (index ${exIndex})`);
            }
          });
        });
      });
    } else {
      console.log('✅ NO DUPLICATE IDs FOUND!');
      console.log('All exercise IDs are unique.');
    }
    
    return duplicates;
    
  } catch (error) {
    console.error('Error reading exercises.json:', error.message);
    return [];
  }
}

// Run the analysis
const duplicates = findAllDuplicateExerciseIds();

if (duplicates.length > 0) {
  console.log('\n⚠️  ACTION REQUIRED:');
  console.log('Fix these duplicate IDs by making them unique.');
  console.log('Suggested approach: Add category suffix to duplicates.');
  process.exit(1);
} else {
  console.log('\n🎉 SUCCESS:');
  console.log('All exercise IDs are unique. No duplicates found!');
  process.exit(0);
}
