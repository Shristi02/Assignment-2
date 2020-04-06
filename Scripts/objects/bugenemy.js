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
    var BugEnemy = /** @class */ (function (_super) {
        __extends(BugEnemy, _super);
        /**
         * Creates an instance of bugenemy.
         * @memberof bugEnemy
         */
        function BugEnemy() {
            var _this = _super.call(this, "bugEnemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        BugEnemy.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < -this.width ||
                this.y < -this.height ||
                this.y > config.Screen.HEIGHT) {
                this.Reset();
            }
        };
        // public methods
        BugEnemy.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        BugEnemy.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        BugEnemy.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 4 - 2); // between -2 and 2 ppf
            this._horizontalSpeed = Math.floor(Math.random() * 5 + 1); // between 0 and 5 ppf
            this.x = config.Screen.WIDTH + this.width;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height) + this.height);
        };
        return BugEnemy;
    }(objects.GameObject));
    objects.BugEnemy = BugEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=bugenemy.js.map