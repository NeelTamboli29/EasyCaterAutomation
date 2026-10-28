import{a as ot}from"./chunk-RKW6A63H.js";import{a as at}from"./chunk-R3SOJF74.js";import{a as nt}from"./chunk-UCJI3PYJ.js";import"./chunk-F6ER26HE.js";import"./chunk-DIP6K5AB.js";import"./chunk-76CCYK3J.js";import"./chunk-6A7TG5MD.js";import"./chunk-3TWO7AG3.js";import"./chunk-RPBF2OSQ.js";import"./chunk-24MEETKO.js";import"./chunk-YMT33WXF.js";import"./chunk-BAT4LSVG.js";import"./chunk-3RA3PNJM.js";import"./chunk-LD3PVDKV.js";import"./chunk-J3AQ7QSO.js";import"./chunk-QMN2B6CR.js";import"./chunk-IXHRJVRR.js";import"./chunk-RVYM5UVW.js";import"./chunk-ZKMRC2SW.js";import{n as rt,o as it}from"./chunk-JH56HLXS.js";import"./chunk-X54BPQTD.js";import{O as V,T as X,U as Z,V as j,W as q,X as J,Y as K,Z as Q,_ as Y,k as U}from"./chunk-CEKBYTB2.js";import{F as R,I as et,b as T,m as tt}from"./chunk-KFWGAFSY.js";import{a as l}from"./chunk-B6KXL4RE.js";import"./chunk-NM6J3ND7.js";var lt=U.pie,L={sections:new Map,showData:!1,config:lt},b=L.sections,O=L.showData,St=structuredClone(lt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{b=new Map,O=L.showData,X()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);b.has(t)||(b.set(t,a),T.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>b,"getSections"),Dt=l(t=>{O=t},"setShowData"),yt=l(()=>O,"getShowData"),st={getConfig:xt,clear:wt,setDiagramTitle:K,getDiagramTitle:Q,setAccTitle:Z,getAccTitle:j,setAccDescription:q,getAccDescription:J,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},Tt=l((t,a)=>{ot(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{let a=await nt("pie",t);T.debug(a),Tt(a,st)},"parse")},At=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=At,_t=l(t=>{let a=[...t.values()].reduce((n,m)=>n+m,0),W=[...t.entries()].map(([n,m])=>({label:n,value:m})).filter(n=>n.value/a*100>=1);return et().value(n=>n.value).sort(null)(W)},"createPieArcs"),zt=l((t,a,W,F)=>{T.debug(`rendering pie chart
`+t);let n=F.db,m=Y(),h=it(n.getConfig(),m.pie),H=40,i=18,c=4,S=450,x=S,A=at(a),$=A.append("g");$.attr("transform","translate("+x/2+","+S/2+")");let{themeVariables:o}=m,[M]=rt(o.pieOuterStrokeWidth);M??=2;let ct=h.legendPosition,P=h.textPosition,dt=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(x,S)/2-H,gt=R().innerRadius(dt*f).outerRadius(f),pt=R().innerRadius(f*P).outerRadius(f*P),w=$.append("g");w.append("circle").attr("cx",0).attr("cy",0).attr("r",f+M/2).attr("class","pieOuterCircle");let D=n.getSections(),ht=_t(D),ft=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12],k=0;D.forEach(e=>{k+=e});let G=ht.filter(e=>(e.data.value/k*100).toFixed(0)!=="0"),_=tt(ft).domain([...D.keys()]);w.selectAll("mySlices").data(G).enter().append("path").attr("d",gt).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),w.selectAll("mySlices").data(G).enter().append("text").text(e=>(e.data.value/k*100).toFixed(0)+"%").attr("transform",e=>"translate("+pt.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let ut=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(S-50)/2).attr("class","pieTitleText"),C=[...D.entries()].map(([e,r])=>({label:e,value:r})),u=$.selectAll(".legend").data(C).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);let v=Math.max(...u.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),y=S,z=x+H,s=i+c,E=C.length*s;switch(ct){case"center":u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"top":y+=E,u.attr("transform",(e,r)=>{let d=f,g=-v/2-(i+c),p=r*s-d;return`translate(${g}, ${p})`}),w.attr("transform",()=>`translate(0, ${E+s})`);break;case"bottom":y+=E,u.attr("transform",(e,r)=>{let d=-f-s,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"left":z+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-f-(i+c),p=r*s-d;return"translate("+g+","+p+")"}),w.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:z+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=12*i,p=r*s-d;return"translate("+g+","+p+")"});break}let B=ut.node()?.getBoundingClientRect().width??0,mt=x/2-B/2,vt=x/2+B/2,N=Math.min(0,mt),I=Math.max(z,vt)-N;A.attr("viewBox",`${N} 0 ${I} ${y}`),V(A,y,I,h.useMaxWidth)},"draw"),Et={draw:zt},Bt={parser:bt,db:st,renderer:Et,styles:kt};export{Bt as diagram};
