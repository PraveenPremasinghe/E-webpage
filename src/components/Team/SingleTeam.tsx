'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PositionStyle {
  top: string;
  left: string;
  width: string;
  height: string;
}

const imageSources = [
  '/images/team/akalanka.jpeg',
  '/images/team/hirusha.jpeg',
  '/images/team/yshoda.jpeg',
  '/images/team/pasindu.jpeg',
  '/images/team/ranjula.JPG',
  '/images/team/janith.jpeg',
  '/images/team/rashitha.jpeg',
  '/images/team/hashan.png',
  '/images/team/isira.png',
  '/images/team/nimila.jpeg',


];

const fixedPositions: PositionStyle[] = [
  { top: '5%', left: '20%', width: '140px', height: '140px' },
  { top: '10%', left: '70%', width: '120px', height: '120px' },
  { top: '30%', left: '5%', width: '130px', height: '130px' },
  { top: '30%', left: '85%', width: '115px', height: '115px' },
  { top: '60%', left: '10%', width: '125px', height: '125px' },
  { top: '60%', left: '80%', width: '135px', height: '135px' },
  { top: '75%', left: '25%', width: '110px', height: '110px' },
  { top: '75%', left: '65%', width: '145px', height: '145px' },
  { top: '85%', left: '45%', width: '120px', height: '120px' },
  { top: '90%', left: '10%', width: '150px', height: '150px' },
];

export default function TeamShowcase() {
  return (
    <div className='relative w-full h-[700px] bg-zinc-50 overflow-hidden p-28' >
      {/* Positioned Images */}
      {imageSources.map((src, i) => (
        <div
          key={i}
          className='absolute rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-110'
          style={fixedPositions[i]}
        >
          <Image
            src={src}
            alt={`Team member ${i + 1}`}
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>
      ))}

      {/* Center Text Block */}
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-2xl px-4'>
  <h2 className='text-3xl font-semibold leading-snug'>
    United by passion, driven by purpose—where innovation thrives through collaboration.
  </h2>
  <div className='mt-6 text-4xl font-bold'>
    50+<br />
    <span className='text-lg font-medium'>brilliant minds shaping one vision</span>
  </div>
</div>

    </div>
  );
}
