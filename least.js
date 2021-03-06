! function(e) {
    e.fn.least = function(l) {
        var t = e.extend({
            random: !0,
            scrollToGallery: !0,
            HiDPI: !1
        }, l);
        return this.each(function() {
            function l(l, t, a) {
                var i = e('<figure class="close"></figure>'),
                    s = e('<img src="' + t + '"/>'),
                    r = e("li a");
                s.load(function() {
                    l.html(a.length ? "<article>" + a + "</article>" : ""), l.prepend(s).append(i).slideDown("slow"), r.removeClass("load")
                }), i.on("click", function() {
                    e(".least-preview").slideToggle("slow"), r.removeClass("active")
                })
            }
            if (e(this).find("li a").click(function(t) {
                    var a = e(this),
                        i = a.attr("href"),
                        s = e(".least-preview"),
                        r = s.children("img"),
                        n = a.attr("data-caption") || "";
                    return r.length && i === r.attr("src") ? (s.slideToggle("slow"), void a.toggleClass("active")) : (r.length ? (a.addClass("active"), e(".least-gallery li a.active").removeClass("active"), s.slideUp("slow", function() {
                        l(s, i, n)
                    })) : l(s, i, n), void a.addClass("load active"))
                }), t.random && e(".least-gallery").each(function() {
                    var l = e(this),
                        t = l.children("li");
                    t.sort(function() {
                        var e = parseInt(8 * Math.random(), null),
                            l = e % 4,
                            t = e > 2 ? 1 : -1;
                        return l * t
                    }).appendTo(l)
                }), t.scrollToGallery && e(this).find("li a").click(function(l) {
                    l.preventDefault(), e("html, body").animate({
                        scrollTop: e("#least").offset().top
                    }, 500)
                }), t.HiDPI && window.devicePixelRatio > 1)
                for (var a = e("#least img"), i = e("#least a"), s = 0; s < a.length && i.length; s++) {
                    var r = a[s].src,
                        n = i[s].href,
                        o = r.lastIndexOf("."),
                        c = n.lastIndexOf(".");
                    r = r.substr(0, o) + "@2x" + r.substr(o), n = n.substr(0, c) + "@2x" + n.substr(c), a[s].src = r, i[s].href = n
                }
        })
    }
}(jQuery);
//# sourceMappingURL=./least.min.map