(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[837],{7860:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>me});var a=n(7294),l=n(282),r=n(2795),o=n(170),s=n(3832),m=n(9895),i=n(6617),c=n(5639),d=n(9829),E=n(7850),u=n(1120),h=n(3457);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const p=(0,E.Z)({overrides:{MuiList:{root:{width:"fit-content"}}}}),f=(0,u.Z)((e=>({root:{display:"flex"},paper:{marginRight:e.spacing(2)}}))),g=e=>{const t=f(),[n,E]=a.useState(!1),u=a.useRef(null),g=e=>{u.current&&u.current.contains(e.target)||E(!1)};function Z(e){"Tab"===e.key&&(e.preventDefault(),E(!1))}const b=a.useRef(n);return a.useEffect((()=>{!0===b.current&&!1===n&&u.current.focus(),b.current=n}),[n]),a.createElement("div",{className:t.root},a.createElement(s.Z,{maxWidth:"xs"},a.createElement(l.Z,{ref:u,"aria-controls":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:()=>{E((e=>!e))}},e.title),a.createElement(i.Z,{open:n,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0},(({TransitionProps:t,placement:l})=>a.createElement(o.Z,j({},t,{style:{transformOrigin:"bottom"===l?"center top":"center bottom"}}),a.createElement(m.Z,{maxWidth:"md"},a.createElement(h.Z,{theme:p},a.createElement(r.Z,{onClickAway:g},a.createElement(d.Z,{autoFocusItem:n,id:"menu-list-grow",onKeyDown:Z},e.list&&e.list,""==e.list&&a.createElement(c.Z,{disabled:!0}," Nothing to see here yet "))))))))))};var Z=n(2318),b=n(9956);const y=e=>a.createElement("div",{className:"center"},a.createElement(Z.Z,{commponent:"h2",variant:"h2"},"GoodBye, ",e.name,"!"),a.createElement("br",null),a.createElement(b.Z,{style:{margin:"auto",textAlign:"center"}},a.createElement("a",{href:"/research",style:{color:"inherit",textDecoration:"inherit"}},a.createElement(l.Z,{color:"primary",variant:"contained"},"Please take a minute to fill out this form!"))));var v=n(998),_=n(6869),k=n(6062),w=n(5757),S=n(1749),N=n(2822),O=n(5517),T=n(7497),C=n(3758),x=n(3910),z=n(1578),R=n(381),H=n.n(R),A=n(8623),L=n(6083),M=n(6856),I=n(5477),P=n(9525),F=n(9669),Y=n.n(F),D=n(3957),B=n(463),W=n(7078);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const U=e=>{const[t,n]=(0,a.useState)(.01),[r,o]=(0,a.useState)(),[s,m]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),[d,E]=(0,a.useState)(0);return!0===d&&(A.Z,L.Z,M.Z,l.Z),a.createElement("div",null,!r&&a.createElement(b.Z,{align:"center",pt:1.5},a.createElement(C.Z,{color:"secondary",size:"small",disabled:"posting"==s,"aria-label":"add",onClick:()=>m(!0)},a.createElement(D.Z,null))),r&&!i&&a.createElement(N.Z,null,a.createElement(v.Z,{className:"centerPos"},a.createElement(w.Z,{primary:r.name.length>65?r.name.slice(0,24)+"...: ":r.name+": "}),a.createElement(_.Z,null,100!=t&&a.createElement(I.Z,{size:25,variant:"determinate",value:t}),100==t&&a.createElement(I.Z,{size:25})))),a.createElement(A.Z,{open:!0===s,"aria-labelledby":"form-dialog-title"},a.createElement(L.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},"Choose File"),a.createElement(P.Z,{align:"center"},a.createElement(B.Z,{onDrop:e=>{m("posting"),o(e[0]),c(!0)}},(({getRootProps:e,getInputProps:t})=>a.createElement("section",null,a.createElement("div",e(),a.createElement(N.Z,null,a.createElement(v.Z,{className:"centerPos"},a.createElement(_.Z,null,a.createElement(W.Z,null)),a.createElement(w.Z,{primary:"Drag and Drop a File/ Click to Browse"}))),a.createElement("input",G({type:"file"},t()))))))),a.createElement(M.Z,{align:"center"},a.createElement(l.Z,{onClick:()=>m(!1),color:"secondary"},a.createElement("div",{align:"center"}," Cancel ")))),a.createElement(A.Z,{open:i&&r,"aria-labelledby":"form-dialog-title"},a.createElement(L.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},r&&a.createElement("p",null," Are you sure you want to send ",r.name,"? ")),a.createElement(M.Z,null,a.createElement(l.Z,{onClick:t=>{e.sizeLeft<r.size?(m(!1),c(!1),E(Math.round(e.sizeLeft/1048576)+"MB")):(t.preventDefault(),m("posting"),c(!1),(()=>{const e={onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total);n(t)},headers:{"content-type":"multipart/form-data"}};var t=new FormData;t.append("file",r,r.name),Y().post("/api/file-upload/",t,e).then((e=>{e.data.not_enough_space&&E(e.data.not_enough_space+"B"),m(!1),o(),z.client.send(JSON.stringify({message:{name:"THIS_IS_SIGNIFYING_THAT_A_FILE_HAS_BEEN_SENT",message:"placeholder",time:"placeholder",fileData:e.data}}))})).catch((e=>{E(!0),o()}))})())},color:"primary"},"Yes"),a.createElement(l.Z,{onClick:()=>{o(),c(!1),m(!1)},color:"secondary"},"No"))),a.createElement(A.Z,{open:d,"aria-labelledby":"form-dialog-title"},a.createElement(L.Z,{id:"form-dialog-title"},"The file exceeds the room limit. You only have ",d," left for this room."),a.createElement(M.Z,null,a.createElement(l.Z,{onClick:()=>{o(),E(0)},color:"primary"},"OK"))))},J=(0,u.Z)((e=>({divider:{color:"grey"},table:{minWidth:650},chatSection:{width:"100%",height:"60vh"},headBG:{backgroundColor:"#e0e0e0"},borderRight500:{borderRight:"1px solid grey"},messageArea:{height:"50vh",overflowY:"auto",top:"auto",bottom:0},textField:{"& fieldset":{borderRadius:30}}}))),K=e=>{const t=(0,a.useRef)(null),n=J(),[l,r]=(0,a.useState)(""),o=()=>{var t=new(H());l&&l.trim()&&(z.client.send(JSON.stringify({message:{name:e.name,message:l,time:t.format("HH:mm")}})),e.setChatText((n=>[...n,{name:e.name,message:l,time:t.format("HH:mm")}]))),r("")},s=e.members.map((t=>t!=e.name&&a.createElement(v.Z,{key:t},a.createElement(_.Z,null,a.createElement(k.Z,{alt:t}," ",t==e.name?null:t.slice(0,1)," ")),a.createElement(w.Z,{primary:t}," ",t," ")))),i=e.chatText.map(((t,n=0)=>a.createElement(v.Z,{key:n++},a.createElement(S.Z,{container:!0,spacing:1},e.name!=t.name&&a.createElement(S.Z,{item:!0,xs:1},a.createElement(b.Z,{pt:2.7,pr:1},a.createElement(k.Z,{alt:t.name},"  ",t.name.slice(0,1)," "))),a.createElement(S.Z,{item:!0,xs:11},a.createElement(Z.Z,{color:e.name==t.name?"primary":"secondary"},a.createElement(w.Z,{align:t.name==e.name?"right":"left",primary:t.name==e.name?"You":t.name})),a.createElement(w.Z,{style:{"word-wrap":"break-word"},align:t.name==e.name?"right":"left",primary:t.message}),a.createElement(w.Z,{align:t.name==e.name?"right":"left",secondary:t.time})),e.name==t.name&&a.createElement(S.Z,{item:!0,xs:1},a.createElement(b.Z,{pt:2.7,pl:1},a.createElement(k.Z,{alt:e.name})))))));return(0,a.useEffect)((()=>{t.current&&t.current.scrollIntoView({behaviour:"smooth"})}),[e.chatText]),a.createElement(S.Z,{container:!0,component:m.Z,style:{minWidth:"100vw"},className:n.chatSection},a.createElement(S.Z,{item:!0,xs:2,className:n.borderRight500},a.createElement(N.Z,{style:{maxHeight:"7vh",overflow:"hidden"}},a.createElement(Z.Z,{color:e.darkState?"white":"primary",component:"h5",variant:"h5"},"Members (",e.members.length,")")),a.createElement(O.Z,null),a.createElement(b.Z,{style:{maxHeight:"45vh",overflow:"auto"}},a.createElement(N.Z,null,a.createElement(v.Z,{key:e.name},a.createElement(_.Z,null,a.createElement(k.Z,null)),a.createElement(w.Z,null," You ")),s))),a.createElement(S.Z,{item:!0,xs:6,className:n.borderRight500},a.createElement(N.Z,{className:n.messageArea},""==i&&a.createElement(m.Z,{elevation:5,pt:1,align:"center",style:{width:"25vw"}},a.createElement(w.Z,{primary:"Start the convo!"})),i,a.createElement("li",{ref:t})),a.createElement(S.Z,{container:!0},a.createElement(S.Z,{item:!0,xs:12},a.createElement(b.Z,{pl:2,pr:2},a.createElement(T.Z,{InputProps:{endAdornment:a.createElement(C.Z,{size:"small",color:"primary","aria-label":"add",onClick:o},a.createElement(x.Z,null))},className:n.textField,maxRows:1,value:l,onChange:e=>r(e.target.value),placeholder:"Type Something...",onKeyPress:e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(r(""),l&&l.trim()&&o())},variant:"outlined",fullWidth:!0}))))),a.createElement(S.Z,{item:!0,xs:4},a.createElement(N.Z,{style:{maxHeight:"7vh",overflow:"hidden"}},a.createElement(Z.Z,{color:e.darkState?"white":"primary",component:"h5",variant:"h5"},"Received Files (",Math.round(e.sizeLeft/1048576)," MB Left)")),a.createElement(O.Z,null),a.createElement(b.Z,{style:{height:"44vh",overflow:"auto"}},a.createElement(N.Z,{style:{width:"100%"}},e.files)),a.createElement(O.Z,null),a.createElement(b.Z,{style:{maxHeight:"9vh",overflow:"auto"}},a.createElement(U,{client:z.client,sizeLeft:e.sizeLeft}))))};var V=n(3006),q=n(7907),$=n(5834),Q=n(5258),X=n(8358),ee=n(868),te=n(7212),ne=n(4080),ae=n(7315),le=n(8618),re=n(4059),oe=n(3099);const se=(0,u.Z)((e=>({"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},stickToBottom:{top:"auto",bottom:0},rightAlign:{flexGrow:1},centerHorizontal:{position:"absolute",width:"100%"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},anchor:{color:"inherit",textDecoration:"inherit",textAlign:"right"}}))),me=e=>{const[t,n]=(0,a.useState)(!0),r=e.roomCode,o=e.isHost,s=e.name,m=se(),[i,d]=(0,a.useState)(!0),[E,u]=(0,a.useState)([]),[j,p]=(0,a.useState)(e.isLocked),[f,_]=(0,a.useState)(!0),[k,w]=(0,a.useState)(),[N,T]=(0,a.useState)("500M"),[x,R]=(0,a.useState)(!1),[I,F]=(0,a.useState)([]),[Y,D]=(0,a.useState)([]),[B,W]=(0,a.useState)([]);var G=new(H());const U=()=>{fetch("/api/get-files/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{W([]);for(let t=0;t<e.files.length;t++)console.log(e.files[t]),W((n=>[...n,e.files[t]]))}))},J=()=>{fetch("/api/get-space/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{T(e.space_left)}))};(0,a.useEffect)((()=>{J(),fetch("/api/get-members/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{var t=[];for(let n=0;n<e.members.length;n++)""!==e.members[n]&&t.push(e.members[n]);u(t)})),fetch("/api/get-timeleft/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>w(e.time))),U(),z.client=new z.w3cwebsocket("ws://"+window.location.host+":8001/ws/room/"+r+"/"),z.client.onmessage=e=>{let t=JSON.parse(e.data);console.log(t),t.member_joined&&(u((e=>[...e,t.member_joined])),F((e=>[...e,"'"+t.member_joined+"' joined!"]))),t.member_rejoined&&(t.member_rejoined.old_name==s?_(!1):t.member_rejoined.old_name==t.member_rejoined.new_name?F((e=>[...e,"'"+t.member_rejoined.new_name+"' rejoined"])):(u((e=>{let n=e.indexOf(t.member_rejoined.old_name);return-1!=n?(e.splice(n,1),[...e,t.member_rejoined.new_name]):e})),F((e=>[...e,"'"+t.member_rejoined.old_name+"' rejoined as '"+t.member_rejoined.new_name+"'"])))),t.room_destroyed&&(_(!1),z.client.close()),t.message&&(t.message.name==s?D((e=>e)):"THIS_IS_SIGNIFYING_THAT_A_FILE_HAS_BEEN_SENT"==t.message.name?(J(),U(),F((e=>[...e,"A new file has been added."]))):"ROOM_HAS_NOW_BEEN_LOCKED_FOR_EVERYONE"==t.message.name?p(!0):"ROOM_HAS_NOW_BEEN_UNLOCKED_FOR_EVERYONE"==t.message.name?p(!1):"SOMEONE_HAS_JUST_LEFT_THE_ROOM"==t.message.name?t.message.member_left==s?_(!1):(u((e=>{let n=e.indexOf(t.message.member_left);return-1!=n&&e.splice(n,1),e})),F((e=>[...e,t.message.member_left+" has left."]))):D((e=>[...e,t.message])))}}),[]);const me=()=>{j?(p(!1),z.client.send(JSON.stringify({message:{name:"ROOM_HAS_NOW_BEEN_UNLOCKED_FOR_EVERYONE",message:"placeholder",time:G.format("HH:mm")}}))):(p(!0),z.client.send(JSON.stringify({message:{name:"ROOM_HAS_NOW_BEEN_LOCKED_FOR_EVERYONE",message:"placeholder",time:G.format("HH:mm")}})))},ie=()=>{fetch("/api/leave-room/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{_(!1),R(!1),z.client.send(JSON.stringify({message:{name:"SOMEONE_HAS_JUST_LEFT_THE_ROOM",message:"placeholder",time:G.format("HH:mm"),member_left:(void 0).name}}))}))},ce=()=>{fetch("/api/delete-room/",{method:"PUT",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{_(!1),R(!1)}))};if(f){const e=I.map((e=>e&&a.createElement("div",null," ",a.createElement(c.Z,{disabled:!0,key:e}," ",e," ")," ",a.createElement(O.Z,null)," "))),u=B.map((e=>e&&a.createElement(v.Z,null,e.file_name.length>40?e.file_name.slice(0,40)+"...":e.file_name,a.createElement(l.Z,{style:{marginLeft:"auto"},size:"20"},a.createElement("a",{className:m.anchor,href:e.file_url,target:"_blank"},a.createElement(oe.Z,null)))))),p=a.createElement(c.Z,null,k&&a.createElement(q.CountdownCircleTimer,{size:95,isPlaying:!0,id:"hello",duration:3600,initialRemainingTime:k,onComplete:()=>_(!1),colors:[[t?"#7d4fba":"#3f51b5",.9],[t?"#ff4085":"#f50057",.1]]},(({remainingTime:e})=>{const t=Math.floor(e/60),n=e%60;return w(e),t>=10&&n>=10?a.createElement(Z.Z,null," ",t,":",n," "):t>=10&&n<10?a.createElement(Z.Z,null," ",t,":0",n," "):n<10?a.createElement(Z.Z,null," 0",t,":0",n," "):a.createElement(Z.Z,null," 0",t,":",n," ")})));return a.createElement("div",{className:"room"},a.createElement(h.Z,{theme:t?V.$:V.W},a.createElement($.ZP,null),a.createElement(S.Z,{container:!0,spacing:1,align:"center",className:m.centerHorizontal},a.createElement(S.Z,{item:!0,xs:12},a.createElement(Z.Z,{component:"h3",variant:"h3",display:"inline"},"Room Code:"),a.createElement(Z.Z,{color:"primary",component:"h3",variant:"h3",display:"inline"},"  ",r)),a.createElement(b.Z,{display:{xs:"none"}},k&&a.createElement(q.CountdownCircleTimer,{size:95,isPlaying:!0,duration:3600,initialRemainingTime:k,onComplete:()=>_(!1),colors:[[t?"#7d4fba":"#3f51b5",.9],[t?"#ff4085":"#f50057",.1]]},(({remainingTime:e})=>{const t=Math.floor(e/60),n=e%60;return w(e),t>=10&&n>=10?a.createElement(Z.Z,null," ",t,":",n," "):t>=10&&n<10?a.createElement(Z.Z,null," ",t,":0",n," "):n<10?a.createElement(Z.Z,null," 0",t,":0",n," "):a.createElement(Z.Z,null," 0",t,":",n," ")}))),a.createElement(S.Z,{item:!0,xs:12},a.createElement(K,{darkState:t,chatText:Y,setChatText:D,name:s,members:E,client:z.client,files:u,sizeLeft:N}))),a.createElement(Q.Z,{color:"primary",className:m.stickToBottom},a.createElement(X.Z,null,a.createElement(g,{title:"Room Members' Activity",list:e}),a.createElement(g,{title:"Time Left",list:p}),a.createElement("div",{className:m.rightAlign}),a.createElement(C.Z,{color:"secondary","aria-label":"add",className:m.fabButton,onClick:()=>n(!t)},t?a.createElement(le.Z,null):a.createElement(re.Z,null)),a.createElement(O.Z,null),a.createElement(C.Z,{color:"secondary","aria-label":"add",className:m.fabButton,onClick:()=>n(!t)},a.createElement(ee.ZP,{title:t?"You really want to change to light mode?":"MY EYEES, MY EYYEES.",interactive:!0},a.createElement("span",null,t?a.createElement(le.Z,null):a.createElement(re.Z,null)))),a.createElement(b.Z,{edge:"end",pr:5},o&&a.createElement(ee.ZP,{title:j?"Room is locked. Click to let new people join the room":"Room is open for all. Click to prevent new people from joining",interactive:!0},a.createElement(l.Z,{color:"black",onClick:me,startIcon:j?a.createElement(ae.Z,null):a.createElement(ne.Z,null)},j&&a.createElement("div",null," Unlock "),!j&&a.createElement("div",null," Lock "))),!o&&a.createElement(ee.ZP,{title:j?"The room is locked for new people":"The room is open for everyone to join",interactive:!0},a.createElement("span",null,a.createElement(l.Z,{variant:"outline",disabled:!0,startIcon:j?a.createElement(ne.Z,null):a.createElement(ae.Z,null)},j&&"Locked",!j&&"Open")))),a.createElement(b.Z,{edge:"end"},a.createElement(l.Z,{color:"secondary",variant:"contained",onClick:()=>R(!0)},o?"Destroy":"Leave"," Room")))),a.createElement(A.Z,{open:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},a.createElement(L.Z,{id:"alert-dialog-title"}," ",o?"Destroying":"Leaving"," this Room "),a.createElement(P.Z,null,a.createElement(te.Z,{id:"alert-dialog-description"},"Are you sure you want to ",o?"destroy":"leave"," this room?  ",o?"":"You won't be able to rejoin if the room gets locked!")),a.createElement(M.Z,null,a.createElement(l.Z,{onClick:o?ce:ie,color:"primary"},"Yes"),a.createElement(l.Z,{onClick:()=>R(!1),color:"secondary",autoFocus:!0},"No"))),a.createElement(A.Z,{open:i,"aria-labelledby":"form-dialog-title"},a.createElement(L.Z,{style:{overflowWrap:"break-word"},id:"form-dialog-title"},"Make sure you've read our ToS in its entirety!"),a.createElement(M.Z,null,a.createElement(l.Z,{onClick:()=>d(!1),color:"primary"},"I've read and accepted it"),a.createElement("a",{href:"/terms",className:m.anchor,target:"_blank"},a.createElement(l.Z,{color:"secondary"},"Take me there"))))))}return a.createElement(h.Z,{theme:V.$}," ",a.createElement($.ZP,null)," ",a.createElement(y,{name:s})," ")}},6700:(e,t,n)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":9787,"./ky.js":9787,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=6700}}]);