import React, { useState, useEffect } from "react";
import type { IProduct } from "../interface/product";

interface Props {
  product?: IProduct; // Nếu có nghĩa là edit, không thì thêm mới
  onSave: (product: Omit<IProduct, "id">) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<Props> = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price.toString() || "");

  // Nếu props product thay đổi (ví dụ khi edit), cập nhật lại state form
  useEffect(() => {
    setName(product?.name || "");
    setPrice(product?.price.toString() || "");
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Vui lòng nhập đủ tên và giá sản phẩm!");
      return;
    }
    if (isNaN(Number(price))) {
      alert("Giá phải là số hợp lệ!");
      return;
    }
    onSave({ name, price: Number(price) });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <div>
        <label>Tên sản phẩm: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên sản phẩm"
        />
      </div>
      <div>
        <label>Giá: </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Nhập giá"
        />
      </div>
      <button type="submit">{product ? "Cập nhật" : "Thêm mới"}</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: 10 }}>
        Hủy
      </button>
    </form>
  );
};

export default ProductForm;
