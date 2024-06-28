import Tag from '../Tag';
import {
  ButtonLeanMore,
  Description,
  RestaurantContainer,
  RestaurantName,
} from './style';

type Props = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Props) => {
  return (
    <RestaurantContainer>
      <img src={capa} alt="Japanese Restaurant" />
      <div className="tagGroup">
        {destacado ? (
          <>
            <Tag>Destaque da semana</Tag>
            <Tag>{tipo}</Tag>
          </>
        ) : (
          <Tag>{tipo}</Tag>
        )}
      </div>
      <div className="marketing">
        <div className="rating">
          <RestaurantName>{titulo}</RestaurantName>
          <p>
            {avaliacao} <span>⭐</span>
          </p>
        </div>
        <Description>{descricao}</Description>
        <ButtonLeanMore to={`/restaurant-menu/${id}`}>
          Saiba mais
        </ButtonLeanMore>
      </div>
    </RestaurantContainer>
  );
};

export default Restaurant;
