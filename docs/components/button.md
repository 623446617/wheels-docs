# 按钮 
<demo-button></demo-button>
```vue
<template>
    <div class="button-wrapper">
        <x-button>默认按钮</x-button>
        <x-button icon="setting">带图标按钮</x-button>
        <x-button :icon="icon" iconAlign="right">图标位置</x-button>
        <x-button :loading="isLoading">loading控制</x-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                icon: "good",
                isLoading: true
            }
        }
    };
</script>
```

| 标题1 | 标题2   | 长长的标题3 | title 4 |
| ----- | --------- | ----------- | ------- |
| 内容1 | content 2 |             |         |
| 行3  | line3     | column 3    |         |
