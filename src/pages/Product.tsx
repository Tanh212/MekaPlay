import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";
import ProductTable from "../components/ProductTable";
import type { IProduct } from "../interface/product";

const Products: React.FC = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        Đang tải dữ liệu...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-10 text-lg">
        Đã có lỗi xảy ra khi tải sản phẩm
      </p>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Danh sách sản phẩm
      </h1>
      <ProductTable products={products} />
    </div>
  );
};

export default Products;
