
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkButton:string;
}

export default function ServiceCard({ image, title, description, link ,linkButton}: ServiceCardProps) {
  return (
    <div
      className='h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 max-w-sm border-amber-700'>
  <div className='relative w-full h-48 rounded-xl overflow-hidden mb-4'>
    <img src={image} alt={title} className='object-cover ' />
  </div>

  <div className='flex-grow flex flex-col justify-between'>
    <div>
      <h3 className='text-xl   font-semibold text-gray-800 dark:text-white mt-4 mb-2'>{title}</h3>
      <p className='text-gray-600   dark:text-gray-300  mb-4'>{description}</p>
    </div>

    <div className='flex justify-center mt-2'>
      <a
        href={link}
        className='inline-block text-sm px-5 py-2.5 rounded-full bg-primary text-white hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-md'
      >
        {linkButton}
      </a>
    </div>
  </div>


</div>




  );
}
