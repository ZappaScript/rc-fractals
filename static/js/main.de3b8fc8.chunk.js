(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),i=(a(14),a(3)),c=a(4),p=a(6),h=a(5),d=a(7),s=(a(15),function(t){function e(t){var a;Object(i.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).stepInput=void 0,a.canvasHeight=void 0,a.canvasWidth=void 0,a.pallete=[[38,70,83],[42,157,143],[233,196,106],[244,162,97],[231,111,81]],a.renderCanvas=function(){var t={x:0,y:0},e={x:640,y:640},n={p1:t,p2:e},r=a.stepInput.current.getContext("2d");r.clearRect(t.x,t.y,e.x,e.y),a.recursiveDraw(a.state.depth,n,{r:0,g:0,b:0},r)},a.depthChange=function(t){var e=t.target.valueAsNumber;a.setState({depth:e})},a.drawManHandler=function(){var t=a.stepInput.current.getContext("2d"),e={x:0,y:0},n={x:640,y:640};t.clearRect(e.x,e.y,n.x,n.y),a.drawMandelbrot(t)},a.squareComplex=function(t){return{r:t.r*t.r-t.i*t.i,i:2*t.r*t.i}},a.sumComplex=function(t,e){return{r:t.r+e.r,i:t.i+e.i}},a.mandelbrotIteration=function(t,e){for(var n={r:0,i:0},r=0;r<e;r++)if((n=a.sumComplex(a.squareComplex(n),t)).r*n.r+n.i*n.i>=4){if(0==a.pallete.length)return{r:r/e*255,g:r/e*(r/e)*255,b:255*(1-r/e)};var o=Math.floor(r/e*(a.pallete.length-1));return{r:a.pallete[o][0],g:a.pallete[o][1],b:a.pallete[o][2]}}return{r:0,g:0,b:0}},a.drawMandelbrot=function(t){var e=a.canvasWidth,n=a.canvasHeight,r=t.createImageData(e,n);t.clearRect(0,0,e,n),console.log(e,n);for(var o=0;o<r.data.length;o+=4){var l=(o%(4*e)-2*e)/(e/4),i=(o/(4*e)-n/2)/(n/4),c=a.mandelbrotIteration({r:l,i:i},a.state.depth);r.data[o]=c.r,r.data[o+1]=c.g,r.data[o+2]=c.b,r.data[o+3]=255}t.putImageData(r,0,0)},a.recursiveDraw=function(t,e,n,r){if(!(t<0)){var o=(e.p2.x-e.p1.x)/3,l=(e.p2.y-e.p1.y)/3,i=e.p1.x+o,c=e.p1.y+l,p=Math.floor(t/a.state.depth*(a.pallete.length-1));r.fillStyle="rgb(".concat(a.pallete[p][0],",").concat(a.pallete[p][1],",").concat(a.pallete[p][2],")"),r.fillRect(i,c,o,l);for(var h=0;h<3;h++)for(var d=0;d<3;d++){var s={p1:{x:e.p1.x+o*h,y:e.p1.y+l*d},p2:{x:e.p1.x+o*(h+1),y:e.p1.y+l*(d+1)}};1==h&&1==d||a.recursiveDraw(t-1,s,n,r)}}},a.randomPallete=function(){a.pallete=[];for(var t=0;t<64;t++)a.pallete.push([Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())])},a.state={depth:1},a.stepInput=r.a.createRef(),a.canvasHeight=640,a.canvasWidth=1366,a.pallete=[];for(var n=0;n<0;n++)a.pallete.push([Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random())]);return a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("canvas",{ref:this.stepInput,height:this.canvasHeight,width:this.canvasWidth}),r.a.createElement("input",{type:"number",name:"fract_depth",value:this.state.depth,onChange:this.depthChange,id:Math.random().toString()}),r.a.createElement("button",{onClick:this.renderCanvas}," Render "),r.a.createElement("button",{onClick:this.drawManHandler}," Render Mandelbrot "),r.a.createElement("button",{onClick:this.randomPallete}," Random pallete "))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.de3b8fc8.chunk.js.map