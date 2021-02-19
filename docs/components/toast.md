# 文字提示

#### 基础用法
#
<toast-base />

:::details 点击查看代码
```vue
<template>
    <div>
        <x-button @click="show1">显示(手动关闭)</x-button>
        <x-button @click="show2">显示(自动关闭)</x-button>
    </div>
</template>

<script>
    export default {
        methods: {
            show1() {
                this.$toast.show('这是一段文字');
            },
            show2() {
                this.$toast.show('这是一段文字', 1000);
            }
        }
    }
</script>
```
:::

#### 改变位置
#

<toast-position />

:::details 点击查看代码
```vue
<template>
    <div>
        <x-button @click="show('top')">显示(居上)</x-button>
        <x-button @click="show('center')">显示(居中)</x-button>
        <x-button @click="show('bottom')">显示(居下)</x-button>
    </div>
</template>

<script>
    export default {
        methods: {
            show(position) {
                this.$toast.show({
                    text: '这是一段文字',
                    position: position
                }, 1000);
            }
        }
    }
</script>
```
:::

#### 关闭按钮
#

<toast-close />

:::details 点击查看代码
```vue
<template>
    <div>
        <x-button @click="show1">显示(默认)</x-button>
        <x-button @click="show2">显示(自定义)</x-button>
    </div>
</template>

<script>
    export default {
        methods: {
            show1() {
                this.$toast.show({
                    text: '这是一段文字'
                });
            },
            show2() {
                this.$toast.show({
                    text: '这是一段文字',
                    closeText: '知道了'
                });
            }
        }
    }
</script>
```
:::

#### 关闭回调
#

<toast-callback />

:::details 点击查看代码
```vue
<template>
    <div>
        <x-button @click="show1">显示(手动关闭)</x-button>
        <x-button @click="show2">显示(自动关闭)</x-button>
    </div>
</template>

<script>
    export default {
        methods: {
            show1() {
                this.$toast.show({
                    text: '这是一段文字',
                    onClosed() {
                        this.$toast.show('这是手动关闭回调', 1000);
                    }
                });
            },
            show2() {
                this.$toast.show({
                    text: '这是一段文字',
                    onClosed() {
                        this.$toast.show('这是自动关闭回调', 1000);
                    }
                }, 1000);
            }
        }
    }
</script>
```
:::

#### 显示html
#

<toast-html />

:::details 点击查看代码
```vue
<template>
    <x-button @click="show">显示html内容</x-button>
</template>

<script>
    export default {
        name: "toast-html",
        methods: {
            show() {
                this.$toast.show({
                    text: '<p style="color: red;">这是一段html片段</p>',
                    enableHtml: true
                });
            }
        }
    }
</script>
```
:::

### 显示方式
##### 方式一
this.$toast.show(text, delay);  
`text`为消息内容，`delay`为持续时间。

##### 方式二
this.$toast.show(options, delay);

`options`为配置信息，`delay`为持续时间。


### API
#### Options props
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| text | 消息内容 | String | — |
| closeText | 关闭按钮文字 | String | — |
| onClosed | 提示关闭的回调 | Function | — |
| enableHtml | 是否以HTML显示内容 | Boolean | false |
| position | 提示框的位置(top、center、bottom) | String | center |