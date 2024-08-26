"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||y[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/fp-5c623823cea03bfa3fc7499f493b7075.png",l={sidebar_position:7},o="Frequency Penalty",s={unversionedId:"ai-engine/openai/frequency-penalty",id:"ai-engine/openai/frequency-penalty",title:"Frequency Penalty",description:"What is Frequency Penalty?",source:"@site/docs/ai-engine/openai/frequency-penalty.mdx",sourceDirName:"ai-engine/openai",slug:"/ai-engine/openai/frequency-penalty",permalink:"/docs/ai-engine/openai/frequency-penalty",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ai-engine/openai/frequency-penalty.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Maximum Length",permalink:"/docs/ai-engine/openai/max-tokens"},next:{title:"Presence Penalty",permalink:"/docs/ai-engine/openai/presence-penalty"}},p={},u=[{value:"What is Frequency Penalty?",id:"what-is-frequency-penalty",level:2},{value:"Adjusting the Frequency Penalty",id:"adjusting-the-frequency-penalty",level:2},{value:"Frequency Penalty&#39;s Impact on Generated Text Diversity",id:"frequency-penaltys-impact-on-generated-text-diversity",level:2},{value:"Differences Between Frequency and Presence Penalty",id:"differences-between-frequency-and-presence-penalty",level:2}],c={toc:u},y="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequency-penalty"},"Frequency Penalty"),(0,a.kt)("h2",{id:"what-is-frequency-penalty"},"What is Frequency Penalty?"),(0,a.kt)("p",null,"Frequency Penalty ranges from ",(0,a.kt)("strong",{parentName:"p"},"-2.0")," to ",(0,a.kt)("strong",{parentName:"p"},"2.0")," and affects how the model penalizes new tokens based on their frequency in the text."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Positive values"),": Decrease the likelihood of repeating the same lines by penalizing frequent tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Negative values"),": Increase the likelihood of repetition.")),(0,a.kt)("p",null,"For reducing repetition slightly, values between ",(0,a.kt)("strong",{parentName:"p"},"0.1 to 1")," are typical. Higher values up to ",(0,a.kt)("strong",{parentName:"p"},"2")," can significantly suppress repetition but may lower sample quality."),(0,a.kt)("h2",{id:"adjusting-the-frequency-penalty"},"Adjusting the Frequency Penalty"),(0,a.kt)("p",null,"The default Frequency Penalty is ",(0,a.kt)("strong",{parentName:"p"},"0.01"),". You can change it in the ",(0,a.kt)("strong",{parentName:"p"},"AI Engine")," tab."),(0,a.kt)("p",null,"Steps to change the Frequency Penalty:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the plugin menu on your WordPress dashboard."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," page and find the ",(0,a.kt)("strong",{parentName:"li"},"AI Engine")," tab."),(0,a.kt)("li",{parentName:"ol"},"Enter a new value in the ",(0,a.kt)("strong",{parentName:"li"},"Frequency Penalty")," field.")),(0,a.kt)("img",{src:i,width:"700"}),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button.")),(0,a.kt)("h2",{id:"frequency-penaltys-impact-on-generated-text-diversity"},"Frequency Penalty's Impact on Generated Text Diversity"),(0,a.kt)("p",null,'Frequency Penalty controls the "diversity" of the generated text.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Higher values"),": Encourage novel or less common words."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lower values"),": Keep text more similar to training data.")),(0,a.kt)("p",null,"Values between 0 and 1 balance familiar and novel words. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"0"),": No penalty, usual behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1"),": Generates entirely novel or random text.")),(0,a.kt)("p",null,"Use higher values for more diverse and less repetitive text."),(0,a.kt)("h2",{id:"differences-between-frequency-and-presence-penalty"},"Differences Between Frequency and Presence Penalty"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Frequency Penalty"),": Penalizes words seen frequently during training."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presence Penalty"),": Penalizes words present in the input text.")),(0,a.kt)("p",null,"Both increase text diversity but in different ways. Depending on your needs, you might use one or both."),(0,a.kt)("p",null,"Frequency Penalty modifies the probability of words seen frequently during training, making them less likely. Presence Penalty modifies the probability of words in the input text, making them less likely to repeat in the output."),(0,a.kt)("p",null,"Using both can help control the diversity and novelty of the generated text."))}d.isMDXComponent=!0}}]);