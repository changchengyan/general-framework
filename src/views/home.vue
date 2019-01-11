<template>
    <div id="home">
        <h1>home</h1>
        <h1>同时要清除控制台，要打开控制台看呦~</h1>
    </div>
</template>

<script>
console.log("直接在控制台中~~~~~~~~")
export default {
    data(){
       return{

       }
    },
    methods:{
        test_console(){
            console.log("测试在 函数中清楚控制台")
        }
    },
    mounted(){
        this.test_console()
    },
    created(){
    }
}
</script>

<style lang="scss" scoped>

</style>


