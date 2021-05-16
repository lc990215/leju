<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #tab-bar{
        position: fixed;
        width: 100%;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        height: 80px;
    }
</style>
