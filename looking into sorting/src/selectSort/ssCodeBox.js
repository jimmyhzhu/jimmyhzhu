import React, { Component } from 'react';
import '../aCss/app.css';

class SsCodeBox extends Component {
    render(){
        return (
        <div className="CodeBox">
            <div className="CodeTitle">伪代码：</div>
            <div className="CodeBox1"  id="scrollbar">
                <code className="code">for i = 0 to i = 末尾元素位置: //a[i]是待交换的值</code>
                <code className="code">&nbsp;&nbsp;for j = i + 1 to j = 末尾元素位置: //寻找待排序元素中最小值</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;if a[j] &lt; a[i]: 记录当前的a[j]的位置</code>
                <code className="code">&nbsp;&nbsp;swap: 交换待排序元素最小值和a[i]的位置</code>
            </div>
            <div className="CodeTitle">代码：</div>
            <div className="CodeBox2"  id="scrollbar">
                <code className="code">void selectionSort(int a[], int n)&#123;</code>
                <code className="code">&nbsp;&nbsp;for (int i = 0; i &lt; n; i++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int loc = i; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (int j = i + 1; j &lt; n; j++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a[j] &lt; a[loc]) loc = j; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int temp = a[i];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;a[i] = a[loc];</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;a[loc] = temp;</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
            </div>
        </div>
        );
    }
}

export default SsCodeBox;