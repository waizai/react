# react入门讲解


1. 初步认识
    -	React不是一个完整的MVC框架，可认为是MVC中的V。
    -   虚拟DOM（Virtual DOM）
    -	组件化（封装起来的具有独立功能的UI部件）
    -	JSX语法

2. 虚拟DOM
    - 	在浏览器端用JavaScript实现了一套DOM API，用JS对象模拟DOM树
    - 	比较数据更新前后两颗DOM树的差异
    - 	把差异的部分更新到真正的DOM树上



3. 组件的特征
    -   可组合：一个组件易于和其他组件一起使用，或者嵌套在另一个组件内部。
    -   可重用： 每个组件都具有独立的功能，可以被使用多个场景。
    -   可维护：每个小的组件仅包含自己的逻辑，更容易被理解和维护
    -   组件状态：将组件看成是一个状态机
    -   example:



```<script type="text/babel">
    var InputState = React.createClass({ 
      getInitialState: function() { 
          return {enable: false}; 
      }, 
      handleClick: function(event) { 
          this.setState({enable: !this.state.enable}); 
      }, 
      render: function() { 
          return ( 
              <p> 
                <input type="text" disabled={this.state.enable} /> <button onClick={this.handleClick}>Change State</button> </p> 
          ); 
      } 
  }); 
  
  React.render( 
      <InputState />, 
      document.getElementById('container') 
  );

    
```
                                            


4. JSX语法
    - 使用XML标记的方式直接声明界面，可以理解为在JS中编写XML类似的语言，一种定义带属性树结构的语法
    - 规则--遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
    - JSX语法的目的--不是在浏览器中或者引擎中实现，而是通过各种编译器讲这些标签编译成标准的JS语言。
    - 使用JSX语法后，必须引入babel的JSX解析器，把JSX转化成JS语法，这个工作会由babel自动完成。同时引入babel后，就可以使用E6语法，babel也会自动把ES6转化成ES5语法，兼容更多的浏览器。
    - example:
```var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
```

5. 安装
    -   官网（https://facebook.github.io/react/docs/installation.html）
    -   `$ git clone git@github.com:ruanyf/react-demos.git`
6.  组件的生命周周期
    -   组件的生命周期分成3个状态：
        -   Mounting : 已插入真实DOM
        -   Updating : 正在被重新渲染
        -   Unmounting : 已移出真实DOM
    -   生命周期的8个方法
        -   componentWillMount()
            1)  执行场景：render()之前
            1)   因为componentWillMount是在render之前执行，所以在这个方法中setState不会发生重新渲染(re-render);
            2)   这是服务端渲染(server render)中唯一调用的钩子(hook);
            3)   通常情况下，推荐用constructor()方法代替;
            4)   如果在这里定义了setState()方法，页面永远只会在加载前更新一次。
            5)  是否可以用setState()：可以
        -   render()
            1)  执行场景：componentWillMount()之后  
                       componentWillUpdate()之后
                       
            5)  是否可以用setState()：不可以
        -   componentDidMount()
            1)  执行场景：render()之后
            2)  在render()之后立即执行
            3)  在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
            4)  如果你想和其他JavaScript框架一起使用，可以在这个方法中执行setTimeout,setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
            5)  这里可以使用setState()方法触发重新渲染(re-render)。
            5)  是否可以用setState()：可以
        -   componentWillReceiveProps(object nextProps)
            1)  执行场景：在已经挂载的组件(mounted component)接收到新props时触发;  
简单的说是在除了第一次生命周期(componentWillMount -> render -> componentDidMount)之后的生命周期中出发;
            2)   如果你需要在props发生变化(或者说新传入的props)来更新state，你可能需要比较this.props和nextProps, 然后使用this.setState()方法来改变this.state;
            3)  React可能会在porps传入时即使没有发生改变的时候也发生重新渲染, 所以如果你想自己处理改变，请确保比较props当前值和下一次值; 这可能造成组件重新渲染;（出现这种情况的场景：当父组件导致了子组件的re-render时）
            4)  如果你只是调用this.setState()而不是从外部传入props, 那么不会触发componentWillReceiveProps(nextProps)函数；这就意味着: this.setState()方法不会触发componentWillReceiveProps(), props的改变或者props没有改变才会触发这个方法;
            5)  是否可以用setState()：可以
        -   shouldComponentUpdate(object nextProps,object nextState)
            1)  -   执行场景：在接收到新props或state时，或者说在componentWillReceiveProps(nextProps)后触发        
                -   在rendering之前会调用shouldComponentUpdate()  
                -   在首次渲染或者forceUpdate()时不会触发
            2)  shouldComponentUpdate()默认返回true
             
        -   componentWillUpdate(object nextProps,object nextState)
            1)  -   执行场景：props或state发生变化  
                -   shouldComponentUpdate()之后，render()之前
                -   初始化的时候不会被调用
            2)  是否可以用setState()：不可以
            
        -   componentDidUpdate(object prevProps,object prevState)
            1)  执行场景：
                -   发生更新或者componentWillUpdate()后
                -   不会在组件初始化的时候触发
            2)  使用场景：
                -   对组件DOM进行操作
                -   只要你比较了this.props和nextProps，你想要发出网络请求(nextwork requests)时就可以发出, 当然你也可以不发出网络请求;
            
        -   componentWillUnmount()
            1)  执行场景：组件卸载或者销毁之前
            2)  使用场景：处理一些必要的清理操作，比如无效的timers、interval，或者取消网络请求，或者清理任何在componentDidMount()中创建的DOM元素(elements);
     
        

7.  生命周期图谱
![avatar](https://cloud.githubusercontent.com/assets/12592949/24903814/1b2ff98c-1ee1-11e7-9f5a-59eb84171b53.png)
    
8. 遇到的问题及解决方案
    -   setState()写在这里合适吗？
        1)  不可以写的周期：willUpdate  
            didUpdate  
            render
    -   为什么setState()写在这里造成了重复渲染多次？
    -   setState()和this下面的变量的区别？
        1)state:需要渲染的变量
    -   组件传入props是更新呢？重新挂载呢？还是怎样？
        1)  Updating
    -   props和state的区别？
    -   如何确定最小（但完备）的UI state表达
    -   state应该存在哪里？
    -   为什么使用React？
        1)  构建随着时间数据不断变化的大规模应用程序。
        2)  React 都是关于构建可复用的组件。事实上，通过 React 你唯一要做的事情就是构建组件。得益于其良好的封装性，组件使代码复用、测试和关注分离（separation of concerns）更加简单。
    -   如何使用shouldComponentUpdate(nextProps,nextState)?不更新的时候子组件会怎样？
    
    ```
        shouldComponentUpdate: function(nextProps, nextState) {
         return nextProps.id !== this.props.id;
    }
    ```
 -   forceUpdate()是干嘛的？
        1)  forceUpdate就是重新render。有些变量不在state上，但是你又想达到这个变量更新的时候，刷新render；或者state里的某个变量层次太深，更新的时候没有自动触发render。这些时候都可以手动调用forceUpdate自动触发render。
    -   为什么componentWillUpdate里面不可以写setState()?    
    -   触发render()有几种途径？
        -   首次渲染Initial Render
        -   调用this.setState()
        -   父组件发生更新(一般就是props发生改变，或者父组件自己更新state)
        -   调用this.forceUpdate
    
    
9.  触发render的图谱  
![img](http://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
