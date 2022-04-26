class bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const body = document.getElementById("body");
const bullet_parent = document.getElementById("bullets");

function InstantiateBullet() {
    let div_element = document.createElement("div");
    div_element.textContent = "bullet";

    bullets.appendChild(div_element);
}

function OnClick() {
    InstantiateBullet();
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