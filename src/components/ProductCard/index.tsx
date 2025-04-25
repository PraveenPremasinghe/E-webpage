import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {

  const productData = [
    {
      id: 1,
      logo: {
        text: "P",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600",
      },
      name: "Product Name",
      subtitle: "Product Subtitle",
      description:
        "Product description goes here, explaining the main features and benefits.",
      technologies: [
        { name: "GitHub", image: "/api/placeholder/40/40" },
        { name: "VS Code", image: "/api/placeholder/40/40" },
        { name: "React", image: "/api/placeholder/40/40" },
        { name: "Node", image: "/api/placeholder/40/40" },
        { name: "AWS", image: "/api/placeholder/40/40" },
      ],
      buttonText: "View Product",
    },
  ];

  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-6  transition-shadow hover:shadow-md dark:border-gray-600 dark:bg-gray-700">
        <div className="space-y-6">
      {productData.map((product:any) => (
        <div
          key={product.id}

        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-5">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center ${product.logo.bgColor}`}
            >
              <div className={`text-3xl font-bold ${product.logo.textColor}`}>
                {product.logo.text}
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                {product.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {product.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-5 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-5 pb-3 pt-3 border-y border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap justify-between gap-2">
              {product.technologies.map((tech:any, index:any) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700"
                  title={tech.name}
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end items-center">
            <button className="border border-gray-300 dark:border-gray-500 px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-1 transition-colors">
              {product.buttonText} <ExternalLink size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
