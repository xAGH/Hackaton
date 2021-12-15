import { LangModel } from "./lang.model";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LangService{

    activeLang:string;

    constructor() {
        let modeloLang: LangModel = new LangModel();
        this.activeLang = modeloLang.activeLang;
    }

    getActiveLang() {
        return this.activeLang;
    }

    setActiveLang(aL:string) {
        this.activeLang = aL;
    }
}