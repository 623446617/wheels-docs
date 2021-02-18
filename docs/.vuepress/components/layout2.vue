<template>
    <div class="layout-wrapper">
        <x-layout>
            <x-header>
                <div class="header">header</div>
            </x-header>
            <x-layout>
                <x-sider>
                    <div class="sider">sider</div>
                </x-sider>
                <x-content>
                    <div class="content">content</div>
                </x-content>
            </x-layout>
            <x-footer>
                <div class="footer">footer</div>
            </x-footer>
        </x-layout>
    </div>
</template>

<script>
    export default {
        name: "layout2"
    }
</script>

<style scoped>
    @import "./base.css";
</style>