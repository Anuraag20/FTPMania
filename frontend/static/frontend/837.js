(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[837],{7860:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>me});var a=n(7294),l=n(282),r=n(2795),o=n(170),s=n(3832),m=n(9895),i=n(6617),c=n(5639),d=n(9829),u=n(7850),h=n(1120),E=n(3457);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const p=(0,u.Z)({overrides:{MuiList:{root:{width:"fit-content"}}}}),Z=(0,h.Z)((e=>({root:{display:"flex"},paper:{marginRight:e.spacing(2)}}))),f=e=>{const t=Z(),[n,u]=a.useState(!1),h=a.useRef(null),f=e=>{h.current&&h.current.contains(e.target)||u(!1)};function g(e){"Tab"===e.key&&(e.preventDefault(),u(!1))}const b=a.useRef(n);return a.useEffect((()=>{!0===b.current&&!1===n&&h.current.focus(),b.current=n}),[n]),a.createElement("div",{className:t.root},a.createElement(s.Z,{maxWidth:"xs"},a.createElement(l.Z,{ref:h,"aria-controls":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:()=>{u((e=>!e))}},e.title),a.createElement(i.Z,{open:n,anchorEl:h.current,role:void 0,transition:!0,disablePortal:!0},(({TransitionProps:t,placement:l})=>a.createElement(o.Z,j({},t,{style:{transformOrigin:"bottom"===l?"center top":"center bottom"}}),a.createElement(m.Z,{maxWidth:"md"},a.createElement(E.Z,{theme:p},a.createElement(r.Z,{onClickAway:f},a.createElement(d.Z,{autoFocusItem:n,id:"menu-list-grow",onKeyDown:g},e.list&&e.list,""==e.list&&a.createElement(c.Z,{disabled:!0}," Nothing to see here yet "))))))))))};var g=n(2318);const b=e=>a.createElement(g.Z,{commponent:"h2",variant:"h2",className:"center"},"GoodBye, ",e.name,"!");var y=n(998),v=n(6869),k=n(6062),w=n(5757),C=n(1749),x=n(9956),_=n(2822),z=n(5517),T=n(7497),S=n(3758),N=n(3910),R=n(1578),P=n(381),O=n.n(P),L=n(8623),M=n(6083),Y=n(6856),D=n(5477),B=n(9525),H=n(9669),A=n.n(H),G=n(3957),F=n(463),W=n(7078);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const U=e=>{const[t,n]=(0,a.useState)(.01),[r,o]=(0,a.useState)(),[s,m]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(0);return!0===d&&(L.Z,M.Z,Y.Z,l.Z),a.createElement("div",null,!r&&a.createElement(x.Z,{align:"center",pt:1.5},a.createElement(S.Z,{color:"primary",size:"small",disabled:"posting"==s,"aria-label":"add",onClick:()=>m(!0)},a.createElement(G.Z,null))),r&&!i&&a.createElement(_.Z,null,a.createElement(y.Z,{className:"centerPos"},a.createElement(w.Z,{primary:r.name.length>65?r.name.slice(0,24)+"...: ":r.name+": "}),a.createElement(v.Z,null,a.createElement(D.Z,{size:25,variant:"determinate",value:t})))),a.createElement(L.Z,{open:!0===s,"aria-labelledby":"form-dialog-title"},a.createElement(M.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},"Choose File"),a.createElement(B.Z,{align:"center"},a.createElement(F.Z,{onDrop:e=>{m("posting"),o(e[0]),c(!0)}},(({getRootProps:e,getInputProps:t})=>a.createElement("section",null,a.createElement("div",e(),a.createElement(_.Z,null,a.createElement(y.Z,{className:"centerPos"},a.createElement(v.Z,null,a.createElement(W.Z,null)),a.createElement(w.Z,{primary:"Drag and Drop a File/ Click to Browse"}))),a.createElement("input",I({type:"file"},t()))))))),a.createElement(Y.Z,{align:"center"},a.createElement(l.Z,{onClick:()=>m(!1),color:"secondary"},a.createElement("div",{align:"center"}," Cancel ")))),a.createElement(L.Z,{open:i&&r,"aria-labelledby":"form-dialog-title"},a.createElement(M.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},r&&a.createElement("p",null," Are you sure you want to send ",r.name,"? ")),a.createElement(Y.Z,null,a.createElement(l.Z,{onClick:t=>{e.sizeLeft<r.size?(m(!1),c(!1),u(Math.round(e.sizeLeft/1048576)+"MB")):(t.preventDefault(),m("posting"),c(!1),(()=>{const e={onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total);n(t)},headers:{"content-type":"multipart/form-data"}};var t=new FormData;t.append("file",r,r.name),A().post("/api/file-upload/",t,e).then((e=>{e.data.not_enough_space&&u(e.data.not_enough_space+"B"),m(!1),o()})).catch((e=>{u(!0),o()}))})())},color:"primary"},"Yes"),a.createElement(l.Z,{onClick:()=>{o(),c(!1),m(!1)},color:"secondary"},"No"))),a.createElement(L.Z,{open:d,"aria-labelledby":"form-dialog-title"},a.createElement(M.Z,{id:"form-dialog-title"},"The file exceeds the room limit. You only have ",d," left for this room."),a.createElement(Y.Z,null,a.createElement(l.Z,{onClick:()=>{o(),u(0)},color:"primary"},"OK"))))},K=(0,h.Z)((e=>({divider:{color:"grey"},table:{minWidth:650},chatSection:{width:"100%",height:"60vh"},headBG:{backgroundColor:"#e0e0e0"},borderRight500:{borderRight:"1px solid grey"},messageArea:{height:"50vh",overflowY:"auto",top:"auto",bottom:0},textField:{"& fieldset":{borderRadius:30}}}))),q=e=>{const t=(0,a.useRef)(null),n=K(),[l,r]=(0,a.useState)(""),o=()=>{var t=new(O());l&&l.trim()&&(R.client.send(JSON.stringify({message:{name:e.name,message:l,time:t.format("HH:mm")}})),e.setChatText((n=>[...n,{name:e.name,message:l,time:t.format("HH:mm")}]))),r("")},s=e.members.map((t=>t!=e.name&&a.createElement(y.Z,{key:t},a.createElement(v.Z,null,a.createElement(k.Z,{alt:t}," ",t==e.name?null:t.slice(0,1)," ")),a.createElement(w.Z,{primary:t}," ",t," ")))),i=e.chatText.map(((t,n=0)=>a.createElement(y.Z,{key:n++},a.createElement(C.Z,{container:!0,spacing:1},e.name!=t.name&&a.createElement(C.Z,{item:!0,xs:1},a.createElement(x.Z,{pt:2.5},a.createElement(k.Z,{alt:t.name},"  ",t.name.slice(0,1)," "))),a.createElement(C.Z,{item:!0,xs:11},a.createElement(g.Z,{color:e.name==t.name?"primary":"secondary"},a.createElement(w.Z,{align:t.name==e.name?"right":"left",primary:t.name==e.name?"You":t.name})),a.createElement(w.Z,{style:{"word-wrap":"break-word"},align:t.name==e.name?"right":"left",primary:t.message}),a.createElement(w.Z,{align:t.name==e.name?"right":"left",secondary:t.time})),e.name==t.name&&a.createElement(C.Z,{item:!0,xs:1},a.createElement(x.Z,{pt:2.7},a.createElement(k.Z,{alt:e.name})))))));return(0,a.useEffect)((()=>{t.current&&t.current.scrollIntoView({behaviour:"smooth"})}),[e.chatText]),a.createElement(C.Z,{container:!0,component:m.Z,style:{minWidth:"100vw"},className:n.chatSection},a.createElement(C.Z,{item:!0,xs:2,className:n.borderRight500},a.createElement(_.Z,{style:{maxHeight:"7vh",overflow:"hidden"}},a.createElement(g.Z,{color:e.darkState?"white":"primary",component:"h5",variant:"h5"},"Members (",e.members.length,")")),a.createElement(z.Z,null),a.createElement(x.Z,{style:{maxHeight:"45vh",overflow:"auto"}},a.createElement(_.Z,null,a.createElement(y.Z,{key:e.name},a.createElement(v.Z,null,a.createElement(k.Z,null)),a.createElement(w.Z,null," You ")),s))),a.createElement(C.Z,{item:!0,xs:6,className:n.borderRight500},a.createElement(_.Z,{className:n.messageArea},""==i&&a.createElement(m.Z,{elevation:5,pt:1,align:"center",style:{width:"25vw"}},a.createElement(w.Z,{primary:"Start the convo!"})),i,a.createElement("li",{ref:t})),a.createElement(C.Z,{container:!0},a.createElement(C.Z,{item:!0,xs:11},a.createElement(x.Z,{pl:2},a.createElement(T.Z,{className:n.textField,maxRows:1,value:l,onChange:e=>r(e.target.value),placeholder:"Type Something",onKeyPress:e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(r(""),l&&l.trim()&&o())},variant:"outlined",fullWidth:!0}))),a.createElement(C.Z,{xs:1},a.createElement(x.Z,{pt:.7},a.createElement(S.Z,{size:"small",color:"primary","aria-label":"add",onClick:o}," ",a.createElement(N.Z,null)," "))))),a.createElement(C.Z,{item:!0,xs:4},a.createElement(_.Z,{style:{maxHeight:"7vh",overflow:"hidden"}},a.createElement(g.Z,{color:e.darkState?"white":"primary",component:"h5",variant:"h5"},"Received Files (",Math.round(e.sizeLeft/1048576)," MB Left)")),a.createElement(z.Z,null),a.createElement(x.Z,{style:{height:"44vh",overflow:"auto"}},a.createElement(_.Z,{style:{width:"100%"}},e.files)),a.createElement(z.Z,null),a.createElement(x.Z,{style:{maxHeight:"9vh",overflow:"auto"}},a.createElement(U,{sizeLeft:e.sizeLeft}))))};var J=n(3006),$=n(7907),V=n(5834),Q=n(5258),X=n(8358),ee=n(868),te=n(7212),ne=n(4080),ae=n(7315),le=n(8618),re=n(4059),oe=n(3099);const se=(0,h.Z)((e=>({"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},stickToBottom:{top:"auto",bottom:0},rightAlign:{flexGrow:1},centerHorizontal:{position:"absolute",width:"100%"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},anchor:{color:"inherit",textDecoration:"inherit",textAlign:"right"}}))),me=e=>{const[t,n]=(0,a.useState)(!0),r=e.roomCode,o=e.isHost,s=e.name,m=se(),[i,d]=(0,a.useState)(!0),[u,h]=(0,a.useState)([]),[j,p]=(0,a.useState)(e.isLocked),[Z,v]=(0,a.useState)(!0),[k,w]=(0,a.useState)(),[_,T]=(0,a.useState)("500M"),[N,P]=(0,a.useState)(!1),[O,D]=(0,a.useState)([]),[H,A]=(0,a.useState)([]),[G,F]=(0,a.useState)([]),W=()=>{fetch("/api/get-space/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{T(e.space_left)}))};(0,a.useEffect)((()=>{W(),fetch("/api/get-members/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var t=[];for(let n=0;n<e.members.length;n++)""!==e.members[n]&&t.push(e.members[n]);h(t)})),fetch("/api/get-timeleft/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>w(e.time))),fetch("/api/get-files/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{for(let t=0;t<e.files.length;t++)console.log(e.files[t]),F((n=>[...n,e.files[t]]))})),R.client=new R.w3cwebsocket("ws://"+window.location.host+"/ws/room/"+r+"/"),R.client.onmessage=e=>{let t=JSON.parse(e.data);t.lock_change_exists&&p(t.lock_change),t.member_joined&&(h((e=>[...e,t.member_joined])),D((e=>[...e,"'"+t.member_joined+"' joined!"]))),t.member_rejoined&&(t.member_rejoined.old_name==s?v(!1):t.member_rejoined.old_name==t.member_rejoined.new_name?D((e=>[...e,"'"+t.member_rejoined.new_name+"' rejoined"])):(h((e=>{let n=e.indexOf(t.member_rejoined.old_name);return-1!=n?(e.splice(n,1),[...e,t.member_rejoined.new_name]):e})),D((e=>[...e,"'"+t.member_rejoined.old_name+"' rejoined as '"+t.member_rejoined.new_name+"'"])))),t.member_left&&(t.member_left==s?v(!1):(h((e=>{let n=e.indexOf(t.member_left);return-1!=n&&e.splice(n,1),e})),D((e=>[...e,t.member_left+" has left."])))),t.room_destroyed&&(v(!1),R.client.close()),t.file_download&&(W(),F((e=>[...e,t.file_download])),D((e=>[...e,"A new file has been added."]))),t.message&&(t.message.name==s?A((e=>e)):A((e=>[...e,t.message])))}}),[]);const I=()=>{j?(p(!1),fetch("/api/update-islocked/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))):(p(!0),fetch("/api/update-islocked/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())))},U=()=>{fetch("/api/leave-room/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{v(!1),P(!1)}))},K=()=>{fetch("/api/delete-room/",{method:"PUT",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{v(!1),P(!1)}))};if(Z){const e=O.map((e=>e&&a.createElement("div",null," ",a.createElement(c.Z,{disabled:!0,key:e}," ",e," ")," ",a.createElement(z.Z,null)," "))),h=G.map((e=>e&&a.createElement(y.Z,null,e.file_name.length>40?e.file_name.slice(0,40)+"...":e.file_name,a.createElement(l.Z,{style:{marginLeft:"auto"},size:"20"},a.createElement("a",{className:m.anchor,href:e.file_url,target:"_blank"},a.createElement(oe.Z,null)))))),p=a.createElement(c.Z,null,k&&a.createElement($.CountdownCircleTimer,{size:95,isPlaying:!0,id:"hello",duration:3600,initialRemainingTime:k,onComplete:()=>v(!1),colors:[[t?"#7d4fba":"#3f51b5",.9],[t?"#ff4085":"#f50057",.1]]},(({remainingTime:e})=>{const t=Math.floor(e/60),n=e%60;return w(e),t>=10&&n>=10?a.createElement(g.Z,null," ",t,":",n," "):t>=10&&n<10?a.createElement(g.Z,null," ",t,":0",n," "):n<10?a.createElement(g.Z,null," 0",t,":0",n," "):a.createElement(g.Z,null," 0",t,":",n," ")})));return a.createElement("div",{className:"room"},a.createElement(E.Z,{theme:t?J.$:J.W},a.createElement(V.ZP,null),a.createElement(C.Z,{container:!0,spacing:1,align:"center",className:m.centerHorizontal},a.createElement(C.Z,{item:!0,xs:12},a.createElement(g.Z,{component:"h3",variant:"h3",display:"inline"},"Room Code:"),a.createElement(g.Z,{color:"primary",component:"h3",variant:"h3",display:"inline"},"  ",r)),a.createElement(x.Z,{display:{xs:"none"}},k&&a.createElement($.CountdownCircleTimer,{size:95,isPlaying:!0,duration:3600,initialRemainingTime:k,onComplete:()=>v(!1),colors:[["#3f51b5",.9],["#ff1744",.1]]},(({remainingTime:e})=>{const t=Math.floor(e/60),n=e%60;return w(e),t>=10&&n>=10?a.createElement(g.Z,null," ",t,":",n," "):t>=10&&n<10?a.createElement(g.Z,null," ",t,":0",n," "):n<10?a.createElement(g.Z,null," 0",t,":0",n," "):a.createElement(g.Z,null," 0",t,":",n," ")}))),a.createElement(C.Z,{item:!0,xs:12},a.createElement(q,{darkState:t,chatText:H,setChatText:A,name:s,members:u,client:R.client,files:h,sizeLeft:_}))),a.createElement(Q.Z,{color:"primary",className:m.stickToBottom},a.createElement(X.Z,null,a.createElement(f,{title:"Room Members' Activity",list:e}),a.createElement(f,{title:"Time Left",list:p}),a.createElement("div",{className:m.rightAlign}),a.createElement(S.Z,{color:"secondary","aria-label":"add",className:m.fabButton,onClick:()=>n(!t)},t?a.createElement(le.Z,null):a.createElement(re.Z,null)),a.createElement(z.Z,null),a.createElement(S.Z,{color:"secondary","aria-label":"add",className:m.fabButton,onClick:()=>n(!t)},a.createElement(ee.ZP,{title:t?"You really want to change to light mode?":"MY EYEES, MY EYYEES.",interactive:!0},a.createElement("span",null,t?a.createElement(le.Z,null):a.createElement(re.Z,null)))),a.createElement(x.Z,{edge:"end",pr:5},o&&a.createElement(ee.ZP,{title:j?"Room is locked. Click to let new people join the room":"Room is open for all. Click to prevent new people from joining",interactive:!0},a.createElement(l.Z,{color:"black",onClick:I,startIcon:j?a.createElement(ae.Z,null):a.createElement(ne.Z,null)},j&&a.createElement("div",null," Unlock "),!j&&a.createElement("div",null," Lock "))),!o&&a.createElement(ee.ZP,{title:j?"The room is locked for new people":"The room is open for everyone to join",interactive:!0},a.createElement("span",null,a.createElement(l.Z,{variant:"outline",disabled:!0,startIcon:j?a.createElement(ne.Z,null):a.createElement(ae.Z,null)},j&&"Locked",!j&&"Open")))),a.createElement(x.Z,{edge:"end"},a.createElement(l.Z,{color:"secondary",variant:"contained",onClick:()=>P(!0)},o?"Destroy":"Leave"," Room")))),a.createElement(L.Z,{open:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},a.createElement(M.Z,{id:"alert-dialog-title"}," ",o?"Destroying":"Leaving"," this Room "),a.createElement(B.Z,null,a.createElement(te.Z,{id:"alert-dialog-description"},"Are you sure you want to ",o?"destroy":"leave"," this room?  ",o?"":"You won't be able to rejoin if the room gets locked!")),a.createElement(Y.Z,null,a.createElement(l.Z,{onClick:o?K:U,color:"primary"},"Yes"),a.createElement(l.Z,{onClick:()=>P(!1),color:"primary",autoFocus:!0},"No"))),a.createElement(L.Z,{open:i,"aria-labelledby":"form-dialog-title"},a.createElement(M.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},"Make sure you've read our T&C!"),a.createElement(Y.Z,null,a.createElement(l.Z,{onClick:()=>d(!1),color:"primary"},"I've gone through it"),a.createElement("a",{href:"/terms",className:m.anchor},a.createElement(l.Z,{color:"secondary"},"Take me there"))))))}return a.createElement(E.Z,{theme:J.$}," ",a.createElement(V.ZP,null)," ",a.createElement(b,{name:s})," ")}},6700:(e,t,n)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":9787,"./ky.js":9787,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=6700}}]);