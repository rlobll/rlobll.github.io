if(!self.define){let i,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,r)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let u={};const s=i=>e(i,o),m={module:{uri:o},exports:u,require:s};n[o]=Promise.all(l.map((i=>m[i]||s(i)))).then((i=>(r(...i),u)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"jam_on"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.ff35bd1e.css",revision:null},{url:"/img/bedding.4a9c6fad.jpeg",revision:null},{url:"/img/bedding_inner_img.c5190ac6.jpeg",revision:null},{url:"/img/jam_on_best_1.8c7bc1b8.jpeg",revision:null},{url:"/img/jam_on_best_2.16535f06.jpeg",revision:null},{url:"/img/jam_on_best_3.57eb66a2.jpeg",revision:null},{url:"/img/jam_on_kakao.995c6a35.png",revision:null},{url:"/img/jam_on_main_1.7cc429f0.jpeg",revision:null},{url:"/img/jam_on_main_2.bc35b496.jpeg",revision:null},{url:"/img/jam_on_main_3.6b112411.jpeg",revision:null},{url:"/img/jam_on_main_4.f7496bd9.jpeg",revision:null},{url:"/img/jam_on_mat_1.bcd39c86.jpeg",revision:null},{url:"/img/jam_on_mat_2.cf1a9571.jpeg",revision:null},{url:"/img/jam_on_mat_3.34083ab4.jpeg",revision:null},{url:"/img/jam_on_mat_4.b3c70213.jpeg",revision:null},{url:"/img/jam_on_price_1.6debbbab.gif",revision:null},{url:"/img/jam_on_price_2.83d21b90.gif",revision:null},{url:"/img/jam_on_smain_1.78fb21f9.jpeg",revision:null},{url:"/img/jam_on_smain_2.6249aa72.jpeg",revision:null},{url:"/img/jam_on_smain_3.e89f7372.jpeg",revision:null},{url:"/img/jam_on_smain_4.b9adbfdc.jpeg",revision:null},{url:"/img/summer.6dba74d2.jpeg",revision:null},{url:"/img/winter_1.6f00bb42.jpeg",revision:null},{url:"/img/winter_2.28ef62c2.jpeg",revision:null},{url:"/img/winter_3.7f175911.jpeg",revision:null},{url:"/img/winter_4.1541b441.jpeg",revision:null},{url:"/img/winter_5.88ad4b5a.jpeg",revision:null},{url:"/img/winter_6.193a95fb.jpeg",revision:null},{url:"/img/winter_7.34083ab4.jpeg",revision:null},{url:"/img/winter_8.0d316c28.jpeg",revision:null},{url:"/index.html",revision:"d084da4a85860d935363c9f984b9a86c"},{url:"/js/app.dc6c306b.js",revision:null},{url:"/js/chunk-vendors.ef165526.js",revision:null},{url:"/manifest.json",revision:"d2aee6a136aea6bfdcb2b35c1b15f33f"},{url:"/pillow.ico",revision:"61c410d11dea53204b2fa2c8ea19cc91"},{url:"/pillow.png",revision:"353b9cb537bf9fd26c39fa3090842db2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
