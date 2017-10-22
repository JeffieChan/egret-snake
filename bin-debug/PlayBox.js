var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PlayBox = (function (_super) {
    __extends(PlayBox, _super);
    function PlayBox() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    PlayBox.prototype.onAddToStage = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        console.log(stageW);
        // 背景图
        var bg = this.createBitmapByName("timg_jpeg");
        bg.height = this.stage.height;
        this.addChild(bg);
        // 绘制方块
        var outer = new egret.Shape();
        outer.graphics.lineStyle(10, 0x3cb371);
        outer.graphics.beginFill(0xffffff, 1);
        outer.graphics.drawRect(45, 45, 420, 420);
        outer.graphics.endFill();
        this.addChild(outer);
        // 绘制开始按钮
        var btn = new egret.Shape();
        btn.graphics.beginFill(0x00bbff, 1);
        btn.graphics.drawCircle(320, 550, 40);
        btn.graphics.endFill();
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameInit, this);
        // 向上按钮
        var up = new egret.Shape();
        up.graphics.beginFill(0x4169e1, 1);
        up.graphics.drawRoundRect(280, 650, 80, 80, 5);
        up.graphics.endFill();
        this.addChild(up);
        up.touchEnabled = true;
        up.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.fx = this.arr[1] - this.arr[0] == (this.n = -20) ? this.fx : this.n;
        }, this);
        // 向下按钮
        var down = new egret.Shape();
        down.graphics.beginFill(0x4169e1, 1);
        down.graphics.drawRoundRect(280, 850, 80, 80, 5);
        down.graphics.endFill();
        this.addChild(down);
        down.touchEnabled = true;
        down.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.fx = this.arr[1] - this.arr[0] == (this.n = 20) ? this.fx : this.n;
        }, this);
        // 向左按钮
        var left = new egret.Shape();
        left.graphics.beginFill(0x4169e1, 1);
        left.graphics.drawRoundRect(180, 750, 80, 80, 5);
        left.graphics.endFill();
        this.addChild(left);
        left.touchEnabled = true;
        left.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.fx = this.arr[1] - this.arr[0] == (this.n = -1) ? this.fx : this.n;
        }, this);
        // 向右按钮
        var right = new egret.Shape();
        right.graphics.beginFill(0x4169e1, 1);
        right.graphics.drawRoundRect(380, 750, 80, 80, 5);
        right.graphics.endFill();
        this.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.fx = this.arr[1] - this.arr[0] == (this.n = 1) ? this.fx : this.n;
        }, this);
    };
    PlayBox.prototype.gameInit = function () {
        console.log('游戏开始');
        this.arr = [42, 41];
        this.dz = 43;
        this.fx = 1;
        this.snakeInit();
    };
    PlayBox.prototype.snakeInit = function () {
        var _this = this;
        this.arr.unshift(this.n = this.arr[0] + this.fx);
        if (this.arr.indexOf(this.n, 1) > 0 || this.n < 0 || this.n > 399 || this.fx == 1 && this.n % 20 == 0 || this.fx == -1 && this.n % 20 == 19) {
            return alert('over');
        }
        this.drawRectItem(this.n, 0x000000, 1);
        if (this.n == this.dz) {
            this.musicInt = new Playmusic();
            this.musicInt.loadEatSound();
            while (this.arr.indexOf(this.dz = ~~(Math.random() * 400)) >= 0)
                ;
            this.drawRectItem(this.dz, 0xee82ee, 1);
        }
        else {
            this.drawRectItem(this.arr.pop(), 0xffffff, 1);
        }
        setTimeout(function () { return _this.snakeInit(); }, 500);
    };
    PlayBox.prototype.drawRectItem = function (index, color, opacity) {
        // 绘制方块
        var x = index % 20 * 20 + 50 + 1;
        var y = ~~(index / 20) * 20 + 50 + 1;
        var rect = new egret.Shape();
        rect.graphics.beginFill(color, opacity);
        rect.graphics.drawRect(x, y, 18, 18);
        rect.graphics.endFill();
        this.addChild(rect);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    PlayBox.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return PlayBox;
}(egret.DisplayObjectContainer));
__reflect(PlayBox.prototype, "PlayBox");
