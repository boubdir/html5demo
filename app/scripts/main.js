"use strict";

(function($) {

function scaleToFill(videoTag) {
    var $video = $(videoTag),
        videoRatio = videoTag.videoWidth / videoTag.videoHeight,
        tagRatio = $video.width() / $video.height();

    videoRatio = videoRatio ? videoRatio : (1280 / 720);

    if (videoRatio < tagRatio) {
        $video.css('-webkit-transform', 'scaleX(' + tagRatio / videoRatio + ')');
    } else if (tagRatio < videoRatio) {
        $video.css('-webkit-transform', 'scaleY(' + videoRatio / tagRatio + ')');
    }
}

var video = document.getElementsByTagName('video')[0];

scaleToFill(video);

$(window).on('resize', function() {
    scaleToFill(video);
});

}(jQuery));