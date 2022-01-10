<template>
  <header class="header-nav">
    <div class="header-nav-left">
      <img src="../assets/images/GXChainConvert.png" class="logo" />
    </div>
    <div class="header-nav-right">
      <slot name="navRight"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.header-nav {
  position: relative;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #282828;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px #f0f1f2;
  &-left {
    flex: 1;
    padding-left: 32px;
    color: #53d4b7;
    .logo {
      height: 1.6rem;
      vertical-align: text-bottom;
    }
  }
  &-right {
    flex: 1;
    text-align: right;
    padding-right: 32px;
  }
}
@media screen and (min-width:320px) and (max-width:480px){
  .header-nav {
    line-height: inherit;
    .logo {
      height: 1rem;
    }
    &-right {
      flex: 1;
      text-align: left;
      padding-right: 20px;
      
    }
    &-left {
      padding-left: 20px
    }
  }
  .container .icon-header{
    height: 20px;
  }
}

</style>
