! function(e) {
    function r(e) {
        return e * Math.PI / 180
    }

    function t(t, a, s) {
        var o = e("#" + s + "canvas")[0],
            n = e("#" + s + "canvas"),
            i = o.getContext("2d"),
            l = o.width / 2,
            p = o.height / 2;
        i.beginPath(), i.arc(l, p, e(n).attr("data-radius"), -r(90), -r(90) + r(t / 100 * 360), !1), i.fillStyle = "transparent", i.fill(), i.lineWidth = e(n).attr("data-width"), i.strokeStyle = e(n).attr("data-stroke"), i.stroke(), i.closePath(), "true" == e(n).attr("data-text").toLocaleLowerCase() && e("#" + s + " .clProg").val(a + ("true" == e(n).attr("data-percent").toLocaleLowerCase() ? "%" : ""))
    }
    e.fn.circularloader = function(r) {
        function a() {
            h.beginPath(), h.arc(u, f, i, 0, 2 * Math.PI, !1), h.fillStyle = n.backgroundColor, h.fill(), h.lineWidth = l, h.strokeStyle = n.progressBarBackground, h.stroke(), h.closePath(), d > 0 && t(d, p, o)
        }
        var s = this[0],
            o = s.id;
        if (0 == e("#" + o + " canvas").length) {
            var n = e.extend({
                    backgroundColor: "#ffffff",
                    fontColor: "#000000",
                    fontSize: "40px",
                    radius: 70,
                    progressBarBackground: "#cdcdcd",
                    progressBarColor: "#aaaaaa",
                    progressBarWidth: 25,
                    progressPercent: 0,
                    progressValue: 0,
                    showText: !0,
                    title: ""
                }, r),
                i = parseInt(n.radius),
                l = parseInt(n.progressBarWidth),
                p = parseInt(n.progressValue) > 0 ? parseInt(n.progressValue) : parseInt(n.progressPercent),
                d = parseInt(n.progressPercent),
                c = "color:" + n.fontColor + ";font-size:" + parseInt(n.fontSize) + "px;width:" + 2 * (i + l) + "px;vertical-align:middle;position:relative;background-color:transparent;border:0 none;transform:translateY(-48%);-webkit-transform: translateY(-48%);-ms-transform: translateY(-48%);height:" + 2 * (i + l) + "px;margin-left:-" + 2 * (i + l) + "px;text-align:center;padding:0;" + (n.showText ? "" : "display:none;");
            e('<canvas data-width="' + l + '" data-radius="' + i + '" data-stroke="' + n.progressBarColor + '" data-text=' + n.showText + " data-percent=" + (void 0 == r.progressValue ? !0 : !1) + ' id="' + o + 'canvas" width=' + 2 * (i + l) + " height=" + 2 * (i + l) + "></canvas>").appendTo(s), e('<input class="clProg" style="' + c + '" value="' + p + (void 0 == r.progressValue ? "%" : "") + '"></input>').appendTo(s), "" == n.title ? e("#" + o).css("height", 2 * (i + l)) : (e("#" + o).css("height", 2 * (i + l) + 20), e("#" + o + "canvas").before("<div class='titleCircularLoader' style='height:19px;text-align:center;'>" + n.title + "</div>"), e(".titleCircularLoader").css("width", 2 * (i + l)));
            var g = e("#" + o + "canvas")[0],
                h = g.getContext("2d"),
                u = g.width / 2,
                f = g.height / 2;
            e("#" + o + "canvas").offset().left, e("#" + o + "canvas").offset().top;
            a()
        } else if (void 0 != r.progressPercent || void 0 != r.progressValue) {
            var d = 0,
                p = 0;
            d = void 0 == r.progressPercent ? parseInt(r.progressValue) > 100 ? 100 : parseInt(r.progressValue) : parseInt(r.progressPercent) > 100 ? 100 : parseInt(r.progressPercent), p = void 0 == r.progressValue ? parseInt(r.progressPercent) > 100 ? 100 : parseInt(r.progressPercent) : parseInt(r.progressValue), t(d, p, o)
        }
        return this
    }
}(jQuery);
