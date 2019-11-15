<template>

    <iframe :src="url" :style="{width: '100%', height: '100%', border: 'none'}"></iframe>

</template>

<script>
    export default {
        name: "IviewLibrary",
        data () {

            return {
                url: 'https://www.iviewui.com/components/icon'
            }
        }
    }
</script>
