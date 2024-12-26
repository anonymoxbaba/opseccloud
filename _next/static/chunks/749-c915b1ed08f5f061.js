"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{1749:function(h,c,b){Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"Image",{enumerable:!0,get:function(){return r}});let d=b(1024),a=b(8533)._(b(2265)),f=d._(b(4887)),o=d._(b(2251)),n=b(8630),i=b(6906),j=b(337);b(6184);let k=b(6993),l=d._(b(536)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function e(a,e,b,c,f,g){let d=null==a?void 0:a.src;a&&a["data-loaded-src"]!==d&&(a["data-loaded-src"]=d,("decode"in a?a.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(a.parentElement&&a.isConnected){if("empty"!==e&&f(!0),null==b?void 0:b.current){let c=new Event("load");Object.defineProperty(c,"target",{writable:!1,value:a});let d=!1,e=!1;b.current({...c,nativeEvent:c,currentTarget:a,target:a,isDefaultPrevented:()=>d,isPropagationStopped:()=>e,persist:()=>{},preventDefault:()=>{d=!0,c.preventDefault()},stopPropagation:()=>{e=!0,c.stopPropagation()}})}(null==c?void 0:c.current)&&c.current(a)}}))}function g(b){let[d,e]=a.version.split(".",2),c=parseInt(d,10),f=parseInt(e,10);return c>18||18===c&&f>=3?{fetchPriority:b}:{fetchpriority:b}}let p=(0,a.forwardRef)((l,b)=>{let{src:k,srcSet:w,sizes:u,height:t,width:s,decoding:q,className:o,style:m,fetchPriority:n,placeholder:c,loading:p,unoptimized:j,fill:r,onLoadRef:i,onLoadingCompleteRef:h,setBlurComplete:f,setShowAltText:v,onLoad:y,onError:d,...x}=l;return a.default.createElement("img",{...x,...g(n),loading:p,width:s,height:t,decoding:q,"data-nimg":r?"fill":"1",className:o,style:m,sizes:u,srcSet:w,src:k,ref:(0,a.useCallback)(a=>{b&&("function"==typeof b?b(a):"object"==typeof b&&(b.current=a)),a&&(d&&(a.src=a.src),a.complete&&e(a,c,i,h,f,j))},[k,c,i,h,f,d,j,b]),onLoad:a=>{e(a.currentTarget,c,i,h,f,j)},onError:a=>{v(!0),"empty"!==c&&f(!0),d&&d(a)}})});function q(d){let{isAppRouter:e,imgAttributes:b}=d,c={as:"image",imageSrcSet:b.srcSet,imageSizes:b.sizes,crossOrigin:b.crossOrigin,referrerPolicy:b.referrerPolicy,...g(b.fetchPriority)};return e&&f.default.preload?(f.default.preload(b.src,c),null):a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+b.src+b.srcSet+b.sizes,rel:"preload",href:b.srcSet?void 0:b.src,...c}))}let r=(0,a.forwardRef)((o,w)=>{let x=(0,a.useContext)(k.RouterContext),g=(0,a.useContext)(j.ImageConfigContext),r=(0,a.useMemo)(()=>{let a=m||g||i.imageConfigDefault,b=[...a.deviceSizes,...a.imageSizes].sort((a,b)=>a-b),c=a.deviceSizes.sort((a,b)=>a-b);return{...a,allSizes:b,deviceSizes:c}},[g]),{onLoad:d,onLoadingComplete:c}=o,h=(0,a.useRef)(d);(0,a.useEffect)(()=>{h.current=d},[d]);let f=(0,a.useRef)(c);(0,a.useEffect)(()=>{f.current=c},[c]);let[s,t]=(0,a.useState)(!1),[u,v]=(0,a.useState)(!1),{props:e,meta:b}=(0,n.getImgProps)(o,{defaultLoader:l.default,imgConf:r,blurComplete:s,showAltText:u});return a.default.createElement(a.default.Fragment,null,a.default.createElement(p,{...e,unoptimized:b.unoptimized,placeholder:b.placeholder,fill:b.fill,onLoadRef:h,onLoadingCompleteRef:f,setBlurComplete:t,setShowAltText:v,ref:w}),b.priority?a.default.createElement(q,{isAppRouter:!x,imgAttributes:e}):null)});("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),h.exports=c.default)},2595:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"AmpStateContext",{enumerable:!0,get:function(){return c}});let c=b(1024)._(b(2265)).default.createContext({})},3044:function(c,a){function b(a){let{ampFirst:b=!1,hybrid:c=!1,hasQuery:d=!1}=void 0===a?{}:a;return b||c&&d}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isInAmpMode",{enumerable:!0,get:function(){return b}})},8630:function(h,c,b){Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return g}}),b(6184);let e=b(7160),f=b(6906);function d(a){return void 0!==a.default}function a(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function g(P,F){var t;let i,y,D,{src:b,sizes:q,unoptimized:j=!1,priority:v=!1,loading:r,className:O,quality:K,width:N,height:Q,fill:m=!1,style:u,onLoad:S,onLoadingComplete:V,placeholder:n="empty",blurDataURL:s,fetchPriority:z,layout:p,objectFit:M,objectPosition:L,lazyBoundary:U,lazyRoot:T,...k}=P,{imgConf:G,showAltText:H,blurComplete:I,defaultLoader:E}=F,h=G||f.imageConfigDefault;if("allSizes"in h)i=h;else{let a=[...h.deviceSizes,...h.imageSizes].sort((a,b)=>a-b),b=h.deviceSizes.sort((a,b)=>a-b);i={...h,allSizes:a,deviceSizes:b}}let o=k.loader||E;delete k.loader,delete k.srcSet;let B="__next_img_default"in o;if(B){if("custom"===i.loader)throw Error('Image with src "'+b+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let a=o;o=b=>{let{config:d,...c}=b;return a(c)}}if(p){"fill"===p&&(m=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[p];a&&(u={...u,...a});let b={responsive:"100vw",fill:"100vw"}[p];b&&!q&&(q=b)}let A="",c=a(N),g=a(Q);if("object"==typeof(t=b)&&(d(t)||void 0!==t.src)){let a=d(b)?b.default:b;if(!a.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(a));if(!a.height||!a.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(a));if(y=a.blurWidth,D=a.blurHeight,s=s||a.blurDataURL,A=a.src,!m)if(c||g){if(c&&!g){let b=c/a.width;g=Math.round(a.height*b)}else if(!c&&g){let b=g/a.height;c=Math.round(a.width*b)}}else c=a.width,g=a.height}let C=!v&&("lazy"===r||void 0===r);(!(b="string"==typeof b?b:A)||b.startsWith("data:")||b.startsWith("blob:"))&&(j=!0,C=!1),i.unoptimized&&(j=!0),B&&b.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(j=!0),v&&(z="high");let R=a(K),l=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:L}:{},H?{}:{color:"transparent"},u),x=I||"empty"===n?null:"blur"===n?'url("data:image/svg+xml;charset=utf-8,'+(0,e.getImageBlurSvg)({widthInt:c,heightInt:g,blurWidth:y,blurHeight:D,blurDataURL:s||"",objectFit:l.objectFit})+'")':'url("'+n+'")',J=x?{backgroundSize:l.objectFit||"cover",backgroundPosition:l.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:x}:{},w=function(i){let{config:b,src:c,unoptimized:j,width:h,quality:f,sizes:a,loader:g}=i;if(j)return{src:c,srcSet:void 0,sizes:void 0};let{widths:e,kind:d}=function(e,b,c){let{deviceSizes:d,allSizes:a}=e;if(c){let e=/(^|\s)(1?\d?\d)vw/g,b=[];for(let a;a=e.exec(c);a)b.push(parseInt(a[2]));if(b.length){let c=.01*Math.min(...b);return{widths:a.filter(a=>a>=d[0]*c),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof b?{widths:d,kind:"w"}:{widths:[...new Set([b,2*b].map(b=>a.find(a=>a>=b)||a[a.length-1]))],kind:"x"}}(b,h,a),k=e.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:e.map((a,e)=>g({config:b,src:c,quality:f,width:a})+" "+("w"===d?a:e+1)+d).join(", "),src:g({config:b,src:c,quality:f,width:e[k]})}}({config:i,src:b,unoptimized:j,width:c,quality:R,sizes:q,loader:o});return{props:{...k,loading:C?"lazy":r,fetchPriority:z,width:c,height:g,decoding:"async",className:O,style:{...l,...J},sizes:w.sizes,srcSet:w.srcSet,src:w.src},meta:{unoptimized:j,priority:v,placeholder:n,fill:m}}}},2251:function(f,a,c){Object.defineProperty(a,"__esModule",{value:!0}),function(c,a){for(var b in a)Object.defineProperty(c,b,{enumerable:!0,get:a[b]})}(a,{defaultHead:function(){return d},default:function(){return n}});let l=c(1024),b=c(8533)._(c(2265)),j=l._(c(7392)),g=c(2595),h=c(3634),i=c(3044);function d(a){void 0===a&&(a=!1);let c=[b.default.createElement("meta",{charSet:"utf-8"})];return a||c.push(b.default.createElement("meta",{name:"viewport",content:"width=device-width"})),c}function k(c,a){return"string"==typeof a||"number"==typeof a?c:a.type===b.default.Fragment?c.concat(b.default.Children.toArray(a.props.children).reduce((b,a)=>"string"==typeof a||"number"==typeof a?b:b.concat(a),[])):c.concat(a)}c(6184);let e=["name","httpEquiv","charSet","itemProp"];function m(c,f){let{inAmpMode:a}=f;return c.reduce(k,[]).reverse().concat(d(a).reverse()).filter(function(){let a=new Set,b=new Set,c=new Set,d={};return f=>{let g=!0,h=!1;if(f.key&&"number"!=typeof f.key&&f.key.indexOf("$")>0){h=!0;let b=f.key.slice(f.key.indexOf("$")+1);a.has(b)?g=!1:a.add(b)}switch(f.type){case"title":case"base":b.has(f.type)?g=!1:b.add(f.type);break;case"meta":for(let b=0,i=e.length;b<i;b++){let a=e[b];if(f.props.hasOwnProperty(a))if("charSet"===a)c.has(a)?g=!1:c.add(a);else{let c=f.props[a],b=d[a]||new Set;("name"!==a||!h)&&b.has(c)?g=!1:(b.add(c),d[a]=b)}}}return g}}()).reverse().map((c,d)=>{let e=c.key||d;if(!a&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(a=>c.props.href.startsWith(a))){let a={...c.props||{}};return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,b.default.cloneElement(c,a)}return b.default.cloneElement(c,{key:e})})}let n=function(a){let{children:c}=a,d=(0,b.useContext)(g.AmpStateContext),e=(0,b.useContext)(h.HeadManagerContext);return b.default.createElement(j.default,{reduceComponentsToState:m,headManager:e,inAmpMode:(0,i.isInAmpMode)(d)},c)};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),f.exports=a.default)},7160:function(c,a){function b(h){let{widthInt:i,heightInt:j,blurWidth:d,blurHeight:e,blurDataURL:g,objectFit:a}=h,b=d?40*d:i,c=e?40*e:j,f=b&&c?"viewBox='0 0 "+b+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+f+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(f?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+g+"'/%3E%3C/svg%3E"}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getImageBlurSvg",{enumerable:!0,get:function(){return b}})},337:function(f,b,a){Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"ImageConfigContext",{enumerable:!0,get:function(){return e}});let c=a(1024)._(a(2265)),d=a(6906),e=c.default.createContext(d.imageConfigDefault)},6906:function(d,a){Object.defineProperty(a,"__esModule",{value:!0}),function(c,a){for(var b in a)Object.defineProperty(c,b,{enumerable:!0,get:a[b]})}(a,{VALID_LOADERS:function(){return b},imageConfigDefault:function(){return c}});let b=["default","imgix","cloudinary","akamai","custom"],c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},536:function(d,a){function b(a){let{config:b,src:c,width:d,quality:e}=a;return b.path+"?url="+encodeURIComponent(c)+"&w="+d+"&q="+(e||75)}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return c}}),b.__next_img_default=!0;let c=b},6993:function(d,a,b){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"RouterContext",{enumerable:!0,get:function(){return c}});let c=b(1024)._(b(2265)).default.createContext(null)},7392:function(g,b,e){Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return d}});let a=e(2265),c=a.useLayoutEffect,f=a.useEffect;function d(d){let{headManager:b,reduceComponentsToState:g}=d;function e(){if(b&&b.mountedInstances){let c=a.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(g(c,d))}}return c(()=>{var a;return null==b||null==(a=b.mountedInstances)||a.add(d.children),()=>{var a;null==b||null==(a=b.mountedInstances)||a.delete(d.children)}}),c(()=>(b&&(b._pendingUpdate=e),()=>{b&&(b._pendingUpdate=e)})),f(()=>(b&&b._pendingUpdate&&(b._pendingUpdate(),b._pendingUpdate=null),()=>{b&&b._pendingUpdate&&(b._pendingUpdate(),b._pendingUpdate=null)})),null}},6184:function(c,a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return b}});let b=a=>{}}}])