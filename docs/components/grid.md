# 栅格

#### 基础用法
#
<grid-base />
::: details 点击查看代码
```vue
<template>
    <div class="grid-wrapper">
        <x-row>
            <x-col span="12">
                <div class="test">col-12</div>
            </x-col>
            <x-col  span="12">
                <div class="test">col-12</div>
            </x-col>
        </x-row>
        <br>
        <x-row>
            <x-col span="8">
                <div class="test">col-8</div>
            </x-col>
            <x-col  span="8">
                <div class="test">col-8</div>
            </x-col>
            <x-col  span="8">
                <div class="test">col-8</div>
            </x-col>
        </x-row>
        <br>
        <x-row>
            <x-col span="6">
                <div class="test">col-6</div>
            </x-col>
           <x-col span="6">
                <div class="test">col-6</div>
            </x-col>
           <x-col span="6">
                <div class="test">col-6</div>
            </x-col>
           <x-col span="6">
                <div class="test">col-6</div>
            </x-col>
        </x-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .x-col:nth-child(odd) > div {
        background-color: rgba(0,153,229,.7);
    }

    .x-col:nth-child(even) > div {
        background-color: rgba(0,153,229,.9);
    }

    .x-col > div {
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
    }
</style>
```
:::

#### 区块间隔-gutter
#

<grid-gutter />

::: details 点击查看代码
```vue
<template>
    <div class="grid-wrapper">
        <x-row gutter="20">
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
        </x-row>
    </div>
</template>
```
:::

#### 偏移-offset
#
<grid-offset />
::: details 点击查看代码
```vue
<template>
    <div class="grid-wrapper">
        <x-row>
            <x-col span="4">
                <div>col-4</div>
            </x-col>
            <x-col span="10" offset="2">
                <div>col-10 | offset-2</div>
            </x-col>
            <x-col span="6" offset="2">
                <div>col-6 | offset-2</div>
            </x-col>
        </x-row>
    </div>
</template>
```
:::

#### 响应式布局 
#
<grid-layout />
::: details 点击查看代码
```vue
<template>
    <div class="grid-wrapper">
        <x-row>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
            <x-col :span="24" :ipad="{span: '12'}" :small-pc="{span: '8'}" :normal-pc="{span: '12'}" :large-pc="{span: '24'}">
                <div>col</div>
            </x-col>
        </x-row>
    </div>
</template>
```
:::

### API
#### Row props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| gutter | 栅格间距，单位 px，左右平分 | String \| Number | - |

#### Col props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| span | 栅格的占位格数，可选值为0~24的整数 | String \| Number | - |
| offset | 栅格左侧的间隔格数，间隔内不能有栅格 | String \| Number | - |
| ipad | ≥577px，一般为ipad屏幕尺寸 | Object | - |
| small-pc | ≥769px，一般为窄屏PC屏幕尺寸 | Object | - |
| normal-pc | ≥993px，一般为正常PC屏幕尺寸 | Object | - |
| large-pc | ≥1201px，一般为宽屏PC屏幕尺寸 | Object | - |
