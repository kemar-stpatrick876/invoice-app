import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { Invoice } from "../invoice.model";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as any,
  process.env.SUPABASE_SECRET_KEY as any
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  switch (method) {
    case "POST": {
    const { senderAddress, clientName, clientEmail, clientAddress, paymentTerm } = body as Invoice;

      const { data, error } = await supabase.from("invoices").insert([
        {
          bill_from: senderAddress,
          client_name: clientName,
          client_email: clientEmail,
          client_address: clientAddress,
          payment_term: paymentTerm
        },
      ]);
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(data);
      }
      break;
    }

    default: {
      const { data = [] } = await supabase.from<any>("invoices").select();
      const invoices = data?.map((d: any) => {
          const invoice: Invoice = new Invoice();
          invoice.id = d.id;
          invoice.createdAt = d.created_at;
          invoice.senderAddress = d.bill_from;
          invoice.clientName = d.client_name;
          invoice.clientEmail = d.clientEmail;
          invoice.clientAddress = d.client_address;
          invoice.paymentDue = d.payment_due;
          invoice.paymentTerm = d.payment_term;

          return invoice;
      })
      res.status(200).json(invoices as Invoice[]);
      break;
    }
  }
}
