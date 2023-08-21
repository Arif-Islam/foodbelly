import { pizzas } from "@/data";
import Link from "next/link";
import React from "react";

const Category = () => {
  return <div className="flex text-red-500">
    {pizzas.map((item) => <Link href={`/product/${item.id}`} className="" key={item.id}></Link>)}
  </div>;
};

export default Category;
