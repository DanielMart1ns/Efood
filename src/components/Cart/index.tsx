import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import { Overlay, SideBar } from '../../styles';

import { formatCurrency, getTotalPrice } from '../../utils';

import { RootReducer } from '../store';
import { closeCart, removeItem } from '../store/cart';
import { openCheckoutForm } from '../store/checkoutForm';

import remove from '../../assets/images/remove.png';
import closeBtn from '../../assets/images/close.png';

import * as S from './style';
const Cart = () => {
  const dispatch = useDispatch();
  const { cartIsOpen, items } = useSelector((state: RootReducer) => state.cart);

  const hideCart = () => {
    dispatch(closeCart());
  };

  const openForm = () => {
    dispatch(closeCart());
    dispatch(openCheckoutForm());
  };

  const removeCartItem = (itemSelected: number) => {
    dispatch(removeItem(itemSelected));
  };

  return (
    <S.CartContainer className={cartIsOpen ? 'show' : ''}>
      <Overlay onClick={hideCart} />
      <SideBar>
        <button className="hiddenCartIcon" type="button" onClick={hideCart}>
          <img src={closeBtn} alt="esconder carrinho" />
        </button>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.Shopping key={item.id}>
                  <img
                    className="dishImage"
                    src={item.picture}
                    alt={item.name}
                  />
                  <div>
                    <S.DishName>{item.name}</S.DishName>
                    <S.DishPrice>{formatCurrency(item.price)}</S.DishPrice>
                  </div>
                  <button
                    className="removeItemIcon"
                    type="button"
                    onClick={() => {
                      removeCartItem(item.id);
                    }}
                  >
                    <img
                      className="removeIcon"
                      src={remove}
                      alt="remove item"
                    />
                  </button>
                </S.Shopping>
              ))}
            </ul>
            <S.TotalPrice>
              Valor total <span>{formatCurrency(getTotalPrice(items))}</span>
            </S.TotalPrice>
            <Button
              title="Clique para continuar com a entrega"
              size="full"
              bgColor="cream"
              type="button"
              onClick={() => {
                openForm();
              }}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <S.EmptyState>Nenhum item adicionado</S.EmptyState>
        )}
      </SideBar>
    </S.CartContainer>
  );
};

export default Cart;
