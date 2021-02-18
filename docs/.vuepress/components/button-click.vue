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
        name: "button-click",
        data() {
            return {
                isLoading1: true,
                isLoading2: false,
                isLoading3: false
            }
        }
    }
</script>

<style scoped>

</style>