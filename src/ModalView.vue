<style lang="scss" scoped></style>
<template>
  <div
    class="modal"
    :class="backdropClasses"
    :aria-hidden="!isShow"
    :aria-modal="isShow"
    :role="getRole"
    :style="customStyle"
    @click="clickHide"
    ref="root"
  >
    <div class="modal-dialog" :class="$attrs.class">
      <div class="modal-content">
        <div class="modal-header" v-if="showTitle">
          <button
            v-if="previous"
            type="button"
            class="btn btn-link text-reset btn-reset"
            data-bs-dismiss="modal"
            aria-label="Go back"
            @click="showPrevious"
          ><i class="fa-solid fa-chevron-left"></i></button>
          <slot name="header"></slot>
          <h5 v-if="title" class="modal-title">
            {{ title }}
          </h5>
          <button
            v-if="!btnClose"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="hide"
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
            :disabled="btn.disabled == true"
          >
            {{ btn.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isBackdrop"
    class="modal-backdrop"
    :class="backdropClasses"
    @click="clickHide"
  ></div>
</template>
<script>
var modalWindows = [];
export default {
  data() {
    return {
      isShow: false,
      noEvent: false,
      customStyle: 'display: none',
      myPosition: 0,
      isBackdrop: false,
      classes: ['fade'],
      previous: false,
    };
  },
  emits: [
    "hideBsModal",
    "hiddenBsModal",
    "showBsModal",
    "shownBsModal",
  ],
  props: ["title", "actions","showTitle", "btnClose",  "dataBsBackdrop", "showOnMount", "showOnTop"],
  watch: {
    isShow: function (newValue) {
      var self = this;
      if (newValue) {
        this.$emit("shownBsModal");
        this.customStyle = "display: block";
        this.isBackdrop = true;
        setTimeout(function () {
          self.classes.push('show')
        }, 100);
        return;
      }
      
      this.classes.pop();
      setTimeout(function () {
        self.customStyle = "display: none;";
        if(self.noEvent) {
          return;
        }
        self.$emit("hiddenBsModal");
        self.isBackdrop = false;
      }, 300);
    },
  },
  computed: {
    getRole: function () {
      if (this.isShow) {
        return "dialog";
      }
      return;
    },
    backdropClasses: function () {
      return this.classes.join(" ");
    },
  },
  methods: {
    showPrevious: function() {
      this.hide()
      modalWindows[this.previous].show();
      this.previous = false;
    },
    clickHide: function (e) {
      if(this.dataBsBackdrop && this.dataBsBackdrop == "static") {
        this.classes.push("modal-static")
        var self = this;
        setTimeout(function () {
          self.classes.pop()
        }, 300);
        return;
      }
      if (this.$refs["root"] && this.$refs["root"] == e.target) {
        this.hide(false);
      }
    },
    hide: function (noEvent) {
      this.noEvent = noEvent

      if(!this.isShow) {
        return
      }
      this.isShow = false;
      if(this.noEvent) {
        return;
      }
      this.$emit("hideBsModal");
    },
    show: function () {
      if(this.isShow) {
        return;
      }
      // Hide any other open Modal
      if(this.showOnTop !== true) {
        for(var i in modalWindows) {
          if(modalWindows[i].isShow === true) {
            this.previous = i; 
            modalWindows[i].hide(true);
          }
        }
      }
      var self = this;
      setTimeout(function () {
        self.isShow = true;
        self.$emit("showBsModal");
      }, 100);
    },
    processClick: function(callback) {
      
      if(callback) {
        var res = callback(this);
        if(res !== true) {
          this.hide(); 
        }
      } else {
        this.hide();
      }
    }
  },
  unmounted: function() {
    modalWindows.splice(this.myPosition, 1);
  },
  mounted: function(){
    this.myPosition = modalWindows.push(this) - 1;
    if(this["showOnMount"]) {
      this.show();
    }
  }
};
</script>
