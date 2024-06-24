import Dishes from '../Dishes';
import { ListContainer } from './style';

const DishesList = () => (
  <div className="container">
    <ListContainer>
      <Dishes />
      <Dishes />
      <Dishes />
      <Dishes />
      <Dishes />
      <Dishes />
    </ListContainer>
  </div>
);

export default DishesList;
