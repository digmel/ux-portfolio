(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6443)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,i;var r,{src:s,sizes:x,unoptimized:p=!1,priority:w=!1,loading:v,className:j,quality:b,width:y,height:_,fill:E,style:N,onLoad:S,onLoadingComplete:M,placeholder:H="empty",blurDataURL:Z,layout:z,objectFit:P,objectPosition:A,lazyBoundary:V,lazyRoot:k}=e,O=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let I=a.useContext(u.ImageConfigContext),R=a.useMemo(()=>{let e=f||I||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return l({},e,{allSizes:t,deviceSizes:i})},[I]),F=O,B=F.loader||h.default;if(delete F.loader,"__next_img_default"in B){if("custom"===R.loader)throw Error('Image with src "'.concat(s,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let L=B;B=e=>{let{config:t}=e,i=n(e,["config"]);return L(i)}}if(z){"fill"===z&&(E=!0);let D={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];D&&(N=l({},N,D));let W={responsive:"100vw",fill:"100vw"}[z];W&&!x&&(x=W)}let T="",q=g(y),G=g(_);if("object"==typeof(r=s)&&(m(r)||void 0!==r.src)){let U=m(s)?s.default:s;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,i=U.blurHeight,Z=Z||U.blurDataURL,T=U.src,!E){if(q||G){if(q&&!G){let X=q/U.width;G=Math.round(U.height*X)}else if(!q&&G){let J=G/U.height;q=Math.round(U.width*J)}}else q=U.width,G=U.height}}let $=!w&&("lazy"===v||void 0===v);((s="string"==typeof s?s:T).startsWith("data:")||s.startsWith("blob:"))&&(p=!0,$=!1),R.unoptimized&&(p=!0);let[K,Q]=a.useState(!1),[Y,ee]=a.useState(!1),et=g(b),ei=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:A}:{},Y?{}:{color:"transparent"},N),el="blur"===H&&Z&&!K?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:G,blurWidth:t,blurHeight:i,blurDataURL:Z}),'")')}:{},er=function(e){let{config:t,src:i,unoptimized:l,width:r,quality:s,sizes:n,loader:a}=e;if(l)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:l,allSizes:r}=e;if(i){let s=/(^|\s)(1?\d?\d)vw/g,n=[];for(let a;a=s.exec(i);a)n.push(parseInt(a[2]));if(n.length){let o=.01*Math.min(...n);return{widths:r.filter(e=>e>=l[0]*o),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:l,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,n),d=o.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:o.map((e,l)=>"".concat(a({config:t,src:i,quality:s,width:e})," ").concat("w"===c?e:l+1).concat(c)).join(", "),src:a({config:t,src:i,quality:s,width:o[d]})}}({config:R,src:s,unoptimized:p,width:q,quality:et,sizes:x,loader:B}),es=s,en={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:F.crossOrigin},ea=a.useRef(S);a.useEffect(()=>{ea.current=S},[S]);let eo=a.useRef(M);a.useEffect(()=>{eo.current=M},[M]);let ec=l({isLazy:$,imgAttributes:er,heightInt:G,widthInt:q,qualityInt:et,className:j,imgStyle:ei,blurStyle:el,loading:v,config:R,fill:E,unoptimized:p,placeholder:H,loader:B,srcString:es,onLoadRef:ea,onLoadingCompleteRef:eo,setBlurComplete:Q,setShowAltText:ee},F);return a.default.createElement(a.default.Fragment,null,a.default.createElement(C,Object.assign({},ec)),w?a.default.createElement(o.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},en))):null)};var l=i(6495).Z,r=i(2648).Z,s=i(1598).Z,n=i(7273).Z,a=s(i(7294)),o=r(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var h=r(i(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"./",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function x(e,t,i,r,s,n,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,o=!1;r.current(l({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>o,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let C=e=>{var{imgAttributes:t,heightInt:i,widthInt:r,qualityInt:s,className:o,imgStyle:c,blurStyle:d,isLazy:u,fill:h,placeholder:f,loading:m,srcString:g,config:C,unoptimized:p,loader:w,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:b,setShowAltText:y,onLoad:_,onError:E}=e,N=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,t,{width:r,height:i,decoding:"async","data-nimg":h?"fill":"1",className:o,loading:m,style:l({},c,d),ref:a.useCallback(e=>{e&&(E&&(e.src=e.src),e.complete&&x(e,g,f,v,j,b,p))},[g,f,v,j,b,E,p]),onLoad(e){let t=e.currentTarget;x(t,g,f,v,j,b,p)},onError(e){y(!0),"blur"===f&&b(!0),E&&E(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:l,blurHeight:r,blurDataURL:s}=e,n=l||t,a=r||i,o=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return n&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(l&&r?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:l,quality:r}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(l,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},6443:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var l=i(5893);i(7294);let r=()=>(0,l.jsx)("div",{className:"py-4 border-t border-gray border-opacity-40 flex justify-center md:mt-8 mt-24 mx-6 md:mx-24 ",children:(0,l.jsx)("h1",{className:"text-gray text-sm md:text-sm font-extralight",children:"2022 All rights reserved \xa9 Elene Zedginidze"})});var s=i(9008),n=i.n(s);let a=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_1231_17216)",children:[(0,l.jsx)("rect",{opacity:"0.1",width:"30",height:"30",fill:"#949EA9"}),(0,l.jsx)("path",{d:"M11.6537 10C12.1155 10 12.5418 10.0355 12.9326 10.1421C13.3234 10.2131 13.6431 10.3552 13.9273 10.5329C14.2115 10.7105 14.4246 10.9592 14.5667 11.2789C14.7088 11.5986 14.7799 11.9894 14.7799 12.4157C14.7799 12.913 14.6733 13.3393 14.4246 13.659C14.2115 13.9788 13.8562 14.263 13.43 14.4761C14.0339 14.6537 14.4957 14.9734 14.7799 15.3997C15.0641 15.826 15.2417 16.3589 15.2417 16.9628C15.2417 17.4602 15.1351 17.8865 14.9575 18.2417C14.7799 18.597 14.4957 18.9167 14.176 19.1298C13.8562 19.343 13.4655 19.5206 13.0392 19.6272C12.6129 19.7337 12.1866 19.8048 11.7603 19.8048H7V10H11.6537ZM11.3695 13.9788C11.7603 13.9788 12.08 13.8722 12.3287 13.6946C12.5774 13.5169 12.6839 13.1972 12.6839 12.8064C12.6839 12.5933 12.6484 12.3801 12.5774 12.238C12.5063 12.096 12.3997 11.9894 12.2576 11.8828C12.1155 11.8118 11.9734 11.7407 11.7958 11.7052C11.6182 11.6697 11.4406 11.6697 11.2274 11.6697H9.167V13.9788H11.3695ZM11.4761 18.1707C11.6892 18.1707 11.9024 18.1351 12.08 18.0996C12.2576 18.0641 12.4353 17.993 12.5774 17.8865C12.7195 17.7799 12.826 17.6733 12.9326 17.4957C13.0037 17.3181 13.0747 17.1049 13.0747 16.8562C13.0747 16.3589 12.9326 16.0037 12.6484 15.755C12.3642 15.5418 11.9734 15.4353 11.5116 15.4353H9.167V18.1707H11.4761ZM18.3323 18.1351C18.6165 18.4193 19.0428 18.5614 19.6112 18.5614C20.002 18.5614 20.3572 18.4549 20.6414 18.2772C20.9256 18.0641 21.1033 17.8509 21.1743 17.6378H22.915C22.6308 18.4904 22.2045 19.0943 21.6361 19.4851C21.0677 19.8403 20.3928 20.0535 19.5757 20.0535C19.0073 20.0535 18.51 19.9469 18.0481 19.7693C17.5863 19.5916 17.2311 19.343 16.9114 18.9877C16.5916 18.668 16.343 18.2772 16.2009 17.8154C16.0232 17.3536 15.9522 16.8562 15.9522 16.2879C15.9522 15.755 16.0232 15.2576 16.2009 14.7958C16.3785 14.334 16.6272 13.9432 16.9469 13.588C17.2666 13.2683 17.6574 12.9841 18.0837 12.8064C18.5455 12.6288 19.0073 12.5222 19.5757 12.5222C20.1796 12.5222 20.7125 12.6288 21.1743 12.8775C21.6361 13.1262 21.9914 13.4104 22.2756 13.8367C22.5598 14.2274 22.7729 14.6892 22.915 15.1866C22.9861 15.6839 23.0216 16.1813 22.9861 16.7497H17.835C17.835 17.3181 18.0481 17.8509 18.3323 18.1351ZM20.5704 14.405C20.3217 14.1564 19.9309 14.0143 19.4691 14.0143C19.1494 14.0143 18.9007 14.0853 18.6876 14.1919C18.4744 14.2985 18.3323 14.4406 18.1902 14.5827C18.0481 14.7248 17.9771 14.9024 17.9416 15.08C17.906 15.2576 17.8705 15.3997 17.8705 15.5418H21.0677C20.9967 15.009 20.8191 14.6537 20.5704 14.405ZM17.4442 10.675H21.423V11.6341H17.4442V10.675Z",fill:"#949EA9"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1231_17216",children:(0,l.jsx)("rect",{width:"30",height:"30",rx:"4",fill:"white"})})})]})}),o=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_1231_17217)",children:[(0,l.jsx)("path",{opacity:"0.1",d:"M30 0H0V30H30V0Z",fill:"#949EA9"}),(0,l.jsx)("path",{d:"M11.15 22H8.175V12.6375H11.15V22ZM9.6625 11.325C8.7 11.325 8 10.625 8 9.6625C8 8.7 8.7875 8 9.6625 8C10.625 8 11.325 8.7 11.325 9.6625C11.325 10.625 10.625 11.325 9.6625 11.325ZM22 22H19.025V16.925C19.025 15.4375 18.4125 15 17.5375 15C16.6625 15 15.7875 15.7 15.7875 17.0125V22H12.8125V12.6375H15.6125V13.95C15.875 13.3375 16.925 12.375 18.4125 12.375C20.075 12.375 21.825 13.3375 21.825 16.225V22H22Z",fill:"#949EA9"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1231_17217",children:(0,l.jsx)("rect",{width:"30",height:"30",rx:"4",fill:"white"})})})]})}),c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_1231_17218)",children:[(0,l.jsx)("path",{opacity:"0.1",d:"M30 0H0V30H30V0Z",fill:"#949EA9"}),(0,l.jsx)("path",{d:"M15 8C11.136 8 8 11.136 8 15C8 18.864 11.136 22 15 22C18.85 22 22 18.864 22 15C22 11.136 18.85 8 15 8ZM19.62 11.22C20.46 12.242 20.95 13.53 20.978 14.944C20.782 14.902 18.808 14.51 16.82 14.748C16.778 14.65 16.736 14.538 16.694 14.44C16.568 14.146 16.442 13.852 16.302 13.572C18.486 12.69 19.494 11.388 19.62 11.22ZM15 9.036C16.512 9.036 17.912 9.61 18.962 10.534C18.85 10.688 17.954 11.892 15.826 12.69C14.846 10.884 13.754 9.414 13.6 9.19C14.048 9.092 14.51 9.036 15 9.036ZM12.452 9.596C12.606 9.806 13.67 11.29 14.664 13.054C11.864 13.796 9.4 13.782 9.134 13.782C9.54 11.92 10.786 10.38 12.452 9.596ZM9.022 15.014C9.022 14.958 9.022 14.888 9.022 14.832C9.274 14.846 12.186 14.874 15.168 13.978C15.336 14.314 15.504 14.65 15.658 15C15.588 15.028 15.504 15.042 15.42 15.07C12.34 16.064 10.702 18.78 10.562 19.004C9.596 17.94 9.022 16.54 9.022 15.014ZM15 20.978C13.614 20.978 12.34 20.502 11.332 19.718C11.444 19.494 12.648 17.156 16.022 15.98C16.036 15.966 16.05 15.966 16.064 15.966C16.904 18.15 17.254 19.97 17.338 20.502C16.624 20.81 15.826 20.978 15 20.978ZM18.332 19.956C18.276 19.592 17.954 17.842 17.17 15.7C19.046 15.406 20.684 15.896 20.894 15.952C20.628 17.618 19.676 19.06 18.332 19.956Z",fill:"#949EA9"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1231_17218",children:(0,l.jsx)("rect",{width:"30",height:"30",rx:"4",fill:"white"})})})]})}),d=e=>{let{title:t,variant:i,isActive:r=!1}=e;return(0,l.jsxs)("div",{className:"flex flex-row text-end justify-end my-2",children:[i&&(0,l.jsx)("h1",{className:"text-base mr-1 ".concat(r?"text-active font-semibold":"text-gray font-regular"),children:"web"===i?"Web |":"Mobile |"}),(0,l.jsx)("h1",{className:"text-base ".concat(r?"text-active font-semibold":"text-body font-regular"),children:t})]})},u=()=>(0,l.jsxs)("div",{className:"flex flex-col h-screen justify-center self-center items-end text-end",children:[(0,l.jsxs)("div",{className:"mb-7 -mt-24",children:[(0,l.jsx)("h1",{className:"font-bold text-2xl text-primary-dark",children:"Hi, I'm Elene"}),(0,l.jsx)("h1",{className:"font-regular text-sm text-body",children:"UX/UI Designer"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(d,{title:"Home",isActive:!0}),(0,l.jsx)(d,{title:"Learn First Aid",variant:"mobile"}),(0,l.jsx)(d,{title:"Gluten-Free Finder",variant:"mobile"}),(0,l.jsx)(d,{title:"Reduce Food Waste",variant:"mobile"}),(0,l.jsx)(d,{title:"Fashion Designer",variant:"web"}),(0,l.jsx)(d,{title:"About"})]}),(0,l.jsxs)("div",{className:"mt-7 flex -mx-2",children:[(0,l.jsx)("div",{className:"mx-2",children:(0,l.jsx)(o,{})}),(0,l.jsx)("div",{className:"mx-2",children:(0,l.jsx)(a,{})}),(0,l.jsx)("div",{className:"mx-2",children:(0,l.jsx)(c,{})})]})]}),h=e=>{let{children:t,title:i}=e;return(0,l.jsxs)("div",{className:" bg-white md:h-screen w-screen md:fixed flex flex-row md:px-36",children:[(0,l.jsxs)(n(),{children:[(0,l.jsx)("title",{children:i}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,l.jsx)("div",{className:"flex-initial md:w-2/12 w-0",children:(0,l.jsx)(u,{})}),(0,l.jsxs)("div",{className:"flex-grow flex flex-col",children:[(0,l.jsx)("div",{className:"flex-grow w-full",children:t}),(0,l.jsx)("div",{className:"flex-initial w-full",children:(0,l.jsx)(r,{})})]})]})};var f=i(5675),m=i.n(f);function g(){return(0,l.jsx)(h,{title:"eleneux.com",children:(0,l.jsxs)("div",{className:"flex flex-1 justify-center",children:[(0,l.jsx)("h1",{className:"text-white ",children:"Welcome"}),(0,l.jsx)(m(),{src:"/assets/image1.png",width:390,height:507,alt:"1",quality:30})]})})}},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);