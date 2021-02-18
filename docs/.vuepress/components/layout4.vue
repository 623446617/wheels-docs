<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-sider>
                <div class="sider">sider</div>
            </x-sider>
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
        </x-layout>
    </div>
</template>

<script>
    export default {
        name: "layout4"
    }
</script>

<style scoped>
    @import "./base.css";
</style>