"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[774],{8774:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var s=a(6252),i=a(3577);const n=e=>((0,s.dD)("data-v-74aa5bc7"),e=e(),(0,s.Cn)(),e),l={class:"p-container"},r={class:"p-container_inner"},d={style:{display:"none"}},c={class:"css-article"},g={class:"css-grid"},u={href:"javascript:"},o={class:"css-flex"},p=(0,s.uE)('<div class="css-thumb" data-v-74aa5bc7><div class="css-abs" data-v-74aa5bc7><div class="css-rad" data-v-74aa5bc7><div class="css-im" data-v-74aa5bc7><img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg" data-v-74aa5bc7></div></div></div></div><span class="cat" data-v-74aa5bc7>뉴스</span>',2),C=n((()=>(0,s._)("time",null,"2022.03.19",-1)));function h(e,t,a,n,h,k){const P=(0,s.up)("PageTitle"),f=(0,s.up)("paginate");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s._)("div",d,[(0,s.Wm)(P,{title:"데이터 전달"})]),(0,s._)("div",c,[(0,s._)("ul",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(k.getItems,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id},[(0,s._)("a",u,[(0,s._)("div",o,[p,(0,s._)("h4",null,[(0,s._)("span",null,"포켓몬빵 줄이 길어질 때, OO은 웃고 있다? "+(0,i.zw)(e.id),1)]),C])])])))),128))]),(0,s.Wm)(f,{"page-count":k.getPaginateCount,"page-range":3,"margin-pages":2,"click-handler":k.paginateClickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},null,8,["page-count","click-handler"])])])])}a(7658);function k(e,t,a,n,l,r){return(0,s.wg)(),(0,s.iD)("h2",null,(0,i.zw)(a.title),1)}var P={props:{title:{type:String,default:"페이지 제목 입니다."}}},f=a(3744);const b=(0,f.Z)(P,[["render",k]]);var x=b,v=a(2664),y={components:{PageTitle:x,paginate:v.Z},data:function(){return{items:[],currentPage:1,perPage:3}},created:function(){for(let e=1;e<=10;e++)this.items.push({id:e,name:"name_"+e})},computed:{getItems:function(){let e=(this.currentPage-1)*this.perPage,t=this.currentPage*this.perPage;return this.items.slice(e,t)},getPaginateCount:function(){return Math.ceil(this.items.length/this.perPage)}},methods:{paginateClickCallback:function(e){this.currentPage=Number(e)}}};const w=(0,f.Z)(y,[["render",h],["__scopeId","data-v-74aa5bc7"]]);var L=w},2664:function(e,t,a){a.d(t,{Z:function(){return b}});var s=a(6252),i=a(3577),n=a(9963),l=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a};const r={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){let e={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let a={index:t,content:t+1,selected:t===this.selected-1};e[t]=a}else{const t=Math.floor(this.pageRange/2);let a=t=>{let a={index:t,content:t+1,selected:t===this.selected-1};e[t]=a},s=t=>{let a={disabled:!0,breakView:!0};e[t]=a};for(let e=0;e<this.marginPages;e++)a(e);let i=0;this.selected-t>0&&(i=this.selected-1-t);let n=i+this.pageRange-1;n>=this.pageCount&&(n=this.pageCount-1,i=n-this.pageRange+1);for(let e=i;e<=n&&e<=this.pageCount-1;e++)a(e);i>this.marginPages&&s(i-1),n+1<this.pageCount-this.marginPages&&s(n+1);for(let e=this.pageCount-1;e>=this.pageCount-this.marginPages;e--)a(e)}return e}},methods:{handlePageSelected(e){this.selected!==e&&(this.innerValue=e,this.$emit("update:modelValue",e),this.clickHandler(e))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return 1===this.selected},lastPageSelected(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},d=["tabindex","innerHTML"],c=["tabindex","innerHTML"],g=["onClick","onKeyup"],u=["tabindex","innerHTML"],o=["tabindex","innerHTML"],p=["innerHTML"],C=["innerHTML"],h=["onClick","onKeyup"],k=["innerHTML"],P=["innerHTML"];function f(e,t,a,l,r,f){return a.noLiSurround?((0,s.wg)(),(0,s.iD)("div",{key:1,class:(0,i.C_)(a.containerClass)},[a.firstLastButton?((0,s.wg)(),(0,s.iD)("a",{key:0,onClick:t[8]||(t[8]=e=>f.selectFirstPage()),onKeyup:t[9]||(t[9]=(0,n.D2)((e=>f.selectFirstPage()),["enter"])),class:(0,i.C_)([a.pageLinkClass,f.firstPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.firstButtonText},null,42,p)):(0,s.kq)("",!0),f.firstPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:1,onClick:t[10]||(t[10]=e=>f.prevPage()),onKeyup:t[11]||(t[11]=(0,n.D2)((e=>f.prevPage()),["enter"])),class:(0,i.C_)([a.prevLinkClass,f.firstPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.prevText},null,42,C)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.pages,(t=>((0,s.wg)(),(0,s.iD)(s.HY,null,[t.breakView?((0,s.wg)(),(0,s.iD)("a",{key:t.index,class:(0,i.C_)([a.pageLinkClass,a.breakViewLinkClass,t.disabled?a.disabledClass:""]),tabindex:"0"},[(0,s.WI)(e.$slots,"breakViewContent",{},(()=>[(0,s.Uk)((0,i.zw)(a.breakViewText),1)]))],2)):t.disabled?((0,s.wg)(),(0,s.iD)("a",{key:t.index,class:(0,i.C_)([a.pageLinkClass,t.selected?a.activeClass:"",a.disabledClass]),tabindex:"0"},(0,i.zw)(t.content),3)):((0,s.wg)(),(0,s.iD)("a",{key:t.index,onClick:e=>f.handlePageSelected(t.index+1),onKeyup:(0,n.D2)((e=>f.handlePageSelected(t.index+1)),["enter"]),class:(0,i.C_)([a.pageLinkClass,t.selected?a.activeClass:""]),tabindex:"0"},(0,i.zw)(t.content),43,h))],64)))),256)),f.lastPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:t[12]||(t[12]=e=>f.nextPage()),onKeyup:t[13]||(t[13]=(0,n.D2)((e=>f.nextPage()),["enter"])),class:(0,i.C_)([a.nextLinkClass,f.lastPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.nextText},null,42,k)),a.firstLastButton?((0,s.wg)(),(0,s.iD)("a",{key:3,onClick:t[14]||(t[14]=e=>f.selectLastPage()),onKeyup:t[15]||(t[15]=(0,n.D2)((e=>f.selectLastPage()),["enter"])),class:(0,i.C_)([a.pageLinkClass,f.lastPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.lastButtonText},null,42,P)):(0,s.kq)("",!0)],2)):((0,s.wg)(),(0,s.iD)("ul",{key:0,class:(0,i.C_)(a.containerClass)},[a.firstLastButton?((0,s.wg)(),(0,s.iD)("li",{key:0,class:(0,i.C_)([a.pageClass,f.firstPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[0]||(t[0]=e=>f.selectFirstPage()),onKeyup:t[1]||(t[1]=(0,n.D2)((e=>f.selectFirstPage()),["enter"])),class:(0,i.C_)(a.pageLinkClass),tabindex:f.firstPageSelected()?-1:0,innerHTML:a.firstButtonText},null,42,d)],2)):(0,s.kq)("",!0),f.firstPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",{key:1,class:(0,i.C_)([a.prevClass,f.firstPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[2]||(t[2]=e=>f.prevPage()),onKeyup:t[3]||(t[3]=(0,n.D2)((e=>f.prevPage()),["enter"])),class:(0,i.C_)(a.prevLinkClass),tabindex:f.firstPageSelected()?-1:0,innerHTML:a.prevText},null,42,c)],2)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.pages,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.index,class:(0,i.C_)([a.pageClass,t.selected?a.activeClass:"",t.disabled?a.disabledClass:"",t.breakView?a.breakViewClass:""])},[t.breakView?((0,s.wg)(),(0,s.iD)("a",{key:0,class:(0,i.C_)([a.pageLinkClass,a.breakViewLinkClass]),tabindex:"0"},[(0,s.WI)(e.$slots,"breakViewContent",{},(()=>[(0,s.Uk)((0,i.zw)(a.breakViewText),1)]))],2)):t.disabled?((0,s.wg)(),(0,s.iD)("a",{key:1,class:(0,i.C_)(a.pageLinkClass),tabindex:"0"},(0,i.zw)(t.content),3)):((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:e=>f.handlePageSelected(t.index+1),onKeyup:(0,n.D2)((e=>f.handlePageSelected(t.index+1)),["enter"]),class:(0,i.C_)(a.pageLinkClass),tabindex:"0"},(0,i.zw)(t.content),43,g))],2)))),128)),f.lastPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",{key:2,class:(0,i.C_)([a.nextClass,f.lastPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[4]||(t[4]=e=>f.nextPage()),onKeyup:t[5]||(t[5]=(0,n.D2)((e=>f.nextPage()),["enter"])),class:(0,i.C_)(a.nextLinkClass),tabindex:f.lastPageSelected()?-1:0,innerHTML:a.nextText},null,42,u)],2)),a.firstLastButton?((0,s.wg)(),(0,s.iD)("li",{key:3,class:(0,i.C_)([a.pageClass,f.lastPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[6]||(t[6]=e=>f.selectLastPage()),onKeyup:t[7]||(t[7]=(0,n.D2)((e=>f.selectLastPage()),["enter"])),class:(0,i.C_)(a.pageLinkClass),tabindex:f.lastPageSelected()?-1:0,innerHTML:a.lastButtonText},null,42,o)],2)):(0,s.kq)("",!0)],2))}var b=l(r,[["render",f]])}}]);
//# sourceMappingURL=774.7653dbd5.js.map