<template>
    <div class="input-wrapper">
        <x-input v-model="value" placeholder="请输入"/>
        <p>{{value}}</p>
    </div>
</template>

<script>
    export default {
        name: "input-base",
        data() {
            return {
                value: ''
            }
        }
    }
</script>

<style scoped>

</style>