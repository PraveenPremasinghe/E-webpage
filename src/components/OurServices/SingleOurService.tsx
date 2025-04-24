
import Image from "next/image";

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
      className="max-w-sm h-full bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-transparent hover:border-blue-500 service-card-bg">
  <div className="relative w-full h-48">
    <img src={image} alt={title} className="object-cover w-full h-full" />
  </div>

  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

    <div className="mt-auto">
      <a
        href={link}
        className="inline-block text-sm px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 shadow"
      >
        {linkButton}
      </a>
    </div>
  </div>
</div>


  );
}
