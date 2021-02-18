<template>
    <div class="grid-wrapper">
        <x-row gutter="20">
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
            <x-col span="6">
                <div>col-6</div>
            </x-col>
        </x-row>
    </div>
</template>

<script>
    export default {
        name: "grid-gutter"
    }
</script>

<style scoped>
    @import "./base.css";
</style>