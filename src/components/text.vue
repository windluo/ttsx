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
        <div class="m-input">
            <textarea placeholder="说点什么..." v-model="text"></textarea>
            <a href="javascript:;" class="btn fr">发表</a>
            <face></face>
        </div>
    </div>
</template>

<style lang="less">
    .m-text {
        font-size: 12px;
        border-bottom: 1px solid #ddd;

        .m-input{
            margin: 8px 15px;
            padding: 5px 0;
        }

        textarea {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-height: 46px;
            padding: 6px 6px;
            margin-bottom: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            resize: none;

            &:focus {
                border-color: #66afe9;
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
            }
        }

        .btn{
            display: inline-block;
            color: #fff;
            background-color: #5bc0de;
            border: 1px solid #46b8da;
            border-radius: 3px;
            padding: 1px 5px;
        }
    }
</style>