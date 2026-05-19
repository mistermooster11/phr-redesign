'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">A Straight Deal from Start to Finish</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://www.phr-ny.com/images/kitchen_carousel_1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000000',
                }}
              />
              {/* [TODO: Replace with a Professional Home Remodeling project photo — kitchen, bathroom, or exterior] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every project starts with a free estimate — no pressure, no obligation.
                You&apos;ll deal directly with the owner, get a clear price up front,
                and know exactly what to expect before we break ground. That&apos;s been
                our approach for over 40 years, and it&apos;s why our business runs on
                referrals.
              </p>
              <p>
                <strong>Step 1: Free Estimate.</strong> We visit the job site, assess
                the scope, and give you a detailed written estimate at no charge.
              </p>
              <p>
                <strong>Step 2: Approve &amp; Schedule.</strong> Once you&apos;re
                comfortable with the plan and price, we lock in your start date.
                No surprises from contract to completion.
              </p>
              <p>
                <strong>Step 3: Complete &amp; Clean Up.</strong> Our crew handles
                the work from start to finish, removes all debris, and doesn&apos;t
                consider the job done until you&apos;re satisfied.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Get a Free Estimate"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
