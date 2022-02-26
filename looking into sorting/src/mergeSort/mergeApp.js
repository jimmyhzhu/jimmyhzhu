import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import MsCodeBox from './msCodeBox'
import $ from "jquery/dist/jquery.min";

class MergeApp extends Component {
  constructor(props) {
    super(props);
    var n = 15;
    var r = 50;
    var speed = 500;
    var arr = this.randomArr(n, r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    this.state = {
      arr: arr,
      n: n,
      r: r,
      timeID: 0,
      i: 0,
      j: 0,
      // p: arr.length - 1,
      k:0,
      interval: speed,
      sorting: 0,
      resetArr: oArr,
      id: 0,
      initMeansRandom: 'none',
      initMeansInput: 'none',
      highlight: ['','','',''],
      speeds:['慢速', '中速', '极速']
    }

  }

  randomArr(n, r) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      var value = Math.floor(Math.random() * r) + 1;
      arr.push(value)
    }
    return arr;
  }

  random(){
    this.stop();
    var arr = this.randomArr(this.state.n, this.state.r);
    var oArr = [];
    for (var i = 0; i < this.state.n; i++){
      oArr[i] = arr[i];
    }
    this.setState({
      arr: arr,
      n: this.state.n,
      timeID: 0,
      i: 0,
      j: 0,
      k:0,
      // p: arr.length - 1,
      interval: this.state.interval,
      sorting: 0,
      resetArr: oArr,
      id: 0
    });
  }

  init() {
    this.stop();
    var arr = [];
    for (var i=0; i<this.state.n; i++){
      arr[i] = this.state.resetArr[i];
    }
    this.setState({
      arr: arr,
      n: this.state.n,
      timeID: 0,
      i: 0,
      j: 0,
      k:0,
      // p: arr.length - 1,
      interval: this.state.interval,
      resetArr: this.state.resetArr,
      sorting: 0,
      id: 0
    });
  }

  changeInitMeansInput(){
    this.setState({
      initMeansInput: 'block',
      initMeansRandom: 'none'
    });
  }

  changeInitMeansRandom(){
    this.setState({
      initMeansInput: 'none',
      initMeansRandom: 'block'
    });
  }

  render() {
    return (
      <div className = "app">
          <div className="Visualizer">
            <div className={"tutorial"+this.state.sorting}><code>i = {this.state.i}, j = {this.state.j}, a[i] = {this.state.arr[this.state.i]}, a[j] = {this.state.arr[this.state.j]}</code></div>
            <div className="canvas">
              <ItemList arr={this.state.arr} max={this.state.r} i={this.state.i} j={this.state.j} k={this.state.k}  sorting={this.state.sorting}></ItemList>
            </div>
            {/* <div className="buttons">
                排序：<button type="button" className="btn btn-default btn-sm" onClick={() => this.start()}>归并排序</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.random()}>随机化</button><span >&nbsp;&nbsp;&nbsp;</span><br></br>
                速度：<button type="button" className="btn btn-default btn-sm" onClick={() => this.speed(1)}>极速</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.speed(500)}>中速</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.speed(1000)}>慢速</button><span >&nbsp;&nbsp;&nbsp;</span>
                数量：<button type="button" className="btn btn-default btn-sm" onClick={() => this.count(10)}>10</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.count(15)}>15</button><span >&nbsp;&nbsp;&nbsp;</span>
                <button type="button" className="btn btn-default btn-sm" onClick={() => this.count(20)}>20</button><span >&nbsp;&nbsp;&nbsp;</span>
            </div> */}
            <div className="buttons">
              <form action="mergeApp.js">
                  排序：<button type="button" onClick={() => this.start()}>归并排序</button><span >&nbsp;&nbsp;&nbsp;</span>
                  <button type="button" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
                  生成数组方式：&nbsp;&nbsp;
                  <button type="button" onClick={() => this.changeInitMeansRandom()}>随机化生成</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="button" onClick={() => this.changeInitMeansInput()}>自定义数组</button>&nbsp;&nbsp;&nbsp;&nbsp;
                  排序速度：
                    <select onChange={(e)=>this.getValue(e)}>
                      {
                        this.state.speeds.map((ele,index)=>{
                          return(
                            <option key={index}>{ele}</option>
                          )
                        })
                      }
                    </select>
                  <br></br><br></br>
                  <div id="console1" style={{display: this.state.initMeansInput}}>
                  请输入生成数组元素：<input placeholder="请输入至多20个不大于50的数字，用空格分隔" maxLength = "100" size="50" id="inputArray"/>
                  &nbsp;&nbsp;<button type="button" onClick={() => this.getUserInput()}>确定</button><br></br>
                  </div>
                  <div id="console2" style={{display: this.state.initMeansRandom}}>
                  请输入生成数组元素个数：<input placeholder="请输入1至20之间的数字" id="randomNum"/>
                  &nbsp;&nbsp;<button type="button" onClick={() => this.count(parseInt($('input#randomNum').val()))}>随机化</button>
                  <br></br>
                  </div>
              </form>  
            </div>
          </div>
          <MsCodeBox></MsCodeBox>
      </div>
      
    );
  }

  getUserInput(){
    this.stop();
    var a=$('input#inputArray').val().split(" ");
    var arr=[];
    for (var i=0; i<a.length; ++i){
      arr[i] = parseInt(a[i]);
    }
    var oArr = [];
    for (var j = 0; j<arr.length; j++){
      oArr[j] = arr[j];
    }
    this.setState({
      arr: arr,
      n: arr.length,
      timeID: 0,
      i: 0,
      j: 0,
      // p: arr.length - 1,
      k:0,
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr
    })
  }

  getValue=(event)=>{
    console.log(event.target.value);
    if (event.target.value === '慢速') this.speed(500);
    else if (event.target.value === '中速') this.speed(100);
    else if (event.target.value === '极速') this.speed(1);
  }

  count(n){
    this.stop();
    var arr = this.randomArr(n, this.state.r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    this.setState({
      arr: arr,
      n: n,
      timeID: 0,
      i: 0,
      j: 0,
      k:0,
      // p: this.state.arr.length - 1,
      interval: this.state.interval,
      sorting: 0,
      id: 0,
      resetArr: oArr
    });
  }

  speed(speed) {
    if (this.state.sorting === 1) {
      this.stop();
      var timeID = setInterval(
        () => this.sort(),
        speed
      );
      this.setState({
        timeID: timeID,
        sorting: 1,
        interval: speed
      });
    }else{
      this.setState({
        interval: speed
      });
    }

  }

  sort() {
    var arr = [];
    for(var x = 0; x < this.state.n; x++){
      arr[x] = this.state.resetArr[x];
    }
    var arrStates = this.mergeSort(arr);
    if(this.state.id < arrStates.length){
      const { arr: state, index1, index2, index3 } = arrStates[this.state.id];
      this.setState({ 
          arr: state,
          i: index1,
          j: index2,
          k: index3, 
          id: this.state.id + 1
      } );
    } 
    else{this.stop();}
    
  }
  

 mergeSort(arr) {
    let arrStates = [];
    this.mergeSortHelper(arr, 0, arr.length - 1, arrStates);
    return arrStates;
}

mergeSortHelper(arr, start, end, arrStates) {
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    this.mergeSortHelper(arr, start, mid, arrStates);
    this.mergeSortHelper(arr, mid + 1, end, arrStates);
    this.merge( arr, start, mid, end, arrStates );
}

merge(arr, start, mid, end, arrStates) {
    let k = start, i = start, j = mid + 1;
    let arrC = arr.slice();
  while ( i <= mid && j <= end )
  {
    var i2 = i;
    var j2 = j;
    var k2 = k;
    if ( arrC[ i ] <= arrC[ j ] )
    {
      arr[ k++ ] = arrC[ i++ ];
    }
    else
    {
      arr[ k++ ] = arrC[ j++ ];
    }
    if ( i !== i2 )
    {
      const temp = { arr: arr.slice(), index1: i2, index2: j, index3: k };
      arrStates.push( temp );
    }
    if ( j !== j2 )
    {
      const temp = { arr: arr.slice(), index1: i, index2: j2, index3: k };
      arrStates.push( temp );
    }
  }
  while ( i <= mid )
  {
    var i2 = i;
        arr[k++] = arrC[i++];
        const temp = { arr: arr.slice(), index1 :i2, index2 :j, index3:k};
        arrStates.push(temp);
    }
  while ( j <= end )
  {
    var j2 = j;
        arr[k++] = arrC[j++];
        const temp = { arr: arr.slice(), index1 :i, index2 :j2, index3:k};
        arrStates.push(temp);
    }
}

  // sleep(delay) {
  //   var start = (new Date()).getTime();
  //   while ((new Date()).getTime() - start < delay) {
  //     continue;
  //   }
  // }
  /**
     * 开始
     */
  start() {
    var timeID = this.state.timeID;
      var sorting = this.state.sorting;
    //   var arrStates = this.mergeSort(arr);
    if (timeID === 0 && sorting === 0) {
      timeID = setInterval(
        () => this.sort(),
        this.state.interval
      );
      this.setState({
        timeID: timeID,
        sorting: 1
      });
    }

  }
  /**
     * 暂停
     */
  stop() {
    var timeID = this.state.timeID;
    var sorting = this.state.sorting;
    if (timeID !== 0 && sorting === 1) {
      clearInterval(timeID);
      this.setState({
        timeID: 0,
        sorting: 0
      });
    }

  }

}

export default MergeApp;
