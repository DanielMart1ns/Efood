import Button from '../Button';
import Tag from '../Tag';
import * as S from './style';

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
    <S.RestaurantContainer>
      <img src={capa} alt={`imagem do estabelecimento ${titulo}`} />
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
          <S.RestaurantName>{titulo}</S.RestaurantName>
          <p>
            {avaliacao} <span>⭐</span>
          </p>
        </div>
        <S.Description>{descricao}</S.Description>

        <Button
          size="fit"
          title="Clique para saber mais"
          bgColor="salmon"
          type="link"
          to={`/restaurant-menu/${id}`}
        >
          Saiba mais
        </Button>
      </div>
    </S.RestaurantContainer>
  );
};

export default Restaurant;
