<template>
    <Sider hide-trigger :style="{background: '#fff', marginTop: '60px'}">
        <Menu active-name="1" theme="light" width="auto" :open-names="['1']" @on-select="handelMenu">

            <MenuItem v-for="item in menu" v-bind:key="item.key" :name="item.path">
                <Icon :type="item.icon"></Icon>
                {{item.name}}
            </MenuItem>
<!--            <Submenu name="1">-->
<!--                <template slot="title">-->
<!--                    <Icon type="ios-navigate"></Icon>-->
<!--                    Item 1-->
<!--                </template>-->
<!--                <MenuItem name="1-1">Option 1</MenuItem>-->
<!--                <MenuItem name="1-2">Option 2</MenuItem>-->
<!--                <MenuItem name="1-3">Option 3</MenuItem>-->
<!--            </Submenu>-->
<!--            <Submenu name="2">-->
<!--                <template slot="title">-->
<!--                    <Icon type="ios-keypad"></Icon>-->
<!--                    Item 2-->
<!--                </template>-->
<!--                <MenuItem name="2-1">Option 1</MenuItem>-->
<!--                <MenuItem name="2-2">Option 2</MenuItem>-->
<!--            </Submenu>-->
<!--            <Submenu name="3">-->
<!--                <template slot="title">-->
<!--                    <Icon type="ios-analytics"></Icon>-->
<!--                    Item 3-->
<!--                </template>-->
<!--                <MenuItem name="3-1">Option 1</MenuItem>-->
<!--                <MenuItem name="3-2">Option 2</MenuItem>-->
<!--            </Submenu>-->
        </Menu>
    </Sider>
</template>

<script>
    export default {
        name: 'SiderIndex',
        props: {
            menu: Array,
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
