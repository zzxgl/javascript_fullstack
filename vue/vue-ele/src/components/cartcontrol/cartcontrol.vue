<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show = "food.count>0" @click.stop.prevent="decreaseCart">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script>
// this 指向Vue的实例
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart (event) {
      if (!this.food.count) {
        //   修改或者增加数据源里面的数据 给每个菜品里面增加一个count字段
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      // console.log(event)
      this.$emit('add', event.target) // 发散器 往外抛出add方法和一个DOM结构 event事件参数（每个事件都有）
    },
    decreaseCart () {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    opacity 1
    transform translate3d(0, 0, 0)
    .inner
      display inline-block
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
      transition all .4s linear
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity 0
      transform translate3d(24px, 0, 0)
      .inner
        transform rotate(180deg)
  .cart-count
    display inline-block
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
    vertical-align top
  .cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
</style>
