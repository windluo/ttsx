<script>
    export default {
        data (){

            return {
                list:[
                    {message:'111'},
                    {message:'222'},
                    {message:'333'},
                    {message:'444'},
                    {message:'555'}
                ]
            }
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
        <ul>
            <li v-for="item in list">
                <p>{{item.message}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    .m-list {
        li {
            padding: 12px 15px;
            border-bottom: 1px solid #ddd;
            transition: background-color .1s;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }
            &.active {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
        .avatar, .name {
            vertical-align: middle;
        }
        .avatar {
            border-radius: 2px;
        }
        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }
</style>