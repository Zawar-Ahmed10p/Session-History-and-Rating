<template>
    <!-- <div class="dummy_page">
  Mobile responsive footer
</div> -->
<!-- FOOTER START -->
<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <!-- <div class="col">
    <h1>Products</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div> -->
  <div class="col social">
    <h1>Social</h1>
    <ul>
      <li><img src="data:image/jpeg;base64,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" width="50" style="width: 50px;"></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png" width="50" style="width: 50px;"></li>
      <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" width="50" style="width: 50px;"></li>
    </ul>
  </div>
<div class="clearfix"></div>
</div>
</div>
<!-- END OF FOOTER -->
</template>

<style>
/* REMOVE THIS, USE YOUR OWN  */
html,body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, Sans-serif;
  /* background-color: #070617; */
}
.dummy_page {
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  text-align: center;
  box-sizing: border-box;
  padding: 60px 0px;
}
/* STYLES SPECIFIC TO FOOTER  */
.footer {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #070617;
}
.footer .col {
  width: 190px;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 12px;
  line-height: 17px;
  padding: 20px 0px 5px 0px;
  color: rgba(255,255,255,0.2);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.250em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: .2s;
  -webkit-transition: .2s;
  -moz-transition: .2s;
}
.social ul li {
  display: inline-block;
  padding-right: 5px !important;
}

.footer .col ul li:hover {
  color: #ffffff;
  transition: .1s;
  -webkit-transition: .1s;
  -moz-transition: .1s;
}
.clearfix {
  clear: both;
}
@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1139px) {
  .contain .social {
    width: 1000px;
    display: block;
  }
  .social h1 {
    margin: 0px;
  }
}
@media only screen and (max-width: 950px) {
  .footer .col {
    width: 33%;
  }
  .footer .col h1 {
    font-size: 14px;
  }
  .footer .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 500px) {
    .footer .col {
      width: 50%;
    }
    .footer .col h1 {
      font-size: 14px;
    }
    .footer .col ul li {
      font-size: 13px;
    }
}
@media only screen and (max-width: 340px) {
  .footer .col {
    width: 100%;
  }
}
</style>