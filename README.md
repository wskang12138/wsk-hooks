# wsk-hooks
 对工作中常用到业务进行hooks再次封装。
## 使用

```bash
yarn add wsk-hooks

```

##  useReactive

`useState` 的封装。

> 应用场景：响应式变量（自由设置变量的值，并且可以随时获取到变量的最新值）。

```js
const state = useReactive<any>({
  count: 0,
  name: 'wskang',
  flag: true,
  arr: [],
  bugs: ['wskang', 'react', 'hook'],
  addBug(bug: string) {
    this.bugs.push(bug);
  },
  get bugsCount() {
    return this.bugs.length;
  },
})
```

##  useTimeout

`setTimeout` 的封装。

> 应用场景：一段时间后，要执行一次函数。

```js
useTimeout(() => {
  setT(n + 1)
}, 1000)
```

##  useUnmount

`useEffect` 的封装。

> 应用场景：类似 `componentWillUnmount` 功能，组件即将卸载时。

```js
useUnmount(() => {
   message.info('组件已卸载')
})
```

##  useUpdate

`useCallback` 的封装。

> 应用场景：组件强制更新。

```js
const update = useUpdate();
```

##  useCountDown

`useLatest`, `useState`, `useEffect`, `useMemo` 的封装。

> 应用场景：倒计时。

```js
const [_, formattedRes] = useCountDown({
  targetDate: '2022-12-31 24:00:00',
});
const { days, hours, minutes, seconds, milliseconds } = formattedRes;
```

##  useCreation

`useMemo` 和 `useRef` 的封装加强版，可以替换这两个钩子。

- `useMemo` 的值不一定是最新的值，但 `useCreation` 可以保证拿到的值一定是最新的值
- 对于复杂常量的创建， `useRef` 容易出现潜在的的性能隐患，但 `useCreation` 可以避免

> 应用场景：需要拿到最新值、避免性能隐患时。

```js
const nowData = useCreation(() => {}, []);
```

##  useEventListener

`addEventListener` 和 `useEffect`, `useRef` 的封装。

> 应用场景：，监听各种事件。如：监听点击事件、键盘事件、滚动事件等。

```js
useEventListener('click', () => setCount(v => v + 1), ref)
```

##  useHover

`useState` 和 `useEventListener` 的封装。

> 应用场景：监听 DOM 元素是否有鼠标悬停。

```js
const h = useHover(r, {
  onEnter: () => {
    console.log('onEnter');
  },
  onLeave: () => {
    console.log('onLeave');
  },
})
```

##  useInterval

`setInterval` 的封装。

> 应用场景：每隔一段时间，执行一次函数。

```js
useInterval(() => {
  setN(n + 1);
}, 1000)
```

##  useLatest

`useRef` 的封装。

> 应用场景：随时确保获取的是最新值，并且没有闭包问题。

```js
const fnRef = useLatest(fn)
```

##  useMount

`useEffect` 的封装。

> 应用场景：类似 `componentDidMount` 功能，组件渲染完成时。

```js
useMount(() => {
  message.info('首次渲染')
});
```

##  usePow

`useMemo` 的封装。 
<br/>
`useMemo` （减少性能开销） 第一个参数是函数，第二个参数参数是可变的数组。

> 应用场景：低性能进行数字平方。

```js
const data = usePow([1, 2, 3])
```

## 注意
使用 wsk-hooks 项目中的react版本>=18.0.0 (没留意，自己找了好久的bug)