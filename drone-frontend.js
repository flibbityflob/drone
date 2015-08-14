function init() {
    tracker = initTracker("#example");
    tracking.track("#example .drone", tracker);

}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();

    TrackerUtils.addTrackingColor("#388645", "green", tracker);
    TrackerUtils.addTrackingColor("#AD3713", "magenta", tracker);
    TrackerUtils.addTrackingColor("#A9494A", "red", tracker);
    TrackerUtils.addTrackingColor("#C2BA35", "yellow", tracker);
    TrackerUtils.addTrackingColor("#055E87", "blue", tracker);
    TrackerUtils.startTrackingColors(tracker);

    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
        markColors(event.data, element);
    });

    return tracker;




}
function markColors(colors, element) {
    var canvas = $(element + " .canvas").get(0);
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, context.width, context.height);
    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
    }
}
function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}



window.addEventListener("load", init);

