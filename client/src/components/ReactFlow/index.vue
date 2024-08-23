<template>

    <div>
        <iframe ref="iframe" src="http://localhost:5174" style="width: 100%; height: 50vh" frameborder="0"></iframe>
    </div>
        
</template>

<script>
export default {
    mounted() {
        console.log('mounted')
        console.log(this.$refs.iframe.value)
        console.log(this.$refs.iframe.value.contentWindow)

        // URL of the hosted react query builder
        // const expectedOrigin = "http://localhost:5174";

        window.addEventListener("message", (e) => {
            console.log({origin:e.origin})
            console.log(e.data)
            console.log(this.$refs.iframe.value.contentWindow)
        });
    }
}
</script>

