import{p as o}from"./proxy.CtVqJWla.js";const r=new Map([["en",new Map([["Hello World","Hello World"],["Home","Home"],["locale-name","English"],["theme-dark","Dark Theme"],["theme-light","Light Theme"]])],["pt-BR",new Map([["Hello World","Olá Mundo"],["Home","Página Inicial"],["locale-name","Português (Brasil)"],["theme-dark","Tema Escuro"],["theme-light","Tema Claro"]])]]),t=o({_currentLocale:"en",_currentMap:r.get("en"),get currentLocale(){return this._currentLocale},set currentLocale(e){r.has(e)&&(this._currentLocale=e,this._currentMap=r.get(e))}});function n(e){return t._currentMap.get(e)||`String not found {translationKey: ${e}, locale: ${t.currentLocale}}`}export{n as _,t as l,r as t};
