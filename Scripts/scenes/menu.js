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
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // constructors
        function Menu() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Menu.prototype.Start = function () {
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._welcomeLabel = new objects.Label("Antariskh", "60px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.TOP_SPACE * 2, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.INSTUCTION_BUTTON_X, config.Screen.INSTUCTION_BUTTON_Y, true);
            this._exitButton = new objects.Button("ExitButton", config.Screen.EXIT_BUTTON_X, config.Screen.EXIT_BUTTON_Y, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background.Update();
            }
        };
        Menu.prototype.Reset = function () { };
        Menu.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Menu.prototype.Main = function () {
            console.log("Starting - Menu SCENE");
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
            this._exitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.EXIT;
            }, this);
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map