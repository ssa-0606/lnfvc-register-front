<template>   
 
  <div class="register-div">
    <el-row>
      <el-col :span="12" :offset="6" class="register-form-parent">
        <div class="register-form">
          <el-form v-model="student" label-width="70px"  label-position="top">
            <el-row>
              <el-col>
                <span class="register-tit">
                  注册用户🤞
                </span>
                
              </el-col>
            </el-row>
            <el-divider content-position="center" style="background-color: rgb(102, 204, 255); margin-top: 40px;"></el-divider>
            <el-row class="register-row">
              <el-col :span="10" :offset="1">
                <el-form-item class="register-item" label="姓  名">
                  <el-input v-model="student.name" placeholder="input name" label-position=top size="large" @change="nameCheck()" ></el-input>
                  <div class="check_div">
                    <span ref="check_name" :class="check_style_name">输入2~5位的汉字</span>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="1">
                  <el-form-item class="register-item" label="密码">
                    <el-input v-model="student.password" placeholder="input password" type="password" size="large" @change="passwordCheck()"></el-input>
                    <div class="check_div">
                      <span ref="check_password" :class="check_style_pass">输入由大小写字母以及数字组成的4~10位密码</span>
                    </div>
                  </el-form-item>
              </el-col>
            </el-row>

            <el-row class="register-row" >
              <el-col :span="10" :offset="1">
                <el-form-item class="register-item" label="电话号码">
                  <el-input v-model="student.phone" placeholder="input phone" size="large" type="phone" @change="phoneCheck()"></el-input>
                  <div>
                    <span ref="check_phone" :class="check_style_phone">输入电话号码</span>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-form-item class="register-item" label="出生日期">
                  <el-date-picker v-model="student.brith" placeholder="input brith" size="large" type="date" value-format="YYYY-MM-DD"></el-date-picker>
                </el-form-item>
                
              </el-col>
              <el-col :span="5" :offset="1">
                <el-form-item class="register-item" label="性别">
                  <el-radio-group v-model="student.gender" size="large">
                    <el-radio-button label="男"></el-radio-button>
                    <el-radio-button label="女"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="register-row">
              <el-col :span="6" :offset="1">
                <el-form-item class="register-item" label="上传图片">
                  <div class="form-upload" @click="get_btn()" ref="area">
                    <span>+</span>
                  </div>
                  <div><input type="file" @change="to_area()" class="input_btn" ref="input_btn"></div>
                </el-form-item>
              </el-col>
              <el-col :span="6" :offset="1">
                  <el-form-item class="register-item" label="上传图片预览">
                        <div class="img_area" ref="img_area">
                    
                        </div>
                  </el-form-item>
                  
              </el-col>
            </el-row>

            <el-row  class="register-row">
              <el-col :span="14" :offset="5">
                <el-button type="primary" size="large" class="register_btn register" @click="register()">注册</el-button>
              </el-col>
              
            </el-row>
            <el-row>
              <el-col :span="12" :offset="6" style="text-align: center;">
                <div style="  height: 30px; ">
                  <span class="final_check" ref="final_check"></span>
                </div>
              </el-col>
            </el-row>
          
          </el-form>
          
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<style>

.register-div{
  width: 100vw;
  height: 100vh;
  background-color:rgb(32, 32, 35);
  text-align: left;
  position: fixed;
}
.register-form-parent{
  margin-top: 20vh;
  /* height: 60vh; */
  text-align: left;   
  border-top: 2px double rgb(102, 204, 255);
  border-radius: 5px;
  color: aqua;
}
.register-form{
  text-align: left;
  widows: 100%;
  height: 100%;
  background-color: rgb(60, 70, 80)
}

.form-upload{
  height: 150px; 
  width: 150px; 
  border: 2px gray dashed;
  border-radius: 20%;
  text-align: center;
  line-height: 150px ;
  color: gray;
}

.form-upload span{
  font-size: 3rem; 
  font-weight: 100;
}

.form-upload:hover{
  border-color: black;
  color: black;
}

.input_btn{
  display: none;
}

.img_area img{
  height: 150px;
}

.register_btn{
  width: 100%;
}
.register-tit{
  font-size: x-large;
  padding-left: 30px;
  position: relative;
  top: 20px;
}
    .el-row{
      margin-bottom: 10px;
    }
