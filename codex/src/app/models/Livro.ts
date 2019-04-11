import { IModelBase } from '../interfaces/IModelBase';
import { ModelBase } from '../base/ModelBase';

export class Livro extends ModelBase {
    nome: string;
    autor: string;
    editora: string;
    ano: number;
    edicao: number;
}
