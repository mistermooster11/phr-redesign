'use client';

import Image from 'next/image';
import SecondaryButton from '@/components/custom/buttons/SecondaryButton';

interface AccordionStep { label: string; body: string; }

interface InsightAccordionDataItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    energyStarLogo?: string;
    learnHref: string;
    steps: AccordionStep[];
  };
  isOpen: boolean;
}

const InsightAccordionDataItem: React.FC<InsightAccordionDataItemProps> = ({
  item,
  isOpen,
}) => {
  return (
    <div
      key={item.id}
      className={`accordion-data${isOpen ? ' opened' : ''}`}
      data-detect={item.id}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="accordion-image">
        <div
          className="vape-img"
          style={{
            background: `url(${item.image}) no-repeat 50% 50% / cover`,
          }}
        />
      </div>
      <div className="accordion-info" style={{ paddingTop: '0.5rem' }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#000000',
          }}
        >
          How We Handle It
        </p>

        {item.steps.map((step, i) => (
          <p
            key={i}
            className="p3"
            style={{
              marginBottom: '1.2rem',
              color: '#000000',
              lineHeight: 1.6,
            }}
          >
            <strong>Step {i + 1} — {step.label}.</strong> {step.body}
          </p>
        ))}

        <div style={{ marginTop: '2rem' }}>
          <SecondaryButton label="Contact Now" href="/contact-us" />
        </div>

        {item.energyStarLogo && (
          <div style={{ marginTop: '1.5rem' }}>
            <Image
              src={item.energyStarLogo}
              alt="ENERGY STAR® Certified Windows"
              width={120}
              height={120}
              className="object-contain"
              style={{ maxHeight: '72px', width: 'auto' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightAccordionDataItem;
