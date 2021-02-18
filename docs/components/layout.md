# 布局 

- `Layout`：布局容器，其下可嵌套 `Header`、`Sider`、`Content`、`Footer`或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，其下可嵌套任何元素，只能放在 `Layout` 中。

#### 上-中-下
#
<layout1 />

:::details 点击查看代码
```vue
<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-header>
                <div class="header">header</div>
            </x-header>
            <x-content>
                <div class="content">content</div>
            </x-content>
            <x-footer>
                <div class="footer">footer</div>
            </x-footer>
        </x-layout>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .layout-wrapper {
        height: 150px;
    }
    
    .header, .footer, .content, .sider {
        color: #fff;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header, .footer {
        background: #7dbcea;
    }
    
    .content {
        background: #108ee9;
    }
    
    .sider {
        background: #3ba0e9;
    }
</style>
```
:::

#### 上-中[左-右]-下
#
<layout2 />

:::details 点击查看代码
```vue
<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-header>
                <div class="header">header</div>
            </x-header>
            <x-layout>
                <x-sider>
                    <div class="sider">sider</div>
                </x-sider>
                <x-content>
                    <div class="content">content</div>
                </x-content>
            </x-layout>
            <x-footer>
                <div class="footer">footer</div>
            </x-footer>
        </x-layout>
    </div>
</template>
```
:::

#### 上-中[右-左]-下
#
<layout3 />

:::details 点击查看代码
```vue
<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-header>
                <div class="header">header</div>
            </x-header>
            <x-layout>
                <x-content>
                    <div class="content">content</div>
                </x-content>
                <x-sider>
                    <div class="sider">sider</div>
                </x-sider>
            </x-layout>
            <x-footer>
                <div class="footer">footer</div>
            </x-footer>
        </x-layout>
    </div>
</template>
```
:::

#### 左-右[上-中-下]
#

<layout4 />

:::details 点击查看代码
```vue
<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-sider>
                <div class="sider">sider</div>
            </x-sider>
            <x-layout>
                <x-header>
                    <div class="header">header</div>
                </x-header>
                <x-content>
                    <div class="content">content</div>
                </x-content>
                <x-footer>
                    <div class="footer">footer</div>
                </x-footer>
            </x-layout>
        </x-layout>
    </div>
</template>
```
:::