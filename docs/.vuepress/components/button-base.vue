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
        name: "demo-button",
        data() {
            return {
                icon: "good"
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
