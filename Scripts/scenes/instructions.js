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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Main = function () {
            console.log("Starting - INSTRUCTION SCENE");
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);
            //adds labels to the scene
            this.addChild(this._winLabel);
            this.addChild(this._winText);
            this.addChild(this._loseLabel);
            this.addChild(this._loseText);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        Instruction.prototype.Start = function () {
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#FFFF00", 450, 100, true);
            // Instantiates objects
            this._winLabel = new objects.Label("For the Win:", "45px", "Consolas", "#FFFF00", 450, 200, true);
            this._winText = new objects.Label("Shoot the enemies or sun to score!", "35px", "Consolas", "#FFFFFF", 450, 250, true);
            this._loseText = new objects.Label("Dodge the incoming enemies!", "35px", "Consolas", "#FFFFFF", 450, 300, true);
            this._backButton = new objects.Button("BackButton", 450, 400, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background.Update();
            }
        };
        Instruction.prototype.Reset = function () { };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map