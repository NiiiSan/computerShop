export class Computer {
  "id": number;
  "modele": string;
  "marque": string;
  "type": string;
  "categorie": string;
  "dateEntreeMagasin": Date;
  "prixAchat": number;
  "prixVente": number;
  constructor(id?: number, modele?: string, marque?: string, type?: string, categorie?: string, dateEntreeMagasin?: Date, prixAchat?: number, prixVente?:number){
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.categorie = categorie;
    this.dateEntreeMagasin = dateEntreeMagasin;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
  }
}
