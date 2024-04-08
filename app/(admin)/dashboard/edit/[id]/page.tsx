import { BASE_URL } from '@/app/library/constants'
import React from 'react'
import Product from '@/components/Product';
import { date } from 'yup';

async function productData(id:number){
  const url = `https://sokea.online/api/products/${id}`;
  const data = await fetch(url).then(e=>e.json());
  return data;
}
type Props = {
  params : {
    id : number
  }
}

export default async function page({params}:Props) {
  const d = await productData(params.id)
  return (
    <div>
        <Product method="PATH" product={d}/>
    </div>
  )
}
