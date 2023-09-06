import React from 'react';
import { Item } from './style';
import { BsWhatsapp } from 'react-icons/bs';

const ItemProduct = ({ product }) => {
  const { name, tipo, seller } = product;
  const texto = encodeURIComponent(
    `Olá, gostaria de comprar o produto ${name}.`,
  );

  return (
    <Item tipo={tipo.toLowerCase()}>
      <span className="background-image"></span>
      <img
        src="https://i.pinimg.com/originals/5d/d9/f7/5dd9f7c0a69e78617d46d5311d022876.png"
        alt=""
      />
      <h1 className="title">{name}</h1>
      <span className="type">{tipo}</span>
      <p>{seller.name}</p>
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?55${seller.cell}&text=${texto}`}
        className="contact">
        <BsWhatsapp size={20} />
        <p>Entrar em contato</p>
      </a>
    </Item>
  );
};

export default ItemProduct;
