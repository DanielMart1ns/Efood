class Estabishment {
  restaurantType: string;
  restaurantName: string;
  description: string;

  constructor(type: string, name: string, description: string) {
    this.restaurantType = type;
    this.restaurantName = name;
    this.description = description;
  }
}

export default Estabishment;
