export interface ZATCAQRParams {
 sellerName: string;
 vatNumber: string;
 timestamp: string;
 invoiceTotal: number;
 vatAmount: number;
}

export function generateZATCAQR(params: ZATCAQRParams): string {
 const encoder = new TextEncoder();

 function tlv(tag: number, value: string): Uint8Array {
 const valueBytes = encoder.encode(value);
 const result = new Uint8Array(2 + valueBytes.length);
 result[0] = tag;
 result[1] = valueBytes.length;
 result.set(valueBytes, 2);
 return result;
 }

 const fields = [
 tlv(1, params.sellerName),
 tlv(2, params.vatNumber),
 tlv(3, params.timestamp),
 tlv(4, params.invoiceTotal.toFixed(2)),
 tlv(5, params.vatAmount.toFixed(2)),
 ];

 const totalLength = fields.reduce((s, f) => s + f.length, 0);
 const combined = new Uint8Array(totalLength);
 let offset = 0;
 for (const field of fields) {
 combined.set(field, offset);
 offset += field.length;
 }

 let binary = '';
 for (let i = 0; i < combined.byteLength; i++) {
 binary += String.fromCharCode(combined[i]);
 }
 return btoa(binary);
}

