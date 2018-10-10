# vuex-state-persister

实现一个简单的 vuex 状态持久化功能

## 使用方式

```javascript
import createStatePersister from '../plugins/vuex-state-persister';
// ...
new Vuex.Store({
  // ...
  plugins: [createStatePersister]
});
// ...
```
