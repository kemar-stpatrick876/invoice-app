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
    const { billFrom , client: {name, email, address}} = body as Invoice;

      const { data, error } = await supabase.from("invoices").insert([
        {
          bill_from: billFrom,
          client_name: name,
          client_email: email,
          client_address: address
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

      res.status(200).json(data);
      break;
    }
  }
}
