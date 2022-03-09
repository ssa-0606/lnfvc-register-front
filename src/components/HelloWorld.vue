<template>   
  <div class="register-div" >
    <div class="register-form">
      <form ref="my-form">
        <div class="register-row">
          <div class="register-tit">
            注册用户
          </div>
        </div>
        <div class="register-row">

          <div class="register-box r_box1">
            <div class="register-label">姓名</div>
            <div class="register-input">
              <input v-model="student.name" @blur="nameCheck()" type="text" name="stuName" required>
            </div>
            <div class="check">
              <span ref="check_name" style="font-size:xx-small">用户名为汉字</span>
            </div>
          </div>

          <div class="register-box r_box2">
            <div class="register-label">手机号码</div>
            <div class="register-input">
              <input v-model="student.phone" @blur="phoneCheck()" type="number" name="stuPhone">
            </div>
            <div class="check">
              <span ref="check_phone" style="font-size:xx-small">输入正确的手机号码</span>
            </div>
          </div>

        </div>

        <div class="register-row">

          <div class="register-box r_box1">
            <div class="register-label">密码</div>
            <div class="register-input">
              <input v-model="student.password" @blur="passwordCheck()" type="password" name="stuPassword">
              <div class="check">
                <span ref="check_password" style="font-size:xx-small">密码由英文字母和数字组成的4-10位字符</span>
              </div>
            </div>
          </div>

          <div class="register-box r_box2">
            <div class="register-label">生日</div>
            <div class="register-input">
              <input v-model="student.brith" type="date" name="stuBrith">
            </div>
             <div class="check" >
                <span ref="check_" style="font-size:xx-small;">输入您的生日</span>
              </div>
          </div>

        </div>
        
        <div class="register-row">
          <div class="register-box r_box1">
            <div class="register-label">性别</div>
            <div class="register-input-radio">
              <input v-model="student.gender" type="radio" id="man" name="stuGender" value="1"/>
              <label for="man">男</label>
              <input v-model="student.gender" type="radio" id="feman" name="stuGender" value="2"/>
              <label for="feman">女</label>
            </div>
          </div>
          <div class="register-box r_box2">
            <div class="register-label">选择图片</div>
            <div class="register-input-upload">
              <input ref="file" type="file" name="stuImg">
              
            </div>
          </div>
        </div>
        
      </form>

      <div class="reg-btn">
          <div>
            <input @click="register()" type="button" class="btn" value="注册">
          </div>
      </div>
      <span ref="final_check"></span>
      
    </div>

  </div>

</template>

<style>
.register-div{
  width:100vw ;
  height: 100vh;
  background-color: #050901; 
  display: flex;
  color: #050801;
}

.register-form{
  margin: auto;
  width: 60vw;
  height: 80vh;
  /* background-color: rgb(57, 70, 80); */
  background-color: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 200px #03e9f4;
}

.register-row{
  width: 100%;
  margin-bottom: 35px;
}
.register-tit{
  font-size: x-large;
  text-align: left;
  padding-left: 30px;
  padding-top: 20px;
  margin-bottom: 0px;
  border-bottom: 2px solid #050801;
  padding-bottom: 20px;
}
.register-box{
  display: inline-block;
  text-align: left;
}
.register-label{
  text-align: left;
  padding-bottom: 10px;
  font-size: larger;
  font-weight: 500;
}
.register-input input{
  width: 20vw;
  height:5vh;
  border-radius: 10px;
  border: 1px solid black;
}
.r_box1{
  margin-right: 20px;
}
.r_box2{
  margin-left: 20px;
}

.reg-btn input{
  width: 45vw;
  height: 5vh;
  background-color: rgb(89, 189, 255);
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
}


</style>



<script>


export default {
  
  data(){
    return {
      student:{},
      file:null,
      result:{},
      nameCheckv:false,
      passwordCheckv:false,
      phoneCheckv:false 
    }
  },
  
  methods:{
    test(){
      console.log(this.result);
    },
    // change_up(){
    //   this.$refs.file.click()
    //   this.$refs.tips.innerText = "已上传一张图片"
    // },
    register(){

      if(this.student.name===undefined&&this.student.password===undefined&&this.student.phone===undefined){
        this.$refs.final_check.innerText = "有信息没填写"
        return false;
      }
    // console.log(this.nameCheckv);
    // console.log(this.passwordCheckv);
    // console.log(this.phoneCheckv);

      if(this.nameCheckv === false&&this.passwordCheckv === false &&this.phoneCheckv === false){
        this.$refs.final_check.innerText= "有信息填写有误"
        return false;
      }

      //双向绑定
      // console.log(this.student);
      this.file = this.$refs.file.files[0]
      // console.log(this.file);

      if(!this.file){
        this.$refs.final_check.innerText = "请上传文件"
        return false;
      }
      

      let formData = new FormData();
      // console.log(toRow(this.student));
      // console.log(this.file);

      formData.append("stuName",this.student.name);
      formData.append("stuPassword",this.student.password)
      formData.append("stuGender",this.student.gender)
      formData.append("stuPhone",this.student.phone)
      formData.append("stuBrith",this.student.brith)
      formData.append("file",this.file,this.file.name)

      // console.log(formData);
      
      fetch('http://imikasa.com:8090/register/student',{
        method: 'POST',
        body: formData
      }).then((res)=>{
        let resp = res.json()
        resp.then((data)=>{
          this.result = data;
          console.log(data);
          if(data.code===200){
            this.$router.push({path:'/',params:data.msg})
          }
        })
      })

    },

    nameCheck(){
      let user=this.student.name
      // console.log(user);
      let userText=this.$refs.check_name
      if(user === " " && user === null && user === undefined){
        userText.innerText="输入不能为空"
        this.nameCheckv = false;
        return false;
      }
		  let reg=/^[\u2E80-\u9FFF]{2,5}$/;
		  if(reg.test(user)){
			  userText.innerHTML="输入正确!";
        this.nameCheckv = true
			  return true;
		  }else{
			  userText.innerHTML="输入不正确!";
        this.nameCheckv = false
		  }
		  return false;
    },

    phoneCheck(){
      let phone=this.student.phone
      var userText=this.$refs.check_phone
      var reg=/^1\d{10}$/;
      if(reg.test(phone)==false){
        userText.innerText="手机号码不正确，请重新输入";
        this.phoneCheckv = false;
        return false;
      }
        userText.innerText="输入正确";
        this.phoneCheckv = true;
        return true;
    },

    passwordCheck(){
       let pwd = this.student.password
       let userText=this.$refs.check_password;  
       let reg=/^[a-zA-Z0-9]{4,10}$/;    
        if(reg.test(pwd)==false){
          userText.innerText="密码不能含有非法字符，长度在4-10之间";
          this.passwordCheckv = false;
          return false;
        }else{
          userText.innerText="输入正确"
          this.passwordCheckv = true;
        }
      return true;
    }


  }


}

</script>
