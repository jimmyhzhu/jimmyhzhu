import React, { Component } from 'react';
import '../aCss/app.css';

class IsCodeBox extends Component {
    render(){
        return (
        <div className="CodeBox">
            <div className="CodeTitle">伪代码：</div>
            <div className="CodeBox1"  id="scrollbar">
                <code className="code">for i = 1 to i = 末尾元素位置: // a[i]是待插入元素</code>
                <code className="code">&nbsp;&nbsp;for j = i - 1 to j = 0: // a[j]是当前要与a[i]比较的元素</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;if 待插入元素a[i] &lt; 当前元素a[j]: 将a[j]右移一位</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;else: 插入元素a[i], 跳出当前循环</code>
            </div>
            <div className="CodeTitle">代码：</div>
            <div className="CodeBox2"  id="scrollbar">
                <code className="code">void insertionSort(int a[], int n)&#123;</code>
                <code className="code">&nbsp;&nbsp;int i, j;</code>
                <code className="code">&nbsp;&nbsp;for (i = 1; i &lt; n; i++)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;int elem = a[i]; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;for (j = i - 1; j &gt;= 0; j--)&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (elem &gt; a[j]) a[j + 1] = a[j]; </code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&#123;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j] = elem;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                <code className="code">&nbsp;&nbsp;&#125;</code>
                <code className="code">&#125;</code>
            </div>
        </div>
        );
    }
}

export default IsCodeBox;