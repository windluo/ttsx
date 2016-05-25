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
            <text></text>
            <list></list>
            <page></page>    
        </div>
    </div>
</template>

<style lang="less">
    #msg {
        overflow: hidden;
        border-radius: 3px;
        
        .main {
            max-width: 768px;
            margin: 0 auto;
            background-color: #eee;
        }
    }
</style>