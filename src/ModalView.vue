<style lang="scss" scoped></style>
<template>
  <div
    class="modal"
    :class="backdropClasses"
    style="display: block"
    @click="cancelEvent"
    ref="root"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header" v-if="title">
          <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeEvent"
          ></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer" v-if="actions">
          <button
            type="button"
            class="btn"
            v-for="(btn, index) of actions"
            :key="index"
            :class="btn.class"
            @click="processClick(btn.click)"
          >
            {{ btn.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal-backdrop"
    :class="backdropClasses"
    @click="cancelEvent"
  ></div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  emits: ["cancelModal"],
  props: ["title", "actions"],
  watch: {},
  computed: {
    backdropClasses: function () {
      var result = ["fade"];
      if (this.isShow) {
        result.push("show");
      }
      return result.join(" ");
    },
  },
  methods: {
    processClick: function (callback) {
      this.isShow = false;
      setTimeout(function () {
        callback();
      }, 100);
    },
    closeEvent: function (e) {
      this.isShow = false;
      var self = this;
      setTimeout(function () {
        self.$emit("cancelModal");
      }, 100);
    },
    cancelEvent: function (e) {
      if (this.$refs["root"] && this.$refs["root"] == e.target) {
        this.isShow = false;
        var self = this;
        setTimeout(function () {
          self.$emit("cancelModal");
        }, 100);
      }
    },
  },
  mounted() {
    var self = this;
    setTimeout(function () {
      self.isShow = true;
    }, 100);
  },
};
</script>
