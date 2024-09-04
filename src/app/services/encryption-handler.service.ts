import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionHandlerService {

   constructor() { }

  hash(text: string): string {
    return CryptoJS.MD5(text).toString();
  }
}