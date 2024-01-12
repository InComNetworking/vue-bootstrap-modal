import { openBlock as l, createElementBlock as a, Fragment as f, createElementVNode as c, normalizeClass as h, normalizeStyle as v, createCommentVNode as d, renderSlot as m, toDisplayString as k, renderList as y, mergeProps as p } from "vue";
const b = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [u, n] of s)
    o[u] = n;
  return o;
};
var r = [];
const B = {
  data() {
    return {
      isShow: !1,
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
        s.customStyle = "display: none;", s.$emit("hiddenBsModal"), s.isBackdrop = !1;
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
      this.hide(), r[this.previous].show(), this.previous = !1;
    },
    clickHide: function(t) {
      if (this.dataBsBackdrop && this.dataBsBackdrop == "static") {
        this.classes.push("modal-static");
        var s = this;
        setTimeout(function() {
          s.classes.pop();
        }, 300);
        return;
      }
      this.$refs.root && this.$refs.root == t.target && this.hide();
    },
    hide: function() {
      !this.isShow || (this.isShow = !1, this.$emit("hideBsModal"));
    },
    show: function() {
      if (!this.isShow) {
        if (this.showOnTop !== !0)
          for (var t in r)
            r[t].isShow === !0 && (this.previous = t, r[t].hide());
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
}, S = ["aria-hidden", "aria-modal", "role"], _ = { class: "modal-content" }, C = {
  key: 0,
  class: "modal-header"
}, M = /* @__PURE__ */ c("i", { class: "fa-solid fa-chevron-left" }, null, -1), g = [
  M
], T = {
  key: 1,
  class: "modal-title"
}, P = { class: "modal-body" }, H = {
  key: 1,
  class: "modal-footer"
}, O = ["onClick"];
function V(t, s, o, u, n, e) {
  return l(), a(f, null, [
    c("div", {
      class: h(["modal", e.backdropClasses]),
      "aria-hidden": !n.isShow,
      "aria-modal": n.isShow,
      role: e.getRole,
      style: v(n.customStyle),
      onClick: s[2] || (s[2] = (...i) => e.clickHide && e.clickHide(...i)),
      ref: "root"
    }, [
      c("div", {
        class: h(["modal-dialog", t.$attrs.class])
      }, [
        c("div", _, [
          o.showTitle ? (l(), a("div", C, [
            n.previous ? (l(), a("button", {
              key: 0,
              type: "button",
              class: "btn btn-link text-reset btn-reset",
              "data-bs-dismiss": "modal",
              "aria-label": "Go back",
              onClick: s[0] || (s[0] = (...i) => e.showPrevious && e.showPrevious(...i))
            }, g)) : d("", !0),
            m(t.$slots, "header"),
            o.title ? (l(), a("h5", T, k(o.title), 1)) : d("", !0),
            o.btnClose ? d("", !0) : (l(), a("button", {
              key: 2,
              type: "button",
              class: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              onClick: s[1] || (s[1] = (...i) => e.hide && e.hide(...i))
            }))
          ])) : d("", !0),
          c("div", P, [
            m(t.$slots, "default")
          ]),
          o.actions ? (l(), a("div", H, [
            (l(!0), a(f, null, y(o.actions, (i, w) => (l(), a("button", p({
              type: "button",
              class: ["btn", i.class],
              key: w,
              onClick: (z) => e.processClick(i.click)
            }, { disabled: i.disabled }), k(i.title), 17, O))), 128))
          ])) : d("", !0)
        ])
      ], 2)
    ], 14, S),
    n.isBackdrop ? (l(), a("div", {
      key: 0,
      class: h(["modal-backdrop", e.backdropClasses]),
      onClick: s[3] || (s[3] = (...i) => e.clickHide && e.clickHide(...i))
    }, null, 2)) : d("", !0)
  ], 64);
}
const N = /* @__PURE__ */ b(B, [["render", V]]);
export {
  N as default
};
