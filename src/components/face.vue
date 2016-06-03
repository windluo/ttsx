<script>

    export default {
        data () {
            return {
                text: '',
                page: 0
            };
        },
        computed: {
            list (){
                var list = [];
                if(this.page == 0){
                    for(var i = 0; i < 60; i++){
                        var data = 'e'+(100+i) + '.gif';
                        list.push(data);
                    }
                }
                if(this.page == 1){
                    for(var i = 0; i < 60; i++){
                        var data = 'e'+(160+i) + '.gif';
                        list.push(data);
                    }
                }
                if(this.page == 2){
                    for(var i = 0; i < 60; i++){
                        var data = 'e'+(7000+i) + '.gif';
                        list.push(data);
                    }
                }
                if(this.page == 3){
                    for(var i = 0; i < 50; i++){
                        var data = 'baidu_'+((101+i)+"").substr(-2) + '.png';
                        list.push(data);
                    }
                }
                return list;
            },

            faceBg (){
                return {
                    background : 'url(/public/images/face'+(this.page+1)+'.png) no-repeat 0 0'
                }
            }
        },
        methods: {
            change (item){
                if(!isNaN(item)){
                    this.page = item;
                }else{
                    if(item == 'prev' && this.page > 0){
                        this.page--;
                    }else if(item == 'next' && this.page < 3){
                        this.page++;
                    }
                }
            },
            select (item){
                this.$dispatch('setEmjoy',item);
            }
        }
    };
</script>

<template>
    <div class="face">
        <div class="face-content">
            <ul class="face-box" :style="faceBg">
                <li class="face-item" v-for="item in list" @click="select(item)"></li>
            </ul>
            <div class="face-pager">
                <a class="face-button" :class="{disabled:page==0}" href="javascript:;" @click="change('prev')">«</a>
                <a class="pace-page-num" :class="{current:page==0}" href="javascript:;" @click="change(0)">1</a>
                <a class="pace-page-num" :class="{current:page==1}" href="javascript:;" @click="change(1)">2</a>
                <a class="pace-page-num" :class="{current:page==2}" href="javascript:;" @click="change(2)">3</a>
                <a class="pace-page-num" :class="{current:page==3}" href="javascript:;" @click="change(3)">4</a>
                <a class="face-button" :class="{disabled:page==3}" href="javascript:;" @click="change('next')">»</a>
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

        .face-content{
            position: absolute;
            left: 0;
            top: 26px;
            border: 1px solid #D9D9D9;
            box-shadow: 1px 1px 3px 0 rgba(0,0,0,.08);

            .face-box{
                width: 260px;
                height: 156px;
                overflow: hidden;
                background-color: #fff;

                .face-item{
                    width: 24px;
                    height: 24px;
                    float: left;
                    border: 1px solid #fff;
                    cursor: pointer;

                    &:hover{
                        border: 1px solid #2E8DED;
                    }
                }
            }

            .face-pager{
                text-align: center;
                padding: 6px 0 6px;
                color: #5f5f5f;
                background-color: #efe;
                font-size: 14px;

                .pace-page-num{
                    text-align: center;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    color: #332f30;
                }
                .face-button{
                    width: 30px;
                    height: 20px;
                    padding: 0;
                    border: 1px solid #dedede;
                    line-height: 18px;
                    font-size: 18px;
                    display: inline-block;
                    vertical-align: middle;
                    border-radius: 2px;
                    text-align: center;
                    color: #000;
                }

                .current,.disabled{
                    cursor: default;
                    color: #ccc;
                }
            }
        }
    }
</style>