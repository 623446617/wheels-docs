# 标签页

#### 基础用法
#

<tabs-base />

:::details 点击查看代码
```vue
<template>
    <div class="tabs-wrapper">
        <x-tabs>
            <x-tabs-item label="标签1"><p class="tab-content">one</p></x-tabs-item>
            <x-tabs-item label="标签2"><p class="tab-content">two</p></x-tabs-item>
            <x-tabs-item label="标签3"><p class="tab-content">three</p></x-tabs-item>
        </x-tabs>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
    .tab-content {
        padding: 5px;
    }
</style>
```
:::

### API
#### Tabs props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |


#### TabsItem props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | :-------: |
| label | 选项卡头显示文字 | String | - |