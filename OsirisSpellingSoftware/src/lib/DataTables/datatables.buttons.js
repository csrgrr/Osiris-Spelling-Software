/*!
 Buttons for DataTables 1.7.0
 ©2016-2021 SpryMedia Ltd - datatables.net/license
*/
(function (f) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (A) { return f(A, window, document) }) : "object" === typeof exports ? module.exports = function (A, y) { A || (A = window); y && y.fn.dataTable || (y = require("datatables.net")(A, y).$); return f(y, A, A.document) } : f(jQuery, window, document) })(function (f, A, y, t) {
    function E(a, b, c) { f.fn.animate ? a.stop().fadeIn(b, c) : (a.css("display", "block"), c && c.call(a)) } function F(a, b, c) { f.fn.animate ? a.stop().fadeOut(b, c) : (a.css("display", "none"), c && c.call(a)) }
    function H(a, b) { a = new q.Api(a); b = b ? b : a.init().buttons || q.defaults.buttons; return (new u(a, b)).container() } var q = f.fn.dataTable, M = 0, N = 0, z = q.ext.buttons, u = function (a, b) {
        if (!(this instanceof u)) return function (c) { return (new u(c, a)).container() }; "undefined" === typeof b && (b = {}); !0 === b && (b = {}); Array.isArray(b) && (b = { buttons: b }); this.c = f.extend(!0, {}, u.defaults, b); b.buttons && (this.c.buttons = b.buttons); this.s = { dt: new q.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + M++ }; this.dom = {
            container: f("<" + this.c.dom.container.tag +
                "/>").addClass(this.c.dom.container.className)
        }; this._constructor()
    }; f.extend(u.prototype, {
        action: function (a, b) { a = this._nodeToButton(a); if (b === t) return a.conf.action; a.conf.action = b; return this }, active: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.button.active; c = f(c.node); if (b === t) return c.hasClass(a); c.toggleClass(a, b === t ? !0 : b); return this }, add: function (a, b) {
            var c = this.s.buttons; if ("string" === typeof b) {
                b = b.split("-"); var d = this.s; c = 0; for (var e = b.length - 1; c < e; c++)d = d.buttons[1 * b[c]]; c = d.buttons;
                b = 1 * b[b.length - 1]
            } this._expandButton(c, a, d !== t, b); this._draw(); return this
        }, container: function () { return this.dom.container }, disable: function (a) { a = this._nodeToButton(a); f(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0); return this }, destroy: function () {
            f("body").off("keyup." + this.s.namespace); var a = this.s.buttons.slice(), b; var c = 0; for (b = a.length; c < b; c++)this.remove(a[c].node); this.dom.container.remove(); a = this.s.dt.settings()[0]; c = 0; for (b = a.length; c < b; c++)if (a.inst === this) {
                a.splice(c,
                    1); break
            } return this
        }, enable: function (a, b) { if (!1 === b) return this.disable(a); a = this._nodeToButton(a); f(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled"); return this }, name: function () { return this.c.name }, node: function (a) { if (!a) return this.dom.container; a = this._nodeToButton(a); return f(a.node) }, processing: function (a, b) {
            var c = this.s.dt, d = this._nodeToButton(a); if (b === t) return f(d.node).hasClass("processing"); f(d.node).toggleClass("processing", b); f(c.table().node()).triggerHandler("buttons-processing.dt",
                [b, c.button(a), c, f(a), d.conf]); return this
        }, remove: function (a) { var b = this._nodeToButton(a), c = this._nodeToHost(a), d = this.s.dt; if (b.buttons.length) for (var e = b.buttons.length - 1; 0 <= e; e--)this.remove(b.buttons[e].node); b.conf.destroy && b.conf.destroy.call(d.button(a), d, f(a), b.conf); this._removeKey(b.conf); f(b.node).remove(); a = f.inArray(b, c); c.splice(a, 1); return this }, text: function (a, b) {
            var c = this._nodeToButton(a); a = this.c.dom.collection.buttonLiner; a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
            var d = this.s.dt, e = f(c.node), h = function (m) { return "function" === typeof m ? m(d, e, c.conf) : m }; if (b === t) return h(c.conf.text); c.conf.text = b; a ? e.children(a).html(h(b)) : e.html(h(b)); return this
        }, _constructor: function () {
            var a = this, b = this.s.dt, c = b.settings()[0], d = this.c.buttons; c._buttons || (c._buttons = []); c._buttons.push({ inst: this, name: this.c.name }); for (var e = 0, h = d.length; e < h; e++)this.add(d[e]); b.on("destroy", function (m, g) { g === c && a.destroy() }); f("body").on("keyup." + this.s.namespace, function (m) {
                if (!y.activeElement ||
                    y.activeElement === y.body) { var g = String.fromCharCode(m.keyCode).toLowerCase(); -1 !== a.s.listenKeys.toLowerCase().indexOf(g) && a._keypress(g, m) }
            })
        }, _addKey: function (a) { a.key && (this.s.listenKeys += f.isPlainObject(a.key) ? a.key.key : a.key) }, _draw: function (a, b) { a || (a = this.dom.container, b = this.s.buttons); a.children().detach(); for (var c = 0, d = b.length; c < d; c++)a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons) }, _expandButton: function (a, b, c, d) {
            var e =
                this.s.dt, h = 0; b = Array.isArray(b) ? b : [b]; for (var m = 0, g = b.length; m < g; m++) { var l = this._resolveExtends(b[m]); if (l) if (Array.isArray(l)) this._expandButton(a, l, c, d); else { var k = this._buildButton(l, c); k && (d !== t && null !== d ? (a.splice(d, 0, k), d++) : a.push(k), k.conf.buttons && (k.collection = f("<" + this.c.dom.collection.tag + "/>"), k.conf._collection = k.collection, this._expandButton(k.buttons, k.conf.buttons, !0, d)), l.init && l.init.call(e.button(k.node), e, f(k.node), l), h++) } }
        }, _buildButton: function (a, b) {
            var c = this.c.dom.button,
            d = this.c.dom.buttonLiner, e = this.c.dom.collection, h = this.s.dt, m = function (n) { return "function" === typeof n ? n(h, k, a) : n }; b && e.button && (c = e.button); b && e.buttonLiner && (d = e.buttonLiner); if (a.available && !a.available(h, a)) return !1; var g = function (n, p, r, v) { v.action.call(p.button(r), n, p, r, v); f(p.table().node()).triggerHandler("buttons-action.dt", [p.button(r), p, r, v]) }; e = a.tag || c.tag; var l = a.clickBlurs === t ? !0 : a.clickBlurs, k = f("<" + e + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls",
                this.s.dt.table().node().id).on("click.dtb", function (n) { n.preventDefault(); !k.hasClass(c.disabled) && a.action && g(n, h, k, a); l && k.trigger("blur") }).on("keyup.dtb", function (n) { 13 === n.keyCode && !k.hasClass(c.disabled) && a.action && g(n, h, k, a) }); "a" === e.toLowerCase() && k.attr("href", "#"); "button" === e.toLowerCase() && k.attr("type", "button"); d.tag ? (e = f("<" + d.tag + "/>").html(m(a.text)).addClass(d.className), "a" === d.tag.toLowerCase() && e.attr("href", "#"), k.append(e)) : k.html(m(a.text)); !1 === a.enabled && k.addClass(c.disabled);
            a.className && k.addClass(a.className); a.titleAttr && k.attr("title", m(a.titleAttr)); a.attr && k.attr(a.attr); a.namespace || (a.namespace = ".dt-button-" + N++); d = (d = this.c.dom.buttonContainer) && d.tag ? f("<" + d.tag + "/>").addClass(d.className).append(k) : k; this._addKey(a); this.c.buttonCreated && (d = this.c.buttonCreated(a, d)); return { conf: a, node: k.get(0), inserter: d, buttons: [], inCollection: b, collection: null }
        }, _nodeToButton: function (a, b) {
            b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) {
                if (b[c].node === a) return b[c];
                if (b[c].buttons.length) { var e = this._nodeToButton(a, b[c].buttons); if (e) return e }
            }
        }, _nodeToHost: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b; if (b[c].buttons.length) { var e = this._nodeToHost(a, b[c].buttons); if (e) return e } } }, _keypress: function (a, b) {
            if (!b._buttonsHandled) {
                var c = function (d) {
                    for (var e = 0, h = d.length; e < h; e++) {
                        var m = d[e].conf, g = d[e].node; m.key && (m.key === a ? (b._buttonsHandled = !0, f(g).click()) : !f.isPlainObject(m.key) || m.key.key !== a || m.key.shiftKey &&
                            !b.shiftKey || m.key.altKey && !b.altKey || m.key.ctrlKey && !b.ctrlKey || m.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, f(g).click())); d[e].buttons.length && c(d[e].buttons)
                    }
                }; c(this.s.buttons)
            }
        }, _removeKey: function (a) { if (a.key) { var b = f.isPlainObject(a.key) ? a.key.key : a.key; a = this.s.listenKeys.split(""); b = f.inArray(b, a); a.splice(b, 1); this.s.listenKeys = a.join("") } }, _resolveExtends: function (a) {
            var b = this.s.dt, c, d = function (g) {
                for (var l = 0; !f.isPlainObject(g) && !Array.isArray(g);) {
                    if (g === t) return; if ("function" ===
                        typeof g) { if (g = g(b, a), !g) return !1 } else if ("string" === typeof g) { if (!z[g]) throw "Unknown button type: " + g; g = z[g] } l++; if (30 < l) throw "Buttons: Too many iterations";
                } return Array.isArray(g) ? g : f.extend({}, g)
            }; for (a = d(a); a && a.extend;) {
                if (!z[a.extend]) throw "Cannot extend unknown button type: " + a.extend; var e = d(z[a.extend]); if (Array.isArray(e)) return e; if (!e) return !1; var h = e.className; a = f.extend({}, e, a); h && a.className !== h && (a.className = h + " " + a.className); var m = a.postfixButtons; if (m) {
                    a.buttons || (a.buttons = []);
                    h = 0; for (c = m.length; h < c; h++)a.buttons.push(m[h]); a.postfixButtons = null
                } if (m = a.prefixButtons) { a.buttons || (a.buttons = []); h = 0; for (c = m.length; h < c; h++)a.buttons.splice(h, 0, m[h]); a.prefixButtons = null } a.extend = e.extend
            } return a
        }, _popover: function (a, b, c) {
            var d = this.c, e = f.extend({
                align: "button-left", autoClose: !1, background: !0, backgroundClassName: "dt-button-background", contentClassName: d.dom.collection.className, collectionLayout: "", collectionTitle: "", dropup: !1, fade: 400, rightAlignClassName: "dt-button-right",
                tag: d.dom.collection.tag
            }, c), h = b.node(), m = function () { F(f(".dt-button-collection"), e.fade, function () { f(this).detach() }); f(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false"); f("div.dt-button-background").off("click.dtb-collection"); u.background(!1, e.backgroundClassName, e.fade, h); f("body").off(".dtb-collection"); b.off("buttons-action.b-internal") }; !1 === a && m(); c = f(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()); c.length && (h = c.eq(0), m());
            c = f("<div/>").addClass("dt-button-collection").addClass(e.collectionLayout).css("display", "none"); a = f(a).addClass(e.contentClassName).attr("role", "menu").appendTo(c); h.attr("aria-expanded", "true"); h.parents("body")[0] !== y.body && (h = y.body.lastChild); e.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + e.collectionTitle + "</div>"); E(c.insertAfter(h), e.fade); d = f(b.table().container()); var g = c.css("position"); "dt-container" === e.align && (h = h.parent(), c.css("width", d.width())); if ("absolute" ===
                g && (c.hasClass(e.rightAlignClassName) || c.hasClass(e.leftAlignClassName) || "dt-container" === e.align)) {
                    var l = h.position(); c.css({ top: l.top + h.outerHeight(), left: l.left }); var k = c.outerHeight(), n = d.offset().top + d.height(), p = l.top + h.outerHeight() + k; n = p - n; p = l.top - k; var r = d.offset().top, v = l.top - k - 5; (n > r - p || e.dropup) && -v < r && c.css("top", v); l = d.offset().left; d = d.width(); d = l + d; g = c.offset().left; var x = c.width(); x = g + x; var w = h.offset().left, B = h.outerWidth(); B = w + B; w = 0; c.hasClass(e.rightAlignClassName) ? (w = B - x, l > g +
                        w && (g = l - (g + w), d -= x + w, w = g > d ? w + d : w + g)) : (w = l - g, d < x + w && (g = l - (g + w), d -= x + w, w = g > d ? w + d : w + g)); c.css("left", c.position().left + w)
            } else "absolute" === g ? (l = h.position(), c.css({ top: l.top + h.outerHeight(), left: l.left }), k = c.outerHeight(), g = h.offset().top, w = 0, w = h.offset().left, B = h.outerWidth(), B = w + B, g = c.offset().left, x = a.width(), x = g + x, v = l.top - k - 5, n = d.offset().top + d.height(), p = l.top + h.outerHeight() + k, n = p - n, p = l.top - k, r = d.offset().top, (n > r - p || e.dropup) && -v < r && c.css("top", v), w = "button-right" === e.align ? B - x : w - g, c.css("left",
                c.position().left + w)) : (g = c.height() / 2, g > f(A).height() / 2 && (g = f(A).height() / 2), c.css("marginTop", -1 * g)); e.background && u.background(!0, e.backgroundClassName, e.fade, h); f("div.dt-button-background").on("click.dtb-collection", function () { }); f("body").on("click.dtb-collection", function (C) { var I = f.fn.addBack ? "addBack" : "andSelf", J = f(C.target).parent()[0]; (!f(C.target).parents()[I]().filter(a).length && !f(J).hasClass("dt-buttons") || f(C.target).hasClass("dt-button-background")) && m() }).on("keyup.dtb-collection",
                    function (C) { 27 === C.keyCode && m() }); e.autoClose && setTimeout(function () { b.on("buttons-action.b-internal", function (C, I, J, O) { O[0] !== h[0] && m() }) }, 0); f(c).trigger("buttons-popover.dt")
        }
    }); u.background = function (a, b, c, d) { c === t && (c = 400); d || (d = y.body); a ? E(f("<div/>").addClass(b).css("display", "none").insertAfter(d), c) : F(f("div." + b), c, function () { f(this).removeClass(b).remove() }) }; u.instanceSelector = function (a, b) {
        if (a === t || null === a) return f.map(b, function (h) { return h.inst }); var c = [], d = f.map(b, function (h) { return h.name }),
            e = function (h) { if (Array.isArray(h)) for (var m = 0, g = h.length; m < g; m++)e(h[m]); else "string" === typeof h ? -1 !== h.indexOf(",") ? e(h.split(",")) : (h = f.inArray(h.trim(), d), -1 !== h && c.push(b[h].inst)) : "number" === typeof h && c.push(b[h].inst) }; e(a); return c
    }; u.buttonSelector = function (a, b) {
        for (var c = [], d = function (g, l, k) { for (var n, p, r = 0, v = l.length; r < v; r++)if (n = l[r]) p = k !== t ? k + r : r + "", g.push({ node: n.node, name: n.conf.name, idx: p }), n.buttons && d(g, n.buttons, p + "-") }, e = function (g, l) {
            var k, n = []; d(n, l.s.buttons); var p = f.map(n, function (r) { return r.node });
            if (Array.isArray(g) || g instanceof f) for (p = 0, k = g.length; p < k; p++)e(g[p], l); else if (null === g || g === t || "*" === g) for (p = 0, k = n.length; p < k; p++)c.push({ inst: l, node: n[p].node }); else if ("number" === typeof g) c.push({ inst: l, node: l.s.buttons[g].node }); else if ("string" === typeof g) if (-1 !== g.indexOf(",")) for (n = g.split(","), p = 0, k = n.length; p < k; p++)e(n[p].trim(), l); else if (g.match(/^\d+(\-\d+)*$/)) p = f.map(n, function (r) { return r.idx }), c.push({ inst: l, node: n[f.inArray(g, p)].node }); else if (-1 !== g.indexOf(":name")) for (g = g.replace(":name",
                ""), p = 0, k = n.length; p < k; p++)n[p].name === g && c.push({ inst: l, node: n[p].node }); else f(p).filter(g).each(function () { c.push({ inst: l, node: this }) }); else "object" === typeof g && g.nodeName && (n = f.inArray(g, p), -1 !== n && c.push({ inst: l, node: p[n] }))
        }, h = 0, m = a.length; h < m; h++)e(b, a[h]); return c
    }; u.stripData = function (a, b) {
        if ("string" !== typeof a) return a; a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""); a = a.replace(/<!\-\-.*?\-\->/g, ""); b.stripHtml && (a = a.replace(/<[^>]*>/g, "")); b.trim && (a = a.replace(/^\s+|\s+$/g,
            "")); b.stripNewlines && (a = a.replace(/\n/g, " ")); b.decodeEntities && (K.innerHTML = a, a = K.value); return a
    }; u.defaults = { buttons: ["copy", "excel", "csv", "pdf", "print"], name: "main", tabIndex: 0, dom: { container: { tag: "div", className: "dt-buttons" }, collection: { tag: "div", className: "" }, button: { tag: "button", className: "dt-button", active: "active", disabled: "disabled" }, buttonLiner: { tag: "span", className: "" } } }; u.version = "1.7.0"; f.extend(z, {
        collection: {
            text: function (a) { return a.i18n("buttons.collection", "Collection") }, className: "buttons-collection",
            init: function (a, b, c) { b.attr("aria-expanded", !1) }, action: function (a, b, c, d) { a.stopPropagation(); d._collection.parents("body").length ? this.popover(!1, d) : this.popover(d._collection, d) }, attr: { "aria-haspopup": !0 }
        }, copy: function (a, b) { if (z.copyHtml5) return "copyHtml5" }, csv: function (a, b) { if (z.csvHtml5 && z.csvHtml5.available(a, b)) return "csvHtml5" }, excel: function (a, b) { if (z.excelHtml5 && z.excelHtml5.available(a, b)) return "excelHtml5" }, pdf: function (a, b) { if (z.pdfHtml5 && z.pdfHtml5.available(a, b)) return "pdfHtml5" }, pageLength: function (a) {
            a =
            a.settings()[0].aLengthMenu; var b = [], c = []; if (Array.isArray(a[0])) b = a[0], c = a[1]; else for (var d = 0; d < a.length; d++) { var e = a[d]; f.isPlainObject(e) ? (b.push(e.value), c.push(e.label)) : (b.push(e), c.push(e)) } return {
                extend: "collection", text: function (h) { return h.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, h.page.len()) }, className: "buttons-page-length", autoClose: !0, buttons: f.map(b, function (h, m) {
                    return {
                        text: c[m], className: "button-page-length", action: function (g, l) { l.page.len(h).draw() }, init: function (g,
                            l, k) { var n = this; l = function () { n.active(g.page.len() === h) }; g.on("length.dt" + k.namespace, l); l() }, destroy: function (g, l, k) { g.off("length.dt" + k.namespace) }
                    }
                }), init: function (h, m, g) { var l = this; h.on("length.dt" + g.namespace, function () { l.text(g.text) }) }, destroy: function (h, m, g) { h.off("length.dt" + g.namespace) }
            }
        }
    }); q.Api.register("buttons()", function (a, b) {
        b === t && (b = a, a = t); this.selector.buttonGroup = a; var c = this.iterator(!0, "table", function (d) {
            if (d._buttons) return u.buttonSelector(u.instanceSelector(a, d._buttons),
                b)
        }, !0); c._groupSelector = a; return c
    }); q.Api.register("button()", function (a, b) { a = this.buttons(a, b); 1 < a.length && a.splice(1, a.length); return a }); q.Api.registerPlural("buttons().active()", "button().active()", function (a) { return a === t ? this.map(function (b) { return b.inst.active(b.node) }) : this.each(function (b) { b.inst.active(b.node, a) }) }); q.Api.registerPlural("buttons().action()", "button().action()", function (a) {
        return a === t ? this.map(function (b) { return b.inst.action(b.node) }) : this.each(function (b) {
            b.inst.action(b.node,
                a)
        })
    }); q.Api.register(["buttons().enable()", "button().enable()"], function (a) { return this.each(function (b) { b.inst.enable(b.node, a) }) }); q.Api.register(["buttons().disable()", "button().disable()"], function () { return this.each(function (a) { a.inst.disable(a.node) }) }); q.Api.registerPlural("buttons().nodes()", "button().node()", function () { var a = f(); f(this.each(function (b) { a = a.add(b.inst.node(b.node)) })); return a }); q.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
        return a ===
            t ? this.map(function (b) { return b.inst.processing(b.node) }) : this.each(function (b) { b.inst.processing(b.node, a) })
    }); q.Api.registerPlural("buttons().text()", "button().text()", function (a) { return a === t ? this.map(function (b) { return b.inst.text(b.node) }) : this.each(function (b) { b.inst.text(b.node, a) }) }); q.Api.registerPlural("buttons().trigger()", "button().trigger()", function () { return this.each(function (a) { a.inst.node(a.node).trigger("click") }) }); q.Api.register("button().popover()", function (a, b) {
        return this.map(function (c) {
            return c.inst._popover(a,
                this.button(this[0].node), b)
        })
    }); q.Api.register("buttons().containers()", function () { var a = f(), b = this._groupSelector; this.iterator(!0, "table", function (c) { if (c._buttons) { c = u.instanceSelector(b, c._buttons); for (var d = 0, e = c.length; d < e; d++)a = a.add(c[d].container()) } }); return a }); q.Api.register("buttons().container()", function () { return this.containers().eq(0) }); q.Api.register("button().add()", function (a, b) {
        var c = this.context; c.length && (c = u.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b,
            a)); return this.button(this._groupSelector, a)
    }); q.Api.register("buttons().destroy()", function () { this.pluck("inst").unique().each(function (a) { a.destroy() }); return this }); q.Api.registerPlural("buttons().remove()", "buttons().remove()", function () { this.each(function (a) { a.inst.remove(a.node) }); return this }); var D; q.Api.register("buttons.info()", function (a, b, c) {
        var d = this; if (!1 === a) return this.off("destroy.btn-info"), F(f("#datatables_buttons_info"), 400, function () { f(this).remove() }), clearTimeout(D), D = null,
            this; D && clearTimeout(D); f("#datatables_buttons_info").length && f("#datatables_buttons_info").remove(); a = a ? "<h2>" + a + "</h2>" : ""; E(f('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(f("<div/>")["string" === typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body")); c !== t && 0 !== c && (D = setTimeout(function () { d.buttons.info(!1) }, c)); this.on("destroy.btn-info", function () { d.buttons.info(!1) }); return this
    }); q.Api.register("buttons.exportData()", function (a) {
        if (this.context.length) return P(new q.Api(this.context[0]),
            a)
    }); q.Api.register("buttons.exportInfo()", function (a) {
        a || (a = {}); var b = a; var c = "*" === b.filename && "*" !== b.title && b.title !== t && null !== b.title && "" !== b.title ? b.title : b.filename; "function" === typeof c && (c = c()); c === t || null === c ? c = null : (-1 !== c.indexOf("*") && (c = c.replace("*", f("head > title").text()).trim()), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = G(b.extension)) || (b = ""), c += b); b = G(a.title); b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", f("head > title").text() || "Exported data") : b; return {
            filename: c,
            title: b, messageTop: L(this, a.message || a.messageTop, "top"), messageBottom: L(this, a.messageBottom, "bottom")
        }
    }); var G = function (a) { return null === a || a === t ? null : "function" === typeof a ? a() : a }, L = function (a, b, c) { b = G(b); if (null === b) return null; a = f("caption", a.table().container()).eq(0); return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b }, K = f("<textarea/>")[0], P = function (a, b) {
        var c = f.extend(!0, {}, {
            rows: null, columns: "", modifier: { search: "applied", order: "applied" }, orthogonal: "display", stripHtml: !0,
            stripNewlines: !0, decodeEntities: !0, trim: !0, format: { header: function (v) { return u.stripData(v, c) }, footer: function (v) { return u.stripData(v, c) }, body: function (v) { return u.stripData(v, c) } }, customizeData: null
        }, b); b = a.columns(c.columns).indexes().map(function (v) { var x = a.column(v).header(); return c.format.header(x.innerHTML, v, x) }).toArray(); var d = a.table().footer() ? a.columns(c.columns).indexes().map(function (v) { var x = a.column(v).footer(); return c.format.footer(x ? x.innerHTML : "", v, x) }).toArray() : null, e = f.extend({},
            c.modifier); a.select && "function" === typeof a.select.info && e.selected === t && a.rows(c.rows, f.extend({ selected: !0 }, e)).any() && f.extend(e, { selected: !0 }); e = a.rows(c.rows, e).indexes().toArray(); var h = a.cells(e, c.columns); e = h.render(c.orthogonal).toArray(); h = h.nodes().toArray(); for (var m = b.length, g = [], l = 0, k = 0, n = 0 < m ? e.length / m : 0; k < n; k++) { for (var p = [m], r = 0; r < m; r++)p[r] = c.format.body(e[l], k, r, h[l]), l++; g[k] = p } b = { header: b, footer: d, body: g }; c.customizeData && c.customizeData(b); return b
    }; f.fn.dataTable.Buttons = u;
    f.fn.DataTable.Buttons = u; f(y).on("init.dt plugin-init.dt", function (a, b) { "dt" === a.namespace && (a = b.oInit.buttons || q.defaults.buttons) && !b._buttons && (new u(b, a)).container() }); q.ext.feature.push({ fnInit: H, cFeature: "B" }); q.ext.features && q.ext.features.register("buttons", H); return u
});
