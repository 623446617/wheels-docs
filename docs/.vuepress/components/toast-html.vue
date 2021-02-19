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

<style scoped>

</style>