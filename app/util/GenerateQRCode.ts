"use server";

import QRCode from "qrcode";

import { encryptPayload } from "@/app/scripts/ecryptPayload";

export const generateQRCode = async (email: string): Promise<string> => {
  try {
    const payload = await encryptPayload(email);

    const qrCode = await QRCode.toDataURL(JSON.stringify(payload));

    return qrCode; // This is a Data URL of the QR code image
  } catch (err: any) {
    console.error("Error generating QR Code:", err.message);
    return "";
  }
};
