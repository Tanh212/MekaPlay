import React from "react";
import type { IProduct } from "../interface/product";

interface Props {
  product: IProduct;
  onEdit?: (product: IProduct) => void;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onEdit, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        margin: 8,
        width: 200,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()}đ</p>
      {onEdit && <button onClick={() => onEdit(product)}>Sửa</button>}
      {onDelete && (
        <button
          onClick={() => onDelete(product.id)}
          style={{ marginLeft: 8, color: "red" }}
        >
          Xóa
        </button>
      )}
    </div>
  );
};

export default ProductCard;
