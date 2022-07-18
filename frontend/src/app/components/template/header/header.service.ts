import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // Cria instância de subject de HeaderData
  // que emitirá um evento sempre quando houver
  // mudança nos dados do headerData
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerdata(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
