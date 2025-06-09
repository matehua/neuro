import React, { useEffect, useState } from 'react';

interface Exercise {
  name: string;
  difficulty: string;
}

interface Category {
  name: string;
  exercises: Exercise[];
}

interface ExerciseData {
  categories: Category[];
}

export default function TestExercises() {
  const [data, setData] = useState<ExerciseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/data/exercises.json?t=${Date.now()}`, {
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Loaded data:', data);
        console.log('Categories count:', data.categories?.length);
        console.log('Total exercises:', data.categories?.reduce((total: number, cat: Category) => total + cat.exercises.length, 0));
        setData(data);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const totalExercises = data.categories.reduce((total: number, cat: Category) => total + cat.exercises.length, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Exercise Data Test</h1>
      <p>Categories: {data.categories.length}</p>
      <p>Total Exercises: {totalExercises}</p>
      
      <h2>Categories:</h2>
      {data.categories.map((cat: Category, i: number) => (
        <div key={i} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>{cat.name} ({cat.exercises.length} exercises)</h3>
          <ul>
            {cat.exercises.map((ex: Exercise, j: number) => (
              <li key={j}>{ex.name} - {ex.difficulty}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
