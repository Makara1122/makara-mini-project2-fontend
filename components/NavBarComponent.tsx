
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

import { useParams, usePathname } from 'next/navigation';

export default function NavBarComponet() {
  const path = usePathname()
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://www.flowbite-react.com/favicon.svg"  alt="Flowbite React Logo" />
        {/* <Image src="/favicon.svg" alt='Landscape picture' className="mr-3 h-6 sm:h-9"/> */}
        <span className="ml-5 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mom Makara</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" className={`${path == "/" && "text-green-500"}`}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" className={`${path == "/about" && "text-green-500" }`}>
          About Us
        </Navbar.Link>
        <Navbar.Link as={Link} href="/service" className={`${path == "/service" && "text-green-500" }`}>Services</Navbar.Link>
        
        <Navbar.Link as={Link} href="/policy" className={`${path == '/policy'} && "text-green-500"`}>Policy</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
