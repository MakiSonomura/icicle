"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5773],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),g=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=g(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=g(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?i.createElement(d,o(o({ref:n},s),{},{components:t})):i.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<a;g++)o[g]=t[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var i=t(8168),r=(t(6540),t(5680));t(1873);const a={},o="NTT",l={unversionedId:"icicle/golang-bindings/ntt",id:"icicle/golang-bindings/ntt",title:"NTT",description:"NTT Example",source:"@site/docs/icicle/golang-bindings/ntt.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/ntt",permalink:"/icicle/golang-bindings/ntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/ntt.md",tags:[],version:"current",lastUpdatedBy:"yshekel",lastUpdatedAt:1726589700,formattedLastUpdatedAt:"9/17/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"MSM Pre computation",permalink:"/icicle/golang-bindings/msm-pre-computation"},next:{title:"ECNTT",permalink:"/icicle/golang-bindings/ecntt"}},c={},g=[{value:"NTT Example",id:"ntt-example",level:2},{value:"NTT Method",id:"ntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Return Value",id:"return-value-1",level:3}],s={toc:g},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ntt"},"NTT"),(0,r.yg)("h2",{id:"ntt-example"},"NTT Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/core"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/curves/bn254/ntt"\n    "github.com/ingonyama-zk/icicle/v3/wrappers/golang/runtime"\n\n    "github.com/consensys/gnark-crypto/ecc/bn254/fr/fft"\n)\n\nfunc init() {\n  // Load backend using env path\n    runtime.LoadBackendFromEnvOrDefault()\n    // Set Cuda device to perform\n    device := runtime.CreateDevice("CUDA", 0)\n    runtime.SetDevice(&device)\n\n    cfg := core.GetDefaultNTTInitDomainConfig()\n    initDomain(18, cfg)\n}\n\nfunc initDomain(largestTestSize int, cfg core.NTTInitDomainConfig) runtime.EIcicleError {\n    rouMont, _ := fft.Generator(uint64(1 << largestTestSize))\n    rou := rouMont.Bits()\n    rouIcicle := bn254.ScalarField{}\n    limbs := core.ConvertUint64ArrToUint32Arr(rou[:])\n\n    rouIcicle.FromLimbs(limbs)\n    e := ntt.InitDomain(rouIcicle, cfg)\n    return e\n}\n\nfunc main() {\n    // Obtain the default NTT configuration with a predefined coset generator.\n    cfg := ntt.GetDefaultNttConfig()\n\n    // Define the size of the input scalars.\n    size := 1 << 18\n\n    // Generate scalars for the NTT operation.\n    scalars := bn254.GenerateScalars(size)\n\n    // Set the direction of the NTT (forward or inverse).\n    dir := core.KForward\n\n    // Allocate memory for the results of the NTT operation.\n    results := make(core.HostSlice[bn254.ScalarField], size)\n\n    // Perform the NTT operation.\n    err := ntt.Ntt(scalars, dir, &cfg, results)\n    if err != runtime.Success {\n        panic("NTT operation failed")\n    }\n\n    ntt.ReleaseDomain()\n}\n')),(0,r.yg)("h2",{id:"ntt-method"},"NTT Method"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) runtime.EIcicleError\n")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"scalars")),": A slice containing the input scalars for the transform. It can reside either in host memory or device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"dir")),": The direction of the NTT operation (",(0,r.yg)("inlineCode",{parentName:"li"},"KForward")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"KInverse"),")."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"cfg")),": A pointer to an ",(0,r.yg)("inlineCode",{parentName:"li"},"NTTConfig")," object, containing configuration options for the NTT operation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"results")),": A slice where the results of the NTT operation will be stored. This slice can be in host or device memory.")),(0,r.yg)("h3",{id:"return-value"},"Return Value"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"EIcicleError")),": A ",(0,r.yg)("inlineCode",{parentName:"li"},"runtime.EIcicleError")," value, which will be ",(0,r.yg)("inlineCode",{parentName:"li"},"runtime.Success")," if the operation was successful, or an error if something went wrong.")),(0,r.yg)("h2",{id:"ntt-configuration-nttconfig"},"NTT Configuration (NTTConfig)"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"NTTConfig")," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type NTTConfig[T any] struct {\n    StreamHandle       runtime.Stream\n    CosetGen           T\n    BatchSize          int32\n    ColumnsBatch       bool\n    Ordering           Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync            bool\n    Ext                config_extension.ConfigExtensionHandler\n}\n")),(0,r.yg)("h3",{id:"fields"},"Fields"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"StreamHandle")),": Specifies the stream (queue) to use for async execution."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"CosetGen")),": Coset generator. Used to perform coset (i)NTTs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"BatchSize")),": The number of NTTs to compute in one operation, defaulting to 1."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"ColumnsBatch")),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"Ordering")),": Ordering of inputs and outputs (",(0,r.yg)("inlineCode",{parentName:"li"},"KNN"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"KNR"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"KRN"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"KRR"),"), affecting how data is arranged."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"areInputsOnDevice")),": Indicates if input scalars are located on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"areOutputsOnDevice")),": Indicates if results are stored on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": Controls whether the NTT operation runs asynchronously."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"Ext")),": Extended configuration for backend.")),(0,r.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"GetDefaultNTTConfig")," to obtain a default configuration, customizable as needed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n")),(0,r.yg)("h3",{id:"initializing-the-ntt-domain"},"Initializing the NTT Domain"),(0,r.yg)("p",null,"Before performing NTT operations, it's necessary to initialize the NTT domain; it only needs to be called once per GPU since the twiddles are cached."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func InitDomain(primitiveRoot bn254.ScalarField, cfg core.NTTInitDomainConfig) runtime.EIcicleError\n")),(0,r.yg)("p",null,"This function initializes the domain with a given primitive root, optionally using fast twiddle factors to optimize the computation."),(0,r.yg)("h3",{id:"releasing-the-domain"},"Releasing the domain"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ReleaseDomain")," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func ReleaseDomain() runtime.EIcicleError\n")),(0,r.yg)("h3",{id:"return-value-1"},"Return Value"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"EIcicleError")),": A ",(0,r.yg)("inlineCode",{parentName:"li"},"runtime.EIcicleError")," value, which will be ",(0,r.yg)("inlineCode",{parentName:"li"},"runtime.Success")," if the operation was successful, or an error if something went wrong.")))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);