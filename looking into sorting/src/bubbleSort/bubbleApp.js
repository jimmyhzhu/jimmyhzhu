import React, { Component } from 'react';
import '../aCss/app.css';
import ItemList from './itemList';
import BsCodeBox from './bsCodeBox'
import $ from "jquery/dist/jquery.min";

class BubbleApp extends Component {
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
      // intArr: arr,
      n: n,
      r: r,
      timeID: 0,
      i: 0,
      j: 0,
      p: 1,
      interval: speed,
      sorting: 0,
      resetArr: oArr,
      initMeansRandom: 'none',
      initMeansInput: 'none',
      highlight: ['','','',''],
      speeds:['慢速', '中速', '极速'],
      //currentspeed: '慢速'
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
  //   this.stop();
  //   var arr = this.randomArr(this.state.n, this.state.r);
  //   var oArr = [];
  //   for (var i = 0; i < this.state.n; i++){
  //     oArr[i] = arr[i];
  //   }
  //   this.setState({
  //     arr: arr,
  //     n: this.state.n,
  //     timeID: 0,
  //     i: 0,
  //     j: 0,
  //     p: 1,
  //     interval: this.state.interval,
  //     sorting: 0,
  //     resetArr: oArr
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
      j: 0,
      p: 1,
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
      <div className = "app">
        {/* <div className="row"> */}
          <div className="Visualizer">
            <div className={"tutorial"+this.state.sorting}><code>i = {this.state.i}, j = {this.state.j}, 左边元素a[j] = {this.state.arr[this.state.j]}, 右边元素a[j+1] = {this.state.arr[this.state.j+1]}</code></div>
            <div className="canvas">
              <ItemList arr={this.state.arr} max={this.state.r} i={this.state.i} j={this.state.j} p={this.state.p} sorting={this.state.sorting}></ItemList>
            </div>
            <div className="buttons">
              <form action="bubbleApp.js">
                  排序：<button type="button" onClick={() => this.start()}>冒泡排序</button><span >&nbsp;&nbsp;&nbsp;</span>
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
          <div className="CodeBox">
                <div className="CodeTitle">伪代码：</div>
                {/* <div className="resize"> */}
                {/* <div className="resize-bar"></div> */}
                <div className="CodeBox1"  id="scrollbar">
                    <code className={"code "+this.state.highlight[0]}>for i = 0 to i = 末尾元素位置 - 1:</code>
                    <code className={"code "+this.state.highlight[1]}>&nbsp;&nbsp;for j = 0 to j = 待排序元素末尾位置 - 1:</code>
                    <code className={"code "+this.state.highlight[2]}>&nbsp;&nbsp;&nbsp;&nbsp;if 左边元素 &gt; 右边元素: </code>
                    <code className={"code "+this.state.highlight[3]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交换这两个元素的位置</code>
                {/* </div> */}
                {/* <div className="resize-line"></div> */}
                </div>
                <div className="CodeTitle">代码：</div>
                <div className="CodeBox2" id="scrollbar">
                    <code className="code">void bubbleSort(int a[], int n)&#123;</code>
                    <code className="code">&nbsp;&nbsp;for (int i = 0; i&nbsp;&lt;=&nbsp;n - 1; i++)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j&nbsp;&lt;=&nbsp;len - 1 - i; j++)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a[j] &gt; a[j + 1])&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = a[j];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j] = a[j + 1];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j + 1] = temp;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&#125;</code>
                </div>
          </div>
          {/* <BsCodeBox></BsCodeBox> */}
        {/* </div> */}
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
      i: 0,
      j: 0,
      p: 1,
      interval: this.state.interval,
      sorting: 0,
      resetArr: oArr
    })
  }

  getValue=(event)=>{
    // this.stop();
    console.log(event.target.value);
    // this.setState({
    //   currentspeed: event.target.value
    // })
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
      p: 1,
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
    this.bubbleSort();
  }

  bubbleSort() {
    var arr = this.state.arr;
    var len = arr.length;

    var i = this.state.i;
    var j = this.state.j;
    var p = this.state.p;

    if (i < (len - 1)) {
      if (j < (len - 1 - i)) {
        var temp = 0;
        if(p>j){
          // this.setState({highlight: ['','','_h','']})
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            p=j;
            this.setState({highlight: ['','','','_h']})
          }
          else{this.setState({highlight: ['','','_h','']})}
          j=j+1;
          this.setState({highlight: ['','_h','','']})
        }else{
          p=j+1
          this.setState({highlight: ['','','_h','']})
        }
        this.setState({
          arr: arr,
          j: j,
          p: p,
          // highlight: ['','','','_h']
        });
      }
      else {
        this.setState({
          i: i + 1,
          j: 0,
          p: 1,
          highlight: ['_h','','','']
        });
      }
    } else {
      this.setState({
        i: 0,
        j: 0,
        p: 1,
        highlight: ['','','','']
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

export default BubbleApp;
