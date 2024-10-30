<style lang="scss">

#app {
  padding: 2rem;
  font-weight: normal;
  width: 100%;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
.root {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
}
.root::before {
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 2px;
  background: #d7e4ed;
}

@media (min-width: 992px) {
  .bd-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    display: block !important;
    height: calc(100vh - 6rem);
    padding-left: 0.25rem;
    margin-left: -0.25rem;
    overflow-y: auto;
  }
}

@media (min-width: 992px) {
  .bd-layout {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 1fr 4fr;
    gap: 0.5rem;
  }
}

@media (max-width: 991.98px) {
  .bd-main {
    max-width: 760px;
    margin-inline: auto;
  }
}

@media (min-width: 768px) {
  .bd-main {
    display: grid;
    grid-template-areas: "intro" "content";
    grid-template-rows: auto auto 1fr;
    gap: inherit;
  }
}

@media (min-width: 992px) {
  .bd-main {
    grid-template-areas: "intro" "content";
    grid-template-rows: auto 1fr;
  }
}
</style>
<template>
  <div class="container">
    <!-- Button trigger modal -->
    <div class="rows">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal')">
          Launch demo modal
        </button>
        {{result}}

        <!-- Modal -->
        <ModalView
          @hiddenBsModal="isModal['modal'] = false"
          ref="modal"
          :actions="actionSettings"
          title="Example Modal"
          :show-title="true"
          class="modal-dialog-scrollable"
        >
          Modal view status - <b>{{ isModal['modal'] }}</b>
        </ModalView>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal0')">
          Launch demo modal
        </button>
        - scrollable

        <!-- Modal -->
        <ModalView
          @hiddenBsModal="isModal['modal0'] = false"
          ref="modal0"
          :actions="actionSettings"
          title="Example Modal"
          :show-title="true"
          class="modal-dialog-scrollable"
        >
          <template v-slot:header>
            <button type="button" class="btn btn-link" @click="hideModal('modal0')">
              custom action
            </button>
          </template>
          Modal view status - <b>{{ isModal['modal0'] }}</b>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
      tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
      quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
      fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
      consequat, leo eget bibendum sodales, augue velit cursus nunc,
      <hr />
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
      tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
      quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
      fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
      consequat, leo eget bibendum sodales, augue velit cursus nunc,
      <hr />
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
      tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
      quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
      fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
      consequat, leo eget bibendum sodales, augue velit cursus nunc,
      <hr />
        </ModalView>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal1')">
          Launch demo modal
        </button>
        - with static backdrop

        <!-- Modal -->
        <ModalView
          data-bs-backdrop="static"
          @hiddenBsModal="isModal['modal1'] = false"
          ref="modal1"
          @showBsModal="test"
          @shownBsModal="test"
          :actions="actionSettings"
          title="Example Modal - with static backdrop"
          :show-title="true"
          class="modal-dialog-scrollable"
        >
          Modal view status - <b>{{ isModal['modal1'] }}</b>
        </ModalView>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal2')">
          Launch demo modal
        </button>
        - vertically centered

        <!-- Modal -->
        <ModalView

          @hiddenBsModal="isModal['modal2'] = false"
          @showBsModal="test"
          @shownBsModal="test"
          ref="modal2"
          :actions="actionSettings"
          title="Example Modal"
          :show-title="true"
          class=" modal-dialog-centered"
        >
          Modal view status - <b>{{ isModal['modal2'] }}</b>
        </ModalView>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal3')">
          Launch demo modal
        </button>
        - XL size

        <!-- Modal -->
        <ModalView

          @hiddenBsModal="isModal['modal3'] = false"
          @showBsModal="test"
          @shownBsModal="test"
          ref="modal3"
          :actions="actionSettings"
          title="Example Modal"
          :show-title="true"
          class=" modal-xl"
        >
          Modal view status - <b>{{ isModal['modal3'] }}</b>
        </ModalView>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="showModal('modal4')">
          Launch demo modal
        </button>
        -full screen

        <!-- Modal -->
        <ModalView

          @hiddenBsModal="isModal['modal4'] = false"
          @showBsModal="test"
          @shownBsModal="test"
          ref="modal4"
          :actions="actionSettings"
          title="Example Modal"
          :show-title="true"
          class=" modal-fullscreen"
        >
          Modal view status - <b>{{ isModal['modal4'] }}</b>
        </ModalView>
      </div>
    </div>
  </div>
</template>
<script>
import ModalView from "./ModalView.vue"
export default {
  data() {
    var self = this;
    return {
      isModal: {},
      result: '',
      actionSettings: [
        {
          title: "Cancel",
          class: "btn-secondary",
          click: function () {
            self.result='Cancel clicked';
          },
        },
        {
          title: "Do Danger",
          class: "btn-danger",
          click: function () {
            self.result='Danger clicked';
          },
        },
        {
          title: "Confirm",
          class: "btn-success",
          click: function () {
            self.result='Confirm clicked';
          },
        },
      ],
    };
  },
  components: {
    ModalView
  },
  watch:{
  },
  methods: {
    test: function(event){
      console.log('event', event);
    },
    hideModal: function(name) {
      if(this.$refs[name] && this.$refs[name].hide) {
        this.$refs[name].hide();
      }
    },
    showModal: function(name) {
      if(this.$refs[name] && this.$refs[name].show) {
        this.$refs[name].show();
      }
    }
  },
  mounted() {},
};
</script>
