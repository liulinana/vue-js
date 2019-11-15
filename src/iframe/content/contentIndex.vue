<template>
    <Content :style="{
                margin: '88px 20px 0',
                background: '#fff',
                minHeight: '825px',
                // position: 'fixed',
                width: '100%',
                // height: '80%'
            }"
    >
        <router-view/>
    </Content>
</template>

<script>
    export default {
        name: 'ContentIndex'
    }
</script>
