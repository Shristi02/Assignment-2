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
    var AlienEnemy = /** @class */ (function (_super) {
        __extends(AlienEnemy, _super);
        /**
         * Creates an instance of alianEnemy.
         * @memberof alianEnemy
         */
        function AlienEnemy() {
            var _this = _super.call(this, "alienEnemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        AlienEnemy.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < -(this.width) || this.y < -this.height || this.y > config.Screen.HEIGHT) {
                this.Reset();
            }
        };
        // public methods
        AlienEnemy.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        AlienEnemy.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        AlienEnemy.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor((Math.random() * 5) + 1); // between 1 and 5 ppf
            this.x = config.Screen.WIDTH + this.width;
            this.y = (Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.height));
        };
        return AlienEnemy;
    }(objects.GameObject));
    objects.AlienEnemy = AlienEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=alienenemy.js.map