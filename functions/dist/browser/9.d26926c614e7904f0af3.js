(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"26NW":function(l,n,t){var e=t("mrSG").__decorate,u=t("mrSG").__metadata,i=t("CcnG"),o=t("WzYf");n.OwlCarousel=function(){function l(l){this.differs=l,this.carouselClasses="",this.options={}}return Object.defineProperty(l.prototype,"items",{set:function(l){this._items=l,l&&!this.differ&&(this.differ=this.differs.find(l).create(null))},enumerable:!0,configurable:!0}),l.prototype.ngDoCheck=function(){if(this.differ){var l=this.differ.diff(this._items);if(l){var n=!1,t=function(){n=!0};l.forEachAddedItem(t),l.forEachMovedItem(t),l.forEachRemovedItem(t),n&&this.reInit()}}},l.prototype.reInit=function(){var l=this;this.$owlChild.$owl&&this.$owlChild.$owl.css("display","none"),setTimeout(function(){if(l.$owlChild.destroyOwl(),l.$owlChild.$owl){var n=l._items&&l._items.length;n&&n<=l.$owlChild.currentSlideIndex&&(l.$owlChild.currentSlideIndex=n),l.$owlChild.$owl.css("display","block")}l.$owlChild.initOwl()},0)},l.prototype.refresh=function(){this.trigger("refresh.owl.carousel")},l.prototype.next=function(l){this.trigger("next.owl.carousel",l)},l.prototype.previous=function(l){this.trigger("prev.owl.carousel",l)},l.prototype.to=function(l){this.trigger("to.owl.carousel",l)},l.prototype.trigger=function(l,n){this.$owlChild.trigger(l,n)},e([i.ViewChild("owl"),u("design:type",o.OwlChild)],l.prototype,"$owlChild",void 0),e([i.Input(),u("design:type",Object)],l.prototype,"carouselClasses",void 0),e([i.Input(),u("design:type",Object)],l.prototype,"options",void 0),e([i.Input(),u("design:type",Array),u("design:paramtypes",[Array])],l.prototype,"items",null),e([i.Component({selector:"owl-carousel",template:'<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" ><ng-content></ng-content></owl-carousel-child>'})],l)}()},WzYf:function(l,n,t){var e=t("mrSG").__decorate,u=t("mrSG").__metadata,i=t("CcnG");n.OwlChild=function(){function l(l){this.el=l,this.owlClass=!0,this.options={},"undefined"==typeof $&&"undefined"!=typeof jQuery&&($=jQuery)}return l.prototype.ngOnInit=function(){"undefined"!=typeof window&&$&&"function"==typeof $.fn.owlCarousel&&(this.$owl=$(this.el.nativeElement))},l.prototype.ngAfterViewInit=function(){this.initOwl()},l.prototype.initOwl=function(){var l=this;if(this.$owl){var n={};Object.assign(n,this.options),this.currentSlideIndex&&(n.startPosition=this.currentSlideIndex),this.$owl.owlCarousel(n),this.$owl.on("changed.owl.carousel",function(n){l.currentSlideIndex=n.item.index})}},l.prototype.trigger=function(l,n){this.$owl&&this.$owl.trigger(l,n)},l.prototype.ngOnDestroy=function(){this.destroyOwl(),delete this.$owl},l.prototype.destroyOwl=function(){this.$owl&&this.$owl.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-hidden").find(".owl-stage:empty, .owl-item:empty").remove()},e([i.HostBinding("class.owl-carousel"),u("design:type",Object)],l.prototype,"owlClass",void 0),e([i.Input(),u("design:type",Object)],l.prototype,"options",void 0),e([i.Component({selector:"owl-carousel-child",template:"<ng-content></ng-content>"})],l)}()},bjCr:function(l,n,t){var e=t("mrSG").__decorate,u=t("CcnG"),i=t("Ip0R"),o=t("26NW"),a=t("WzYf");!function(l){for(var t in l)n.hasOwnProperty(t)||(n[t]=l[t])}(t("26NW")),n.OwlModule=function(){return e([u.NgModule({imports:[i.CommonModule],declarations:[o.OwlCarousel,a.OwlChild],exports:[o.OwlCarousel]})],function(){})}()},h8ua:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("/08d"),a=t("4GxJ"),r=t("ejb8"),s=t("WzYf"),c=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function d(l){return e["\u0275vid"](0,[e["\u0275ncd"](null,0)],null,null)}var p=t("Ip0R"),h=t("26NW"),g=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function m(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{$owlChild:0}),(l()(),e["\u0275eld"](1,0,null,null,3,"owl-carousel-child",[],[[2,"owl-carousel",null]],null,null,d,c)),e["\u0275did"](2,278528,null,0,p.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275did"](3,4440064,[[1,4],["owl",4]],0,s.OwlChild,[e.ElementRef],{options:[0,"options"]},null),e["\u0275ncd"](0,0)],function(l,n){var t=n.component;l(n,2,0,t.carouselClasses),l(n,3,0,t.options)},function(l,n){l(n,1,0,e["\u0275nov"](n,3).owlClass)})}var f=t("ZYCi"),b=function(l,n,t){this.toRotate=n,this.el=l,this.loopNum=0,this.period=parseInt(t,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1},v=function(){function l(){this.navTabs={flights:!0,hotels:!1,cars:!1,cruises:!1}}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.loadTypeWriter();for(var l=document.getElementsByClassName("typewrite"),n=0;n<l.length;n++){var t=l[n].getAttribute("data-type"),e=l[n].getAttribute("data-period");t&&new b(l[n],JSON.parse(t),e)}var u=document.createElement("style");u.type="text/css",u.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #325189; color: #325189; font-size: 60px;}",document.body.appendChild(u)},l.prototype.toggleTab=function(l){for(var n in this.navTabs)this.navTabs[n]=l===n},l.prototype.loadTypeWriter=function(){b.prototype.tick=function(){var l=this.toRotate[this.loopNum%this.toRotate.length];this.txt=l.substring(0,this.isDeleting?this.txt.length-1:this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,t=200-100*Math.random();this.isDeleting&&(t/=2),this.isDeleting||this.txt!==l?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,t=500):(t=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},t)}},l}(),x=e["\u0275crt"]({encapsulation:0,styles:[['.tab-list[_ngcontent-%COMP%]{margin:0;width:100%}.tab-list[_ngcontent-%COMP%]   .tab-navs[_ngcontent-%COMP%]{padding:0;margin:0;display:inline-block;vertical-align:top;font-weight:700;font-size:1rem;line-height:20px;text-transform:none;border:none;border-radius:0;background-color:#395c9c}@media (min-width:0px) and (max-width:321px){.tab-list[_ngcontent-%COMP%]   .tab-navs[_ngcontent-%COMP%]{font-weight:400;font-size:11px}}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{display:block;position:relative;white-space:nowrap;margin:0;border:none;background:0 0;font-weight:700;color:#fff;padding:13px 30px 14px 60px;cursor:pointer}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] + .tab[_ngcontent-%COMP%]{margin-left:0;margin-bottom:1px}@media (min-width:768px){.tab-list[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] + .tab[_ngcontent-%COMP%]{margin-left:1px;margin-bottom:0}}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;left:20px;top:13px;font-size:18px}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .fa-plane[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.tab-list[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .fa-car[_ngcontent-%COMP%]{font-size:20px}.container-content[_ngcontent-%COMP%]{background-color:#fff;padding:3rem 2rem 2rem 1.5rem;border-bottom:.5rem solid #325189}.container-content[_ngcontent-%COMP%]   div.wrapper-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem}.typewrite[_ngcontent-%COMP%] > .wrap[_ngcontent-%COMP%]{position:relative}.typewrite[_ngcontent-%COMP%] > .wrap[_ngcontent-%COMP%]:after{position:absolute;top:0;bottom:12px;right:-5px;width:4px;content:"";background:#395c9c}.btn-contact[_ngcontent-%COMP%]{color:#fff;padding:15px;border-radius:5px;-webkit-animation:3s ease-in 1s infinite twinkle;animation:3s ease-in 1s infinite twinkle}.btn-contact[_ngcontent-%COMP%]:hover{background:#103881;transition-duration:.4s}@-webkit-keyframes twinkle{0%{box-shadow:3px 3px 5px 6px #ccc;background:#446ab1}50%{box-shadow:none;background:#557cc4}100%{box-shadow:3px 3px 5px 6px #ccc;background:#5d8ce2}}@keyframes twinkle{0%{box-shadow:3px 3px 5px 6px #ccc;background:#446ab1}50%{box-shadow:none;background:#557cc4}100%{box-shadow:3px 3px 5px 6px #ccc;background:#5d8ce2}}']],data:{}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","wrapper-content d-none d-sm-block"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,3,"h1",[["class","mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["T\xf4i mu\u1ed1n "])),(l()(),e["\u0275eld"](5,0,null,null,1,"strong",[["class","typewrite"],["data-period","4000"],["data-type",'[ "\u0110i du l\u1ecbch.", "Kh\xe1m ph\xe1.", "M\u1edf mang t\u1ea7m m\u1eaft.", "\u0110\u1ebfn v\u1edbi th\u1ebf gi\u1edbi." ]']],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,0,"span",[["class","wrap"],["style","border-right: splid 1px black !important;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,5,"div",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"button",[["class","btn btn-contact mt-2 text-uppercase font-weight-bold"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,9).onClick()&&u),u},null,null)),e["\u0275did"](9,16384,null,0,f.o,[f.n,f.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](10,1),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","fas fa-hand-point-right mr-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Li\xean l\u1ea1c ngay!"]))],function(l,n){var t=l(n,10,0,"/contact");l(n,9,0,t)},null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,5,"div",[["class","tab-list"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,4,"ul",[["class","tab-navs w-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,3,"li",[["class","tab flights d-md-inline-block"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggleTab("flights")&&e),e},null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"i",[["class","fas fa-luggage-cart"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"a",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["H\xe3y \u0111\u1ebfn v\u1edbi Ph\u01b0\u01a1ng B\xecnh Tourist"])),(l()(),e["\u0275eld"](8,0,null,null,2,"div",[["class","container container-content"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](10,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,10,0,n.component.navTabs.flights)},null)}var C=t("gYN0"),k=t("ZYjt"),_=t("mrSG"),O=t("6233"),M=t("CqG3"),I=function(l){function n(n,t){var e=l.call(this,n,t,"home")||this;return e.angularFireDatabase=n,e.angularFirestore=t,e}return _.__extends(n,l),n}(t("Do2H").a),P=t("c3RY"),$=function(){function l(l,n,t){this.seoService=l,this.homeService=n,this.tourService=t,this.happyDescribe="B\u1ea1n bi\u1ebft \u0111\u1ea5y, tu\u1ed5i tr\u1ebb v\xe0 s\u1ef1 t\u1ef1 do kh\xf4ng th\u1ec3 k\xe9o d\xe0i m\xe3i m\xe3i, ch\xednh v\xec th\u1ebf, \u0111\u1ed9 tu\u1ed5i 20 ch\xednh l\xe0 th\u1eddi \u0111i\u1ec3m l\xfd t\u01b0\u1edfng \u0111\u1ec3 d\u1ea5n th\xe2n v\xe0o nh\u1eefng cu\u1ed9c phi\xeau l\u01b0u v\xe0 nh\u1eefng chuy\u1ebfn \u0111i t\u1edbi c\xe1c v\xf9ng \u0111\u1ea5t xa x\xf4i. B\u1ea1n s\u1ebd \u0111\xfac k\u1ebft \u0111\u01b0\u1ee3c v\xf4 s\u1ed1 kinh nghi\u1ec7m v\xe0 nh\u1eefng tr\u1ea3i nghi\u1ec7m \u0111\xe1ng nh\u1edb t\u1ea1i nhi\u1ec1u n\u01a1i hoang d\xe3 m\xe0 su\u1ed1t \u0111\u1eddi b\u1ea1n s\u1ebd kh\xf4ng th\u1ec3 qu\xean. H\xe3y xem nh\u1eefng g\u1ee3i \xfd \u0111i\u1ec3m \u0111\u1ebfn tr\u01b0\u1edbc khi tu\u1ed5i 30 t\u1edbi nh\xe9!",this.contentTemp1="H\xe3y \u0111i du l\u1ecbch ngay khi ch\xfang ta c\xf2n c\xf3 th\u1ec3, thanh xu\xe2n l\xe0 \u0111i \u0111\xe2y \u0111i \u0111\xf3 \u0111\u1ec3 kh\xf4ng h\u1ed1i ti\u1ebfc tu\u1ed5i tr\u1ebb c\u1ee7a m\xecnh.",this.tip="M\u1ed9t c\xf4ng ty mu\u1ed1n ph\xe1t tri\u1ec3n th\xec d\u1ecbch v\u1ee5 ph\u1ea3i lu\xf4n \u0111i \u0111\u1ea7u, v\xec v\u1eady ch\xfang t\xf4i lu\xf4n lu\xf4n \u0111\u1ec1 cao ch\u1ea5t l\u01b0\u1ee3ng ph\u1ee5c v\u1ee5 \u0111\u1ec3 mang t\u1edbi qu\xfd kh\xe1ch h\xe0ng nh\u1eefng tr\u1ea3i nghi\u1ec7m t\u1ed1t nh\u1ea5t.",this.tip1="Khao kh\xe1t ch\xe1y b\u1ecfng \u0111\u01b0\u1ee3c \u0111i du l\u1ecbch trong m\xf9a h\xe8 n\xe0y, nh\u01b0ng kh\xf4ng bi\u1ebft n\xean b\u1eaft \u0111\u1ea7u t\u1eeb \u0111\xe2u ho\u1eb7c l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 chuy\u1ebfn \u0111i ch\u01a1i th\u1ef1c s\u1ef1 th\xfa v\u1ecb v\xe0 \u1ea5n t\u01b0\u1ee3ng.",this.tip2="Du l\u1ecbch kh\xe1m ph\xe1 l\xe0 kh\xe1i ni\u1ec7m kh\xe1 m\u1edbi m\u1ebb \u1edf Vi\u1ec7t Nam nh\u01b0ng r\u1ea5t ph\u1ed5 bi\u1ebfn tr\xean to\xe0n th\u1ebf gi\u1edbi.",this.tip3="B\u1ea1n ch\u1ec9 vi\u1ec7c g\u1eedi cho ch\xfang t\xf4i nh\u1eefng g\xec b\u1ea1n mu\u1ed1n, vi\u1ec7c c\xf2n l\u1ea1i h\xe3y \u0111\u1ec3 ch\xfang t\xf4i lo, li\xean h\u1ec7 ngay \u0111\u1ec3 \u0111\u01b0\u1ee3c t\u01b0 v\u1ea5n v\u1ec1 nh\u1eefng chuy\u1ebfn \u0111i tuy\u1ec7t v\u1eddi.",this.tip4="H\u1ec7 th\u1ed1ng ch\u0103m s\xf3c kh\xe1ch h\xe0ng lu\xf4n ho\u1ea1t \u0111\u1ed9ng 24/7 s\u1eb5n s\xe0ng ph\u1ea3n h\u1ed3i b\u1ea5t c\u1ee9 khi n\xe0o qu\xfd kh\xe1ch c\xf3 th\u1eafc m\u1eafc.",this.partnerImagesUrl=[{origin:"assets/images/partners/partner1.jpg",hover:"assets/images/partners/partner1_hover.jpg"},{origin:"assets/images/partners/partner2.jpg",hover:"assets/images/partners/partner2_hover.jpg"},{origin:"assets/images/partners/partner3.jpg",hover:"assets/images/partners/partner3_hover.jpg"},{origin:"assets/images/partners/partner4.jpg",hover:"assets/images/partners/partner4_hover.jpg"},{origin:"assets/images/partners/partner5.jpg",hover:"assets/images/partners/partner5_hover.jpg"},{origin:"assets/images/partners/partner6.jpg",hover:"assets/images/partners/partner6_hover.jpg"}],this.homes=[],this.happyPlace=[{name:"Ph\xfa Qu\u1ed1c",percent:93},{name:"V\u0169ng T\xe0u",percent:83},{name:"C\u1ea7n Th\u01a1",percent:65},{name:"\u0110\xe0 N\u1eb5ng",percent:72}],this.customOptions={margin:20,loop:!0,dots:!0,center:!1,slideBy:1,autoplay:!0,dotsEach:!0,responsive:{0:{items:1},660:{items:2},920:{items:3}}},this.alls=this.homeService.getAlls()}return l.prototype.ngOnInit=function(){var l=this,n=this.tourService.getAlls().subscribe(function(t){l.tours=t.map(function(l){return{id:l.id,name:l.name,describe:l.describe,daytime:l.daytime,image:l.images.thumbnail.link}}),l.tourDemo=l.tours[0],n.unsubscribe()});this.alls&&this.alls.subscribe(function(n){l.homes=n;var t=n[0];l.seoService.generateTags({title:t.title,description:t.description,slug:t.slug,keywords:t.keywords})})},l}(),j=e["\u0275crt"]({encapsulation:2,styles:[[".home-page{height:auto;width:100%;background:#fff}.container-background{height:300px;background:url(/assets/images/background-beach-2.jpg) center/cover no-repeat;margin-bottom:0}@media (min-width:768px){.container-background{height:80vh}.app-search{margin-top:-47px}}@media (min-width:990px){.container-background{height:calc(100vh - 88px)}}@media (min-width:0px) and (max-width:321px){.container-background{height:220px}}@media (min-width:990px){.app-search{margin-top:-245px}}.about-us{margin-bottom:50px}.about-us .title1{font-size:42px}.about-us .title2{text-align:center;padding-top:15px}.about-us .title2 .txt1{font-size:21px}.about-us .title2 .txt2{color:#959595}.about-us .title2 .txt3{color:#395c9c}.about-us .caption{margin-bottom:15px;color:#000}.about-us .caption .icon{font-size:50px;display:flex;justify-content:center;transition:all .5s}.about-us .caption .title2{text-align:center;padding-top:15px}.about-us .caption .title2 .txt1{font-size:21px;transition:all .5s}.about-us .caption .title2 .txt2{color:#959595;margin-bottom:10px}.about-us .caption .title2 .txt3{color:#395c9c}.about-us .caption:hover{cursor:pointer}.about-us .caption:hover .icon,.about-us .caption:hover .txt1{color:#395c9c}.parallax{padding:80px 0;height:auto;width:100%;position:relative}.parallax .bg-parallax{width:100%;height:100%;left:0;top:0;position:absolute;background-image:url(/assets/images/background-beach.jpg);background-repeat:repeat-y;background-attachment:fixed;background-size:cover}.parallax .parallax-content{color:#fff}.parallax .parallax-content .btn{display:flex;align-items:center}.parallax .parallax-content .btn a.btn-detail{display:block;color:#fff;transition:all .3s;border:none;font-size:14px;font-weight:700;padding:15px 10px;text-decoration:none;border-radius:5px;box-shadow:3px 3px 0 0 rgba(0,0,0,.2) inset;text-transform:uppercase;background:#395c9c;position:relative;text-align:center;width:100%}.parallax .parallax-content .btn a.btn-detail:hover{background:#819dcf}.parallax .parallax-content h3.txt1{font-size:40px;font-weight:800;color:#fff799}.tour-card-des{text-align:center;font-size:1.2rem;color:#959595;padding-bottom:30px}.tour-card-title{font-weight:600;font-size:2.6rem;color:#464646;background:0 0;line-height:1.1;padding:50px 0 20px;margin:10px 0;position:relative;text-align:center;text-transform:uppercase}button.owl-dot{width:15px;height:15px;background:#e1e1e1!important;outline:0;border-radius:50%;border:2px solid #fff!important;margin:0 2px}button.owl-dot.active{background:#fff!important;border:2px solid #395c9c!important}.owl-dots{display:flex;align-items:center;justify-content:center;margin:20px 0}.happy{background:url(/assets/images/happy.png) center center/cover no-repeat;padding-top:50px;margin-top:50px;font-size:14px;color:#fff}.happy .happy_left img{max-width:100%;display:block;margin-top:70px}.happy .happy_right>h1{font-size:42px}.happy .happy_right>.describe{font-size:18px}.happy .happy_right>.distance{padding-bottom:20px}.happy .happy_right>.distance>.txt{font-weight:700;padding-bottom:4px}.happy .happy_right>.distance>.distance_percent{height:10px;border-radius:3px;background-color:#fff}.happy .happy_right>.distance>.distance_percent>.percent{position:relative;height:100%;border-radius:2px;background-image:linear-gradient(to right,#0c2655,#395c9c)}.happy .happy_right>.distance>.distance_percent>.percent span{position:absolute;top:-25px;right:-10px;font-weight:700}.partners{padding:50px 0}.partners .partners-item>a{position:relative;display:block;width:100%;height:auto;margin:15px 0}.partners .partners-item>a .original{display:block;max-width:100%;width:100%;opacity:1;transition:all .6s}.partners .partners-item>a .hover{display:block;position:absolute;max-width:100%;width:100%;height:100%;top:0;left:0;opacity:0;transition:all .6s}.partners .partners-item>a:hover .original{opacity:0}.partners .partners-item>a:hover .hover{opacity:1}.blur-bg{background:rgba(0,0,0,.6)}"]],data:{}});function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"tour-card",[],null,null,null,o.b,o.a)),e["\u0275prd"](512,null,a.H,a.H,[]),e["\u0275did"](2,114688,null,0,r.a,[a.H],{tour:[0,"tour"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"owl-carousel",[],null,null,null,m,g)),e["\u0275did"](1,311296,[["owlElement",4]],0,h.OwlCarousel,[e.IterableDiffers],{options:[0,"options"]},null),(l()(),e["\u0275and"](16777216,null,0,1,null,D)),e["\u0275did"](3,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,t.customOptions),l(n,3,0,t.tours)},null)}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","distance"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","txt"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "])),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","distance_percent"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,4,"div",[["class","percent"]],null,null,null,null,null)),e["\u0275did"](5,278528,null,0,p.NgStyle,[e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](6,{width:0}),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""]))],function(l,n){var t=l(n,6,0,n.context.$implicit.percent+"%");l(n,5,0,t)},function(l,n){l(n,2,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.percent)})}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","col-sm-4 col-lg-2 col-6 partners-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,0,"img",[["alt",""],["class","original"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt",""],["class","hover"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,2,0,n.context.$implicit.origin),l(n,3,0,n.context.$implicit.hover)})}function N(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{bgContainer:0}),(l()(),e["\u0275eld"](1,0,[[1,0],["background",1]],null,0,"div",[["class","container-background"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","app-search"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"app-search",[],null,null,null,y,x)),e["\u0275did"](4,4308992,null,0,v,[],null,null),(l()(),e["\u0275eld"](5,0,null,null,84,"div",[["class","home-page"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,43,"div",[["class","about-us"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,42,"div",[["class","why"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,41,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"h2",[["class","tour-card-title mt-0 text-uppercase"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["d\u1ecbch v\u1ee5 t\u1ed1t nh\u1ea5t"])),(l()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","tour-card-des"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[""," "])),(l()(),e["\u0275eld"](13,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,8,"div",[["class","col-lg-3 col-sm-6 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,7,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"div",[["class","icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"i",[["class","fal fa-plane-departure"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,4,"div",[["class","title2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"h3",[["class","txt1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Chuy\u1ebfn \u0111i th\xfa v\u1ecb"])),(l()(),e["\u0275eld"](21,0,null,null,1,"p",[["class","txt2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,["",""])),(l()(),e["\u0275eld"](23,0,null,null,8,"div",[["class","col-lg-3 col-sm-6 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,7,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"div",[["class","icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"i",[["class","fas fa-paper-plane"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,4,"div",[["class","title2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,1,"h3",[["class","txt1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Kh\xe1m ph\xe1"])),(l()(),e["\u0275eld"](30,0,null,null,1,"p",[["class","txt2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](31,null,["",""])),(l()(),e["\u0275eld"](32,0,null,null,8,"div",[["class","col-lg-3 col-sm-6 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,7,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"div",[["class","icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"i",[["class","fal fa-flag-checkered"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,4,"div",[["class","title2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,1,"h3",[["class","txt1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\u0110\u1eb7t v\xe9"])),(l()(),e["\u0275eld"](39,0,null,null,1,"p",[["class","txt2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](40,null,["",""])),(l()(),e["\u0275eld"](41,0,null,null,8,"div",[["class","col-lg-3 col-sm-6 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,7,"div",[["class","caption"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"div",[["class","icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,0,"i",[["class","fal fa-comments"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,4,"div",[["class","title2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,1,"h3",[["class","txt1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["H\u1ed7 tr\u1ee3 t\u1ed1t"])),(l()(),e["\u0275eld"](48,0,null,null,1,"p",[["class","txt2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](49,null,["",""])),(l()(),e["\u0275eld"](50,0,null,null,15,"div",[["class","parallax"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"div",[["class","bg-parallax"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,0,"div",[["class","blur-bg h-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,12,"div",[["class","parallax-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,4,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"h3",[["class","txt1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](58,null,["",""])),(l()(),e["\u0275eld"](59,0,null,null,1,"p",[["class","txt2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](60,null,["",""])),(l()(),e["\u0275eld"](61,0,null,null,4,"div",[["class","col-sm-2 btn"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,3,"a",[["class","btn-detail"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,63).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](63,671744,null,0,f.p,[f.n,f.a,p.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](64,1),(l()(),e["\u0275ted"](-1,null,["T\xecm hi\u1ec3u th\xeam!"])),(l()(),e["\u0275eld"](66,0,null,null,6,"div",[["class","tour-card container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,1,"h2",[["class","tour-card-title text-uppercase text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["c\xe1c g\xf3i du l\u1ecbch h\u1ea5p d\u1eabn"])),(l()(),e["\u0275eld"](69,0,null,null,1,"div",[["class","tour-card-des text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](70,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](72,16384,null,0,p.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](73,0,null,null,11,"div",[["class","happy"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,9,"div",[["class","row happy_content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,1,"div",[["class","col-lg-6 col-sm-12 happy_left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](77,0,null,null,0,"img",[["alt",""],["src","../../../assets/images/travel.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](78,0,null,null,6,"div",[["class","col-lg-6 col-sm-12 happy_right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,1,"h1",[["class","pb-4 text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["X\xc1CH BA L\xd4 L\xcaN V\xc0 \u0110I"])),(l()(),e["\u0275eld"](81,0,null,null,1,"p",[["class","text-justify describe"]],null,null,null,null,null)),(l()(),e["\u0275ted"](82,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](84,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](85,0,null,null,4,"div",[["class","partners"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](87,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](89,278528,null,0,p.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0);var e=l(n,64,0,"/place/"+(null==t.tourDemo?null:t.tourDemo.id));l(n,63,0,e),l(n,72,0,t.tours),l(n,84,0,t.happyPlace),l(n,89,0,t.partnerImagesUrl)},function(l,n){var t=n.component;l(n,12,0,t.tip),l(n,22,0,t.tip1),l(n,31,0,t.tip2),l(n,40,0,t.tip3),l(n,49,0,t.tip4),l(n,58,0,null==t.tourDemo?null:t.tourDemo.name),l(n,60,0,null==t.tourDemo?null:t.tourDemo.describe),l(n,62,0,e["\u0275nov"](n,63).target,e["\u0275nov"](n,63).href),l(n,70,0,t.contentTemp1),l(n,82,0,t.happyDescribe)})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"home",[],null,null,null,N,j)),e["\u0275prd"](512,null,C.a,C.a,[k.j,k.k,k.c]),e["\u0275prd"](512,null,I,I,[O.a,M.a]),e["\u0275prd"](512,null,P.a,P.a,[O.a,M.a]),e["\u0275did"](4,114688,null,0,$,[C.a,I,P.a],null,null)],function(l,n){l(n,4,0)},null)}var F=e["\u0275ccf"]("home",$,S,{},{},[]),L=t("9AJC"),H=t("gIcY"),E=function(){return function(){}}(),G=t("8T6J"),V=t("GaB4"),A=t("bjCr"),q=t("cxti"),W=function(){return function(){}}();t.d(n,"HomeModuleNgFactory",function(){return B});var B=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,F,L.b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[e.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,H.w,H.w,[]),e["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),e["\u0275mpd"](1073742336,f.q,f.q,[[2,f.w],[2,f.n]]),e["\u0275mpd"](1073742336,E,E,[]),e["\u0275mpd"](1073742336,a.I,a.I,[]),e["\u0275mpd"](1073742336,G.a,G.a,[]),e["\u0275mpd"](1073742336,V.a,V.a,[]),e["\u0275mpd"](1073742336,A.OwlModule,A.OwlModule,[]),e["\u0275mpd"](1073742336,H.u,H.u,[]),e["\u0275mpd"](1073742336,H.i,H.i,[]),e["\u0275mpd"](1073742336,a.q,a.q,[]),e["\u0275mpd"](1073742336,q.a,q.a,[]),e["\u0275mpd"](1073742336,W,W,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,f.l,function(){return[[{path:"",component:$}]]},[])])})}}]);