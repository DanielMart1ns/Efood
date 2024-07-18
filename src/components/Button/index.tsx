import { ButtonContainer, ButtonLink } from './style';

export type Props = {
  children: string;
  size: 'full' | 'fit';
  title: string;
  onClick?: () => void;
  bgColor: 'salmon' | 'cream';
  to?: string;
  type: 'button' | 'link' | 'submit';
};

const Button = ({
  children,
  title,
  size,
  onClick,
  bgColor,
  type,
  to,
}: Props) => {
  if (type !== 'link') {
    return (
      <ButtonContainer
        bgColor={bgColor}
        title={title}
        type={type}
        size={size}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink
      type="button"
      bgColor={bgColor}
      title={title}
      size={size}
      to={to}
    >
      {children}
    </ButtonLink>
  );
};
export default Button;
