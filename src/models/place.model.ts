export class Place {
  constructor(
    public name: string,
    public type: string,
    public address: string,
    public postCode: string,
    public phone: string,
    public ratingValue: string,
    public score: string,
    public geocode: object,
    public link: Array<object>,
  ) {}
}
