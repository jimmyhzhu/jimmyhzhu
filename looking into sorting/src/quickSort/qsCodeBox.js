import React, { Component } from 'react';
import '../aCss/app.css';

class QsCodeBox extends Component {
    render(){
        return (
            <div className="CodeBox">
                <div className="CodeTitle">伪代码：</div>
                {/* <div className="resize"> */}
                {/* <div className="resize-bar"></div> */}
                <div className="CodeBox1"  id="scrollbar">
                    <code className="code">Partition(A, start, end) //start、end为数组下标</code>
                    <code className="code">&nbsp;&nbsp;x = A[end]   //将最后一个元素作为主元素</code>
                    <code className="code">&nbsp;&nbsp;i = start - 1 // i指向的是比主元素小的位置</code>
                    <code className="code">&nbsp;&nbsp;for  j = start  to  end-1</code>
                    <code className="code">&nbsp;&nbsp;//从第一个元素开始到倒数第二个元素结束,比较确定主元素的位置</code>
                    <code className="code">&nbsp;&nbsp;if  A[j] &lt;= pivot</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1 </code>
                    <code className="code">&nbsp;&nbsp;//如果比主元素小,则把i+1的位置上的元素和j位置发现小元素互换</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;swap:交换A[i]与A[j]</code>
                    <code className="code">&nbsp;&nbsp;swap:交换A[i + 1]与A[end]//最终确定主元的位置</code>
                    <code className="code">&nbsp;&nbsp;return i + 1//返回主元的位置</code>
                    <code className="code">end</code>
                    <code className="code">QuickSort(A,start,end)</code>
                    <code className="code">&nbsp;&nbsp;if start &lt; end</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;pivot = Partition(A, start, end)//确定划分位置</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;QuickSort(A, start, q - 1)//排序子数组A[start...q-1]</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;QuickSort(A, q + 1, end)//排序子数组A[q+1...end]</code>
                    <code className="code">end</code>
                {/* </div> */}
                {/* <div className="resize-line"></div> */}
                </div>
                <div className="CodeTitle">代码：</div>
                <div className="CodeBox2" id="scrollbar">
                    <code className="code">int Paritition(int A[], int start, int end)</code>
                    <code className="code">&#123;</code>
                    <code className="code">&nbsp;&nbsp;int pivot = A[end];</code>
                    <code className="code">&nbsp;&nbsp;int i = start - 1;</code>
                    <code className="code">&nbsp;&nbsp;for(j = start; j &gt; end; j++)&123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;if(A[j] &gt;= pivot)&123;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int temp = A[i];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A[i] = A[j];</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A[j] = temp;</code>
                    <code className="code">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&nbsp;&nbsp;int temp = A[i + 1];</code>
                    <code className="code">&nbsp;&nbsp;A[i + 1] = A[end];</code>
                    <code className="code">&nbsp;&nbsp;A[end] = A[i + 1];</code>
                    <code className="code">&nbsp;&nbsp;return i + 1;</code>
                    <code className="code">&#125;</code>
                    <code className="code">void QuickSort(int A[], int start, int end) //快排母函数</code>
                    <code className="code">&#123;</code>
                    <code className="code">&nbsp;&nbsp;if (start &gt end) &#123;</code>
                    <code className="code">&nbsp;&nbsp;int pivot = Paritition(A, start, end);</code>
                    <code className="code">&nbsp;&nbsp;QuickSort(A, start, pivot - 1);</code>
                    <code className="code">&nbsp;&nbsp;QuickSort(A, pivot + 1, end);</code>
                    <code className="code">&nbsp;&nbsp;&#125;</code>
                    <code className="code">&#125;</code>
                    
                </div>
          </div>
        );
    }
}

export default QsCodeBox;