(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(12),i=a.n(c),r=a(13),l=a(19),u=a(4),o=a(5),m=a(7),h=a(6),d=a(8),p=a(2),C=a(10),g=a(11),b=a.n(g),v=a(3),f=a.n(v),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this))).state={trackPace:"00:00",constPace:"00:00",cutPart:0,cutTime:0,trackId:"",cutsItemUpdate:[],isChangedPace:0},a.onPaceChange=a.onPaceChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onPaceChange",value:function(e){if(f.a.toS(e)>0){var t=this.state.trackId,a=f.a.toS(e)*this.state.cutPart*this.props.distance;this.setState({trackPace:e}),this.setState({cutTime:a}),this.setState({isChangedPace:1});this.state.cutsItemUpdate[t]={pace:e,cuttime:a},this.props.onCutPaceChange(t,e,a,1)}}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.getTrackProps,s=e.source,c=e.pace,i=e.target,r=e.cutsItem,l=void 0===r?[]:r,u=e.trackIndex,o=e.isChangedPaceProp,m=e.isChangedTime,h=e.cuts,d=e.distance,p=this.state.constPace;return this.state.trackId=u,this.state.cutPart=(i.percent-s.percent)/100,this.state.cutsItemUpdate=h,1===m||0===o?(this.state.constPace=c,this.state.cutTime=f.a.toS(this.state.constPace)*this.state.cutPart*d,this.state.cutsItemUpdate[u]={pace:this.state.constPace,cuttime:this.state.cutTime}):1===o&&0===this.state.isChangedPace&&0===m?(this.state.cutTime=f.a.toS(this.state.constPace)*this.state.cutPart*d,this.state.cutsItemUpdate[u]={pace:p,cuttime:this.state.cutTime},this.props.updateChangeTime(0)):1===o&&1===this.state.isChangedPace&&0===m&&(this.state.cutTime=f.a.toS(this.state.trackPace)*this.state.cutPart*d,this.state.cutsItemUpdate[u]={pace:this.state.trackPace,cuttime:this.state.cutTime}),l[u]=this.state.cutsItemUpdate[u],this.props.updateChangeTime(0),n.a.createElement("div",{key:t,"data-pace":this.state.cutsItemUpdate[u].pace,"data-cuttime":this.state.cutsItemUpdate[u].cuttime,"data-id":u},n.a.createElement("div",Object.assign({className:"slide-handle__track",style:{left:"".concat(s.percent,"%"),width:"".concat(i.percent-s.percent,"%")}},a())),n.a.createElement("div",{className:"slide-handle__pace",style:{left:"".concat(s.percent+1,"%")}},n.a.createElement(b.a,{className:"slide-handle__input",value:this.state.cutsItemUpdate[u].pace,onChange:this.onPaceChange})))}}]),t}(s.Component);function P(e){var t=e.handle,a=t.id,s=t.value,c=t.percent,i=e.getHandleProps;return n.a.createElement("div",Object.assign({className:"slider-handles__item",style:{left:"".concat(c,"%")}},i(a)),n.a.createElement("div",{className:"slider-handles__length"},s.toFixed(2),"\xa0\u043a\u043c"))}function k(e,t,a){if(e>0)return f.a.fromS(t/parseFloat(e))}function j(e){var t=e.tick,a=e.count;return n.a.createElement("div",null,n.a.createElement("div",{style:{position:"absolute",marginTop:52,marginLeft:-.5,width:1,height:8,backgroundColor:"silver",left:"".concat(t.percent,"%")}}),n.a.createElement("div",{style:{position:"absolute",marginTop:60,fontSize:10,textAlign:"center",marginLeft:"".concat(-100/a/2,"%"),width:"".concat(100/a,"%"),left:"".concat(t.percent,"%")}},t.value))}var O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onCutPaceChange=function(e,t,s,n){var c=Object(l.a)(a.state.cuts);c[e]={pace:t,cuttime:s},a.state.cuts=c;for(var i=0;i<a.state.cuts.length;i++)a.state.newTimeSec+=Number(a.state.cuts[i].cuttime);a.state.time=f.a.fromS(a.state.newTimeSec,"hh:mm:ss"),a.setState({newTimeSec:0}),a.state.isChangedPaceProp=n},a.onCutMove=function(){for(var e=0;e<a.state.cuts.length;e++)a.state.newCutTimeSec+=Number(a.state.cuts[e].cuttime);a.state.time=f.a.fromS(a.state.newCutTimeSec,"hh:mm:ss"),a.setState({newCutTimeSec:0})},a.updateChangeTime=function(e){a.state.isChangedTime=e},a.state={distance:10,time:"00:40:00",pace:"00:00",cutsCount:2,distanceCuts:[1],cutChanged:"",cuts:[],newTracks:[],newTimeSec:0,newCutTimeSec:0,isChangedTime:0,isChangedPaceProp:0},a.onDistanceChange=a.onDistanceChange.bind(Object(p.a)(Object(p.a)(a))),a.onTimeChange=a.onTimeChange.bind(Object(p.a)(Object(p.a)(a))),a.onCutsChange=a.onCutsChange.bind(Object(p.a)(Object(p.a)(a))),a.onCutPaceChange=a.onCutPaceChange.bind(Object(p.a)(Object(p.a)(a))),a.onCutMove=a.onCutMove.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onDistanceChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;a>0&&a<=300&&(console.log(a),this.setState(Object(r.a)({},s,parseFloat(a))))}},{key:"onTimeChange",value:function(e){this.setState({time:e}),k(this.state.distance,f.a.toS(this.state.time)),this.setState({isChangedTime:1})}},{key:"onCutsChange",value:function(e){var t,a=e.target,s="checkbox"===a.type?a.checked:a.value,n=a.name,c=[];if(Number(s)>0)for(var i=1;i<Number(s);i++)c.push(i);this.setState((t={},Object(r.a)(t,n,Number(s)),Object(r.a)(t,"distanceCuts",c),t))}},{key:"render",value:function(){var e=this,t=k(this.state.distance,f.a.toS(this.state.time)),a=[];return this.state.cuts=a,this.state.pace=t,n.a.createElement("div",null,n.a.createElement(C.c,{domain:[0,this.state.distance],step:.1,mode:2,values:this.state.distanceCuts,onSlideEnd:this.onCutMove,className:"scale"},n.a.createElement(C.b,null,function(e){var t=e.getRailProps;return n.a.createElement("div",Object.assign({className:"scale__rail"},t()))}),n.a.createElement(C.a,null,function(e){var t=e.handles,a=e.getHandleProps;return n.a.createElement("div",{className:"slider-handles scale__handles"},t.map(function(e){return n.a.createElement(P,{key:e.id,handle:e,getHandleProps:a})}))}),n.a.createElement(C.e,null,function(s){var c=s.tracks,i=s.getTrackProps;return n.a.createElement("div",{className:"slider-tracks"},c.map(function(s,c){var r=s.id,l=s.source,u=s.target;return n.a.createElement(E,{key:r,source:l,target:u,getTrackProps:i,distance:e.state.distance,formatTime:f.a.toS(e.state.time),pace:t,onCutPaceChange:e.onCutPaceChange,cutsItem:a,cuts:e.state.cuts,cutsCount:e.state.cutsCount,trackIndex:c,isChangedTime:e.state.isChangedTime,isChangedPaceProp:e.state.isChangedPaceProp,updateChangeTime:e.updateChangeTime,onCutMove:e.onCutMove})}))}),n.a.createElement(C.d,{count:this.state.distance},function(e){var t=e.ticks;return n.a.createElement("div",{className:"slider-ticks"},t.map(function(e){return n.a.createElement(j,{key:e.id,tick:e,count:t.length})}))})),n.a.createElement("div",{className:"scale-data"},n.a.createElement("form",{className:"scale-data__form"},n.a.createElement("label",{className:"scale-data__label"},"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f:",n.a.createElement("input",{className:"scale-data__data",name:"distance",type:"number",value:this.state.distance,onChange:this.onDistanceChange})),n.a.createElement("label",{className:"scale-data__label"},"\u0426\u0435\u043b\u0435\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:",n.a.createElement(b.a,{className:"scale-data__data",value:this.state.time,showSeconds:!0,onChange:this.onTimeChange})),n.a.createElement("label",{className:"scale-data__label"},"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0442\u0435\u043c\u043f: ",n.a.createElement("span",{className:"scale-data__data"},t)),n.a.createElement("label",{className:"scale-data__label"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0440\u0435\u0437\u043a\u043e\u0432:",n.a.createElement("input",{className:"scale-data__data",name:"cutsCount",type:"number",value:this.state.cutsCount,onChange:this.onCutsChange,min:1})))))}}]),t}(s.Component),T=a(15),_=a(17),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"first-screen"},n.a.createElement("div",{className:"header-top"},n.a.createElement("h1",{className:"header-top__title"},"\u0422\u0440\u0438\u0430\u0442\u043b\u043e\u043d\u043d\u044b\u0435 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u044b"),n.a.createElement("div",{className:"header__socials"},n.a.createElement("a",{href:"https://www.facebook.com/seawinda"},n.a.createElement(T.a,{icon:_.a,size:"2x"})),n.a.createElement("a",{href:"https://www.instagram.com/seawinda/"},n.a.createElement(T.a,{icon:_.b,size:"2x"})))))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"socials"})}}]),t}(s.Component);a(32);i.a.render(n.a.createElement(O,null),document.getElementById("run")),i.a.render(n.a.createElement(S,null),document.getElementById("header")),i.a.render(n.a.createElement(N,null),document.getElementById("footer"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9a66753a.chunk.js.map