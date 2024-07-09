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
import { open } from '../store/cart';

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

  const dispatch = useDispatch();
  const openCart = () => {
    setModal(false);
    dispatch(open());
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
        <ModalContent className="container">
          <button>
            <img
              className="btnClose"
              src={btnClose}
              alt="Botão fechar"
              onClick={() => {
                setModal(false);
              }}
            />
          </button>
          <img
            className="dishName"
            src={picture}
            alt={`foto do prato ${name}`}
          />
          <div>
            <h3>{name}</h3>
            <DishDescription>{description}</DishDescription>
            <p>Serve de {portion}</p>
            <BtnAdd onClick={openCart}>
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
