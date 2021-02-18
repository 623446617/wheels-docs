# 按钮 

#### 基础功能
#

<button-base />
```vue
<template>
    <div class="button-wrapper">
        <x-button>默认按钮</x-button>
        <x-button icon="setting">带图标按钮</x-button>
        <x-button :icon="icon" iconAlign="right">图标位置</x-button>
        <x-button disabled>按钮(disabled)</x-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                icon: "good"
            }
        }
    };
</script>
```
#### loading状态
#
<button-click></button-click>
```vue
<template>
    <div class="button-wrapper">
        <x-button :loading="isLoading1">加载中</x-button>
        <x-button :loading="isLoading2" @click="isLoading2 = !isLoading2">点击切换</x-button>
        <x-button icon="setting" 
                  icon-align="right" 
                  :loading="isLoading3" 
                  @click="isLoading3 = !isLoading3">点击切换</x-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading1: true,
                isLoading2: false,
                isLoading3: false
            }
        }
    }
</script>
```

#### button-group
#

<button-group></button-group>
```vue
<template>
    <div class="button-wrapper">
        <x-button-group>
            <x-button>large</x-button>
            <x-button>small</x-button>
        </x-button-group>
        <x-button-group>
            <x-button icon="left">上一页</x-button>
            <x-button>更多</x-button>
            <x-button icon="right" icon-align="right">上一页</x-button>
        </x-button-group>
    </div>
</template>
<script>
    export default {
        
    }
</script>
```

### API
| 属性 | 说明   | 类型 | 默认值 |
| ----- | --------- | ----------- | ------- |
| icon | 设置按钮的图标类型 | String | - |
| iconAlign  | 设置按钮的图标位置     | String    | left |
| disabled | 设置按钮为禁用状态 | Boolean | false |
| loading | 设置按钮为加载中状态 | Boolean | false |

