import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import IsCodeBox from './isCodeBox';
import $ from "jquery/dist/jquery.min";


class InsertApp extends Component {

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
      arr: arr,
      n: n,
      r: r,
      timeID: 0,
      i: 1,
      j: 1,
      index: 1,
      value: arr[1],
      interval: speed,
      sorting: 0,
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
      i: 1,
      j: 1,
      index: 1,
      index_insert:-1,
      value: arr[1],
      interval: this.state.interval,
      sorting: 0
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
          <div className={"tutorial"+this.state.sorting}><code>i = {this.state.i}, j = {this.state.j}, 待插入元素a[i] = {this.state.arr[this.state.j]}, 当前元素a[j] = {this.state.arr[this.state.j+1]}</code></div>
          <div className="canvas">
            <ItemList arr={this.state.arr} index_insert={this.state.index_insert} max={this.state.r} i={this.state.i} j={this.state.j} sorting={this.state.sorting} fz={0}></ItemList>
          </div>
          {/* <div className="buttons">
              排序：<button type="button" onClick={() => this.start()}>插入排序</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.init()}>重置</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.init()}>随机化</button><span >&nbsp;&nbsp;&nbsp;</span><br></br>
              速度：<button type="button" onClick={() => this.speed(1)}>极速</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.speed(100)}>中速</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.speed(500)}>慢速</button><span >&nbsp;&nbsp;&nbsp;</span>
              数量：<button type="button" onClick={() => this.count(10)}>10</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.count(15)}>15</button><span >&nbsp;&nbsp;&nbsp;</span>
              <button type="button" onClick={() => this.count(20)}>20</button><span >&nbsp;&nbsp;&nbsp;</span>
          </div> */}
          <div className="buttons">
              <form action="insertApp.js">
                  排序：<button type="button" onClick={() => this.start()}>插入排序</button><span >&nbsp;&nbsp;&nbsp;</span>
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
        <IsCodeBox></IsCodeBox>
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
      // intArr: arr,
      n: arr.length,
      timeID: 0,
      i: 1,
      j: 1,
      index: 1,
      value: arr[1],
      interval: this.state.interval,
      sorting: 0,
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
    this.insertSort();
  }

  
  insertSort() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;

    var index = this.state.index;
    var value = this.state.value;
    var index_insert = -1;
    if (i < len) {
      if (j > 0) {
        if(value < arr[j-1]) {
          arr[j] = arr[j-1];
          arr[j-1] = value;
          index = j-1;
          j = j-1;
        }else {
          arr[index] = value;
          index_insert = index;
          j=i+1;
          i=i+1;
          value = arr[i];
          index = i;
        }
        this.setState({
          arr: arr,
          i: i,
          j: j,
          index: index,
          index_insert: index_insert,
          value: value
        });
      } else {
        arr[0] = value;
        i = i+1;
        this.setState({
          i: i,
          j: i,
          index: i,
          value: arr[i],
          index_insert: 0,
        });
      }
    } else {
      this.setState({
        i: 1,
        j: 1,
        index: 1,
        value: arr[1]
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

export default InsertApp;
