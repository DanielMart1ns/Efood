import {
  CartContainer,
  DishName,
  DishPrice,
  Overlay,
  Shopping,
  SideBar,
  TotalPrice,
} from './style';
import foodTest from '../../assets/images/japanese-restaurant.png';
import remove from '../../assets/images/remove.png';
import closeBtn from '../../assets/images/close.png';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../store/cart';
import { RootReducer } from '../store';
const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.cart);

  const closeCart = () => {
    dispatch(close());
  };
  return (
    <CartContainer className={isOpen ? 'show' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <button type="button" onClick={closeCart}>
          <img src={closeBtn} alt="esconder carrinho" />
        </button>
        <ul>
          <Shopping>
            <img className="dishImage" src={foodTest} alt="" />
            <div>
              <DishName>Pizza Marguerita</DishName>
              <DishPrice>R$ 60,90</DishPrice>
            </div>
            <img className="removeIcon" src={remove} alt="remove item" />
          </Shopping>
          <Shopping>
            <img className="dishImage" src={foodTest} alt="" />
            <div>
              <DishName>Pizza Marguerita</DishName>
              <DishPrice>R$ 60,90</DishPrice>
            </div>
            <img className="removeIcon" src={remove} alt="remove item" />
          </Shopping>
        </ul>
        <TotalPrice>
          Valor total <span>R$ 182,70</span>
        </TotalPrice>
        <Button
          title="Clique para continuar com a entrega"
          size="full"
          bgColor="cream"
          type="button"
        >
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
