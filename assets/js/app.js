/* Google fonts */
var WebFontConfig = {
    google: {
        families: __config.gFonts.fonts
    },
    timeout: __config.gFonts.delay // Set the timeout to two seconds
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

/* Copyright */

function Copy() {
    console.log("%c Thief, don't steal! ", "background: #222; color: red; font-size: 30px");
    console.log("Developer: Vitalii P. | Get-Web.Site");
}

function calcTime(offset) {

    // create Date object for current location
    let d = new Date();

    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    let nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return nd;

}

try {
    if (typeof __config.eDate != "undefined" && __config.eDate.init &&
        typeof __config.eDate.expiryDate != "undefined") {
        let newDate = calcTime(__config.eDate.timeZone);
        let expiryDate = new Date(__config.eDate.expiryDate);
        if (expiryDate.getTime() > newDate.getTime()) {
            $('[data-counter-js]').countdown({
                until: expiryDate,
                format: __config.eDate.format || "YODHMS",
                layout: '<div class="gw-timer">' +
                    '{y<}<div class="gw-timer__item"><div class="gw-timer__amount">{yn}</div><div class="gw-timer__desc">{yl}</div></div>{y>}' +
                    '{o<}<div class="gw-timer__item"><div class="gw-timer__amount">{on}</div><div class="gw-timer__desc">{ol}</div></div>{o>}' +
                    '{d<}<div class="gw-timer__item"><div class="gw-timer__amount">{dnn}</div><div class="gw-timer__desc">{dl}</div></div>{d>}' +
                    '{h<}<div class="gw-timer__item"><div class="gw-timer__amount">{hnn}</div><div class="gw-timer__desc">{hl}</div></div>{h>}' +
                    '{m<}<div class="gw-timer__item"><div class="gw-timer__amount">{mnn}</div><div class="gw-timer__desc">{ml}</div></div>{m>}' +
                    '{s<}<div class="gw-timer__item"><div class="gw-timer__amount">{snn}</div><div class="gw-timer__desc">{sl}</div></div>{s>}' +
                    '</div>',
                timezone: __config.eDate.timeZone || "+3",
            });
        } else if (__config.eDate.endTimeMSG == "") {
            $('[data-counter-js]').remove();
        } else {
            $('[data-counter-js]').html('<div class="end-time">' + __config.eDate.endTimeMSG + '</div>');
        }
    } else {
        $('[data-counter-js]').remove();
    }
} catch (error) {
    console.log(error);
}