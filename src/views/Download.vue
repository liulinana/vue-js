<template>
    <div :style="{padding: '40px'}">
        <p>查看源码：<a :href="url" target="_blank">https://github.com/liulinana/vue-js</a></p>
        <Button
            type="primary"
            :style="{marginTop: '100px'}"
            icon="ios-download-outline"
            @click="handelDownload"
        >
            快捷下载压缩包
        </Button>
    </div>
</template>

<script>
    export default {
        name: "DownloadSourceCode",
        data () {

            return {
                url: 'https://github.com/liulinana/vue-js',
                downloadPath: 'https://github.com/liulinana/vue-js/archive/master.zip',
            }
        },

        methods: {
            handelDownload () {
                window.location.href = this.downloadPath
            }
        }
    }
</script>
