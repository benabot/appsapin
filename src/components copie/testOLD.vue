<template>
    <div>
        <p v-html="mesg"></p>
        <button>ok</button>
    </div>
</template>

<script>
    
    export default {
        name: 'Test',
        data() {
            return {
                mesg : ' salut'
            }
        },
    }
</script>

<style scoped>

</style>