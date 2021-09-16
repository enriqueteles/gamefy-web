import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private ls = window.localStorage;

  constructor() { }

  public setItem(key: string, value: any) {
    value = JSON.stringify(value);
    this.ls.setItem(key, value);
    return true;
  }

  public getItem(key: string) {
    let value: any = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  public removeItem(key: string){
    this.ls.removeItem(key);
    return true;
  }

  
  public clear() {
    this.ls.clear();
  }
}
