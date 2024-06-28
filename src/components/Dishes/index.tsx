import { useState } from 'react';
import btnClose from '../../assets/images/close.png';
import {
  BtnAdd,
  BtnDetails,
  DishCard,
  DishDescription,
  DishName,
  Modal,
  ModalContent,
} from './style';

type Props = {
  picture: string;
  price: number;
  // id: number;
  name: string;
  description: string;
  portion: string;
};

const Dishes = ({ picture, price, name, description, portion }: Props) => {
  const [modal, setModal] = useState<boolean>(false);

  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };
  return (
    <>
      <DishCard>
        <img src={picture} alt={name} />
        <DishName>{name}</DishName>
        <DishDescription>{description}</DishDescription>
        <BtnDetails
          onClick={() => {
            setModal(true);
          }}
        >
          Mais detalhes
        </BtnDetails>
      </DishCard>
      <Modal className={modal ? 'show' : ''}>
        <ModalContent className="container">
          <img
            className="btnClose"
            src={btnClose}
            alt="Botão fechar"
            onClick={() => {
              setModal(false);
            }}
          />
          <img
            className="dishName"
            src={picture}
            alt={`foto do prato ${name}`}
          />
          <div>
            <h3>{name}</h3>
            <DishDescription>{description}</DishDescription>
            <p>Serve de {portion}</p>
            <BtnAdd>Adicionar ao carrinho - R$ {formatCurrency(price)}</BtnAdd>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal(false);
          }}
        ></div>
      </Modal>
    </>
  );
};

export default Dishes;
