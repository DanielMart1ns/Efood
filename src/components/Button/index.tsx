import { ButtonContainer, ButtonLink } from './style';

export type Props = {
  children: string;
  size: 'full' | 'fit';
  title: string;
  onClick?: () => void;
  bgColor: 'salmon' | 'cream';
  to?: string;
  type: 'button' | 'link';
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
  if (type === 'button') {
    return (
      <ButtonContainer
        bgColor={bgColor}
        title={title}
        type="button"
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
