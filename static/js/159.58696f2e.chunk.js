"use strict";(self.webpackChunkmy_guitar_shop=self.webpackChunkmy_guitar_shop||[]).push([[159],{3159:(t,e,n)=>{n.r(e),n.d(e,{default:()=>P});var a,r,s=n(2791),i=n(7482),o=n(7689),l=n(4228),c=n(6420),d=n(9164),u=n(6314),h=n(533),x=n(890),p=n(4294),m=n(6043),g=n(697),f=n(493),j=n(5021),Z=n(6278),b=n(6259),k=n(7924),y=n(8008),w=n(2093),v=n(1880),C=n(3854),S=n(2588),X=n(168),_=n(225);(0,n(9200).Z)((t=>({heroSlide:{"&.swiper-slide-active":{animation:"$scale 4s ease-out infinite",animationDelay:"1s"}},"@keyframes scale":{"0%":{transform:"scale(1)"},"80%":{transform:"scale(1.3)"},"100%":{transform:"scale(1.3)"}},"@keyframes floatUp2":{"0%":{transform:"translateY(100%) translateX(-100%)",opacity:1},"50%":{transform:"translateY(-50%) translateX(25px) scale(1.9)",backgroundColor:t.palette.primary.light,opacity:.8},"100%":{transform:"translateY(-100%) translateX(0) scale(1.3)",backgroundColor:t.palette.primary.dark,opacity:0}},"@keyframes floatUp3":{"0%":{transform:"translateY(0) translateX(-100%)",opacity:0},"50%":{transform:"translateY(-50%) translateX(25px)",opacity:.8},"100%":{transform:"translateY(-100%) translateX(0)",opacity:0}}})));const Y=(0,_.Z)(g.Z)(a||(a=(0,X.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n  z-index: 2;\n  padding: 10px;\n  background: ",";\n"])),(t=>{let{theme:e}=t;return e.palette.background.overlay})),E=(0,_.Z)(h.Z)(r||(r=(0,X.Z)(["\n  cursor: pointer;\n  &:hover {\n    background-color: lightgray;\n    color: darkblue;\n  }\n"]))),N=(0,_.Z)(g.Z)((t=>{let{open:e}=t;return{position:"fixed",right:0,top:"55px",transition:"all 0.3s ease-in-out",backgroundColor:" gray",height:" 100%",color:"white",background:c.Z.palette.background.overlay,transform:e?"translateX(0%)":"translateX(100%)","& .bg":{cursor:"pointer",position:"fixed",right:0,background:c.Z.palette.background.overlay,width:"100vw",height:"100vh",transition:"all 0.3s ease-in-out",opacity:e?"1":"0",transform:e?"translateX(0%)":"translateX(100%)"}}}));var D=n(184);const I=function(){const[t,e]=(0,s.useState)(!1),{cartData:n,setCartData:a}=(0,s.useContext)(l.Z),r=(0,o.s0)(),i=(0,o.TH)(),c=t=>n=>{"Tab"!==n.key&&"Shift"!==n.key&&e(t)};return(0,s.useEffect)((()=>{e(!1)}),[i.pathname]),(0,D.jsx)(Y,{children:(0,D.jsxs)(d.Z,{children:[(0,D.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,D.jsx)(h.Z,{href:"#",children:(0,D.jsx)(w.Z,{color:"my_white"})}),(0,D.jsx)(h.Z,{href:"#",children:(0,D.jsx)(v.Z,{color:"my_white"})}),(0,D.jsx)(h.Z,{href:"#",children:(0,D.jsx)(C.Z,{color:"my_white"})})]}),(0,D.jsx)(E,{onClick:()=>{r("/")},children:(0,D.jsx)(x.Z,{component:"h4",variant:"subtitle",className:"absolute-center",color:"white",children:"Guitar Shop"})}),(0,D.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,D.jsx)(p.Z,{onClick:()=>{r("/cart")},children:(0,D.jsx)(m.Z,{badgeContent:n.length,color:"secondary",children:(0,D.jsx)(S.Z,{sx:{fill:"white"}})})}),(0,D.jsx)(p.Z,{onClick:c(!t),children:(0,D.jsx)(y.Z,{sx:{fill:"white"}})})]})]}),(0,D.jsxs)(N,{anchor:"right",open:t,children:[(0,D.jsx)(g.Z,{className:"bg",onClick:()=>e(!1)}),(0,D.jsxs)(g.Z,{sx:{width:250},role:"presentation",onClick:c(!1),onKeyDown:c(),children:[(0,D.jsx)(f.Z,{children:[{text:"Home",link:"/"},{text:"Electric Guitars",link:"/products/electric-guitars"},{text:"Bass Guitars",link:"/products/bass-guitars"},{text:"Acoustic Guitars",link:"/products/acoustic-guitars"}].map(((t,e)=>(0,D.jsx)(j.ZP,{disablePadding:!0,onClick:()=>{r(t.link)},children:(0,D.jsx)(Z.Z,{children:(0,D.jsx)(b.Z,{primary:t.text})})},t.text)))}),(0,D.jsx)(k.Z,{})]})]})]})})};var G=n(3838);const W=function(){const[t,e]=(0,s.useState)(""),[n,a]=(0,s.useState)(""),[r,i]=(0,s.useState)("");return(0,D.jsx)(g.Z,{component:"footer",sx:{backgroundImage:"url(https://www.ibanez.com/common/images/footer_bg.jpg)"},children:(0,D.jsxs)(d.Z,{sx:{padding:"50px"},children:[(0,D.jsx)(x.Z,{align:"center !important",variant:"headline2",component:"h4",mb:"50px",children:"Contact Us"}),(0,D.jsx)("form",{onSubmit:s=>{s.preventDefault(),console.log("Form submitted with data:",t,n,r),e(""),a(""),i("")},children:(0,D.jsxs)(u.Z,{children:[(0,D.jsxs)(u.Z,{direction:"row",justifyContent:"space-around",spacing:2,mb:"15px",children:[(0,D.jsx)(G.Z,{label:"Name",variant:"standard",required:!0,className:"form-input",fullWidth:!0,value:t,onChange:t=>e(t.target.value)}),(0,D.jsx)(G.Z,{label:"Email",type:"email",variant:"standard",required:!0,className:"form-input",fullWidth:!0,value:n,onChange:t=>a(t.target.value)}),(0,D.jsx)(G.Z,{label:"Phone",type:"tel",variant:"standard",className:"form-input",fullWidth:!0,value:r,onChange:t=>i(t.target.value)})]}),(0,D.jsx)(p.Z,{variant:"containedRed",type:"submit",sx:{marginInline:"auto"},children:"Send"})]})})]})})};var z=n(2885);const F=()=>{const[t,e]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const t=()=>{const t=window.scrollY;e(t>400)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[]),(0,D.jsx)(D.Fragment,{children:t&&(0,D.jsx)(p.Z,{variant:"containedRed",sx:{position:"fixed",bottom:"100px",right:"10px",minWidth:"32px",padding:"5px",zIndex:5},onClick:()=>window.scrollTo(0,0),children:(0,D.jsx)(z.Z,{})})})};const P=function(t){let{children:e}=t;return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(s.Suspense,{fallback:(0,D.jsx)(i.Z,{}),children:[(0,D.jsx)(I,{}),e,(0,D.jsx)(F,{}),(0,D.jsx)(W,{})]})})}}}]);
//# sourceMappingURL=159.58696f2e.chunk.js.map