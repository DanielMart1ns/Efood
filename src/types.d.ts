declare interface restaurantMenu {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

declare type RestaurantAttributes = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: restaurantMenu[];
};
declare interface itemsCart {
  name: string;
  price: number;
  picture: string;
  id: number;
}
