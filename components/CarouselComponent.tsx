
'use client';

import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
  return (
    <div className="h-56 mx-52 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://i.pinimg.com/564x/4c/42/21/4c42218fdbbd6180d889982e1bb0c442.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/54/99/5e/54995e2f71c1ef6ec5503703ca78f5e2.jpg" alt="..." />
        <img src="https://i.pinimg.com/564x/df/54/e1/df54e1c7a6788dfa6a270d9526299509.jpg" alt="..." />
        <img src="https://i.pinimg.com/236x/07/da/04/07da0413c2128af0ac9347db42f30953.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
