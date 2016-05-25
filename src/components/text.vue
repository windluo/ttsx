<script>

    import face from './face.vue';

    export default {
        data () {
            return {
                text: ''
            };
        },
        methods: {

        },
        components: {
            face
        }
        
    };
</script>

<template>
    <div class="m-text">
        <textarea placeholder="请输入..." v-model="text"></textarea>
        <a href="javascript:;">提交</a>
        <face></face>
    </div>
</template>

<style lang="less">
    .m-text {
        border-top: solid 1px #ddd;
        
        textarea {
            padding: 10px;
            height: 60px;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>