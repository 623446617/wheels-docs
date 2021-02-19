<template>
    <div class="input-wrapper">
        <x-button @click="isError = !isError">toggle</x-button>
        <x-input :error="isError" message="错误提示" placeholder="请输入"/>
    </div>
</template>

<script>
    export default {
        name: "input-error",
        data() {
            return {
                isError: false
            }
        }
    }
</script>

<style scoped>

</style>