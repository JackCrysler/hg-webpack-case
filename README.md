# hg-webpack-case

* 自定义脚手架，支持react开发，split拆分，按需加载等

* 多组件封装复用

* react跨组件传值，此案例为不适合引入redux的应用场景

* ref获取组件实例的作用

## 自定义组件举例（LazyLoad）

    1. 高阶组件  高阶函数
    2. 实现按需加载，动态import和SplitChunksPlugin

    code：

        function LazyLoad(options){
            return class extends Component{
                constructor(){
                    super()
                    this.state={
                        component:null,
                        loading: options.loading || <h1>loading</h1>
                    }
                }
                render(){
                    let {component,loading} = this.state;
                    return component || loading
                }
                componentDidMount(){
                    options.component().then(o=>{
                        this.setState({
                            component:<o.default></o.default>
                        })
                    })
                }
            }
        }

    useage：

        import LazyLoad from './components/LazyLoad/LazyLoad.jsx';
        import Loading from './components/Loading/Loading.jsx';
        let Index = LazyLoad({
            component:()=>import(/* webpackChunkName: 'index' */ './pages/Index/Index.jsx'),
            loading:<Loading></Loading>
        })

        <Route path="/" exact component={Index}></Route>

* 掌握原理，黑猫白猫抓住老鼠就是好猫
