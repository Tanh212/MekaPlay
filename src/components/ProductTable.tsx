import React from "react";
import type { IProduct } from "../interface/product";

interface ProductTableProps {
  products: IProduct[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Tên</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Giá</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="hover:bg-indigo-50 even:bg-gray-50 odd:bg-white transition-colors"
            >
              <td className="border border-gray-300 px-4 py-2">{p.id}</td>
              <td className="border border-gray-300 px-4 py-2">{p.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-indigo-700 font-semibold">
                {p.price.toLocaleString("vi-VN")}đ
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="border border-gray-300 px-4 py-4 text-center text-gray-500"
              >
                Không có sản phẩm nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
