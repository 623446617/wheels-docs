# 气泡提示

#### 基础用法
<br />
<popover-base />
<br />
<font size=2>目前支持两种触发方式：点击、鼠标悬停。默认是点击。</font>

:::details 点击查看代码
```vue
<template>
    <div>
        <x-popover>
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>click激活</x-button>
        </x-popover>

        <x-popover mode="hover">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>hover激活</x-button>
        </x-popover>
    </div>
</template>
```
:::

#### 布局方向
<br />
<popover-layout />
<br />
<font size=2>目前布局方向分为纵向与横向，而popover的位置会根据屏幕自动计算。</font>

:::details 点击查看代码
```vue
<template>
    <div>
        <x-popover>
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>click激活(纵向)</x-button>
        </x-popover>

        <x-popover layout="horizontal">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>click激活(横向)</x-button>
        </x-popover>

        <x-popover mode="hover">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>hover激活(纵向)</x-button>
        </x-popover>

        <x-popover mode="hover" layout="horizontal">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>hover激活(横向)</x-button>
        </x-popover>
    </div>
</template>
```
:::

### API
#### Popover props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| mode | 触发方式，可选值为hover（悬停）click（点击） | String | click |
| layout | 布局方向，可选值vertical（纵向）, horizontal（横向） | String | vertical |
