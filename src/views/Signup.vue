<template>
    
    <!-- <div class="container">
        <h1>Login</h1>
        <div>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div >
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <h1> {{ input.username }} </h1>
        <button type="button" v-on:click="login()">Login</button>
    </div> -->
    <div class="login-form">
  <form>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="firstname" id="firstname" v-model="input.firstname"  placeholder="First Name" autocomplete="nope">
      </div>
      <div class="input-field">
        <input type="lastname" id="lastname" v-model="input.lastname"  placeholder="Last Name" autocomplete="nope">
      </div>
      <div class="input-field">
        <input type="email" id="username" v-model="input.username"  placeholder="Email" autocomplete="nope">
      </div>
      
      <div class="input-field">
        <input type="password" id="password" v-model="input.password"  placeholder="Password" autocomplete="new-password">
      </div>
      <div class="input-field">
        <input type="nativelanguage" id="nativelanguage" v-model="input.nativelanguage"  placeholder="Native Language" autocomplete="nope">
      </div>
      <a href="#" class="link">Forgot Your Password?</a>
    </div>
    <div class="action">
      <!-- <button>Register</button> -->
      <button type="button" v-on:click="signup()">Signup</button>
      <!-- <button>Sign in</button> -->
    </div>
  </form>
</div>
   
</template>

<script>
// import { Form, Field } from 'vee-validate';

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
          signup() {
                if(this.input.username != "" && this.input.password != "") {
                    // This should actually be an api call not a check against this.$parent.mockAccount
                    this.axios.post(`${import.meta.env.VITE_BASE_URL}v1/auth/device`,{
                        clientPlatform: "solo_web", clientPlatformVersion: "maintenance-19-dec-v2",
                        deviceType: "web", locale :"en-US"}).then((response) => {
                        console.log("????????",response.data.token)
                        this.axios.post(`${import.meta.env.VITE_BASE_URL}v1/users`,{
                            email: this.input.username,
                            password: this.input.password,
                            firstName: this.input.firstname,
                            lastName: this.input.lastname,
                            nativeLangCode: this.input.nativelanguage,
                            organization: {name: ""},
                            flags: []
                        },
                        {
                            headers: {
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer "+response.data.token
                            }
                        }
                        ).then((response)=>{
                            console.log("-******-->",response.status) 
                            if(response.status == 201) {
                                
                              if(this.input.username != "" && this.input.password != "") {
                                      // This should actually be an api call not a check against this.$parent.mockAccount
                                      this.axios.post(`${import.meta.env.VITE_BASE_URL}v1/auth/device`,{
                                          clientPlatform: "solo_web", clientPlatformVersion: "",
                                          deviceType: "web", locale :"en-US"}).then((response) => {
                                          // console.log(response.data.token)
                                          this.axios.post(`${import.meta.env.VITE_BASE_URL}v1/auth/user`,{
                                              email: this.input.username,
                                              password: this.input.password
                                          },
                                          {
                                              headers: {
                                              'Content-Type': 'application/json',
                                              'Authorization': response.data.token
                                              }
                                          }
                                          ).then((response)=>{
                                              // console.log("-******-->",response.data.token) 
                                              if(response.data.token != "") {
                                                  if (response.data.token) {
                                                      
                                                      localStorage.setItem('user-token', JSON.stringify(response.data));
                                                      }
                                                      else{
                                                          // console.log("here!!!!")
                                                      }
                                                  this.$router.replace({ name: "history" });
                                              } else {
                                              
                                              }
                                          }).catch(function (error){
                                            alert("invalid credentials entered!");
                                          });
                                      })
                                      console.log(">>>>>>>>>>>>>");
                                  } else {
                                  }
                            } else {
                             
                            }
                        }).catch(function (error){
                          alert("invalid credentials entered!");
                        });
                    })
                    console.log(">>>>>>>>>>>>>");
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #e35869;
  font-family: 'Rubik', sans-serif;
}

.login-form {
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.login-form h1 {
  padding: 35px 35px 0 35px;
  font-weight: 300;
}
.login-form .content {
  padding: 35px;
  text-align: center;
}
.login-form .input-field {
  padding: 12px 5px;
}
.login-form .input-field input {
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  -webkit-transition: all .2s;
  transition: all .2s;
}
.login-form .input-field input::-webkit-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-moz-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:focus {
  border-color: #222;
}
.login-form a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
}
.login-form .action {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
}
.login-form .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.login-form .action button:hover {
  background: #d8d8d8;
}
.login-form .action button:nth-child(2) {
  background: #2d3b55;
  color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 4px;
}
.login-form .action button:nth-child(2):hover {
  background: #3c4d6d;
}
/* #login .form-inputs {
    padding-bottom: 10px;
}
#login .form-inputs label {
    padding-right: 10px;
} */
</style>