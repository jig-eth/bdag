(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1807],{8959:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(5893),c=n(2285),s=n(3747),o=n.n(s);function i(e){let{title:t,desc:n,description:s,center:i,descriptionWidthFull:l,bigTitle:r,mediumTitle:d}=e;return(0,a.jsx)("section",{className:o().explanationSection,children:(0,a.jsx)(c.Z,{className:o().container,children:(0,a.jsxs)("div",{className:"".concat(o().content," ").concat(o().center),children:[(0,a.jsx)("h2",{className:"".concat(r?o().bigTitle:""," ").concat(d?o().mediumTitle:""),children:t}),(0,a.jsx)("p",{style:l?{width:"100%",maxWidth:"100%"}:null,children:s||n||""})]})})})}n(7294)},1554:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(5893),c=n(2285),s=n(2309),o=n.n(s),i=n(7294),l=n(200),r=n(8029),d=n(1996);function _(e){let{home:t,calculator:n,data:s}=e,[_,u]=(0,i.useState)(-1),[m,h]=(0,i.useState)("All");return(0,a.jsx)("section",{className:o().faqs,id:"faqs",children:t?(0,a.jsx)(c.Z,{className:o().container,children:(0,a.jsxs)("div",{className:"".concat(o().leftContent," ").concat(o().itemsCenter),children:[(0,a.jsx)("h2",{children:s.gen.faqsTitle}),(0,a.jsx)("p",{children:s.gen.faqsDesc})," ",(0,a.jsx)("div",{className:o().button,children:(0,a.jsx)(l.Z,{color:"black",type:"button",href:(0,d.J)(null==s?void 0:s.lang)+"/faqs",children:s.gen.seeAllFaqs})})]})}):(0,a.jsxs)(c.Z,{className:"".concat(o().container," ").concat(o().faqPage),children:[(0,a.jsx)("p",{className:o().title,children:s.gen.answerCommonQuestion}),(0,a.jsxs)("div",{className:o().rightContent,children:[(0,a.jsxs)("div",{className:o().faqSelection,children:[(0,a.jsx)("span",{className:"All"==m?o().active:"",onClick:()=>h("All"),children:"All"}),s.faqsCat.map((e,t)=>(0,a.jsx)("span",{className:m==e.attributes.title?o().active:"",onClick:()=>h(e.attributes.title),children:e.attributes.title},t))]}),(0,a.jsx)("div",{className:o().faqsList,children:s.faqs.map((e,t)=>{var n;return(0,a.jsx)(i.Fragment,{children:("All"===m||(null===(n=e.attributes)||void 0===n?void 0:n["faqs-category"].includes(m)))&&(0,a.jsx)(r.Z,{index:t,q:e.attributes.question,a:e.attributes.answer,active:t===_,setActive:u})},t)})})]})]})})}},7461:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(5893),c=n(2285),s=n(3425),o=n.n(s),i=n(7294),l=n(200),r=n(7555),d=n.n(r),_=n(1955),u=n(5121),m=n(8732),h=n(6501);n(8705);var p=n(2162),x=n(512);function f(e){let{data:t}=e,[n,s]=(0,i.useState)(),[r,f]=(0,i.useState)("us"),[j,g]=(0,i.useState)("coin"),[v,b]=(0,i.useState)(!1),[N,k]=(0,i.useState)(null),[C,w]=(0,i.useState)(""),[y,q]=(0,i.useState)(""),[S,Z]=(0,i.useState)(""),[T,E]=(0,i.useState)(!0),[H,F]=(0,i.useState)(!1),A=(0,p.Z)();(0,i.useEffect)(()=>{S&&(["scott.ashby@blockdag.network","mathew.jones@blockdag.network","guy.freeman@blockdag.network","ruben.vilone@blockdag.network","ezra.hart@blockdag.network","jack@blockdag.network","hunter@blockdag.network","jackson@blockdag.network","paris.dubois@blockdag.network"].find(e=>e==S)?E(!1):E(!0))},[S]),(0,i.useEffect)(()=>{if(A){let e=_.Z.get("countryCode");e?f(e):async function(){try{let e=await u.Z.get("https://api.ipify.org?format=json"),t=e.data.ip,n=await u.Z.get("https://ipinfo.io/".concat(t,"/?token=1e9cf092a79688")),a=n.data;a&&a.country&&f(a.country.toLowerCase())}catch(e){console.error("Error fetching user IP or country code:",e)}}()}},[A]);let B=e=>{let t=!e.target.closest(".".concat(o().custom_select));t&&v&&b(!1)};(0,i.useEffect)(()=>(document.addEventListener("click",B),()=>{document.removeEventListener("click",B)}),[v]);let I=()=>{F(!0),u.Z.post("".concat(m.XI,"/leads/createLead"),{type:"private_client",source:"website",full_name:"".concat(C),email:y,mobile:n,option:N},m.ob).then(e=>{F(!1),201==e.status?h.ZP.success("Your details have been submitted and you will receive correspondence shortly"):h.ZP.error("Something went wrong!")})};return(0,i.useEffect)(()=>{k(null)},[j]),(0,a.jsx)("section",{className:o().contact,children:(0,a.jsx)(c.Z,{className:o().container,children:(0,a.jsxs)("div",{className:o().content,children:[(0,a.jsx)("h3",{className:o().title,children:t.page.contact}),(0,a.jsxs)("div",{className:o().buttons,children:[(0,a.jsxs)(l.Z,{type:"button",className:"".concat(o().tokenButton," ").concat("miner"===j?o().passiveButton:""),onClick:()=>g("coin"),children:[(0,a.jsx)("span",{className:"d-md",children:"COINS"}),(0,a.jsx)("span",{className:"d-sm",children:"COINS"})]}),(0,a.jsxs)(l.Z,{type:"button",className:"".concat(o().miningButton," ").concat("coin"===j?o().passiveButton:""),onClick:()=>g("miner"),children:[(0,a.jsx)("span",{className:"d-md",children:"MINERS"}),(0,a.jsx)("span",{className:"d-sm",children:"MINERS"})]})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),I()},className:o().form,children:[(0,a.jsx)("input",{name:"name",type:"text",placeholder:t.page.name,onChange:e=>w(e.target.value)}),(0,a.jsx)("input",{name:"email",type:"email",required:!0,placeholder:t.page.email,onChange:e=>q(e.target.value)}),(0,a.jsx)(d(),{className:o().phoneInput,value:n,onChange:e=>s(e),inputClass:o().phone_input,country:r,inputProps:{name:"Phone",placeholder:"Phone Number",autoFocus:!1,name:"mobile"}}),(0,a.jsxs)("div",{className:"".concat(o().custom_select," ").concat(v?o().active:""),onClick:()=>b(e=>!e),children:[(0,a.jsxs)("span",{translate:"no",className:"".concat(N?o().selected:""),children:[N||"Purchase Amount",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",children:(0,a.jsx)("path",{d:"M1 1L7 7L13 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("ul",{children:"coin"===j?["$0-$999","$1,000-$4,999","$5,000-$24,999","$25,000-$99,999","$100,000-$499,999","$500,000-$1,000,000+"].map((e,t)=>(0,a.jsx)("li",{translate:"no",onClick:()=>k(e),className:N==e?o().selected:"",children:e},t)):["10-25 x100 miners","25-50 x100 miners","50-250 x100 miners","250+ x100 miners"].map((e,t)=>(0,a.jsx)("li",{translate:"no",onClick:()=>k(e),className:N==e?o().selected:"",children:e},t))})]}),(0,a.jsx)(l.Z,{type:"submit",disabled:H,className:o().button,children:t.page.submit})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:(0,x.Z)(o().form,o().formVerification),children:[(0,a.jsx)("h5",{className:o().titleVerification,children:"Verification"}),(0,a.jsx)("p",{children:"Please verify the email of the private clients manager if contacted."}),(0,a.jsx)("input",{className:(0,x.Z)(o().verifyEmail,S&&!T&&o().success,S&&T&&o().error),type:"email",name:"email2",required:!0,placeholder:"Email",onChange:e=>Z(e.target.value)})]})]})})})}},2354:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(5893),c=n(2285),s=n(7465),o=n.n(s);n(7294);var i=n(3750),l=n(1664),r=n.n(l),d=n(6542),_=n(8377),u=n(1996);function m(e){var t,n;let{slug:s,title:l,img:m,link:h,imgMobil:p,isTokenomics:x,imgStyle:f,imgMobileStyle:j,disableHome:g,fullWidth:v,isNews:b,blog:N,mini:k,devReleases:C,updatedDaily:w,data:y}=e,{currentLanguage:q,homeText:S}=(0,_.$)();return(0,a.jsx)(a.Fragment,{children:k?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:o().miniBanner,children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{className:o().slug,children:[!g&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{style:{color:"white"},href:"".concat((0,u.J)(q)?(0,u.J)(q):"/"),children:S}),(0,a.jsx)(i.fmn,{})]}),(0,a.jsx)(r(),{className:o().active,href:"".concat((0,u.J)(q),"/").concat(h),children:s})]})})})}):(0,a.jsx)("section",{className:"".concat(o().topHero," ").concat(x?o().tokenomicsTopHero:""),children:(0,a.jsx)(c.Z,{className:o().container,children:(0,a.jsxs)("div",{className:o().banner,children:[w&&(0,a.jsxs)("span",{className:o().updatedDaily,children:[(null==y?void 0:null===(t=y.page)||void 0===t?void 0:t.updatedDaily)||"Updated daily",(0,a.jsx)("br",{})," ",(null==y?void 0:null===(n=y.page)||void 0===n?void 0:n.monFri)||"Mon-Friday"]}),(0,a.jsx)("div",{className:o().banner_bg,children:(0,a.jsx)(d.Z,{hero:!0,src:"images/modern-bg.webp",alt:"banner bg"})}),(0,a.jsxs)("div",{className:o().slug,children:[!g&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{style:{color:"white"},href:"".concat((0,u.J)(q)?(0,u.J)(q):"/"),children:S}),(0,a.jsx)(i.fmn,{})]}),(0,a.jsx)(r(),{className:o().active,href:"".concat((0,u.J)(q),"/").concat(h),children:s})]}),(0,a.jsx)("h1",{className:"".concat(N?o().blogNews:""," ").concat(C?o().devReleases:""),children:l}),(0,a.jsx)("div",{className:"".concat(o().background," ").concat(v?o().fullWidth:""," ").concat(b?o().news:""," ").concat(N?o().blogNews:""," "),style:f,children:(0,a.jsx)(d.Z,{hero:!0,src:m,className:"d-md"})}),(0,a.jsx)("div",{className:"".concat(o().background," ").concat(v?o().fullWidth:""," ").concat(b?o().news:""," ").concat(N?o().blogNews:""),style:j,children:p&&(0,a.jsx)(d.Z,{hero:!0,src:p,className:"d-sm"})})]})})})})}},8029:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(5893),c=n(7294),s=n(372),o=n.n(s),i=n(8716);function l(e){let{q:t,a:n,index:s,active:l,setActive:r,style:d,isHtml:_}=e,[u,m]=(0,c.useState)(0),h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{l?m(h.current.scrollHeight):m(0)},[l,s]),(0,a.jsxs)("div",{className:"".concat(o().accordion," ").concat(l?o().active:""),style:d,children:[(0,a.jsxs)("h5",{onClick:()=>r(l?-1:s),children:[t,l?(0,a.jsx)(i.WF,{className:o().icon}):(0,a.jsx)(i.v3,{className:o().icon})]}),(0,a.jsx)("div",{className:o().dropdown,style:{maxHeight:u},ref:h,children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})]})}},3747:function(e){e.exports={explanationSection:"ExplanationSection_explanationSection__IZQdf",container:"ExplanationSection_container___rJl4",content:"ExplanationSection_content__NsJxh",center:"ExplanationSection_center__u7206",bigTitle:"ExplanationSection_bigTitle__g_Y7i",mediumTitle:"ExplanationSection_mediumTitle__Zh3hY"}},2309:function(e){e.exports={faqs:"Faqs_faqs__8IvuE",itemsCenter:"Faqs_itemsCenter__NJv6s",faqPage:"Faqs_faqPage__kgNOV",rightContent:"Faqs_rightContent__d_T4E",faqSelection:"Faqs_faqSelection__2_IKr",active:"Faqs_active__DAb93",title:"Faqs_title__SpfuT",container:"Faqs_container__9CH0N",leftContent:"Faqs_leftContent__pxmgY",button:"Faqs_button__8GB1h",faqsList:"Faqs_faqsList__kSRje"}},3425:function(e){e.exports={contact:"Contact_contact__JXaDJ",phone_input:"Contact_phone_input__VzaGE",phoneInput:"Contact_phoneInput__XGizb",custom_select:"Contact_custom_select__H5PVm",selected:"Contact_selected__djoqH",active:"Contact_active__taTQg",container:"Contact_container__i3b1W",content:"Contact_content__N69sB",title:"Contact_title__R_N2n",titleVerification:"Contact_titleVerification__CO1_N",buttons:"Contact_buttons__hD38U",miningButton:"Contact_miningButton___mK9o",tokenButton:"Contact_tokenButton__WCwKj",passiveButton:"Contact_passiveButton__ab_zI",form:"Contact_form__2kknC",formVerification:"Contact_formVerification__wSODv",checkbox:"Contact_checkbox__hOvlx",button:"Contact_button__gtOeG",verifyEmail:"Contact_verifyEmail__MPAEK",success:"Contact_success__YF431",error:"Contact_error__kAFba"}},7465:function(e){e.exports={tokenomicsTopHero:"TopHero_tokenomicsTopHero__bSzVi",bacground:"TopHero_bacground__RgbZK",topHero:"TopHero_topHero__7dhN_",container:"TopHero_container__IbVVb",banner:"TopHero_banner__B3CAe",banner_bg:"TopHero_banner_bg__QGj_s",updatedDaily:"TopHero_updatedDaily__w2jgv",slug:"TopHero_slug__7lZP_",active:"TopHero_active__QUeAU",devReleases:"TopHero_devReleases__8T3lV",blogNews:"TopHero_blogNews__qoyvE",background:"TopHero_background__cclBB",fullWidth:"TopHero_fullWidth__xB1O_",news:"TopHero_news__M5YR6"}},372:function(e){e.exports={accordion:"Accordion_accordion__Z2MKz",icon:"Accordion_icon__jRmvC",dropdown:"Accordion_dropdown__lY7qv",active:"Accordion_active__0izAJ"}}}]);