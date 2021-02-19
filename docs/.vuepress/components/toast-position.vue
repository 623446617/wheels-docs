<template>
    <div>
        <x-button @click="show('top')">显示(居上)</x-button>
        <x-button @click="show('center')">显示(居中)</x-button>
        <x-button @click="show('bottom')">显示(居下)</x-button>
    </div>
</template>

<script>
    export default {
        name: "toast-position",
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

<style scoped>

</style>