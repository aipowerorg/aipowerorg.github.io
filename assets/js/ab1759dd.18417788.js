"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[6505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i=a.p+"assets/images/temperature-ea62c9ee7ca3684075826db2b0bd6a1b.png",o={sidebar_position:5},l="Temperature",p={unversionedId:"ai-engine/openai/temperature",id:"ai-engine/openai/temperature",title:"Temperature",description:"What is Temperature?",source:"@site/docs/ai-engine/openai/temperature.mdx",sourceDirName:"ai-engine/openai",slug:"/ai-engine/openai/temperature",permalink:"/docs/ai-engine/openai/temperature",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/ai-engine/openai/temperature.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/docs/ai-engine/openai/gpt-models"},next:{title:"Maximum Length",permalink:"/docs/ai-engine/openai/max-tokens"}},s={},u=[{value:"What is Temperature?",id:"what-is-temperature",level:2},{value:"Adjusting the Temperature Setting",id:"adjusting-the-temperature-setting",level:2},{value:"Balancing Predictability and Creativity",id:"balancing-predictability-and-creativity",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Low Temperature (0.2)",id:"example-1-low-temperature-02",level:3},{value:"Example 2: Medium Temperature (0.6)",id:"example-2-medium-temperature-06",level:3},{value:"Example 3: High Temperature (1.0)",id:"example-3-high-temperature-10",level:3},{value:"Comparison",id:"comparison",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"temperature"},"Temperature"),(0,n.kt)("h2",{id:"what-is-temperature"},"What is Temperature?"),(0,n.kt)("p",null,"Temperature controls the randomness in GPT's output. It helps you achieve different results."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Low Temperature"),": GPT chooses words with higher probability. Useful for completing sentences with a single correct answer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Temperature"),": Generates more varied responses. Useful for generating ideas or telling stories.")),(0,n.kt)("p",null,"Remember, temperature is not the same as creativity. It only controls randomness. OpenAI recommends changing either temperature or top_p, but not both."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Understanding temperature can help you get the results you want. Spend time adjusting it to find the best setting for your needs.")),(0,n.kt)("h2",{id:"adjusting-the-temperature-setting"},"Adjusting the Temperature Setting"),(0,n.kt)("p",null,"The default temperature is ",(0,n.kt)("strong",{parentName:"p"},"0.7"),". You can change it in the ",(0,n.kt)("strong",{parentName:"p"},"AI Engine")," tab."),(0,n.kt)("p",null,"Steps to change the temperature:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the plugin menu on your WordPress dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," page and find the ",(0,n.kt)("strong",{parentName:"li"},"AI Engine")," tab."),(0,n.kt)("li",{parentName:"ol"},"Enter a new value in the ",(0,n.kt)("strong",{parentName:"li"},"Temperature")," field.")),(0,n.kt)("img",{src:i,width:"700"}),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Save")," button.")),(0,n.kt)("p",null,"The temperature range is ",(0,n.kt)("strong",{parentName:"p"},"0")," to ",(0,n.kt)("strong",{parentName:"p"},"1"),". If you enter a value outside this range, you'll see a message: ",(0,n.kt)("em",{parentName:"p"},'"Please enter a valid temperature value between 0 and 1."')),(0,n.kt)("p",null,"Experiment with different values to find the best setting."),(0,n.kt)("h2",{id:"balancing-predictability-and-creativity"},"Balancing Predictability and Creativity"),(0,n.kt)("p",null,"Temperature values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Low (below 0.5)"),": More predictable and straightforward responses. Good for tasks needing a single correct answer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Medium (0.5 to 0.9)"),": Varied and creative but still realistic responses. Good for idea generation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High (above 0.9)"),": More unpredictable and open-ended responses. Good for creative tasks.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Using the prompt ",(0,n.kt)("em",{parentName:"p"},'"Write an article about a healthy diet"'),", here are three responses with different temperatures:"),(0,n.kt)("h3",{id:"example-1-low-temperature-02"},"Example 1: Low Temperature (0.2)"),(0,n.kt)("p",null,'Title: "The Fundamentals of a Healthy Diet: A Comprehensive Guide"'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"In a healthy diet, it\'s essential to consume a balanced mix of nutrients, including carbohydrates, proteins, and fats. Eating a variety of fruits and vegetables, whole grains, lean proteins, and healthy fats can help maintain your overall health and well-being. Drinking plenty of water and limiting sugary beverages is also crucial for staying hydrated and maintaining a healthy weight."')),(0,n.kt)("h3",{id:"example-2-medium-temperature-06"},"Example 2: Medium Temperature (0.6)"),(0,n.kt)("p",null,'Title: "Unlocking the Secrets of a Wholesome Diet: A Fresh Perspective"'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\"A healthy diet is more than just counting calories; it's about nourishing your body with diverse, nutrient-dense foods. To unlock the full potential of a wholesome diet, consider integrating colorful fruits and vegetables, whole grains, and lean protein sources into your meals. Don't forget to stay hydrated and moderate your intake of processed foods and added sugars for a truly balanced approach to nutrition.\"")),(0,n.kt)("h3",{id:"example-3-high-temperature-10"},"Example 3: High Temperature (1.0)"),(0,n.kt)("p",null,'Title: "A Symphony of Flavors: The Art and Science of Crafting a Healthy Diet"'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"Embarking on a healthy diet journey is like composing a symphony of flavors that harmonize with your body\'s needs. To create a masterpiece, fill your plate with a vivid array of fruits, vegetables, and whole grains that dance alongside lean proteins and heart-healthy fats. Experiment with new recipes, flavors, and textures to transform your relationship with food and embrace a lifestyle that is as nourishing as it is delicious."')),(0,n.kt)("h3",{id:"comparison"},"Comparison"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Low Temperature (0.2)"),": Straightforward and predictable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Medium Temperature (0.6)"),": Varied and creative but realistic."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Temperature (1.0)"),": Imaginative and open-ended.")),(0,n.kt)("p",null,"Choose the temperature setting based on your specific needs and desired output."))}c.isMDXComponent=!0}}]);