"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9850],{9850:(M,l,n)=>{n.r(l),n.d(l,{IngresoPage:()=>h});var d=n(5861),u=n(6814),s=n(95),t=n(9004),e=n(6689),p=n(9022),P=n(2333);let h=(()=>{var r;class _{constructor(a,o){this.bd=a,this.authService=o,this.correo="atorres@duocuc.cl",this.password="1234"}ngOnInit(){var a=this;this.bd.crearUsuariosDePrueba().then((0,d.Z)(function*(){yield a.bd.leerUsuarios()}))}ingresar(){this.authService.login(this.correo,this.password)}}return(r=_).\u0275fac=function(a){return new(a||r)(e.Y36(p.T),e.Y36(P.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-ingreso"]],standalone:!0,features:[e.jDz],decls:14,vars:3,consts:[[3,"translucent"],[1,"centrado-vertical"],[1,"marco"],["type","text","label","Correo","labelPlacement","floating",3,"ngModel","ngModelChange"],["type","password","label","Contrase\xf1a","labelPlacement","floating",3,"ngModel","ngModelChange"],[1,"alinear-centro"],[3,"click"]],template:function(a,o){1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Asistencia DuocUc - Ingreso"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"div",1)(6,"div",2)(7,"ion-item")(8,"ion-input",3),e.NdJ("ngModelChange",function(i){return o.correo=i}),e.qZA()(),e.TgZ(9,"ion-item")(10,"ion-input",4),e.NdJ("ngModelChange",function(i){return o.password=i}),e.qZA()(),e.TgZ(11,"div",5)(12,"ion-button",6),e.NdJ("click",function(){return o.ingresar()}),e._uU(13," Ingresar "),e.qZA()()()()()),2&a&&(e.Q6J("translucent",!0),e.xp6(8),e.Q6J("ngModel",o.correo),e.xp6(2),e.Q6J("ngModel",o.password))},dependencies:[t.Pc,t.YG,t.W2,t.Gu,t.pK,t.Ie,t.wd,t.sr,t.j9,u.ez,s.u5,s.JJ,s.On],styles:[".centrado-vertical[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.marco[_ngcontent-%COMP%]{border:3px solid gray;padding:16px}.alinear-centro[_ngcontent-%COMP%]{text-align:center;padding-top:8px;padding-bottom:8px}"]}),_})()}}]);