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
import InputMask from 'react-input-mask';
import { textSpanEnd } from 'typescript';

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
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      userAddress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatório'),
      userCity: Yup.string()
        .min(1, 'Por valor, insira um endereço válido')
        .required('Campo obrigatório'),
      CEP: Yup.string()
        .min(8, 'Insira no formato indicado: 00000-00')
        .max(8, 'Insira no formato indicado: 00000-00')
        .required('Campo obrigatório'),
      userHouseNumber: Yup.string().required('Campo obrigatório'),
      cardOwner: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Insira no formato indicado: 0000 0000 0000 0000')
        .max(19, 'Insira no formato indicado: 0000 0000 0000 0000')
        .required('Campo obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Insira no formato indicado: 000')
        .max(3, 'Insira no formato indicado: 000')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  let hasError = false;

  const getErrorMessage = (fieldName: string, message?: string) => {
    const wasModified = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    hasError = wasModified && isInvalid;

    if (hasError) {
      return message;
    }
  };

  const checkInputHasError = (fieldName: string) => {
    const wasModified = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    hasError = isInvalid || !wasModified;

    return hasError;
  };

  const goToNextSection = () => {
    const firstSectionValues = [
      'userName',
      'userAddress',
      'userCity',
      'CEP',
      'userHouseNumber',
    ];

    const ableToNext = firstSectionValues.every((item) => {
      return checkInputHasError(item) === false;
    });

    if (ableToNext) {
      showFirstFormSection(false);
    }
  };

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
                className={checkInputHasError('userName') ? 'error' : ''}
              />
              <small>{getErrorMessage('userName', form.errors.userName)}</small>

              <label htmlFor="userAddress" className="margin-y">
                Endereço
              </label>
              <input
                type="text"
                id="userAddress"
                value={form.values.userAddress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('userAddress') ? 'error' : ''}
              />
              <small>
                {getErrorMessage('userAddress', form.errors.userAddress)}
              </small>

              <label htmlFor="userCity" className="margin-y">
                Cidade
              </label>
              <input
                type="text"
                id="userCity"
                value={form.values.userCity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('userCity') ? 'error' : ''}
              />
              <small>{getErrorMessage('userCity', form.errors.userCity)}</small>

              <SplitFields className="margin-y">
                <div>
                  <label htmlFor="CEP" className="margin-bottom">
                    CEP
                  </label>
                  <InputMask
                    mask="99999-999"
                    type="text"
                    id="CEP"
                    name="CEP"
                    value={form.values.CEP}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('CEP') ? 'error' : ''}
                  />
                  <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
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
                    className={
                      checkInputHasError('userHouseNumber') ? 'error' : ''
                    }
                  />
                  <small>
                    {getErrorMessage(
                      'userHouseNumber',
                      form.errors.userHouseNumber
                    )}
                  </small>
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
                  onClick={goToNextSection}
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
                className={checkInputHasError('cardOwner') ? 'error' : ''}
              />
              <small>
                {getErrorMessage('cardOwner', form.errors.cardOwner)}
              </small>

              <SplitFields className="margin-y">
                <div className="card-number">
                  <label htmlFor="cardNumber" className="margin-bottom">
                    Número do cartão
                  </label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    type="text"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </div>
                <div className="card-code">
                  <label htmlFor="cardCode" className="margin-bottom">
                    CVV
                  </label>
                  <InputMask
                    mask="999"
                    type="text"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                  <small>
                    {getErrorMessage('cardCode', form.errors.cardCode)}
                  </small>
                </div>
              </SplitFields>
              <SplitFields>
                <div>
                  <label htmlFor="expiresMonth" className="margin-bottom">
                    Mês de vencimento
                  </label>
                  <InputMask
                    mask="99"
                    type="text"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </div>
                <div>
                  <label htmlFor="expiresYear" className="margin-bottom">
                    Ano de vencimento
                  </label>
                  <InputMask
                    mask="99"
                    type="text"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
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
