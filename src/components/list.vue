<script>
import comment from './comment';

    export default {
        data (){

            return {

            }
        },
        props: ['item','index'],
        methods: {
            openComment (){
                var list = this.$parent.$refs.list;
                var edit = this.$parent.edit;
                if(edit != -1){
                    list[edit].$children[0].closeComment();
                }
                this.$parent.edit = this.index;
            }
        },
        components: {
            comment
        },
        ready (){
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
    <li class="m-list-li">
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
        <comment @open="openComment"></comment>
    </li>
</template>

<style lang="less">
    .m-list {
        .m-list-ul{
            border-top: 1px solid #ddd;
        }
        .m-list-li {
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