<template>
    <div id="about">
        <h1>about</h1>
    </div>
</template>

<script>
export default {
    data(){

    },
    watch:{
        test:{
            handler(newValue,oldValue){
                console.log(newValue,oldValue)
            },
            immediate:true,
            deep:true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


