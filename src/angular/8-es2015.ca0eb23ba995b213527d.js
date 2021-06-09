(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{R90S:function(e,t,i){"use strict";i.r(t),i.d(t,"DeliveryModule",(function(){return j}));var r=i("PvGt"),o=i("7wI2"),n=i("pxUr"),s=i("tyNb"),l=i("3Pt+"),c=i("fXoL"),a=i("tk/3"),d=i("ofTM");let b=(()=>{class e{constructor(e,t){this.http=e,this.apiUrls=t,this.orderDeliverd=(e,t)=>this.http.post(this.apiUrls.orderDeliveredUrl,{orderId:e,date:t})}createProfile(e){return this.http.post(this.apiUrls.createDeliveryProfileUrl,e)}isProfileExist(){return this.http.get(this.apiUrls.isProfileExistUrl)}assignedDeliveries(e,t){return this.http.post(this.apiUrls.assignedDeliveryList,{delBoyId:e,date:t})}}return e.\u0275fac=function(t){return new(t||e)(c.cc(a.b),c.cc(d.a))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac}),e})();var f=i("Em6w"),u=i("IRfi"),m=i("A2Vd");let h=(()=>{class e{constructor(e,t,i){this.deliveryService=e,this.loginRegister=t,this.router=i,this.deliveryProfileFrom=new l.i({address1:new l.f("",[l.F.required]),city:new l.f("",[l.F.required]),zip:new l.f("",[l.F.required,l.F.minLength(6)])}),this.getUserInfo=()=>{this.loginRegister.getUserInfo().subscribe(e=>{this.userInfo=e},e=>{console.log("unable to get user Info")})}}deliveryProfileData(){console.log(this.deliveryProfileFrom.value),this.deliveryService.createProfile(this.deliveryProfileFrom.value).subscribe(e=>{this.router.navigate(["/delivery"])},e=>{console.log(e)})}ngOnInit(){this.getUserInfo()}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(b),c.Ob(f.a),c.Ob(s.e))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-delivery-profile"]],decls:17,vars:3,consts:[[1,"container","text-centerr","my-4","py-5"],[1,"form-container","border","border-secondary"],[1,"global-heading"],[1,"p-4",3,"formGroup","ngSubmit"],[1,"form-fields"],["matInput","","placeholder","Name","readonly","",3,"value"],["matInput","","placeholder","Mobile","readonly","",3,"value"],["matInput","","placeholder","Address","formControlName","address1"],["matInput","","placeholder","City","formControlName","city"],["matInput","","placeholder","Zip","formControlName","zip"],["type","submit",1,"my-btn","d-block","text-center","hover-zoom"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"p",2),c.Jc(3,"Delivery Boy Details"),c.Tb(),c.Ub(4,"form",3),c.gc("ngSubmit",(function(){return t.deliveryProfileData()})),c.Ub(5,"mat-form-field",4),c.Pb(6,"input",5),c.Tb(),c.Ub(7,"mat-form-field",4),c.Pb(8,"input",6),c.Tb(),c.Ub(9,"mat-form-field",4),c.Pb(10,"input",7),c.Tb(),c.Ub(11,"mat-form-field",4),c.Pb(12,"input",8),c.Tb(),c.Ub(13,"mat-form-field",4),c.Pb(14,"input",9),c.Tb(),c.Ub(15,"button",10),c.Jc(16,"Submit"),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e&&(c.Bb(4),c.qc("formGroup",t.deliveryProfileFrom),c.Bb(2),c.qc("value",t.userInfo.name),c.Bb(2),c.qc("value",t.userInfo.mobile))},directives:[l.H,l.s,l.j,u.b,m.a,l.c,l.r,l.h],styles:[".form-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.form-fields[_ngcontent-%COMP%]{width:100%}@media (min-width:640px){.form-container[_ngcontent-%COMP%]{max-width:65vmin}}"]}),e})();var p=i("mrSG"),g=i("wd/R"),v=i("ofXK"),y=i("G/Ji");function D(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",5),c.gc("click",(function(){return c.Ac(e),c.jc().createRoute()})),c.Jc(1," Create Delivery Profile "),c.Tb()}}function U(e,t){if(1&e){const e=c.Vb();c.Ub(0,"p"),c.Ub(1,"button",17),c.gc("click",(function(){c.Ac(e);const t=c.jc().$implicit;return c.jc(3).mapNavigate(null==t?null:t.location.lat,null==t?null:t.location.lng)})),c.Jc(2,"Direction"),c.Tb(),c.Tb()}}function T(e,t){1&e&&(c.Ub(0,"span",18),c.Jc(1," check_circle "),c.Tb())}const I=function(e){return{"delivery-disabled":e}};function P(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",19),c.gc("click",(function(){c.Ac(e);const t=c.jc().$implicit;return c.jc(3).delivered(t._id)})),c.Jc(1,"Delivered"),c.Tb()}if(2&e){const e=c.jc(4);c.qc("disabled",!e.isToday)("ngClass",c.uc(2,I,!e.isToday))}}function k(e,t){if(1&e&&(c.Ub(0,"ul",10),c.Ub(1,"li",11),c.Ub(2,"div",12),c.Ub(3,"div",13),c.Jc(4),c.Tb(),c.Ub(5,"div",13),c.Jc(6),c.Tb(),c.Tb(),c.Ub(7,"p"),c.Jc(8),c.Tb(),c.Ub(9,"div",12),c.Ub(10,"div",13),c.Ub(11,"p"),c.Jc(12),c.Tb(),c.Ub(13,"p"),c.Jc(14),c.Tb(),c.Ub(15,"p"),c.Jc(16),c.Tb(),c.Tb(),c.Ub(17,"div",13),c.Ub(18,"p"),c.Jc(19),c.Tb(),c.Ub(20,"p"),c.Jc(21),c.Tb(),c.Hc(22,U,3,0,"p",14),c.Tb(),c.Tb(),c.Hc(23,T,2,0,"span",15),c.Hc(24,P,2,4,"ng-template",null,16,c.Ic),c.Tb(),c.Tb()),2&e){const e=t.$implicit,i=c.zc(25),r=c.jc(3);c.Bb(4),c.Lc(" ",e.name," "),c.Bb(2),c.Lc(" ",e.mobile," "),c.Bb(2),c.Oc(" ",e.address1,", ",e.landmark,", ",e.city,"- ",e.zip," "),c.Bb(4),c.Lc(" ",e.productName," "),c.Bb(2),c.Lc(" ",e.deliveryTime," "),c.Bb(2),c.Lc(" ",e.quantityLeft+e.bounusLeft," "),c.Bb(3),c.Lc(" category : ",e.category," "),c.Bb(2),c.Lc(" Note : ",e.additionalNote," "),c.Bb(1),c.qc("ngIf",0!=(null==e||null==e.location?null:e.location.lat)),c.Bb(1),c.qc("ngIf",r.isDeliveredToday(e._id,e.deliverdDates))("ngIfElse",i)}}const B=function(e){return{"highlight-date":e}};function w(e,t){if(1&e){const e=c.Vb();c.Ub(0,"div"),c.Ub(1,"h1"),c.Jc(2,"Delivery List"),c.Tb(),c.Ub(3,"button",7),c.gc("click",(function(){return c.Ac(e),c.jc(2).todayDateDelivery()})),c.Jc(4),c.kc(5,"date"),c.Tb(),c.Ub(6,"button",8),c.gc("click",(function(){return c.Ac(e),c.jc(2).tomorrowDateDelivery()})),c.Jc(7),c.kc(8,"date"),c.Tb(),c.Hc(9,k,26,14,"ul",9),c.Tb()}if(2&e){const e=c.jc(2);c.Bb(3),c.qc("ngClass",c.uc(11,B,!e.isToday)),c.Bb(1),c.Lc(" ",c.mc(5,5,e.todayDate,"MMM, dd")," "),c.Bb(2),c.qc("ngClass",c.uc(13,B,e.isToday)),c.Bb(1),c.Lc(" ",c.mc(8,8,e.tommorrowDate,"MMM, dd")," "),c.Bb(2),c.qc("ngForOf",e.assignedDeliveriesList)}}function C(e,t){if(1&e&&(c.Ub(0,"agm-marker",23),c.Ub(1,"agm-info-window",24),c.Jc(2),c.Tb(),c.Tb()),2&e){const e=t.$implicit;c.qc("latitude",e.lat)("longitude",e.lng),c.Bb(1),c.qc("disableAutoPan",!0),c.Bb(1),c.Kc(e.label)}}function M(e,t){if(1&e&&(c.Ub(0,"div",20),c.Ub(1,"h3"),c.Jc(2,"Customers Locations"),c.Tb(),c.Ub(3,"agm-map",21),c.Hc(4,C,3,4,"agm-marker",22),c.Tb(),c.Tb()),2&e){const e=c.jc(2);c.Bb(3),c.qc("latitude",e.mapConfig.lat)("zoom",e.mapConfig.zoom)("longitude",e.mapConfig.lng),c.Bb(1),c.qc("ngForOf",e.mapConfig.markers)}}function L(e,t){if(1&e&&(c.Ub(0,"div"),c.Hc(1,w,10,15,"div",2),c.Hc(2,M,5,4,"div",6),c.Tb()),2&e){const e=c.jc(),t=c.zc(6);c.Bb(1),c.qc("ngIf",e.assignedDeliveriesList.length>0)("ngIfElse",t),c.Bb(1),c.qc("ngIf",e.allUserMap)}}function q(e,t){1&e&&(c.Ub(0,"div",25),c.Ub(1,"div",26),c.Ub(2,"div",27),c.Pb(3,"mat-spinner"),c.Tb(),c.Tb(),c.Tb())}function J(e,t){1&e&&(c.Ub(0,"div",28),c.Jc(1," No Orders "),c.Tb())}const x=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.delivery=t,this.assignedDeliveriesList=[],this.datefromat="YYYY-MM-DD",this.todayDate=g().format(this.datefromat),this.allUserMap=!1,this.tempDelivered=[],this.tommorrowDate=g().add(1,"day").format(this.datefromat),this.mapConfig={lat:19.286982921516454,lng:72.8644359418573,zoom:13,markers:[]},this.plotAllusersMap=()=>{this.allUserMap=!0,this.assignedDeliveriesList.forEach(e=>{this.mapConfig.markers.push({lat:e.location.lat,lng:e.location.lng,label:e.name})})},this.mapNavigate=(e,t)=>{window.open(`https://maps.google.com/maps?q=${e},${t}`,"_blank")},this.createRoute=()=>{this.router.navigate(["/delivery/create-profile"])},this.todayDateDelivery=()=>{this.isToday=!0,this.assignedDeliveriesM(this.todayDate)},this.tomorrowDateDelivery=()=>{this.isToday=!1,this.assignedDeliveriesM(this.tommorrowDate)},this.savetempDeliveries=(e,t)=>{this.tempDelivered.push({orderId:e,delDate:t})},this.isDeliveredToday=(e,t)=>{for(const i of t)if(g(i).format(this.datefromat)==this.deliveryCheckDate)return!0;if(this.tempDelivered.length>0)for(const i of this.tempDelivered)if(i.orderId==e&&i.delDate==this.deliveryCheckDate)return!0;return!1},this.isFutureDeliveries=()=>{},this.delivered=e=>{this.delivery.orderDeliverd(e,this.deliveryCheckDate).subscribe(t=>{this.savetempDeliveries(e,this.deliveryCheckDate)},e=>{console.log(e)})},this.filterDeliveries=(e,t)=>{this.assignedDeliveriesList=[];e:for(const i of e){for(const e of i.skippedDates)if(g(e).format(this.datefromat)==t)continue e;this.assignedDeliveriesList.push(i)}this.plotAllusersMap()},this.assignedDeliveriesM=e=>Object(p.a)(this,void 0,void 0,(function*(){this.deliveryCheckDate=e;const t=this.delivery.assignedDeliveries(this.deliveryProfileId,e).toPromise();yield t.then(e=>{this.unFilteredDeliveriesList=e}).catch(e=>{console.log(e)}),this.filterDeliveries(this.unFilteredDeliveriesList,e)}))}ngOnInit(){this.delivery.isProfileExist().subscribe(e=>{this.recievedData=e,this.recievedData.isProfile?(this.isProfileButton=!1,this.deliveryProfileId=this.recievedData.delProfileId,this.isToday=!0,this.assignedDeliveriesM(this.todayDate)):this.isProfileButton=!0},e=>{this.isProfileButton=!1})}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(s.e),c.Ob(b))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-delivery-home"]],decls:7,vars:3,consts:[[1,"container","text-center","pt-5"],["class","my-btn hover-zoom",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["loading",""],["noorder",""],[1,"my-btn","hover-zoom",3,"click"],["class","my-4",4,"ngIf"],[1,"my-btn","mr-2",3,"ngClass","click"],[1,"my-btn","ml-2",3,"ngClass","click"],["class","list-group text-left mt-2",4,"ngFor","ngForOf"],[1,"list-group","text-left","mt-2"],[1,"list-group-item"],[1,"row"],[1,"col-6"],[4,"ngIf"],["class","material-icons theme-color text-right","style","font-size: 44px;",4,"ngIf","ngIfElse"],["delButton",""],[1,"my-btn",3,"click"],[1,"material-icons","theme-color","text-right",2,"font-size","44px"],[1,"my-btn","text-right",3,"disabled","ngClass","click"],[1,"my-4"],[3,"latitude","zoom","longitude"],[3,"latitude","longitude",4,"ngFor","ngForOf"],[3,"latitude","longitude"],[3,"disableAutoPan"],[1,"display-1","text-center"],[1,"my-overlay","d-flex","justify-content-center","align-items-center"],[1,"p-2"],[1,"display-4","text-center","my-4"]],template:function(e,t){if(1&e&&(c.Ub(0,"div",0),c.Hc(1,D,2,0,"button",1),c.Hc(2,L,3,3,"div",2),c.Tb(),c.Hc(3,q,4,0,"ng-template",null,3,c.Ic),c.Hc(5,J,2,0,"ng-template",null,4,c.Ic)),2&e){const e=c.zc(4);c.Bb(1),c.qc("ngIf",t.isProfileButton),c.Bb(1),c.qc("ngIf",t.assignedDeliveriesList)("ngIfElse",e)}},directives:[v.u,v.r,v.t,n.h,n.i,n.f,y.c],pipes:[v.f],styles:[".delivery-disabled[_ngcontent-%COMP%]{background-color:#dcdcdc!important}.highlight-date[_ngcontent-%COMP%]{background-color:#fff!important;color:#000!important;border:1px solid #ebebeb!important}agm-map[_ngcontent-%COMP%]{height:60vh}"]}),e})()},{path:"create-profile",component:h}];let O=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(x)],s.i]}),e})(),j=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},providers:[b],imports:[[o.a,r.a,O,n.c.forRoot({apiKey:"AIzaSyAq4S6PcTl6rynGm8i0Cleh9A0nUIy57eI",libraries:["places","geometry"]})]]}),e})()}}]);