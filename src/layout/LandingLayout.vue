<template>
    <div id='app'>
        <login />
        <div class="view">
            <router-view />
        </div>
    </div>
</template>

<script>
import Login from '@/pages/auth/Login'

export default {
    name: 'LandingLayout',
    data: () => ({
        
    }),
    components: {
        Login,
    }
}
</script>

<style lang="scss">
    .view {
        min-height: calc(20px - 100vh);
    }
</style>