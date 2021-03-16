interface IAddress {
  street: string;
  city: string;
  zip: string;
  country: string;
}

interface IClient {
    name: string;
    email: string;
    address: IAddress;
  }

interface IInvoice {
  billFrom: IAddress;
  client: IClient;
}
export class Invoice implements IInvoice {
  billFrom: IAddress = {} as IAddress;
  client: IClient = {address: {}} as IClient;

  constructor(invoice?: IInvoice) {
    this.billFrom.street = invoice?.billFrom.street || "";
    this.billFrom.city = invoice?.billFrom.city || "";
    this.billFrom.zip = invoice?.billFrom.zip || "";
    this.billFrom.country = invoice?.billFrom.country || "";

    this.client.name = invoice?.client.name || "";
    this.client.email = invoice?.client.email || "";
    this.client.address.street = invoice?.client.address.street || "";
    this.client.address.city = invoice?.client.address.city || "";
    this.client.address.zip = invoice?.client.address.zip || "";
    this.client.address.country = invoice?.client.address.country || "";
  }
}
