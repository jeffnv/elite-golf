!function(t){var e={};function s(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e){const s=[],o=JSON.parse('{"par":2,"ballLoc":{"x":78,"y":429},"holeLoc":{"x":421,"y":75},"traps":[],"waters":[],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}}]}'),a=JSON.parse('{"par":2,"ballLoc":{"x":68,"y":455},"holeLoc":{"x":130,"y":460},"traps":[],"waters":[],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":90,"y":499},"end":{"x":129,"y":117}},{"start":{"x":250,"y":269},"end":{"x":389,"y":367}}]}'),i=JSON.parse('{"par":3,"ballLoc":{"x":67,"y":61},"holeLoc":{"x":289,"y":373},"traps":[{"topLeft":{"x":66,"y":294},"bottomRight":{"x":154,"y":460}},{"topLeft":{"x":369,"y":324},"bottomRight":{"x":459,"y":442}},{"topLeft":{"x":227,"y":419},"bottomRight":{"x":285,"y":439}}],"waters":[],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":113,"y":260},"end":{"x":433,"y":262}}]}'),n=JSON.parse('{"par":2,"ballLoc":{"x":448,"y":439},"holeLoc":{"x":326,"y":440},"traps":[{"topLeft":{"x":128,"y":201},"bottomRight":{"x":274,"y":362}}],"waters":[{"topLeft":{"x":358,"y":345},"bottomRight":{"x":407,"y":498}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":319,"y":318},"end":{"x":434,"y":318}}]}'),r=JSON.parse('{"par":3,"ballLoc":{"x":463,"y":476},"holeLoc":{"x":367,"y":474},"traps":[{"topLeft":{"x":256,"y":143},"bottomRight":{"x":494,"y":206}},{"topLeft":{"x":178,"y":256},"bottomRight":{"x":229,"y":338}}],"waters":[{"topLeft":{"x":385,"y":308},"bottomRight":{"x":439,"y":487}},{"topLeft":{"x":55,"y":187},"bottomRight":{"x":147,"y":433}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":457,"y":303},"end":{"x":330,"y":303}},{"start":{"x":57,"y":120},"end":{"x":423,"y":55}},{"start":{"x":123,"y":33},"end":{"x":299,"y":93}}]}'),h=JSON.parse('{"par":3,"ballLoc":{"x":200,"y":400},"holeLoc":{"x":351,"y":158},"traps":[{"topLeft":{"x":243,"y":84},"bottomRight":{"x":448,"y":234}},{"topLeft":{"x":112,"y":331},"bottomRight":{"x":252,"y":438}}],"waters":[{"topLeft":{"x":280,"y":266},"bottomRight":{"x":305,"y":296}},{"topLeft":{"x":97,"y":63},"bottomRight":{"x":153,"y":133}},{"topLeft":{"x":435,"y":387},"bottomRight":{"x":472,"y":434}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":39,"y":223},"end":{"x":76,"y":154}},{"start":{"x":174,"y":147},"end":{"x":205,"y":190}},{"start":{"x":361,"y":360},"end":{"x":421,"y":388}},{"start":{"x":354,"y":458},"end":{"x":401,"y":438}}]}'),c=JSON.parse('{"par":5,"ballLoc":{"x":191,"y":475},"holeLoc":{"x":256,"y":477},"traps":[{"topLeft":{"x":7,"y":236},"bottomRight":{"x":214,"y":286}},{"topLeft":{"x":11,"y":101},"bottomRight":{"x":492,"y":110}}],"waters":[{"topLeft":{"x":213,"y":66},"bottomRight":{"x":237,"y":492}},{"topLeft":{"x":299,"y":204},"bottomRight":{"x":450,"y":222}},{"topLeft":{"x":235,"y":303},"bottomRight":{"x":308,"y":341}},{"topLeft":{"x":442,"y":291},"bottomRight":{"x":497,"y":346}},{"topLeft":{"x":50,"y":29},"bottomRight":{"x":127,"y":37}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":152,"y":259},"end":{"x":212,"y":261}},{"start":{"x":77,"y":257},"end":{"x":15,"y":246}}]}'),l=JSON.parse('{"par":5,"ballLoc":{"x":200,"y":400},"holeLoc":{"x":46,"y":53},"traps":[{"topLeft":{"x":20,"y":427},"bottomRight":{"x":33,"y":452}},{"topLeft":{"x":303,"y":288},"bottomRight":{"x":326,"y":491}},{"topLeft":{"x":334,"y":228},"bottomRight":{"x":497,"y":238}},{"topLeft":{"x":286,"y":10},"bottomRight":{"x":323,"y":204}},{"topLeft":{"x":391,"y":175},"bottomRight":{"x":427,"y":276}}],"waters":[{"topLeft":{"x":6,"y":65},"bottomRight":{"x":33,"y":410}},{"topLeft":{"x":58,"y":71},"bottomRight":{"x":81,"y":406}},{"topLeft":{"x":58,"y":443},"bottomRight":{"x":81,"y":494}},{"topLeft":{"x":75,"y":208},"bottomRight":{"x":332,"y":285}},{"topLeft":{"x":62,"y":431},"bottomRight":{"x":80,"y":449}},{"topLeft":{"x":5,"y":386},"bottomRight":{"x":35,"y":497}},{"topLeft":{"x":56,"y":217},"bottomRight":{"x":74,"y":251}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":82,"y":291},"end":{"x":336,"y":289}},{"start":{"x":337,"y":292},"end":{"x":338,"y":202}},{"start":{"x":340,"y":206},"end":{"x":87,"y":204}},{"start":{"x":90,"y":206},"end":{"x":88,"y":69}},{"start":{"x":59,"y":70},"end":{"x":89,"y":69}},{"start":{"x":381,"y":321},"end":{"x":457,"y":407}},{"start":{"x":374,"y":152},"end":{"x":450,"y":60}},{"start":{"x":246,"y":158},"end":{"x":156,"y":67}},{"start":{"x":138,"y":51},"end":{"x":183,"y":10}}]}'),d=JSON.parse('{"par":5,"ballLoc":{"x":240,"y":467},"holeLoc":{"x":252,"y":36},"traps":[{"topLeft":{"x":119,"y":372},"bottomRight":{"x":351,"y":488}},{"topLeft":{"x":345,"y":108},"bottomRight":{"x":401,"y":271}},{"topLeft":{"x":58,"y":49},"bottomRight":{"x":132,"y":203}},{"topLeft":{"x":203,"y":158},"bottomRight":{"x":292,"y":197}}],"waters":[{"topLeft":{"x":149,"y":404},"bottomRight":{"x":177,"y":438}},{"topLeft":{"x":300,"y":402},"bottomRight":{"x":323,"y":433}},{"topLeft":{"x":153,"y":5},"bottomRight":{"x":339,"y":23}},{"topLeft":{"x":7,"y":316},"bottomRight":{"x":91,"y":495}},{"topLeft":{"x":398,"y":329},"bottomRight":{"x":491,"y":494}},{"topLeft":{"x":158,"y":26},"bottomRight":{"x":222,"y":48}},{"topLeft":{"x":282,"y":28},"bottomRight":{"x":328,"y":47}}],"walls":[{"start":{"x":5,"y":5},"end":{"x":500,"y":5}},{"start":{"x":5,"y":5},"end":{"x":5,"y":500}},{"start":{"x":495,"y":5},"end":{"x":495,"y":495}},{"start":{"x":5,"y":495},"end":{"x":500,"y":495}},{"start":{"x":183,"y":427},"end":{"x":295,"y":423}}]}');s.push(o),s.push(a),s.push(i),s.push(n),s.push(r),s.push(h),s.push(c),s.push(l),s.push(d),t.exports=s},function(t,e,s){"use strict";s.r(e);class o{constructor(t,e){this.parentEl=t,this.payloadReadyCallback=e,this.createCoreElements(),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.getAttribute("width"),this.height=this.canvas.getAttribute("height"),this.modeIndex=0}createCoreElements(){const t=document.createElement("canvas");t.classList.add("game-canvas"),t.setAttribute("width",500),t.setAttribute("height",500),this.parentEl.appendChild(t),this.canvas=t,this.gameModeSpace=document.createElement("div"),this.gameModeSpace.classList.add("game-mode-space"),this.parentEl.appendChild(this.gameModeSpace)}changeMode(t){this.modeIndex=t;const e=this.modes[this.modeIndex];if(e){const t=new e(this.canvas,this.gameModeSpace,this.advanceMode.bind(this));this.swapCurrentMode(t)}else alert("wtf is this?"+state)}advanceMode(t){t&&this.payloadReadyCallback(t),this.changeMode((this.modeIndex+1)%this.modes.length)}run(){this.changeMode(0)}swapCurrentMode(t){this.currentMode&&this.currentMode.dispose(),this.currentMode=t,this.currentMode.run()}}class a{constructor(t,e,s){this.canvas=t,this.gameModeSpace=e,this.ctx=t.getContext("2d"),this.width=t.getAttribute("width"),this.height=t.getAttribute("height"),this.changeGameMode=s,this.events=[],this.gameModeSpace.innerHTML="",this.buildHTMLElements()}run(){this.registerEvents(),this.startAction()}buildHTMLElements(){}registerEvents(){}addEvent(t,e,s){const o=s.bind(this);t.addEventListener(e,o,!1),this.events.push({el:t,eventName:e,callback:o})}removeEvents(){this.events.forEach((function(t){t.el.removeEventListener(t.eventName,t.callback)}))}startAction(){}dispose(){this.removeEvents()}}var i=function(t,e){t.beginPath(),t.moveTo(e.start.x,e.start.y),t.lineTo(e.end.x,e.end.y),t.lineWidth=e.width,t.strokeStyle=e.color,t.stroke()},n=function(t,e){t.beginPath(),t.arc(e.centerX,e.centerY,e.radius,0,2*Math.PI,!1),t.fillStyle=e.color,t.fill()},r=function(t,e,s){const o=(s=s||{}).color||"black",a=s.size||20,i=s.weight||"bold",n=s.x||65,r=s.y||50;t.beginPath(),t.fillStyle=o,t.font=i+" "+a+"pt Arial",t.fillText(e,n,r),t.fill()},h=function(t,e){t.beginPath(),t.fillStyle=e.color,t.fillRect(0,0,e.width,e.height)},c=function(t,e){const s=e.radius||1,o=e.topLeft.x,a=e.topLeft.y,i=e.bottomRight.x-o,n=e.bottomRight.y-a;t.fillStyle=e.color,t.beginPath(),t.moveTo(o+s,a),t.lineTo(o+i-s,a),t.quadraticCurveTo(o+i,a,o+i,a+s),t.lineTo(o+i,a+n-s),t.quadraticCurveTo(o+i,a+n,o+i-s,a+n),t.lineTo(o+s,a+n),t.quadraticCurveTo(o,a+n,o,a+n-s),t.lineTo(o,a+s),t.quadraticCurveTo(o,a,o+s,a),t.closePath(),t.fill()},l=function(t,e){const s=e.y-t.y,o=e.x-t.x;return Math.sqrt(s*s+o*o)};class d extends a{constructor(t,e,s){super(t,e,s),this.playButtonAttrs={radius:150,centerX:250,centerY:250,color:"green"}}registerEvents(){this.addEvent(this.canvas,"mousedown",this.handleClick)}handleClick(t){t.preventDefault();const e={x:t.offsetX,y:t.offsetY};this.insideButton(e,this.playButtonAttrs)&&this.changeGameMode()}insideButton(t,e){const s={x:e.centerX,y:e.centerY};return l(t,s)<=e.radius}startAction(){h(this.ctx,{width:this.width,height:this.height,color:"white"}),r(this.ctx,"CLICK GREEN THING"),n(this.ctx,this.playButtonAttrs)}}class y{constructor(t){}tick(t){this.move&&this.move(),this.render(t),this.subItems&&this.subItems.forEach((function(e){e.tick(t)}))}render(t){}}const p=.3;class x extends y{constructor(t,e){super(),this.topLeft=t,this.bottomRight=e,this.friction=p}render(t){c(t,{color:"khaki",radius:10,topLeft:this.topLeft,bottomRight:this.bottomRight})}contains(t){return t.loc.x<=this.bottomRight.x&&t.loc.x>=this.topLeft.x&&t.loc.y>=this.topLeft.y&&t.loc.y<=this.bottomRight.y}}x.initArray=function(t){const e=[];return t&&t.forEach((function(t){e.push(new x(t.topLeft,t.bottomRight))})),e};class u{constructor(t){this.$scoreEl=t,this.$holeRow=this.$scoreEl.children[0],this.$parRow=this.$scoreEl.children[1],this.$strokesRow=this.$scoreEl.children[2]}makeTD(t=""){const e=document.createElement("td");return e.innerText=t,e}addHole(t,e){this.$holeRow.appendChild(this.makeTD(t)),this.$parRow.appendChild(this.makeTD(e)),this.$strokesRow.appendChild(this.makeTD())}courseLength(t){return this.$strokesRow.children.length}logStroke(t){const e=this.strokes(t);this.strokes(t,e+1)}strokes(t,e){const s=this.$strokesRow.children[t+1];return s.innerText=e||s.innerText,parseInt(s.innerText)||0}par(t,e){const s=this.$parRow.children()[t+1];return s.innerText=e||s.innerText,parseInt(s.innerText)||0}eachHole(t){let e=this.courseLength();for(const s=0;s<e-1;s++)t(this.par(s),this.strokes(s))}totalScore(){let t=0;return this.eachHole((function(e,s){t+=s})),t}totalPar(){let t=0;return this.eachHole((function(e,s){t+=e})),t}}var m=s(0),f=s.n(m);function b(t,e){this.magnitude=t,this.direction=(e+2*Math.PI)%(2*Math.PI)}b.fromCoords=function(t,e){const s=e.y-t.y,o=e.x-t.x,a=Math.atan2(s,o);return new b(l(t,e),a)},b.fromOffsets=function(t,e){const s=Math.atan2(e,t);return new b(Math.sqrt(t*t+e*e),s)},b.prototype.dotProduct=function(t){const e=this.toOffsets(),s=t.toOffsets();return e.x*s.x+e.y*s.y},b.prototype.crossProduct=function(t){},b.prototype.toOffsets=function(){return{x:Math.cos(this.direction)*this.magnitude,y:Math.sin(this.direction)*this.magnitude}},b.prototype.normal=function(){const t=this.toOffsets(),e=Math.sqrt(t.x*t.x+t.y*t.y);return{x:t.y/e,y:-1*t.x/e}};class g extends y{constructor(t,e){super(),this.startLoc={x:t.x,y:t.y},this.loc={x:t.x,y:t.y},this.level=e,this.velocity=new b(0,0)}moving(){return this.velocity.magnitude>0}reset(){this.loc.x=this.startLoc.x,this.loc.y=this.startLoc.y,this.velocity.magnitude=0}render(t){this.renderBall(t)}renderBall(t){n(t,{color:"white",radius:5,centerX:this.loc.x,centerY:this.loc.y})}renderMovementVector(t){const e=this.velocity.toOffsets(),s={x:this.loc.x+50*e.x,y:this.loc.y+50*e.y};i(t,{color:"white",width:2,start:this.loc,end:s})}hit(t,e){delete this.lastBouncedWall;const s=t/20;this.velocity=new b(s,e)}move(){const t=this.velocity.toOffsets();this.loc.x+=t.x,this.loc.y+=t.y,this.applyFriction(),this.processCollisions()}processCollisions(){const t=this;this.level.walls.forEach((function(e){if(e.nearWall(t.loc)&&t.lastBouncedWall!=e){t.lastBouncedWall=e;const s=2*b.fromCoords(e.start,e.end).direction-t.velocity.direction;t.velocity=new b(t.velocity.magnitude,s)}}))}applyFriction(t){const e=this.level.frictionAtLoc(this.loc);this.velocity.magnitude>e?this.velocity.magnitude-=e:this.velocity.magnitude=0}}const L=1;class v extends y{constructor(t,e){super(),this.start=t,this.end=e}wallAngle(){return new Vector(this.start,this.end).direction}nearWall(t){const e=l(this.start,this.end),s=l(this.start,t),o=l(this.end,t);return Math.abs(s+o-e)<L}render(t){i(t,{color:"brown",width:5,start:this.start,end:this.end})}}v.initArray=function(t){const e=[];return t&&t.forEach((function(t){e.push(new v(t.start,t.end))})),e};const w=10,M=2.5;class k extends y{constructor(t){super(),this.loc=t}render(t){n(t,{color:"black",radius:w,centerX:this.loc.x,centerY:this.loc.y})}ballInHole(t){const e=l(this.loc,t.loc),s=t.velocity.magnitude;let o=!1;if(e<w)if(s<=M)o=!0;else{o=!1;const e=.5*Math.random()*Math.PI-.25*Math.PI;t.velocity.direction+=e}return o}}class R extends y{constructor(t,e){super(),this.topLeft=t,this.bottomRight=e}render(t){c(t,{color:"blue",radius:10,topLeft:this.topLeft,bottomRight:this.bottomRight})}contains(t){return t.loc.x<=this.bottomRight.x&&t.loc.x>=this.topLeft.x&&t.loc.y>=this.topLeft.y&&t.loc.y<=this.bottomRight.y}}R.initArray=function(t){const e=[];return t&&t.forEach((function(t){e.push(new R(t.topLeft,t.bottomRight))})),e};const E=8,S=.04;class C extends y{constructor(t,e,s,o,a){super({}),this.mapData=t,this.ball=new g(t.ballLoc,this),this.hole=new k(t.holeLoc),this.walls=v.initArray(t.walls),this.traps=x.initArray(t.traps),this.waters=R.initArray(t.waters),this.dimX=e,this.dimY=s,this.subItems=[].concat(this.traps,this.walls,this.waters),this.subItems.push(this.hole),this.subItems.push(this.ball),this.strokeCallback=o,this.mapOverCallback=a}toJSON(){return JSON.stringify(this.mapData)}ballMoving(){return this.ball.moving()}tick(t){super.tick(t),this.renderVector(t),this.hole.ballInHole(this.ball)?this.mapOverCallback():this.ballInWater()?this.resetBall():this.ballOffMap()&&(alert("Cool it, Hercules."),this.resetBall())}ballInWater(){let t=!1;const e=this.ball;return this.waters.forEach((function(s){s.contains(e)&&(t=!0)})),t}ballOffMap(){return this.ball.loc.x>this.dimX||this.ball.loc.x<0||this.ball.loc.y>this.dimY||this.ball.loc.y<0}resetBall(){this.ball.loc.x=this.mapData.ballLoc.x,this.ball.loc.y=this.mapData.ballLoc.y,this.ball.velocity.magnitude=0}render(t){h(t,{width:this.dimX,height:this.dimY,color:"green"})}renderVector(t){this.vector&&i(t,{color:"aquamarine",width:2,start:this.vector.start,end:this.vector.end})}hitBall(t){delete this.vector,t.magnitude<E||(this.strokeCallback(),this.ball.hit(t.magnitude,t.direction))}frictionAtLoc(t){let e=S;const s=this.ball;return this.traps.forEach((function(t){t.contains(s)&&(e=t.friction)})),e}drawVector(t){const e=t.toOffsets(),s=this.ball.loc;this.vector={start:s,end:{x:s.x+e.x,y:s.y+e.y}}}}class T extends a{constructor(t,e,s){super(t,e,s),this.scoreCard=new u(e.getElementsByTagName("table")[0]),this.mapIndex=0,this.running=!1,this.loadPar(),this.loadMap()}buildHTMLElements(){const t=document.createElement("table");t.classList.add("table","table-condensed","table-bordered"),t.id="score";let e=document.createElement("tr"),s=document.createElement("th");s.innerHTML="",e.appendChild(s),e.classList.add("hole-row"),t.appendChild(e),e=document.createElement("tr"),s=document.createElement("th"),s.innerHTML="Par",e.appendChild(s),e.classList.add("par-row"),t.appendChild(e),e=document.createElement("tr"),s=document.createElement("th"),s.innerHTML="Strokes",e.appendChild(s),e.classList.add("strokes-row"),t.appendChild(e),this.gameModeSpace.appendChild(t)}loadPar(){const t=this;f.a.forEach((function(e,s){t.scoreCard.addHole(s+1,e.par)}))}playNextMap(){if(this.mapIndex++,this.mapIndex<f.a.length)this.loadMap();else{const t=this.scoreCard.totalScore(),e=this.scoreCard.totalPar();this.changeGameMode({score:t,par:e})}}dispose(){this.running=!1,this.removeEvents()}loadMap(){this.map=new C(f.a[this.mapIndex],this.width,this.height,this.logStroke.bind(this),this.playNextMap.bind(this))}logStroke(){this.scoreCard.logStroke(this.mapIndex)}startAction(){this.running=!0,this.tick()}registerEvents(){this.boundMouseHandler=this.handleMouseDown.bind(this),this.canvas.addEventListener("mousedown",this.boundMouseHandler,!1)}handleMouseDown(t){if(this.map.ballMoving())return;const e={x:t.x,y:t.y},s=this;function o(t){const o={x:t.x,y:t.y};s.drawVector(e,o)}this.canvas.addEventListener("mouseup",(function t(a){const i={x:a.x,y:a.y};s.canvas.removeEventListener("mouseup",t),s.canvas.removeEventListener("mousemove",o),s.handleRelease(e,i)}),!1),this.canvas.addEventListener("mousemove",o,!1)}drawVector(t,e){const s=b.fromCoords(t,e);this.map&&this.map.drawVector(s)}handleRelease(t,e){const s=b.fromCoords(t,e);s.direction=(s.direction+Math.PI)%(2*Math.PI),this.map&&this.map.hitBall(s)}tick(){this.running&&requestAnimationFrame(t=>{this.map&&this.map.tick(this.ctx),this.tick()})}}var _={randomMap:function(){const t=this._randomCoords(),e=this._randomCoords(),s=5*Math.random(),o=5*Math.random(),a=5*Math.random(),i=this._randomWalls(s),n=this._randomRects(o),r=this._randomRects(a),h=this._rand(1,4);return this.buildMap({par:h,ballLoc:t,holeLoc:e,walls:i,waters:r,traps:n})},buildMap:function(t){const e=this.emptyMap();return this._mergeMapOptions(e,t),e},_rand:function(t,e){const s=(e=e||500)-(t=t||0);return Math.floor(Math.random()*s+t)},_randomCoords:function(){return{x:this._rand(),y:this._rand()}},_randomCoordSet:function(){const t=this._rand(20,400),e=this._rand(20,400);return[[t,e],[this._rand(t,480),this._rand(e,480)]]},_randomWall:function(){const t=this._randomCoordSet();return{start:{x:t[0][0],y:t[0][1]},end:{x:t[1][0],y:t[1][1]}}},_randomWalls:function(t){const e=[];for(const s=0;s<t;s++)e.push(this._randomWall());return e},_randomRect:function(){const t=this._randomCoordSet();return{topLeft:{x:t[0][0],y:t[0][1]},bottomRight:{x:t[1][0],y:t[1][1]}}},_randomRects:function(t){const e=[];for(const s=0;s<t;s++)e.push(this._randomRect());return e},_mergeMapOptions:function(t,e){for(let s in e)"walls"==s?e.walls.forEach((function(e){t.walls.push(e)})):t[s]=e[s]},emptyMap:function(){return{par:1,ballLoc:{x:200,y:400},holeLoc:{x:400,y:200},traps:[],waters:[],walls:[{start:{x:5,y:5},end:{x:500,y:5}},{start:{x:5,y:5},end:{x:5,y:500}},{start:{x:495,y:5},end:{x:495,y:495}},{start:{x:5,y:495},end:{x:500,y:495}}]}}};const O=0,B=1,I=2,D=3,P=4,A=5;class H extends a{constructor(t,e,s){super(t,e,s),this.tabID="map-creator-tab",this.events=[],this.state=O,this.clicks=[],this.undo_stack=[]}buildHTMLElements(){this.addButtons(),this.$gameModeSpace.append("<br>"),this.$gameModeSpace.append("<label>Par</label>");const t=$('<select id="par-select"></select>');for(let e=1;e<10;e++)t.append('<option value="'+e+'">'+e+"</option>");this.$gameModeSpace.append(t),this.parSelect=t[0],this.$gameModeSpace.append("<label>Load Data</label>"),this.$gameModeSpace.append("<textarea id='load-data'></textarea>")}addButtons(){const t=this;["randomize","generate","load","empty","ballLoc","holeLoc","addWall","addTrap","addWater","undo","publish"].forEach((function(e){const s=$('<button class="map-button">'+e+"</button>");t.$gameModeSpace.append(s),t[e+"Button"]=s[0]}))}undoLastChange(){this.clicks.length>0?this.clicks=[]:this.undo_stack.length>0&&(this.undo_stack.pop()(),this.changeState(O))}registerEvents(){this.addEvent(this.canvas,"mousedown",this.handleMapClick),this.addEvent(this.publishButton,"click",this.publishMap),this.addEvent(this.randomizeButton,"click",this.randomize),this.addEvent(this.loadButton,"click",this.loadData),this.addEvent(this.emptyButton,"click",this.loadEmptyMap),this.addEvent(this.undoButton,"click",this.undoLastChange),this.addEvent(this.ballLocButton,"click",this.changeState.bind(this,B)),this.addEvent(this.holeLocButton,"click",this.changeState.bind(this,I)),this.addEvent(this.addWallButton,"click",this.changeState.bind(this,P)),this.addEvent(this.addTrapButton,"click",this.changeState.bind(this,D)),this.addEvent(this.addWaterButton,"click",this.changeState.bind(this,A))}changeState(t){this.state=t,this.clicks=[],this.loadMap()}loadEmptyMap(){this.mapData=_.emptyMap(),this.loadMap()}loadMap(){this.map=new C(this.mapData,this.width,this.height),this.map.tick(this.ctx)}setBallLoc(){const t=this.mapData.ballLoc,e=function(){this.mapData.ballLoc=t}.bind(this);this.undo_stack.push(e),this.mapData.ballLoc=this.clicks.pop(),this.changeState(O)}setHoleLoc(){const t=this.mapData.holeLoc,e=function(){this.mapData.holeLoc=t}.bind(this);this.undo_stack.push(e),this.mapData.holeLoc=this.clicks.pop(),this.changeState(O)}addWall(){if(2==this.clicks.length){const t=function(){this.mapData.walls.pop()}.bind(this);this.undo_stack.push(t),this.mapData.walls.push({start:{x:this.clicks[0].x,y:this.clicks[0].y},end:{x:this.clicks[1].x,y:this.clicks[1].y}}),this.changeState(O)}}addTrap(){if(2==this.clicks.length){const t=function(){this.mapData.traps.pop()}.bind(this);this.undo_stack.push(t),this.mapData.traps.push({topLeft:{x:this.clicks[0].x,y:this.clicks[0].y},bottomRight:{x:this.clicks[1].x,y:this.clicks[1].y}}),this.changeState(O)}}addWater(){if(2==this.clicks.length){const t=function(){this.mapData.waters.pop()}.bind(this);this.undo_stack.push(t),this.mapData.waters.push({topLeft:{x:this.clicks[0].x,y:this.clicks[0].y},bottomRight:{x:this.clicks[1].x,y:this.clicks[1].y}}),this.changeState(O)}}handleMapClick(t){const e={x:t.offsetX,y:t.offsetY};switch(this.clicks.push(e),this.state){case O:alert("click a button below to add features");break;case B:this.setBallLoc();break;case I:this.setHoleLoc();break;case P:this.addWall();break;case D:this.addTrap();break;case A:this.addWater();break;default:alert("wtf?")}}loadData(){const t=document.getElementById("load-data").value;this.mapData=JSON.parse(t),this.loadMap()}publishMap(){const t=this.selectedPar();this.map.mapData.par=t,this.changeGameMode({par:t,mapJSON:this.map.toJSON()})}selectedPar(){const t=document.getElementById("par-select");return parseInt(t.value)}randomize(){this.mapData=_.randomMap(),this.loadMap()}startAction(){this.loadEmptyMap()}}s.d(e,"default",(function(){return N}));class N extends o{constructor(t,e){super(t,e),this.modes=[d,T],this.completionCallback=e}}window.EliteGolf=N,window.EliteMapCreator=class extends o{constructor(t,e){super(t,e),this.modes=[d,H]}}}]);