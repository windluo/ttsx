<script>

    export default {
        data () {
            return {
                text: ''
            };
        },
        methods: {

        }
    };
</script>

<template>
    <div>
        <div class="face">
            <div class="face-box">
                
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .face{
        height: 24px;
        width: 24px;
        margin-left: 5px;
        cursor: pointer;
        background: url(/public/images/icon/smile.gif) no-repeat center center;
        position: relative;

        .face-box{
            position: absolute;
        }
    }
</style>