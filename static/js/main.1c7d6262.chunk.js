(this["webpackJsonpproject-nameclicker-idle"]=this["webpackJsonpproject-nameclicker-idle"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var a=i(2),c=i(3),r=i(1),s=i(5),n=i(4),l=i(0),o=i.n(l),u=i(7),b=i.n(u);i(13);function k(e){return Math.abs(Number(e))>=1e57?(Math.abs(Number(e))/1e57).toFixed(2)+" Octodecillion":Math.abs(Number(e))>=1e54?(Math.abs(Number(e))/1e54).toFixed(2)+" Septendecillion":Math.abs(Number(e))>=1e51?(Math.abs(Number(e))/1e51).toFixed(2)+" Sexdecillion":Math.abs(Number(e))>=1e48?(Math.abs(Number(e))/1e48).toFixed(2)+" Quindecillion":Math.abs(Number(e))>=1e45?(Math.abs(Number(e))/1e45).toFixed(2)+" Quattuordecillion":Math.abs(Number(e))>=1e42?(Math.abs(Number(e))/1e42).toFixed(2)+" Tredecillion":Math.abs(Number(e))>=1e39?(Math.abs(Number(e))/1e39).toFixed(2)+" Duodecillion":Math.abs(Number(e))>=1e36?(Math.abs(Number(e))/1e36).toFixed(2)+" Undecillion":Math.abs(Number(e))>=1e33?(Math.abs(Number(e))/1e33).toFixed(2)+" Decillion":Math.abs(Number(e))>=1e30?(Math.abs(Number(e))/1e30).toFixed(2)+" Nonillion":Math.abs(Number(e))>=1e27?(Math.abs(Number(e))/1e27).toFixed(2)+" Octillion":Math.abs(Number(e))>=1e24?(Math.abs(Number(e))/1e24).toFixed(2)+" Septillion":Math.abs(Number(e))>=1e21?(Math.abs(Number(e))/1e21).toFixed(2)+" Sextillion":Math.abs(Number(e))>=1e18?(Math.abs(Number(e))/1e18).toFixed(2)+" Quintillion":Math.abs(Number(e))>=1e15?(Math.abs(Number(e))/1e15).toFixed(2)+" Quadrillion":Math.abs(Number(e))>=1e12?(Math.abs(Number(e))/1e12).toFixed(2)+" Trillion":Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(2)+" Billion":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(2)+" Million":Math.abs(Number(e).toFixed(0))}var h={padding:"1em",width:"14em",whiteSpace:"nowrap",display:"block",border:"3px solid #e6e6e6",overflow:"hidden"},m={margin:".1em"},C=function(e){Object(s.a)(i,e);var t=Object(n.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return o.a.createElement("div",{style:h},o.a.createElement("h3",null,"Stats"),o.a.createElement("p",{style:m},"Per autoclick:\xa0",k(this.props.amountPerAutoClick/(this.props.autoClickSpeed/1e3)),"/s"),o.a.createElement("p",{style:m},"Per selfclick:\xa0",k(this.props.amountPerClick)),o.a.createElement("p",{style:m},"Total Clicks:\xa0",k(this.props.clicksTotal)),o.a.createElement("br",null),o.a.createElement("p",{style:m},"Pinecones:\xa0",k(this.props.pineconesCurrent)))}}]),i}(o.a.Component),P={color:"#FFFBDB",marginLeft:"20vw",userSelect:"none"},d={borderStyle:"none",marginLeft:"20px",minWidth:"5em",backgroundColor:"#DA7422",minHeight:"2.3em"},p={borderStyle:"none",marginLeft:"20px",minWidth:"5em",minHeight:"2.3em",backgroundColor:"grey",pointerEvents:"none"},x=function(e){Object(s.a)(i,e);var t=Object(n.a)(i);function i(e){var c;Object(a.a)(this,i),(c=t.call(this,e)).state={clicksTotal:9999999999,clicksCurrent:9999999999,pineconesCurrent:0,amountPerClick:1,amountPerAutoClick:0,autoClickSpeed:1e3,amountPerAutoClickPrice2x:60,amountPerAutoClickPrice4x:80,amountPerClickPrice2x:100,amountPerClickPrice4x:120,pineconePrice:1e5,autoClickSpeedPrice:600,increaseBasePrice2xPrice:0,two:2,four:4},c.handleClickerButton=c.handleClickerButton.bind(Object(r.a)(c)),c.buyAuto2x=c.buyAuto2x.bind(Object(r.a)(c)),c.buyAuto4x=c.buyAuto4x.bind(Object(r.a)(c)),c.buyExClick2x=c.buyExClick2x.bind(Object(r.a)(c)),c.buyExClick4x=c.buyExClick4x.bind(Object(r.a)(c)),c.buyAutoSpeed2x=c.buyAutoSpeed2x.bind(Object(r.a)(c)),c.buyPinecones=c.buyPinecones.bind(Object(r.a)(c)),c.increaseBasePrice2x=c.increaseBasePrice2x.bind(Object(r.a)(c));var s=1;return setInterval((function(){switch(c.state.autoClickSpeed){case 250:c.setState({clicksTotal:c.state.clicksTotal+c.state.amountPerAutoClick,clicksCurrent:c.state.clicksCurrent+c.state.amountPerAutoClick});break;case 500:2===s&&c.setState({clicksTotal:c.state.clicksTotal+c.state.amountPerAutoClick,clicksCurrent:c.state.clicksCurrent+c.state.amountPerAutoClick}),s>=2?s=1:s++;break;case 750:3===s&&c.setState({clicksTotal:c.state.clicksTotal+c.state.amountPerAutoClick,clicksCurrent:c.state.clicksCurrent+c.state.amountPerAutoClick}),s>=3?s=1:s++;break;case 1e3:4===s&&c.setState({clicksTotal:c.state.clicksTotal+c.state.amountPerAutoClick,clicksCurrent:c.state.clicksCurrent+c.state.amountPerAutoClick}),s>=4?s=1:s++}}),250),c}return Object(c.a)(i,[{key:"handleClickerButton",value:function(){this.setState({clicksTotal:this.state.clicksTotal+this.state.amountPerClick,clicksCurrent:this.state.clicksCurrent+this.state.amountPerClick})}},{key:"buyAuto2x",value:function(){var e=this.state.amountPerAutoClickPrice2x;this.state.clicksCurrent>=e&&this.setState({amountPerAutoClick:this.state.amountPerAutoClick+this.state.two,clicksCurrent:this.state.clicksCurrent-e,amountPerAutoClickPrice2x:e+.1*e})}},{key:"buyAuto4x",value:function(){var e=this.state.amountPerAutoClickPrice4x;this.state.clicksCurrent>=e&&this.setState({amountPerAutoClick:this.state.amountPerAutoClick+this.state.four,clicksCurrent:this.state.clicksCurrent-e,amountPerAutoClickPrice4x:e+.1*e})}},{key:"buyExClick2x",value:function(){var e=this.state.amountPerClickPrice2x;this.state.clicksCurrent>=e&&this.setState({amountPerClick:this.state.amountPerClick+this.state.two,clicksCurrent:this.state.clicksCurrent-e,amountPerClickPrice2x:e+.1*e})}},{key:"buyExClick4x",value:function(){var e=this.state.amountPerClickPrice4x;this.state.clicksCurrent>=e&&this.setState({amountPerClick:this.state.amountPerClick+this.state.four,clicksCurrent:this.state.clicksCurrent-e,amountPerClickPrice4x:e+.1*e})}},{key:"buyAutoSpeed2x",value:function(){var e=this.state.autoClickSpeedPrice;this.state.clicksCurrent>=e&&this.setState({autoClickSpeed:this.state.autoClickSpeed-250,clicksCurrent:this.state.clicksCurrent-e,autoClickSpeedPrice:e+.5*e})}},{key:"buyPinecones",value:function(){var e=this.state.pineconePrice;this.state.clicksCurrent>=e&&this.setState({clicksCurrent:this.state.clicksCurrent-e,pineconesCurrent:this.state.pineconesCurrent+=this.state.two,pineconePrice:2*this.state.pineconePrice})}},{key:"increaseBasePrice2x",value:function(){var e=this.state.increaseBasePrice2xPrice,t=this.state.pineconesCurrent;this.state.pineconesCurrent>=e&&(this.setState({amountPerClick:2*this.state.amountPerClick,amountPerAutoClick:2*this.state.amountPerAutoClick,two:2*this.state.two,four:2*this.state.four,pineconesCurrent:t-e,increaseBasePrice2xPrice:e+this.state.two}),e>0?this.setState({increaseBasePrice2xPrice:e+this.state.two}):this.setState({increaseBasePrice2xPrice:4}))}},{key:"render",value:function(){var e=this.state.clicksCurrent,t=this.state.clicksTotal,i=this.state.pineconesCurrent,a=this.state.pineconePrice,c=this.state.amountPerAutoClickPrice2x,r=this.state.amountPerAutoClickPrice4x,s=this.state.amountPerClickPrice2x,n=this.state.amountPerClickPrice4x,l=this.state.autoClickSpeed,u=this.state.autoClickSpeedPrice,b=this.state.amountPerAutoClick,h=this.state.amountPerClick,m=this.state.increaseBasePrice2xPrice,x=k(this.state.two),y=k(this.state.four);return o.a.createElement("div",{style:P},o.a.createElement("h1",null,"Super Cool Clicker Idle"),o.a.createElement("h2",{style:{border:"3px solid #e6e6e6",width:"10em",whiteSpace:"nowrap",padding:"5px",overflow:"hidden"}}," ",k(e)," "),o.a.createElement("div",{style:{minHeight:"11em",float:"left",marginRight:"1em",display:"block",minWidth:"20em",overflow:"hidden"}}," ",o.a.createElement("button",{type:"button",style:d,onClick:this.handleClickerButton},"Click")," ",o.a.createElement("br",null),t>=15e3&&o.a.createElement("p",null,o.a.createElement("button",{type:"button",style:e>=a?d:p,onClick:this.buyPinecones},"Pinecones +",x),"\xa0 ",k(a)),o.a.createElement("h3",null,"Store"),t>=30&&o.a.createElement("p",null,k(c),o.a.createElement("button",{type:"button",style:e>=c?d:p,onClick:this.buyAuto2x},"Autoclick +",x)),t>=1500&&o.a.createElement("p",null,k(r),o.a.createElement("button",{type:"button",style:e>=r?d:p,onClick:this.buyAuto4x},"Autoclick +",y)),t>=60&&o.a.createElement("p",null,k(s),o.a.createElement("button",{type:"button",style:e>=s?d:p,onClick:this.buyExClick2x},"Selfclick +",x)),t>=1700&&o.a.createElement("p",null,k(n),o.a.createElement("button",{type:"button",style:e>=n?d:p,onClick:this.buyExClick4x},"Selfclick +",y)),t>=300&&l>250&&o.a.createElement("p",null,k(u),o.a.createElement("button",{type:"button",style:e>=u?d:p,onClick:this.buyAutoSpeed2x},"Autoclick -250ms")),t>=15e3&&l<=500&&o.a.createElement("p",null,m>0?k(m)+" pincones":"free",o.a.createElement("button",{type:"button",style:i>=m?d:p,onClick:this.increaseBasePrice2x},"Base incrementals *2"))),o.a.createElement(C,{amountPerAutoClick:b,autoClickSpeed:l,amountPerClick:h,pineconesCurrent:i,clicksTotal:t}))}}]),i}(o.a.Component);b.a.render(o.a.createElement(x,null),document.getElementById("root"))},8:function(e,t,i){e.exports=i(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1c7d6262.chunk.js.map