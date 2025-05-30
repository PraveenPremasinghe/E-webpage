import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function OurJourneyTimeline() {


  const projectDetails = [
    {
      year: '2013',
      projectName: 'NBR CRM Upgrade & Cloud Migration',
      description:
        'Extended CRM system functionality, migrated web infrastructure to AWS, and integrated Smarta.com’s Business Builder.',
      image: '/images/OurJourneyTimeline/NBR-Feature.webp',
      points: [
        'Enhanced CRM to support offshore companies',
        'Migrated websites and databases to AWS',
        'Provided ongoing technical support for on-premise servers',
        'Developed Smarta.com integration web application',
        'Transitioned from Joomla to WordPress and launched Magento ecommerce sites',
      ],
    },
    {
      year: '2014',
      projectName: 'Diverse Custom Solutions',
      description:
        'Delivered job, gym, payroll, and stock dashboard systems for multiple clients across industries.',
      image: '/images/OurJourneyTimeline/others.png',
      points: [
        'Built job management system for britanniaprint.co.uk',
        'Developed gym membership system for Lifetime Fitness with diet and program tracking',
        'Researched and developed in-house OpenERP-based payroll system',
        'Created real-time stock dashboard for Colombo Stock Exchange',
      ],
    },
    {
      year: '2015',
      projectName: 'Ikman.lk Technology Partnership',
      description:
        'Implemented SMS voucher system, Xero integration, and long-term development agreement with Ikman.lk.',
      image: '/images/OurJourneyTimeline/ikman.webp',
      points: [
        'Built SMS-based voucher selling platform',
        'Integrated Ikman.lk’s backend with Xero accounting software',
        'Developed SellFast system to streamline sales processes',
        'Signed continuous development agreement with Ikman.lk',
      ],
    },
    {
      year: '2016',
      projectName: 'Enterprise Solutions for Ikman.lk',
      description:
        'Developed HR and rider apps, transitioned to Java backend, and migrated hosting to Microsoft Azure.',
      image: '/images/OurJourneyTimeline/ikman.webp',
      points: [
        'Launched HR system for Ikman.lk, Bikroy, and Tonaton',
        'Created Android rider app for logistics team',
        'Transitioned backend services from PHP to Java',
        'Recovered systems post-failure and migrated to Microsoft Azure',
      ],
    },
    {
      year: '2017',
      projectName: 'Advanced Integrations & Public Services',
      description:
        'Integrated CRM and accounting, enhanced support tools, and developed public sector mobile prototypes.',
      image: '/images/OurJourneyTimeline/ikman.webp',
      points: [
        'Integrated TAS Books with CRM for automation',
        'Enabled Zendesk and payment gateway integration for Ikman.lk',
        'Added GEO location and clock-in to sales team tools',
        'Developed mobile app prototype for public transport rule enforcement',
      ],
    },
    {
      year: '2018',
      projectName: 'ERP and SaaS Product Development',
      description:
        'Initiated ERP platform development, launched SaaS HR system, and ensured GDPR compliance.',
      image: '/images/OurJourneyTimeline/edhiryaerp.png',
      points: [
        'Started building Edhirya ERP (formerly eBoss)',
        'Upgraded NBR systems to meet GDPR standards',
        'Launched Beautech SaaS solution',
        'Developed cloud-based HR platform: CloudHR.lk',
      ],
    },
    {
      year: '2019',
      projectName: 'Product Launches and Microsoft Partnership',
      description:
        'Achieved Microsoft partnership and released major platforms including DentalPro and vehicle management system.',
      image: '/images/OurJourneyTimeline/dentalpro.png',
      points: [
        'Became a Microsoft Partner',
        'Developed and deployed Sixth Gear vehicle maintenance system',
        'Successfully launched DentalPro App to the public',
      ],
    },
    {
      year: '2020',
      projectName: 'Digital Transformation and National eVoting',
      description:
        'Modernized legacy CRM for NBR, delivered ERP & POS for GonutswithDonuts, and built nationwide eVoting platform.',
      image: '/images/OurJourneyTimeline/NBR-Feature.webp',
      points: [
        'Upgraded NBR CRM to a paperless system approved by Natwest Bank',
        'Built ERP and POS platform with distributor and BOM management for GonutswithDonuts',
        'Developed and operated eVoting system for NYSC across the country',
      ],
    },

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
