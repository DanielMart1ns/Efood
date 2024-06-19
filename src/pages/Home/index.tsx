import Banner from '../../components/Banner';
import RestaurantList from '../../components/RestaurantList';
import japaneseRestaurant from '../../assets/images/japanese-restaurant.png';
import italianRestaurant from '../../assets/images/italian-restaurant.png';
import Estabishment from '../../models/establishment';

const estabishmentData: Estabishment[] = [
  {
    id: 1,
    emphasisProduct: 'Destaque da semana',
    foodTypeTag: 'Japonesa',
    restaurantType: japaneseRestaurant,
    restaurantName: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  },
  {
    id: 2,
    foodTypeTag: 'Italiana',
    restaurantType: italianRestaurant,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 3,
    foodTypeTag: 'Italiana',
    restaurantType: italianRestaurant,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 4,
    foodTypeTag: 'Italiana',
    restaurantType: italianRestaurant,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 5,
    foodTypeTag: 'Italiana',
    restaurantType: italianRestaurant,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
  {
    id: 6,
    foodTypeTag: 'Italiana',
    restaurantType: italianRestaurant,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  },
];

const Home = () => (
  <>
    <Banner />
    <div className="container">
      <RestaurantList establishmentData={estabishmentData} />
    </div>
  </>
);

export default Home;
