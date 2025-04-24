import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function OurJourneyTimeline() {


  const projectDetails = [
    {
      year: '2010',
      projectName: 'NBR (National Business Register UK)',
      description:
        'Migrated over 1 million records from legacy FoxPro systems to a unified .NET and Microsoft SQL system.',
      image: '/images/OurJourneyTimeline/nbr.png',
      points: [
        'Data cleansing, normalization, and address field standardization',
        'Mapped customer subscriptions and product codes',
        'Integrated multiple legacy systems into one unified platform',
        'Developed and maintained client websites using Joomla',
      ],
    },
    {
      year: '2011',
      projectName: 'NBR Domain Migration',
      description:
        'Transferred domains and hosting infrastructure directly to Nominet and OpenSRS, eliminating reliance on resellers.',
      image: '/images/OurJourneyTimeline/nbr.png',
      points: [
        'Saved significant costs by bypassing third-party resellers',
        'Transferred over 1000 customer mailboxes',
        'Automated DNS and web hosting transfers using custom scripting',
      ],
    },
    {
      year: '2012',
      projectName: 'NBR IT Support Outsourcing',
      description:
        'Full IT customer service operations outsourced to Edhirya IT, supporting 1000+ NBR clients across domains, hosting, and email.',
      image: '/images/OurJourneyTimeline/nbr.png',
      points: [
        'Provided phone, remote, and email IT support to NBR clients',
        'Maintained bespoke CRM and delivered custom CRM module enhancements',
        'Integrated automated domain registration via Nominet and OpenSRS using HTTPS/XML APIs',
      ],
    },
    // Continue for 2013–2017 similarly...
  ];


  const timelineData = projectDetails.map((item) => ({
    productName: item.projectName,
    title: item.year,
    content: (
      <div>
        <h3 className='mb-4 text-xl font-normal text-neutral-800 dark:text-neutral-200'>
          {item.description}
        </h3>
        {item.points && (
          <ul className='list-disc ml-5 text-md text-neutral-700 dark:text-neutral-300 mb-4 space-y-1'>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        {item.image && (
          <img
            src={item.image}
            alt={item.projectName}
            className='rounded-lg w-full max-w-md h-auto object-cover shadow'
          />
        )}
      </div>
    ),
  }));
  return (
    <div className='relative w-full overflow-clip'>
    <Timeline data={timelineData} />

    </div>



  );
}
