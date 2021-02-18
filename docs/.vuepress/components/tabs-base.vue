<template>
    <div class="tabs-wrapper">
        <x-tabs>
            <x-tabs-item label="标签1">
                <div>one</div>
            </x-tabs-item>
            <x-tabs-item label="标签2">two</x-tabs-item>
            <x-tabs-item label="标签3">three</x-tabs-item>
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
</style>
