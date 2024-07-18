import { useDispatch, useSelector } from 'react-redux';
import { Overlay, SideBar } from '../../styles';
import { CheckoutContainer, SplitFields } from './style';
import { RootReducer } from '../store';
import { closeCheckoutForm } from '../store/checkoutForm';
import Button from '../Button';
import { useState } from 'react';
import { openCart } from '../store/cart';
import { formatCurrency, getTotalPrice } from '../../utils';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const returnToCart = () => {
    dispatch(closeCheckoutForm());
    dispatch(openCart());
  };

  const { items } = useSelector((state: RootReducer) => state.cart);

  const { checkoutFormIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  );

  const [isFirstFormSection, showFirstFormSection] = useState(true);

  const form = useFormik({
    initialValues: {
      userName: '',
      userAddress: '',
      userCity: '',
      CEP: '',
      userHouseNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <CheckoutContainer className={checkoutFormIsOpen ? 'show-form' : ''}>
      <Overlay />
      <SideBar>
        <form onSubmit={form.handleSubmit}>
          {isFirstFormSection ? (
            <>
              <h3>Entrega</h3>
              <label htmlFor="userName" className="margin-bottom">
                Quem irá receber
              </label>
              <input
                type="text"
                id="userName"
                value={form.values.userName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="userAddress" className="margin-y">
                Endereço
              </label>
              <input
                type="text"
                id="userAddress"
                value={form.values.userAddress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <label htmlFor="userCity" className="margin-y">
                Cidade
              </label>
              <input
                type="text"
                id="userCity"
                value={form.values.userCity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <SplitFields className="margin-y">
                <div>
                  <label htmlFor="CEP" className="margin-bottom">
                    CEP
                  </label>
                  <input
                    type="text"
                    id="CEP"
                    value={form.values.CEP}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="userHouseNumber" className="margin-bottom">
                    Número
                  </label>
                  <input
                    type="text"
                    id="userHouseNumber"
                    value={form.values.userHouseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </SplitFields>

              <label htmlFor="complement" className="margin-bottom">
                Complemento (opcional)
              </label>
              <input
                type="text"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <div className="nav-form-section">
                <Button
                  bgColor="cream"
                  size="full"
                  type="button"
                  title="Clique para continuar com o pagamento"
                  onClick={() => {
                    showFirstFormSection(false);
                  }}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  bgColor="cream"
                  size="full"
                  type="button"
                  title="Clique para continuar com o pagamento"
                  onClick={returnToCart}
                >
                  Voltar para o carrinho
                </Button>
              </div>
            </>
          ) : (
            <>
              <h3>
                Pagamento - Valor a pagar {formatCurrency(getTotalPrice(items))}
              </h3>
              <label htmlFor="cardOwner" className="margin-bottom">
                Nome no cartão
              </label>
              <input
                type="text"
                id="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />

              <SplitFields className="margin-y">
                <div>
                  <label htmlFor="cardNumber" className="margin-bottom">
                    Número do cartão
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode" className="margin-bottom">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </SplitFields>
              <SplitFields>
                <div>
                  <label htmlFor="expiresMonth" className="margin-bottom">
                    Mês de vencimento
                  </label>
                  <input
                    type="text"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear" className="margin-bottom">
                    Ano de vencimento
                  </label>
                  <input
                    type="text"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </div>
              </SplitFields>

              <div className="nav-form-section">
                <Button
                  bgColor="cream"
                  size="full"
                  type="submit"
                  title="Clique para continuar com o pagamento"
                >
                  Finalizar pagamento
                </Button>
                <Button
                  bgColor="cream"
                  size="full"
                  type="button"
                  title="Clique para continuar com o pagamento"
                  onClick={() => {
                    showFirstFormSection(true);
                  }}
                >
                  Voltar para a edição de endereço
                </Button>
              </div>
            </>
          )}
        </form>
      </SideBar>
    </CheckoutContainer>
  );
};

export default CheckoutForm;
