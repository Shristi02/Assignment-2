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
var objects;
(function (objects) {
    var Shooter = /** @class */ (function (_super) {
        __extends(Shooter, _super);
        /**
         * Creates an instance of Shooter.
         * @memberof Shooter
         */
        function Shooter() {
            var _this = _super.call(this, "Shooter") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Shooter.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check top boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Shooter.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = config.Screen.DISTANCE;
        };
        Shooter.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Shooter.prototype.Reset = function () { };
        return Shooter;
    }(objects.GameObject));
    objects.Shooter = Shooter;
})(objects || (objects = {}));
//# sourceMappingURL=shooter.js.map