function debounce(t, e, o) {
    function n(e) {
        var o = f
            , n = m;
        return f = m = void 0,
            y = e,
            h = t.apply(n, o)
    }
    function r(t) {
        return y = t,
            v = setTimeout(a, e),
            b ? n(t) : h
    }
    function l(t) {
        var o = t - g
            , n = t - y
            , r = e - o;
        return E ? Math.min(r, p - n) : r
    }
    function i(t) {
        var o = t - g
            , n = t - y;
        return void 0 === g || o >= e || o < 0 || E && n >= p
    }
    function a() {
        var t = Date.now();
        return i(t) ? c(t) : void (v = setTimeout(a, l(t)))
    }
    function c(t) {
        return v = void 0,
            B && f ? n(t) : (f = m = void 0,
                h)
    }
    function s() {
        void 0 !== v && clearTimeout(v),
            y = 0,
            f = g = m = v = void 0
    }
    function u() {
        return void 0 === v ? h : c(Date.now())
    }
    function d() {
        var t = Date.now()
            , o = i(t);
        if (f = arguments,
                m = this,
                g = t,
                o) {
            if (void 0 === v)
                return r(g);
            if (E)
                return v = setTimeout(a, e),
                    n(g)
        }
        return void 0 === v && (v = setTimeout(a, e)),
            h
    }
    var f, m, p, h, v, g, w = "Must be a function", y = 0, b = !1, E = !1, B = !0;
    if ("function" != typeof t)
        throw new TypeError(w);
    return e = Number(e) || 0,
    "object" == typeof o && (b = !!o.leading,
        E = "maxWait"in o,
        p = E ? Math.max(Number(o.maxWait) || 0, e) : p,
        B = "trailing"in o ? !!o.trailing : B),
        d.cancel = s,
        d.flush = u,
        d
}
function throttle(t, e, o) {
    var n = "Must be a function"
        , r = !0
        , l = !0;
    if ("function" != typeof t)
        throw new TypeError(n);
    return "object" == typeof o && (r = "leading"in o ? !!o.leading : r,
        l = "trailing"in o ? !!o.trailing : l),
        debounce(t, e, {
            leading: r,
            maxWait: e,
            trailing: l
        })
}
var parallax = function() {
    var t = document.getElementById("about")
        , e = document.getElementById("about-parallax-img")
        , o = window.scrollY + window.innerHeight - t.height
        , n = (t.offsetTop + t.height,
    o > t.offsetTop);
    n && (e.style.transform = "translateY(=50%)")
}()
    , parallax = function() {
    function t() {
        var r = window.scrollY + window.innerHeight - o.clientHeight / 2
            , l = r > o.offsetTop;
        l && (percentFromBotttom = 200 * (r - o.offsetTop) / o.clientHeight,
        n < percentFromBotttom && (n = percentFromBotttom,
            e.style.transform = "translate3d(0,-" + n + "%,0)"),
            100 === n ? window.removeEventListener("scroll", t) : "")
    }
    var e = document.getElementById("about-parallax-img")
        , o = document.getElementById("about")
        , n = 0;
    window.addEventListener("scroll", t)
}()
    , animatePin = function() {
    function t() {
        var t = window.scrollY + window.innerHeight
            , o = document.documentElement.offsetHeight;
        o - t <= 10 ? e.classList.add("footer__pin--enter") : e.classList.remove("footer__pin--enter")
    }
    var e = document.getElementById("footer-pin");
    window.addEventListener("scroll", throttle(t, 100))
}()
    , heroAnimation = function() {
    var t = document.getElementById("box-wrapper")
        , e = document.getElementById("right-hand")
        , o = document.getElementById("left-hand")
        , n = document.getElementById("hero")
        , r = throttle(function() {
        var l = window.scrollY + window.innerHeight - n.clientHeight / 2.4;
        l > n.offsetTop && (o.className += " main-hero__left-hand--move",
            e.className += " main-hero__right-hand--move",
            t.className += " hero__box--state-1",
            window.removeEventListener("scroll", r))
    }, 500);
    window.addEventListener("scroll", r, !1)
}()
    , svgHover = function() {
    function t(t) {
        t.target !== t.currentTarget && (t.target.classList.value = t.target.classList.value.replace(n, " ")),
            t.stopPropagation()
    }
    function e(t) {
        t.target !== t.currentTarget && (t.target.classList.value += " main-skills__svg--fill"),
            t.stopPropagation()
    }
    var o = document.getElementById("skills-grid")
        , n = new RegExp("(^| )main-skills__svg--fill($| )","g");
    o.addEventListener("mouseover", t, !1),
        o.addEventListener("mouseout", e, !1)
}()
    , workGridAnimation = function() {
    var t = document.querySelectorAll(".main-work__item")
        , e = new RegExp("(^| )main-work__item--grow($| )","g")
        , o = 0
        , n = throttle(function() {
        Array.prototype.forEach.call(t, function(e) {
            var l = window.scrollY - e.offsetTop;
            l > -150 & window.innerWidth < 720 && e.className.indexOf("main-work__item--grow") > -1 && (r(e),
            o >= t.length && window.removeEventListener("scroll", n))
        })
    }, 200)
        , r = throttle(function(t) {
        t.className = t.className.replace(e, " "),
            o++
    }, 1e3);
    window.addEventListener("scroll", n, !1)
}()
    , checkForm = function() {
    function t() {
        "" === email.value || "" === message.value ? alert("Sorry. I can't do that, Dave.") : form.submit()
    }
    message = document.getElementById("input-message"),
        email = document.getElementById("input-email"),
        inputBtn = document.getElementById("input-btn"),
        form = document.getElementById("about-form"),
        inputBtn.addEventListener("click", t)
}()
    , scroolToSections = function() {
    function t() {
        i.scrollIntoView({
            behavior: "smooth"
        })
    }
    function e() {
        a.scrollIntoView({
            behavior: "smooth"
        })
    }
    function o() {
        c.scrollIntoView({
            behavior: "smooth"
        })
    }
    var n = document.querySelector(".header__link-skills")
        , r = document.querySelector(".header__link-work")
        , l = document.querySelector(".header__link-about")
        , i = document.querySelector(".main-skills")
        , a = document.querySelector(".main-work")
        , c = document.querySelector(".main-about");
    n.addEventListener("click", t),
        r.addEventListener("click", e),
        l.addEventListener("click", o)
}();
!function(t, e, o) {
    "use strict";
    function n() {
        function n(t, e) {
            this.scrollLeft = t,
                this.scrollTop = e
        }
        function r(t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }
        function l(t) {
            if ("object" != typeof t || null === t || t.behavior === o || "auto" === t.behavior || "instant" === t.behavior)
                return !0;
            if ("object" == typeof t && "smooth" === t.behavior)
                return !1;
            throw new TypeError("behavior not valid")
        }
        function i(o) {
            var n, r, l;
            do
                o = o.parentNode,
                    n = o === e.body,
                    r = o.clientHeight < o.scrollHeight || o.clientWidth < o.scrollWidth,
                    l = "visible" === t.getComputedStyle(o, null).overflow;
            while (!n && (!r || l));return n = r = l = null,
                o
        }
        function a(e) {
            var o, n, l, i = f(), c = (i - e.startTime) / u;
            c = c > 1 ? 1 : c,
                o = r(c),
                n = e.startX + (e.x - e.startX) * o,
                l = e.startY + (e.y - e.startY) * o,
                e.method.call(e.scrollable, n, l),
            n === e.x && l === e.y || t.requestAnimationFrame(a.bind(t, e))
        }
        function c(o, r, l) {
            var i, c, s, u, m = f();
            o === e.body ? (i = t,
                c = t.scrollX || t.pageXOffset,
                s = t.scrollY || t.pageYOffset,
                u = d.scroll) : (i = o,
                c = o.scrollLeft,
                s = o.scrollTop,
                u = n),
                a({
                    scrollable: i,
                    method: u,
                    startTime: m,
                    startX: c,
                    startY: s,
                    x: r,
                    y: l
                })
        }
        if (!("scrollBehavior"in e.documentElement.style)) {
            var s = t.HTMLElement || t.Element
                , u = 468
                , d = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elScroll: s.prototype.scroll || n,
                scrollIntoView: s.prototype.scrollIntoView
            }
                , f = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
            t.scroll = t.scrollTo = function() {
                return l(arguments[0]) ? void d.scroll.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : void c.call(t, e.body, ~~arguments[0].left, ~~arguments[0].top)
            }
                ,
                t.scrollBy = function() {
                    return l(arguments[0]) ? void d.scrollBy.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : void c.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset))
                }
                ,
                s.prototype.scroll = s.prototype.scrollTo = function() {
                    if (l(arguments[0]))
                        return void d.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                    var t = arguments[0].left
                        , e = arguments[0].top;
                    c.call(this, this, "number" == typeof t ? t : this.scrollLeft, "number" == typeof e ? e : this.scrollTop)
                }
                ,
                s.prototype.scrollBy = function() {
                    var t = arguments[0];
                    "object" == typeof t ? this.scroll({
                        left: t.left + this.scrollLeft,
                        top: t.top + this.scrollTop,
                        behavior: t.behavior
                    }) : this.scroll(this.scrollLeft + t, this.scrollTop + arguments[1])
                }
                ,
                s.prototype.scrollIntoView = function() {
                    if (l(arguments[0]))
                        return void d.scrollIntoView.call(this, arguments[0] || !0);
                    var o = i(this)
                        , n = o.getBoundingClientRect()
                        , r = this.getBoundingClientRect();
                    o !== e.body ? (c.call(this, o, o.scrollLeft + r.left - n.left, o.scrollTop + r.top - n.top),
                        t.scrollBy({
                            left: n.left,
                            top: n.top,
                            behavior: "smooth"
                        })) : t.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    })
                }
        }
    }
    "object" == typeof exports ? module.exports = {
        polyfill: n
    } : n()
}(window, document);
