# vue-bootstrap-modal
Vue 3 bootstrap 5.1 modal component

# Usage Example:

:show-title - true/false - show modal header

:title - header title

:show-on-mount - true/false - show modal on component mount

:actions - array of buttons:
```
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
```

events:
```
@hideBsModal - received hide()
@hiddenBsModal - modal hidden
@showBsModal - received show
@shownBsModal - modal shown
```

methods:
```
$refs['modal'].show() - show modal
$refs['modal'].hide() - hide modal
```
where $refs['modal'] is related to `ref="modal"` on <ModalView /> element



Regular scrollable:

```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  {{result}}

  <!-- Modal -->
  <ModalView
    @hiddenBsModal="isModal = false"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal"
    :show-title="true"
    class="modal-dialog-scrollable"
  >
    Modal view status - <b>{{ isModal }}</b>
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
  </ModalView>
```

With static backdrop:

see: `data-bs-backdrop="static"`

```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  - with static backdrop

  <!-- Modal -->
  <ModalView
    data-bs-backdrop="static"
    @hiddenBsModal="isModal = false"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal - with static backdrop"
    :show-title="true"
    class="modal-dialog-scrollable"
  >
    Modal view status - <b>{{ isModal }}</b>
  </ModalView>
```


With custom header:

see: `template v-slot:header`

```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  - with static backdrop

  <!-- Modal -->
  <ModalView
    data-bs-backdrop="static"
    @hiddenBsModal="isModal = false"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal - with static backdrop"
    :show-title="true"
    class="modal-dialog-scrollable"
  >
    Modal view status - <b>{{ isModal }}</b>
    <template v-slot:header>
      <button type="button" class="btn btn-link" @click="isModal = false">
        custom action
      </button>
    </template>
  </ModalView>
```

Dialog screen centered:
see: `class=" modal-dialog-centered"`

```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  - vertically centered

  <!-- Modal -->
  <ModalView

    @hiddenBsModal="isModal = false"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal"
    :show-title="true"
    class=" modal-dialog-centered"
  >
    Modal view status - <b>{{ isModal }}</b>
  </ModalView>
```
Extra large dialog:
see: `class=" modal-xl"`

```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  - XL size

  <!-- Modal -->
  <ModalView
    @hiddenBsModal="isModal = false"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal"
    :show-title="true"
    class=" modal-xl"
  >
    Modal view status - <b>{{ isModal }}</b>
  </ModalView>
```

Full screeb dialog:
see: `class=" modal-fullscreen"`
```
  <button type="button" class="btn btn-primary" @click="isModal = true; $refs['modal'].show();">
    Launch demo modal
  </button>
  -full screen

  <!-- Modal -->
  <ModalView

    @hiddenBsModal="isModal = false"
    @showBsModal="test"
    @shownBsModal="test"
    ref="modal"
    :actions="actionSettings"
    title="Example Modal"
    :show-title="true"
    class=" modal-fullscreen"
  >
    Modal view status - <b>{{ isModal }}</b>
  </ModalView>
``````