<template>
    <div class="grid-wrapper">
        <x-row>
            <x-col span="12">
               <div>col-12</div>
            </x-col>
            <x-col  span="12">
                <div>col-12</div>
            </x-col>
        </x-row>
        <br>
        <x-row>
            <x-col span="8">
                <div>col-8</div>
            </x-col>
            <x-col  span="8">
                <div>col-8</div>
            </x-col>
            <x-col  span="8">
                <div>col-8</div>
            </x-col>
        </x-row>
        <br>
        <x-row>
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
        name: "grid-base"
    }
</script>

<style scoped>
    @import "./base.css";
</style>