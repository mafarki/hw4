function startProcess() {
    var length;
    var width;
    var height;
    var i;
    var volume;

    for (i = 1; i <= 10; i++) {
        length = i + 2;
        width = i + 3;
        height = i + 4;
        volume = getVolume(length, width, height);

        if (volume >= 0 && volume <= 300) {
            document.write('Small Volume: ' + volume + '<br />');}
        else if (volume >= 301 && volume <= 600) {
            document.write('Medium Volume: ' + volume + '<br />');}
        else if (volume >= 601 && volume <= 1000) {
            document.write('Large Volume: ' + volume + ' <br />');}
        else if (volume >= 1001) {
                document.write('Extra Large Volume: ' + volume + '<br />');}
        else {
                document.write('work complete');}
}
}

function getVolume(length, width, height) {
    return length * width * height;
    }
