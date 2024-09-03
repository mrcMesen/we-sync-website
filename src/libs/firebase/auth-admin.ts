import { auth } from './firebase-admin';

export function getUserByToken(token?: string) {
  if (!token) {
    return Promise.reject(undefined);
  }
  const user = auth
    .verifyIdToken(token)
    .then((decodedIdToken) => {
      return decodedIdToken;
    })
    .catch(() => {
      return Promise.reject(undefined);
    });

  return user;
}
