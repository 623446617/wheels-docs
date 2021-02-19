# 输入框

#### 基础用法
<br />
<font size=2>基本用法，可以使用 v-model 实现数据的双向绑定。</font>
<input-base />

:::details 点击查看代码
```vue
<template>
    <div class="input-wrapper">
        <x-input v-model="value" placeholder="请输入"/>
        <p>{{value}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }
    }
</script>
```
:::

#### 禁用状态
<br />
<font size=2>通过添加disabled属性可设置为不可用状态。</font>
<input-disabled />

:::details 点击查看代码
```vue
<template>
    <div class="input-wrapper">
        <x-input disabled placeholder="这是一个禁用状态输入框"/>
    </div>
</template>
```
:::

#### 只读状态
<br />
<font size=2>通过添加readonly属性可设置为只读状态。</font>
<input-readonly />

:::details 点击查看代码
```vue
<template>
    <div class="input-wrapper">
        <x-input readonly placeholder="这是一个只读状态输入框"/>
    </div>
</template>
```
:::

#### 错误提示
<br />
<input-error />

:::details 点击查看代码
```vue
<template>
    <div class="input-wrapper">
        <x-button @click="isError = !isError">toggle</x-button>
        <x-input :error="isError" message="错误提示" placeholder="请输入"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isError: false
            }
        }
    }
</script>
```
:::

### API
#### Input props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| value | 绑定的值，可使用 v-model 双向绑定 | String \| Number | - |
| placeholder | 占位文本 | String  | - |
| disabled | 设置输入框为禁用状态 | Boolean | false |
| readonly | 设置输入框为只读 | Boolean | false |
| error | 是否显示为错误状态 | Boolean | false |
| message | 当error属性为true时的提示信息 | String | - |

#### Input events
| 事件名 | 说明   | 返回值 |
| ----- | --------- | ----------- |
| focus | 输入框聚焦时触发 | value |
| blur | 输入框失去焦点时触发 | value |
| input | 数据改变时触发(实时) | value |
| change | 数据改变时触发 | value |