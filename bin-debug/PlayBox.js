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
        outer.graphics.lineStyle(10, 0x32CD32);
        outer.graphics.beginFill(0x32CD32, 0.5);
        outer.graphics.drawRect(50, 50, 400, 400);
        outer.graphics.endFill();
        this.addChild(outer);
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
