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
    var Stone = /** @class */ (function (_super) {
        __extends(Stone, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Stone() {
            var _this = _super.call(this, "Stone") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Stone.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Stone.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = Math.floor((Math.random() * 4) + 1); // between 0 and 4 ppf
            this.Reset();
        };
        Stone.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x -= this._verticalSpeed;
            this._checkBounds();
        };
        Stone.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Stone;
    }(objects.GameObject));
    objects.Stone = Stone;
})(objects || (objects = {}));
//# sourceMappingURL=stone.js.map