import React, { Component } from 'react';
import './Visualizer.css';
import InsertApp from './insertSort/insertApp';
import BubbleApp from './bubbleSort/bubbleApp';
import SelectApp from './selectSort/selectApp';
import QuickApp from './quickSort/quickApp';
import MergeApp from './mergeSort/mergeApp';

class Visualizer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mode: 'main',
        rendering: false,
        // algorithms: [],
        // currentAlgorithm: null,
        // goFunction: () => { },
        // resetFunction: () => { },
        // setAlgorithm: () => { },
        sortingClicked: false,
        aicount: 0,
    };
    // this.getFunctions = this.getFunctions.bind(this);
    this.changeRenderingState = this.changeRenderingState.bind(this);
}

changeRenderingState(rendering) {
    this.setState({ rendering: rendering });
}

// getFunctions(go, reset, setAlgo, algorithms) {
//     this.setState = ({
//         goFunction : go,
//         resetFunction : reset,
//         setAlgorithm : setAlgo,
//         algorithms : algorithms 
//     });
// }

render() {
    let renderObj = null;
    if (this.state.mode === 'bubblesort') {
        renderObj = <BubbleApp setVisualizerRendering={this.changeRenderingState} getFunctions={this.getFunctions}></BubbleApp>;
    }
    else if (this.state.mode === 'insertsort') {
      renderObj = <InsertApp setVisualizerRendering={this.changeRenderingState} getFunctions={this.getFunctions}></InsertApp>;
    }
    else if (this.state.mode === 'selectsort') {
      renderObj = <SelectApp setVisualizerRendering={this.changeRenderingState} getFunctions={this.getFunctions}></SelectApp>;
    }
    else if (this.state.mode === 'quicksort') {
        renderObj = <QuickApp setVisualizerRendering={this.changeRenderingState} getFunctions={this.getFunctions}></QuickApp>;
      }
    else if (this.state.mode === 'mergesort') {
        renderObj = <MergeApp setVisualizerRendering={this.changeRenderingState} getFunctions={this.getFunctions}></MergeApp>;
    }
    else {
        renderObj =
            <div className="welbotron">

                <div className="container welc">

                    <h1 className='welcome'>Hello, algorithms.</h1>
                    <br></br>
                    <p className="lead">This website might help you understand algorithms better by visualizing them.</p>
                    <p className="secondline lead">Click on one of the categories below to visualize algorithms.</p>
                    <table id = "intro">
                        <tbody>
                        <tr>
                            <th>Algorithms</th>
                            <th>Introduction</th>
                        </tr>
                        <tr>
                            <td>
                                <a href='/#' className='mainpage-b' onClick={() => {
                                    if (!this.state.rendering) {
                                        this.setState({ mode: 'bubblesort', sortingClicked: true });
                                    }
                                }} data-toggle={this.state.sortingClicked}>
                                    <span></span>
                                    冒泡排序
                                </a>
                            </td>
                            <td className = "alintro">
                                “冒泡排序(Bubble Sort),是一种计算机科学领域的较简单的排序算法。
                                它重复地走访过要排序的元素列,依次比较两个相邻的元素,如果顺序(如从大到小、首字母从Z到A)错误就把他们交换过来。
                                走访元素的工作是重复地进行直到没有相邻元素需要交换,也就是说该元素列已经排序完成。
                                这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端(升序或降序排列),
                                就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样,故名“冒泡排序”。”
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <a href='/#' className='mainpage-b' onClick={() => {
                                    if (!this.state.rendering) {
                                        this.setState({ mode: 'insertsort',sortingClicked: true });
                                    }
                                }} data-toggle={this.state.sortingClicked}>
                                    <span></span>
                                    插入排序
                                </a>
                            </td>
                            <td className = "alintro">
                                “插入排序(Insertion Sort)，一般也被称为直接插入排序。
                                对于少量元素的排序，它是一个有效的算法。
                                插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，
                                从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，
                                外层循环对除了第一个元素之外的所有元素，
                                内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。”
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='/#' className='mainpage-b' onClick={() => {
                                    if (!this.state.rendering) {
                                    this.setState({ mode: 'selectsort',sortingClicked: true });
                                    }
                                }} data-toggle={this.state.sortingClicked}>
                                    <span></span>
                                    选择排序
                                </a>
                            </td>
                            <td className = "alintro">
                                “选择排序（Selection sort）是一种简单直观的排序算法。
                                它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，
                                存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，
                                然后放到已排序的序列的末尾。以此类推，直到全部待排序的数据元素的个数为零。”
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='/#' className='mainpage-b' onClick={() => {
                                    if (!this.state.rendering) {
                                    this.setState({ mode: 'bubblesort', sortingClicked: true });
                                    }
                                }} data-toggle={this.state.sortingClicked}>
                                    <span></span>
                                    快速排序
                                </a>
                            </td>
                            <td className = "alintro">
                                “快速排序(Quick Sort)是对冒泡排序的一种改进。
                                它的基本思想是:任意选取一个数据(通常选用第一个或最后一个数据)作为关键数据,
                                然后将所有比它小的数都移到它前面,所有比它大的数都移到它后面,
                                从而将要排序的数据分割成独立的两部分,然后再按此方法对这两部分数据分别进行快速排序,
                                整个排序过程可以递归进行,以此达到整个数据变成有序序列。”
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='/#' className='mainpage-b' onClick={() => {
                                    if (!this.state.rendering) {
                                        this.setState({ mode: 'mergesort',sortingClicked: true });
                                    }
                                }} data-toggle={this.state.sortingClicked}>
                                    <span></span>
                                    归并排序
                                </a>
                            </td>
                            <td className = "alintro">
                                “归并排序(Merge Sort)是建立在归并操作上的一种有效,稳定的排序算法,
                                该算法是采用分治法(Divide and Conquer)的一个非常典型的应用。
                                将已有序的子序列合并,得到完全有序的序列;即先使每个子序列有序,再使子序列段间有序。
                                若将两个有序表合并成一个有序表,称为二路归并。”
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    }
    // let invisibleOrNot = '';
    if (this.state.mode === 'main');
    // invisibleOrNot = ' invisible';
    // let algorithms = this.state.algorithms;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'main' });
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    disabled={this.state.rendering}
                >主页</button>

                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'bubblesort', currentAlgorithm: null, sortingClicked: true });
                            // this.state.setAlgorithm(-1);
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    // data-toggle={this.state.sortingClicked ? "" : "modal"} data-target="#sortingIntroModal"
                    disabled={this.state.rendering}
                >冒泡排序</button>

                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'insertsort',sortingClicked: true });
                            // this.state.setAlgorithm(-1);
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    // data-toggle={this.state.sortingClicked ? "" : "modal"} data-target="#sortingIntroModal"
                    disabled={this.state.rendering}
                >插入排序</button>

                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'selectsort',sortingClicked: true });
                            // this.state.setAlgorithm(-1);
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    // data-toggle={this.state.sortingClicked ? "" : "modal"} data-target="#sortingIntroModal"
                    disabled={this.state.rendering}
                >选择排序</button>

                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'quicksort',sortingClicked: true });
                            // this.state.setAlgorithm(-1);
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    // data-toggle={this.state.sortingClicked ? "" : "modal"} data-target="#sortingIntroModal"
                    disabled={this.state.rendering}
                >快速排序</button>

                <button
                    onClick={() => {
                        if (!this.state.rendering) {
                            this.setState({ mode: 'mergesort', currentAlgorithm: null, sortingClicked: true });
                            // this.state.setAlgorithm(-1);
                        }
                    }}
                    type="button" className="btn btn-dark navbtn"
                    // data-toggle={this.state.sortingClicked ? "" : "modal"} data-target="#sortingIntroModal"
                    disabled={this.state.rendering}
                >归并排序</button>

                {/* <div class={"dropdown" + invisibleOrNot}>
                    <button class="btn btn-secondary dropdown-toggle navbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled={this.state.rendering}>
                        {this.state.currentAlgorithm == null ? 'Algorithms' : this.state.currentAlgorithm}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            {algorithms.map((algorithm, algoId) => {
                                return (<button type="button" class="btn btn-light navbtn" onClick={() => {
                                    this.state.setAlgorithm(algoId);
                                    this.setState({ currentAlgorithm: this.state.algorithms[algoId] });
                                }}>{algorithm}</button>);
                            }
                            )
                            }
                        </li>
                    </div>
                </div>

                <div class={"dropdown" + invisibleOrNot}>
                    <button class="btn btn-light dropdown-toggle navbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled={this.state.rendering}>
                        Actions
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <button type="button" class="btn btn-light navbtn" onClick={() => this.state.goFunction()} data-toggle={this.state.currentAlgorithm === null ? "modal" : ""} data-target="#setAlgoModal" disabled={this.state.mode === "ai" && this.state.currentAlgorithm === "Minimax"}>Go!</button>
                            <button type="button" class="btn btn-light navbtn" onClick={() => this.state.resetFunction()}>Reset</button>
                        </li>
                    </div>
                </div> */}

            </nav>

            {/* <div class="modal fade" id="setAlgoModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">No Algorithm Selected</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body-alert">
                            <p>Please select an algorithm first.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-dismiss="modal" style={{ width: '100px' }}>OK</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="modal fade" id="sortingIntroModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content intro">

                        <div class="modal-header">
                            <h5 class="modal-title">Sorting</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body intro">
                            <p>Sorting is a process of arranging an ordered sequence. It is a common operation in many applications.</p>
                            <p>Common uses of sorted sequences are:
                                <div class='uses-list'>
                                    <p>·lookup or search efficiently</p>
                                    <p>·merge sequences efficiently</p>
                                    <p>·process data in a defined order</p>
                                </div>
                            Now please choose a sorting algorithm and visualize it!
                            </p>
                            <p class='tips'>(after choosing an algorithm, click on the [Actions] button.)</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-dismiss="modal" style={{ width: '100px' }}>OK</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div>
                {renderObj}
            </div>
        </>
    )
}
    
}

export default Visualizer;