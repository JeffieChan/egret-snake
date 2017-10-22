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
var Playmusic = (function (_super) {
    __extends(Playmusic, _super);
    function Playmusic() {
        return _super.call(this) || this;
    }
    //加载背景音乐
    Playmusic.prototype.loadBackSound = function () {
        var sound = this._sound = RES.getRes('Chinese_Cute_Scene_mp3');
        var channel = this._channel = sound.play(0, -1);
    };
    //关闭背景音乐
    Playmusic.prototype.stopBackSound = function () {
        this._channel.stop();
    };
    //加载吃到的音效
    Playmusic.prototype.loadEatSound = function () {
        var eat_sound = RES.getRes('anniu-kehuan1_mp3');
        var eat_channel = eat_sound.play(0, 1);
    };
    return Playmusic;
}(egret.DisplayObjectContainer));
__reflect(Playmusic.prototype, "Playmusic");
