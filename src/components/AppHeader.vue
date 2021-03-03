<template>
    <div id="header">
       
            <div class='text-danger' active>Vehicle Hire</div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data: () => ({
        menuOpen: false,
    }),
}
</script>


<style lang="scss" scoped>
    #header {
        width: 75vw;
        display: flex;
        margin: 20px auto 0 auto;

        .otomax-logo {
            width: 120px;
            height: 40px;
        }

        .top-nav {
            width: 100%;
            margin-left: 60px;

            a, a:link {
                padding: 0 15px 15px 15px;
                transition: all .4s ease;
                color: #fefefe;
                &:hover, &.active {
                    border-bottom: 4px solid #fefefe;
                    font-weight: 500;
                }
            }

            .menu-icon {
                margin-left: auto;

                button {
                    background: #0D1040;
                    padding: 10px 20px;
                    padding: 5px 30px;
                    border-radius: 10px;
                    border: none;
                }
            }
        }

    }
</style>