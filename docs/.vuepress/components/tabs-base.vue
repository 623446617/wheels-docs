<template>
    <div class="tabs-wrapper">
        <x-tabs>
            <x-tabs-item label="标签1"><p class="tab-content">one</p></x-tabs-item>
            <x-tabs-item label="标签2"><p class="tab-content">two</p></x-tabs-item>
            <x-tabs-item label="标签3"><p class="tab-content">three</p></x-tabs-item>
        </x-tabs>
    </div>
</template>

<script>
    export default {
        name: "tabs-base"
    };
</script>

<style >
    .x-tabs-header {
        padding: 0;
    }

    .tab-content {
        padding: 5px;
    }
</style>
