import { openBlock as l, createElementBlock as a, Fragment as f, createElementVNode as c, normalizeClass as h, normalizeStyle as v, createCommentVNode as d, renderSlot as m, toDisplayString as k, renderList as y } from "vue";
const b = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [u, n] of s)
    o[u] = n;
  return o;
};
var r = [];
const p = {
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
}, B = ["aria-hidden", "aria-modal", "role"], S = { class: "modal-content" }, _ = {
  key: 0,
  class: "modal-header"
}, C = /* @__PURE__ */ c("i", { class: "fa-solid fa-chevron-left" }, null, -1), M = [
  C
], g = {
  key: 1,
  class: "modal-title"
}, T = { class: "modal-body" }, P = {
  key: 1,
  class: "modal-footer"
}, H = ["onClick", "disabled"];
function O(t, s, o, u, n, e) {
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
        c("div", S, [
          o.showTitle ? (l(), a("div", _, [
            n.previous ? (l(), a("button", {
              key: 0,
              type: "button",
              class: "btn btn-link text-reset btn-reset",
              "data-bs-dismiss": "modal",
              "aria-label": "Go back",
              onClick: s[0] || (s[0] = (...i) => e.showPrevious && e.showPrevious(...i))
            }, M)) : d("", !0),
            m(t.$slots, "header"),
            o.title ? (l(), a("h5", g, k(o.title), 1)) : d("", !0),
            o.btnClose ? d("", !0) : (l(), a("button", {
              key: 2,
              type: "button",
              class: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              onClick: s[1] || (s[1] = (...i) => e.hide && e.hide(...i))
            }))
          ])) : d("", !0),
          c("div", T, [
            m(t.$slots, "default")
          ]),
          o.actions ? (l(), a("div", P, [
            (l(!0), a(f, null, y(o.actions, (i, w) => (l(), a("button", {
              type: "button",
              class: h(["btn", i.class]),
              key: w,
              onClick: (V) => e.processClick(i.click),
              disabled: i.disabled
            }, k(i.title), 11, H))), 128))
          ])) : d("", !0)
        ])
      ], 2)
    ], 14, B),
    n.isBackdrop ? (l(), a("div", {
      key: 0,
      class: h(["modal-backdrop", e.backdropClasses]),
      onClick: s[3] || (s[3] = (...i) => e.clickHide && e.clickHide(...i))
    }, null, 2)) : d("", !0)
  ], 64);
}
const E = /* @__PURE__ */ b(p, [["render", O]]);
export {
  E as default
};
