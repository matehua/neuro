import React from 'react';
import StandardPageLayout from '@/components/StandardPageLayout';

const TestImages: React.FC = () => {
  return (
    <StandardPageLayout title="Test Images" showHeader={false}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Test Images Page</h1>
        <p>This is a test page for images.</p>
      </div>
    </StandardPageLayout>
  );
TestImages.displayName = 'TestImages';

}
export default TestImages;

TestImages.displayName = 'TestImages';
