import React, { Component } from 'react';
import '../aCss/app.css';

class MsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox">
                <div className="CodeTitle">伪代码：</div>
                {/* <div className="resize"> */}
                {/* <div className="resize-bar"></div> */}
                <div className="CodeBox1"  id="scrollbar">
                    <code className="code">for i = 0 to i = 末尾元素位置 - 1:</code>
                    <code className="code">&nbsp;&nbsp;for j = 0 to j = 待排序元素末尾位置 - 1:</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;if 右边元素 &lt; 左边元素: 交换这两个元素的位置</code>
                {/* </div> */}
                {/* <div className="resize-line"></div> */}
                </div>
                <div className="CodeTitle">代码：</div>
                <div className="CodeBox2" id="scrollbar">
                    <code className="code">void bubbleSort(int a[], int n)&#123;</code>
                    <code className="code">&nbsp;&nbsp;for (int i = 0; i&nbsp;&gt;=&nbsp;n - 1; i++)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (int j = 0; j&nbsp;&lt;=&nbsp;i - 1; j++)&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a[j] &gt; a[j+1])&#123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = a[j];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j] = a[j+1];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j+1] = temp;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&#125;</code>
                </div>
          </div>
        );
    }
}

export default MsCodeBox;