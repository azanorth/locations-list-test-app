export default abstract class LocationEntity {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly city: string;
  readonly state: string;
  readonly address: string;

  constructor(entity: LocationEntity) {
    this.id = entity.id;
    this.name = entity.name;
    this.country = entity.country;
    this.city = entity.city;
    this.state = entity.state;
    this.address = entity.address;
  }
}
