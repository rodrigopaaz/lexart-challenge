import React from "react";
import "../styles/card.css";

export default function ItemCard({ product }) {
  console.log(product);
  return (
    <div className="div__item__card">
      <img src={product.imageUrl} alt="productImage" />
      <div>
        <p className="product__title">
          {product.siteId === 1 ? "Mercado Livre" : "Buscapé"}
        </p>
        <div>
          <p>{product.title}</p>
          <p>{`R$${product.price}`}</p>
        </div>
      </div>
      <a
        className="link"
        target="_blank"
        rel={"pro noreferrer"}
        href={product.linkUrl}
      >
        Ir a web
      </a>
    </div>
  );
}
