"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[2097],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4712:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var n=a(7462),r=(a(7294),a(3905));const l=a.p+"assets/images/changing-model-463caa4edb38a25d6bf5e3ba53e259d4.png",i=a.p+"assets/images/sync-button-c88d14db7f7edb6ae074174739f66858.png";var o=a(7620),p=a(5394);const s={sidebar_position:2},m="Models",d={unversionedId:"ai-engine/openai/gpt-models",id:"ai-engine/openai/gpt-models",title:"Models",description:"AI Power supports OpenAI GPT-3, GPT-3.5, GPT-4, and o1 models.",source:"@site/docs/ai-engine/openai/gpt-models.mdx",sourceDirName:"ai-engine/openai",slug:"/ai-engine/openai/gpt-models",permalink:"/docs/ai-engine/openai/gpt-models",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ai-engine/openai/gpt-models.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Key",permalink:"/docs/ai-engine/openai/api-key"},next:{title:"Temperature",permalink:"/docs/ai-engine/openai/temperature"}},u={},g=[{value:"GPT-4o",id:"gpt-4o",level:2},{value:"GPT-4",id:"gpt-4",level:2},{value:"o1 Models (Beta)",id:"o1-models-beta",level:2},{value:"GPT-3.5",id:"gpt-35",level:2},{value:"Model Configuration",id:"model-configuration",level:2},{value:"Changing a Model",id:"changing-a-model",level:3},{value:"Syncing with the Latest OpenAI Models",id:"syncing-with-the-latest-openai-models",level:3},{value:"Rate Limit Buffer",id:"rate-limit-buffer",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Content Writing",id:"content-writing",level:3},{value:"Chat Bots",id:"chat-bots",level:3}],k={toc:g},c="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"models"},"Models"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AI Power")," supports OpenAI ",(0,r.kt)("strong",{parentName:"p"},"GPT-3"),", ",(0,r.kt)("strong",{parentName:"p"},"GPT-3.5"),", ",(0,r.kt)("strong",{parentName:"p"},"GPT-4"),", and ",(0,r.kt)("strong",{parentName:"p"},"o1")," models."),(0,r.kt)("h2",{id:"gpt-4o"},"GPT-4o"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Training Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4o"),(0,r.kt)("td",{parentName:"tr",align:null},"High-intelligence flagship model for complex, multi-step tasks."),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null},"Oct 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4o-mini"),(0,r.kt)("td",{parentName:"tr",align:null},"Affordable and intelligent small model for fast, lightweight tasks. GPT-4o mini is cheaper and more capable than GPT-3.5 Turbo."),(0,r.kt)("td",{parentName:"tr",align:null},"16,384"),(0,r.kt)("td",{parentName:"tr",align:null},"Oct 2023")))),(0,r.kt)("h2",{id:"gpt-4"},"GPT-4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Training Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4"),(0,r.kt)("td",{parentName:"tr",align:null},"More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Still in beta."),(0,r.kt)("td",{parentName:"tr",align:null},"8,192"),(0,r.kt)("td",{parentName:"tr",align:null},"Sep 2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-turbo"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest GPT-4 model with improved instruction following. Returns a maximum of 4,096 output tokens."),(0,r.kt)("td",{parentName:"tr",align:null},"128,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Apr 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-32k"),(0,r.kt)("td",{parentName:"tr",align:null},"Same capabilities as the base gpt-4 mode but with 4x the context length."),(0,r.kt)("td",{parentName:"tr",align:null},"32,768"),(0,r.kt)("td",{parentName:"tr",align:null},"Up to Sep 2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-vision"),(0,r.kt)("td",{parentName:"tr",align:null},"Ability to understand images, in addition to all other GPT-4 Turbo capabilities. Returns a maximum of 4,096 output tokens."),(0,r.kt)("td",{parentName:"tr",align:null},"128,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Apr 2023")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"GPT-4 is currently in limited beta, which means that access to the GPT-4 API from OpenAI is available only through a waiting list and is not open to everyone yet. You can sign up for the waiting list ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/waitlist/gpt-4-api"},"here"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have GPT-4 API access and select GPT-4 or GPT-4-32K, you will get an error: ",(0,r.kt)("em",{parentName:"p"},'"The model: gpt-4 does not exist"')," or ",(0,r.kt)("em",{parentName:"p"},'"The model: gpt-4-32k does not exist"'),".")),(0,r.kt)("h2",{id:"o1-models-beta"},"o1 Models (Beta)"),(0,r.kt)("p",null,"The o1 series of large language models are designed with reinforcement learning to perform complex reasoning tasks. "),(0,r.kt)("p",null,"These models think before answering, producing a long internal chain of thought to solve challenging problems."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Context window"),(0,r.kt)("th",{parentName:"tr",align:null},"Max output tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Training data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"o1-preview"),(0,r.kt)("td",{parentName:"tr",align:null},"A reasoning model designed to solve hard problems across multiple domains. Points to the most recent snapshot of the o1 model."),(0,r.kt)("td",{parentName:"tr",align:null},"128,000 tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"32,768 tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Up to Oct 2023")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"o1-mini"),(0,r.kt)("td",{parentName:"tr",align:null},"A faster and cheaper reasoning model, particularly good at coding, math, and science. Points to the most recent o1-mini snapshot."),(0,r.kt)("td",{parentName:"tr",align:null},"128,000 tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"65,536 tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"Up to Oct 2023")))),(0,r.kt)("p",null,"The o1 models are currently in beta with limited features. "),(0,r.kt)("p",null,"Access is restricted to users in ",(0,r.kt)("strong",{parentName:"p"},"tier 5")," (check your usage tier ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/rate-limits/usage-tiers"},"here"),"), with low rate limits. "),(0,r.kt)("p",null,"OpenAI is working on adding more features, increasing rate limits, and expanding access to more users in the coming weeks."),(0,r.kt)("p",null,"During the beta phase, several chat completion API parameters and features are not yet available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modalities:")," Text only. Images are not supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Message types:")," Only user and assistant messages are supported. System messages are not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Streaming:")," Not supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tools:")," Function calling, tools, and response format parameters are not supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logprobs:")," Not supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Other API parameters:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"temperature"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top_p"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," are fixed at ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"presence_penalty")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"frequency_penalty")," are fixed at ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assistants and Batch:")," These models are not supported in the Assistants API or Batch API.")),(0,r.kt)("h2",{id:"gpt-35"},"GPT-3.5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Training Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo"),(0,r.kt)("td",{parentName:"tr",align:null},"Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003."),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null},"Sep 2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-16k"),(0,r.kt)("td",{parentName:"tr",align:null},"Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context."),(0,r.kt)("td",{parentName:"tr",align:null},"16,384"),(0,r.kt)("td",{parentName:"tr",align:null},"Sep 2021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-instruct"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar capabilities as text-davinci-003 but compatible with legacy Completions endpoint and not Chat Completions."),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null},"Sep 2021")))),(0,r.kt)("h2",{id:"model-configuration"},"Model Configuration"),(0,r.kt)("p",null,"When our plugin is installed for the first time, it comes with ",(0,r.kt)("strong",{parentName:"p"},"gpt-3.5-turbo")," as the default model. You can change it by selecting it from the ",(0,r.kt)("strong",{parentName:"p"},"Model")," dropdown in the ",(0,r.kt)("strong",{parentName:"p"},"AI Engine")," tab."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"Express Mode")," in Content Writer and ",(0,r.kt)("strong",{parentName:"p"},"Auto Content Writer")," both use the models set in the ",(0,r.kt)("strong",{parentName:"p"},"Settings - AI Engine")," tab. Any changes made here will apply to both modules.")),(0,r.kt)("h3",{id:"changing-a-model"},"Changing a Model"),(0,r.kt)("p",null,"Here are the steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the plugin menu on your WordPress dashboard."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Dashboard")," page and look for the ",(0,r.kt)("strong",{parentName:"li"},"AI Settings")," tab.")),(0,r.kt)("img",{src:l,width:"700"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Model")," dropdown menu to see the available GPT models."),(0,r.kt)("li",{parentName:"ul"},"Select your desired model.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have GPT-4 API access and select GPT-4 or GPT-4-32K, you will get an error: ",(0,r.kt)("em",{parentName:"p"},'"The model: gpt-4 does not exist"')," or ",(0,r.kt)("em",{parentName:"p"},'"The model: gpt-4-32k does not exist"'),".")),(0,r.kt)("h3",{id:"syncing-with-the-latest-openai-models"},"Syncing with the Latest OpenAI Models"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," button next to the model dropdown to synchronize the plugin with the latest OpenAI models. If OpenAI releases a new model, you can use this button to update the plugin."),(0,r.kt)("img",{src:i}),(0,r.kt)("p",null,"If your organization has fine-tuned any models, you can find them under the Model dropdown."),(0,r.kt)("img",{src:o.Z}),(0,r.kt)("h3",{id:"rate-limit-buffer"},"Rate Limit Buffer"),(0,r.kt)("p",null,"Our plugin has a Rate Limit Buffer to manage API requests efficiently. This feature allows you to set a delay (1 to 30 seconds) between API calls to avoid rate limit errors from OpenAI."),(0,r.kt)("img",{src:p.Z}),(0,r.kt)("p",null,"We recommend starting with a 1-second delay and increasing it if needed."),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"For different tasks, different GPT models may be more suitable:"),(0,r.kt)("h3",{id:"content-writing"},"Content Writing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPT-3.5 Turbo"),": Most capable GPT-3.5 model, cost-effective."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPT-4"),": More capable than any GPT-3.5 model, able to do more complex tasks.")),(0,r.kt)("h3",{id:"chat-bots"},"Chat Bots"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPT-3.5 Turbo"),": Optimized for chat and cost-effective."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPT-4"),": More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat.")),(0,r.kt)("p",null,"Choose the model that best fits your needs in terms of capabilities, cost, and availability."))}h.isMDXComponent=!0},7620:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fine-tuned-models-bb727533a132cfa7d49a9af839ec754f.png"},5394:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/rate-limit-buffer-baef32368f0047c8a5573761f857dc49.png"}}]);