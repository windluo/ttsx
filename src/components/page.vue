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
    <div class="m-page">
        <ul>
            <li><span>«</span></li>
            <li><a href="javascript:;">1</a></li>
            <li><a href="javascript:;">2</a></li>
            <li><a href="javascript:;">3</a></li>
            <li><a href="javascript:;">4</a></li>
            <li><a href="javascript:;">5</a></li>
            <li><a href="javascript:;">6</a></li>
            <li><a href="javascript:;">7</a></li>
            <li><a href="javascript:;">8</a></li>
            <li><a href="javascript:;">9</a></li>
            <li><a href="javascript:;">10</a></li>
            <li><span>»</span></li>
        </ul>
    </div>
</template>

<style lang="less">
    .m-page {
        text-align: center;

        ul{
            display: inline-block;
            padding-left: 0;
            margin: 20px 0;
        }

        li{
            display: inline;

            a,span {
                position: relative;
                float: left;
                padding: 6px 12px;
                margin-left: -1px;
                line-height: 1.42857143;
                color: #337ab7;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #ddd;
            }

            &:first-child span{
                margin-left: 0;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }

            &:last-child span{
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }
</style>