.register-item .el-form-item__label{
  color: aqua;
  font-size: large;
}


.check{
  color: rgb(60, 70, 80);
}
.check_failed{
  color: rgb(247, 18, 18);
}
.check_success{
  color: rgb(54, 148, 54);
}
.final_check{
  color: rgb(247, 18, 18);
}
</style>



<script>

import { reactive } from "vue"

export default {
  
  data(){
    return {
      
      file:null,
      result:{},
      nameCheckv:false,
      passwordCheckv:false,
      phoneCheckv:false,
      student: reactive({
          name:'',
          password:'',
          phone:'',
          brith:'',
          gender:''
      }),
      check_style_name:"check",
      check_style_pass:"check",
      check_style_phone:"check"
    }
  },
  
  methods:{
    test(){
      console.log(this.result);
    },
    get_btn(){
      let btn = this.$refs.input_btn;
      btn.click();
    },
    to_area(){
      let input = this.$refs.input_btn
      let img_area = this.$refs.img_area
      var image = input.value;
      img_area.innerHTML=''
      var extStart = image.lastIndexOf(".");
      var ext = image.substring(extStart, image.length).toUpperCase();
      if ( ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
          alert("图片限于png，gif，jpeg，jpg格式！");
          return false;
      }
      var file = input.files[0];//获取input上传的图片信息
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event=> {
            let img = document.createElement('img')
            img.src = reader.result
            img_area.appendChild(img)
          }
    },
    // change_up(){
    //   this.$refs.file.click()
    //   this.$refs.tips.innerText = "已上传一张图片"
    // },
    register(){

      console.log(this.student.brith);
      console.log(this.student.gender);
      if(this.student.name===''&&this.student.password===''&&this.student.phone===''){
        console.log(123);
        let check = this.$refs.final_check;
        check.innerText = "有信息未填写"
        return false;
      }

      if(!(this.nameCheckv&&this.passwordCheckv &&this.phoneCheckv) ){
        this.$refs.final_check.innerText= "有信息填写有误"
        return false;
      }

      // console.log(this.student);
      this.file = this.$refs.input_btn.files[0]
      console.log(this.file);

      if(!this.file){
        this.$refs.final_check.innerText = "请上传文件"
        return false;
      }

      let sex = 1;
      if(this.student.gender === "男"){
        sex = 1;
      }else if(this.student.gender === "女"){
        sex =2;
      }else{
        sex =3
      }
      

      let formData = new FormData();
      // console.log(toRow(this.student));
      // console.log(this.file);

      formData.append("stuName",this.student.name);
      formData.append("stuPassword",this.student.password)
      formData.append("stuGender",sex)
      formData.append("stuPhone",this.student.phone)
      formData.append("stuBrith",this.student.brith)
      formData.append("file",this.file,this.file.name)

      // console.log(formData);
      
      fetch('http://localhost:8090/register/student',{
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
      console.log(123);
      let user=this.student.name
      let userText=this.$refs.check_name
      if(user === " " && user === null && user === undefined){
        userText.innerText="输入不能为空"
        this.check_style_name = "check_failed"
        console.log(this.check_style);
        this.nameCheckv = false;
        return false;
      }
		  let reg=/^[\u2E80-\u9FFF]{2,5}$/;
		  if(reg.test(user)){
			  userText.innerHTML="输入正确!";
        this.check_style_name = "check_success"
        this.nameCheckv = true
			  return true;
		  }else{
			  userText.innerHTML="输入不正确,长度为2~5的汉字!";
        this.nameCheckv = false
        this.check_style_name = "check_failed"
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
        this.check_style_phone = "check_failed"
        return false;
      }
        userText.innerText="输入正确";
        this.phoneCheckv = true;
        this.check_style_phone = "check_success"
        return true;
    },

    passwordCheck(){
       let pwd = this.student.password
       let userText=this.$refs.check_password;  
       let reg=/^[a-zA-Z0-9]{4,10}$/;    
        if(reg.test(pwd)==false){
          userText.innerText="密码不能含有非法字符，长度在4-10之间";
          this.check_style_pass = "check_failed"
          this.passwordCheckv = false;
          return false;
        }else{
          userText.innerText="输入正确"
          this.check_style_pass = "check_success"
          this.passwordCheckv = true;
        }
      return true;
    }


  }


}

</script>
