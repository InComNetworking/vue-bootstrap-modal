import { openBlock as l, createElementBlock as n, Fragment as f, createElementVNode as c, normalizeClass as h, normalizeStyle as w, createCommentVNode as d, renderSlot as m, toDisplayString as k, renderList as p } from "vue";
const y = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [u, a] of s)
    o[u] = a;
  return o;
};
var r = [];
const b = {
  data() {
    return {
      isShow: !1,
      noEvent: !1,
      customStyle: "display: none",
      myPosition: 0,
      isBackdrop: !1,
      classes: ["fade"],
      previous: !1
    };
  },
  emits: [
    "hideBsModal",
    "hiddenBsModal",
    "showBsModal",
    "shownBsModal"
  ],
  props: ["title", "actions", "showTitle", "btnClose", "dataBsBackdrop", "showOnMount", "showOnTop"],
  watch: {
    isShow: function(t) {
      var s = this;
      if (t) {
        this.$emit("shownBsModal"), this.customStyle = "display: block", this.isBackdrop = !0, setTimeout(function() {
          s.classes.push("show");
        }, 100);
        return;
      }
      this.classes.pop(), setTimeout(function() {
        s.customStyle = "display: none;", !s.noEvent && (s.$emit("hiddenBsModal"), s.isBackdrop = !1);
      }, 300);
    }
  },
  computed: {
    getRole: function() {
      if (this.isShow)
        return "dialog";
    },
    backdropClasses: function() {
      return this.classes.join(" ");
    }
  },
  methods: {
    showPrevious: function() {
      this.hide(), r[this.previous] && r[this.previous].show(), this.previous = !1;
    },
    clickHide: function(t) {
      if (this.$refs.root && this.$refs.root == t.target) {
        if (this.dataBsBackdrop && this.dataBsBackdrop == "static") {
          this.classes.push("modal-static");
          var s = this;
          setTimeout(function() {
            s.classes.pop();
          }, 300);
          return;
        }
        this.hide(!1), this.previous && this.showPrevious();
      }
    },
    clickClose: function() {
      this.clickHide({ target: this.$refs.root });
    },
    hide: function(t) {
      this.noEvent = t, this.isShow && (this.isShow = !1, !this.noEvent && this.$emit("hideBsModal"));
    },
    show: function() {
      if (!this.isShow) {
        if (this.showOnTop !== !0)
          for (var t in r)
            r[t].isShow === !0 && (this.previous = t, r[t].hide(!0));
        var s = this;
        setTimeout(function() {
          s.isShow = !0, s.$emit("showBsModal");
        }, 100);
      }
    },
    processClick: function(t) {
      if (t) {
        var s = t(this);
        s !== !0 && this.hide();
      } else
        this.hide();
    }
  },
  unmounted: function() {
    r.splice(this.myPosition, 1);
  },
  mounted: function() {
    this.myPosition = r.push(this) - 1, this.showOnMount && this.show();
  }
}, B = ["aria-hidden", "aria-modal", "role"], C = { class: "modal-content" }, S = {
  key: 0,
  class: "modal-header"
}, _ = /* @__PURE__ */ c("i", { class: "fa-solid fa-chevron-left" }, null, -1), M = [
  _
], g = {
  key: 1,
  class: "modal-title"
}, T = { class: "modal-body" }, P = {
  key: 1,
  class: "modal-footer"
}, E = ["onClick", "disabled"];
function H(t, s, o, u, a, e) {
  return l(), n(f, null, [
    c("div", {
      class: h(["modal", e.backdropClasses]),
      "aria-hidden": !a.isShow,
      "aria-modal": a.isShow,
      role: e.getRole,
      style: w(a.customStyle),
      onClick: s[2] || (s[2] = (...i) => e.clickHide && e.clickHide(...i)),
      ref: "root"
    }, [
      c("div", {
        class: h(["modal-dialog", t.$attrs.class])
      }, [
        c("div", C, [
          o.showTitle ? (l(), n("div", S, [
            a.previous ? (l(), n("button", {
              key: 0,
              type: "button",
              class: "btn btn-link text-reset btn-reset",
              "data-bs-dismiss": "modal",
              "aria-label": "Go back",
              onClick: s[0] || (s[0] = (...i) => e.showPrevious && e.showPrevious(...i))
            }, M)) : d("", !0),
            m(t.$slots, "header"),
            o.title ? (l(), n("h5", g, k(o.title), 1)) : d("", !0),
            o.btnClose ? d("", !0) : (l(), n("button", {
              key: 2,
              type: "button",
              class: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              onClick: s[1] || (s[1] = (...i) => e.clickClose && e.clickClose(...i))
            }))
          ])) : d("", !0),
          c("div", T, [
            m(t.$slots, "default")
          ]),
          o.actions ? (l(), n("div", P, [
            (l(!0), n(f, null, p(o.actions, (i, v) => (l(), n("button", {
              type: "button",
              class: h(["btn", i.class]),
              key: v,
              onClick: (O) => e.processClick(i.click),
              disabled: i.disabled == !0
            }, k(i.title), 11, E))), 128))
          ])) : d("", !0)
        ])
      ], 2)
    ], 14, B),
    a.isBackdrop ? (l(), n("div", {
      key: 0,
      class: h(["modal-backdrop", e.backdropClasses]),
      onClick: s[3] || (s[3] = (...i) => e.clickHide && e.clickHide(...i))
    }, null, 2)) : d("", !0)
  ], 64);
}
const z = /* @__PURE__ */ y(b, [["render", H]]);
export {
  z as default
};
