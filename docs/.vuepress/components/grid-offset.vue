<template>
    <div class="grid-wrapper">
        <x-row>
            <x-col span="4">
                <div>col-4</div>
            </x-col>
            <x-col span="10" offset="2">
                <div>col-10 | offset-2</div>
            </x-col>
            <x-col span="6" offset="2">
                <div>col-6 | offset-2</div>
            </x-col>
        </x-row>
    </div>
</template>

<script>
    export default {
        name: "grid-offset"
    }
</script>

<style scoped>
    @import "./base.css";
</style>