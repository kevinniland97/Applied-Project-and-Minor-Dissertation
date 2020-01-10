function screenshot() {
    console.log("Screenshot captured")

    html2canvas(document.body, {
        onrendered: function (canvas) {
            canvas.toBlob(function (blob) {
                saveAs(blob, "screenshot.png");
            });
        }
    });
}