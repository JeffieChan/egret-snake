class PlayBox extends egret.DisplayObjectContainer {
    private textfield: egret.TextField;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        console.log(stageW)
        // 背景图
        let bg = this.createBitmapByName("timg_jpeg");
        bg.height = this.stage.height;
        this.addChild(bg);

        // 绘制方块
        let outer:egret.Shape = new egret.Shape();
        outer.graphics.lineStyle(10,0x32CD32)
        outer.graphics.beginFill(0x32CD32, 0.5);
        outer.graphics.drawRect(50,50,400,400);
        outer.graphics.endFill();
        this.addChild(outer);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}