<template>
    <div id="logIn">
        <div class="logIn_div">
            <form action="">
                <div class="logIn_tit">
                    Log In
                </div>
                <div class="item">
                    <label ref="log_name" for="">username</label>
                    <input type="text" required>
                </div>
                <div class="item">
                    <label for="">password</label>
                    <input type="password" required>
                </div>
                <div class="btn_group">
                    <div class="log_btn btn_c1" ref="log_btn" @click="tip()">登录</div>
                    <div class="log_btn btn_c2" @click="jump()">没有账号？点我注册</div>
                </div>
                
            </form>
            <span>{{}}</span>
        </div>
    </div>
</template>

<script>
export default {
    // setup(){
    //     this.$refs.log_name.innerText = this.$router.query.data.stuName
    // },
    // beforeMount(){
    //     console.log(this.$router.params.msg);
    // },
    methods:{
        tip(){
            console.log(this.$refs.log_btn);
            this.$refs.log_btn.innerText = "正在施工...";
            this.$refs.log_btn.style.backgroundColor = "red"
        },
        jump(){
            this.$router.push("/register")
        }
    }
}
</script>

<style>
    #logIn{
        width: 100vw;
        height: 100vh;
        background-image: url(../assets/mathias-p-r-reding-7v_dlOFFi_Y-unsplash.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        display: flex;
    }
    .logIn_div {
        width: 30vw;
        height: 80vh;
        /* line-height: 80vh; */
        text-align: center;
        background-color: rgba(225, 225, 225, .5);
        margin: auto;
        backdrop-filter: blur(2px);
    }
    .item {
        color: grey;
    }
    .item label{
        display: block;
        text-align: left;
        font-size: large;
        padding-top: 20px;
        padding-left: 40px;
        padding-bottom: 10px;
    }
    .item input {
        width: 80%;
        height: 7vh;
        font-size: larger;
        color: rgb(175, 70, 70);
        margin-bottom: 20px;
        border: 1px;
        border-radius: 6px;
        /* box-sizing: border-box; */
    }
    .logIn_tit{
        border-bottom: 1px solid #fff;
        text-align: left;
        color: black;
        padding: 20px ;
        padding-left: 40px;
        font-size: x-large;
    }
    .btn_group{
        margin-top: 40px;
    }
    .log_btn{
        margin: 0 auto;
        width: 80%;
        height: 7vh;
        line-height: 7vh;
        margin-bottom: 20px;
        border-radius: 10px;
        cursor: pointer;
    }

    .btn_c1{
        background-color: rgb(81, 168, 221);
    }
    .btn_c1:hover{
        background-color: rgb(57, 78, 234);
        box-shadow: 0 10px 10px -6px rgba(242, 99, 4, 0.9);
    }
    .btn_c2{
        background-color: rgb(93, 172, 129)
    }
    .btn_c2:hover{
        background-color: rgba(13, 168, 238);
        box-shadow: 0 10px 10px -6px rgba(242, 99, 4, 0.9);
    }

</style>