import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ServiceBase } from '../base/ServiceBase';
import { Livro } from '../models/Livro';

@Injectable({
  providedIn: 'root'
})

export class LivroService extends ServiceBase<Livro> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.api.codex}/livros`);
   }
}
