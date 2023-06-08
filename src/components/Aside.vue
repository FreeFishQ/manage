<template>
  <el-menu :default-openeds="['1', '3']" style="height: 100% ; overflow-x: hidden;"
           background-color="rgb(48,65,86)" text-color="#fff"
           active-text-color="#ffd04b"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
           @select="handleSelect"
  >
    <div style="height: 60px;line-height: 60px;text-align: center;" >
      <img src="../assets/logo.png" alt="" style="width: 20px ;position: relative;top: 5px;margin-right: 5px">

      <b style="color: #fff" v-show="logoTextShow">后台管理系统</b>
    </div>
    <el-menu-item index="/manage/home" >
      <template slot="title"><i class="el-icon-house"></i>
        <span>主页</span>
<!--        <router-link to="/"></router-link>-->
      </template>

    </el-menu-item>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/manage/user" >
        <i class="el-icon-s-custom"></i>
          <span>用户管理</span>
<!--<router-link to="/user">用户管理</router-link>-->
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props:{
    isCollapse:Boolean,
    logoTextShow:Boolean
  },
  methods:{
    handleSelect(index){
    //   console.log(index)
    //   console.log(this.$router.options.routes)
    }
  }
}
</script>

<style scoped>

</style>