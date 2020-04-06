var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // 150 points for bug enemy
            // 100 points for alien enemy
            // 50 points for pickup
            // every 5 point = 1 life
            // 2000 points = 1 life
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "LivesImage", {
            /**
             *
             *
             * @readonly
             * @type {objects.Button}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._livesImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = ": " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "PickUpImage", {
            /**
             *
             *
             * @readonly
             * @type {objects.Button}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._pickUpImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "PickupLable", {
            get: function () {
                return this._pickupLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "PickUpNumber", {
            get: function () {
                return this._pickupNumber;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "setPickupNumber", {
            set: function (newValue) {
                this._pickupNumber = newValue;
                this.PickupLable.text = ": " + this._pickupNumber;
                if (this.PickUpNumber == config.Screen.PICKUP_LIFE_RENEW_NUMBER) {
                    this.setPickupNumber = 0;
                    this.Lives += 1;
                    this.LivesLabel.text = ": " + this.Lives;
                    this.PickupLable.text = ": " + this._pickupNumber;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
                if (this.Score >= config.Screen.POINTS_FOR_NEW_LIFE) {
                    this.Score = this.Score - config.Screen.POINTS_FOR_NEW_LIFE;
                    this.Lives += 1;
                    this.ScoreLabel.text = "Score: " + this._score;
                    this.LivesLabel.text = ": " + this.Lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesImage = new objects.Button("LivesImage", config.Screen.LIVES_IMAGE_X, config.Screen.LIVES_Y, false);
            this._livesLabel = new objects.Label(": 99", "30px", "Dock51", "#FFFF00", config.Screen.LIVES_LABEL_X, config.Screen.LIVES_Y + 15, false);
            this._pickUpImage = new objects.Button("PickUps", config.Screen.PICKUP_IMAGE, config.Screen.SCOREBORD_LABLES_HEIGHT, false);
            this._pickupLabel = new objects.Label(": 99999", "30px", "Dock51", "#FFFF00", config.Screen.PICKUP_LABEL, config.Screen.SCOREBORD_LABLES_HEIGHT, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Dock51", "#FFFF00", config.Screen.SCORE_LABEL, config.Screen.SCOREBORD_LABLES_HEIGHT, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.HighScore = 0;
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
            this.setPickupNumber = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map