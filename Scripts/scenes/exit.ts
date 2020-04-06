namespace scenes {
  export class Exit extends objects.Scene {
    // member variables
    private _background: objects.Background;
    private _exitLabel: objects.Label;
    private _backButton: objects.Button;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

      // adds background to the scene
      this._background = new objects.Background();
      this.addChild(this._background);

      this._exitLabel = new objects.Label(
        "Developed by: Sristi",
        "60px",
        "Consolas",
        "#FFFF00",
        450,
        100,
        true
      );
      this._backButton = new objects.Button("BackButton", 450, 350, true);

      this.Main();
    }

    public Update(): void {
      if (this._background.x >= 1280 || this._background.x <= 640) {
        this._background.Update();
        }
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - EXIT SCENE`);

      // adding exit lable to scene
      this.addChild(this._exitLabel);

      // adding back button to scene
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );
    }
  }
}
