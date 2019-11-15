<template>
    <div class="layout">
        <Layout>
            <FixedHeadIndex :menu="routes" @changeBanner="handelChangeBanner"/>

            <Layout class="siderContent">
                <SiderIndex :menu="routes" v-if="isShow"/>
                <ContentIndex/>
            </Layout>

            <Footer class="layout-footer-center">2019 author by lln</Footer>
        </Layout>
    </div>
</template>

<script>
    import ContentIndex from './content/contentIndex';
    import FixedHeadIndex from './fixedHead/headeIndex';
    import SiderIndex from './siderLeft/siderIndex';
    import router from '@/router/index'

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

        data: function() {

            return {
                isShow: false,
                routes: router.options.routes
            }
        },

        methods: {
            handelChangeBanner(value){
                this.isShow = value?.isLeft
            }
        }

    }
</script>

<style lang="less">
    @import "index.less";
</style>
