window.onload = function () {

// 	var blue = '#10FDDD';
	var l = Snap('#logo');
	var p = l.select('path');

	l.append(p);

// 	p.attr({
// 		fill: blue,
// 		stroke: '#0066CC',
// 	});

	setTimeout( function() {
		// modify this one line below, and see the result !
		var logoTitle = 'folding the future into reach for all';
		var logoRandom = '';
		var logoTitleContainer = l.text(0, '98%', '');
		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		logoTitleContainer.attr({
			fontSize: 120,
			fontFamily: 'Origram',
			fontWeight: '600',
// 			alignmentBaseline: 'baseline'
      // fontColor: blue,
		});

		function generateRandomTitle(i, logoRandom) {
			setTimeout( function() {
				logoTitleContainer.attr({ text: logoRandom });
			}, i*70 );
		}

		for( var i=0; i < logoTitle.length+1; i++ ) {
			logoRandom = logoTitle.substr(0, i);
			for( var j=i; j < logoTitle.length; j++ ) { 
				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
			}
			generateRandomTitle(i, logoRandom);
			logoRandom = '';
		}

	}, 500 );

}

function debounce(t, e, o) {
    function n(e) {
        var o = d
            , n = m;
        return d = m = void 0,
            y = e,
            h = t.apply(n, o);
    }
    function r(t) {
        return y = t,
            v = setTimeout(c, e),
            b ? n(t) : h;
    }
    function l(t) {
        var o = t - w
            , n = t - y
            , r = e - o;
        return E ? Math.min(r, p - n) : r;
    }
    function i(t) {
        var o = t - w
            , n = t - y;
        return void 0 === w || o >= e || o < 0 || E && n >= p;
    }
    function c() {
        var t = Date.now();
        return i(t) ? a(t) : void (v = setTimeout(c, l(t)));
    }
    function a(t) {
        return v = void 0,
            T && d ? n(t) : (d = m = void 0,
                h);
    }
    function s() {
        void 0 !== v && clearTimeout(v),
            y = 0,
            d = w = m = v = void 0;
    }
    function u() {
        return void 0 === v ? h : a(Date.now());
    }
    function f() {
        var t = Date.now()
            , o = i(t);
        if (d = arguments,
                m = this,
                w = t,
                o) {
            if (void 0 === v)
                return r(w);
            if (E)
                return v = setTimeout(c, e),
                    n(w);
        }
        return void 0 === v && (v = setTimeout(c, e)),
            h;
    }
    var d, m, p, h, v, w, g = "Must be a function", y = 0, b = !1, E = !1, T = !0;
    if ("function" != typeof t)
        throw new TypeError(g);
    return e = Number(e) || 0,
    "object" == typeof o && (b = !!o.leading,
        E = "maxWait"in o,
        p = E ? Math.max(Number(o.maxWait) || 0, e) : p,
        T = "trailing"in o ? !!o.trailing : T),
        f.cancel = s,
        f.flush = u,
        f;
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
        });
}
var parallax = function() {
        var t = document.getElementById("about")
            , e = document.getElementById("about-parallax-img")
            , o = window.scrollY + window.innerHeight - t.height
            , n = (t.offsetTop + t.height,
            o > t.offsetTop);
        n && (e.style.transform = "translateY(=50%)");
    }()
    , parallax = function() {
        function t() {
            var r = window.scrollY + window.innerHeight - o.clientHeight / 2
                , l = r > o.offsetTop;
            l && (percentFromBotttom = 200 * (r - o.offsetTop) / o.clientHeight,
            n < percentFromBotttom && (n = percentFromBotttom,
                e.style.transform = "translate3d(0,-" + n + "%,0)"),
                100 === n ? window.removeEventListener("scroll", t) : "");
        }
        var e = document.getElementById("about-parallax-img")
            , o = document.getElementById("about")
            , n = 0;
        window.addEventListener("scroll", t);
    }()
    , animatePin = function() {
        function t() {
            var t = window.scrollY + window.innerHeight
                , o = document.documentElement.offsetHeight;
            o - t <= 10 ? e.classList.add("footer__pin--enter") : e.classList.remove("footer__pin--enter");
        }
        var e = document.getElementById("footer-pin");
        window.addEventListener("scroll", throttle(t, 100));
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
                t.stopPropagation();
        }
        function e(t) {
            t.target !== t.currentTarget && (t.target.classList.value += " main-skills__svg--fill"),
                t.stopPropagation();
        }
        var o = document.getElementById("skills-grid")
            , n = new RegExp("(^| )main-skills__svg--fill($| )","g");
        o.addEventListener("mouseover", t, !1),
            o.addEventListener("mouseout", e, !1);
    }()
    , workGridAnimation = function() {
        var t = document.querySelectorAll(".main-work__item")
            , e = new RegExp("(^| )main-work__item--grow($| )","g")
            , o = 0
            , n = throttle(function() {
                Array.prototype.forEach.call(t, function(e) {
                    var l = window.scrollY - e.offsetTop;
                    l > -150 & window.innerWidth < 720 && e.className.indexOf("main-work__item--grow") > -1 && (r(e),
                    o >= t.length && window.removeEventListener("scroll", n));
                });
            }, 200)
            , r = throttle(function(t) {
                t.className = t.className.replace(e, " "),
                    o++;
            }, 1e3);
        window.addEventListener("scroll", n, !1);
    }()
    , checkForm = function() {
    function t() {
        "" === email.value || "" === message.value ? alert("Can't submit empty email/message") : form.submit();
    }
    message = document.getElementById("input-message"),
        email = document.getElementById("input-email"),
        inputBtn = document.getElementById("input-btn"),
        form = document.getElementById("about-form"),
        inputBtn.addEventListener("click", t);
}()
    , scrollToSections = function() {
        function t() {
            i.scrollIntoView({
                behavior: "smooth"
            });
        }
        function e() {
            c.scrollIntoView({
                behavior: "smooth"
            });
        }
        function o() {
            a.scrollIntoView({
                behavior: "smooth"
            });
        }
        var n = document.querySelector(".header__link-skills")
            , r = document.querySelector(".header__link-work")
            , l = document.querySelector(".header__link-about")
            , i = document.querySelector(".main-skills")
            , c = document.querySelector(".main-work")
            , a = document.querySelector(".main-about");
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
        function c(e) {
            var o, n, l, i = d(), a = (i - e.startTime) / u;
            a = a > 1 ? 1 : a,
                o = r(a),
                n = e.startX + (e.x - e.startX) * o,
                l = e.startY + (e.y - e.startY) * o,
                e.method.call(e.scrollable, n, l),
            n === e.x && l === e.y || t.requestAnimationFrame(c.bind(t, e))
        }
        function a(o, r, l) {
            var i, a, s, u, m = d();
            o === e.body ? (i = t,
                a = t.scrollX || t.pageXOffset,
                s = t.scrollY || t.pageYOffset,
                u = f.scroll) : (i = o,
                a = o.scrollLeft,
                s = o.scrollTop,
                u = n),
                c({
                    scrollable: i,
                    method: u,
                    startTime: m,
                    startX: a,
                    startY: s,
                    x: r,
                    y: l
                })
        }
        if (!("scrollBehavior"in e.documentElement.style)) {
            var s = t.HTMLElement || t.Element
                , u = 468
                , f = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elScroll: s.prototype.scroll || n,
                    scrollIntoView: s.prototype.scrollIntoView
                }
                , d = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
            t.scroll = t.scrollTo = function() {
                return l(arguments[0]) ? void f.scroll.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : void a.call(t, e.body, ~~arguments[0].left, ~~arguments[0].top)
            }
                ,
                t.scrollBy = function() {
                    return l(arguments[0]) ? void f.scrollBy.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : void a.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset))
                }
                ,
                s.prototype.scroll = s.prototype.scrollTo = function() {
                    if (l(arguments[0]))
                        return void f.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                    var t = arguments[0].left
                        , e = arguments[0].top;
                    a.call(this, this, "number" == typeof t ? t : this.scrollLeft, "number" == typeof e ? e : this.scrollTop)
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
                        return void f.scrollIntoView.call(this, arguments[0] || !0);
                    var o = i(this)
                        , n = o.getBoundingClientRect()
                        , r = this.getBoundingClientRect();
                    o !== e.body ? (a.call(this, o, o.scrollLeft + r.left - n.left, o.scrollTop + r.top - n.top),
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

// start Magical Underline thinger

// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
const getData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async(url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

// end Magical Underline thinger


/*** Play Background Video After loading a few frames ***/
// (function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
//  var video = document.getElementById("girls-code");

  /**
   * Check if video can play, and play it
   */
   /*
  video.addEventListener( "canplay", function() {
    video.play();
  });
})();
*/