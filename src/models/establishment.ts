class Estabishment {
  id: number;
  emphasisProduct?: string;
  foodTypeTag: string;
  restaurantType: string;
  restaurantName: string;
  rating: number;
  description: string;

  constructor(
    id: number,
    emphasisProduct: string,
    foodTypeTag: string,
    type: string,
    name: string,
    rating: number,
    description: string
  ) {
    this.id = id;
    this.emphasisProduct = emphasisProduct;
    this.foodTypeTag = foodTypeTag;
    this.restaurantType = type;
    this.restaurantName = name;
    this.rating = rating;
    this.description = description;
  }
}

export default Estabishment;
