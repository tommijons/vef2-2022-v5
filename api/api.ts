// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { METHODS } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  username: string;
  password: string;
}

export async function loginPost(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {username,password} = req.body;
  const result = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  });
    return result;

  //res.status(200).json({ name: 'John Doe' })
}
