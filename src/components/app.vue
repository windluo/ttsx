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
        }
    };

</script>

<template>
    <div>
        <div class="main">
            <div class="panel-t">言语</div>
            <text></text>
            <list></list>    
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