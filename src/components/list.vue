<script>
import comment from './comment';

    export default {
        data (){

            return {
                list:[
                    {name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'这里还开着呢，都快忘了'},
                    {name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'}
                ]
            }
        },
        components: {
            comment
        }
        // props: ['userList', 'sessionIndex', 'session', 'search'],
        // methods: {
        //     select (value) {
        //         this.sessionIndex = this.userList.indexOf(value);
        //     }
        // },
        // filters: {
        //     search (list) {
        //         return list.filter(item => item.name.indexOf(this.search) > -1);
        //     }
        // }
    };
</script>

<template>
    <div class="m-list">
        <ul class="m-list-ul">
            <li v-for="item in list">
                <div class="u-info">
                    <div class="u-head">
                        <a href="javascript:;">
                            <img :src="item.head" alt="{{item.name}}">
                        </a>
                    </div>
                    <div class="u-name">
                        <a href="javascript:;" class="name">{{item.name}}</a>
                        <div class="p-time">{{item.time}}</div>
                    </div>
                </div>
                <div class="msg-content">{{item.content}}</div>
                <comment></comment>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .m-list {
        .m-list-ul{
            border-top: 1px solid #ddd;
        }
        li {
            border-bottom: 1px solid #ddd;
            
            .u-info{
                padding: 12px 15px 8px 15px;
                .u-head{
                    height: 50px;
                    width: 50px;
                    float: left;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    img{
                        border-radius: 4px;
                    }
                }
                .u-name{
                    margin-left: 56px;
                    a{
                        color: #337ab7;
                        &:focus,&:hover{
                            color: #23527c;
                            text-decoration: underline; 
                        }
                    }
                    .p-time{
                        color: #8c7e83;
                        font-size: 12px;
                        margin-top: 8px;
                    }
                }
            }

            .msg-content{
                padding: 0 15px 12px 15px;
            }
        }
    }
</style>