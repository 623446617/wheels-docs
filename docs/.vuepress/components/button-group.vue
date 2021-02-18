<template>
    <div class="button-wrapper">
        <x-button-group>
            <x-button>large</x-button>
            <x-button>small</x-button>
        </x-button-group>
        <x-button-group>
            <x-button icon="left">上一页</x-button>
            <x-button>更多</x-button>
            <x-button icon="right" icon-align="right">上一页</x-button>
        </x-button-group>
    </div>
</template>

<script>
    export default {
        name: "button-group"
    }
</script>

<style scoped>

</style>