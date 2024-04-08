"use client";
import { ProductType } from "@/app/library/definitions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import DataTable, { TableColumn } from "react-data-table-component";
import { number } from "yup";
import ProductPage from "@/app/(admin)/dashboard/product/page";
import Product from "./Product";
export default function DataTableComponent() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  // handle view product
  const handleViewProdcut = (id: string) => {
    router.push(`/dashboard/${id}`);
  };
  type CatageoryType = {
    name: string;
    icon: string;
  };
  // handle edit product
  useEffect(() => {
    setLoading(true);
    fetch("https://sokea.online/api/products/?page=1&page_size=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const columns: TableColumn<ProductType>[] = [
    {
      name: "Name of Singer",
      selector: (row) => row.name,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img className="w-11" src={row.image} alt={row.image} />
      ),
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button
            onClick={() => {
              handleViewProdcut(row.id);
            }}
            className="text-white mx-2  bg-purple-700 p-3 rounded-2xl"
          >
            view
          </button>
          <button
            onClick={() => {
              <Product method="PATCH" product={{ ...row, image: row.image || '', price: Number(row.price), quantity: Number(row.quantity)  }} />;
              router.push(`/dashboard/edit/${row.id}`);
            }}
            className="text-white mx-2  bg-yellow-500 p-3 rounded-2xl"
          >
            Edit
          </button>
          <button
            onClick={() => {
              <Product method="PATCH" product={{ ...row, image: row.image || '', price: Number(row.price), quantity: Number(row.quantity) }} />;
              router.push(`/dashboard/edit/${row.id}`);
            }}
            className="text-white mx-2  bg-red-700 p-3 rounded-2xl"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <main className="h-screen">
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        pagination
      />
    </main>
  );
}
