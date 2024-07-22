import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';

import { addItem, openCart } from '../store/cart';
import { formatCurrency, getDescription } from '../../utils';

import btnClose from '../../assets/images/close.png';

import * as S from './style';

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
  const displayCart = () => {
    setModal(false);
    dispatch(openCart());
  };

  const addToCart = () => {
    dispatch(addItem(dishData));
    displayCart();
  };

  return (
    <>
      <S.DishCard>
        <img src={picture} alt={name} />
        <S.DishName>{name}</S.DishName>
        <S.DishDescription>
          {getDescription(description, 'dish')}
        </S.DishDescription>
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
      </S.DishCard>
      <S.Modal className={modal ? 'show' : ''}>
        <S.ModalContent>
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
            <S.DishDescription>{description}</S.DishDescription>
            <p>Serve de {portion}</p>
            <S.BtnAdd onClick={addToCart}>
              Adicionar ao carrinho - R$ {formatCurrency(price)}
            </S.BtnAdd>
          </div>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal(false);
          }}
        ></div>
      </S.Modal>
    </>
  );
};

export default Dishes;
