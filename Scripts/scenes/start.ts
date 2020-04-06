namespace scenes {
  export class Start extends objects.Scene {
    // member variables
    private _background: objects.Background;
    private _welcomeLabel: objects.Label;
    private _playButton: objects.Button;
    private _playNextLevelButton: objects.Button;
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

      this._welcomeLabel = new objects.Label(
        "Lets's Play !",
        "60px",
        "Consolas",
        "#FFFF00",
        config.Screen.PLAY_LABEL_X,

        config.Screen.PLAY_LABEL_Y,
        true
      );
      this._playButton = new objects.Button(
        "PlayButton",
        config.Screen.PLAY_BUTTON_X,
        config.Screen.PLAY_BUTTON_Y,
        true
      );
      this._playNextLevelButton = new objects.Button(
        "PlayNextLevelButton",
        config.Screen.PLAY_NEXTLEVEL_BUTTON_X,
        config.Screen.PLAY_NEXTLEVEL_BUTTON_Y,

        true
      );
      this._backButton = new objects.Button(
        "BackButton",
        config.Screen.BACKBUTTON_X,
        config.Screen.BACKBUTTON_Y,
        true
      );

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
      console.log(`Starting - START SCENE`);
      this.addChild(this._welcomeLabel);
      this.addChild(this._playButton);
      this.addChild(this._playNextLevelButton);

      // simple level play button - level 1
      this._playButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
        },
        this
      );

      // next level play button - level 2
      this._playNextLevelButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAYNEXTLEVEL;
        },
        this
      );

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
