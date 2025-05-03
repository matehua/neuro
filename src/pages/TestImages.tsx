import React from 'react';
import SafeImage from '@/components/SafeImage';

export default function TestImages() {
  // Common image style
  const imageStyle = "max-w-full h-auto mb-5 border border-border rounded-md";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Test Images</h1>

      <h2 className="text-xl font-semibold mb-2">Image 1</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Spine+Health+Program"
        alt="Spine Health Program"
        className={imageStyle}
      />

      <h2 className="text-xl font-semibold mb-2">Image 2</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Spine+Assessment+Process"
        alt="Spine Assessment Process"
        className={imageStyle}
      />

      <h2 className="text-xl font-semibold mb-2">Image 3</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Interactive+Spine+Education"
        alt="Interactive Spine Education"
        className={imageStyle}
      />

      <h2 className="text-xl font-semibold mb-2">Image 4</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Spine+Exercise+Demonstration"
        alt="Spine Exercise Demonstration"
        className={imageStyle}
      />

      <h2 className="text-xl font-semibold mb-2">Image 5</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Spine+Health+Progress+Tracking"
        alt="Spine Health Progress Tracking"
        className={imageStyle}
      />

      <h2 className="text-xl font-semibold mb-2">Medical History</h2>
      <SafeImage
        src="https://via.placeholder.com/800x600?text=Medical+History+Assessment"
        alt="Medical History Assessment"
        className={imageStyle}
      />
    </div>
  );
}
