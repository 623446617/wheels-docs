<template>
    <div>
        <x-button @click="show1">显示(手动关闭)</x-button>
        <x-button @click="show2">显示(自动关闭)</x-button>
    </div>
</template>

<script>
    export default {
        name: "toast-base",
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

<style scoped>

</style>