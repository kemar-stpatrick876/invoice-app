import {  Option } from "react-dropdown";

export const PAYMENT_TERM_OPTIONS = [
    { value: '1', label: 'Net 1 Days' },
    { value: '7', label: 'Net 7 Days' },
    { value: '14', label: 'Net 14 Days' },
    { value: '30', label: 'Net 30 Days' },

  ] as Option[];
export enum invoiceStatus {
    pending = 'pending',
    draft = 'draft',
    paid = 'paid'
}

interface IAddress {
  street: string;
  city: string;
  zip: string;
  country: string;
}

interface IInvoice {
  id?: string;
  clientName: string;
  clientEmail: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  createdAt: string;
  paymentDue: string;
  paymentTerm: string;
  status: invoiceStatus;
  total: number;

}
export class Invoice implements IInvoice {
  id!: string;
  clientName!: string;
  clientEmail!: string;
  senderAddress: IAddress = {} as IAddress;
  clientAddress: IAddress = {} as IAddress;
  createdAt!: string;
  paymentDue!: string;
  status: invoiceStatus = invoiceStatus.pending;
  total: number = 1200.0;
  paymentTerm: string;

  constructor(invoice?: IInvoice) {
    this.senderAddress.street = invoice?.senderAddress.street || "";
    this.senderAddress.city = invoice?.senderAddress.city || "";
    this.senderAddress.zip = invoice?.senderAddress.zip || "";
    this.senderAddress.country = invoice?.senderAddress.country || "";

    this.clientName = invoice?.clientName || "";
    this.clientEmail = invoice?.clientEmail|| "";
    this.clientAddress.street = invoice?.clientAddress.street || "";
    this.clientAddress.city = invoice?.clientAddress.city || "";
    this.clientAddress.zip = invoice?.clientAddress.zip || "";
    this.clientAddress.country = invoice?.clientAddress.country || "";

    this.paymentTerm = invoice?.paymentTerm as string;
  }
    
   
}
