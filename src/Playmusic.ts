
class Playmusic extends egret.DisplayObjectContainer {

    private _sound: egret.Sound;
    private _channel: egret.SoundChannel;
    constructor() {
        super();
    }

    //加载背景音乐
    public loadBackSound(): void {
        let sound: egret.Sound = this._sound = RES.getRes('Chinese_Cute_Scene_mp3');
        let channel: egret.SoundChannel = this._channel = sound.play(0,1);
    }

    //关闭背景音乐
    public stopBackSound(): void {
        this._channel.stop()
    }

    //加载吃到的音效
    public loadEatSound(): void {
        let eat_sound: egret.Sound = RES.getRes('playBackMusic');
        let eat_channel: egret.SoundChannel = eat_sound.play(0,1);
    }
    
}