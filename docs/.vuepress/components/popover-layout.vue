<template>
    <div>
        <x-popover>
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>click激活(纵向)</x-button>
        </x-popover>

        <x-popover layout="horizontal">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>click激活(横向)</x-button>
        </x-popover>

        <x-popover mode="hover">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>hover激活(纵向)</x-button>
        </x-popover>

        <x-popover mode="hover" layout="horizontal">
            <template v-slot:content>
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </template>
            <x-button>hover激活(横向)</x-button>
        </x-popover>
    </div>
</template>

<script>
    export default {
        name: "popover-layout"
    };
</script>

<style scoped>

</style>
