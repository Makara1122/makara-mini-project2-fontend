'use client'

import DataTableComponent from '@/components/DataTableComponent'
import React from 'react'
import "@/app/globals.css"
import { Button } from "flowbite-react";
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const handleClick = () =>{
    router.push("/dashboard/product")
  }
  return (
    <div className=" h-screen">
      <div className='grid place-content-center w-full mt-1'>
         <Button onClick={handleClick} >Create Product</Button>
      </div>
       
      <DataTableComponent/>
    
    </div>
  )
}
