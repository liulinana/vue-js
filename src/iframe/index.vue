<template>
    <div class="layout">
        <Layout>
            <FixedHeadIndex/>
            <Layout class="siderContent">
                <SiderIndex/>
                <ContentIndex/>
            </Layout>
            <Footer class="layout-footer-center">2019 author by lln</Footer>
        </Layout>
    </div>
</template>

<script>
    import ContentIndex from './content/contentIndex';
    import FixedHeadIndex from './fixedHead/headeIndex';
    import SiderIndex from './siderLeft/siderIndex'
    export default {
        name: "IframeIndex",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            ContentIndex,
            // eslint-disable-next-line vue/no-unused-components
            FixedHeadIndex,
            // eslint-disable-next-line no-undef
            SiderIndex,
        },

    }
</script>

<style lang="less">
    @import "index.less";
</style>
