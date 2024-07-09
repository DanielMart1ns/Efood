import {
  CartContainer,
  DishName,
  DishPrice,
  EmptyState,
  Overlay,
  Shopping,
  SideBar,
  TotalPrice,
} from './style';
import remove from '../../assets/images/remove.png';
import closeBtn from '../../assets/images/close.png';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { close, removeItem } from '../store/cart';
import { RootReducer } from '../store';
import { formatCurrency } from '../Dishes';
const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const closeCart = () => {
    dispatch(close());
  };

  const removeCartItem = (itemSelected: number) => {
    dispatch(removeItem(itemSelected));
  };

  const getTotalPrice = () => {
    return items.reduce((previous, current) => {
      return (previous += current.price);
    }, 0);
  };
  return (
    <CartContainer className={isOpen ? 'show' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <button className="hiddenCartIcon" type="button" onClick={closeCart}>
          <img src={closeBtn} alt="esconder carrinho" />
        </button>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <Shopping key={item.id}>
                <img className="dishImage" src={item.picture} alt={item.name} />
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
                  <img className="removeIcon" src={remove} alt="remove item" />
                </button>
              </Shopping>
            ))}
          </ul>
        ) : (
          <EmptyState>Nenhum item adicionado</EmptyState>
        )}
        <TotalPrice>
          Valor total <span>{formatCurrency(getTotalPrice())}</span>
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
