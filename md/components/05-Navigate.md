### Navigate Com
  - 1. 使用该组件进行导航时，导航后默认返回window顶部
  - 2. 该组件和useNavigate hook作用/参数一致

### 类型定义
  ```ts
    declare function Navigate(props: NavigateProps): null;

    interface NavigateProps {
      to: To;
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ```
