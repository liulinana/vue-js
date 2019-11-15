<template>
    <Sider hide-trigger class="leftBanner">
        <Menu :active-name="activeName" theme="light" width="auto" :open-names="['1']" @on-select="handelMenu">

            <MenuItem v-for="item in menu" v-bind:key="item.key" :name="item.path">
                <Icon :type="item.icon"></Icon>
                {{item.name}}
            </MenuItem>

        </Menu>
    </Sider>
</template>

<script>
    export default {
        name: 'SiderIndex',
        props: {
            menu: Array,
        },

        data () {

            return {
                activeName: window.location.pathname
            }
        },

        methods: {
            handelMenu(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="less">
    @import "siderIndex.less";
</style>
