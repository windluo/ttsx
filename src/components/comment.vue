<script>
    import text from './text'

    var noText = Vue.extend({
      template: '<div class="no-text"></div>'
    })

    export default {
        data () {
            return {
                list: [
                    {user:'你',msg:'hahssss',to:'女神'},
                    {user:'你',msg:'hah'},
                    {user:'你',msg:'hah',to:'女神'}
                ],
                currentView:'no-text'
            };
        },
        methods: {
            showComment (){
                if(this.currentView == "no-text"){
                    this.currentView = "text";
                    console.log(this.$children[0]);
                }
            }
        },
        components:{
            text,noText
        }
    };
</script>

<template>
    <div class="comment">
        <a href="javascript:;" class="comment-btn" @click="showComment">评论</a>
        <ul class="comment-list">
            <li v-for="item in list">
                <a href="javascript:;" class="user">{{item.user}}</a>
                <span class="comment-to" v-if="item.to">
                    回复 <a href="javascript:;">{{item.to}}</a>
                </span>
                <span class="comment-text">：{{item.msg}}1</span>
                <span class="reply-icon" @click="showComment"></span>
            </li>
        </ul>
        <component :is="currentView" :view.sync="currentView">
    </div>
</template>

<style lang="less">
    .comment{
        background-color: #fafafa;
        border-top: 1px solid #eaeaea;
        padding: 5px 0;

        .comment-btn {
            display: inline-block;
            font-size: 12px;
            line-height: 22px;
            height: 22px;
            padding: 0 5px 0 25px;
            margin-left: 6px;
            color: #287faf;
            border: 1px solid #fafafa;
            border-radius: 2px;
            background: url(/public/images/icon/comment.png) no-repeat 6px center;

            &:hover{
                border: 1px solid #d9d9d9;
                background-color: #fff;
            }
        }

        .comment-list{
            font-size: 12px;
            margin-left: 6px;
            li{
                border: none;
                padding: 0 6px;

                .reply-icon{
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    vertical-align: middle;
                    margin-left: 2px;
                    cursor: pointer;
                    background: url(/public/images/icon/reply.png) no-repeat center;
                    &:hover{
                        background-image: url(/public/images/icon/reply-hover.png)
                    }
                }
            }
        }

        .no-text{
            height: 6px;
        }
    }
</style>