<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="handelMenu" :style="bgColor">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1" v-if="isLeft">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2" v-if="isLeft">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3" v-if="isLeft">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4" v-if="isLeft">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
                <MenuItem name="style">
                    <div :style="styles"></div>
                    <div v-if="isColor" class="sketchPicker">
                        <sketch-picker :value="menuColors" @input="updateValue"></sketch-picker>
                    </div>
                </MenuItem>
                <MenuItem name="change">
                    <Icon type="md-bulb"></Icon>
                    更换导航
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

        data: function() {

            return {
                isLeft: true,
                isColor: false,
                menuColors: "#1b2f49",
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
                    this.isLeft = !this.isLeft
                }
                // eslint-disable-next-line no-empty
                if(name === 'style'){
                    this.isColor = !this.isColor
                }
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
