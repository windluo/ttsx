<script>
    import text from './text';
    import list from './list';
    import page from './page';

    export default {
        el: '#msg',
        data () {
            // let serverData = store.fetch();

            return {
                // 登录用户
                // user: serverData.user
                list:[
                    {id:'1',name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'这里还开着呢，都快忘了'},
                    {id:'2',name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {id:'3',name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {id:'4',name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'},
                    {id:'5',name:'不怎么样',head:'public/images/header/myface.png',time:'2016-05-26 22:23:10',content:'hahaha ..'}
                ],
                edit: -1 //正在编辑的框
            };
        },
        computed: {
            session () {
                // return this.sessionList[this.sessionIndex];
            }
        },
        watch: {
            // 每当sessionList改变时，保存到localStorage中
            // sessionList: {
            //     deep: true,
            //     handler () {
            //         store.save({
            //             user: this.user,
            //             userList: this.userList,
            //             sessionList: this.sessionList
            //         });
            //     }
            // }
        },
        components: {
            text, list, page
        },
        ready (){
            console.log(this.$refs.list);
        }
    };

</script>

<template>
    <div>
        <div class="main">
            <div class="panel-t">言语</div>
            <text></text>
            <div class="m-list">
                <ul class="m-list-ul">
                    <list v-for="item in list" :item="item" :index="$index" v-ref:list></list>
                </ul>
            </div> 
        </div>
        <page></page>
    </div>
</template>

<style lang="less">
    #msg {
        overflow: hidden;
        border-radius: 3px;
        
        .main {
            max-width: 768px;
            margin: 8px auto;
            background-color: #fff;
            border-color: #ddd;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 1px 1px rgba(0,0,0,.05);

            .panel-t{
                color: #333;
                background-color: #f5f5f5;
                padding: 10px 15px;
                border-bottom: 1px solid #ddd;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
            }
        }
    }
</style>