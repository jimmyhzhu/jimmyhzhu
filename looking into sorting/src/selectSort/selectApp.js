import React, { Component } from 'react';
import ItemList from './itemList';
import SsCodeBox from './ssCodeBox';
import $ from "jquery/dist/jquery.min";


class SelectApp extends Component {

  constructor(proprs) {
    super(proprs);
    var n = 15;
    var r = 50;
    var speed = 500;
    var arr = this.randomArr(n, r);
    var oArr = [];
    for (var i=0; i<n; i++){
      oArr[i] = arr[i];
    }
    this.state = {
      interval: speed,
      sorting: 0,
      arr: arr,
      // intArr : arr,
      n: n,
      r: r,
      timeID: 0,
      i: 0,
      j: 1,
      p: 1,
      mixIndex:0,
      minValue:arr[0],
      resetArr: oArr,
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
  // random(){
  //   var arr = this.randomArr(this.state.n, this.state.r);
  //   this.setState({
  //     arr: arr,
  //     n: this.state.n,
  //     timeID: 0,
  //     i: 0,
  //     j: 1,
  //     p: 1,
  //     interval: this.state.interval,
  //     sorting: 0,
  //     mixIndex:0,
  //     minValue:arr[0]
  //   });
  // }
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
      j: 1,
      p: 1,
      interval: this.state.interval,
      sorting: 0,
      mixIndex:0,
      minValue:arr[0],
      resetArr: this.state.resetArr
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
      <div  className="app">
        <div className="Visualizer">
          <div className={"tutorial"+this.state.sorting}><code>i = {this.state.i}, j = {this.state.j}, a[j] = {this.state.arr[this.state.j]}, 目前最小值为a[{this.state.mixIndex}] = {this.state.minValue}</code></div>
          <div className="canvas">
            <ItemList arr={this.state.arr} max={this.state.r} i={this.state.i} j={this.state.j} mixIndex={this.state.mixIndex} sorting={this.state.sorting}></ItemList>
          </div>
          {/* <div className="buttons">
              排序：<button type="button" onClick={() => this.start()}>选择排序</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.random()}>随机化</button><span >&nbsp;&nbsp;&nbsp;</span><br></br>
              速度：<button type="button" onClick={() => this.speed(1)}>极速</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.speed(500)}>中速</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.speed(1000)}>慢速</button><span >&nbsp;&nbsp;&nbsp;</span>
              数量：<button type="button" onClick={() => this.count(10)}>10</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.count(15)}>15</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.count(20)}>20</button><span >&nbsp;&nbsp;&nbsp;</span>
          </div> */}
          <div className="buttons">
              <form action="selectApp.js">
                  排序：<button type="button" onClick={() => this.start()}>选择排序</button><span >&nbsp;&nbsp;&nbsp;</span>
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
        <SsCodeBox></SsCodeBox>
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
      j: 1,
      p: 1,
      mixIndex:0,
      minValue:arr[0],
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
      j: 1,
      p:1,
      mixIndex:0,
      minValue:arr[0],
      interval: this.state.interval,
      sorting: 0,
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
    this.selectSort();
  }

  selectSort() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;
    //var p = this.state.p;
    var mixIndex = this.state.mixIndex;
    var minValue = this.state.minValue;

    if (i < (len - 1)) {
      if (j < (len - 1)) {
          if (minValue > arr[j + 1]) {
            minValue = arr[j + 1];
            mixIndex = j+1;
          }
          j=j+1;
        this.setState({
          arr: arr,
          j: j,
          minValue:minValue,
          mixIndex:mixIndex
        });
      } else {
        var temp = arr[i];
        arr[i] = minValue;
        arr[mixIndex] = temp;
        i = i+1;
        j = i;
        mixIndex=j;
        minValue=arr[j];   
        this.setState({
          arr:arr,
          i: i,
          j: j,
          mixIndex:mixIndex,
          minValue:minValue
        });
      }
    } else {
      this.setState({
        i: 0,
        j: 1,
        minValue:arr[0],
        mixIndex:0
      });
      this.stop();
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

export default SelectApp;
