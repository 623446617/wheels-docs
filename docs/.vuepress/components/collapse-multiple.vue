<template>
    <div class="collapse-wrapper">
        <x-collapse mode="multiple" :value.sync="select">
            <x-collapse-item title="vue" tag="1">
                <p>Vue是尤雨溪编写的一个构建数据驱动的Web界面的库，准确来说不是一个框架，它聚焦在V（view）视图层。渐进式构建能力是vue.js最大的优势，vue有一个简洁而且合理的架构，使得它易于理解和构建。</p>
            </x-collapse-item>
            <x-collapse-item title="react" tag="2">
                <p>React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站， 并于 2013年 5 月开源。React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。</p>
            </x-collapse-item>
            <x-collapse-item title="angular" tag="3">
                <p>对于用户来说它有一套用于构建用户界面的丰富组件，这也是本系列中少有的几个框架能够做到这点。Angular是一款优秀的前端JS框架，已经被用于Google的多款产品当中。</p>
            </x-collapse-item>
        </x-collapse>
    </div>
</template>

<script>
    export default {
        name: "collapse-multiple",
        data() {
            return {
                select: ['1']
            }
        }
    };
</script>

<style scoped>
    p {
        padding: 10px;
    }
</style>
