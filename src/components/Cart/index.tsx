import {
  CartContainer,
  DishName,
  DishPrice,
  EmptyState,
  Shopping,
  TotalPrice,
} from './style';
import remove from '../../assets/images/remove.png';
import closeBtn from '../../assets/images/close.png';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, removeItem } from '../store/cart';
import { openCheckoutForm } from '../store/checkoutForm';
import { RootReducer } from '../store';
import { Overlay, SideBar } from '../../styles';
import { formatCurrency, getTotalPrice } from '../../utils';
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
    <CartContainer className={cartIsOpen ? 'show' : ''}>
      <Overlay onClick={hideCart} />
      <SideBar>
        <button className="hiddenCartIcon" type="button" onClick={hideCart}>
          <img src={closeBtn} alt="esconder carrinho" />
        </button>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <Shopping key={item.id}>
                  <img
                    className="dishImage"
                    src={item.picture}
                    alt={item.name}
                  />
                  <div>
                    <DishName>{item.name}</DishName>
                    <DishPrice>{formatCurrency(item.price)}</DishPrice>
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
                </Shopping>
              ))}
            </ul>
            <TotalPrice>
              Valor total <span>{formatCurrency(getTotalPrice(items))}</span>
            </TotalPrice>
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
          <EmptyState>Nenhum item adicionado</EmptyState>
        )}
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
