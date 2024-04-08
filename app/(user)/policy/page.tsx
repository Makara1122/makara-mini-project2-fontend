import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: "You are must respect our policy, It is the roles that everyone must follow",
    description: "We has our duty to make everyone of you become the good student",
    openGraph: {
        images : "https://th.bing.com/th/id/OIP.TYTuUz0PiOnLg6cXg4MAnAHaHa?rs=1&pid=ImgDetMain"
    }
     
}

export default function page() {
  return (
    <div className='grid place-content-center text text-green-500'>
     <h1 className='text-center tracking-wide  text-6xl'>Private Policy</h1>
     <p className='mx-96'>Khmer24 Free Classifieds strives to offer its visitors the many advantages of internet technology and to provide an interactive and personalized experience. We may use Personally Identifiable Information (your name, e-mail address, street address, telephone number) subject to the terms of this privacy policy. We will never sell, barter, or rent your email address to any unauthorized third party.</p>
     <p className='mx-96'>We recognizes the importance of protecting your privacy and our policy is designed to assist you in understanding how we collect, use and safeguard the personal information you provide to us and to assist you in making informed decisions when using our site. This policy will be continuously assessed against new technologies, business practices and our customers needs.</p>
    </div>
  )
}
