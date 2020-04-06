var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._welcomeLabel = new objects.Label("Lets's Play !", "60px", "Consolas", "#FFFF00", config.Screen.PLAY_LABEL_X, config.Screen.PLAY_LABEL_Y, true);
            this._playButton = new objects.Button("PlayButton", config.Screen.PLAY_BUTTON_X, config.Screen.PLAY_BUTTON_Y, true);
            this._playNextLevelButton = new objects.Button("PlayNextLevelButton", config.Screen.PLAY_NEXTLEVEL_BUTTON_X, config.Screen.PLAY_NEXTLEVEL_BUTTON_Y, true);
            this._backButton = new objects.Button("BackButton", config.Screen.BACKBUTTON_X, config.Screen.BACKBUTTON_Y, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background.Update();
            }
        };
        Start.prototype.Reset = function () { };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._welcomeLabel);
            this.addChild(this._playButton);
            this.addChild(this._playNextLevelButton);
            // simple level play button - level 1
            this._playButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            // next level play button - level 2
            this._playNextLevelButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAYNEXTLEVEL;
            }, this);
            // adding back button to scene
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map