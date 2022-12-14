<template>
  <div >
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center" style="margin-left: 40%;">
    <div class="card p-4">
      <div class=" image d-flex flex-column justify-content-center align-items-center"> <button
          class="btn btn-secondary"> <img :src=sessionData.linguist.avatarURL height="100" width="100" /></button>
        <span class="name mt-3">{{sessionData.linguist.firstName}}</span>
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
             <span class="idd1"> </span> 
             <span><i class="fa fa-copy"></i></span> </div>
        <div class="d-flex flex-row justify-content-center align-items-center mt-3"><span class="follow">Duration</span> <span class="number">{{sessionData.duration}} 
            </span> </div>
        <!-- <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Rate</button> </div> -->
        <p>{{sessionData.id}}</p>
        <div class="text mt-3"> <span>Start Reason: {{sessionData.session.startReason}}<br>
            <br> End Reason: {{sessionData.session.endReason}} </span> </div>
        
        <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i
              class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i
              class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
        <div class=" px-2 rounded mt-4 date "> <span class="">{{sessionData.session.createdAt}}</span> </div>
       
      </div>
    </div>
  </div>
</div>
</template>
  
<script>
import { FRAGMENT } from '@vue/compiler-core';

export default {
    name: "SessionDetail",
  props: ['pass_data'],
  
  data(){
    const sessionData ={}
    return{sessionData}
  },
  async created(){
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('sessionid')); // "MyParam"
    this.sessionData.id=this.$route.params.sessionid
    await this.details()
  },
  methods: {
          details() {
            let user = JSON.parse(localStorage.getItem('device-token'));
              this.axios.get(`${import.meta.env.VITE_BASE_URL}v1/sessions/${this.$route.params.sessionid}/status`,
                        {
                            headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + user
                            }
                        }
                        ).then((response)=>{
                                if (response.data) {
                                    this.sessionData=response.data
                                    console.log(response.data.session.endedAt, response.data.session.beganAt)
                                    var diff=(new Date(response.data.session.endedAt)-new Date(response.data.session.beganAt))/1000
                                    diff /= 60;
                                    if (this.sessionData.linguist.avatarURL=== undefined){
                                        console.log()
                                        this.sessionData.linguist.avatarURL="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                                        // console.log("this.sessionData.linguist.avatarURL>>>",this.sessionData.linguist.avatarURL)
                                    }
                                    this.sessionData.duration=Math.abs(Math.round(diff))
                                    // return response.data
                                    }
                            // } 
                            else {
                                console.log("Error");
                            }
                        })


          }}
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

/* body {
    background-color: #000
} */

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}
</style>