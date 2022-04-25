function OnClick() {
    // console.log("Clicked.");
}

window.onload = () => {
    // マウス移動時のイベントをbodyに追加
    document.body.addEventListener("mousemove", function(e) {

        // 座標を取得
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        // ページ先頭を起点、screen, client(ブラウザ表示エリア), offcet(HTML要素)がある

        // Console出力
        // console.log("MousePosition(" + mouseX + "," + mouseY + ")");
    });
}