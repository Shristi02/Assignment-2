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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        /**
         * Creates an instance of Bullet.
         * @memberof Bullet
         */
        function Bullet() {
            var _this = _super.call(this, "Bullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
            if (this.x >= config.Screen.WIDTH) {
                console.info("bullet reset   " + this.x);
                this.Reset();
                return true;
            }
            return false;
        };
        // public methods
        Bullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            return this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            this._horizontalSpeed = config.Screen.BACKGROUND_SPEED;
            this.x = 0;
            this.y = 0;
            console.info("reseted x and y", this.x, this.y);
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map