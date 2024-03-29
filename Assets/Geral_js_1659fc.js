/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.1",
    m = function (a, b) {
      return new m.fn.init(a, b);
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function (a, b) {
      return b.toUpperCase();
    };
  (m.fn = m.prototype =
    {
      jquery: l,
      constructor: m,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = m.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return m.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          m.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || m.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (m.isPlainObject(c) || (b = m.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && m.isArray(a) ? a : []))
                        : (f = a && m.isPlainObject(a) ? a : {}),
                      (g[d] = m.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    m.extend({
      expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === m.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === m.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !m.isArray(a) && a - parseFloat(a) >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (k.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          m.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = r(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (r(Object(a))
              ? m.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          m.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || m.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: k,
    }),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function r(a) {
    var b = a.length,
      c = m.type(a);
    return "function" === c || m.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var s = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + -new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = gb(),
      z = gb(),
      A = gb(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = "undefined",
      D = 1 << 31,
      E = {}.hasOwnProperty,
      F = [],
      G = F.pop,
      H = F.push,
      I = F.push,
      J = F.slice,
      K =
        F.indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1;
        },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      O = N.replace("w", "w#"),
      P =
        "\\[" +
        M +
        "*(" +
        N +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        O +
        "))|)" +
        M +
        "*\\]",
      Q =
        ":(" +
        N +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      S = new RegExp("^" + M + "*," + M + "*"),
      T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      V = new RegExp(Q),
      W = new RegExp("^" + O + "$"),
      X = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + Q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ab = /[+~]/,
      bb = /'|\\/g,
      cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      db = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      };
    try {
      I.apply((F = J.call(v.childNodes)), v.childNodes),
        F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {
        apply: F.length
          ? function (a, b) {
              H.apply(a, J.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        !a || "string" != typeof a)
      )
        return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];
      if (p && !e) {
        if ((f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
            if (
              (j = f[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return I.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 9 === k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(bb, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + qb(o[l]);
            (w = (ab.test(a) && ob(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return I.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function gb() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function hb(a) {
      return (a[u] = !0), a;
    }
    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function jb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function kb(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function nb(a) {
      return hb(function (b) {
        return (
          (b = +b),
          hb(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }
    (c = fb.support = {}),
      (f = fb.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fb.setDocument =
        function (a) {
          var b,
            e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
          return e !== n && 9 === e.nodeType && e.documentElement
            ? ((n = e),
              (o = e.documentElement),
              (p = !f(e)),
              g &&
                g !== g.top &&
                (g.addEventListener
                  ? g.addEventListener(
                      "unload",
                      function () {
                        m();
                      },
                      !1
                    )
                  : g.attachEvent &&
                    g.attachEvent("onunload", function () {
                      m();
                    })),
              (c.attributes = ib(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ib(function (a) {
                return (
                  a.appendChild(e.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName =
                $.test(e.getElementsByClassName) &&
                ib(function (a) {
                  return (
                    (a.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (a.firstChild.className = "i"),
                    2 === a.getElementsByClassName("i").length
                  );
                })),
              (c.getById = ib(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !e.getElementsByName || !e.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if (typeof b.getElementById !== C && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(cb, db);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(cb, db);
                    return function (a) {
                      var c =
                        typeof a.getAttributeNode !== C &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return typeof b.getElementsByTagName !== C
                      ? b.getElementsByTagName(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return typeof b.getElementsByClassName !== C && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(e.querySelectorAll)) &&
                (ib(function (a) {
                  (a.innerHTML =
                    "<select msallowclip=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowclip^='']").length &&
                      q.push("[*^$]=" + M + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + M + "*(?:value|" + L + ")"),
                    a.querySelectorAll(":checked").length || q.push(":checked");
                }),
                ib(function (a) {
                  var b = e.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + M + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ib(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", Q);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === e || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === e || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? K.call(k, a) - K.call(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      f = a.parentNode,
                      g = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!f || !g)
                      return a === e
                        ? -1
                        : b === e
                        ? 1
                        : f
                        ? -1
                        : g
                        ? 1
                        : k
                        ? K.call(k, a) - K.call(k, b)
                        : 0;
                    if (f === g) return kb(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? kb(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              e)
            : n;
        }),
      (fb.matches = function (a, b) {
        return fb(a, null, null, b);
      }),
      (fb.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fb(b, n, null, [a]).length > 0;
      }),
      (fb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fb.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fb.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fb.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fb.selectors =
        {
          cacheLength: 50,
          createPseudo: hb,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(cb, db)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fb.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fb.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(cb, db).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        (typeof a.getAttribute !== C &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fb.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fb.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? hb(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--)
                          (d = K.call(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: hb(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? hb(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: hb(function (a) {
              return function (b) {
                return fb(a, b).length > 0;
              };
            }),
            contains: hb(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              };
            }),
            lang: hb(function (a) {
              return (
                W.test(a || "") || fb.error("unsupported lang: " + a),
                (a = a.replace(cb, db).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: nb(function () {
              return [0];
            }),
            last: nb(function (a, b) {
              return [b - 1];
            }),
            eq: nb(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: nb(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: nb(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: nb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: nb(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = lb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b);
    function pb() {}
    (pb.prototype = d.filters = d.pseudos),
      (d.setFilters = new pb()),
      (g = fb.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        });
    function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function rb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sb(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
      return c;
    }
    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function vb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = vb(d)),
        e && !e[u] && (e = vb(e, f)),
        hb(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || tb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ub(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ub(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? K.call(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ub(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : I.apply(g, r);
        })
      );
    }
    function wb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = rb(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = rb(
            function (a) {
              return K.call(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              );
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [rb(sb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return vb(
              i > 1 && sb(m),
              i > 1 &&
                qb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && wb(a.slice(i, e)),
              f > e && wb((a = a.slice(e))),
              f > e && qb(a)
            );
          }
          m.push(c);
        }
      return sb(m);
    }
    function xb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i));
              s = ub(s);
            }
            I.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? hb(f) : f;
    }
    return (
      (h = fb.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wb(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xb(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fb.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(cb, db),
                  (ab.test(j[0].type) && ob(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qb(j)), !a))
                  return I.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (ab.test(a) && ob(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ib(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ib(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        jb("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ib(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        jb("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ib(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        jb(L, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fb
    );
  })(a);
  (m.find = s),
    (m.expr = s.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.unique = s.uniqueSort),
    (m.text = s.getText),
    (m.isXMLDoc = s.isXML),
    (m.contains = s.contains);
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  (m.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? m.find.matchesSelector(d, a)
          ? [d]
          : []
        : m.find.matches(
            a,
            m.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            m(a).filter(function () {
              for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) m.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? m.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(w(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(w(this, a || [], !0));
      },
      is: function (a) {
        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1)
          .length;
      },
    });
  var x,
    y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (m.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || x).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof m ? b[0] : b),
            m.merge(
              this,
              m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)
            ),
            u.test(c[1]) && m.isPlainObject(b))
          )
            for (c in b)
              m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (((d = y.getElementById(c[2])), d && d.parentNode)) {
          if (d.id !== c[2]) return x.find(a);
          (this.length = 1), (this[0] = d);
        }
        return (this.context = y), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : m.isFunction(a)
        ? "undefined" != typeof x.ready
          ? x.ready(a)
          : a(m)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          m.makeArray(a, this));
    });
  (A.prototype = m.fn), (x = m(y));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  m.extend({
    dir: function (a, b, c) {
      var d = [],
        e = a[b];
      while (
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !m(e).is(c))
      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    m.fn.extend({
      has: function (a) {
        var b,
          c = m(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && m.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? m.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? m.inArray(this[0], m(a))
            : m.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  m.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return m.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return m.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return m.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return m.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return m.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return m.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return m.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return m.sibling(a.firstChild);
      },
      contents: function (a) {
        return m.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : m.merge([], a.childNodes);
      },
    },
    function (a, b) {
      m.fn[a] = function (c, d) {
        var e = m.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = m.filter(d, e)),
          this.length > 1 &&
            (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      m.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function f(b) {
              m.each(b, function (b, c) {
                var d = m.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              m.each(arguments, function (a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1)
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    m.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return m
                .Deferred(function (c) {
                  m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? m.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          m.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && m.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && m.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--m.readyWait : !m.isReady) {
          if (!y.body) return setTimeout(m.ready);
          (m.isReady = !0),
            (a !== !0 && --m.readyWait > 0) ||
              (H.resolveWith(y, [m]),
              m.fn.triggerHandler &&
                (m(y).triggerHandler("ready"), m(y).off("ready")));
        }
      },
    });
  function I() {
    y.addEventListener
      ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1))
      : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (y.addEventListener ||
      "load" === event.type ||
      "complete" === y.readyState) &&
      (I(), m.ready());
  }
  m.ready.promise = function (b) {
    if (!H)
      if (((H = m.Deferred()), "complete" === y.readyState))
        setTimeout(m.ready);
      else if (y.addEventListener)
        y.addEventListener("DOMContentLoaded", J, !1),
          a.addEventListener("load", J, !1);
      else {
        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement;
        } catch (d) {}
        c &&
          c.doScroll &&
          !(function e() {
            if (!m.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              I(), m.ready();
            }
          })();
      }
    return H.promise(b);
  };
  var K = "undefined",
    L;
  for (L in m(k)) break;
  (k.ownLast = "0" !== L),
    (k.inlineBlockNeedsLayout = !1),
    m(function () {
      var a, b, c, d;
      (c = y.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = y.createElement("div")),
          (d = y.createElement("div")),
          (d.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(d).appendChild(b),
          typeof b.style.zoom !== K &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(d));
    }),
    (function () {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          k.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (m.acceptData = function (a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    });
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : M.test(c)
              ? m.parseJSON(c)
              : c;
        } catch (e) {}
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
        g,
        h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || m.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: m.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = m.extend(j[k], b))
              : (j[k].data = m.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[m.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[m.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? m.cache : a,
        h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b)
            ? (b = b.concat(m.map(b, m.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = m.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? m.cleanData([a], !0)
            : k.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando]), !!a && !P(a)
      );
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    m.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = m.data(f)), 1 === f.nodeType && !m._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = m.camelCase(d.slice(5))), O(f, d, e[d])));
            m._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              m.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              m.data(this, a, b);
            })
          : f
          ? O(f, a, m.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          m.removeData(this, a);
        });
      },
    }),
    m.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = m._data(a, b)),
            c &&
              (!d || m.isArray(c)
                ? (d = m._data(a, b, m.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
            m.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          m._data(a, c) ||
          m._data(a, c, {
            empty: m.Callbacks("once memory").add(function () {
              m._removeData(a, b + "queue"), m._removeData(a, c);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? m.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          m.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = m._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function (a, b) {
      return (
        (a = b || a),
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      );
    },
    V = (m.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        m.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(m(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    W = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (
      ((b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (k.leadingWhitespace = 3 === b.firstChild.nodeType),
      (k.tbody = !b.getElementsByTagName("tbody").length),
      (k.htmlSerialize = !!b.getElementsByTagName("link").length),
      (k.html5Clone =
        "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML),
      (a.type = "checkbox"),
      (a.checked = !0),
      c.appendChild(a),
      (k.appendChecked = a.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      c.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (k.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          k.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == k.deleteExpando)
    ) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var b,
        c,
        d = y.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (k[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (k[b + "Bubbles"] = d.attributes[c].expando === !1));
      d = null;
    })();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;
  function ab() {
    return !0;
  }
  function bb() {
    return !1;
  }
  function cb() {
    try {
      return y.activeElement;
    } catch (a) {}
  }
  (m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = m.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return typeof m === K || (a && m.event.triggered === a.type)
                  ? void 0
                  : m.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(E) || [""]),
          (h = b.length);
        while (h--)
          (f = _.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = m.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = m.event.special[o] || {}),
              (l = m.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && m.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (n = g[o]) ||
                ((n = g[o] = []),
                (n.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
              (m.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = _.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = m.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (n = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = n.length);
            while (f--)
              (g = n[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (n.splice(f, 1),
                  g.selector && n.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !n.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                m.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        n,
        o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || y),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : m.makeArray(c, [b])),
          (k = m.event.special[p] || {}),
          e || !k.trigger || k.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (
            i = k.delegateType || p, $.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || y) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())
          (b.type = n > 1 ? i : k.bindType || p),
            (f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]),
            f &&
              f.apply &&
              m.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) &&
            m.acceptData(d) &&
            g &&
            d[p] &&
            !m.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (m.event.triggered = p);
          try {
            d[p]();
          } catch (r) {}
          (m.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (m._data(this, "events") || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = m.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (g = 0);
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              (c = (
                (m.event.special[e.origType] || {}).handle || e.handler
              ).apply(f.elem, i)),
              void 0 !== c &&
                (a.result = c) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? m(c, this).index(i) >= 0
                    : m.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new m.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || y),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || y),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== cb() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return m.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (m.removeEvent = y.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
        }),
    (m.Event = function (a, b) {
      return this instanceof m.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ab
                  : bb))
            : (this.type = a),
          b && m.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(a, b);
    }),
    (m.Event.prototype = {
      isDefaultPrevented: bb,
      isPropagationStopped: bb,
      isImmediatePropagationStopped: bb,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ab),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ab),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ab),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !m.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.submitBubbles ||
      (m.event.special.submit = {
        setup: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      m.nodeName(b, "input") || m.nodeName(b, "button")
                        ? b.form
                        : void 0;
                  c &&
                    !m._data(c, "submitBubbles") &&
                    (m.event.add(c, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    m._data(c, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.remove(this, "._submit");
        },
      }),
    k.changeBubbles ||
      (m.event.special.change = {
        setup: function () {
          return X.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (m.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                m.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    m.event.simulate("change", this, a, !0);
                })),
              !1)
            : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) &&
                  !m._data(b, "changeBubbles") &&
                  (m.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      m.event.simulate("change", this.parentNode, a, !0);
                  }),
                  m._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return m.event.remove(this, "._change"), !X.test(this.nodeName);
        },
      }),
    k.focusinBubbles ||
      m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e
              ? m._data(d, b, e)
              : (d.removeEventListener(a, c, !0), m._removeData(d, b));
          },
        };
      }),
    m.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = bb;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return m().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = m.guid++))),
          this.each(function () {
            m.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            m(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = bb),
          this.each(function () {
            m.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          m.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0;
      },
    });
  function db(a) {
    var b = eb.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  var eb =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fb = / jQuery\d+="(?:null|\d+)"/g,
    gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
    hb = /^\s+/,
    ib =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    jb = /<([\w:]+)/,
    kb = /<tbody/i,
    lb = /<|&#?\w+;/,
    mb = /<(?:script|style|link)/i,
    nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ob = /^$|\/(?:java|ecma)script/i,
    pb = /^true\/(.*)/,
    qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    rb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    sb = db(y),
    tb = sb.appendChild(y.createElement("div"));
  (rb.optgroup = rb.option),
    (rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead),
    (rb.th = rb.td);
  function ub(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== K
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== K
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    return void 0 === b || (b && m.nodeName(a, b)) ? m.merge([a], f) : f;
  }
  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wb(a, b) {
    return m.nodeName(a, "table") &&
      m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function xb(a) {
    return (a.type = (null !== m.find.attr(a, "type")) + "/" + a.type), a;
  }
  function yb(a) {
    var b = pb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }
  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
        d,
        e,
        f = m._data(a),
        g = m._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Bb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !k.noCloneEvent && b[m.expando])) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      "script" === c && b.text !== a.text
        ? ((xb(b).text = a.text), yb(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          k.html5Clone &&
            a.innerHTML &&
            !m.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && W.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = m.contains(a.ownerDocument, a);
      if (
        (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((tb.innerHTML = a.outerHTML), tb.removeChild((f = tb.firstChild))),
        !(
          (k.noCloneEvent && k.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          m.isXMLDoc(a)
        ))
      )
        for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Bb(e, d[g]);
      if (b)
        if (c)
          for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)
            Ab(e, d[g]);
        else Ab(a, f);
      return (
        (d = ub(f, "script")),
        d.length > 0 && zb(d, !i && ub(a, "script")),
        (d = h = e = null),
        f
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0;
        n > q;
        q++
      )
        if (((f = a[q]), f || 0 === f))
          if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
          else if (lb.test(f)) {
            (h = h || o.appendChild(b.createElement("div"))),
              (i = (jb.exec(f) || ["", ""])[1].toLowerCase()),
              (l = rb[i] || rb._default),
              (h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2]),
              (e = l[0]);
            while (e--) h = h.lastChild;
            if (
              (!k.leadingWhitespace &&
                hb.test(f) &&
                p.push(b.createTextNode(hb.exec(f)[0])),
              !k.tbody)
            ) {
              (f =
                "table" !== i || kb.test(f)
                  ? "<table>" !== l[1] || kb.test(f)
                    ? 0
                    : h
                  : h.firstChild),
                (e = f && f.childNodes.length);
              while (e--)
                m.nodeName((j = f.childNodes[e]), "tbody") &&
                  !j.childNodes.length &&
                  f.removeChild(j);
            }
            m.merge(p, h.childNodes), (h.textContent = "");
            while (h.firstChild) h.removeChild(h.firstChild);
            h = o.lastChild;
          } else p.push(b.createTextNode(f));
      h && o.removeChild(h),
        k.appendChecked || m.grep(ub(p, "input"), vb),
        (q = 0);
      while ((f = p[q++]))
        if (
          (!d || -1 === m.inArray(f, d)) &&
          ((g = m.contains(f.ownerDocument, f)),
          (h = ub(o.appendChild(f), "script")),
          g && zb(h),
          c)
        ) {
          e = 0;
          while ((f = h[e++])) ob.test(f.type || "") && c.push(f);
        }
      return (h = null), o;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = m.expando,
          j = m.cache,
          l = k.deleteExpando,
          n = m.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || m.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            l
              ? delete d[i]
              : typeof d.removeAttribute !== K
              ? d.removeAttribute(i)
              : (d[i] = null),
            c.push(f));
        }
    },
  }),
    m.fn.extend({
      text: function (a) {
        return V(
          this,
          function (a) {
            return void 0 === a
              ? m.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || y).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? m.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || m.cleanData(ub(c)),
            c.parentNode &&
              (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && m.cleanData(ub(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && m.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return m.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return V(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                mb.test(a) ||
                (!k.htmlSerialize && gb.test(a)) ||
                (!k.leadingWhitespace && hb.test(a)) ||
                rb[(jb.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(ib, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (m.cleanData(ub(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              m.cleanData(ub(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)))
          return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((i = m.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)
            (d = i),
              j !== o &&
                ((d = m.clone(d, !0, !0)), f && m.merge(g, ub(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                ob.test(d.type || "") &&
                  !m._data(d, "globalEval") &&
                  m.contains(h, d) &&
                  (d.src
                    ? m._evalUrl && m._evalUrl(d.src)
                    : m.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          qb,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        m.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              m(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Cb,
    Db = {};
  function Eb(b, c) {
    var d,
      e = m(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : m.css(e[0], "display");
    return e.detach(), f;
  }
  function Fb(a) {
    var b = y,
      c = Db[a];
    return (
      c ||
        ((c = Eb(a, b)),
        ("none" !== c && c) ||
          ((Cb = (
            Cb || m("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Cb[0].contentWindow || Cb[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Eb(a, b)),
          Cb.detach()),
        (Db[a] = c)),
      c
    );
  }
  !(function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return (
        (c = y.getElementsByTagName("body")[0]),
        c && c.style
          ? ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(y.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(d),
            a)
          : void 0
      );
    };
  })();
  var Gb = /^margin/,
    Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ib,
    Jb,
    Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ib = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
      }),
      (Jb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ib(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
            Hb.test(g) &&
              Gb.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : y.documentElement.currentStyle &&
      ((Ib = function (a) {
        return a.currentStyle;
      }),
      (Jb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ib(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Hb.test(g) &&
            !Kb.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Lb(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b, c, d, e, f, g, h;
    if (
      ((b = y.createElement("div")),
      (b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (d = b.getElementsByTagName("a")[0]),
      (c = d && d.style))
    ) {
      (c.cssText = "float:left;opacity:.5"),
        (k.opacity = "0.5" === c.opacity),
        (k.cssFloat = !!c.cssFloat),
        (b.style.backgroundClip = "content-box"),
        (b.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === b.style.backgroundClip),
        (k.boxSizing =
          "" === c.boxSizing ||
          "" === c.MozBoxSizing ||
          "" === c.WebkitBoxSizing),
        m.extend(k, {
          reliableHiddenOffsets: function () {
            return null == g && i(), g;
          },
          boxSizingReliable: function () {
            return null == f && i(), f;
          },
          pixelPosition: function () {
            return null == e && i(), e;
          },
          reliableMarginRight: function () {
            return null == h && i(), h;
          },
        });
      function i() {
        var b, c, d, i;
        (c = y.getElementsByTagName("body")[0]),
          c &&
            c.style &&
            ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            (b.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (e = f = !1),
            (h = !0),
            a.getComputedStyle &&
              ((e = "1%" !== (a.getComputedStyle(b, null) || {}).top),
              (f =
                "4px" ===
                (a.getComputedStyle(b, null) || { width: "4px" }).width),
              (i = b.appendChild(y.createElement("div"))),
              (i.style.cssText = b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (b.style.width = "1px"),
              (h = !parseFloat(
                (a.getComputedStyle(i, null) || {}).marginRight
              ))),
            (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (i = b.getElementsByTagName("td")),
            (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (g = 0 === i[0].offsetHeight),
            g &&
              ((i[0].style.display = ""),
              (i[1].style.display = "none"),
              (g = 0 === i[0].offsetHeight)),
            c.removeChild(d));
      }
    }
  })(),
    (m.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Mb = /alpha\([^)]*\)/i,
    Nb = /opacity\s*=\s*([^)]*)/,
    Ob = /^(none|table(?!-c[ea]).+)/,
    Pb = new RegExp("^(" + S + ")(.*)$", "i"),
    Qb = new RegExp("^([+-])=(" + S + ")", "i"),
    Rb = { position: "absolute", visibility: "hidden", display: "block" },
    Sb = { letterSpacing: "0", fontWeight: "400" },
    Tb = ["Webkit", "O", "Moz", "ms"];
  function Ub(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Tb.length;
    while (e--) if (((b = Tb[e] + c), b in a)) return b;
    return d;
  }
  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = m._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                U(d) &&
                (f[g] = m._data(d, "olddisplay", Fb(d.nodeName))))
            : ((e = U(d)),
              ((c && "none" !== c) || !e) &&
                m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Xb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += m.css(a, c + T[f], !0, e)),
        d
          ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e)))
          : ((g += m.css(a, "padding" + T[f], !0, e)),
            "padding" !== c &&
              (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g;
  }
  function Yb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ib(a),
      g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Jb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Hb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Jb(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: k.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = m.camelCase(b),
          i = a.style;
        if (
          ((b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h))),
          (g = m.cssHooks[b] || m.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Qb.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"),
            k.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = m.camelCase(b);
      return (
        (b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h))),
        (g = m.cssHooks[b] || m.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Jb(a, b, d)),
        "normal" === f && b in Sb && (f = Sb[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || m.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    m.each(["height", "width"], function (a, b) {
      m.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth
              ? m.swap(a, Rb, function () {
                  return Yb(a, b, d);
                })
              : Yb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ib(a);
          return Wb(
            a,
            c,
            d
              ? Xb(
                  a,
                  b,
                  d,
                  k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    k.opacity ||
      (m.cssHooks.opacity = {
        get: function (a, b) {
          return Nb.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === m.trim(f.replace(Mb, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
        },
      }),
    (m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
      return b
        ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"])
        : void 0;
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (m.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }),
    m.fn.extend({
      css: function (a, b) {
        return V(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ib(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Vb(this, !0);
      },
      hide: function () {
        return Vb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? m(this).show() : m(this).hide();
            });
      },
    });
  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }
  (m.Tween = Zb),
    (Zb.prototype = {
      constructor: Zb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (m.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Zb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Zb.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? m.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Zb.prototype.init.prototype = Zb.prototype),
    (Zb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = m.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          m.fx.step[a.prop]
            ? m.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
            ? m.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (m.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (m.fx = Zb.prototype.init),
    (m.fx.step = {});
  var $b,
    _b,
    ac = /^(?:toggle|show|hide)$/,
    bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cc = /queueHooks$/,
    dc = [ic],
    ec = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = bc.exec(b),
            f = (e && e[3]) || (m.cssNumber[a] ? "" : "px"),
            g =
              (m.cssNumber[a] || ("px" !== f && +d)) &&
              bc.exec(m.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), m.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function fc() {
    return (
      setTimeout(function () {
        $b = void 0;
      }),
      ($b = m.now())
    );
  }
  function gc(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = T[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function hc(a, b, c) {
    for (
      var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ic(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      l,
      n = this,
      o = {},
      p = a.style,
      q = a.nodeType && U(a),
      r = m._data(a, "fxshow");
    c.queue ||
      ((h = m._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      n.always(function () {
        n.always(function () {
          h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = m.css(a, "display")),
        (l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j),
        "inline" === l &&
          "none" === m.css(a, "float") &&
          (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        k.shrinkWrapBlocks() ||
          n.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ac.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || m.style(a, d);
      } else j = void 0;
    if (m.isEmptyObject(o))
      "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = m._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? m(a).show()
          : n.done(function () {
              m(a).hide();
            }),
        n.done(function () {
          var b;
          m._removeData(a, "fxshow");
          for (b in o) m.style(a, b, o[b]);
        });
      for (d in o)
        (g = hc(q ? r[d] : 0, d, n)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function jc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = m.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        m.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = m.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kc(a, b, c) {
    var d,
      e,
      f = 0,
      g = dc.length,
      h = m.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = $b || fc(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $b || fc(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (jc(k, j.opts.specialEasing); g > f; f++)
      if ((d = dc[f].call(j, a, k, j.opts))) return d;
    return (
      m.map(k, hc, j),
      m.isFunction(j.opts.start) && j.opts.start.call(a, j),
      m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (m.Animation = m.extend(kc, {
    tweener: function (a, b) {
      m.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (ec[c] = ec[c] || []), ec[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? dc.unshift(a) : dc.push(a);
    },
  })),
    (m.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? m.extend({}, a)
          : {
              complete: c || (!c && b) || (m.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !m.isFunction(b) && b),
            };
      return (
        (d.duration = m.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in m.fx.speeds
          ? m.fx.speeds[d.duration]
          : m.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue);
        }),
        d
      );
    }),
    m.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
            var b = kc(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = m.timers,
              g = m._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && m.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = m._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = m.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (a, b) {
      var c = m.fn[b];
      m.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gc(b, !0), a, d, e);
      };
    }),
    m.each(
      {
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        m.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var a,
        b = m.timers,
        c = 0;
      for ($b = m.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || m.fx.stop(), ($b = void 0);
    }),
    (m.fx.timer = function (a) {
      m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      _b || (_b = setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      clearInterval(_b), (_b = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (a, b) {
      return (
        (a = m.fx ? m.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a, b, c, d, e;
      (b = y.createElement("div")),
        b.setAttribute("className", "t"),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = y.createElement("select")),
        (e = c.appendChild(y.createElement("option"))),
        (a = b.getElementsByTagName("input")[0]),
        (d.style.cssText = "top:1px"),
        (k.getSetAttribute = "t" !== b.className),
        (k.style = /top/.test(d.getAttribute("style"))),
        (k.hrefNormalized = "/a" === d.getAttribute("href")),
        (k.checkOn = !!a.value),
        (k.optSelected = e.selected),
        (k.enctype = !!y.createElement("form").enctype),
        (c.disabled = !0),
        (k.optDisabled = !e.disabled),
        (a = y.createElement("input")),
        a.setAttribute("value", ""),
        (k.input = "" === a.getAttribute("value")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var lc = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = m.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, m(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : m.isArray(e) &&
                    (e = m.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  m.valHooks[this.type] ||
                  m.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
          );
      }
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = m.find.attr(a, "value");
            return null != b ? b : m.trim(m.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    m.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = m(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), m.inArray(m.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (a, b) {
          return m.isArray(b)
            ? (a.checked = m.inArray(m(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var mc,
    nc,
    oc = m.expr.attrHandle,
    pc = /^(?:checked|selected)$/i,
    qc = k.getSetAttribute,
    rc = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    },
  }),
    m.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === K
            ? m.prop(a, b, c)
            : ((1 === f && m.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = m.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void m.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = m.propFix[c] || c),
              m.expr.match.bool.test(c)
                ? (rc && qc) || !pc.test(c)
                  ? (a[d] = !1)
                  : (a[m.camelCase("default-" + c)] = a[d] = !1)
                : m.attr(a, c, ""),
              a.removeAttribute(qc ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (nc = {
      set: function (a, b, c) {
        return (
          b === !1
            ? m.removeAttr(a, c)
            : (rc && qc) || !pc.test(c)
            ? a.setAttribute((!qc && m.propFix[c]) || c, c)
            : (a[m.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = oc[b] || m.find.attr;
      oc[b] =
        (rc && qc) || !pc.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = oc[b]),
                  (oc[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (oc[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[m.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (rc && qc) ||
      (m.attrHooks.value = {
        set: function (a, b, c) {
          return m.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : mc && mc.set(a, b, c);
        },
      }),
    qc ||
      ((mc = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (oc.id =
        oc.name =
        oc.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (m.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: mc.set,
      }),
      (m.attrHooks.contenteditable = {
        set: function (a, b, c) {
          mc.set(a, "" === b ? !1 : b, c);
        },
      }),
      m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    k.style ||
      (m.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var sc = /^(?:input|select|textarea|button|object)$/i,
    tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = m.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    m.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !m.isXMLDoc(a)),
            f && ((b = m.propFix[b] || b), (e = m.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = m.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : sc.test(a.nodeName) || (tc.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    k.hrefNormalized ||
      m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    k.optSelected ||
      (m.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = m.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(uc, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? m.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            m.isFunction(a)
              ? function (c) {
                  m(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = m(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === K || "boolean" === c) &&
                      (this.className &&
                        m._data(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : m._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        m.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    m.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var vc = m.now(),
    wc = /\?/,
    xc =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = m.trim(b + "");
    return e &&
      !m.trim(
        e.replace(xc, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : m.error("Invalid JSON: " + b);
  }),
    (m.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          m.error("Invalid XML: " + b),
        c
      );
    });
  var yc,
    zc,
    Ac = /#.*$/,
    Bc = /([?&])_=[^&]*/,
    Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ec = /^(?:GET|HEAD)$/,
    Fc = /^\/\//,
    Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hc = {},
    Ic = {},
    Jc = "*/".concat("*");
  try {
    zc = location.href;
  } catch (Kc) {
    (zc = y.createElement("a")), (zc.href = ""), (zc = zc.href);
  }
  yc = Gc.exec(zc.toLowerCase()) || [];
  function Lc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Mc(a, b, c, d) {
    var e = {},
      f = a === Ic;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        m.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Nc(a, b) {
    var c,
      d,
      e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Oc(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Pc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: "GET",
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.ajaxSetup({}, b),
        l = k.context || k,
        n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
        o = m.Deferred(),
        p = m.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while ((b = Cc.exec(f))) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || zc) + "")
          .replace(Ac, "")
          .replace(Fc, yc[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = m
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((c = Gc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !c ||
            (c[1] === yc[1] &&
              c[2] === yc[2] &&
              (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                (yc[3] || ("http:" === yc[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = m.param(k.data, k.traditional)),
        Mc(Hc, k, b, v),
        2 === t)
      )
        return v;
      (h = k.global),
        h && 0 === m.active++ && m.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !Ec.test(k.type)),
        (e = k.url),
        k.hasContent ||
          (k.data &&
            ((e = k.url += (wc.test(e) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = Bc.test(e)
              ? e.replace(Bc, "$1_=" + vc++)
              : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
        k.ifModified &&
          (m.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
          m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
      if ((i = Mc(Ic, k, b, v))) {
        (v.readyState = 1),
          h && n.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (i = void 0),
          (f = d || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          c && (u = Oc(k, v, c)),
          (u = Pc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (m.lastModified[e] = w),
                (w = v.getResponseHeader("etag")),
                w && (m.etag[e] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          h &&
            (n.trigger("ajaxComplete", [v, k]),
            --m.active || m.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, "script");
    },
  }),
    m.each(["get", "post"], function (a, b) {
      m[b] = function (a, c, d, e) {
        return (
          m.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          m.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        m.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (m._evalUrl = function (a) {
      return m.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (a) {
        if (m.isFunction(a))
          return this.each(function (b) {
            m(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          m.isFunction(a)
            ? function (b) {
                m(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = m(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
          m(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (m.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!k.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || m.css(a, "display")))
      );
    }),
    (m.expr.filters.visible = function (a) {
      return !m.expr.filters.hidden(a);
    });
  var Qc = /%20/g,
    Rc = /\[\]$/,
    Sc = /\r?\n/g,
    Tc = /^(?:submit|button|image|reset|file)$/i,
    Uc = /^(?:input|select|textarea|keygen)/i;
  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Rc.test(a)
          ? d(a, e)
          : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== m.type(b)) d(a, b);
    else for (e in b) Vc(a + "[" + e + "]", b[e], c, d);
  }
  (m.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = m.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
      m.isArray(a) || (a.jquery && !m.isPlainObject(a)))
    )
      m.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Vc(c, a[c], b, e);
    return d.join("&").replace(Qc, "+");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = m.prop(this, "elements");
          return a ? m.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              Uc.test(this.nodeName) &&
              !Tc.test(a) &&
              (this.checked || !W.test(a))
            );
          })
          .map(function (a, b) {
            var c = m(this).val();
            return null == c
              ? null
              : m.isArray(c)
              ? m.map(c, function (a) {
                  return { name: b.name, value: a.replace(Sc, "\r\n") };
                })
              : { name: b.name, value: c.replace(Sc, "\r\n") };
          })
          .get();
      },
    }),
    (m.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Zc()) ||
              $c()
            );
          }
        : Zc);
  var Wc = 0,
    Xc = {},
    Yc = m.ajaxSettings.xhr();
  a.ActiveXObject &&
    m(a).on("unload", function () {
      for (var a in Xc) Xc[a](void 0, !0);
    }),
    (k.cors = !!Yc && "withCredentials" in Yc),
    (Yc = k.ajax = !!Yc),
    Yc &&
      m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Wc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Xc[g],
                      (b = void 0),
                      (f.onreadystatechange = m.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (k) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Xc[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      });
  function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  m.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (a) {
        return m.globalEval(a), a;
      },
    },
  }),
    m.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    m.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = y.head || m("head")[0] || y.documentElement;
        return {
          send: function (d, e) {
            (b = y.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || e(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var _c = [],
    ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = _c.pop() || m.expando + "_" + vc++;
      return (this[a] = !0), a;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (ad.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              ad.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            m.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(ad, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), _c.push(e)),
              g && m.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (m.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || y);
      var d = u.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = m.buildFragment([a], b, e)),
          e && e.length && m(e).remove(),
          m.merge([], d.childNodes));
    });
  var bd = m.fn.load;
  (m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = m.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      m.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        m
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    (m.expr.filters.animated = function (a) {
      return m.grep(m.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var cd = a.document.documentElement;
  function dd(a) {
    return m.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (m.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.css(a, "position"),
        l = m(a),
        n = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = m.css(a, "top")),
        (i = m.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        m.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (n.top = b.top - h.top + g),
        null != b.left && (n.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, n) : l.css(n);
    },
  }),
    m.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                m.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            m.contains(b, e)
              ? (typeof e.getBoundingClientRect !== K &&
                  (d = e.getBoundingClientRect()),
                (c = dd(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === m.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                m.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += m.css(a[0], "borderTopWidth", !0)),
                (c.left += m.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || cd;
          while (
            a &&
            !m.nodeName(a, "html") &&
            "static" === m.css(a, "position")
          )
            a = a.offsetParent;
          return a || cd;
        });
      },
    }),
    m.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
          return V(
            this,
            function (a, d, e) {
              var f = dd(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? m(f).scrollLeft() : e,
                        c ? e : m(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    m.each(["top", "left"], function (a, b) {
      m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
        return c
          ? ((c = Jb(a, b)), Hb.test(c) ? m(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (a, b) {
      m.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          m.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return V(
              this,
              function (b, c, d) {
                var e;
                return m.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? m.css(b, c, g)
                  : m.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (m.fn.size = function () {
      return this.length;
    }),
    (m.fn.andSelf = m.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var ed = a.jQuery,
    fd = a.$;
  return (
    (m.noConflict = function (b) {
      return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
    }),
    typeof b === K && (a.jQuery = a.$ = m),
    m
  );
});
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.2"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.2"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && "show" == b && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(this.options.trigger).filter(
          '[href="#' + b.id + '"], [data-target="#' + b.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.2"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), { trigger: this });
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.2"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.divider):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.options.backdrop && d.adjustBackdrop(),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$element
                    .find(".modal-dialog")
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a('<div class="modal-backdrop ' + e + '" />')
              .prependTo(this.$element)
              .on(
                "click.dismiss.bs.modal",
                a.proxy(function (a) {
                  a.target === a.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
      }),
      (c.prototype.adjustBackdrop = function () {
        this.$backdrop
          .css("height", 0)
          .css("height", this.$element[0].scrollHeight);
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        (this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "");
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || "destroy" != b) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        (this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport));
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                ? "bottom"
                : "right" == h && k.right + l > p.width
                ? "left"
                : "left" == h && k.left - l < p.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = this.tip(),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && this.$tip.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || "destroy" != b) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.2"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (c.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      var e = a.proxy(this.process, this);
      (this.$body = a("body")),
        (this.$scrollElement = a(a(c).is("body") ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on("scroll.bs.scrollspy", e),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.2"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = "offset",
          c = 0;
        a.isWindow(this.$scrollElement[0]) ||
          ((b = "position"), (c = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight());
        var d = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var d = a(this),
              e = d.data("target") || d.attr("href"),
              f = /^#./.test(e) && a(e);
            return (
              (f && f.length && f.is(":visible") && [[f[b]().top + c, e]]) ||
              null
            );
          })
          .sort(function (a, b) {
            return a[0] - b[0];
          })
          .each(function () {
            d.offsets.push(this[0]), d.targets.push(this[1]);
          });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (!e[a + 1] || b <= e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.2"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a("body").height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
(function () {
  "use strict";
  function setup($) {
    $.fn._fadeIn = $.fn.fadeIn;
    var noOp = $.noop || function () {};
    var msie = /MSIE/.test(navigator.userAgent);
    var ie6 =
      /MSIE 6.0/.test(navigator.userAgent) &&
      !/MSIE 8.0/.test(navigator.userAgent);
    var mode = document.documentMode || 0;
    var setExpr = $.isFunction(
      document.createElement("div").style.setExpression
    );
    $.blockUI = function (opts) {
      install(window, opts);
    };
    $.unblockUI = function (opts) {
      remove(window, opts);
    };
    $.growlUI = function (title, message, timeout, onClose) {
      var $m = $('<div class="growlUI"></div>');
      if (title) $m.append("<h1>" + title + "</h1>");
      if (message) $m.append("<h2>" + message + "</h2>");
      if (timeout === undefined) timeout = 3000;
      var callBlock = function (opts) {
        opts = opts || {};
        $.blockUI({
          message: $m,
          fadeIn: typeof opts.fadeIn !== "undefined" ? opts.fadeIn : 700,
          fadeOut: typeof opts.fadeOut !== "undefined" ? opts.fadeOut : 1000,
          timeout: typeof opts.timeout !== "undefined" ? opts.timeout : timeout,
          centerY: false,
          showOverlay: false,
          onUnblock: onClose,
          css: $.blockUI.defaults.growlCSS,
        });
      };
      callBlock();
      var nonmousedOpacity = $m.css("opacity");
      $m.mouseover(function () {
        callBlock({ fadeIn: 0, timeout: 30000 });
        var displayBlock = $(".blockMsg");
        displayBlock.stop();
        displayBlock.fadeTo(300, 1);
      }).mouseout(function () {
        $(".blockMsg").fadeOut(1000);
      });
    };
    $.fn.block = function (opts) {
      if (this[0] === window) {
        $.blockUI(opts);
        return this;
      }
      var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
      this.each(function () {
        var $el = $(this);
        if (fullOpts.ignoreIfBlocked && $el.data("blockUI.isBlocked")) return;
        $el.unblock({ fadeOut: 0 });
      });
      return this.each(function () {
        if ($.css(this, "position") == "static") {
          this.style.position = "relative";
          $(this).data("blockUI.static", true);
        }
        this.style.zoom = 1;
        install(this, opts);
      });
    };
    $.fn.unblock = function (opts) {
      if (this[0] === window) {
        $.unblockUI(opts);
        return this;
      }
      return this.each(function () {
        remove(this, opts);
      });
    };
    $.blockUI.version = 2.66;
    $.blockUI.defaults = {
      message: "<h1>Please wait...</h1>",
      title: null,
      draggable: true,
      theme: false,
      css: {
        padding: 0,
        margin: 0,
        width: "30%",
        top: "40%",
        left: "35%",
        textAlign: "center",
        color: "#000",
        border: "3px solid #aaa",
        backgroundColor: "#fff",
        cursor: "wait",
      },
      themedCSS: { width: "30%", top: "40%", left: "35%" },
      overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
      cursorReset: "default",
      growlCSS: {
        width: "350px",
        top: "10px",
        left: "",
        right: "10px",
        border: "none",
        padding: "5px",
        opacity: 0.6,
        cursor: "default",
        color: "#fff",
        backgroundColor: "#000",
        "-webkit-border-radius": "10px",
        "-moz-border-radius": "10px",
        "border-radius": "10px",
      },
      iframeSrc: /^https/i.test(window.location.href || "")
        ? "javascript:false"
        : "about:blank",
      forceIframe: false,
      baseZ: 5000,
      centerX: true,
      centerY: true,
      allowBodyStretch: true,
      bindEvents: true,
      constrainTabKey: true,
      fadeIn: 200,
      fadeOut: 400,
      timeout: 0,
      showOverlay: true,
      focusInput: true,
      focusableElements: ":input:enabled:visible",
      onBlock: null,
      onUnblock: null,
      onOverlayClick: null,
      quirksmodeOffsetHack: 4,
      blockMsgClass: "blockMsg",
      ignoreIfBlocked: false,
    };
    var pageBlock = null;
    var pageBlockEls = [];
    function install(el, opts) {
      var css, themedCSS;
      var full = el == window;
      var msg = opts && opts.message !== undefined ? opts.message : undefined;
      opts = $.extend({}, $.blockUI.defaults, opts || {});
      if (opts.ignoreIfBlocked && $(el).data("blockUI.isBlocked")) return;
      opts.overlayCSS = $.extend(
        {},
        $.blockUI.defaults.overlayCSS,
        opts.overlayCSS || {}
      );
      css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
      if (opts.onOverlayClick) opts.overlayCSS.cursor = "pointer";
      themedCSS = $.extend(
        {},
        $.blockUI.defaults.themedCSS,
        opts.themedCSS || {}
      );
      msg = msg === undefined ? opts.message : msg;
      if (full && pageBlock) remove(window, { fadeOut: 0 });
      if (msg && typeof msg != "string" && (msg.parentNode || msg.jquery)) {
        var node = msg.jquery ? msg[0] : msg;
        var data = {};
        $(el).data("blockUI.history", data);
        data.el = node;
        data.parent = node.parentNode;
        data.display = node.style.display;
        data.position = node.style.position;
        if (data.parent) data.parent.removeChild(node);
      }
      $(el).data("blockUI.onUnblock", opts.onUnblock);
      var z = opts.baseZ;
      var lyr1, lyr2, lyr3, s;
      if (msie || opts.forceIframe)
        lyr1 = $(
          '<iframe class="blockUI" style="z-index:' +
            z++ +
            ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' +
            opts.iframeSrc +
            '"></iframe>'
        );
      else lyr1 = $('<div class="blockUI" style="display:none"></div>');
      if (opts.theme)
        lyr2 = $(
          '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' +
            z++ +
            ';display:none"></div>'
        );
      else
        lyr2 = $(
          '<div class="blockUI blockOverlay" style="z-index:' +
            z++ +
            ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
        );
      if (opts.theme && full) {
        s =
          '<div class="blockUI ' +
          opts.blockMsgClass +
          ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' +
          (z + 10) +
          ';display:none;position:fixed">';
        if (opts.title) {
          s +=
            '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
            (opts.title || "�") +
            "</div>";
        }
        s += '<div class="ui-widget-content ui-dialog-content"></div>';
        s += "</div>";
      } else if (opts.theme) {
        s =
          '<div class="blockUI ' +
          opts.blockMsgClass +
          ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' +
          (z + 10) +
          ';display:none;position:absolute">';
        if (opts.title) {
          s +=
            '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
            (opts.title || "�") +
            "</div>";
        }
        s += '<div class="ui-widget-content ui-dialog-content"></div>';
        s += "</div>";
      } else if (full) {
        s =
          '<div class="blockUI ' +
          opts.blockMsgClass +
          ' blockPage" style="z-index:' +
          (z + 10) +
          ';display:none;position:fixed"></div>';
      } else {
        s =
          '<div class="blockUI ' +
          opts.blockMsgClass +
          ' blockElement" style="z-index:' +
          (z + 10) +
          ';display:none;position:absolute"></div>';
      }
      lyr3 = $(s);
      if (msg) {
        if (opts.theme) {
          lyr3.css(themedCSS);
          lyr3.addClass("ui-widget-content");
        } else lyr3.css(css);
      }
      if (!opts.theme) lyr2.css(opts.overlayCSS);
      lyr2.css("position", full ? "fixed" : "absolute");
      if (msie || opts.forceIframe) lyr1.css("opacity", 0.0);
      var layers = [lyr1, lyr2, lyr3],
        $par = full ? $("body") : $(el);
      $.each(layers, function () {
        this.appendTo($par);
      });
      if (opts.theme && opts.draggable && $.fn.draggable) {
        lyr3.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
      }
      var expr =
        setExpr &&
        (!$.support.boxModel || $("object,embed", full ? null : el).length > 0);
      if (ie6 || expr) {
        if (full && opts.allowBodyStretch && $.support.boxModel)
          $("html,body").css("height", "100%");
        if ((ie6 || !$.support.boxModel) && !full) {
          var t = sz(el, "borderTopWidth"),
            l = sz(el, "borderLeftWidth");
          var fixT = t ? "(0 - " + t + ")" : 0;
          var fixL = l ? "(0 - " + l + ")" : 0;
        }
        $.each(layers, function (i, o) {
          var s = o[0].style;
          s.position = "absolute";
          if (i < 2) {
            if (full)
              s.setExpression(
                "height",
                "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" +
                  opts.quirksmodeOffsetHack +
                  ') + "px"'
              );
            else
              s.setExpression("height", 'this.parentNode.offsetHeight + "px"');
            if (full)
              s.setExpression(
                "width",
                'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'
              );
            else s.setExpression("width", 'this.parentNode.offsetWidth + "px"');
            if (fixL) s.setExpression("left", fixL);
            if (fixT) s.setExpression("top", fixT);
          } else if (opts.centerY) {
            if (full)
              s.setExpression(
                "top",
                '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
              );
            s.marginTop = 0;
          } else if (!opts.centerY && full) {
            var top = opts.css && opts.css.top ? parseInt(opts.css.top, 10) : 0;
            var expression =
              "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " +
              top +
              ') + "px"';
            s.setExpression("top", expression);
          }
        });
      }
      if (msg) {
        if (opts.theme) lyr3.find(".ui-widget-content").append(msg);
        else lyr3.append(msg);
        if (msg.jquery || msg.nodeType) $(msg).show();
      }
      if ((msie || opts.forceIframe) && opts.showOverlay) lyr1.show();
      if (opts.fadeIn) {
        var cb = opts.onBlock ? opts.onBlock : noOp;
        var cb1 = opts.showOverlay && !msg ? cb : noOp;
        var cb2 = msg ? cb : noOp;
        if (opts.showOverlay) lyr2._fadeIn(opts.fadeIn, cb1);
        if (msg) lyr3._fadeIn(opts.fadeIn, cb2);
      } else {
        if (opts.showOverlay) lyr2.show();
        if (msg) lyr3.show();
        if (opts.onBlock) opts.onBlock();
      }
      bind(1, el, opts);
      if (full) {
        pageBlock = lyr3[0];
        pageBlockEls = $(opts.focusableElements, pageBlock);
        if (opts.focusInput) setTimeout(focus, 20);
      } else center(lyr3[0], opts.centerX, opts.centerY);
      if (opts.timeout) {
        var to = setTimeout(function () {
          if (full) $.unblockUI(opts);
          else $(el).unblock(opts);
        }, opts.timeout);
        $(el).data("blockUI.timeout", to);
      }
    }
    function remove(el, opts) {
      var count;
      var full = el == window;
      var $el = $(el);
      var data = $el.data("blockUI.history");
      var to = $el.data("blockUI.timeout");
      if (to) {
        clearTimeout(to);
        $el.removeData("blockUI.timeout");
      }
      opts = $.extend({}, $.blockUI.defaults, opts || {});
      bind(0, el, opts);
      if (opts.onUnblock === null) {
        opts.onUnblock = $el.data("blockUI.onUnblock");
        $el.removeData("blockUI.onUnblock");
      }
      var els;
      if (full)
        els = $("body").children().filter(".blockUI").add("body > .blockUI");
      else els = $el.find(">.blockUI");
      if (opts.cursorReset) {
        if (els.length > 1) els[1].style.cursor = opts.cursorReset;
        if (els.length > 2) els[2].style.cursor = opts.cursorReset;
      }
      if (full) pageBlock = pageBlockEls = null;
      if (opts.fadeOut) {
        count = els.length;
        els.stop().fadeOut(opts.fadeOut, function () {
          if (--count === 0) reset(els, data, opts, el);
        });
      } else reset(els, data, opts, el);
    }
    function reset(els, data, opts, el) {
      var $el = $(el);
      if ($el.data("blockUI.isBlocked")) return;
      els.each(function (i, o) {
        if (this.parentNode) this.parentNode.removeChild(this);
      });
      if (data && data.el) {
        data.el.style.display = data.display;
        data.el.style.position = data.position;
        if (data.parent) data.parent.appendChild(data.el);
        $el.removeData("blockUI.history");
      }
      if ($el.data("blockUI.static")) {
        $el.css("position", "static");
      }
      if (typeof opts.onUnblock == "function") opts.onUnblock(el, opts);
      var body = $(document.body),
        w = body.width(),
        cssW = body[0].style.width;
      body.width(w - 1).width(w);
      body[0].style.width = cssW;
    }
    function bind(b, el, opts) {
      var full = el == window,
        $el = $(el);
      if (
        !b &&
        ((full && !pageBlock) || (!full && !$el.data("blockUI.isBlocked")))
      )
        return;
      $el.data("blockUI.isBlocked", b);
      if (!full || !opts.bindEvents || (b && !opts.showOverlay)) return;
      var events =
        "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
      if (b) $(document).bind(events, opts, handler);
      else $(document).unbind(events, handler);
    }
    function handler(e) {
      if (e.type === "keydown" && e.keyCode && e.keyCode == 9) {
        if (pageBlock && e.data.constrainTabKey) {
          var els = pageBlockEls;
          var fwd = !e.shiftKey && e.target === els[els.length - 1];
          var back = e.shiftKey && e.target === els[0];
          if (fwd || back) {
            setTimeout(function () {
              focus(back);
            }, 10);
            return false;
          }
        }
      }
      var opts = e.data;
      var target = $(e.target);
      if (target.hasClass("blockOverlay") && opts.onOverlayClick)
        opts.onOverlayClick(e);
      if (target.parents("div." + opts.blockMsgClass).length > 0) return true;
      return target.parents().children().filter("div.blockUI").length === 0;
    }
    function focus(back) {
      if (!pageBlockEls) return;
      var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
      if (e) e.focus();
    }
    function center(el, x, y) {
      var p = el.parentNode,
        s = el.style;
      var l = (p.offsetWidth - el.offsetWidth) / 2 - sz(p, "borderLeftWidth");
      var t = (p.offsetHeight - el.offsetHeight) / 2 - sz(p, "borderTopWidth");
      if (x) s.left = l > 0 ? l + "px" : "0";
      if (y) s.top = t > 0 ? t + "px" : "0";
    }
    function sz(el, p) {
      return parseInt($.css(el, p), 10) || 0;
    }
  }
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define(["jquery"], setup);
  } else {
    setup(jQuery);
  }
})();
("use strict");
(function (factory, jQuery, Zepto) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery || Zepto);
  }
})(
  function ($) {
    var Mask = function (el, mask, options) {
      var p = {
        invalid: [],
        getCaret: function () {
          try {
            var sel,
              pos = 0,
              ctrl = el.get(0),
              dSel = document.selection,
              cSelStart = ctrl.selectionStart;
            if (dSel && navigator.appVersion.indexOf("MSIE 10") === -1) {
              sel = dSel.createRange();
              sel.moveStart("character", -p.val().length);
              pos = sel.text.length;
            } else if (cSelStart || cSelStart === "0") {
              pos = cSelStart;
            }
            return pos;
          } catch (e) {}
        },
        setCaret: function (pos) {
          try {
            if (el.is(":focus")) {
              var range,
                ctrl = el.get(0);
              if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);
              } else {
                range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
              }
            }
          } catch (e) {}
        },
        events: function () {
          el.on("keydown.mask", function (e) {
            el.data("mask-keycode", e.keyCode || e.which);
          })
            .on(
              $.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
              p.behaviour
            )
            .on("paste.mask drop.mask", function () {
              setTimeout(function () {
                el.keydown().keyup();
              }, 100);
            })
            .on("change.mask", function () {
              el.data("changed", true);
            })
            .on("blur.mask", function () {
              if (oldValue !== p.val() && !el.data("changed")) {
                el.trigger("change");
              }
              el.data("changed", false);
            })
            .on("blur.mask", function () {
              oldValue = p.val();
            })
            .on("focus.mask", function (e) {
              if (options.selectOnFocus === true) {
                $(e.target).select();
              }
            })
            .on("focusout.mask", function () {
              if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                p.val("");
              }
            });
        },
        getRegexMask: function () {
          var maskChunks = [],
            translation,
            pattern,
            optional,
            recursive,
            oRecursive,
            r;
          for (var i = 0; i < mask.length; i++) {
            translation = jMask.translation[mask.charAt(i)];
            if (translation) {
              pattern = translation.pattern
                .toString()
                .replace(/.{1}$|^.{1}/g, "");
              optional = translation.optional;
              recursive = translation.recursive;
              if (recursive) {
                maskChunks.push(mask.charAt(i));
                oRecursive = { digit: mask.charAt(i), pattern: pattern };
              } else {
                maskChunks.push(
                  !optional && !recursive ? pattern : pattern + "?"
                );
              }
            } else {
              maskChunks.push(
                mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
              );
            }
          }
          r = maskChunks.join("");
          if (oRecursive) {
            r = r
              .replace(
                new RegExp(
                  "(" + oRecursive.digit + "(.*" + oRecursive.digit + ")?)"
                ),
                "($1)?"
              )
              .replace(new RegExp(oRecursive.digit, "g"), oRecursive.pattern);
          }
          return new RegExp(r);
        },
        destroyEvents: function () {
          el.off(
            [
              "input",
              "keydown",
              "keyup",
              "paste",
              "drop",
              "blur",
              "focusout",
              "",
            ].join(".mask ")
          );
        },
        val: function (v) {
          var isInput = el.is("input"),
            method = isInput ? "val" : "text",
            r;
          if (arguments.length > 0) {
            if (el[method]() !== v) {
              el[method](v);
            }
            r = el;
          } else {
            r = el[method]();
          }
          return r;
        },
        getMCharsBeforeCount: function (index, onCleanVal) {
          for (
            var count = 0, i = 0, maskL = mask.length;
            i < maskL && i < index;
            i++
          ) {
            if (!jMask.translation[mask.charAt(i)]) {
              index = onCleanVal ? index + 1 : index;
              count++;
            }
          }
          return count;
        },
        caretPos: function (originalCaretPos, oldLength, newLength, maskDif) {
          var translation =
            jMask.translation[
              mask.charAt(Math.min(originalCaretPos - 1, mask.length - 1))
            ];
          return !translation
            ? p.caretPos(originalCaretPos + 1, oldLength, newLength, maskDif)
            : Math.min(
                originalCaretPos + newLength - oldLength - maskDif,
                newLength
              );
        },
        behaviour: function (e) {
          e = e || window.event;
          p.invalid = [];
          var keyCode = el.data("mask-keycode");
          if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
            var caretPos = p.getCaret(),
              currVal = p.val(),
              currValL = currVal.length,
              newVal = p.getMasked(),
              newValL = newVal.length,
              maskDif =
                p.getMCharsBeforeCount(newValL - 1) -
                p.getMCharsBeforeCount(currValL - 1),
              changeCaret = caretPos < currValL;
            p.val(newVal);
            if (changeCaret) {
              if (!(keyCode === 8 || keyCode === 46)) {
                caretPos = p.caretPos(caretPos, currValL, newValL, maskDif);
              }
              p.setCaret(caretPos);
            }
            return p.callbacks(e);
          }
        },
        getMasked: function (skipMaskChars, val) {
          var buf = [],
            value = val === undefined ? p.val() : val + "",
            m = 0,
            maskLen = mask.length,
            v = 0,
            valLen = value.length,
            offset = 1,
            addMethod = "push",
            resetPos = -1,
            lastMaskChar,
            check;
          if (options.reverse) {
            addMethod = "unshift";
            offset = -1;
            lastMaskChar = 0;
            m = maskLen - 1;
            v = valLen - 1;
            check = function () {
              return m > -1 && v > -1;
            };
          } else {
            lastMaskChar = maskLen - 1;
            check = function () {
              return m < maskLen && v < valLen;
            };
          }
          while (check()) {
            var maskDigit = mask.charAt(m),
              valDigit = value.charAt(v),
              translation = jMask.translation[maskDigit];
            if (translation) {
              if (valDigit.match(translation.pattern)) {
                buf[addMethod](valDigit);
                if (translation.recursive) {
                  if (resetPos === -1) {
                    resetPos = m;
                  } else if (m === lastMaskChar) {
                    m = resetPos - offset;
                  }
                  if (lastMaskChar === resetPos) {
                    m -= offset;
                  }
                }
                m += offset;
              } else if (translation.optional) {
                m += offset;
                v -= offset;
              } else if (translation.fallback) {
                buf[addMethod](translation.fallback);
                m += offset;
                v -= offset;
              } else {
                p.invalid.push({ p: v, v: valDigit, e: translation.pattern });
              }
              v += offset;
            } else {
              if (!skipMaskChars) {
                buf[addMethod](maskDigit);
              }
              if (valDigit === maskDigit) {
                v += offset;
              }
              m += offset;
            }
          }
          var lastMaskCharDigit = mask.charAt(lastMaskChar);
          if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
            buf.push(lastMaskCharDigit);
          }
          return buf.join("");
        },
        callbacks: function (e) {
          var val = p.val(),
            changed = val !== oldValue,
            defaultArgs = [val, e, el, options],
            callback = function (name, criteria, args) {
              if (typeof options[name] === "function" && criteria) {
                options[name].apply(this, args);
              }
            };
          callback("onChange", changed === true, defaultArgs);
          callback("onKeyPress", changed === true, defaultArgs);
          callback("onComplete", val.length === mask.length, defaultArgs);
          callback("onInvalid", p.invalid.length > 0, [
            val,
            e,
            el,
            p.invalid,
            options,
          ]);
        },
      };
      el = $(el);
      var jMask = this,
        oldValue = p.val(),
        regexMask;
      mask =
        typeof mask === "function"
          ? mask(p.val(), undefined, el, options)
          : mask;
      jMask.mask = mask;
      jMask.options = options;
      jMask.remove = function () {
        var caret = p.getCaret();
        p.destroyEvents();
        p.val(jMask.getCleanVal());
        p.setCaret(caret - p.getMCharsBeforeCount(caret));
        return el;
      };
      jMask.getCleanVal = function () {
        return p.getMasked(true);
      };
      jMask.getMaskedVal = function (val) {
        return p.getMasked(false, val);
      };
      jMask.init = function (onlyMask) {
        onlyMask = onlyMask || false;
        options = options || {};
        jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
        jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
        jMask.translation = $.extend(
          {},
          $.jMaskGlobals.translation,
          options.translation
        );
        jMask = $.extend(true, {}, jMask, options);
        regexMask = p.getRegexMask();
        if (onlyMask === false) {
          if (options.placeholder) {
            el.attr("placeholder", options.placeholder);
          }
          if (el.data("mask")) {
            el.attr("autocomplete", "off");
          }
          p.destroyEvents();
          p.events();
          var caret = p.getCaret();
          p.val(p.getMasked());
          p.setCaret(caret + p.getMCharsBeforeCount(caret, true));
        } else {
          p.events();
          p.val(p.getMasked());
        }
      };
      jMask.init(!el.is("input"));
    };
    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
          options = {},
          prefix = "data-mask-",
          mask = input.attr("data-mask");
        if (input.attr(prefix + "reverse")) {
          options.reverse = true;
        }
        if (input.attr(prefix + "clearifnotmatch")) {
          options.clearIfNotMatch = true;
        }
        if (input.attr(prefix + "selectonfocus") === "true") {
          options.selectOnFocus = true;
        }
        if (notSameMaskObject(input, mask, options)) {
          return input.data("mask", new Mask(this, mask, options));
        }
      },
      notSameMaskObject = function (field, mask, options) {
        options = options || {};
        var maskObject = $(field).data("mask"),
          stringify = JSON.stringify,
          value = $(field).val() || $(field).text();
        try {
          if (typeof mask === "function") {
            mask = mask(value);
          }
          return (
            typeof maskObject !== "object" ||
            stringify(maskObject.options) !== stringify(options) ||
            maskObject.mask !== mask
          );
        } catch (e) {}
      },
      eventSupported = function (eventName) {
        var el = document.createElement("div"),
          isSupported;
        eventName = "on" + eventName;
        isSupported = eventName in el;
        if (!isSupported) {
          el.setAttribute(eventName, "return;");
          isSupported = typeof el[eventName] === "function";
        }
        el = null;
        return isSupported;
      };
    $.fn.mask = function (mask, options) {
      options = options || {};
      var selector = this.selector,
        globals = $.jMaskGlobals,
        interval = globals.watchInterval,
        watchInputs = options.watchInputs || globals.watchInputs,
        maskFunction = function () {
          if (notSameMaskObject(this, mask, options)) {
            return $(this).data("mask", new Mask(this, mask, options));
          }
        };
      $(this).each(maskFunction);
      if (selector && selector !== "" && watchInputs) {
        clearInterval($.maskWatchers[selector]);
        $.maskWatchers[selector] = setInterval(function () {
          $(document).find(selector).each(maskFunction);
        }, interval);
      }
      return this;
    };
    $.fn.masked = function (val) {
      return this.data("mask").getMaskedVal(val);
    };
    $.fn.unmask = function () {
      clearInterval($.maskWatchers[this.selector]);
      delete $.maskWatchers[this.selector];
      return this.each(function () {
        var dataMask = $(this).data("mask");
        if (dataMask) {
          dataMask.remove().removeData("mask");
        }
      });
    };
    $.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };
    $.applyDataMask = function (selector) {
      selector = selector || $.jMaskGlobals.maskElements;
      var $selector = selector instanceof $ ? selector : $(selector);
      $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };
    var globals = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: true,
      watchInterval: 300,
      watchInputs: true,
      useInput: eventSupported("input"),
      watchDataMask: false,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: { pattern: /\d/ },
        9: { pattern: /\d/, optional: true },
        "#": { pattern: /\d/, recursive: true },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
      },
    };
    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);
    if (globals.dataMask) {
      $.applyDataMask();
    }
    setInterval(function () {
      if ($.jMaskGlobals.watchDataMask) {
        $.applyDataMask();
      }
    }, globals.watchInterval);
  },
  window.jQuery,
  window.Zepto
);
jQuery.fn.numeric = function (decimal, callback) {
  decimal = decimal || ".";
  callback = typeof callback == "function" ? callback : function () {};
  this.keypress(function (e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if (key == 13 && this.nodeName.toLowerCase() == "input") {
      return true;
    } else if (key == 13) {
      return false;
    }
    var allow = false;
    if ((e.ctrlKey && key == 97) || (e.ctrlKey && key == 65)) return true;
    if ((e.ctrlKey && key == 120) || (e.ctrlKey && key == 88)) return true;
    if ((e.ctrlKey && key == 99) || (e.ctrlKey && key == 67)) return true;
    if ((e.ctrlKey && key == 122) || (e.ctrlKey && key == 90)) return true;
    if (
      (e.ctrlKey && key == 118) ||
      (e.ctrlKey && key == 86) ||
      (e.shiftKey && key == 45)
    )
      return true;
    if (key < 48 || key > 57) {
      if (key == 45 && this.value.length == 0) return true;
      if (key == decimal.charCodeAt(0) && this.value.indexOf(decimal) != -1) {
        allow = false;
      }
      if (
        key != 8 &&
        key != 9 &&
        key != 13 &&
        key != 35 &&
        key != 36 &&
        key != 37 &&
        key != 39 &&
        key != 46
      ) {
        allow = false;
      } else {
        if (typeof e.charCode != "undefined") {
          if (e.keyCode == e.which && e.which != 0) {
            allow = true;
          } else if (e.keyCode != 0 && e.charCode == 0 && e.which == 0) {
            allow = true;
          }
        }
      }
      if (key == decimal.charCodeAt(0) && this.value.indexOf(decimal) == -1) {
        allow = true;
      }
    } else {
      allow = true;
    }
    return allow;
  }).blur(function () {
    var val = jQuery(this).val();
    if (val != "") {
      var re = new RegExp("^\\d+$|\\d*" + decimal + "\\d+");
      if (!re.exec(val)) {
        callback.apply(this);
      }
    }
  });
  return this;
};
!(function (e, t, n) {
  "use strict";
  !(function o(e, t, n) {
    function a(s, l) {
      if (!t[s]) {
        if (!e[s]) {
          var i = "function" == typeof require && require;
          if (!l && i) return i(s, !0);
          if (r) return r(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var c = (t[s] = { exports: {} });
        e[s][0].call(
          c.exports,
          function (t) {
            var n = e[s][1][t];
            return a(n ? n : t);
          },
          c,
          c.exports,
          o,
          e,
          t,
          n
        );
      }
      return t[s].exports;
    }
    for (
      var r = "function" == typeof require && require, s = 0;
      s < n.length;
      s++
    )
      a(n[s]);
    return a;
  })(
    {
      1: [
        function (o) {
          var a,
            r,
            s,
            l,
            i = function (e) {
              return e && e.__esModule ? e : { default: e };
            },
            u = o("./modules/handle-dom"),
            c = o("./modules/utils"),
            d = o("./modules/handle-swal-dom"),
            f = o("./modules/handle-click"),
            p = o("./modules/handle-key"),
            m = i(p),
            v = o("./modules/default-params"),
            y = i(v),
            h = o("./modules/set-params"),
            g = i(h);
          (s = l =
            function () {
              function o(e) {
                var t = s;
                return t[e] === n ? y["default"][e] : t[e];
              }
              var s = arguments[0];
              if (
                (u.addClass(t.body, "stop-scrolling"), d.resetInput(), s === n)
              )
                return c.logStr("SweetAlert expects at least 1 attribute!"), !1;
              var i = c.extend({}, y["default"]);
              switch (typeof s) {
                case "string":
                  (i.title = s),
                    (i.text = arguments[1] || ""),
                    (i.type = arguments[2] || "");
                  break;
                case "object":
                  if (s.title === n)
                    return c.logStr('Missing "title" argument!'), !1;
                  i.title = s.title;
                  for (var p in y["default"]) i[p] = o(p);
                  (i.confirmButtonText = i.showCancelButton
                    ? "Confirm"
                    : y["default"].confirmButtonText),
                    (i.confirmButtonText = o("confirmButtonText")),
                    (i.doneFunction = arguments[1] || null);
                  break;
                default:
                  return (
                    c.logStr(
                      'Unexpected type of argument! Expected "string" or "object", got ' +
                        typeof s
                    ),
                    !1
                  );
              }
              g["default"](i),
                d.fixVerticalPosition(),
                d.openModal(arguments[1]);
              for (
                var v = d.getModal(),
                  h = v.querySelectorAll("button"),
                  b = [
                    "onclick",
                    "onmouseover",
                    "onmouseout",
                    "onmousedown",
                    "onmouseup",
                    "onfocus",
                  ],
                  w = function (e) {
                    return f.handleButton(e, i, v);
                  },
                  C = 0;
                C < h.length;
                C++
              )
                for (var S = 0; S < b.length; S++) {
                  var x = b[S];
                  h[C][x] = w;
                }
              (d.getOverlay().onclick = w), (a = e.onkeydown);
              var k = function (e) {
                return m["default"](e, i, v);
              };
              (e.onkeydown = k),
                (e.onfocus = function () {
                  setTimeout(function () {
                    r !== n && (r.focus(), (r = n));
                  }, 0);
                }),
                l.enableButtons();
            }),
            (s.setDefaults = l.setDefaults =
              function (e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e)
                  throw new Error("userParams has to be a object");
                c.extend(y["default"], e);
              }),
            (s.close = l.close =
              function () {
                var o = d.getModal();
                u.fadeOut(d.getOverlay(), 5),
                  u.fadeOut(o, 5),
                  u.removeClass(o, "showSweetAlert"),
                  u.addClass(o, "hideSweetAlert"),
                  u.removeClass(o, "visible");
                var s = o.querySelector(".sa-icon.sa-success");
                u.removeClass(s, "animate"),
                  u.removeClass(
                    s.querySelector(".sa-tip"),
                    "animateSuccessTip"
                  ),
                  u.removeClass(
                    s.querySelector(".sa-long"),
                    "animateSuccessLong"
                  );
                var l = o.querySelector(".sa-icon.sa-error");
                u.removeClass(l, "animateErrorIcon"),
                  u.removeClass(l.querySelector(".sa-x-mark"), "animateXMark");
                var i = o.querySelector(".sa-icon.sa-warning");
                return (
                  u.removeClass(i, "pulseWarning"),
                  u.removeClass(i.querySelector(".sa-body"), "pulseWarningIns"),
                  u.removeClass(i.querySelector(".sa-dot"), "pulseWarningIns"),
                  setTimeout(function () {
                    var e = o.getAttribute("data-custom-class");
                    u.removeClass(o, e);
                  }, 300),
                  u.removeClass(t.body, "stop-scrolling"),
                  (e.onkeydown = a),
                  e.previousActiveElement && e.previousActiveElement.focus(),
                  (r = n),
                  clearTimeout(o.timeout),
                  !0
                );
              }),
            (s.showInputError = l.showInputError =
              function (e) {
                var t = d.getModal(),
                  n = t.querySelector(".sa-input-error");
                u.addClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                u.addClass(o, "show"),
                  (o.querySelector("p").innerHTML = e),
                  setTimeout(function () {
                    s.enableButtons();
                  }, 1),
                  t.querySelector("input").focus();
              }),
            (s.resetInputError = l.resetInputError =
              function (e) {
                if (e && 13 === e.keyCode) return !1;
                var t = d.getModal(),
                  n = t.querySelector(".sa-input-error");
                u.removeClass(n, "show");
                var o = t.querySelector(".sa-error-container");
                u.removeClass(o, "show");
              }),
            (s.disableButtons = l.disableButtons =
              function () {
                var e = d.getModal(),
                  t = e.querySelector("button.confirm"),
                  n = e.querySelector("button.cancel");
                (t.disabled = !0), (n.disabled = !0);
              }),
            (s.enableButtons = l.enableButtons =
              function () {
                var e = d.getModal(),
                  t = e.querySelector("button.confirm"),
                  n = e.querySelector("button.cancel");
                (t.disabled = !1), (n.disabled = !1);
              }),
            "undefined" != typeof e
              ? (e.sweetAlert = e.swal = s)
              : c.logStr("SweetAlert is a frontend module!");
        },
        {
          "./modules/default-params": 2,
          "./modules/handle-click": 3,
          "./modules/handle-dom": 4,
          "./modules/handle-key": 5,
          "./modules/handle-swal-dom": 6,
          "./modules/set-params": 8,
          "./modules/utils": 9,
        },
      ],
      2: [
        function (e, t, n) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = {
            title: "",
            text: "",
            type: null,
            allowOutsideClick: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            confirmButtonText: "OK",
            confirmButtonColor: "#8CD4F5",
            cancelButtonText: "Cancel",
            imageUrl: null,
            imageSize: null,
            timer: null,
            customClass: "",
            html: !1,
            animation: !0,
            allowEscapeKey: !0,
            inputType: "text",
            inputPlaceholder: "",
            inputValue: "",
            showLoaderOnConfirm: !1,
          };
          (n["default"] = o), (t.exports = n["default"]);
        },
        {},
      ],
      3: [
        function (t, n, o) {
          Object.defineProperty(o, "__esModule", { value: !0 });
          var a = t("./utils"),
            r = (t("./handle-swal-dom"), t("./handle-dom")),
            s = function (t, n, o) {
              function s(e) {
                m && n.confirmButtonColor && (p.style.backgroundColor = e);
              }
              var u,
                c,
                d,
                f = t || e.event,
                p = f.target || f.srcElement,
                m = -1 !== p.className.indexOf("confirm"),
                v = -1 !== p.className.indexOf("sweet-overlay"),
                y = r.hasClass(o, "visible"),
                h =
                  n.doneFunction &&
                  "true" === o.getAttribute("data-has-done-function");
              switch (
                (m &&
                  n.confirmButtonColor &&
                  ((u = n.confirmButtonColor),
                  (c = a.colorLuminance(u, -0.04)),
                  (d = a.colorLuminance(u, -0.14))),
                f.type)
              ) {
                case "mouseover":
                  s(c);
                  break;
                case "mouseout":
                  s(u);
                  break;
                case "mousedown":
                  s(d);
                  break;
                case "mouseup":
                  s(c);
                  break;
                case "focus":
                  var g = o.querySelector("button.confirm"),
                    b = o.querySelector("button.cancel");
                  m
                    ? (b.style.boxShadow = "none")
                    : (g.style.boxShadow = "none");
                  break;
                case "click":
                  var w = o === p,
                    C = r.isDescendant(o, p);
                  if (!w && !C && y && !n.allowOutsideClick) break;
                  m && h && y
                    ? l(o, n)
                    : (h && y) || v
                    ? i(o, n)
                    : r.isDescendant(o, p) &&
                      "BUTTON" === p.tagName &&
                      sweetAlert.close();
              }
            },
            l = function (e, t) {
              var n = !0;
              r.hasClass(e, "show-input") &&
                ((n = e.querySelector("input").value), n || (n = "")),
                t.doneFunction(n),
                t.closeOnConfirm && sweetAlert.close(),
                t.showLoaderOnConfirm && sweetAlert.disableButtons();
            },
            i = function (e, t) {
              var n = String(t.doneFunction).replace(/\s/g, ""),
                o =
                  "function(" === n.substring(0, 9) &&
                  ")" !== n.substring(9, 10);
              o && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close();
            };
          (o["default"] = {
            handleButton: s,
            handleConfirm: l,
            handleCancel: i,
          }),
            (n.exports = o["default"]);
        },
        { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
      ],
      4: [
        function (n, o, a) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var r = function (e, t) {
              return new RegExp(" " + t + " ").test(" " + e.className + " ");
            },
            s = function (e, t) {
              r(e, t) || (e.className += " " + t);
            },
            l = function (e, t) {
              var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
              if (r(e, t)) {
                for (; n.indexOf(" " + t + " ") >= 0; )
                  n = n.replace(" " + t + " ", " ");
                e.className = n.replace(/^\s+|\s+$/g, "");
              }
            },
            i = function (e) {
              var n = t.createElement("div");
              return n.appendChild(t.createTextNode(e)), n.innerHTML;
            },
            u = function (e) {
              (e.style.opacity = ""), (e.style.display = "block");
            },
            c = function (e) {
              if (e && !e.length) return u(e);
              for (var t = 0; t < e.length; ++t) u(e[t]);
            },
            d = function (e) {
              (e.style.opacity = ""), (e.style.display = "none");
            },
            f = function (e) {
              if (e && !e.length) return d(e);
              for (var t = 0; t < e.length; ++t) d(e[t]);
            },
            p = function (e, t) {
              for (var n = t.parentNode; null !== n; ) {
                if (n === e) return !0;
                n = n.parentNode;
              }
              return !1;
            },
            m = function (e) {
              (e.style.left = "-9999px"), (e.style.display = "block");
              var t,
                n = e.clientHeight;
              return (
                (t =
                  "undefined" != typeof getComputedStyle
                    ? parseInt(
                        getComputedStyle(e).getPropertyValue("padding-top"),
                        10
                      )
                    : parseInt(e.currentStyle.padding)),
                (e.style.left = ""),
                (e.style.display = "none"),
                "-" + parseInt((n + t) / 2) + "px"
              );
            },
            v = function (e, t) {
              if (+e.style.opacity < 1) {
                (t = t || 16),
                  (e.style.opacity = 0),
                  (e.style.display = "block");
                var n = +new Date(),
                  o = (function (e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function () {
                    (e.style.opacity =
                      +e.style.opacity + (new Date() - n) / 100),
                      (n = +new Date()),
                      +e.style.opacity < 1 && setTimeout(o, t);
                  });
                o();
              }
              e.style.display = "block";
            },
            y = function (e, t) {
              (t = t || 16), (e.style.opacity = 1);
              var n = +new Date(),
                o = (function (e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function () {
                  (e.style.opacity = +e.style.opacity - (new Date() - n) / 100),
                    (n = +new Date()),
                    +e.style.opacity > 0
                      ? setTimeout(o, t)
                      : (e.style.display = "none");
                });
              o();
            },
            h = function (n) {
              if ("function" == typeof MouseEvent) {
                var o = new MouseEvent("click", {
                  view: e,
                  bubbles: !1,
                  cancelable: !0,
                });
                n.dispatchEvent(o);
              } else if (t.createEvent) {
                var a = t.createEvent("MouseEvents");
                a.initEvent("click", !1, !1), n.dispatchEvent(a);
              } else
                t.createEventObject
                  ? n.fireEvent("onclick")
                  : "function" == typeof n.onclick && n.onclick();
            },
            g = function (t) {
              "function" == typeof t.stopPropagation
                ? (t.stopPropagation(), t.preventDefault())
                : e.event &&
                  e.event.hasOwnProperty("cancelBubble") &&
                  (e.event.cancelBubble = !0);
            };
          (a.hasClass = r),
            (a.addClass = s),
            (a.removeClass = l),
            (a.escapeHtml = i),
            (a._show = u),
            (a.show = c),
            (a._hide = d),
            (a.hide = f),
            (a.isDescendant = p),
            (a.getTopMargin = m),
            (a.fadeIn = v),
            (a.fadeOut = y),
            (a.fireClick = h),
            (a.stopEventPropagation = g);
        },
        {},
      ],
      5: [
        function (t, o, a) {
          Object.defineProperty(a, "__esModule", { value: !0 });
          var r = t("./handle-dom"),
            s = t("./handle-swal-dom"),
            l = function (t, o, a) {
              var l = t || e.event,
                i = l.keyCode || l.which,
                u = a.querySelector("button.confirm"),
                c = a.querySelector("button.cancel"),
                d = a.querySelectorAll("button[tabindex]");
              if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                for (
                  var f = l.target || l.srcElement, p = -1, m = 0;
                  m < d.length;
                  m++
                )
                  if (f === d[m]) {
                    p = m;
                    break;
                  }
                9 === i
                  ? ((f = -1 === p ? u : p === d.length - 1 ? d[0] : d[p + 1]),
                    r.stopEventPropagation(l),
                    f.focus(),
                    o.confirmButtonColor &&
                      s.setFocusStyle(f, o.confirmButtonColor))
                  : 13 === i
                  ? ("INPUT" === f.tagName && ((f = u), u.focus()),
                    (f = -1 === p ? u : n))
                  : 27 === i && o.allowEscapeKey === !0
                  ? ((f = c), r.fireClick(f, l))
                  : (f = n);
              }
            };
          (a["default"] = l), (o.exports = a["default"]);
        },
        { "./handle-dom": 4, "./handle-swal-dom": 6 },
      ],
      6: [
        function (n, o, a) {
          var r = function (e) {
            return e && e.__esModule ? e : { default: e };
          };
          Object.defineProperty(a, "__esModule", { value: !0 });
          var s = n("./utils"),
            l = n("./handle-dom"),
            i = n("./default-params"),
            u = r(i),
            c = n("./injected-html"),
            d = r(c),
            f = ".sweet-alert",
            p = ".sweet-overlay",
            m = function () {
              var e = t.createElement("div");
              for (e.innerHTML = d["default"]; e.firstChild; )
                t.body.appendChild(e.firstChild);
            },
            v = (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              var e = t.querySelector(f);
              return e || (m(), (e = v())), e;
            }),
            y = function () {
              var e = v();
              return e ? e.querySelector("input") : void 0;
            },
            h = function () {
              return t.querySelector(p);
            },
            g = function (e, t) {
              var n = s.hexToRgb(t);
              e.style.boxShadow =
                "0 0 2px rgba(" +
                n +
                ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
            },
            b = function (n) {
              var o = v();
              l.fadeIn(h(), 10),
                l.show(o),
                l.addClass(o, "showSweetAlert"),
                l.removeClass(o, "hideSweetAlert"),
                (e.previousActiveElement = t.activeElement);
              var a = o.querySelector("button.confirm");
              a.focus(),
                setTimeout(function () {
                  l.addClass(o, "visible");
                }, 500);
              var r = o.getAttribute("data-timer");
              if ("null" !== r && "" !== r) {
                var s = n;
                o.timeout = setTimeout(function () {
                  var e =
                    (s || null) &&
                    "true" === o.getAttribute("data-has-done-function");
                  e ? s(null) : sweetAlert.close();
                }, r);
              }
            },
            w = function () {
              var e = v(),
                t = y();
              l.removeClass(e, "show-input"),
                (t.value = u["default"].inputValue),
                t.setAttribute("type", u["default"].inputType),
                t.setAttribute("placeholder", u["default"].inputPlaceholder),
                C();
            },
            C = function (e) {
              if (e && 13 === e.keyCode) return !1;
              var t = v(),
                n = t.querySelector(".sa-input-error");
              l.removeClass(n, "show");
              var o = t.querySelector(".sa-error-container");
              l.removeClass(o, "show");
            },
            S = function () {
              var e = v();
              e.style.marginTop = l.getTopMargin(v());
            };
          (a.sweetAlertInitialize = m),
            (a.getModal = v),
            (a.getOverlay = h),
            (a.getInput = y),
            (a.setFocusStyle = g),
            (a.openModal = b),
            (a.resetInput = w),
            (a.resetInputError = C),
            (a.fixVerticalPosition = S);
        },
        {
          "./default-params": 2,
          "./handle-dom": 4,
          "./injected-html": 7,
          "./utils": 9,
        },
      ],
      7: [
        function (e, t, n) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o =
            '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
          (n["default"] = o), (t.exports = n["default"]);
        },
        {},
      ],
      8: [
        function (e, t, o) {
          Object.defineProperty(o, "__esModule", { value: !0 });
          var a = e("./utils"),
            r = e("./handle-swal-dom"),
            s = e("./handle-dom"),
            l = ["error", "warning", "info", "success", "input", "prompt"],
            i = function (e) {
              var t = r.getModal(),
                o = t.querySelector("h2"),
                i = t.querySelector("p"),
                u = t.querySelector("button.cancel"),
                c = t.querySelector("button.confirm");
              if (
                ((o.innerHTML = e.html
                  ? e.title
                  : s.escapeHtml(e.title).split("\n").join("<br>")),
                (i.innerHTML = e.html
                  ? e.text
                  : s
                      .escapeHtml(e.text || "")
                      .split("\n")
                      .join("<br>")),
                e.text && s.show(i),
                e.customClass)
              )
                s.addClass(t, e.customClass),
                  t.setAttribute("data-custom-class", e.customClass);
              else {
                var d = t.getAttribute("data-custom-class");
                s.removeClass(t, d), t.setAttribute("data-custom-class", "");
              }
              if (
                (s.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8())
              ) {
                var f = (function () {
                  for (var o = !1, a = 0; a < l.length; a++)
                    if (e.type === l[a]) {
                      o = !0;
                      break;
                    }
                  if (!o)
                    return logStr("Unknown alert type: " + e.type), { v: !1 };
                  var i = ["success", "error", "warning", "info"],
                    u = n;
                  -1 !== i.indexOf(e.type) &&
                    ((u = t.querySelector(".sa-icon.sa-" + e.type)), s.show(u));
                  var c = r.getInput();
                  switch (e.type) {
                    case "success":
                      s.addClass(u, "animate"),
                        s.addClass(
                          u.querySelector(".sa-tip"),
                          "animateSuccessTip"
                        ),
                        s.addClass(
                          u.querySelector(".sa-long"),
                          "animateSuccessLong"
                        );
                      break;
                    case "error":
                      s.addClass(u, "animateErrorIcon"),
                        s.addClass(
                          u.querySelector(".sa-x-mark"),
                          "animateXMark"
                        );
                      break;
                    case "warning":
                      s.addClass(u, "pulseWarning"),
                        s.addClass(
                          u.querySelector(".sa-body"),
                          "pulseWarningIns"
                        ),
                        s.addClass(
                          u.querySelector(".sa-dot"),
                          "pulseWarningIns"
                        );
                      break;
                    case "input":
                    case "prompt":
                      c.setAttribute("type", e.inputType),
                        (c.value = e.inputValue),
                        c.setAttribute("placeholder", e.inputPlaceholder),
                        s.addClass(t, "show-input"),
                        setTimeout(function () {
                          c.focus(),
                            c.addEventListener("keyup", swal.resetInputError);
                        }, 400);
                  }
                })();
                if ("object" == typeof f) return f.v;
              }
              if (e.imageUrl) {
                var p = t.querySelector(".sa-icon.sa-custom");
                (p.style.backgroundImage = "url(" + e.imageUrl + ")"),
                  s.show(p);
                var m = 80,
                  v = 80;
                if (e.imageSize) {
                  var y = e.imageSize.toString().split("x"),
                    h = y[0],
                    g = y[1];
                  h && g
                    ? ((m = h), (v = g))
                    : logStr(
                        "Parameter imageSize expects value with format WIDTHxHEIGHT, got " +
                          e.imageSize
                      );
                }
                p.setAttribute(
                  "style",
                  p.getAttribute("style") +
                    "width:" +
                    m +
                    "px; height:" +
                    v +
                    "px"
                );
              }
              t.setAttribute("data-has-cancel-button", e.showCancelButton),
                e.showCancelButton
                  ? (u.style.display = "inline-block")
                  : s.hide(u),
                t.setAttribute("data-has-confirm-button", e.showConfirmButton),
                e.showConfirmButton
                  ? (c.style.display = "inline-block")
                  : s.hide(c),
                e.cancelButtonText &&
                  (u.innerHTML = s.escapeHtml(e.cancelButtonText)),
                e.confirmButtonText &&
                  (c.innerHTML = s.escapeHtml(e.confirmButtonText)),
                e.confirmButtonColor &&
                  ((c.style.backgroundColor = e.confirmButtonColor),
                  (c.style.borderLeftColor = e.confirmLoadingButtonColor),
                  (c.style.borderRightColor = e.confirmLoadingButtonColor),
                  r.setFocusStyle(c, e.confirmButtonColor)),
                t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
              var b = e.doneFunction ? !0 : !1;
              t.setAttribute("data-has-done-function", b),
                e.animation
                  ? "string" == typeof e.animation
                    ? t.setAttribute("data-animation", e.animation)
                    : t.setAttribute("data-animation", "pop")
                  : t.setAttribute("data-animation", "none"),
                t.setAttribute("data-timer", e.timer);
            };
          (o["default"] = i), (t.exports = o["default"]);
        },
        { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 },
      ],
      9: [
        function (t, n, o) {
          Object.defineProperty(o, "__esModule", { value: !0 });
          var a = function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              return e;
            },
            r = function (e) {
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return t
                ? parseInt(t[1], 16) +
                    ", " +
                    parseInt(t[2], 16) +
                    ", " +
                    parseInt(t[3], 16)
                : null;
            },
            s = function () {
              return e.attachEvent && !e.addEventListener;
            },
            l = function (t) {
              e.console && e.console.log("SweetAlert: " + t);
            },
            i = function (e, t) {
              (e = String(e).replace(/[^0-9a-f]/gi, "")),
                e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                (t = t || 0);
              var n,
                o,
                a = "#";
              for (o = 0; 3 > o; o++)
                (n = parseInt(e.substr(2 * o, 2), 16)),
                  (n = Math.round(
                    Math.min(Math.max(0, n + n * t), 255)
                  ).toString(16)),
                  (a += ("00" + n).substr(n.length));
              return a;
            };
          (o.extend = a),
            (o.hexToRgb = r),
            (o.isIE8 = s),
            (o.logStr = l),
            (o.colorLuminance = i);
        },
        {},
      ],
    },
    {},
    [1]
  ),
    "function" == typeof define && define.amd
      ? define(function () {
          return sweetAlert;
        })
      : "undefined" != typeof module &&
        module.exports &&
        (module.exports = sweetAlert);
})(window, document);
(function ($, window, document, undefined) {
  var pluginName = "isLoading",
    defaults = {
      position: "right",
      text: "",
      class: "icon-refresh",
      tpl: '<span class="isloading-wrapper %wrapper%">%text%<i class="%class% icon-spin"></i></span>',
      disableSource: true,
      disableOthers: [],
    };
  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this._loader = null;
    this.init();
  }
  function contruct() {
    if (!$[pluginName]) {
      $.isLoading = function (opts) {
        $("body").isLoading(opts);
      };
    }
  }
  Plugin.prototype = {
    init: function () {
      if ($(this.element).is("body")) {
        this.options.position = "overlay";
      }
      this.show();
    },
    show: function () {
      var self = this,
        tpl = self.options.tpl.replace(
          "%wrapper%",
          " isloading-show " + " isloading-" + self.options.position
        );
      tpl = tpl.replace("%class%", self.options["class"]);
      tpl = tpl.replace(
        "%text%",
        self.options.text !== "" ? self.options.text + " " : ""
      );
      self._loader = $(tpl);
      if (
        $(self.element).is("input, textarea") &&
        true === self.options.disableSource
      ) {
        $(self.element).attr("disabled", "disabled");
      } else if (true === self.options.disableSource) {
        $(self.element).addClass("disabled");
      }
      switch (self.options.position) {
        case "inside":
          $(self.element).html(self._loader);
          break;
        case "overlay":
          var $wrapperTpl = null;
          if ($(self.element).is("body")) {
            $wrapperTpl = $(
              '<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,0.5); width: 100%; height: ' +
                $(window).height() +
                'px;" />'
            );
            $("body").prepend($wrapperTpl);
            $(window).on("resize", function () {
              $wrapperTpl.height($(window).height() + "px");
              self._loader.css({
                top:
                  $(window).height() / 2 -
                  self._loader.outerHeight() / 2 +
                  "px",
              });
            });
          } else {
            var cssPosition = $(self.element).css("position"),
              pos = {},
              height = $(self.element).outerHeight() + "px",
              width = "100%";
            if ("relative" === cssPosition || "absolute" === cssPosition) {
              pos = { top: 0, left: 0 };
            } else {
              pos = $(self.element).position();
            }
            $wrapperTpl = $(
              '<div class="isloading-overlay" style="position:absolute; top: ' +
                pos.top +
                "px; left: " +
                pos.left +
                "px; z-index: 10000; background: rgba(0,0,0,0.5); width: " +
                width +
                "; height: " +
                height +
                ';" />'
            );
            $(self.element).prepend($wrapperTpl);
            $(window).on("resize", function () {
              $wrapperTpl.height($(self.element).outerHeight() + "px");
              self._loader.css({
                top:
                  $wrapperTpl.outerHeight() / 2 -
                  self._loader.outerHeight() / 2 +
                  "px",
              });
            });
          }
          $wrapperTpl.html(self._loader);
          self._loader.css({
            top:
              $wrapperTpl.outerHeight() / 2 -
              self._loader.outerHeight() / 2 +
              "px",
          });
          break;
        default:
          $(self.element).after(self._loader);
          break;
      }
      self.disableOthers();
    },
    hide: function () {
      if ("overlay" === this.options.position) {
        $(this.element).find(".isloading-overlay").first().remove();
      } else {
        $(this._loader).remove();
        $(this.element).text($(this.element).attr("data-isloading-label"));
      }
      $(this.element).removeAttr("disabled").removeClass("disabled");
      this.enableOthers();
    },
    disableOthers: function () {
      $.each(this.options.disableOthers, function (i, e) {
        var elt = $(e);
        if (elt.is("button, input, textarea")) {
          elt.attr("disabled", "disabled");
        } else {
          elt.addClass("disabled");
        }
      });
    },
    enableOthers: function () {
      $.each(this.options.disableOthers, function (i, e) {
        var elt = $(e);
        if (elt.is("button, input, textarea")) {
          elt.removeAttr("disabled");
        } else {
          elt.removeClass("disabled");
        }
      });
    },
  };
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (
        (options && "hide" !== options) ||
        !$.data(this, "plugin_" + pluginName)
      ) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      } else {
        var elt = $.data(this, "plugin_" + pluginName);
        if ("hide" === options) {
          elt.hide();
        } else {
          elt.show();
        }
      }
    });
  };
  contruct();
})(jQuery, window, document);
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        if (typeof window !== "undefined") {
          jQuery = require("jquery");
        } else {
          jQuery = require("jquery")(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    factory(jQuery);
  }
})(function ($) {
  "use strict";
  var _currentSpinnerId = 0;
  $.fn.TouchSpin = function (options) {
    var defaults = {
      min: 0,
      max: 100,
      initval: "",
      replacementval: "",
      firstclickvalueifempty: null,
      step: 1,
      decimals: 0,
      stepinterval: 100,
      forcestepdivisibility: "round",
      stepintervaldelay: 500,
      verticalbuttons: false,
      verticalup: "+",
      verticaldown: "-",
      verticalupclass: "",
      verticaldownclass: "",
      prefix: "",
      postfix: "",
      prefix_extraclass: "",
      postfix_extraclass: "",
      booster: true,
      boostat: 10,
      maxboostedstep: false,
      mousewheel: true,
      buttondown_class: "btn btn-primary",
      buttonup_class: "btn btn-primary",
      buttondown_txt: "-",
      buttonup_txt: "+",
      callback_before_calculation: function (value) {
        return value;
      },
      callback_after_calculation: function (value) {
        return value;
      },
    };
    var attributeMap = {
      min: "min",
      max: "max",
      initval: "init-val",
      replacementval: "replacement-val",
      firstclickvalueifempty: "first-click-value-if-empty",
      step: "step",
      decimals: "decimals",
      stepinterval: "step-interval",
      verticalbuttons: "vertical-buttons",
      verticalupclass: "vertical-up-class",
      verticaldownclass: "vertical-down-class",
      forcestepdivisibility: "force-step-divisibility",
      stepintervaldelay: "step-interval-delay",
      prefix: "prefix",
      postfix: "postfix",
      prefix_extraclass: "prefix-extra-class",
      postfix_extraclass: "postfix-extra-class",
      booster: "booster",
      boostat: "boostat",
      maxboostedstep: "max-boosted-step",
      mousewheel: "mouse-wheel",
      buttondown_class: "button-down-class",
      buttonup_class: "button-up-class",
      buttondown_txt: "button-down-txt",
      buttonup_txt: "button-up-txt",
    };
    return this.each(function () {
      var settings,
        originalinput = $(this),
        originalinput_data = originalinput.data(),
        _detached_prefix,
        _detached_postfix,
        container,
        elements,
        value,
        downSpinTimer,
        upSpinTimer,
        downDelayTimeout,
        upDelayTimeout,
        spincount = 0,
        spinning = false;
      init();
      function init() {
        if (originalinput.data("alreadyinitialized")) {
          return;
        }
        originalinput.data("alreadyinitialized", true);
        _currentSpinnerId += 1;
        originalinput.data("spinnerid", _currentSpinnerId);
        if (!originalinput.is("input")) {
          console.log("Must be an input.");
          return;
        }
        _initSettings();
        _setInitval();
        _checkValue();
        _buildHtml();
        _initElements();
        _hideEmptyPrefixPostfix();
        _bindEvents();
        _bindEventsInterface();
      }
      function _setInitval() {
        if (settings.initval !== "" && originalinput.val() === "") {
          originalinput.val(settings.initval);
        }
      }
      function changeSettings(newsettings) {
        _updateSettings(newsettings);
        _checkValue();
        var value = elements.input.val();
        if (value !== "") {
          value = Number(
            settings.callback_before_calculation(elements.input.val())
          );
          elements.input.val(
            settings.callback_after_calculation(
              Number(value).toFixed(settings.decimals)
            )
          );
        }
      }
      function _initSettings() {
        settings = $.extend(
          {},
          defaults,
          originalinput_data,
          _parseAttributes(),
          options
        );
      }
      function _parseAttributes() {
        var data = {};
        $.each(attributeMap, function (key, value) {
          var attrName = "bts-" + value + "";
          if (originalinput.is("[data-" + attrName + "]")) {
            data[key] = originalinput.data(attrName);
          }
        });
        return data;
      }
      function _destroy() {
        var $parent = originalinput.parent();
        stopSpin();
        originalinput.off(".touchspin");
        if ($parent.hasClass("bootstrap-touchspin-injected")) {
          originalinput.siblings().remove();
          originalinput.unwrap();
        } else {
          $(".bootstrap-touchspin-injected", $parent).remove();
          $parent.removeClass("bootstrap-touchspin");
        }
        originalinput.data("alreadyinitialized", false);
      }
      function _updateSettings(newsettings) {
        settings = $.extend({}, settings, newsettings);
        if (newsettings.postfix) {
          var $postfix = originalinput
            .parent()
            .find(".bootstrap-touchspin-postfix");
          if ($postfix.length === 0) {
            _detached_postfix.insertAfter(originalinput);
          }
          originalinput
            .parent()
            .find(".bootstrap-touchspin-postfix .input-group-text")
            .text(newsettings.postfix);
        }
        if (newsettings.prefix) {
          var $prefix = originalinput
            .parent()
            .find(".bootstrap-touchspin-prefix");
          if ($prefix.length === 0) {
            _detached_prefix.insertBefore(originalinput);
          }
          originalinput
            .parent()
            .find(".bootstrap-touchspin-prefix .input-group-text")
            .text(newsettings.prefix);
        }
        _hideEmptyPrefixPostfix();
      }
      function _buildHtml() {
        var initval = originalinput.val(),
          parentelement = originalinput.parent();
        if (initval !== "") {
          initval = settings.callback_after_calculation(
            Number(initval).toFixed(settings.decimals)
          );
        }
        originalinput.data("initvalue", initval).val(initval);
        originalinput.addClass("form-control");
        if (parentelement.hasClass("input-group")) {
          _advanceInputGroup(parentelement);
        } else {
          _buildInputGroup();
        }
      }
      function _advanceInputGroup(parentelement) {
        parentelement.addClass("bootstrap-touchspin");
        var prev = originalinput.prev(),
          next = originalinput.next();
        var downhtml,
          uphtml,
          prefixhtml =
            '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' +
            settings.prefix +
            "</span></span>",
          postfixhtml =
            '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' +
            settings.postfix +
            "</span></span>";
        if (
          prev.hasClass("input-group-btn") ||
          prev.hasClass("input-group-prepend")
        ) {
          downhtml =
            '<button class="' +
            settings.buttondown_class +
            ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' +
            settings.buttondown_txt +
            "</button>";
          prev.append(downhtml);
        } else {
          downhtml =
            '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' +
            settings.buttondown_class +
            ' bootstrap-touchspin-down" type="button">' +
            settings.buttondown_txt +
            "</button></span>";
          $(downhtml).insertBefore(originalinput);
        }
        if (
          next.hasClass("input-group-btn") ||
          next.hasClass("input-group-append")
        ) {
          uphtml =
            '<button class="' +
            settings.buttonup_class +
            ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' +
            settings.buttonup_txt +
            "</button>";
          next.prepend(uphtml);
        } else {
          uphtml =
            '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' +
            settings.buttonup_class +
            ' bootstrap-touchspin-up" type="button">' +
            settings.buttonup_txt +
            "</button></span>";
          $(uphtml).insertAfter(originalinput);
        }
        $(prefixhtml).insertBefore(originalinput);
        $(postfixhtml).insertAfter(originalinput);
        container = parentelement;
      }
      function _buildInputGroup() {
        var html;
        var inputGroupSize = "";
        if (originalinput.hasClass("input-sm")) {
          inputGroupSize = "input-group-sm";
        }
        if (originalinput.hasClass("input-lg")) {
          inputGroupSize = "input-group-lg";
        }
        if (settings.verticalbuttons) {
          html =
            '<div class="input-group ' +
            inputGroupSize +
            ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' +
            settings.prefix +
            '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' +
            settings.postfix +
            '</span></span><span class="input-group-btn-vertical"><button class="' +
            settings.buttondown_class +
            " bootstrap-touchspin-up " +
            settings.verticalupclass +
            '" type="button">' +
            settings.verticalup +
            '</button><button class="' +
            settings.buttonup_class +
            " bootstrap-touchspin-down " +
            settings.verticaldownclass +
            '" type="button">' +
            settings.verticaldown +
            "</button></span></div>";
        } else {
          html =
            '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' +
            settings.buttondown_class +
            ' bootstrap-touchspin-down" type="button">' +
            settings.buttondown_txt +
            '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' +
            settings.prefix +
            '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' +
            settings.postfix +
            '</span></span><span class="input-group-btn input-group-append"><button class="' +
            settings.buttonup_class +
            ' bootstrap-touchspin-up" type="button">' +
            settings.buttonup_txt +
            "</button></span></div>";
        }
        container = $(html).insertBefore(originalinput);
        $(".bootstrap-touchspin-prefix", container).after(originalinput);
        if (originalinput.hasClass("input-sm")) {
          container.addClass("input-group-sm");
        } else if (originalinput.hasClass("input-lg")) {
          container.addClass("input-group-lg");
        }
      }
      function _initElements() {
        elements = {
          down: $(".bootstrap-touchspin-down", container),
          up: $(".bootstrap-touchspin-up", container),
          input: $("input", container),
          prefix: $(".bootstrap-touchspin-prefix", container).addClass(
            settings.prefix_extraclass
          ),
          postfix: $(".bootstrap-touchspin-postfix", container).addClass(
            settings.postfix_extraclass
          ),
        };
      }
      function _hideEmptyPrefixPostfix() {
        if (settings.prefix === "") {
          _detached_prefix = elements.prefix.detach();
        }
        if (settings.postfix === "") {
          _detached_postfix = elements.postfix.detach();
        }
      }
      function _bindEvents() {
        originalinput.on("keydown.touchspin", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 38) {
            if (spinning !== "up") {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          } else if (code === 40) {
            if (spinning !== "down") {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });
        originalinput.on("keyup.touchspin", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 38) {
            stopSpin();
          } else if (code === 40) {
            stopSpin();
          }
        });
        originalinput.on("blur.touchspin", function () {
          _checkValue();
          originalinput.val(
            settings.callback_after_calculation(originalinput.val())
          );
        });
        elements.down.on("keydown", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 32 || code === 13) {
            if (spinning !== "down") {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });
        elements.down.on("keyup.touchspin", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 32 || code === 13) {
            stopSpin();
          }
        });
        elements.up.on("keydown.touchspin", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 32 || code === 13) {
            if (spinning !== "up") {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          }
        });
        elements.up.on("keyup.touchspin", function (ev) {
          var code = ev.keyCode || ev.which;
          if (code === 32 || code === 13) {
            stopSpin();
          }
        });
        elements.down.on("mousedown.touchspin", function (ev) {
          elements.down.off("touchstart.touchspin");
          if (originalinput.is(":disabled")) {
            return;
          }
          downOnce();
          startDownSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.down.on("touchstart.touchspin", function (ev) {
          elements.down.off("mousedown.touchspin");
          if (originalinput.is(":disabled")) {
            return;
          }
          downOnce();
          startDownSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on("mousedown.touchspin", function (ev) {
          elements.up.off("touchstart.touchspin");
          if (originalinput.is(":disabled")) {
            return;
          }
          upOnce();
          startUpSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on("touchstart.touchspin", function (ev) {
          elements.up.off("mousedown.touchspin");
          if (originalinput.is(":disabled")) {
            return;
          }
          upOnce();
          startUpSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on(
          "mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",
          function (ev) {
            if (!spinning) {
              return;
            }
            ev.stopPropagation();
            stopSpin();
          }
        );
        elements.down.on(
          "mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",
          function (ev) {
            if (!spinning) {
              return;
            }
            ev.stopPropagation();
            stopSpin();
          }
        );
        elements.down.on(
          "mousemove.touchspin touchmove.touchspin",
          function (ev) {
            if (!spinning) {
              return;
            }
            ev.stopPropagation();
            ev.preventDefault();
          }
        );
        elements.up.on(
          "mousemove.touchspin touchmove.touchspin",
          function (ev) {
            if (!spinning) {
              return;
            }
            ev.stopPropagation();
            ev.preventDefault();
          }
        );
        originalinput.on(
          "mousewheel.touchspin DOMMouseScroll.touchspin",
          function (ev) {
            if (!settings.mousewheel || !originalinput.is(":focus")) {
              return;
            }
            var delta =
              ev.originalEvent.wheelDelta ||
              -ev.originalEvent.deltaY ||
              -ev.originalEvent.detail;
            ev.stopPropagation();
            ev.preventDefault();
            if (delta < 0) {
              downOnce();
            } else {
              upOnce();
            }
          }
        );
      }
      function _bindEventsInterface() {
        originalinput.on("touchspin.destroy", function () {
          _destroy();
        });
        originalinput.on("touchspin.uponce", function () {
          stopSpin();
          upOnce();
        });
        originalinput.on("touchspin.downonce", function () {
          stopSpin();
          downOnce();
        });
        originalinput.on("touchspin.startupspin", function () {
          startUpSpin();
        });
        originalinput.on("touchspin.startdownspin", function () {
          startDownSpin();
        });
        originalinput.on("touchspin.stopspin", function () {
          stopSpin();
        });
        originalinput.on("touchspin.updatesettings", function (e, newsettings) {
          changeSettings(newsettings);
        });
      }
      function _forcestepdivisibility(value) {
        switch (settings.forcestepdivisibility) {
          case "round":
            return (Math.round(value / settings.step) * settings.step).toFixed(
              settings.decimals
            );
          case "floor":
            return (Math.floor(value / settings.step) * settings.step).toFixed(
              settings.decimals
            );
          case "ceil":
            return (Math.ceil(value / settings.step) * settings.step).toFixed(
              settings.decimals
            );
          default:
            return value.toFixed(settings.decimals);
        }
      }
      function _checkValue() {
        var val, parsedval, returnval;
        val = settings.callback_before_calculation(originalinput.val());
        if (val === "") {
          if (settings.replacementval !== "") {
            originalinput.val(settings.replacementval);
            originalinput.trigger("change");
          }
          return;
        }
        if (settings.decimals > 0 && val === ".") {
          return;
        }
        parsedval = parseFloat(val);
        if (isNaN(parsedval)) {
          if (settings.replacementval !== "") {
            parsedval = settings.replacementval;
          } else {
            parsedval = 0;
          }
        }
        returnval = parsedval;
        if (parsedval.toString() !== val) {
          returnval = parsedval;
        }
        if (settings.min !== null && parsedval < settings.min) {
          returnval = settings.min;
        }
        if (settings.max !== null && parsedval > settings.max) {
          returnval = settings.max;
        }
        returnval = _forcestepdivisibility(returnval);
        if (Number(val).toString() !== returnval.toString()) {
          originalinput.val(returnval);
          originalinput.trigger("change");
        }
      }
      function _getBoostedStep() {
        if (!settings.booster) {
          return settings.step;
        } else {
          var boosted =
            Math.pow(2, Math.floor(spincount / settings.boostat)) *
            settings.step;
          if (settings.maxboostedstep) {
            if (boosted > settings.maxboostedstep) {
              boosted = settings.maxboostedstep;
              value = Math.round(value / boosted) * boosted;
            }
          }
          return Math.max(settings.step, boosted);
        }
      }
      function valueIfIsNaN() {
        if (typeof settings.firstclickvalueifempty === "number") {
          return settings.firstclickvalueifempty;
        } else {
          return (settings.min + settings.max) / 2;
        }
      }
      function upOnce() {
        _checkValue();
        value = parseFloat(
          settings.callback_before_calculation(elements.input.val())
        );
        var initvalue = value;
        var boostedstep;
        if (isNaN(value)) {
          value = valueIfIsNaN();
        } else {
          boostedstep = _getBoostedStep();
          value = value + boostedstep;
        }
        if (settings.max !== null && value > settings.max) {
          value = settings.max;
          originalinput.trigger("touchspin.on.max");
          stopSpin();
        }
        elements.input.val(
          settings.callback_after_calculation(
            Number(value).toFixed(settings.decimals)
          )
        );
        if (initvalue !== value) {
          originalinput.trigger("change");
        }
      }
      function downOnce() {
        _checkValue();
        value = parseFloat(
          settings.callback_before_calculation(elements.input.val())
        );
        var initvalue = value;
        var boostedstep;
        if (isNaN(value)) {
          value = valueIfIsNaN();
        } else {
          boostedstep = _getBoostedStep();
          value = value - boostedstep;
        }
        if (settings.min !== null && value < settings.min) {
          value = settings.min;
          originalinput.trigger("touchspin.on.min");
          stopSpin();
        }
        elements.input.val(
          settings.callback_after_calculation(
            Number(value).toFixed(settings.decimals)
          )
        );
        if (initvalue !== value) {
          originalinput.trigger("change");
        }
      }
      function startDownSpin() {
        stopSpin();
        spincount = 0;
        spinning = "down";
        originalinput.trigger("touchspin.on.startspin");
        originalinput.trigger("touchspin.on.startdownspin");
        downDelayTimeout = setTimeout(function () {
          downSpinTimer = setInterval(function () {
            spincount++;
            downOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }
      function startUpSpin() {
        stopSpin();
        spincount = 0;
        spinning = "up";
        originalinput.trigger("touchspin.on.startspin");
        originalinput.trigger("touchspin.on.startupspin");
        upDelayTimeout = setTimeout(function () {
          upSpinTimer = setInterval(function () {
            spincount++;
            upOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }
      function stopSpin() {
        clearTimeout(downDelayTimeout);
        clearTimeout(upDelayTimeout);
        clearInterval(downSpinTimer);
        clearInterval(upSpinTimer);
        switch (spinning) {
          case "up":
            originalinput.trigger("touchspin.on.stopupspin");
            originalinput.trigger("touchspin.on.stopspin");
            break;
          case "down":
            originalinput.trigger("touchspin.on.stopdownspin");
            originalinput.trigger("touchspin.on.stopspin");
            break;
        }
        spincount = 0;
        spinning = false;
      }
    });
  };
});
/*! Magnific Popup - v1.0.0 - 2015-09-17
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(window.jQuery || window.Zepto);
  }
})(function ($) {
  var CLOSE_EVENT = "Close",
    BEFORE_CLOSE_EVENT = "BeforeClose",
    AFTER_CLOSE_EVENT = "AfterClose",
    BEFORE_APPEND_EVENT = "BeforeAppend",
    MARKUP_PARSE_EVENT = "MarkupParse",
    OPEN_EVENT = "Open",
    CHANGE_EVENT = "Change",
    NS = "mfp",
    EVENT_NS = "." + NS,
    READY_CLASS = "mfp-ready",
    REMOVING_CLASS = "mfp-removing",
    PREVENT_CLOSE_CLASS = "mfp-prevent-close";
  var mfp,
    MagnificPopup = function () {},
    _isJQ = !!window.jQuery,
    _prevStatus,
    _window = $(window),
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;
  var _mfpOn = function (name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function (className, appendTo, html, raw) {
      var el = document.createElement("div");
      el.className = "mfp-" + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function (e, data) {
      mfp.ev.triggerHandler(NS + e, data);
      if (mfp.st.callbacks) {
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function (type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(
          mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)
        );
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    _checkInstance = function () {
      if (!$.magnificPopup.instance) {
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    supportsTransitions = function () {
      var s = document.createElement("p").style,
        v = ["ms", "O", "Moz", "Webkit"];
      if (s["transition"] !== undefined) {
        return true;
      }
      while (v.length) {
        if (v.pop() + "Transition" in s) {
          return true;
        }
      }
      return false;
    };
  MagnificPopup.prototype = {
    constructor: MagnificPopup,
    init: function () {
      var appVersion = navigator.appVersion;
      mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
      mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
      mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();
      mfp.probablyMobile =
        mfp.isAndroid ||
        mfp.isIOS ||
        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
          navigator.userAgent
        );
      _document = $(document);
      mfp.popupsCache = {};
    },
    open: function (data) {
      var i;
      if (data.isObj === false) {
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }
      mfp.types = [];
      _wrapClasses = "";
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos =
        mfp.st.fixedContentPos === "auto"
          ? !mfp.probablyMobile
          : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }
      if (!mfp.bgOverlay) {
        mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function () {
          mfp.close();
        });
        mfp.wrap = _getEl("wrap")
          .attr("tabindex", -1)
          .on("click" + EVENT_NS, function (e) {
            if (mfp._checkIfClose(e.target)) {
              mfp.close();
            }
          });
        mfp.container = _getEl("container", mfp.wrap);
      }
      mfp.contentContainer = _getEl("content");
      if (mfp.st.preloader) {
        mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
      }
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp["init" + n].call(mfp);
      }
      _mfpTrigger("BeforeOpen");
      if (mfp.st.showCloseBtn) {
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += " mfp-close-btn-in";
        }
      }
      if (mfp.st.alignTop) {
        _wrapClasses += " mfp-align-top";
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: "hidden",
          overflowY: mfp.st.overflowY,
        });
      } else {
        mfp.wrap.css({ top: _window.scrollTop(), position: "absolute" });
      }
      if (
        mfp.st.fixedBgPos === false ||
        (mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos)
      ) {
        mfp.bgOverlay.css({ height: _document.height(), position: "absolute" });
      }
      if (mfp.st.enableEscapeKey) {
        _document.on("keyup" + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }
      _window.on("resize" + EVENT_NS, function () {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += " mfp-auto-cursor";
      }
      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
      var windowHeight = (mfp.wH = _window.height());
      var windowStyles = {};
      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }
      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = "hidden";
        } else {
          $("body, html").css("overflow", "hidden");
        }
      }
      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += " mfp-ie7";
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }
      mfp.updateItemHTML();
      _mfpTrigger("BuildControls");
      $("html").css(windowStyles);
      mfp.bgOverlay
        .add(mfp.wrap)
        .prependTo(mfp.st.prependTo || $(document.body));
      mfp._lastFocusedEl = document.activeElement;
      setTimeout(function () {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          mfp.bgOverlay.addClass(READY_CLASS);
        }
        _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);
      return data;
    },
    close: function () {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);
      mfp.isOpen = false;
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },
    _close: function () {
      _mfpTrigger(CLOSE_EVENT);
      var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();
      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + " ";
      }
      mfp._removeClassFromMFP(classesToRemove);
      if (mfp.fixedContentPos) {
        var windowStyles = { marginRight: "" };
        if (mfp.isIE7) {
          $("body, html").css("overflow", "");
        } else {
          windowStyles.overflow = "";
        }
        $("html").css(windowStyles);
      }
      _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
      mfp.ev.off(EVENT_NS);
      mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
      mfp.bgOverlay.attr("class", "mfp-bg");
      mfp.container.attr("class", "mfp-container");
      if (
        mfp.st.showCloseBtn &&
        (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)
      ) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }
      if (mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus();
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function (winHeight) {
      if (mfp.isIOS) {
        var zoomLevel =
          document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css("height", height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      if (!mfp.fixedContentPos) {
        mfp.wrap.css("height", mfp.wH);
      }
      _mfpTrigger("Resize");
    },
    updateItemHTML: function () {
      var item = mfp.items[mfp.index];
      mfp.contentContainer.detach();
      if (mfp.content) mfp.content.detach();
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      _mfpTrigger("BeforeChange", [
        mfp.currItem ? mfp.currItem.type : "",
        type,
      ]);
      mfp.currItem = item;
      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;
        _mfpTrigger("FirstMarkupParse", markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
      }
      var newContent = mfp[
        "get" + type.charAt(0).toUpperCase() + type.slice(1)
      ](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger("AfterChange");
    },
    appendContent: function (newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (
          mfp.st.showCloseBtn &&
          mfp.st.closeBtnInside &&
          mfp.currTemplate[type] === true
        ) {
          if (!mfp.content.find(".mfp-close").length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = "";
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass("mfp-" + type + "-holder");
      mfp.contentContainer.append(mfp.content);
    },
    parseEl: function (index) {
      var item = mfp.items[index],
        type;
      if (item.tagName) {
        item = { el: $(item) };
      } else {
        type = item.type;
        item = { data: item, src: item.src };
      }
      if (item.el) {
        var types = mfp.types;
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass("mfp-" + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr("data-mfp-src");
        if (!item.src) {
          item.src = item.el.attr("href");
        }
      }
      item.type = type || mfp.st.type || "inline";
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger("ElementParse", item);
      return mfp.items[index];
    },
    addGroup: function (el, options) {
      var eHandler = function (e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      var eName = "click.magnificPopup";
      options.mainEl = el;
      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function (e, el, options) {
      var midClick =
        options.midClick !== undefined
          ? options.midClick
          : $.magnificPopup.defaults.midClick;
      if (
        !midClick &&
        (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
      ) {
        return;
      }
      var disableOn =
        options.disableOn !== undefined
          ? options.disableOn
          : $.magnificPopup.defaults.disableOn;
      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }
      if (e.type) {
        e.preventDefault();
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }
      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },
    updateStatus: function (status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass("mfp-s-" + _prevStatus);
        }
        if (!text && status === "loading") {
          text = mfp.st.tLoading;
        }
        var data = { status: status, text: text };
        _mfpTrigger("UpdateStatus", data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass("mfp-s-" + status);
        _prevStatus = status;
      }
    },
    _checkIfClose: function (target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }
      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;
      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        if (
          !mfp.content ||
          $(target).hasClass("mfp-close") ||
          (mfp.preloader && target === mfp.preloader[0])
        ) {
          return true;
        }
        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function (cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function (cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function (winHeight) {
      return (
        (mfp.isIE7 ? _document.height() : document.body.scrollHeight) >
        (winHeight || _window.height())
      );
    },
    _setFocus: function () {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function (e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function (template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split("_");
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + "-" + arr[0]);
          if (el.length > 0) {
            var attr = arr[1];
            if (attr === "replaceWith") {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === "img") {
              if (el.is("img")) {
                el.attr("src", value);
              } else {
                el.replaceWith(
                  '<img src="' + value + '" class="' + el.attr("class") + '" />'
                );
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + "-" + key).html(value);
        }
      });
    },
    _getScrollbarSize: function () {
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    },
  };
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function (options, index) {
      _checkInstance();
      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }
      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function () {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function (name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: "",
      preloader: true,
      focus: "",
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Fechar (Esc)",
      tLoading: "Carregando...",
    },
  };
  $.fn.magnificPopup = function (options) {
    _checkInstance();
    var jqEl = $(this);
    if (typeof options === "string") {
      if (options === "open") {
        var items,
          itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen)
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      options = $.extend(true, {}, options);
      if (_isJQ) {
        jqEl.data("magnificPopup", options);
      } else {
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };
  var INLINE_NS = "inline",
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function () {
      if (_lastInlineElement) {
        _inlinePlaceholder
          .after(_lastInlineElement.addClass(_hiddenClass))
          .detach();
        _lastInlineElement = null;
      }
    };
  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },
      getInline: function (item, template) {
        _putInlineElementsBack();
        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);
          if (el.length) {
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = "mfp-" + _hiddenClass;
              }
              _lastInlineElement = el
                .after(_inlinePlaceholder)
                .detach()
                .removeClass(_hiddenClass);
            }
            mfp.updateStatus("ready");
          } else {
            mfp.updateStatus("error", inlineSt.tNotFound);
            el = $("<div>");
          }
          item.inlineElement = el;
          return el;
        }
        mfp.updateStatus("ready");
        mfp._parseMarkup(template, {}, item);
        return template;
      },
    },
  });
  var AJAX_NS = "ajax",
    _ajaxCur,
    _removeAjaxCursor = function () {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function () {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };
  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
        _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function (item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }
        mfp.updateStatus("loading");
        var opts = $.extend(
          {
            url: item.src,
            success: function (data, textStatus, jqXHR) {
              var temp = { data: data, xhr: jqXHR };
              _mfpTrigger("ParseAjax", temp);
              mfp.appendContent($(temp.data), AJAX_NS);
              item.finished = true;
              _removeAjaxCursor();
              mfp._setFocus();
              setTimeout(function () {
                mfp.wrap.addClass(READY_CLASS);
              }, 16);
              mfp.updateStatus("ready");
              _mfpTrigger("AjaxContentAdded");
            },
            error: function () {
              _removeAjaxCursor();
              item.finished = item.loadError = true;
              mfp.updateStatus(
                "error",
                mfp.st.ajax.tError.replace("%url%", item.src)
              );
            },
          },
          mfp.st.ajax.settings
        );
        mfp.req = $.ajax(opts);
        return "";
      },
    },
  });
  var _imgInterval,
    _getTitle = function (item) {
      if (item.data && item.data.title !== undefined) return item.data.title;
      var src = mfp.st.image.titleSrc;
      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || "";
        }
      }
      return "";
    };
  $.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        "<figure>" +
        '<div class="mfp-img"></div>' +
        "<figcaption>" +
        '<div class="mfp-bottom-bar">' +
        '<div class="mfp-title"></div>' +
        '<div class="mfp-counter"></div>' +
        "</div>" +
        "</figcaption>" +
        "</figure>" +
        "</div>",
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var imgSt = mfp.st.image,
          ns = ".image";
        mfp.types.push("image");
        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === "image" && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off("resize" + EVENT_NS);
        });
        _mfpOn("Resize" + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn("AfterChange", mfp.resizeImage);
        }
      },
      resizeImage: function () {
        var item = mfp.currItem;
        if (!item || !item.img) return;
        if (mfp.st.image.verticalFit) {
          var decr = 0;
          if (mfp.isLowIE) {
            decr =
              parseInt(item.img.css("padding-top"), 10) +
              parseInt(item.img.css("padding-bottom"), 10);
          }
          item.img.css("max-height", mfp.wH - decr);
        }
      },
      _onImageHasSize: function (item) {
        if (item.img) {
          item.hasSize = true;
          if (_imgInterval) {
            clearInterval(_imgInterval);
          }
          item.isCheckingImgSize = false;
          _mfpTrigger("ImageHasSize", item);
          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass("mfp-loading");
            item.imgHidden = false;
          }
        }
      },
      findImageSize: function (item) {
        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function (delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            _imgInterval = setInterval(function () {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }
              if (counter > 200) {
                clearInterval(_imgInterval);
              }
              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };
        mfpSetInterval(1);
      },
      getImage: function (item, template) {
        var guard = 0,
          onLoadComplete = function () {
            if (item) {
              if (item.img[0].complete) {
                item.img.off(".mfploader");
                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);
                  mfp.updateStatus("ready");
                }
                item.hasSize = true;
                item.loaded = true;
                _mfpTrigger("ImageLoadComplete");
              } else {
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          onLoadError = function () {
            if (item) {
              item.img.off(".mfploader");
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus(
                  "error",
                  imgSt.tError.replace("%url%", item.src)
                );
              }
              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;
        var el = template.find(".mfp-img");
        if (el.length) {
          var img = document.createElement("img");
          img.className = "mfp-img";
          if (item.el && item.el.find("img").length) {
            img.alt = item.el.find("img").attr("alt");
          }
          item.img = $(img)
            .on("load.mfploader", onLoadComplete)
            .on("error.mfploader", onLoadError);
          img.src = item.src;
          if (el.is("img")) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }
        mfp._parseMarkup(
          template,
          { title: _getTitle(item), img_replaceWith: item.img },
          item
        );
        mfp.resizeImage();
        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);
          if (item.loadError) {
            template.addClass("mfp-loading");
            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
          } else {
            template.removeClass("mfp-loading");
            mfp.updateStatus("ready");
          }
          return template;
        }
        mfp.updateStatus("loading");
        item.loading = true;
        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass("mfp-loading");
          mfp.findImageSize(item);
        }
        return template;
      },
    },
  });
  var hasMozTransform,
    getHasMozTransform = function () {
      if (hasMozTransform === undefined) {
        hasMozTransform =
          document.createElement("p").style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };
  $.magnificPopup.registerModule("zoom", {
    options: {
      enabled: false,
      easing: "ease-in-out",
      duration: 300,
      opener: function (element) {
        return element.is("img") ? element : element.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var zoomSt = mfp.st.zoom,
          ns = ".zoom",
          image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }
        var duration = zoomSt.duration,
          getElToAnimate = function (image) {
            var newImg = image
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              transition =
                "all " + zoomSt.duration / 1000 + "s " + zoomSt.easing,
              cssObj = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              t = "transition";
            cssObj["-webkit-" + t] =
              cssObj["-moz-" + t] =
              cssObj["-o-" + t] =
              cssObj[t] =
                transition;
            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function () {
            mfp.content.css("visibility", "visible");
          },
          openTimeout,
          animatedImg;
        _mfpOn("BuildControls" + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css("visibility", "hidden");
            image = mfp._getItemToZoom();
            if (!image) {
              showMainContent();
              return;
            }
            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {
                showMainContent();
                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger("ZoomAnimationEnded");
                }, 16);
              }, duration);
            }, 16);
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;
            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }
            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css("visibility", "hidden");
            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },
      _allowZoom: function () {
        return mfp.currItem.type === "image";
      },
      _getItemToZoom: function () {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      _getOffset: function (isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css("padding-top"), 10);
        var paddingBottom = parseInt(el.css("padding-bottom"), 10);
        offset.top -= $(window).scrollTop() - paddingTop;
        var obj = {
          width: el.width(),
          height:
            (_isJQ ? el.innerHeight() : el[0].offsetHeight) -
            paddingBottom -
            paddingTop,
        };
        if (getHasMozTransform()) {
          obj["-moz-transform"] = obj["transform"] =
            "translate(" + offset.left + "px," + offset.top + "px)";
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      },
    },
  });
  var IFRAME_NS = "iframe",
    _emptyPage = "//about:blank",
    _fixIframeBugs = function (isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find("iframe");
        if (el.length) {
          if (!isShowing) {
            el[0].src = _emptyPage;
          }
          if (mfp.isIE8) {
            el.css("display", isShowing ? "block" : "none");
          }
        }
      }
    };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        mfp.types.push(IFRAME_NS);
        _mfpOn("BeforeChange", function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs();
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true);
            }
          }
        });
        _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },
      getIframe: function (item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function () {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === "string") {
                embedSrc = embedSrc.substr(
                  embedSrc.lastIndexOf(this.id) + this.id.length,
                  embedSrc.length
                );
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace("%id%", embedSrc);
            return false;
          }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus("ready");
        return template;
      },
    },
  });
  var _getLoopedId = function (index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function (text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
  $.magnificPopup.registerModule("gallery", {
    options: {
      enabled: false,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var gSt = mfp.st.gallery,
          ns = ".mfp-gallery",
          supportsFastClick = Boolean($.fn.mfpFastClick);
        mfp.direction = true;
        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += " mfp-gallery";
        _mfpOn(OPEN_EVENT + ns, function () {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on("click" + ns, ".mfp-img", function () {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }
          _document.on("keydown" + ns, function (e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });
        _mfpOn("UpdateStatus" + ns, function (e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(
              data.text,
              mfp.currItem.index,
              mfp.items.length
            );
          }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
          var l = mfp.items.length;
          values.counter =
            l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
        });
        _mfpOn("BuildControls" + ns, function () {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = (mfp.arrowLeft = $(
                markup
                  .replace(/%title%/gi, gSt.tPrev)
                  .replace(/%dir%/gi, "left")
              ).addClass(PREVENT_CLOSE_CLASS)),
              arrowRight = (mfp.arrowRight = $(
                markup
                  .replace(/%title%/gi, gSt.tNext)
                  .replace(/%dir%/gi, "right")
              ).addClass(PREVENT_CLOSE_CLASS));
            var eName = supportsFastClick ? "mfpFastClick" : "click";
            arrowLeft[eName](function () {
              mfp.prev();
            });
            arrowRight[eName](function () {
              mfp.next();
            });
            if (mfp.isIE7) {
              _getEl("b", arrowLeft[0], false, true);
              _getEl("a", arrowLeft[0], false, true);
              _getEl("b", arrowRight[0], false, true);
              _getEl("a", arrowRight[0], false, true);
            }
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });
        _mfpOn(CHANGE_EVENT + ns, function () {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function () {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          _document.off(ns);
          mfp.wrap.off("click" + ns);
          if (mfp.arrowLeft && supportsFastClick) {
            mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
          }
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function () {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function () {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function (newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function (index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
          return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }
        _mfpTrigger("LazyLoad", item);
        if (item.type === "image") {
          item.img = $('<img class="mfp-img" />')
            .on("load.mfploader", function () {
              item.hasSize = true;
            })
            .on("error.mfploader", function () {
              item.hasSize = true;
              item.loadError = true;
              _mfpTrigger("LazyLoadError", item);
            })
            .attr("src", item.src);
        }
        item.preloaded = true;
      },
    },
  });
  var RETINA_NS = "retina";
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function (item) {
        return item.src.replace(/\.\w+$/, function (m) {
          return "@2x" + m;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();
          if (ratio > 1) {
            _mfpOn("ImageHasSize" + "." + RETINA_NS, function (e, item) {
              item.img.css({
                "max-width": item.img[0].naturalWidth / ratio,
                width: "100%",
              });
            });
            _mfpOn("ElementParse" + "." + RETINA_NS, function (e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      },
    },
  });
  (function () {
    var ghostClickDelay = 1000,
      supportsTouch = "ontouchstart" in window,
      unbindTouchMove = function () {
        _window.off("touchmove" + ns + " touchend" + ns);
      },
      eName = "mfpFastClick",
      ns = "." + eName;
    $.fn.mfpFastClick = function (callback) {
      return $(this).each(function () {
        var elem = $(this),
          lock;
        if (supportsTouch) {
          var timeout, startX, startY, pointerMoved, point, numPointers;
          elem.on("touchstart" + ns, function (e) {
            pointerMoved = false;
            numPointers = 1;
            point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
            startX = point.clientX;
            startY = point.clientY;
            _window
              .on("touchmove" + ns, function (e) {
                point = e.originalEvent ? e.originalEvent.touches : e.touches;
                numPointers = point.length;
                point = point[0];
                if (
                  Math.abs(point.clientX - startX) > 10 ||
                  Math.abs(point.clientY - startY) > 10
                ) {
                  pointerMoved = true;
                  unbindTouchMove();
                }
              })
              .on("touchend" + ns, function (e) {
                unbindTouchMove();
                if (pointerMoved || numPointers > 1) {
                  return;
                }
                lock = true;
                e.preventDefault();
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                  lock = false;
                }, ghostClickDelay);
                callback();
              });
          });
        }
        elem.on("click" + ns, function () {
          if (!lock) {
            callback();
          }
        });
      });
    };
    $.fn.destroyMfpFastClick = function () {
      $(this).off("touchstart" + ns + " click" + ns);
      if (supportsTouch) _window.off("touchmove" + ns + " touchend" + ns);
    };
  })();
  _checkInstance();
});
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!(function (t) {
  var e = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    slideZIndex: 50,
    wrapperClass: "bx-wrapper",
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    preventDefaultSwipeX: !0,
    preventDefaultSwipeY: !1,
    ariaLive: !0,
    ariaHidden: !0,
    keyboardEnabled: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    nextText: "Next",
    prevText: "Prev",
    nextSelector: null,
    prevSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "next",
    stopAutoOnClick: !1,
    autoHover: !1,
    autoDelay: 0,
    autoSlideForOnePage: !1,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: !1,
    onSliderLoad: function () {
      return !0;
    },
    onSlideBefore: function () {
      return !0;
    },
    onSlideAfter: function () {
      return !0;
    },
    onSlideNext: function () {
      return !0;
    },
    onSlidePrev: function () {
      return !0;
    },
    onSliderResize: function () {
      return !0;
    },
    onAutoChange: function () {
      return !0;
    },
  };
  t.fn.bxSlider = function (n) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          t(this).bxSlider(n);
        }),
        this
      );
    var s = {},
      o = this,
      r = t(window).width(),
      a = t(window).height();
    if (!t(o).data("bxSlider")) {
      var l = function () {
          t(o).data("bxSlider") ||
            ((s.settings = t.extend({}, e, n)),
            (s.settings.slideWidth = parseInt(s.settings.slideWidth)),
            (s.children = o.children(s.settings.slideSelector)),
            s.children.length < s.settings.minSlides &&
              (s.settings.minSlides = s.children.length),
            s.children.length < s.settings.maxSlides &&
              (s.settings.maxSlides = s.children.length),
            s.settings.randomStart &&
              (s.settings.startSlide = Math.floor(
                Math.random() * s.children.length
              )),
            (s.active = { index: s.settings.startSlide }),
            (s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1),
            s.carousel && (s.settings.preloadImages = "all"),
            (s.minThreshold =
              s.settings.minSlides * s.settings.slideWidth +
              (s.settings.minSlides - 1) * s.settings.slideMargin),
            (s.maxThreshold =
              s.settings.maxSlides * s.settings.slideWidth +
              (s.settings.maxSlides - 1) * s.settings.slideMargin),
            (s.working = !1),
            (s.controls = {}),
            (s.interval = null),
            (s.animProp = "vertical" === s.settings.mode ? "top" : "left"),
            (s.usingCSS =
              s.settings.useCSS &&
              "fade" !== s.settings.mode &&
              (function () {
                for (
                  var t = document.createElement("div"),
                    e = [
                      "WebkitPerspective",
                      "MozPerspective",
                      "OPerspective",
                      "msPerspective",
                    ],
                    i = 0;
                  i < e.length;
                  i++
                )
                  if (void 0 !== t.style[e[i]])
                    return (
                      (s.cssPrefix = e[i]
                        .replace("Perspective", "")
                        .toLowerCase()),
                      (s.animProp = "-" + s.cssPrefix + "-transform"),
                      !0
                    );
                return !1;
              })()),
            "vertical" === s.settings.mode &&
              (s.settings.maxSlides = s.settings.minSlides),
            o.data("origStyle", o.attr("style")),
            o.children(s.settings.slideSelector).each(function () {
              t(this).data("origStyle", t(this).attr("style"));
            }),
            d());
        },
        d = function () {
          var e = s.children.eq(s.settings.startSlide);
          o.wrap(
            '<div class="' +
              s.settings.wrapperClass +
              '"><div class="bx-viewport"></div></div>'
          ),
            (s.viewport = o.parent()),
            s.settings.ariaLive &&
              !s.settings.ticker &&
              s.viewport.attr("aria-live", "polite"),
            (s.loader = t('<div class="bx-loading" />')),
            s.viewport.prepend(s.loader),
            o.css({
              width:
                "horizontal" === s.settings.mode
                  ? 1e3 * s.children.length + 215 + "%"
                  : "auto",
              position: "relative",
            }),
            s.usingCSS && s.settings.easing
              ? o.css(
                  "-" + s.cssPrefix + "-transition-timing-function",
                  s.settings.easing
                )
              : s.settings.easing || (s.settings.easing = "swing"),
            s.viewport.css({
              width: "100%",
              overflow: "hidden",
              position: "relative",
            }),
            s.viewport.parent().css({ maxWidth: u() }),
            s.children.css({
              float: "horizontal" === s.settings.mode ? "left" : "none",
              listStyle: "none",
              position: "relative",
            }),
            s.children.css("width", h()),
            "horizontal" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginRight", s.settings.slideMargin),
            "vertical" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginBottom", s.settings.slideMargin),
            "fade" === s.settings.mode &&
              (s.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none",
              }),
              s.children
                .eq(s.settings.startSlide)
                .css({ zIndex: s.settings.slideZIndex, display: "block" })),
            (s.controls.el = t('<div class="bx-controls" />')),
            s.settings.captions && P(),
            (s.active.last = s.settings.startSlide === f() - 1),
            s.settings.video && o.fitVids(),
            ("all" === s.settings.preloadImages || s.settings.ticker) &&
              (e = s.children),
            s.settings.ticker
              ? (s.settings.pager = !1)
              : (s.settings.controls && C(),
                s.settings.auto && s.settings.autoControls && T(),
                s.settings.pager && w(),
                (s.settings.controls ||
                  s.settings.autoControls ||
                  s.settings.pager) &&
                  s.viewport.after(s.controls.el)),
            c(e, g);
        },
        c = function (e, i) {
          var n = e.find('img:not([src=""]), iframe').length,
            s = 0;
          if (0 === n) return void i();
          e.find('img:not([src=""]), iframe').each(function () {
            t(this)
              .one("load error", function () {
                ++s === n && i();
              })
              .each(function () {
                (this.complete || "" == this.src) && t(this).trigger("load");
              });
          });
        },
        g = function () {
          if (
            s.settings.infiniteLoop &&
            "fade" !== s.settings.mode &&
            !s.settings.ticker
          ) {
            var e =
                "vertical" === s.settings.mode
                  ? s.settings.minSlides
                  : s.settings.maxSlides,
              i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
              n = s.children.slice(-e).clone(!0).addClass("bx-clone");
            s.settings.ariaHidden &&
              (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)),
              o.append(i).prepend(n);
          }
          s.loader.remove(),
            m(),
            "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0),
            s.viewport.height(p()),
            o.redrawSlider(),
            s.settings.onSliderLoad.call(o, s.active.index),
            (s.initialized = !0),
            s.settings.responsive && t(window).bind("resize", U),
            s.settings.auto &&
              s.settings.autoStart &&
              (f() > 1 || s.settings.autoSlideForOnePage) &&
              L(),
            s.settings.ticker && O(),
            s.settings.pager && I(s.settings.startSlide),
            s.settings.controls && D(),
            s.settings.touchEnabled && !s.settings.ticker && Y(),
            s.settings.keyboardEnabled &&
              !s.settings.ticker &&
              t(document).keydown(X);
        },
        p = function () {
          var e = 0,
            n = t();
          if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
            if (s.carousel) {
              var o =
                1 === s.settings.moveSlides
                  ? s.active.index
                  : s.active.index * x();
              for (
                n = s.children.eq(o), i = 1;
                i <= s.settings.maxSlides - 1;
                i++
              )
                n =
                  o + i >= s.children.length
                    ? n.add(s.children.eq(i - 1))
                    : n.add(s.children.eq(o + i));
            } else n = s.children.eq(s.active.index);
          else n = s.children;
          return (
            "vertical" === s.settings.mode
              ? (n.each(function (i) {
                  e += t(this).outerHeight();
                }),
                s.settings.slideMargin > 0 &&
                  (e += s.settings.slideMargin * (s.settings.minSlides - 1)))
              : (e = Math.max.apply(
                  Math,
                  n
                    .map(function () {
                      return t(this).outerHeight(!1);
                    })
                    .get()
                )),
            "border-box" === s.viewport.css("box-sizing")
              ? (e +=
                  parseFloat(s.viewport.css("padding-top")) +
                  parseFloat(s.viewport.css("padding-bottom")) +
                  parseFloat(s.viewport.css("border-top-width")) +
                  parseFloat(s.viewport.css("border-bottom-width")))
              : "padding-box" === s.viewport.css("box-sizing") &&
                (e +=
                  parseFloat(s.viewport.css("padding-top")) +
                  parseFloat(s.viewport.css("padding-bottom"))),
            e
          );
        },
        u = function () {
          var t = "100%";
          return (
            s.settings.slideWidth > 0 &&
              (t =
                "horizontal" === s.settings.mode
                  ? s.settings.maxSlides * s.settings.slideWidth +
                    (s.settings.maxSlides - 1) * s.settings.slideMargin
                  : s.settings.slideWidth),
            t
          );
        },
        h = function () {
          var t = s.settings.slideWidth,
            e = s.viewport.width();
          if (
            0 === s.settings.slideWidth ||
            (s.settings.slideWidth > e && !s.carousel) ||
            "vertical" === s.settings.mode
          )
            t = e;
          else if (
            s.settings.maxSlides > 1 &&
            "horizontal" === s.settings.mode
          ) {
            if (e > s.maxThreshold) return t;
            e < s.minThreshold
              ? (t =
                  (e - s.settings.slideMargin * (s.settings.minSlides - 1)) /
                  s.settings.minSlides)
              : s.settings.shrinkItems &&
                (t = Math.floor(
                  (e + s.settings.slideMargin) /
                    Math.ceil(
                      (e + s.settings.slideMargin) /
                        (t + s.settings.slideMargin)
                    ) -
                    s.settings.slideMargin
                ));
          }
          return t;
        },
        v = function () {
          var t = 1,
            e = null;
          return (
            "horizontal" === s.settings.mode && s.settings.slideWidth > 0
              ? s.viewport.width() < s.minThreshold
                ? (t = s.settings.minSlides)
                : s.viewport.width() > s.maxThreshold
                ? (t = s.settings.maxSlides)
                : ((e = s.children.first().width() + s.settings.slideMargin),
                  (t =
                    Math.floor(
                      (s.viewport.width() + s.settings.slideMargin) / e
                    ) || 1))
              : "vertical" === s.settings.mode && (t = s.settings.minSlides),
            t
          );
        },
        f = function () {
          var t = 0,
            e = 0,
            i = 0;
          if (s.settings.moveSlides > 0) {
            if (!s.settings.infiniteLoop) {
              for (; e < s.children.length; )
                ++t,
                  (e = i + v()),
                  (i +=
                    s.settings.moveSlides <= v() ? s.settings.moveSlides : v());
              return i;
            }
            t = Math.ceil(s.children.length / x());
          } else t = Math.ceil(s.children.length / v());
          return t;
        },
        x = function () {
          return s.settings.moveSlides > 0 && s.settings.moveSlides <= v()
            ? s.settings.moveSlides
            : v();
        },
        m = function () {
          var t, e, i;
          s.children.length > s.settings.maxSlides &&
          s.active.last &&
          !s.settings.infiniteLoop
            ? "horizontal" === s.settings.mode
              ? ((e = s.children.last()),
                (t = e.position()),
                S(
                  -(t.left - (s.viewport.width() - e.outerWidth())),
                  "reset",
                  0
                ))
              : "vertical" === s.settings.mode &&
                ((i = s.children.length - s.settings.minSlides),
                (t = s.children.eq(i).position()),
                S(-t.top, "reset", 0))
            : ((t = s.children.eq(s.active.index * x()).position()),
              s.active.index === f() - 1 && (s.active.last = !0),
              void 0 !== t &&
                ("horizontal" === s.settings.mode
                  ? S(-t.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-t.top, "reset", 0)));
        },
        S = function (e, i, n, r) {
          var a, l;
          s.usingCSS
            ? ((l =
                "vertical" === s.settings.mode
                  ? "translate3d(0, " + e + "px, 0)"
                  : "translate3d(" + e + "px, 0, 0)"),
              o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"),
              "slide" === i
                ? (o.css(s.animProp, l),
                  0 !== n
                    ? o.bind(
                        "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                        function (e) {
                          t(e.target).is(o) &&
                            (o.unbind(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
                            ),
                            A());
                        }
                      )
                    : A())
                : "reset" === i
                ? o.css(s.animProp, l)
                : "ticker" === i &&
                  (o.css(
                    "-" + s.cssPrefix + "-transition-timing-function",
                    "linear"
                  ),
                  o.css(s.animProp, l),
                  0 !== n
                    ? o.bind(
                        "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                        function (e) {
                          t(e.target).is(o) &&
                            (o.unbind(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
                            ),
                            S(r.resetValue, "reset", 0),
                            F());
                        }
                      )
                    : (S(r.resetValue, "reset", 0), F())))
            : ((a = {}),
              (a[s.animProp] = e),
              "slide" === i
                ? o.animate(a, n, s.settings.easing, function () {
                    A();
                  })
                : "reset" === i
                ? o.css(s.animProp, e)
                : "ticker" === i &&
                  o.animate(a, n, "linear", function () {
                    S(r.resetValue, "reset", 0), F();
                  }));
        },
        b = function () {
          for (var e = "", i = "", n = f(), o = 0; o < n; o++)
            (i = ""),
              (s.settings.buildPager && t.isFunction(s.settings.buildPager)) ||
              s.settings.pagerCustom
                ? ((i = s.settings.buildPager(o)),
                  s.pagerEl.addClass("bx-custom-pager"))
                : ((i = o + 1), s.pagerEl.addClass("bx-default-pager")),
              (e +=
                '<div class="bx-pager-item"><a href="" data-slide-index="' +
                o +
                '" class="bx-pager-link">' +
                i +
                "</a></div>");
          s.pagerEl.html(e);
        },
        w = function () {
          s.settings.pagerCustom
            ? (s.pagerEl = t(s.settings.pagerCustom))
            : ((s.pagerEl = t('<div class="bx-pager" />')),
              s.settings.pagerSelector
                ? t(s.settings.pagerSelector).html(s.pagerEl)
                : s.controls.el.addClass("bx-has-pager").append(s.pagerEl),
              b()),
            s.pagerEl.on("click touchend", "a", z);
        },
        C = function () {
          (s.controls.next = t(
            '<a class="bx-next" href="">' + s.settings.nextText + "</a>"
          )),
            (s.controls.prev = t(
              '<a class="bx-prev" href="">' + s.settings.prevText + "</a>"
            )),
            s.controls.next.bind("click touchend", k),
            s.controls.prev.bind("click touchend", E),
            s.settings.nextSelector &&
              t(s.settings.nextSelector).append(s.controls.next),
            s.settings.prevSelector &&
              t(s.settings.prevSelector).append(s.controls.prev),
            s.settings.nextSelector ||
              s.settings.prevSelector ||
              ((s.controls.directionEl = t(
                '<div class="bx-controls-direction" />'
              )),
              s.controls.directionEl
                .append(s.controls.prev)
                .append(s.controls.next),
              s.controls.el
                .addClass("bx-has-controls-direction")
                .append(s.controls.directionEl));
        },
        T = function () {
          (s.controls.start = t(
            '<div class="bx-controls-auto-item"><a class="bx-start" href="">' +
              s.settings.startText +
              "</a></div>"
          )),
            (s.controls.stop = t(
              '<div class="bx-controls-auto-item"><a class="bx-stop" href="">' +
                s.settings.stopText +
                "</a></div>"
            )),
            (s.controls.autoEl = t('<div class="bx-controls-auto" />')),
            s.controls.autoEl.on("click", ".bx-start", M),
            s.controls.autoEl.on("click", ".bx-stop", y),
            s.settings.autoControlsCombine
              ? s.controls.autoEl.append(s.controls.start)
              : s.controls.autoEl
                  .append(s.controls.start)
                  .append(s.controls.stop),
            s.settings.autoControlsSelector
              ? t(s.settings.autoControlsSelector).html(s.controls.autoEl)
              : s.controls.el
                  .addClass("bx-has-controls-auto")
                  .append(s.controls.autoEl),
            q(s.settings.autoStart ? "stop" : "start");
        },
        P = function () {
          s.children.each(function (e) {
            var i = t(this).find("img:first").attr("title");
            void 0 !== i &&
              ("" + i).length &&
              t(this).append(
                '<div class="bx-caption"><span>' + i + "</span></div>"
              );
          });
        },
        k = function (t) {
          t.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(),
              o.goToNextSlide());
        },
        E = function (t) {
          t.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(),
              o.goToPrevSlide());
        },
        M = function (t) {
          o.startAuto(), t.preventDefault();
        },
        y = function (t) {
          o.stopAuto(), t.preventDefault();
        },
        z = function (e) {
          var i, n;
          e.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(),
              (i = t(e.currentTarget)),
              void 0 !== i.attr("data-slide-index") &&
                (n = parseInt(i.attr("data-slide-index"))) !== s.active.index &&
                o.goToSlide(n));
        },
        I = function (e) {
          var i = s.children.length;
          if ("short" === s.settings.pagerType)
            return (
              s.settings.maxSlides > 1 &&
                (i = Math.ceil(s.children.length / s.settings.maxSlides)),
              void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)
            );
          s.pagerEl.find("a").removeClass("active"),
            s.pagerEl.each(function (i, n) {
              t(n).find("a").eq(e).addClass("active");
            });
        },
        A = function () {
          if (s.settings.infiniteLoop) {
            var t = "";
            0 === s.active.index
              ? (t = s.children.eq(0).position())
              : s.active.index === f() - 1 && s.carousel
              ? (t = s.children.eq((f() - 1) * x()).position())
              : s.active.index === s.children.length - 1 &&
                (t = s.children.eq(s.children.length - 1).position()),
              t &&
                ("horizontal" === s.settings.mode
                  ? S(-t.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-t.top, "reset", 0));
          }
          (s.working = !1),
            s.settings.onSlideAfter.call(
              o,
              s.children.eq(s.active.index),
              s.oldIndex,
              s.active.index
            );
        },
        q = function (t) {
          s.settings.autoControlsCombine
            ? s.controls.autoEl.html(s.controls[t])
            : (s.controls.autoEl.find("a").removeClass("active"),
              s.controls.autoEl
                .find("a:not(.bx-" + t + ")")
                .addClass("active"));
        },
        D = function () {
          1 === f()
            ? (s.controls.prev.addClass("disabled"),
              s.controls.next.addClass("disabled"))
            : !s.settings.infiniteLoop &&
              s.settings.hideControlOnEnd &&
              (0 === s.active.index
                ? (s.controls.prev.addClass("disabled"),
                  s.controls.next.removeClass("disabled"))
                : s.active.index === f() - 1
                ? (s.controls.next.addClass("disabled"),
                  s.controls.prev.removeClass("disabled"))
                : (s.controls.prev.removeClass("disabled"),
                  s.controls.next.removeClass("disabled")));
        },
        H = function () {
          o.startAuto();
        },
        W = function () {
          o.stopAuto();
        },
        L = function () {
          if (s.settings.autoDelay > 0) {
            setTimeout(o.startAuto, s.settings.autoDelay);
          } else o.startAuto(), t(window).focus(H).blur(W);
          s.settings.autoHover &&
            o.hover(
              function () {
                s.interval && (o.stopAuto(!0), (s.autoPaused = !0));
              },
              function () {
                s.autoPaused && (o.startAuto(!0), (s.autoPaused = null));
              }
            );
        },
        O = function () {
          var e,
            i,
            n,
            r,
            a,
            l,
            d,
            c,
            g = 0;
          "next" === s.settings.autoDirection
            ? o.append(s.children.clone().addClass("bx-clone"))
            : (o.prepend(s.children.clone().addClass("bx-clone")),
              (e = s.children.first().position()),
              (g = "horizontal" === s.settings.mode ? -e.left : -e.top)),
            S(g, "reset", 0),
            (s.settings.pager = !1),
            (s.settings.controls = !1),
            (s.settings.autoControls = !1),
            s.settings.tickerHover &&
              (s.usingCSS
                ? ((r = "horizontal" === s.settings.mode ? 4 : 5),
                  s.viewport.hover(
                    function () {
                      (i = o.css("-" + s.cssPrefix + "-transform")),
                        (n = parseFloat(i.split(",")[r])),
                        S(n, "reset", 0);
                    },
                    function () {
                      (c = 0),
                        s.children.each(function (e) {
                          c +=
                            "horizontal" === s.settings.mode
                              ? t(this).outerWidth(!0)
                              : t(this).outerHeight(!0);
                        }),
                        (a = s.settings.speed / c),
                        (l = "horizontal" === s.settings.mode ? "left" : "top"),
                        (d = a * (c - Math.abs(parseInt(n)))),
                        F(d);
                    }
                  ))
                : s.viewport.hover(
                    function () {
                      o.stop();
                    },
                    function () {
                      (c = 0),
                        s.children.each(function (e) {
                          c +=
                            "horizontal" === s.settings.mode
                              ? t(this).outerWidth(!0)
                              : t(this).outerHeight(!0);
                        }),
                        (a = s.settings.speed / c),
                        (l = "horizontal" === s.settings.mode ? "left" : "top"),
                        (d = a * (c - Math.abs(parseInt(o.css(l))))),
                        F(d);
                    }
                  )),
            F();
        },
        F = function (t) {
          var e,
            i,
            n,
            r = t ? t : s.settings.speed,
            a = { left: 0, top: 0 },
            l = { left: 0, top: 0 };
          "next" === s.settings.autoDirection
            ? (a = o.find(".bx-clone").first().position())
            : (l = s.children.first().position()),
            (e = "horizontal" === s.settings.mode ? -a.left : -a.top),
            (i = "horizontal" === s.settings.mode ? -l.left : -l.top),
            (n = { resetValue: i }),
            S(e, "ticker", r, n);
        },
        N = function (e) {
          var i = t(window),
            n = { top: i.scrollTop(), left: i.scrollLeft() },
            s = e.offset();
          return (
            (n.right = n.left + i.width()),
            (n.bottom = n.top + i.height()),
            (s.right = s.left + e.outerWidth()),
            (s.bottom = s.top + e.outerHeight()),
            !(
              n.right < s.left ||
              n.left > s.right ||
              n.bottom < s.top ||
              n.top > s.bottom
            )
          );
        },
        X = function (t) {
          var e = document.activeElement.tagName.toLowerCase();
          if (null == new RegExp(e, ["i"]).exec("input|textarea") && N(o)) {
            if (39 === t.keyCode) return k(t), !1;
            if (37 === t.keyCode) return E(t), !1;
          }
        },
        Y = function () {
          (s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
            s.viewport.bind("touchstart MSPointerDown pointerdown", V),
            s.viewport.on("click", ".bxslider a", function (t) {
              s.viewport.hasClass("click-disabled") &&
                (t.preventDefault(), s.viewport.removeClass("click-disabled"));
            });
        },
        V = function (t) {
          if ((s.controls.el.addClass("disabled"), s.working))
            t.preventDefault(), s.controls.el.removeClass("disabled");
          else {
            s.touch.originalPos = o.position();
            var e = t.originalEvent,
              i = void 0 !== e.changedTouches ? e.changedTouches : [e];
            (s.touch.start.x = i[0].pageX),
              (s.touch.start.y = i[0].pageY),
              s.viewport.get(0).setPointerCapture &&
                ((s.pointerId = e.pointerId),
                s.viewport.get(0).setPointerCapture(s.pointerId)),
              s.viewport.bind("touchmove MSPointerMove pointermove", Z),
              s.viewport.bind("touchend MSPointerUp pointerup", B),
              s.viewport.bind("MSPointerCancel pointercancel", R);
          }
        },
        R = function (t) {
          S(s.touch.originalPos.left, "reset", 0),
            s.controls.el.removeClass("disabled"),
            s.viewport.unbind("MSPointerCancel pointercancel", R),
            s.viewport.unbind("touchmove MSPointerMove pointermove", Z),
            s.viewport.unbind("touchend MSPointerUp pointerup", B),
            s.viewport.get(0).releasePointerCapture &&
              s.viewport.get(0).releasePointerCapture(s.pointerId);
        },
        Z = function (t) {
          var e = t.originalEvent,
            i = void 0 !== e.changedTouches ? e.changedTouches : [e],
            n = Math.abs(i[0].pageX - s.touch.start.x),
            o = Math.abs(i[0].pageY - s.touch.start.y),
            r = 0,
            a = 0;
          3 * n > o && s.settings.preventDefaultSwipeX
            ? t.preventDefault()
            : 3 * o > n &&
              s.settings.preventDefaultSwipeY &&
              t.preventDefault(),
            "fade" !== s.settings.mode &&
              s.settings.oneToOneTouch &&
              ("horizontal" === s.settings.mode
                ? ((a = i[0].pageX - s.touch.start.x),
                  (r = s.touch.originalPos.left + a))
                : ((a = i[0].pageY - s.touch.start.y),
                  (r = s.touch.originalPos.top + a)),
              S(r, "reset", 0));
        },
        B = function (t) {
          s.viewport.unbind("touchmove MSPointerMove pointermove", Z),
            s.controls.el.removeClass("disabled");
          var e = t.originalEvent,
            i = void 0 !== e.changedTouches ? e.changedTouches : [e],
            n = 0,
            r = 0;
          (s.touch.end.x = i[0].pageX),
            (s.touch.end.y = i[0].pageY),
            "fade" === s.settings.mode
              ? (r = Math.abs(s.touch.start.x - s.touch.end.x)) >=
                  s.settings.swipeThreshold &&
                (s.touch.start.x > s.touch.end.x
                  ? o.goToNextSlide()
                  : o.goToPrevSlide(),
                o.stopAuto())
              : ("horizontal" === s.settings.mode
                  ? ((r = s.touch.end.x - s.touch.start.x),
                    (n = s.touch.originalPos.left))
                  : ((r = s.touch.end.y - s.touch.start.y),
                    (n = s.touch.originalPos.top)),
                !s.settings.infiniteLoop &&
                ((0 === s.active.index && r > 0) || (s.active.last && r < 0))
                  ? S(n, "reset", 200)
                  : Math.abs(r) >= s.settings.swipeThreshold
                  ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(),
                    o.stopAuto())
                  : S(n, "reset", 200)),
            s.viewport.unbind("touchend MSPointerUp pointerup", B),
            s.viewport.get(0).releasePointerCapture &&
              s.viewport.get(0).releasePointerCapture(s.pointerId);
        },
        U = function (e) {
          if (s.initialized)
            if (s.working) window.setTimeout(U, 10);
            else {
              var i = t(window).width(),
                n = t(window).height();
              (r === i && a === n) ||
                ((r = i),
                (a = n),
                o.redrawSlider(),
                s.settings.onSliderResize.call(o, s.active.index));
            }
        },
        j = function (t) {
          var e = v();
          s.settings.ariaHidden &&
            !s.settings.ticker &&
            (s.children.attr("aria-hidden", "true"),
            s.children.slice(t, t + e).attr("aria-hidden", "false"));
        },
        Q = function (t) {
          return t < 0
            ? s.settings.infiniteLoop
              ? f() - 1
              : s.active.index
            : t >= f()
            ? s.settings.infiniteLoop
              ? 0
              : s.active.index
            : t;
        };
      return (
        (o.goToSlide = function (e, i) {
          var n,
            r,
            a,
            l,
            d = !0,
            c = 0,
            g = { left: 0, top: 0 },
            u = null;
          if (
            ((s.oldIndex = s.active.index),
            (s.active.index = Q(e)),
            !s.working && s.active.index !== s.oldIndex)
          ) {
            if (
              ((s.working = !0),
              void 0 !==
                (d = s.settings.onSlideBefore.call(
                  o,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                )) && !d)
            )
              return (s.active.index = s.oldIndex), void (s.working = !1);
            "next" === i
              ? s.settings.onSlideNext.call(
                  o,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                ) || (d = !1)
              : "prev" === i &&
                (s.settings.onSlidePrev.call(
                  o,
                  s.children.eq(s.active.index),
                  s.oldIndex,
                  s.active.index
                ) ||
                  (d = !1)),
              (s.active.last = s.active.index >= f() - 1),
              (s.settings.pager || s.settings.pagerCustom) && I(s.active.index),
              s.settings.controls && D(),
              "fade" === s.settings.mode
                ? (s.settings.adaptiveHeight &&
                    s.viewport.height() !== p() &&
                    s.viewport.animate(
                      { height: p() },
                      s.settings.adaptiveHeightSpeed
                    ),
                  s.children
                    .filter(":visible")
                    .fadeOut(s.settings.speed)
                    .css({ zIndex: 0 }),
                  s.children
                    .eq(s.active.index)
                    .css("zIndex", s.settings.slideZIndex + 1)
                    .fadeIn(s.settings.speed, function () {
                      t(this).css("zIndex", s.settings.slideZIndex), A();
                    }))
                : (s.settings.adaptiveHeight &&
                    s.viewport.height() !== p() &&
                    s.viewport.animate(
                      { height: p() },
                      s.settings.adaptiveHeightSpeed
                    ),
                  !s.settings.infiniteLoop && s.carousel && s.active.last
                    ? "horizontal" === s.settings.mode
                      ? ((u = s.children.eq(s.children.length - 1)),
                        (g = u.position()),
                        (c = s.viewport.width() - u.outerWidth()))
                      : ((n = s.children.length - s.settings.minSlides),
                        (g = s.children.eq(n).position()))
                    : s.carousel && s.active.last && "prev" === i
                    ? ((r =
                        1 === s.settings.moveSlides
                          ? s.settings.maxSlides - x()
                          : (f() - 1) * x() -
                            (s.children.length - s.settings.maxSlides)),
                      (u = o.children(".bx-clone").eq(r)),
                      (g = u.position()))
                    : "next" === i && 0 === s.active.index
                    ? ((g = o
                        .find("> .bx-clone")
                        .eq(s.settings.maxSlides)
                        .position()),
                      (s.active.last = !1))
                    : e >= 0 &&
                      ((l = e * parseInt(x())),
                      (g = s.children.eq(l).position())),
                  void 0 !== g &&
                    ((a =
                      "horizontal" === s.settings.mode
                        ? -(g.left - c)
                        : -g.top),
                    S(a, "slide", s.settings.speed)),
                  (s.working = !1)),
              s.settings.ariaHidden && j(s.active.index * x());
          }
        }),
        (o.goToNextSlide = function () {
          if ((s.settings.infiniteLoop || !s.active.last) && 1 != s.working) {
            var t = parseInt(s.active.index) + 1;
            o.goToSlide(t, "next");
          }
        }),
        (o.goToPrevSlide = function () {
          if (
            (s.settings.infiniteLoop || 0 !== s.active.index) &&
            1 != s.working
          ) {
            var t = parseInt(s.active.index) - 1;
            o.goToSlide(t, "prev");
          }
        }),
        (o.startAuto = function (t) {
          s.interval ||
            ((s.interval = setInterval(function () {
              "next" === s.settings.autoDirection
                ? o.goToNextSlide()
                : o.goToPrevSlide();
            }, s.settings.pause)),
            s.settings.onAutoChange.call(o, !0),
            s.settings.autoControls && t !== !0 && q("stop"));
        }),
        (o.stopAuto = function (t) {
          s.interval &&
            (clearInterval(s.interval),
            (s.interval = null),
            s.settings.onAutoChange.call(o, !1),
            s.settings.autoControls && t !== !0 && q("start"));
        }),
        (o.getCurrentSlide = function () {
          return s.active.index;
        }),
        (o.getCurrentSlideElement = function () {
          return s.children.eq(s.active.index);
        }),
        (o.getSlideElement = function (t) {
          return s.children.eq(t);
        }),
        (o.getSlideCount = function () {
          return s.children.length;
        }),
        (o.isWorking = function () {
          return s.working;
        }),
        (o.redrawSlider = function () {
          s.children.add(o.find(".bx-clone")).outerWidth(h()),
            s.viewport.css("height", p()),
            s.settings.ticker || m(),
            s.active.last && (s.active.index = f() - 1),
            s.active.index >= f() && (s.active.last = !0),
            s.settings.pager &&
              !s.settings.pagerCustom &&
              (b(), I(s.active.index)),
            s.settings.ariaHidden && j(s.active.index * x());
        }),
        (o.destroySlider = function () {
          s.initialized &&
            ((s.initialized = !1),
            t(".bx-clone", this).remove(),
            s.children.each(function () {
              void 0 !== t(this).data("origStyle")
                ? t(this).attr("style", t(this).data("origStyle"))
                : t(this).removeAttr("style");
            }),
            void 0 !== t(this).data("origStyle")
              ? this.attr("style", t(this).data("origStyle"))
              : t(this).removeAttr("style"),
            t(this).unwrap().unwrap(),
            s.controls.el && s.controls.el.remove(),
            s.controls.next && s.controls.next.remove(),
            s.controls.prev && s.controls.prev.remove(),
            s.pagerEl &&
              s.settings.controls &&
              !s.settings.pagerCustom &&
              s.pagerEl.remove(),
            t(".bx-caption", this).remove(),
            s.controls.autoEl && s.controls.autoEl.remove(),
            clearInterval(s.interval),
            s.settings.responsive && t(window).unbind("resize", U),
            s.settings.keyboardEnabled && t(document).unbind("keydown", X),
            t(this).removeData("bxSlider"),
            t(window).off("blur", W).off("focus", H));
        }),
        (o.reloadSlider = function (e) {
          void 0 !== e && (n = e),
            o.destroySlider(),
            l(),
            t(o).data("bxSlider", this);
        }),
        l(),
        t(o).data("bxSlider", this),
        this
      );
    }
  };
})(jQuery);
/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    var _OldCookies = window.Cookies;
    var api = (window.Cookies = factory());
    api.noConflict = function () {
      window.Cookies = _OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (arguments.length > 1) {
        attributes = extend({ path: "/" }, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          var expires = new Date();
          expires.setMilliseconds(
            expires.getMilliseconds() + attributes.expires * 864e5
          );
          attributes.expires = expires;
        }
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        value = encodeURIComponent(String(value));
        value = value.replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        );
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        return (document.cookie = [
          key,
          "=",
          value,
          attributes.expires && "; expires=" + attributes.expires.toUTCString(),
          attributes.path && "; path=" + attributes.path,
          attributes.domain && "; domain=" + attributes.domain,
          attributes.secure ? "; secure" : "",
        ].join(""));
      }
      if (!key) {
        result = {};
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var name = parts[0].replace(rdecode, decodeURIComponent);
        var cookie = parts.slice(1).join("=");
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          cookie =
            (converter && converter(cookie, name)) ||
            cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }
      return result;
    }
    api.get = api.set = api;
    api.getJSON = function () {
      return api.apply({ json: true }, [].slice.call(arguments));
    };
    api.defaults = {};
    api.remove = function (key, attributes) {
      api(key, "", extend(attributes, { expires: -1 }));
    };
    api.withConverter = init;
    return api;
  }
  return init();
});
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.ClipboardJS = e())
    : (t.ClipboardJS = e());
})(this, function () {
  return (
    (o = {}),
    (r.m = n =
      [
        function (t, e) {
          t.exports = function (t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
              var n = t.hasAttribute("readonly");
              n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                (e = t.value);
            } else {
              t.hasAttribute("contenteditable") && t.focus();
              var o = window.getSelection(),
                r = document.createRange();
              r.selectNodeContents(t),
                o.removeAllRanges(),
                o.addRange(r),
                (e = o.toString());
            }
            return e;
          };
        },
        function (t, e) {
          function n() {}
          (n.prototype = {
            on: function (t, e, n) {
              var o = this.e || (this.e = {});
              return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
            },
            once: function (t, e, n) {
              var o = this;
              function r() {
                o.off(t, r), e.apply(n, arguments);
              }
              return (r._ = e), this.on(t, r, n);
            },
            emit: function (t) {
              for (
                var e = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[t] || []).slice(),
                  o = 0,
                  r = n.length;
                o < r;
                o++
              )
                n[o].fn.apply(n[o].ctx, e);
              return this;
            },
            off: function (t, e) {
              var n = this.e || (this.e = {}),
                o = n[t],
                r = [];
              if (o && e)
                for (var i = 0, a = o.length; i < a; i++)
                  o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
              return r.length ? (n[t] = r) : delete n[t], this;
            },
          }),
            (t.exports = n),
            (t.exports.TinyEmitter = n);
        },
        function (t, e, n) {
          var d = n(3),
            h = n(4);
          t.exports = function (t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!d.string(e))
              throw new TypeError("Second argument must be a String");
            if (!d.fn(n))
              throw new TypeError("Third argument must be a Function");
            if (d.node(t))
              return (
                (s = e),
                (f = n),
                (u = t).addEventListener(s, f),
                {
                  destroy: function () {
                    u.removeEventListener(s, f);
                  },
                }
              );
            if (d.nodeList(t))
              return (
                (a = t),
                (c = e),
                (l = n),
                Array.prototype.forEach.call(a, function (t) {
                  t.addEventListener(c, l);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(a, function (t) {
                      t.removeEventListener(c, l);
                    });
                  },
                }
              );
            if (d.string(t))
              return (o = t), (r = e), (i = n), h(document.body, o, r, i);
            throw new TypeError(
              "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
            );
            var o, r, i, a, c, l, u, s, f;
          };
        },
        function (t, n) {
          (n.node = function (t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
          }),
            (n.nodeList = function (t) {
              var e = Object.prototype.toString.call(t);
              return (
                void 0 !== t &&
                ("[object NodeList]" === e ||
                  "[object HTMLCollection]" === e) &&
                "length" in t &&
                (0 === t.length || n.node(t[0]))
              );
            }),
            (n.string = function (t) {
              return "string" == typeof t || t instanceof String;
            }),
            (n.fn = function (t) {
              return "[object Function]" === Object.prototype.toString.call(t);
            });
        },
        function (t, e, n) {
          var a = n(5);
          function i(t, e, n, o, r) {
            var i = function (e, n, t, o) {
              return function (t) {
                (t.delegateTarget = a(t.target, n)),
                  t.delegateTarget && o.call(e, t);
              };
            }.apply(this, arguments);
            return (
              t.addEventListener(n, i, r),
              {
                destroy: function () {
                  t.removeEventListener(n, i, r);
                },
              }
            );
          }
          t.exports = function (t, e, n, o, r) {
            return "function" == typeof t.addEventListener
              ? i.apply(null, arguments)
              : "function" == typeof n
              ? i.bind(null, document).apply(null, arguments)
              : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function (t) {
                  return i(t, e, n, o, r);
                }));
          };
        },
        function (t, e) {
          if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches =
              n.matchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector ||
              n.oMatchesSelector ||
              n.webkitMatchesSelector;
          }
          t.exports = function (t, e) {
            for (; t && 9 !== t.nodeType; ) {
              if ("function" == typeof t.matches && t.matches(e)) return t;
              t = t.parentNode;
            }
          };
        },
        function (t, e, n) {
          "use strict";
          n.r(e);
          var o = n(0),
            r = n.n(o),
            i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
          function a(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          function c(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
              this.resolveOptions(t),
              this.initSelection();
          }
          var l =
              ((function (t, e, n) {
                return e && a(t.prototype, e), n && a(t, n), t;
              })(c, [
                {
                  key: "resolveOptions",
                  value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : {};
                    (this.action = e.action),
                      (this.container = e.container),
                      (this.emitter = e.emitter),
                      (this.target = e.target),
                      (this.text = e.text),
                      (this.trigger = e.trigger),
                      (this.selectedText = "");
                  },
                },
                {
                  key: "initSelection",
                  value: function () {
                    this.text
                      ? this.selectFake()
                      : this.target && this.selectTarget();
                  },
                },
                {
                  key: "selectFake",
                  value: function () {
                    var t = this,
                      e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                      (this.fakeHandlerCallback = function () {
                        return t.removeFake();
                      }),
                      (this.fakeHandler =
                        this.container.addEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ) || !0),
                      (this.fakeElem = document.createElement("textarea")),
                      (this.fakeElem.style.fontSize = "12pt"),
                      (this.fakeElem.style.border = "0"),
                      (this.fakeElem.style.padding = "0"),
                      (this.fakeElem.style.margin = "0"),
                      (this.fakeElem.style.position = "absolute"),
                      (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                    var n =
                      window.pageYOffset || document.documentElement.scrollTop;
                    (this.fakeElem.style.top = n + "px"),
                      this.fakeElem.setAttribute("readonly", ""),
                      (this.fakeElem.value = this.text),
                      this.container.appendChild(this.fakeElem),
                      (this.selectedText = r()(this.fakeElem)),
                      this.copyText();
                  },
                },
                {
                  key: "removeFake",
                  value: function () {
                    this.fakeHandler &&
                      (this.container.removeEventListener(
                        "click",
                        this.fakeHandlerCallback
                      ),
                      (this.fakeHandler = null),
                      (this.fakeHandlerCallback = null)),
                      this.fakeElem &&
                        (this.container.removeChild(this.fakeElem),
                        (this.fakeElem = null));
                  },
                },
                {
                  key: "selectTarget",
                  value: function () {
                    (this.selectedText = r()(this.target)), this.copyText();
                  },
                },
                {
                  key: "copyText",
                  value: function () {
                    var e = void 0;
                    try {
                      e = document.execCommand(this.action);
                    } catch (t) {
                      e = !1;
                    }
                    this.handleResult(e);
                  },
                },
                {
                  key: "handleResult",
                  value: function (t) {
                    this.emitter.emit(t ? "success" : "error", {
                      action: this.action,
                      text: this.selectedText,
                      trigger: this.trigger,
                      clearSelection: this.clearSelection.bind(this),
                    });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    this.trigger && this.trigger.focus(),
                      document.activeElement.blur(),
                      window.getSelection().removeAllRanges();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.removeFake();
                  },
                },
                {
                  key: "action",
                  set: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : "copy";
                    if (
                      ((this._action = e),
                      "copy" !== this._action && "cut" !== this._action)
                    )
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                  },
                  get: function () {
                    return this._action;
                  },
                },
                {
                  key: "target",
                  set: function (t) {
                    if (void 0 !== t) {
                      if (
                        !t ||
                        "object" !== (void 0 === t ? "undefined" : i(t)) ||
                        1 !== t.nodeType
                      )
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === this.action &&
                        (t.hasAttribute("readonly") ||
                          t.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                      this._target = t;
                    }
                  },
                  get: function () {
                    return this._target;
                  },
                },
              ]),
              c),
            u = n(1),
            s = n.n(u),
            f = n(2),
            d = n.n(f),
            h =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            p = function (t, e, n) {
              return e && y(t.prototype, e), n && y(t, n), t;
            };
          function y(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          var m =
            ((function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(v, s.a),
            p(
              v,
              [
                {
                  key: "resolveOptions",
                  value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : {};
                    (this.action =
                      "function" == typeof e.action
                        ? e.action
                        : this.defaultAction),
                      (this.target =
                        "function" == typeof e.target
                          ? e.target
                          : this.defaultTarget),
                      (this.text =
                        "function" == typeof e.text
                          ? e.text
                          : this.defaultText),
                      (this.container =
                        "object" === h(e.container)
                          ? e.container
                          : document.body);
                  },
                },
                {
                  key: "listenClick",
                  value: function (t) {
                    var e = this;
                    this.listener = d()(t, "click", function (t) {
                      return e.onClick(t);
                    });
                  },
                },
                {
                  key: "onClick",
                  value: function (t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                      (this.clipboardAction = new l({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this,
                      }));
                  },
                },
                {
                  key: "defaultAction",
                  value: function (t) {
                    return b("action", t);
                  },
                },
                {
                  key: "defaultTarget",
                  value: function (t) {
                    var e = b("target", t);
                    if (e) return document.querySelector(e);
                  },
                },
                {
                  key: "defaultText",
                  value: function (t) {
                    return b("text", t);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.listener.destroy(),
                      this.clipboardAction &&
                        (this.clipboardAction.destroy(),
                        (this.clipboardAction = null));
                  },
                },
              ],
              [
                {
                  key: "isSupported",
                  value: function (t) {
                    var e =
                        0 < arguments.length && void 0 !== t
                          ? t
                          : ["copy", "cut"],
                      n = "string" == typeof e ? [e] : e,
                      o = !!document.queryCommandSupported;
                    return (
                      n.forEach(function (t) {
                        o = o && !!document.queryCommandSupported(t);
                      }),
                      o
                    );
                  },
                },
              ]
            ),
            v);
          function v(t, e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, v);
            var n = (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
            return n.resolveOptions(e), n.listenClick(t), n;
          }
          function b(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n);
          }
          e.default = m;
        },
      ]),
    (r.c = o),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 6)).default
  );
  function r(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  var n, o;
});
function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e());
})(this, function () {
  "use strict";
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    n = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    r = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1,
    },
    a = function (t, e) {
      var n,
        o = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: o },
        });
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: o }
        );
      }
      window.dispatchEvent(n);
    };
  var i = function (t, e) {
      return t.getAttribute("data-" + e);
    },
    s = function (t, e, n) {
      var o = "data-" + e;
      null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
    },
    c = function (t) {
      return "true" === i(t, "was-processed");
    },
    l = function (t, e) {
      return s(t, "ll-timeout", e);
    },
    u = function (t) {
      return i(t, "ll-timeout");
    },
    d = function (t, e) {
      t && t(e);
    },
    f = function (t, e) {
      (t._loadingCount += e),
        0 === t._elements.length &&
          0 === t._loadingCount &&
          d(t._settings.callback_finish);
    },
    _ = function (t) {
      for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
        "SOURCE" === e.tagName && n.push(e);
      return n;
    },
    v = function (t, e, n) {
      n && t.setAttribute(e, n);
    },
    g = function (t, e) {
      v(t, "sizes", i(t, e.data_sizes)),
        v(t, "srcset", i(t, e.data_srcset)),
        v(t, "src", i(t, e.data_src));
    },
    m = {
      IMG: function (t, e) {
        var n = t.parentNode;
        n &&
          "PICTURE" === n.tagName &&
          _(n).forEach(function (t) {
            g(t, e);
          });
        g(t, e);
      },
      IFRAME: function (t, e) {
        v(t, "src", i(t, e.data_src));
      },
      VIDEO: function (t, e) {
        _(t).forEach(function (t) {
          v(t, "src", i(t, e.data_src));
        }),
          v(t, "src", i(t, e.data_src)),
          t.load();
      },
    },
    b = function (t, e) {
      var n,
        o,
        r = e._settings,
        a = t.tagName,
        s = m[a];
      if (s)
        return (
          s(t, r),
          f(e, 1),
          void (e._elements =
            ((n = e._elements),
            (o = t),
            n.filter(function (t) {
              return t !== o;
            })))
        );
      !(function (t, e) {
        var n = i(t, e.data_src),
          o = i(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
          o && (t.style.backgroundImage = o);
      })(t, r);
    },
    h = function (t, e) {
      o ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
    },
    p = function (t, e, n) {
      t.addEventListener(e, n);
    },
    y = function (t, e, n) {
      t.removeEventListener(e, n);
    },
    E = function (t, e, n) {
      y(t, "load", e), y(t, "loadeddata", e), y(t, "error", n);
    },
    w = function (t, e, n) {
      var r = n._settings,
        a = e ? r.class_loaded : r.class_error,
        i = e ? r.callback_loaded : r.callback_error,
        s = t.target;
      !(function (t, e) {
        o
          ? t.classList.remove(e)
          : (t.className = t.className
              .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      })(s, r.class_loading),
        h(s, a),
        d(i, s),
        f(n, -1);
    },
    I = function (t, e) {
      var n = function n(r) {
          w(r, !0, e), E(t, n, o);
        },
        o = function o(r) {
          w(r, !1, e), E(t, n, o);
        };
      !(function (t, e, n) {
        p(t, "load", e), p(t, "loadeddata", e), p(t, "error", n);
      })(t, n, o);
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    A = function (t, e) {
      var n = e._observer;
      z(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
    },
    L = function (t) {
      var e = u(t);
      e && (clearTimeout(e), l(t, null));
    },
    x = function (t, e) {
      var n = e._settings.load_delay,
        o = u(t);
      o ||
        ((o = setTimeout(function () {
          A(t, e), L(t);
        }, n)),
        l(t, o));
    },
    z = function (t, e, n) {
      var o = e._settings;
      (!n && c(t)) ||
        (k.indexOf(t.tagName) > -1 && (I(t, e), h(t, o.class_loading)),
        b(t, e),
        (function (t) {
          s(t, "was-processed", "true");
        })(t),
        d(o.callback_reveal, t),
        d(o.callback_set, t));
    },
    O = function (t) {
      return (
        !!n &&
        ((t._observer = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              return (function (t) {
                return t.isIntersecting || t.intersectionRatio > 0;
              })(e)
                ? (function (t, e) {
                    var n = e._settings;
                    d(n.callback_enter, t), n.load_delay ? x(t, e) : A(t, e);
                  })(e.target, t)
                : (function (t, e) {
                    var n = e._settings;
                    d(n.callback_exit, t), n.load_delay && L(t);
                  })(e.target, t);
            });
          },
          {
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px",
          }
        )),
        !0)
      );
      var e;
    },
    N = ["IMG", "IFRAME"],
    C = function (t, e) {
      return (function (t) {
        return t.filter(function (t) {
          return !c(t);
        });
      })(
        ((n =
          t ||
          (function (t) {
            return t.container.querySelectorAll(t.elements_selector);
          })(e)),
        Array.prototype.slice.call(n))
      );
      var n;
    },
    M = function (t, e) {
      (this._settings = (function (t) {
        return _extends({}, r, t);
      })(t)),
        (this._loadingCount = 0),
        O(this),
        this.update(e);
    };
  return (
    (M.prototype = {
      update: function (t) {
        var n,
          o = this,
          r = this._settings;
        ((this._elements = C(t, r)), !e && this._observer)
          ? ((function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            })(r) &&
              ((n = this)._elements.forEach(function (t) {
                -1 !== N.indexOf(t.tagName) &&
                  (t.setAttribute("loading", "lazy"), z(t, n));
              }),
              (this._elements = C(t, r))),
            this._elements.forEach(function (t) {
              o._observer.observe(t);
            }))
          : this.loadAll();
      },
      destroy: function () {
        var t = this;
        this._observer &&
          (this._elements.forEach(function (e) {
            t._observer.unobserve(e);
          }),
          (this._observer = null)),
          (this._elements = null),
          (this._settings = null);
      },
      load: function (t, e) {
        z(t, this, e);
      },
      loadAll: function () {
        var t = this;
        this._elements.forEach(function (e) {
          A(e, t);
        });
      },
    }),
    t &&
      (function (t, e) {
        if (e)
          if (e.length) for (var n, o = 0; (n = e[o]); o += 1) a(t, n);
          else a(t, e);
      })(M, window.lazyLoadOptions),
    M
  );
});
//# sourceMappingURL=lazyload.min.js.map

!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  var e,
    t = [
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
      "touchenter",
      "touchend",
      "touchleave",
      "mouseout",
      "mouseleave",
      "mouseup",
      "mousedown",
      "mousemove",
      "mouseenter",
      "mousewheel",
      "mouseover",
    ];
  if (
    (function () {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e = !0;
          },
        });
        window.addEventListener("test", null, t),
          window.removeEventListener("test", null, t);
      } catch (e) {}
      return e;
    })()
  ) {
    var n = EventTarget.prototype.addEventListener;
    (e = n),
      (EventTarget.prototype.addEventListener = function (n, o, r) {
        var i,
          s = "object" == typeof r && null !== r,
          u = s ? r.capture : r;
        ((r = s
          ? (function (e) {
              var t = Object.getOwnPropertyDescriptor(e, "passive");
              return t && !0 !== t.writable && void 0 === t.set
                ? Object.assign({}, e)
                : e;
            })(r)
          : {}).passive =
          void 0 !== (i = r.passive) ? i : -1 !== t.indexOf(n) && !0),
          (r.capture = void 0 !== u && u),
          e.call(this, n, o, r);
      }),
      (EventTarget.prototype.addEventListener._original = e);
  }
});
function JLogin() {
  var inf_Email;
  var inf_EmailBloq;
  var Inf_CliIsLogado;
  var Callback1;
  var Callback2;
  this.inf_Email = "";
  this.inf_EmailBloq = false;
  this.Callback2 = "";
  this.Init = function () {
    selfBase2 = this;
    if (selfBase2.Callback2 != "") {
      Cookies.set("LoginDir", selfBase2.Callback2);
    } else {
      Cookies.set("LoginDir", "");
    }
    selfBase2.Carregar0();
  };
  this.Init2 = function () {
    selfBase2 = this;
    if (selfBase2.Callback2 != "") {
      Cookies.set("LoginDir", selfBase2.Callback2);
    } else {
      Cookies.set("LoginDir", "");
    }
    selfBase2.Carregar4();
  };
  this.Carregar0 = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form0_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar0_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar0_Events = function () {
    selfBase2 = this;
    $("#FLogin_BtnLogin1").click(function (e) {
      e.preventDefault();
      selfBase2.Carregar1();
    });
    $("#FLogin_BtnLogin2").click(function (e) {
      e.preventDefault();
      selfBase2.Carregar2();
    });
    $("#FLoginFForm1_BtnCadastro").click(function (e) {
      e.preventDefault();
      selfBase2.Carregar4();
    });
    $("#FLogin_Facebook").click(function (e) {
      e.preventDefault();
      var CheckJanela = window.open(
        "/hybridauth2/login.php?provider=Facebook",
        "LoginSocialFacebook",
        "height=450, width=550"
      );
      if (!CheckJanela) {
        window.location = "/hybridauth2/login.php?provider=Facebook";
      }
    });
    $("#FLogin_Google").click(function (e) {
      e.preventDefault();
      var CheckJanela = window.open(
        "/hybridauth2/login.php?provider=Google",
        "LoginSocialFacebook",
        "height=450, width=550"
      );
      if (!CheckJanela) {
        window.location = "/hybridauth2/login.php?provider=Google";
      }
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar").button("loading");
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data: "Acao=Form2_Enviar&" + $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar").button("reset");
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Inf_CliIsLogado = "S";
              selfBase2.Callback_Sucesso();
              break;
          }
        },
      });
      return false;
    });
    var $iW = $(window).innerWidth();
    if ($iW <= 767) {
      $("#PgModalColunaCenter").insertBefore("#PgModalColunaLeft");
    }
  };
  this.Carregar1 = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form1_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar1_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar1_Events = function () {
    selfBase2 = this;
    if (selfBase2.inf_Email != "") {
      $("#FLoginFForm1_Email").val(selfBase2.inf_Email);
    }
    if (selfBase2.inf_EmailBloq == true) {
      $("#FLoginFForm1_Email").attr("readonly", true);
    }
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar0();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      if ($("#FLoginFForm1_Email").val() != "") {
        selfBase2.inf_Email = $("#FLoginFForm1_Email").val();
      }
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data: "Acao=Form1_Enviar&" + $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Carregar1B();
              break;
          }
        },
      });
      return false;
    });
  };
  this.Carregar1B = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form1B_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar1B_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar1B_Events = function () {
    selfBase2 = this;
    $("#FLoginFForm1_Email").html(selfBase2.inf_Email);
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar0();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data:
          "Acao=Form1B_Enviar&Email=" +
          selfBase2.inf_Email +
          "&" +
          $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Inf_CliIsLogado = "S";
              selfBase2.Callback_Sucesso();
              break;
          }
        },
      });
      return false;
    });
  };
  this.Carregar2 = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form2_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar2_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar2_Events = function () {
    selfBase2 = this;
    if (selfBase2.inf_Email != "") {
      $("#FLoginFForm1_Email").val(selfBase2.inf_Email);
    }
    if (selfBase2.inf_EmailBloq == true) {
      $("#FLoginFForm1_Email").attr("readonly", true);
    }
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar0();
    });
    $(".FLogin_BtnRecuperarSenha").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar3();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      if ($("#FLoginFForm1_Email").val() != "") {
        selfBase2.inf_Email = $("#FLoginFForm1_Email").val();
      }
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data: "Acao=Form2_Enviar&" + $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Inf_CliIsLogado = "S";
              selfBase2.Callback_Sucesso();
              break;
          }
        },
      });
      return false;
    });
  };
  this.Carregar3 = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form3_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar3_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar3_Events = function () {
    selfBase2 = this;
    if (selfBase2.inf_Email != "") {
      $("#FLoginFForm1_Email").val(selfBase2.inf_Email);
    }
    if (selfBase2.inf_EmailBloq == true) {
      $("#FLoginFForm1_EmailBlc").hide();
    }
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar2();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      if ($("#FLoginFForm1_Email").val() != "") {
        selfBase2.inf_Email = $("#FLoginFForm1_Email").val();
      }
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data: "Acao=Form3_Enviar&" + $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Carregar3B();
              break;
          }
        },
      });
      return false;
    });
  };
  this.Carregar3B = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form3B_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar3B_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar3B_Events = function () {
    selfBase2 = this;
    $("#FLoginFForm1_Email").html(selfBase2.inf_Email);
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar0();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data:
          "Acao=Form3B_Enviar&Email=" +
          selfBase2.inf_Email +
          "&" +
          $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              selfBase2.Inf_CliIsLogado = "S";
              selfBase2.Callback_Sucesso();
              break;
          }
        },
      });
      return false;
    });
  };
  this.Carregar4 = function () {
    selfBase2 = this;
    $.magnificPopup.close();
    setTimeout(function () {
      $.magnificPopup.open({
        removalDelay: 0,
        items: {
          type: "ajax",
          src: "/Modulos/FLogin/Ajax.php?Acao=Form4_Carregar",
        },
        midClick: true,
        closeOnContentClick: false,
        closeOnBgClick: false,
        callbacks: {
          ajaxContentAdded: function () {
            selfBase2.Carregar4_Events();
          },
        },
      });
    }, 100);
  };
  this.Carregar4_Events = function () {
    selfBase2 = this;
    Utilitarios.CriarMascaras();
    $("#FLogin_BtnVoltar").click(function (e) {
      e.preventDefault();
      DadElemento = $(this);
      selfBase2.Carregar0();
    });
    $("#FLoginFForm1").submit(function () {
      $("#FLoginFForm1_BtnEnviar_B").hide();
      $("#FLoginFForm1_BtnEnviar_A").show();
      $.ajax({
        type: "POST",
        url: "/Modulos/FLogin/Ajax.php",
        data: "Acao=Form4_Enviar&" + $(this).serialize(),
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              $("#FLoginFForm1_BtnEnviar_A").hide();
              $("#FLoginFForm1_BtnEnviar_B").show();
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              if (AdsCn_Cadastro != "") {
                gtag("event", "conversion", {
                  send_to: AdsCn_Cadastro,
                  transaction_id: "",
                  event_callback: function () {
                    selfBase2.Inf_CliIsLogado = "S";
                    selfBase2.Callback_Sucesso();
                  },
                });
              } else {
                selfBase2.Inf_CliIsLogado = "S";
                selfBase2.Callback_Sucesso();
              }
              break;
          }
        },
      });
      return false;
    });
  };
  this.CheckLogin = function () {
    $.ajax({
      type: "POST",
      url: "/Modulos/FLogin/Ajax.php",
      data: "Acao=CheckLogin",
      success: function (msg) {
        Separar = msg.split("##");
        selfBase2.Inf_CliIsLogado = Separar[0];
        selfBase2.Callback_Sucesso();
      },
    });
  };
  this.MsgErro = function (Msg) {
    alert(Msg);
  };
  this.Callback_Sucesso = function () {
    selfBase2 = this;
    CliIsLogado = selfBase2.Inf_CliIsLogado;
    $.magnificPopup.close();
    if (typeof selfBase2.Callback1 === "function") {
      selfBase2.Callback1();
    }
  };
}
function CtrlSorteios() {
  var Codigo;
  var ValorCota;
  var QtdMaxNum;
  this.Codigo = 0;
  this.ValorCota = 0;
  this.QtdMaxNum = 0;
  this.Init = function () {
    this.Ctrl_Btns();
  };
  this.Ctrl_Btns = function () {
    var self = this;
    $("#ListNumeros .BoxNumero")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        DadElemento = $(this);
        DadCota = DadElemento.attr("data-cota");
        self.SelecionarCota(DadCota);
      });
    $("#BtnFiltrarNumeros .BtnFiltro")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        DadElemento = $(this);
        DadStatus = DadElemento.attr("data-status");
        self.FiltrarCotas(DadStatus);
      });
    $("#SortTotalizador #ListNumeros2 .BoxNumero")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        DadElemento = $(this);
        DadCota = DadElemento.attr("data-cota");
        self.SelecionarCota2(DadCota);
      });
    $("#SortTotalizadorB #ListNumeros2B .BoxNumero")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        DadElemento = $(this);
        DadCota = DadElemento.attr("data-cota");
        self.SelecionarCota2(DadCota);
      });
    $("#BtnFinalizar")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        self.Finalizar();
      });
    $("#BtnFinalizar2")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        self.Finalizar2();
      });
  };
  this.SelecionarCota = function (Cota) {
    var self = this;
    DadElemento = $("#ListNumeros #BoxNumero_" + Cota);
    DadStatus = DadElemento.attr("data-status");
    switch (DadStatus) {
      case "L":
        if (DadElemento.hasClass("Selecionado")) {
          DadElemento.removeClass("Selecionado");
        } else {
          TmpQtdSelecionados = parseInt(
            $("#ListNumeros .BoxNumero.Selecionado").length
          );
          if (TmpQtdSelecionados >= self.QtdMaxNum) {
            Util.Alerta(
              "",
              "M�ximo de " + self.QtdMaxNum + " cotas por Compra!",
              "info"
            );
          } else {
            DadElemento.addClass("Selecionado");
          }
        }
        self.Totalizador();
        self.Ctrl_Btns();
        break;
      case "R":
        Util.Alerta("", "Cota '" + Cota + "' esta Reservada!", "info");
        break;
      case "C":
        Util.Alerta("", "Cota '" + Cota + "' j� esta foi Comprada!", "info");
        break;
    }
  };
  this.SelecionarCota2 = function (Cota) {
    var self = this;
    DadElemento = $("#ListNumeros #BoxNumero_" + Cota);
    DadElemento.removeClass("Selecionado");
    self.Totalizador();
    self.Ctrl_Btns();
  };
  this.FiltrarCotas = function (Status) {
    var self = this;
    $("#ListNumeros .RowBoxNumero").hide();
    $("#ListNumeros .RowBoxNumero.Status_" + Status).show();
  };
  this.Totalizador = function () {
    var self = this;
    self.Totalizador1();
    self.Totalizador2();
  };
  this.Totalizador1 = function () {
    var self = this;
    DadElementos = $("#ListNumeros .BoxNumero.Selecionado");
    DadQtd = parseInt(DadElementos.length);
    DadValorTotal = DadQtd * self.ValorCota;
    InfText1 =
      DadQtd +
      "x R$ " +
      number_format(self.ValorCota, 2, ",", ".") +
      " = <b>R$ " +
      number_format(DadValorTotal, 2, ",", ".") +
      "</b>";
    InfText2 = "";
    InfText2 = InfText2 + "" + '<ul class="BlcNumeros2">' + "";
    DadElementos.each(function () {
      DadElemento2 = $(this);
      DadCota = DadElemento2.attr("data-cota");
      InfText2 =
        InfText2 +
        "" +
        "<li>" +
        '    <div class="BoxNumero" data-cota="' +
        DadCota +
        '">' +
        "        " +
        DadCota +
        "" +
        "    </div>" +
        "</li>" +
        "";
    });
    InfText2 = InfText2 + "" + "</ul>" + "";
    $("#SortTotalizador .InfTotal").html(InfText1);
    $("#SortTotalizador #ListNumeros2").html(InfText2);
    if (DadQtd == 0) {
      $("#SortTotalizador").hide();
    } else {
      $("#SortTotalizador").show();
    }
  };
  this.Totalizador2 = function () {
    var self = this;
    DadElementos = $("#ListNumeros .BoxNumero.Selecionado");
    DadQtd = parseInt(DadElementos.length);
    DadValorTotal = DadQtd * self.ValorCota;
    InfText1 =
      "<small>" +
      DadQtd +
      "x R$ " +
      number_format(self.ValorCota, 2, ",", ".") +
      " =</small> <b>R$ " +
      number_format(DadValorTotal, 2, ",", ".") +
      "</b>";
    InfText2 = "";
    InfText2 = InfText2 + "" + '<ul class="BlcNumeros3">' + "";
    DadElementos.each(function () {
      DadElemento2 = $(this);
      DadCota = DadElemento2.attr("data-cota");
      InfText2 =
        InfText2 +
        "" +
        "<li>" +
        '    <div class="BoxNumero" data-cota="' +
        DadCota +
        '">' +
        "        " +
        DadCota +
        "" +
        "    </div>" +
        "</li>" +
        "";
    });
    InfText2 = InfText2 + "" + "</ul>" + "";
    $("#SortTotalizadorB .InfTotal").html(InfText1);
    $("#SortTotalizadorB #ListNumeros2B").html(InfText2);
    if (DadQtd == 0) {
      $.magnificPopup.close();
    }
  };
  this.Finalizar = function () {
    var self = this;
    if (CliIsLogado == "S") {
      self.Finalizar_Executar();
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        self.Finalizar_Executar();
      };
      ObjJLogin.Init2(true);
    }
  };
  this.Finalizar_Executar = function () {
    var self = this;
    $.magnificPopup.open({
      removalDelay: 0,
      items: {
        type: "ajax",
        src: "/Ajax.php?Acao=SorteiosPedidos&Codigo=" + self.Codigo,
      },
      midClick: true,
      closeOnContentClick: false,
      closeOnBgClick: false,
    });
  };
  this.Finalizar2 = function () {
    var self = this;
    DadElementos = $("#ListNumeros .BoxNumero.Selecionado");
    DadQtd = parseInt(DadElementos.length);
    InfText1 = [];
    InfText2 = "";
    DadElementos.each(function () {
      DadElemento2 = $(this);
      DadCota = DadElemento2.attr("data-cota");
      InfText1.push(DadCota);
    });
    InfText2 = InfText1.join(",");
    if (InfText1.length == 0) {
      Util.Alerta("", "Selecione ao menos uma cota para comprar!", "info");
    } else {
      Util.Block2();
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data:
          "Acao=SorteiosPedidos2&Codigo=" + self.Codigo + "&Cotas=" + InfText2,
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO1":
              Util.UnBlock2();
              Util.Alerta("", Separar[1], "info");
              break;
            case "ERRO2":
              Util.UnBlock2();
              Util.Alerta("", Separar[1], "info");
              self.SelecionarCota2(Separar[2]);
              break;
            case "OK":
              window.location =
                "/SorteiosPagamento.php?Protocolo=" + Separar[1];
              break;
          }
        },
      });
    }
  };
}
function CtrlSorteios2() {
  var Codigo;
  var ValorCota;
  var QtdCotas;
  var QtdCotasL;
  var QtdMaxNum;
  this.Codigo = 0;
  this.ValorCota = 0;
  this.QtdCotas = 0;
  this.QtdCotasL = 0;
  this.QtdMaxNum = 0;
  this.Init = function () {
    this.Ctrl_Btns();
  };
  this.Ctrl_Btns = function () {
    var self = this;
    QtdMaxNum =
      self.QtdMaxNum > self.QtdCotasL ? self.QtdCotasL : self.QtdMaxNum;
    $("#BlcCompraRapida #QtdCotas").TouchSpin({
      initval: 0,
      min: 0,
      max: QtdMaxNum,
      step: 1,
    });
    $("#BlcCompraRapida #QtdCotas").change(function () {
      DadQuantidade = parseInt($(this).val());
      DadValorTotal = DadQuantidade * self.ValorCota;
      $("#BlcCompraRapida #TextValorTotal").html(
        "R$ " + number_format(DadValorTotal, 2, ",", ".")
      );
    });
    $("#BlcCompraRapida #BtnFinalizar")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        self.Finalizar();
      });
  };
  this.Finalizar = function () {
    var self = this;
    if (CliIsLogado == "S") {
      self.Finalizar_Executar();
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        self.Finalizar_Executar();
      };
      ObjJLogin.Init2(true);
    }
  };
  this.Finalizar_Executar = function () {
    var self = this;
    DadQuantidade = parseInt($("#BlcCompraRapida #QtdCotas").val());
    if (DadQuantidade == 0) {
      Util.Alerta("", "Preencha a Quantidade Desejada!", "info");
    } else {
      Util.Block("#BlcCompraRapida");
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data:
          "Acao=SorteiosPedidosRapido&Codigo=" +
          self.Codigo +
          "&Quantidade=" +
          DadQuantidade,
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              Util.UnBlock("#BlcCompraRapida");
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              window.location =
                "/SorteiosPagamento.php?Protocolo=" + Separar[1];
              break;
          }
        },
      });
    }
  };
}
function CtrlSorteios2B() {
  var Codigo;
  var ValorCota;
  var QtdCotas;
  var QtdCotasL;
  var QtdMaxNum;
  this.Codigo = 0;
  this.ValorCota = 0;
  this.QtdCotas = 0;
  this.QtdCotasL = 0;
  this.QtdMaxNum = 0;
  this.Init = function () {
    this.Ctrl_Btns();
  };
  this.Ctrl_Btns = function () {
    var self = this;
    QtdMaxNum =
      self.QtdMaxNum > self.QtdCotasL ? self.QtdCotasL : self.QtdMaxNum;
    $("#BlcCompraRapida #QtdCotas").TouchSpin({
      initval: 0,
      min: 0,
      max: QtdMaxNum,
      step: 1,
    });
    $("#BlcCompraRapida #QtdCotas").change(function () {
      DadQuantidade = parseInt($(this).val());
      DadValorTotal = DadQuantidade * self.ValorCota;
      if (ObjDescontos.hasOwnProperty(DadQuantidade)) {
        DadValorTotal = ObjDescontos[DadQuantidade];
      }
      $("#BlcCompraRapida #TextValorTotal").html(
        "R$ " + number_format(DadValorTotal, 2, ",", ".")
      );
    });
    $("#BlcCompraRapida #BtnFinalizar")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        self.Finalizar();
      });
    $("#BlcCompraRapida2 .BtnQtdAdd")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        DadElemento1 = $(this);
        DadQtdCotas = parseInt(DadElemento1.attr("data-qtdcotas"));
        DadValor = parseFloat(DadElemento1.attr("data-valor"));
        $("#BlcCompraRapida #QtdCotas").val(DadQtdCotas).change();
      });
  };
  this.Finalizar = function () {
    var self = this;
    if (CliIsLogado == "S") {
      self.Finalizar_Executar();
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        self.Finalizar_Executar();
      };
      ObjJLogin.Init2(true);
    }
  };
  this.Finalizar_Executar = function () {
    var self = this;
    DadQuantidade = parseInt($("#BlcCompraRapida #QtdCotas").val());
    if (DadQuantidade == 0) {
      Util.Alerta("", "Preencha a Quantidade Desejada!", "info");
    } else {
      Util.Block("#BlcCompraRapida");
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data:
          "Acao=SorteiosPedidosRapidoB&Codigo=" +
          self.Codigo +
          "&Quantidade=" +
          DadQuantidade,
        success: function (msg) {
          Separar = msg.split("##");
          switch (Separar[0]) {
            case "ERRO":
              Util.UnBlock("#BlcCompraRapida");
              Util.Alerta("", Separar[1], "info");
              break;
            case "OK":
              window.location =
                "/SorteiosPagamento.php?Protocolo=" + Separar[1];
              break;
          }
        },
      });
    }
  };
}
function mobileCheck() {
  var check = false;
  (function (a) {
    if (
      /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
function nl2br(str, is_xhtml) {
  var breakTag =
    is_xhtml || typeof is_xhtml === "undefined" ? "<br " + "/>" : "<br>";
  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + breakTag + "$2"
  );
}
function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, "g"), replace);
}
function trim(str, charlist) {
  var whitespace,
    l = 0,
    i = 0;
  str += "";
  if (!charlist) {
    whitespace =
      " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
  } else {
    charlist += "";
    whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1");
  }
  l = str.length;
  for (i = 0; i < l; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }
  l = str.length;
  for (i = l - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : "";
}
function number_format(number, decimals, dec_point, thousands_sep) {
  var n = number,
    prec = decimals;
  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec);
    return (Math.round(n * k) / k).toString();
  };
  n = !isFinite(+n) ? 0 : +n;
  prec = !isFinite(+prec) ? 0 : Math.abs(prec);
  var sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
  var dec = typeof dec_point === "undefined" ? "." : dec_point;
  var s = prec > 0 ? toFixedFix(n, prec) : toFixedFix(Math.round(n), prec);
  var abs = toFixedFix(Math.abs(n), prec);
  var _, i;
  if (abs >= 1000) {
    _ = abs.split(/\D/);
    i = _[0].length % 3 || 3;
    _[0] =
      s.slice(0, i + (n < 0)) + _[0].slice(i).replace(/(\d{3})/g, sep + "$1");
    s = _.join(dec);
  } else {
    s = s.replace(".", dec);
  }
  var decPos = s.indexOf(dec);
  if (prec >= 1 && decPos !== -1 && s.length - decPos - 1 < prec) {
    s += new Array(prec - (s.length - decPos - 1)).join(0) + "0";
  } else if (prec >= 1 && decPos === -1) {
    s += dec + new Array(prec).join(0) + "0";
  }
  return s;
}
function mktime() {
  var no = 0,
    i = 0,
    ma = 0,
    mb = 0,
    d = new Date(),
    dn = new Date(),
    argv = arguments,
    argc = argv.length;
  var dateManip = {
    0: function (tt) {
      return d.setHours(tt);
    },
    1: function (tt) {
      return d.setMinutes(tt);
    },
    2: function (tt) {
      var set = d.setSeconds(tt);
      mb = d.getDate() - dn.getDate();
      d.setDate(1);
      return set;
    },
    3: function (tt) {
      var set = d.setMonth(parseInt(tt, 10) - 1);
      ma = d.getFullYear() - dn.getFullYear();
      return set;
    },
    4: function (tt) {
      return d.setDate(tt + mb);
    },
    5: function (tt) {
      if (tt >= 0 && tt <= 69) {
        tt += 2000;
      } else if (tt >= 70 && tt <= 100) {
        tt += 1900;
      }
      return d.setFullYear(tt + ma);
    },
  };
  for (i = 0; i < argc; i++) {
    no = parseInt(argv[i] * 1, 10);
    if (isNaN(no)) {
      return false;
    } else {
      if (!dateManip[i](no)) {
        return false;
      }
    }
  }
  for (i = argc; i < 6; i++) {
    switch (i) {
      case 0:
        no = dn.getHours();
        break;
      case 1:
        no = dn.getMinutes();
        break;
      case 2:
        no = dn.getSeconds();
        break;
      case 3:
        no = dn.getMonth() + 1;
        break;
      case 4:
        no = dn.getDate();
        break;
      case 5:
        no = dn.getFullYear();
        break;
    }
    dateManip[i](no);
  }
  return Math.floor(d.getTime() / 1000);
}
var Utilitarios = {
  DesativaBotao: function (Form) {
    $("#" + Form + "_A").show();
    $("#" + Form + "_B").hide();
  },
  AtivaBotao: function (Form) {
    $("#" + Form + "_A").hide();
    $("#" + Form + "_B").show();
  },
  CriarMascaras: function () {
    $(".CampoCep").mask("00000-000");
    $(".CampoCPF").mask("000.000.000-00");
    $(".CampoCNPJ").mask("00.000.000/0000-00");
    $(".CampoData").mask("00/00/0000");
    $(".CampoDataHora").mask("00/00/0000 99:99");
    $(".CampoTelefone").mask("(00) 000000009");
    $(".CampoNumero").numeric();
  },
};
var Util = {
  Block: function (ID) {
    $(ID).block({ message: "<i class='fa fa-spinner fa-spin'></i>" });
  },
  UnBlock: function (ID) {
    $(ID).unblock();
  },
  Block2: function () {
    $.blockUI({ message: "<i class='fa fa-spinner fa-spin'></i>" });
  },
  UnBlock2: function () {
    $.unblockUI();
  },
  Alerta: function (Titulo, Mensagem, Tipo, Callback) {
    Callback = Callback || "";
    Tipo = Tipo || "info";
    if (Callback == "") {
      swal({ title: Titulo, text: Mensagem, type: Tipo });
    } else {
      swal({ title: Titulo, text: Mensagem, type: Tipo }, Callback);
    }
  },
  Confirmacao: function (Titulo, Mensagem, Tipo, Callback) {
    Callback = Callback || "";
    Tipo = Tipo || "info";
    if (Callback == "") {
      swal({
        title: Titulo,
        text: Mensagem,
        type: Tipo,
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Cancelar",
        closeOnConfirm: true,
      });
    } else {
      swal(
        {
          title: Titulo,
          text: Mensagem,
          type: Tipo,
          showCancelButton: true,
          confirmButtonText: "Sim",
          cancelButtonText: "Cancelar",
          closeOnConfirm: true,
        },
        Callback
      );
    }
  },
  ObrLoginCliente: function () {
    Util.Alerta("", "� necess�rio estar Logado!", "info", function () {
      window.location = "/Cliente/Base_Login.php";
    });
  },
  Prepara_CarregarCidades: function (CampoEstado, CampoCidade) {
    $("#" + CampoEstado).change(function () {
      ValorSel = $(this).val();
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data: "Acao=Util_CarregarCidades&TxtEstado=" + ValorSel,
        success: function (msg) {
          $("#" + CampoCidade).html(msg);
        },
      });
    });
  },
  Prepara_CarregarEndereco: function (
    CampoCEP,
    CampoEstado,
    CampoCidade,
    CampoLogradouro,
    CampoBairro,
    AcaoPos
  ) {
    $("#" + CampoCEP).change(function () {
      ValorSel = $(this).val();
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data: "Acao=Util_CarregarEndereco&CEP=" + ValorSel,
        success: function (msg) {
          Separa = msg.split("##");
          if (Separa[0] == "OK") {
            DadosGer = Separa[1];
            Separa2 = DadosGer.split("@@@@@@@");
            $("#" + CampoEstado).html(Separa2[0]);
            $("#" + CampoCidade).html(Separa2[1]);
            $("#" + CampoLogradouro).val(Separa2[3]);
            $("#" + CampoBairro).val(Separa2[2]);
            if (AcaoPos != undefined && AcaoPos != "") {
              eval(AcaoPos);
            }
          }
        },
      });
    });
  },
  Prepara_CarregarEndereco2: function (
    CampoCEP,
    CampoEstado,
    CampoCidade,
    CampoLogradouro,
    CampoBairro,
    AcaoPos
  ) {
    $("#" + CampoCEP).change(function () {
      ValorSel = $(this).val();
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data: "Acao=Util_CarregarEndereco2&CEP=" + ValorSel,
        success: function (msg) {
          Separa = msg.split("##");
          if (Separa[0] == "OK") {
            DadosGer = Separa[1];
            Separa2 = DadosGer.split("@@@@@@@");
            $("#" + CampoEstado).val(Separa2[0]);
            $("#" + CampoCidade).val(Separa2[1]);
            $("#" + CampoLogradouro).val(Separa2[3]);
            $("#" + CampoBairro).val(Separa2[2]);
            if (AcaoPos != undefined && AcaoPos != "") {
              eval(AcaoPos);
            }
          }
        },
      });
    });
  },
};
var Paginas = {
  PgContato: function () {
    $("#FFormContato1").submit(function () {
      if ($("#FFormContato1_Nome").val() == "") {
        Util.Alerta("", "Preencha o Campo 'Nome'!", "info");
        return false;
      }
      if ($("#FFormContato1_Email").val() == "") {
        Util.Alerta("", "Preencha o Campo 'E-mail'!", "info");
        return false;
      }
      if ($("#FFormContato1_Telefone").val() == "") {
        Util.Alerta("", "Preencha o Campo 'Telefone'!", "info");
        return false;
      }
      if ($("#FFormContato1_Mensagem").val() == "") {
        Util.Alerta("", "Preencha o Campo 'Mensagem'!", "info");
        return false;
      }
      $("#FFormContato1_BtnEnviar").button("loading");
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data: "Acao=EnviarContato&" + $(this).serialize(),
        success: function (msg) {
          $("#FFormContato1_BtnEnviar").button("reset");
          Separar = msg.split("##");
          if (Separar[0] == "OK") {
            if (AdsCn_Contato != "") {
              gtag("event", "conversion", {
                send_to: AdsCn_Contato,
                transaction_id: "",
                event_callback: function () {
                  Util.Alerta(
                    "Obrigado!",
                    "Seu Contato foi Enviado com Sucesso!",
                    "success",
                    function () {
                      window.location = "/";
                    }
                  );
                },
              });
            } else {
              Util.Alerta(
                "Obrigado!",
                "Seu Contato foi Enviado com Sucesso!",
                "success",
                function () {
                  window.location = "/";
                }
              );
            }
          } else {
            Util.Alerta("", Separar[1], "info");
          }
        },
      });
      return false;
    });
  },
  Newsletter: function () {
    $("#FTNewsletter_Form").submit(function () {
      if ($("#FFormNewsletter1_Nome").val() == "") {
        Util.Alerta("", "Preencha o Campo 'Nome'!", "info");
        return false;
      }
      if ($("#FFormNewsletter1_Email").val() == "") {
        Util.Alerta("", "Preencha o Campo 'E-mail'!", "info");
        return false;
      }
      $("#FTNewsletter_BtnEnviar").button("loading");
      $.ajax({
        type: "POST",
        url: "/Ajax.php",
        data: "Acao=NewsletterCadastro&" + $(this).serialize(),
        success: function (msg) {
          $("#FTNewsletter_BtnEnviar").button("reset");
          if (msg == "OK") {
            Util.Alerta(
              "",
              "Seu E-mail foi cadastrado com sucesso!",
              "success",
              function () {
                $("#FFormNewsletter1_Nome").val("");
                $("#FFormNewsletter1_Email").val("");
              }
            );
          } else {
            Util.Alerta("", msg, "info");
          }
        },
      });
      return false;
    });
  },
};
var appMaster = {
  banner: function () {
    $("#bxslider1").bxSlider({
      mode: "horizontal",
      speed: 500,
      infiniteLoop: true,
      responsive: true,
      pager: false,
      auto: true,
      pause: 6000,
    });
  },
  MagnificPopup_Image: function () {
    $(".zoom-image").magnificPopup({ type: "image" });
  },
  Popover1A: function (IDElemento) {
    if ($("body").width() <= 768) {
    } else {
      $(IDElemento).popover({
        placement: "bottom",
        trigger: "hover",
        html: true,
        template:
          '<div class="popover popover1A"><div class="popover-inner"><div class="popover-title"></div></div>',
      });
    }
  },
};
var appCliente = {
  ComprarCreditos: function () {
    if (CliIsLogado == "S") {
      window.location = "/Cliente/Creditos_Comprar.php";
    } else {
      Util.Alerta(
        "",
        "� necess�rio estar Logado para Comprar Cr�ditos!",
        "info",
        function () {
          ObjJLogin = new JLogin();
          ObjJLogin.Callback1 = function () {
            window.location = "/Cliente/Creditos_Comprar.php";
          };
          ObjJLogin.Init(true);
        }
      );
    }
  },
  Login: function () {
    if (CliIsLogado == "S") {
      window.location = "/Cliente/";
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        window.location = "/Cliente/";
      };
      ObjJLogin.Init(true);
    }
  },
  Cadastro: function () {
    if (CliIsLogado == "S") {
      window.location = "/Cliente/";
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        window.location = "/Cliente/";
      };
      ObjJLogin.Carregar4();
    }
  },
  RecuperarSenha: function () {
    if (CliIsLogado == "S") {
      window.location = "/Cliente/";
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Carregar1();
    }
  },
  PgCompras: function () {
    if (CliIsLogado == "S") {
      window.location = "/Cliente/Sorteios_Compras.php";
    } else {
      ObjJLogin = new JLogin();
      ObjJLogin.Callback1 = function () {
        window.location = "/Cliente/Sorteios_Compras.php";
      };
      ObjJLogin.Carregar0();
    }
  },
};
$(window).load(function () {
  $("#loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
  lazyLoadIns = new LazyLoad({ elements_selector: ".lazy" });
  Utilitarios.CriarMascaras();
  appMaster.Popover1A(".BlcPopover1A");
});
