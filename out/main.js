function print(n) {
    for (var i = 1; i <= n; i++) {
        var str = "";
        for (var x = 0; x < n - i; x++) {
            str += " ";
        }
        for (var y = 0; y < i; y++) {
            str += "**";
        }
        str = str.substring(0, str.length - 1);
        console.log(str);
    }
}
window.onload = function () {
    print(5);
};
//# sourceMappingURL=main.js.map