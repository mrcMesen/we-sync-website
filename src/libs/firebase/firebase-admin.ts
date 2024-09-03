import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

const admin_config = process.env.FIREBASE_ADMIN_CONFIG || '{}';
const admin_key = process.env.FIREBASE_ADMIN_KEY || '';
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';

const credential = cert({
  ...JSON.parse(admin_config),
  private_key: admin_key,
});

if (getApps().length === 0) {
  initializeApp({
    credential,
    storageBucket,
  });
}

const auth = getAuth();
const bucket = getStorage().bucket();

export { auth, bucket };
