class PlayBox extends egret.DisplayObjectContainer {
    private textfield: egret.TextField;
    private arr;
    private dz: number;
    private fx: number;
    private n: number;
    private musicInt: Playmusic;
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
        outer.graphics.lineStyle(10,0x3cb371)
        outer.graphics.beginFill(0xffffff, 1);
        outer.graphics.drawRect(45,45,550,550);
        outer.graphics.endFill();
        this.addChild(outer);

        // 绘制开始按钮
        let btn: egret.Shape = new egret.Shape();
        btn.graphics.beginFill(0x00bbff, 1);
        btn.graphics.drawCircle(stageW/2,650,40);
        btn.graphics.endFill();
        this.addChild(btn);

        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameInit, this);

        // 向上按钮
        let up: egret.Shape = new egret.Shape();
        up.graphics.beginFill(0x4169e1, 1);
        up.graphics.drawRoundRect(stageW/2-40,750,80,80,5)
        up.graphics.endFill();
        this.addChild(up);
        up.touchEnabled = true;
        up.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
            this.fx = this.arr[1] - this.arr[0] == (this.n = -27) ? this.fx : this.n;
        }, this)
        // 向下按钮
        let down: egret.Shape = new egret.Shape();
        down.graphics.beginFill(0x4169e1, 1);
        down.graphics.drawRoundRect(stageW/2-40,950,80,80,5)
        down.graphics.endFill();
        this.addChild(down);
        down.touchEnabled = true;
        down.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
            this.fx = this.arr[1] - this.arr[0] == (this.n = 27) ? this.fx : this.n;
        }, this)
        // 向左按钮
        let left: egret.Shape = new egret.Shape();
        left.graphics.beginFill(0x4169e1, 1);
        left.graphics.drawRoundRect(stageW/2-180,850,80,80,5)
        left.graphics.endFill();
        this.addChild(left);
        left.touchEnabled = true;
        left.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
            this.fx = this.arr[1] - this.arr[0] == (this.n = -1) ? this.fx : this.n;
        }, this)
        // 向右按钮
        let right: egret.Shape = new egret.Shape();
        right.graphics.beginFill(0x4169e1, 1);
        right.graphics.drawRoundRect(stageW/2+100,850,80,80,5)
        right.graphics.endFill();
        this.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
            this.fx = this.arr[1] - this.arr[0] == (this.n = 1) ? this.fx : this.n;
        }, this)
    }

    private gameInit(): void {
        console.log('游戏开始');
        this.arr = [54,53];
        this.dz = 55;
        this.fx = 1;
        this.snakeInit(500);
    }

    private snakeInit(speed: number) {
        this.arr.unshift(this.n = this.arr[0] +  this.fx);
        if (this.arr.indexOf(this.n, 1) > 0 || this.n < 0 || this.n > 728 || this.fx == 1 && this.n % 27 == 0 || this.fx == -1 && this.n % 27 == 26) {
            return alert('over');
        }
        this.drawRectItem(this.n, 0x000000, 1);
        if (this.n == this.dz) {
            this.musicInt = new Playmusic();
            this.musicInt.loadEatSound();
            while(this.arr.indexOf(this.dz = ~~(Math.random() * 729)) >= 0);
            this.drawRectItem(this.dz, 0xee82ee, 1);
        } else {
            this.drawRectItem(this.arr.pop(), 0xffffff, 1);
        }
        let _speed;
        let len = this.arr.length;
        if (len < 5) {
            _speed = 500;
        } else if (len < 10) {
            _speed = 200;
        } else if (len < 15) {
            _speed = 100;
        } else {
            _speed = 100;
        }
        setTimeout(() => this.snakeInit(_speed), speed)

    }
    private drawRectItem(index: number, color: number, opacity: number) {
         // 绘制方块
        let x = index % 27 * 20 + 50 + 1;
        let y = ~~(index / 27) * 20 + 50 + 1;
        let rect:egret.Shape = new egret.Shape();
        rect.graphics.beginFill(color, opacity);
        rect.graphics.drawRect(x,y,18,18);
        rect.graphics.endFill();
        this.addChild(rect);
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