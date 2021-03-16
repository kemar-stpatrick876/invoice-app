import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as any, process.env.SUPABASE_SECRET_KEY as any)


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method, body} = req;
    const { data = [] } = await supabase.from<any>('invoices').select()
    switch (method) {
        case 'post':
            
            break;
        default:
            res.status(200).json(data);
            break;
    }

}