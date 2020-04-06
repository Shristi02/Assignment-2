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
    var PickUps = /** @class */ (function (_super) {
        __extends(PickUps, _super);
        /**
         * Creates an instance of PickUps.
         * @memberof PickUps
         */
        function PickUps() {
            var _this = _super.call(this, "PickUps") || this;
            _this.Start();
            return _this;
        }
        // private methods
        PickUps.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < -(config.Screen.HALF_WIDTH + this.width)) {
                this.Reset();
            }
        };
        // public methods
        PickUps.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        PickUps.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        PickUps.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor((Math.random() * 2) + 1); // between 0 and 1 ppf
            this.x = config.Screen.WIDTH + this.width;
            this.y = (Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.height));
        };
        return PickUps;
    }(objects.GameObject));
    objects.PickUps = PickUps;
})(objects || (objects = {}));
//# sourceMappingURL=pickups.js.map