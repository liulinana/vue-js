
<template>
    <div class="layout">
        <Layout>
            <FixedHeadIndex/>
            <ContentIndex/>
            <Footer class="layout-footer-center">2019 author by lln</Footer>
        </Layout>
    </div>
</template>

<script>
    import ContentIndex from './content/contentIndex';
    import FixedHeadIndex from './fixedHead/fixedHeadeIndex'
    export default {
        name: "IframeIndex",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            ContentIndex,
            // eslint-disable-next-line vue/no-unused-components
            FixedHeadIndex
        },

    }
</script>

<style lang="less">
    @import "index.less";
</style>
