"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[1791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o=n.p+"assets/images/top_p-50355728eae774a3e206ceeb364036a4.png",a={sidebar_position:9},p="Top_P",l={unversionedId:"ai-engine/openai/top-p",id:"ai-engine/openai/top-p",title:"Top_P",description:"What is Top_P?",source:"@site/docs/ai-engine/openai/top-p.mdx",sourceDirName:"ai-engine/openai",slug:"/ai-engine/openai/top-p",permalink:"/docs/ai-engine/openai/top-p",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ai-engine/openai/top-p.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Presence Penalty",permalink:"/docs/ai-engine/openai/presence-penalty"},next:{title:"Usage Policy",permalink:"/docs/ai-engine/openai/usage"}},s={},u=[{value:"What is Top_P?",id:"what-is-top_p",level:2},{value:"Adjusting the Top_P Setting",id:"adjusting-the-top_p-setting",level:2},{value:"Balancing Diversity in GPT Text Generation",id:"balancing-diversity-in-gpt-text-generation",level:2},{value:"Summary",id:"summary",level:3}],c={toc:u},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"top_p"},"Top_P"),(0,i.kt)("h2",{id:"what-is-top_p"},"What is Top_P?"),(0,i.kt)("p",null,"Top_P, also known as nucleus sampling, controls the diversity of the generated text by only considering tokens with the highest probability mass."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Top_P = 0.1"),": Only tokens within the top 10% probability are considered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Top_P = 0.9"),": Considers tokens within the top 90% probability.")),(0,i.kt)("p",null,"OpenAI recommends using either temperature sampling or nucleus sampling, but not both."),(0,i.kt)("h2",{id:"adjusting-the-top_p-setting"},"Adjusting the Top_P Setting"),(0,i.kt)("p",null,"The default Top_P value is ",(0,i.kt)("strong",{parentName:"p"},"0.01"),". You can change it in the ",(0,i.kt)("strong",{parentName:"p"},"AI Settings")," tab."),(0,i.kt)("p",null,"Steps to change the Top_P:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the plugin menu on your WordPress dashboard."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Dashboard")," page and find the ",(0,i.kt)("strong",{parentName:"li"},"AI Settings")," tab."),(0,i.kt)("li",{parentName:"ol"},"Enter a new value in the ",(0,i.kt)("strong",{parentName:"li"},"Top_P")," field.")),(0,i.kt)("img",{src:o}),(0,i.kt)("h2",{id:"balancing-diversity-in-gpt-text-generation"},"Balancing Diversity in GPT Text Generation"),(0,i.kt)("p",null,"Top_P controls how many of the highest-probability words are included in the generated text."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lower Top_P value"),": More diverse text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Higher Top_P value"),': More repetitive or "safe" text.')),(0,i.kt)("p",null,"Increasing Top_P makes the model produce more conservative text by considering only the most probable outcomes, leading to less diversity. A lower Top_P value makes the model take more risks, generating more diverse text but with a higher chance of nonsensical sentences."),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Higher Top_P"),": Generates safer, more repetitive text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lower Top_P"),": Generates more diverse, riskier text.")),(0,i.kt)("p",null,'Adjust the Top_P parameter to control the level of "risk" the model takes when generating text.'))}m.isMDXComponent=!0}}]);