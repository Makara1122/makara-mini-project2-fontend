
import { Card } from 'flowbite-react';

export default function ProductDetailComponent({image, title, price}: {image: string, title: string, price: number}) {
  return (
    <Card className="max-w-sm grid place-content-center"renderImage={() => (
      <img
        src={image}
        alt="Apple Watch Series 7 in colors pink, silver, and black"
        className="object-contain overflow-hidden w-[380px] h-[300px] "
      />
    )} horizontal>
      <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {price}
      </p>
    </Card>
  );
}
