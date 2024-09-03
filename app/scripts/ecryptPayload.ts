"use server";

import {
  createCipheriv,
  publicEncrypt,
  randomBytes,
  createPublicKey,
  KeyObject,
} from "node:crypto";

// Retrieve and validate the environment variable
const publicKeyString = process.env.RSA_PUBLIC_KEY;
if (!publicKeyString) {
  throw new Error("Environment variable RSA_PUBLIC_KEY is not set.");
}

// Convert to KeyObject for encryption
const adminPublicKey: KeyObject = createPublicKey(publicKeyString);

export const encryptPayload = async (email: string) => {
  // Generate AES key and IV
  const aesKey = randomBytes(32); // 32 bytes key for AES-256
  const iv = randomBytes(16); // 16 bytes IV for AES

  // Encrypt the data using AES
  const cipher = createCipheriv("aes-256-cbc", aesKey, iv);
  let encryptedData = cipher.update(email, "utf8", "hex");
  encryptedData += cipher.final("hex");

  // Encrypt the AES key using admin's RSA public key
  const encryptedAesKey = publicEncrypt(adminPublicKey, aesKey);

  const encryptedQRData = {
    encryptedData,
    encryptedAesKey: encryptedAesKey.toString("base64"), // Convert to base64 for QR encoding
    iv: iv.toString("hex"), // IV needs to be shared to decrypt the data
  };

  // Return the encrypted AES key and encrypted data
  return encryptedQRData;
};
