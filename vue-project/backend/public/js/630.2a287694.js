"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[630],{5630:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(6252),i=a(3577),n=a(9963);const l={class:"p-container"},r={class:"p-container_inner"},d={role:"tablist",class:"flex overflow-x-auto overflow-y-hidden mb-[60px]"},g=["onClick"],c={class:"bod-list"},o={class:"box-cont"},u={class:"box-img"},p={class:"box-rel"},C={class:"box-abs"},h={class:"img-css"},k=["src"];function b(e,t,a,b,x,f){const P=(0,s.up)("router-link"),y=(0,s.up)("paginate");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.tabList,((e,t)=>((0,s.wg)(),(0,s.iD)("a",{href:"javascript:",class:(0,i.C_)(["mr-[30px] text-[30px] text-gray-500 font-bold hover:text-gray-900",{"text-gray-900":x.currentTab===t}]),key:t},[(0,s._)("span",{href:"#",onClick:(0,n.iM)((e=>x.currentTab=t),["prevent"])},(0,i.zw)(e),9,g)],2)))),128))]),(0,s._)("ul",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.getItems,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s.Wm)(P,{to:{path:"/bodView",query:{id:e.numx}},class:"bod-container"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("span",null,(0,i.zw)(e.cate),1),(0,s._)("h4",null,(0,i.zw)(e.coxt),1),(0,s._)("p",null,(0,i.zw)(e.feed),1),(0,s._)("time",null,(0,i.zw)(e.time),1)]),(0,s._)("div",u,[(0,s._)("div",p,[(0,s._)("div",C,[(0,s._)("div",h,[(0,s._)("img",{src:"http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/"+e.imgs,"aria-hidden":"true",alt:""},null,8,k)])])])])])),_:2},1032,["to"])])))),128))]),(0,s.Wm)(y,{"page-count":f.getPaginateCount,"page-range":3,"margin-pages":2,"click-handler":f.paginateClickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},null,8,["page-count","click-handler"])])])}var x=a(2664),f={components:{paginate:x.Z},data(){return{currentTab:0,tabList:["전체","공지사항","채용공고","사업보고","R&D리포트","보도자료"],items:[],currentPage:1,perPage:1}},created(){this.getList()},computed:{getItems:function(){let e=(this.currentPage-1)*this.perPage,t=this.currentPage*this.perPage;return this.items.slice(e,t)},getPaginateCount:function(){return Math.ceil(this.items.length/this.perPage)}},methods:{activate:function(e){this.active_el=e},async getList(){this.items=await this.$api("https://nohyoungjin.github.io/apitest/db.json","get")},paginateClickCallback:function(e){this.currentPage=Number(e)}}},P=a(3744);const y=(0,P.Z)(f,[["render",b],["__scopeId","data-v-5e64183c"]]);var w=y},2664:function(e,t,a){a.d(t,{Z:function(){return f}});var s=a(6252),i=a(3577),n=a(9963),l=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a};const r={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){let e={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let a={index:t,content:t+1,selected:t===this.selected-1};e[t]=a}else{const t=Math.floor(this.pageRange/2);let a=t=>{let a={index:t,content:t+1,selected:t===this.selected-1};e[t]=a},s=t=>{let a={disabled:!0,breakView:!0};e[t]=a};for(let e=0;e<this.marginPages;e++)a(e);let i=0;this.selected-t>0&&(i=this.selected-1-t);let n=i+this.pageRange-1;n>=this.pageCount&&(n=this.pageCount-1,i=n-this.pageRange+1);for(let e=i;e<=n&&e<=this.pageCount-1;e++)a(e);i>this.marginPages&&s(i-1),n+1<this.pageCount-this.marginPages&&s(n+1);for(let e=this.pageCount-1;e>=this.pageCount-this.marginPages;e--)a(e)}return e}},methods:{handlePageSelected(e){this.selected!==e&&(this.innerValue=e,this.$emit("update:modelValue",e),this.clickHandler(e))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return 1===this.selected},lastPageSelected(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},d=["tabindex","innerHTML"],g=["tabindex","innerHTML"],c=["onClick","onKeyup"],o=["tabindex","innerHTML"],u=["tabindex","innerHTML"],p=["innerHTML"],C=["innerHTML"],h=["onClick","onKeyup"],k=["innerHTML"],b=["innerHTML"];function x(e,t,a,l,r,x){return a.noLiSurround?((0,s.wg)(),(0,s.iD)("div",{key:1,class:(0,i.C_)(a.containerClass)},[a.firstLastButton?((0,s.wg)(),(0,s.iD)("a",{key:0,onClick:t[8]||(t[8]=e=>x.selectFirstPage()),onKeyup:t[9]||(t[9]=(0,n.D2)((e=>x.selectFirstPage()),["enter"])),class:(0,i.C_)([a.pageLinkClass,x.firstPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.firstButtonText},null,42,p)):(0,s.kq)("",!0),x.firstPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:1,onClick:t[10]||(t[10]=e=>x.prevPage()),onKeyup:t[11]||(t[11]=(0,n.D2)((e=>x.prevPage()),["enter"])),class:(0,i.C_)([a.prevLinkClass,x.firstPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.prevText},null,42,C)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.pages,(t=>((0,s.wg)(),(0,s.iD)(s.HY,null,[t.breakView?((0,s.wg)(),(0,s.iD)("a",{key:t.index,class:(0,i.C_)([a.pageLinkClass,a.breakViewLinkClass,t.disabled?a.disabledClass:""]),tabindex:"0"},[(0,s.WI)(e.$slots,"breakViewContent",{},(()=>[(0,s.Uk)((0,i.zw)(a.breakViewText),1)]))],2)):t.disabled?((0,s.wg)(),(0,s.iD)("a",{key:t.index,class:(0,i.C_)([a.pageLinkClass,t.selected?a.activeClass:"",a.disabledClass]),tabindex:"0"},(0,i.zw)(t.content),3)):((0,s.wg)(),(0,s.iD)("a",{key:t.index,onClick:e=>x.handlePageSelected(t.index+1),onKeyup:(0,n.D2)((e=>x.handlePageSelected(t.index+1)),["enter"]),class:(0,i.C_)([a.pageLinkClass,t.selected?a.activeClass:""]),tabindex:"0"},(0,i.zw)(t.content),43,h))],64)))),256)),x.lastPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:t[12]||(t[12]=e=>x.nextPage()),onKeyup:t[13]||(t[13]=(0,n.D2)((e=>x.nextPage()),["enter"])),class:(0,i.C_)([a.nextLinkClass,x.lastPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.nextText},null,42,k)),a.firstLastButton?((0,s.wg)(),(0,s.iD)("a",{key:3,onClick:t[14]||(t[14]=e=>x.selectLastPage()),onKeyup:t[15]||(t[15]=(0,n.D2)((e=>x.selectLastPage()),["enter"])),class:(0,i.C_)([a.pageLinkClass,x.lastPageSelected()?a.disabledClass:""]),tabindex:"0",innerHTML:a.lastButtonText},null,42,b)):(0,s.kq)("",!0)],2)):((0,s.wg)(),(0,s.iD)("ul",{key:0,class:(0,i.C_)(a.containerClass)},[a.firstLastButton?((0,s.wg)(),(0,s.iD)("li",{key:0,class:(0,i.C_)([a.pageClass,x.firstPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[0]||(t[0]=e=>x.selectFirstPage()),onKeyup:t[1]||(t[1]=(0,n.D2)((e=>x.selectFirstPage()),["enter"])),class:(0,i.C_)(a.pageLinkClass),tabindex:x.firstPageSelected()?-1:0,innerHTML:a.firstButtonText},null,42,d)],2)):(0,s.kq)("",!0),x.firstPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",{key:1,class:(0,i.C_)([a.prevClass,x.firstPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[2]||(t[2]=e=>x.prevPage()),onKeyup:t[3]||(t[3]=(0,n.D2)((e=>x.prevPage()),["enter"])),class:(0,i.C_)(a.prevLinkClass),tabindex:x.firstPageSelected()?-1:0,innerHTML:a.prevText},null,42,g)],2)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.pages,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.index,class:(0,i.C_)([a.pageClass,t.selected?a.activeClass:"",t.disabled?a.disabledClass:"",t.breakView?a.breakViewClass:""])},[t.breakView?((0,s.wg)(),(0,s.iD)("a",{key:0,class:(0,i.C_)([a.pageLinkClass,a.breakViewLinkClass]),tabindex:"0"},[(0,s.WI)(e.$slots,"breakViewContent",{},(()=>[(0,s.Uk)((0,i.zw)(a.breakViewText),1)]))],2)):t.disabled?((0,s.wg)(),(0,s.iD)("a",{key:1,class:(0,i.C_)(a.pageLinkClass),tabindex:"0"},(0,i.zw)(t.content),3)):((0,s.wg)(),(0,s.iD)("a",{key:2,onClick:e=>x.handlePageSelected(t.index+1),onKeyup:(0,n.D2)((e=>x.handlePageSelected(t.index+1)),["enter"]),class:(0,i.C_)(a.pageLinkClass),tabindex:"0"},(0,i.zw)(t.content),43,c))],2)))),128)),x.lastPageSelected()&&a.hidePrevNext?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",{key:2,class:(0,i.C_)([a.nextClass,x.lastPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[4]||(t[4]=e=>x.nextPage()),onKeyup:t[5]||(t[5]=(0,n.D2)((e=>x.nextPage()),["enter"])),class:(0,i.C_)(a.nextLinkClass),tabindex:x.lastPageSelected()?-1:0,innerHTML:a.nextText},null,42,o)],2)),a.firstLastButton?((0,s.wg)(),(0,s.iD)("li",{key:3,class:(0,i.C_)([a.pageClass,x.lastPageSelected()?a.disabledClass:""])},[(0,s._)("a",{onClick:t[6]||(t[6]=e=>x.selectLastPage()),onKeyup:t[7]||(t[7]=(0,n.D2)((e=>x.selectLastPage()),["enter"])),class:(0,i.C_)(a.pageLinkClass),tabindex:x.lastPageSelected()?-1:0,innerHTML:a.lastButtonText},null,42,u)],2)):(0,s.kq)("",!0)],2))}var f=l(r,[["render",x]])}}]);
//# sourceMappingURL=630.2a287694.js.map