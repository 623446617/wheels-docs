<template>
    <div>
        <x-button @click="show1">显示(手动关闭)</x-button>
        <x-button @click="show2">显示(自动关闭)</x-button>
    </div>
</template>

<script>
    export default {
        name: "toast-callback",
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

<style scoped>

</style>