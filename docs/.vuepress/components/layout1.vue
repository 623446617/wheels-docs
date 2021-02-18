<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-header>
                <div class="header">header</div>
            </x-header>
            <x-content>
                <div class="content">content</div>
            </x-content>
            <x-footer>
                <div class="footer">footer</div>
            </x-footer>
        </x-layout>
    </div>
</template>

<script>
    export default {
        name: "layout1"
    }
</script>

<style scoped>
    @import "./base.css";
</style>