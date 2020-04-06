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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // crates enemies
        Play.prototype._buildBugEnemy = function () {
            for (var count = 0; count < this._bugEnemyNum; count++) {
                this._bugEnemy[count] = new objects.BugEnemy();
            }
        };
        // crates powerups
        Play.prototype._generatePowerups = function () {
            for (var count = 0; count < this._pickUpsNum; count++) {
                this._pickUps[count] = new objects.PickUps();
            }
        };
        // this function will remove bullets from array list and scene
        Play.prototype._removeCurrentBullet = function (bullet) {
            var temp = bullet;
            this._bulletClicked = this._bulletClicked.filter(function (obj) { return obj !== bullet; });
            //   bullet.Reset();
            //   this.removeChild(bullet);
            //   temp.Reset();
            this.removeChild(temp);
            //   let index = this._bulletClicked.indexOf(temp);
            //   console.info(
            //     "index of bullet" + index + "  BEFOR  list" + this._bulletClicked.length
            //   );
            //   this._bulletClicked.splice(index);
            //   console.info("AFTER  list" + this._bulletClicked.length);
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("bgMusic");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._shooter = new objects.Shooter();
            this._background = new objects.Background();
            this._stone = new objects.Stone();
            // creates an empty array of type bugenemy
            this._bugEnemy = new Array();
            this._bugEnemyNum = config.Screen.BUG_ENEMY_NUMBER;
            this._buildBugEnemy();
            this._pickUps = new Array();
            this._pickUpsNum = config.Screen.PICKUP_NUMBER;
            this._generatePowerups();
            // back button
            this._backButton = new objects.Button("SmallBackButton", config.Screen.SMALL_BACKBUTTON_X, config.Screen.SMALL_BACKBUTTON_Y, true);
            // bullet
            this._bulletClicked = new Array();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._shooter.Update();
            this._background.Update();
            this._stone.Update();
            this._bulletClicked.forEach(function (bullet) {
                if (bullet.Update()) {
                    // it will check the boundary of bullet and will updated if bullete reach to boundary
                    _this._removeCurrentBullet(bullet);
                }
                else {
                    // check cololision between enemy and bullet
                    _this._bugEnemy.forEach(function (enemy) {
                        _this._bugEnemyCollision = managers.Collision.check(enemy, bullet);
                        if (_this._bugEnemyCollision == 1) {
                            // reset and remove enemy
                            enemy.Reset();
                            _this.removeChildAt(enemy.x);
                            //   reset and remove bullet
                            _this._removeCurrentBullet(bullet);
                            managers.Game.ScoreBoard.Score +=
                                config.Screen.POINTS_FOR_BUG_ENEMY;
                        }
                    });
                }
            });
            this._stoneCollision = managers.Collision.check(this._shooter, this._stone);
            if (this._stoneCollision == 1) {
                this._stone.Reset();
                this.removeChildAt(this._stone.x);
            }
            // update of enemy
            this._bugEnemy.forEach(function (enemy) {
                enemy.Update();
                if (enemy.x >= config.Screen.DISTANCE - _this._shooter.width) {
                    _this._bugEnemyCollision = managers.Collision.check(_this._shooter, enemy);
                    if (_this._bugEnemyCollision == 1) {
                        enemy.Reset();
                        _this.removeChildAt(enemy.x);
                    }
                }
            });
            // updates of pickups
            this._pickUps.forEach(function (pickup) {
                pickup.Update();
                if (pickup.x >= config.Screen.DISTANCE - _this._shooter.width) {
                    _this._pickupCollision = managers.Collision.check(_this._shooter, pickup);
                    if (_this._pickupCollision == 1) {
                        pickup.Reset();
                        _this.removeChildAt(pickup.x);
                    }
                }
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the background to the scene
            this.addChild(this._background);
            // adding the island to the scene
            this.addChild(this._stone);
            // adding the shooter charecter to the scene
            this.addChild(this._shooter);
            // adding the bug enemy to the scene
            for (var _i = 0, _a = this._bugEnemy; _i < _a.length; _i++) {
                var bugEnemy = _a[_i];
                this.addChild(bugEnemy);
            }
            // adding the pickups to the scene
            for (var _b = 0, _c = this._pickUps; _b < _c.length; _b++) {
                var pickups = _c[_b];
                this.addChild(pickups);
            }
            // adding the back button to the scene
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            // handaling click event for bullets
            this._background.on("click", function () {
                // cerate a new object every time and add into list
                var bullet;
                bullet = new objects.Bullet();
                bullet.y = this._shooter.y;
                bullet.x = this._shooter.x;
                this._bulletClicked.push(bullet);
                this.addChild(bullet);
            }, this);
            // score board
            this.addChild(managers.Game.ScoreBoard.LivesImage);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(managers.Game.ScoreBoard.PickupLable);
            this.addChild(managers.Game.ScoreBoard.PickUpImage);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map