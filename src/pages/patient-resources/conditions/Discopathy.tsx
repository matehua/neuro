import React, { useEffect } from 'react';

import ConditionHero from '@/components/medical-conditions/ConditionHero';
import ConditionOverview from '@/components/medical-conditions/ConditionOverview';
import DegenerationProcess from '@/components/medical-conditions/DegenerationProcess';
import StandardPageLayout from '@/components/StandardPageLayout';
import { discopathyData } from '@/data/conditions/discopathy';

/**
 * Discopathy Page Component
 * Refactored to use modular components and data-driven approach
 */

const Discopathy: React.FC = React.memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { info, quickFacts, degenerationStages, anatomicalComponents, structuralChanges } = discopathyData;

  return (
    <StandardPageLayout
      title="Discopathy (Degenerative Disc Disease) - Comprehensive Guide"
      showHeader={false}
    >
      <main className="flex-1 pt-20">
        <ConditionHero
          title={info.name}
          description={info.description}
          backgroundImage="/images/spine-conditions/degenerative-disc-disease.jpg"
          quickFacts={quickFacts}
        />

        <ConditionOverview
          title="What is Discopathy?"
          description={[
            "Discopathy, also known as degenerative disc disease (DDD), is a condition where the intervertebral discs in the spine gradually deteriorate over time. Despite its name, it's not actually a disease but rather a natural aging process that affects the spine.",
            "The intervertebral discs act as shock absorbers between the vertebrae. As we age, these discs lose water content, become less flexible, and may develop tears or cracks. This can lead to pain, stiffness, and reduced mobility in the affected spinal region."
          ]}
          keyPoints={[
            "Progressive condition affecting disc structure and function",
            "Can affect any level of the spine but most common in lumbar and cervical regions",
            "Often asymptomatic but may cause significant pain and disability"
          ]}
          image="/images/spine-conditions/degenerative-disc-disease.jpg"
        />

        {degenerationStages && anatomicalComponents && structuralChanges && (
          <DegenerationProcess
            stages={degenerationStages}
            anatomicalComponents={anatomicalComponents}
            structuralChanges={structuralChanges}
          />
        )}

        {/* Additional sections would be added here using other modular components */}
      </main>
    </StandardPageLayout>
  );
});

Discopathy.displayName = 'Discopathy';

export default Discopathy;
