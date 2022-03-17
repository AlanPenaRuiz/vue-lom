(function(){"use strict";var e={3031:function(e,t,o){var n=o(9242),s=o(3396);const r=(0,s._)("button",{class:"button-footer"},"Home",-1);function a(e,t){const o=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[r])),_:1}),(0,s.Wm)(n)],64)}var i=o(89);const c={},l=(0,i.Z)(c,[["render",a]]);var u=l,h=o(678),d=o(7139);const m={class:"container-main"},w=(0,s.Uk)(" main "),p={class:"container-game"},f=(0,s._)("div",{class:"game-header"},[(0,s._)("h1",null,"LOM")],-1),v={class:"game-question"},g={class:"game-answers"},b=["onClick"],_={key:0,class:"fas fa-check"},y={key:1,class:"fas fa-times"},k=(0,s._)("h2",null,"Score",-1),M={class:"btn-reset"},C=(0,s.Uk)(" Restart "),H=(0,s._)("i",{class:"fas fa-sync-alt"},null,-1),O=[C,H],q=(0,s.Uk)(" Show Score "),S=(0,s._)("i",{class:"fas fa-sync-alt"},null,-1),x=[q,S];function R(e,t,o,r,a,i){const c=(0,s.up)("EventModal");return(0,s.wg)(),(0,s.iD)("div",m,[w,(0,s.wy)((0,s.Wm)(c,{header:a.ModalHeader,subheader:a.ModalSubHeader,score:a.score,progress:a.questions.length,win:a.win,onClose:t[0]||(t[0]=e=>a.showModal=!1),onReset:i.reset},null,8,["header","subheader","score","progress","win","onReset"]),[[n.F8,a.showModal]]),(0,s._)("div",p,[f,(0,s._)("div",{class:"progress",style:(0,d.j5)({width:a.progress+"%"})},null,4),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.questions.slice(a.x,a.y),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"game-main",key:t},[(0,s._)("div",v,[(0,s._)("h2",null,"Question "+(0,d.zw)(a.y)+"/"+(0,d.zw)(a.questions.length),1),(0,s._)("p",null,(0,d.zw)(e.question),1)]),(0,s._)("div",g,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.answers,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:(0,d.C_)(["li",a.correct?i.check(e):""]),onClick:o=>i.selectAnswer(e,t)},[(0,s.Uk)((0,d.zw)(e.answer)+" ",1),a.correct&&e.correct?((0,s.wg)(),(0,s.iD)("div",_)):(0,s.kq)("",!0),a.correct&&!e.correct?((0,s.wg)(),(0,s.iD)("div",y)):(0,s.kq)("",!0)],10,b)))),128))])])])))),128)),(0,s._)("div",{class:(0,d.C_)(["game-score",a.isHovering&&a.win?"borderGreen":""]),onMouseover:t[1]||(t[1]=e=>a.isHovering=!0),onMouseout:t[2]||(t[2]=e=>a.isHovering=!1)},[k,(0,s._)("h2",null,(0,d.zw)(a.score)+"/"+(0,d.zw)(a.questions.length),1)],34),(0,s._)("div",M,[a.showReset?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"button-footer",onClick:t[3]||(t[3]=(...e)=>i.reset&&i.reset(...e))},O)):(0,s.kq)("",!0),a.ShowModalBtn?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"button-footer",onClick:t[4]||(t[4]=(...e)=>i.openModal&&i.openModal(...e))},x)):(0,s.kq)("",!0)])])])}var j=o(6265),z=o.n(j);const D=z().create({baseURL:"https://my-json-server.typicode.com/AlanPenaRuiz/vue-lom",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var B={getEvents(){return D.get("/db")}};const L={class:"modal-mask"},T={class:"modal-wrapper"},A={class:"modal-header"},U={class:"modal-body"},Y={id:"score"},E=(0,s.Uk)(" Correct answers "),P={class:"remark"},W=(0,s.Uk)(" questions. "),Z={class:"modal-footer"};function F(e,t,o,r,a,i){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"modal"},{default:(0,s.w5)((()=>[(0,s._)("div",L,[(0,s._)("div",T,[(0,s._)("div",{class:(0,d.C_)(["modal-container",o.win?"backgroundGood":"backgroundBad"])},[(0,s._)("div",A,[(0,s._)("h2",null,(0,d.zw)(o.header),1),(0,s._)("h3",null,(0,d.zw)(o.subheader),1)]),(0,s._)("div",U,[(0,s._)("div",Y,[E,(0,s._)("span",P,(0,d.zw)(o.score)+" out of "+(0,d.zw)(o.progress),1),W])]),(0,s._)("div",Z,[(0,s._)("button",{id:"play-again",class:"button-footer",onClick:t[0]||(t[0]=t=>e.$emit("reset"))}," Play Again "),(0,s._)("button",{id:"close-button",class:"button-footer",onClick:t[1]||(t[1]=t=>e.$emit("close"))}," Close ")])],2)])])])),_:1})}var G={name:"EventModal",props:{header:String,subheader:String,score:Number,progress:Number,win:Boolean}};const $=(0,i.Z)(G,[["render",F],["__scopeId","data-v-5c54614f"]]);var N=$,Q={name:"CardView",components:{EventModal:N},data(){return{questions:[],x:0,y:1,select:!1,score:0,correct:!1,progress:0,next:!0,showReset:!1,showModal:!1,ShowModalBtn:!1,win:!1,isHovering:!1,ModalHeader:"You Lose",ModalSubHeader:"Humanity will be exterminated!"}},created(){B.getEvents().then((e=>{this.questions=e.data.results})).catch((e=>{console.log(e),this.$router.push({name:"404Resource",params:{resource:"event"}})}))},methods:{selectAnswer(e){this.select=!0,this.next=!1,this.correct=!0,e.correct&&this.score++,setTimeout((()=>{this.nextQuestion()}),3e3)},check(e){return e.correct?"correct":"incorrect"},nextQuestion(){this.next||(this.progress=this.progress+100/this.questions.length,this.x++,this.y++,this.select=!1,this.correct=!1)},openModal(){this.score>=.7*this.questions.length&&(this.ModalHeader="Congratulations!",this.ModalSubHeader="You have saved humanity!",this.win=!0),this.showModal=!0},reset(){Object.assign(this.$data,this.initialState())},initialState(){return{x:0,y:1,select:!1,score:0,correct:!1,progress:0,next:!0,showReset:!1,showModal:!1,ShowModalBtn:!1,win:!1,ModalHeader:"You Lose",ModalSubHeader:"Humanity will be exterminated!"}}},watch:{progress:function(e){this.score>=.7*this.questions.length&&(this.win=!0),e>=100&&(this.showReset=!0,this.ShowModalBtn=!0,this.openModal())}}};const V=(0,i.Z)(Q,[["render",R]]);var I=V;const K={class:"container-main"},J={class:"container-game container-home"},X=(0,s._)("h1",null,"Last chance for humanity",-1),ee=(0,s._)("p",null," Many years ago, the world became dominated by machines after the most ferocious war humanity had ever seen. Right now, you are one of the few humans who stays alive, and the leader of the machines (a.k.a. LOM) brings you the opportunity to travel back in time to the moment when everything changed. It is up to you to please LOM to earn another chance for humanity. LOM only ask you to do one thing: Build a program that tests the human's value. ",-1),te=(0,s._)("p",null,[(0,s._)("b",null,"You need to get at least 7 answers right ")],-1),oe=(0,s._)("button",{class:"btn btn-home"},"START",-1);function ne(e,t,o,n,r,a){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("div",J,[X,ee,te,(0,s.Wm)(i,{to:"/Game"},{default:(0,s.w5)((()=>[oe])),_:1})])])}var se={name:"HomeView"};const re=(0,i.Z)(se,[["render",ne]]);var ae=re;const ie={class:"notFound"},ce=(0,s._)("h1",null,"Oops!",-1),le=(0,s._)("button",{class:"button-footer"},"Back to home",-1);function ue(e,t,o,n,r,a){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",ie,[ce,(0,s._)("h3",null,"The "+(0,d.zw)(o.resource)+" you're looking for is not here.",1),(0,s.Wm)(i,{to:{name:"home"}},{default:(0,s.w5)((()=>[le])),_:1})])}var he={props:{resource:{type:String,requires:!0,default:"page"}}};const de=(0,i.Z)(he,[["render",ue]]);var me=de;const we=[{path:"/",name:"home",component:ae},{path:"/Game",name:"CardView",component:I},{path:"/:catchAll(.*)",name:"NotFound",component:me},{path:"/404/:resource",name:"404Resource",component:me,props:!0}],pe=(0,h.p7)({history:(0,h.PO)("/"),routes:we});var fe=pe;(0,n.ri)(u).use(fe).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,a=n[0],i=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var u=c(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkvue_loa_cathedral"]=self["webpackChunkvue_loa_cathedral"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3031)}));n=o.O(n)})();
//# sourceMappingURL=app.7eb5b35d.js.map