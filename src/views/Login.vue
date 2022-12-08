<template>
    <div id="login">
        <h1>Login</h1>
        <div class="form-inputs">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <h1> {{ input.username }} </h1>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import { FRAGMENT } from '@vue/compiler-core'

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
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    // This should actually be an api call not a check against this.$parent.mockAccount
                    this.axios.post(`${import.meta.env.VITE_BASE_URL}v1/auth/device`,{
                        clientPlatform: "solo_web", clientPlatformVersion: "2022-11-29-release-qa-integration-5",
                        deviceType: "web", locale :"en-US"}).then((response) => {
                        console.log(response.data.token)
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
                            console.log("--->",response.data.token)
                            if(response.data.token != "") {
                                if (response.data.token) {
                                    console.log(">>>>>>>>>>>>")
                                    localStorage.setItem('user-token', JSON.stringify(response.data));
                                    }
                                this.$router.replace({ name: "history" });
                            } else {
                                console.log("The username and / or password is incorrect");
                            }
                        })
                    })
                    
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style>
#login .form-inputs {
    padding-bottom: 10px;
}
#login .form-inputs label {
    padding-right: 10px;
}
</style>