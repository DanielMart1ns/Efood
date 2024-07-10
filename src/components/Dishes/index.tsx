import { useState } from 'react';
import btnClose from '../../assets/images/close.png';
import {
  BtnAdd,
  DishCard,
  DishDescription,
  DishName,
  Modal,
  ModalContent,
} from './style';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addItem, open } from '../store/cart';

export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

type Props = {
  picture: string;
  price: number;
  id: number;
  name: string;
  description: string;
  portion: string;
};

const Dishes = ({ picture, price, name, description, portion, id }: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  const dishData = {
    picture,
    name,
    price,
    id,
  };

  const dispatch = useDispatch();
  const openCart = () => {
    setModal(false);
    dispatch(open());
  };

  const addToCart = () => {
    dispatch(addItem(dishData));
    openCart();
  };
  return (
    <>
      <DishCard>
        <img src={picture} alt={name} />
        <DishName>{name}</DishName>
        <DishDescription>{description}</DishDescription>
        <Button
          title="Mais detalhes"
          size="full"
          bgColor="cream"
          type="button"
          onClick={() => {
            setModal(true);
          }}
        >
          Mais detalhes
        </Button>
      </DishCard>
      <Modal className={modal ? 'show' : ''}>
        <ModalContent>
          <button className="btnClose" type="button">
            <img
              src={btnClose}
              alt="Botão fechar"
              onClick={() => {
                setModal(false);
              }}
            />
          </button>
          <img
            className="dishPicture"
            src={picture}
            alt={`foto do prato ${name}`}
          />
          <div>
            <h3>{name}</h3>
            <DishDescription>{description}</DishDescription>
            <p>Serve de {portion}</p>
            <BtnAdd onClick={addToCart}>
              Adicionar ao carrinho - R$ {formatCurrency(price)}
            </BtnAdd>
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
