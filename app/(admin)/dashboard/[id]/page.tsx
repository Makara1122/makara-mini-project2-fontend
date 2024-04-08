import ProductDetailComponent from "@/components/ProductDetailComponent";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type SearchParam = {
  params: {
    id: string;
  };
  searchParams:{
    [key:string]:string | string[] |undefined
  }
};

type UrlId = {
  url: string;
  id: string;
};

const getData = async ({ url, id }: UrlId) => {
  const res = await fetch(`${url}${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata(
    { params, searchParams }: SearchParam,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
  //  const url = "https://sokea.online/api/products/?page=1&page_size="
    // fetch data
    const product = await fetch(`https://sokea.online/api/products/${id}`)
    .then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    
   
    return {
      title: product.title,
      description:product.description,
      openGraph: {
        images: product.image
      },
    }
  }

export default async function Page({ params }: SearchParam) {
  const url = "https://sokea.online/api/products/";
  const data = await getData({ url, id: params.id }); // Fix: Pass url and id as separate arguments
  return (
    <div className="grid place-content-center m-auto">
      <ProductDetailComponent  
        image={data.image}
        title={data.name}
        price={data.price}
      />
    </div>
  );

  
}
