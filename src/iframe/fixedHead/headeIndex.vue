<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="handelMenu" :style="bgColor">
            <div class="layout-logo"></div>
            <div class="layout-nav">

                <span  v-if="!isLeft">
                    <MenuItem v-for="item in menu" v-bind:key="item.key" :name="item.path">
                        <Icon :type="item.icon"></Icon>
                        {{item.name}}
                    </MenuItem>
                </span>

                <MenuItem name="style">
                    <div :style="styles"></div>
                    <div v-if="isColor" class="sketchPicker">
                        <sketch-picker :value="menuColors" @input="updateValue"></sketch-picker>
                    </div>
                </MenuItem>

                <MenuItem name="change">
                    <Icon type="md-bulb"></Icon>
                    <a
                        @click="$emit('changeBanner',{isLeft:!isLeft})"
                        :style="{height: '100%', display: 'inline-block'}"
                    >
                        更换导航
                    </a>
                </MenuItem>

            </div>
        </Menu>
    </Header>
</template>

<script>
    import { Sketch } from 'vue-color';

    export default {
        name: "FixedHeadIndex",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            'sketch-picker': Sketch,
        },

        props: {
            menu: Array,
        },

        data: function() {

            return {
                isLeft: false,
                isColor: false,
                menuColors: "#1b2f49",
                activeName: window.location.pathname,
                styles:{
                    width: '40px',
                    height: '20px',
                    background: '#1b2f49',
                    color: 'red',
                    fontSize: '13px',
                    margin: '20px 0'
                },
                bgColor:{
                    background: '#515a6e'
                }
            }
        },

        methods: {
            // 点击header菜单触发的事件
            handelMenu(name){
                // eslint-disable-next-line no-empty
                if(name === 'change'){
                    // eslint-disable-next-line no-undef
                    this.isLeft = !this.isLeft;

                    return false
                }
                // eslint-disable-next-line no-empty
                if(name === 'style'){
                    this.isColor = !this.isColor;

                    return false
                }

                this.$router.push(name)
            },

            //拾色器
            updateValue (color) {

                this.bgColor.background=color.hex;
            },
        }
    }
</script>

<style lang="less">
    @import "headIndex.less";
</style>
