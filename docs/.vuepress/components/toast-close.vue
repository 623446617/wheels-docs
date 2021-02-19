<template>
    <div>
        <x-button @click="show1">显示(默认)</x-button>
        <x-button @click="show2">显示(自定义)</x-button>
    </div>
</template>

<script>
    export default {
        name: "toast-close",
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

<style scoped>

</style>