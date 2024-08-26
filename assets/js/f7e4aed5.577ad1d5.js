"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[6934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r=a.p+"assets/images/audio-converter-d98647659466bd921767d2a9c0b7765b.png",i=a.p+"assets/images/logs-f9f56639e7b43c3989d5a1c566bbd679.png",l=a.p+"assets/images/speech-to-post-16176fd10ac200bc36f05c0311787eab.png",s={sidebar_position:15},u="Audio Converter",p={unversionedId:"audio-converter",id:"audio-converter",title:"Audio Converter",description:"This feature allows you to easily convert audio files into text format.",source:"@site/docs/audio-converter.mdx",sourceDirName:".",slug:"/audio-converter",permalink:"/docs/audio-converter",draft:!1,editUrl:"https://github.com/aipowerorg/aipowerorg.github.io/edit/main/docs/audio-converter.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Fine Tuning",permalink:"/docs/fine-tuning"},next:{title:"Semantic Search",permalink:"/docs/semantic-search"}},c={},d=[{value:"Using the Audio Converter",id:"using-the-audio-converter",level:2},{value:"Logs",id:"logs",level:2},{value:"Speech to Post",id:"speech-to-post",level:2}],h={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"audio-converter"},"Audio Converter"),(0,n.kt)("p",null,"This feature allows you to easily convert audio files into text format."),(0,n.kt)("p",null,"It uses OpenAI's state-of-the-art open source Whisper model to convert audio files into text format."),(0,n.kt)("p",null,"The cost of using OpenAI's Whisper API is ",(0,n.kt)("strong",{parentName:"p"},"$0.006 per minute")," of audio."),(0,n.kt)("p",null,"Based on this pricing, a 10-minute audio would be approximately $0.06."),(0,n.kt)("h2",{id:"using-the-audio-converter"},"Using the Audio Converter"),(0,n.kt)("p",null,"In order to use this feature, you will need to follow a few simple steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Audio Converter")," page from the plugin menu.")),(0,n.kt)("img",{src:r}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There are two options that you can use: ",(0,n.kt)("strong",{parentName:"li"},"Transcription")," and ",(0,n.kt)("strong",{parentName:"li"},"Translation"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Transcription"),": This option allows you to convert audio files into text format. It currently supports 38 languages.\nSupported languages are Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Translation"),": This option allows you to convert audio files into text format and translate the text into English. This means that you can convert audio files from any language into English only."))),(0,n.kt)("li",{parentName:"ul"},"There are three different methods that you can use to upload your audio file: Upload File, URL, and Record. Supported file types include mp3, mp4, mpeg, mpga, m4a, wav, and webm. The file size limit is 25 MB.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Upload File"),': This option allows you to upload your audio file from your computer. Simply click on the "Choose File" button and select the file that you want to upload.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL"),": This option allows you to upload your audio file from a URL. Paste the URL of the audio file in the text box eg ",(0,n.kt)("a",{parentName:"li",href:"https://www.example.com/audio.mp3"},"https://www.example.com/audio.mp3"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Record"),': This option allows you to record your audio file directly from your browser. Click on the "Record" button and start recording. Make sure that your microphone is enabled and that your browser has access to it. You can click pause and resume recording as many times as you want. Once you are done recording, click on the "Stop" button.'))),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Start")," button."),(0,n.kt)("li",{parentName:"ul"},"Wait for the file to be converted."),(0,n.kt)("li",{parentName:"ul"},"Once the file is converted, you will be able to see output under the Logs tab.")),(0,n.kt)("p",null,"There are some additional options that you can use to customize the output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Model"),': This option allows you to select the model that you want to use for the conversion. Currently the only available model is "whisper-1".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prompt"),": An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outout Format"),": This option allows you to select the output format that you want to use for the conversion. Available options are post, page, text, json, srt, verbose_json, and vtt. If you select post or page then some additional options will be available such as title, category, author and post status."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Temperature"),": The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please note that while the underlying model was trained on 98 languages, OpenAI only list the languages that exceeded less than 50% word error rate (WER) which is an industry standard benchmark for speech to text model accuracy. The model will return results for languages not listed above but the quality will be low.")),(0,n.kt)("p",null,"We also have a ",(0,n.kt)("strong",{parentName:"p"},"Set as Default")," button that allows you to set the default options for the conversion."),(0,n.kt)("h2",{id:"logs"},"Logs"),(0,n.kt)("p",null,"This feature allows you to view the logs of the audio files that you have converted."),(0,n.kt)("img",{src:i}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Audio Converter - Logs"),"."),(0,n.kt)("li",{parentName:"ul"},"You will be able to see the logs of the audio files that you have converted."),(0,n.kt)("li",{parentName:"ul"},"There are six fields in the logs table: ID, Title, Format, Date, Duration, and Action.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ID"),": This is the ID of the audio file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Title"),": This is the title of the audio file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Format"),": This is the format of the audio file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date"),": This is the date when the audio file was converted."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Duration"),": This shows how long did it take to convert the audio file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Action"),": You can delete or download the file from here."))),(0,n.kt)("li",{parentName:"ul"},"You can also search for a specific audio file by using the search box.")),(0,n.kt)("h2",{id:"speech-to-post"},"Speech to Post"),(0,n.kt)("p",null,"You can convert your speech to a WordPress post with one click."),(0,n.kt)("img",{src:l}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Content Writer - Speech to Post")," tab."),(0,n.kt)("li",{parentName:"ul"},"Simply press the record button and speak your prompt, just like you would in a conversation.")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\"Write a blog post about the latest mobile phones and their features. Include an introduction that highlights the importance of mobile phones in today's world. In the body of the post, discuss the latest mobile phone trends, such as foldable screens, 5G connectivity, and high refresh rate displays. Also, mention the most popular mobile phone brands and their latest releases. Don't forget to discuss the benefits and drawbacks of each phone and how they compare to one another. In the conclusion, summarize the key points of the post.\"")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After you are done speaking, press the stop button and wait for the post to be generated."),(0,n.kt)("li",{parentName:"ul"},"Once the post is generated, you can edit it and publish it."),(0,n.kt)("li",{parentName:"ul"},"You can see the token usage and other details in the ",(0,n.kt)("strong",{parentName:"li"},"Content Writer - Logs")," tab.")),(0,n.kt)("p",null,"Currently, the following parameters are hard-coded for the Speech to Post feature:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Model"),": Turbo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Max Tokens"),": 2000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Temperature"),": 0.7"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Top P"),": 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Frequency Penalty"),": 0.01"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Presence Penalty"),": 0.01")),(0,n.kt)("p",null,"The cost of using OpenAI's Whisper API is ",(0,n.kt)("strong",{parentName:"p"},"$0.006 per minute")," of audio."),(0,n.kt)("p",null,"Based on this pricing, a 10-minute audio would be approximately $0.06."),(0,n.kt)("p",null,"When we calculate the final cost we are also adding cost of Completions API calls."))}f.isMDXComponent=!0}}]);