namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _background: objects.Background;
    private _endLabel: objects.Label;
    private _exitButton: objects.Button;
    private _replayButton: objects.Button;

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

      this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#FFFF00", 450, 100, true);
      this._exitButton = new objects.Button("BackButton", 450, 250, true);
      this._replayButton = new objects.Button("ReplayButton", 450, 350, true);

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
      console.log(`Starting - END SCENE`);
      this.addChild(this._endLabel);
      this.addChild(this._exitButton);
      this.addChild(this._replayButton);

      this._exitButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );

      this._replayButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
    }
  }
}
