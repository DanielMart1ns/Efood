class Estabishment {
  restaurantType: string;
  restaurantName: string;
  description: string;
  id: number;

  constructor(type: string, name: string, description: string, id: number) {
    this.restaurantType = type;
    this.restaurantName = name;
    this.description = description;
    this.id = id;
  }
}

export default Estabishment;
