import React, { Component, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import { types } from 'util';

interface Rectangle{
  p1:Point;
  p2:Point
}
interface State{
  
  depth:number;
  ["key"]?:any;
}
interface Point{
  x: number;
  y:number;
} 
interface Complex{
  r:number;
  i:number;
}
interface Color{
  r : number;
  g : number;
  b : number;

}
interface Props{
  test?:string
}
class App extends Component<Props,State> {
  private stepInput : React.RefObject<HTMLCanvasElement>
  private canvasHeight : number;
  private canvasWidth : number;
  private pallete :number[][] = [[38, 70, 83],
    [42, 157, 143],
    [233, 196, 106],
    [244, 162, 97],
    [231, 111, 81]]
  constructor(props:Props) {
    super(props);
    this.state = {depth:1}
    this.stepInput = React.createRef();
    this.canvasHeight = 640;
    this.canvasWidth = 1366;
    this.pallete = []
    for (let i = 0; i<0;i++){
      this.pallete.push([Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)])

    }
}

  renderCanvas = () => {

    var p1:Point = {x:0,y:0}
    var p2:Point = {x:640,y:640}
    var cRect:Rectangle = {p1,p2}
    var canvas :any =  this.stepInput.current
    var ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    
    
    ctx.clearRect(p1.x,p1.y, p2.x,p2.y)
    this.recursiveDraw(this.state.depth, cRect, {r:0,g:0,b:0} ,ctx)


  }

  depthChange = (event:ChangeEvent<HTMLInputElement>) =>{
    let nextValue =  event.target.valueAsNumber;
    this.setState({depth:nextValue})

  }

  drawManHandler= () =>{
    var canvas :any =  this.stepInput.current
    var ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    var p1:Point = {x:0,y:0}
    var p2:Point = {x:640,y:640}
    var cRect:Rectangle = {p1,p2}
    ctx.clearRect(p1.x,p1.y, p2.x,p2.y)
    this.drawMandelbrot(ctx);


  }

  squareComplex=(cNumber:Complex):Complex=>{
    return {r: (cNumber.r*cNumber.r - cNumber.i*cNumber.i), i:2*cNumber.r*cNumber.i }
  
  }
  sumComplex=(c1:Complex,c2:Complex):Complex =>{
    return {r:(c1.r+c2.r), i:(c1.i+c2.i)}

  }

  mandelbrotIteration=(c:Complex,nIt:number):Color=>{
    let cIt:Complex = {r:0,i:0}
    for (let i= 0; i<nIt;i++){
      cIt = this.sumComplex (this.squareComplex(cIt),c)
      if((cIt.r*cIt.r + cIt.i*cIt.i) >= 4 ){
        if(this.pallete.length == 0)
        {return {r:i/nIt *255,g:(i/nIt) *(i/nIt) * 255,b:(1 - i/nIt) *255}}
        else
        {
          let index = Math.floor(i/nIt * (this.pallete.length - 1))
          return {r:this.pallete[index][0],g:this.pallete[index][1],b:this.pallete[index][2]}

        }
      }
    }
    return {r:0,g:0,b:0}
  }

  drawMandelbrot = (ctx:CanvasRenderingContext2D) => {
    let width = this.canvasWidth;
    let height = this.canvasHeight;
    let test = ctx.createImageData(width,height);
    ctx.clearRect(0,0,width,height)
    console.log(width,height)
    
    for (let i = 0; i < test.data.length;i+=4){
      let x = ((i % (width * 4 )) - (width * 2)) / (width/4)
      let y = (i / (width * 4) - (height /2 )) / (height/4)
      let a =this.mandelbrotIteration({r:x,i:y},this.state.depth) 
      
        test.data[i] = a['r'];
        test.data[i+1] = a['g'];
        test.data[i+2] = a['b'];
        test.data[i+3] = 255;
      
     

    }

    ctx.putImageData(test, 0,0);

  
  }

  recursiveDraw =(depth: number, rect:Rectangle, c:Color, ctx:CanvasRenderingContext2D )=>{
    if(depth<0)
    {return;}
    
    let xWidth : number = (rect.p2.x - rect.p1.x)/3;
    let yHeight : number = (rect.p2.y - rect.p1.y)/3;
    let x1 : number = rect.p1.x + xWidth;
    let y1 : number = rect.p1.y + yHeight;
    let index = Math.floor(depth/this.state.depth * (this.pallete.length - 1));
    ctx.fillStyle = `rgb(${this.pallete[index][0]},${this.pallete[index][1]},${this.pallete[index][2]})`
    ctx.fillRect(x1,y1,xWidth,yHeight)

  for (let x : number = 0; x < 3; x++){
    for(let y : number =0; y<3; y++){
      var p1: Point = {x:rect.p1.x + (xWidth) * x, y: rect.p1.y + (yHeight)*y }
      var p2 : Point = {x:rect.p1.x + (xWidth) * (x+1), y: rect.p1.y + (yHeight)* (y+1) }
      var nRect = {p1:p1,p2:p2}
      if(x == 1 && y == 1){ continue;}  
      this.recursiveDraw(depth - 1,nRect, c, ctx )

    }
  }

  }
  randomPallete = () => {
    this.pallete = []
    for (let i = 0; i<64;i++){
      this.pallete.push([Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)])
    }
  }
  render() {
    
    return (
      <div className="App">
        <canvas ref={this.stepInput} height={this.canvasHeight} width={this.canvasWidth} /> 
        <input type="number" name="fract_depth" value = {this.state.depth} onChange={this.depthChange} id={Math.random().toString()}/>
        <button onClick={this.renderCanvas} > Render </button>
        <button onClick={this.drawManHandler} > Render Mandelbrot </button>
        <button onClick={this.randomPallete} > Random pallete </button>

      </div>
    );
  }
}

export default App;
