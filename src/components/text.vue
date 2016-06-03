<script>

    import face from './face.vue';

    var noFace = Vue.extend({
        template: '<div class="face"></div>'
    })

    export default {
        data () {
            return {
                text: '',
                faceView: 'no-face'
            };
        },
        methods: {
            showFace (event){
                console.log(event.target.className);
                if(this.faceView != 'face'){
                    this.faceView = 'face';
                    document.addEventListener('mousedown',this.closeFace)
                }
            },
            closeFace (event){
                var parent = event.target.parentElement;
                if(parent && parent.parentElement){
                    var cls = parent.parentElement.className;
                    var cls2 = parent.className;
                    if(cls != 'face-content' && cls2 != 'face-content'){
                        document.removeEventListener('mousedown',this.closeFace);
                        this.faceView = 'no-face';
                    }
                }
            }
        },
        components: {
            face,noFace
        },
        events: {
            'setEmjoy' (item){
                this.text += item;
                this.faceView = 'no-face';
            }
        },
        ready () {
            this.$els.textarea.focus();
        }
        
    };
</script>

<template>
    <div class="m-text">
        <div class="m-input">
            <textarea v-el:textarea placeholder="说点什么..." v-model="text"></textarea>
            <a href="javascript:;" class="btn fr">发表</a>
            <component :is="faceView" @click="showFace($event)"></component>
        </div>
    </div>
</template>

<style lang="less">
    .m-text {
        font-size: 12px;

        .m-input{
            margin: 8px 15px 0;
            padding: 5px 0 8px;
        }

        textarea {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-height: 46px;
            padding: 6px 6px;
            margin-bottom: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            resize: none;

            &:focus {
                border-color: #66afe9;
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
            }
        }

        .btn{
            display: inline-block;
            color: #fff;
            background-color: #5bc0de;
            border: 1px solid #46b8da;
            border-radius: 3px;
            padding: 1px 5px;
        }
    }
</style>