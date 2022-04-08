// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  username: string;
  password: string;
}

export async function loginPost(username:string, password:string) {

  const response = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  });
  const result = await response.json();

  return {
    ok: response.ok,
    result,
  };
}

export async function signupPost(name:string,username:string,password:string) {
  const response = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, username, password}),
  });
  const result = await response.json();
  return {
    ok: response.ok,
    result,
  };
}