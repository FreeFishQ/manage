<template>
  <div style="height: 100%">
    <el-container style="height:100%; ">
    <el-aside :width="sidewidth+'px'" style="background-color: rgb(238, 241, 246);overflow-x: hidden;box-shadow: 2px 0 4px rgb(0 21 41)" >
     <Aside :isCollapse="isCollapse" :logoTextShow="logoTextShow"></Aside>
    </el-aside>

    <el-container>
      <el-header style="  border-bottom: 1px solid #ccc;" >
        <Header :collapseBtnClass="collapseBtnClass" :collapse="isCollapse" />

      </el-header>

      <el-main>
<!--        表示当前页面的子路由会在rouerview里面展示-->
<router-view></router-view>
      </el-main>

    </el-container>
  </el-container>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import {request} from "axios";
import request from "@/utils/request";
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Aside,
    HelloWorld
  },
  data() {

    return {

      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sidewidth:200,
      logoTextShow:true,

    }
  },


  methods:{
    collapse:function (){//点击收缩按钮触发
      this.isCollapse=!this.isCollapse;
      if(this.isCollapse){
        this.sidewidth=64
        this.collapseBtnClass='el-icon-s-unfold'
        this.logoTextShow=false
      }else{
        this.sidewidth=200
        this.collapseBtnClass='el-icon-s-fold'
        this.logoTextShow=true
      }
    },

  }
}
</script>
