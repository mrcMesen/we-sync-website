import { NextRequest } from 'next/server';

import { auth } from '@/libs/firebase/firebase-admin';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { uid, role } = body;
    console.log('>>> Setting user claims', uid, role);

    if (!uid) {
      return new Response('Missing uid', {
        status: 404,
        headers: { ...CORS },
      });
    }

    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': role ?? 'viewer',
        'x-hasura-allowed-roles': ['owner', 'admin', 'member'],
        'x-hasura-user-id': uid,
      },
    };

    await auth.setCustomUserClaims(uid, customClaims);
    console.log('>>> User claims set');
    // res.status(200).json();
    // Response.json({ confirm: true });
    return new Response('Confirmed!', {
      status: 200,
      headers: { ...CORS },
    });
  } catch (error) {
    // const { uid, role } = req?.body;
    console.log('Error setting claims', { request, error });
    // res.status(500).json({
    //   message: 'Internal error setting claims',
    // });
    return new Response('Internal error setting claims', {
      status: 500,
      headers: { ...CORS },
    });
  }
}
