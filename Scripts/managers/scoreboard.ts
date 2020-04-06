namespace managers {
  export class ScoreBoard {
    // private member variables
    private _lives: number;
    private _score: number;
    private _pickupNumber: number;
    private _livesLabel: objects.Label;
    private _livesImage: objects.Button;
    private _scoreLabel: objects.Label;
    private _highScore: number;
    private _highScoreLabel: objects.Label;
    private _pickupLabel: objects.Label;
    private _pickUpImage: objects.Button;

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
    get LivesLabel(): objects.Label {
      return this._livesLabel;
    }

    /**
     *
     *
     * @readonly
     * @type {objects.Button}
     * @memberof ScoreBoard
     */
    get LivesImage(): objects.Button {
      return this._livesImage;
    }

    /**
     * This returns a reference to the ScoreLabel object
     *
     * @readonly
     * @type {objects.Label}
     * @memberof ScoreBoard
     */
    get ScoreLabel(): objects.Label {
      return this._scoreLabel;
    }

    /**
     * This returns a reference to the HighScoreLabel object
     *
     * @readonly
     * @type {objects.Label}
     */
    get HighScoreLabel(): objects.Label {
      return this._highScoreLabel;
    }

    get Lives(): number {
      return this._lives;
    }

    set Lives(newValue: number) {
      this._lives = newValue;
      if (this._lives <= 0) {
        managers.Game.CurrentState = config.Scene.END;
      } else {
        this.LivesLabel.text = ": " + this._lives;
      }
    }

    get HighScore(): number {
      return this._highScore;
    }

    set HighScore(newValue: number) {
      this._highScore = newValue;
      this.HighScoreLabel.text = "High Score: " + this._highScore;
    }

    /**
     *
     *
     * @readonly
     * @type {objects.Button}
     * @memberof ScoreBoard
     */
    get PickUpImage(): objects.Button {
      return this._pickUpImage;
    }

    get PickupLable(): objects.Label {
      return this._pickupLabel;
    }

    get PickUpNumber(): number {
      return this._pickupNumber;
    }

    set setPickupNumber(newValue: number) {
      this._pickupNumber = newValue;
      this.PickupLable.text = ": " + this._pickupNumber;

      if (this.PickUpNumber == config.Screen.PICKUP_LIFE_RENEW_NUMBER) {
        this.setPickupNumber = 0;
        this.Lives += 1;
        this.LivesLabel.text = ": " + this.Lives;
        this.PickupLable.text = ": " + this._pickupNumber;
      }
    }

    get Score(): number {
      return this._score;
    }

    set Score(newValue: number) {
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
    }

    // constructors
    constructor() {
      this.Start();
    }

    // private methods

    // public methods
    public Start() {
      this._livesImage = new objects.Button(
        "LivesImage",
        config.Screen.LIVES_IMAGE_X,
        config.Screen.LIVES_Y,
        false
      );

      this._livesLabel = new objects.Label(
        ": 99",
        "30px",
        "Dock51",
        "#FFFF00",
        config.Screen.LIVES_LABEL_X,
        config.Screen.LIVES_Y + 15,
        false
      );

      this._pickUpImage = new objects.Button(
        "PickUps",
        config.Screen.PICKUP_IMAGE,
        config.Screen.SCOREBORD_LABLES_HEIGHT,
        false
      );
      this._pickupLabel = new objects.Label(
        ": 99999",
        "30px",
        "Dock51",
        "#FFFF00",
        config.Screen.PICKUP_LABEL,
        config.Screen.SCOREBORD_LABLES_HEIGHT,
        false
      );

      this._scoreLabel = new objects.Label(
        "Score: 99999",
        "30px",
        "Dock51",
        "#FFFF00",
        config.Screen.SCORE_LABEL,
        config.Screen.SCOREBORD_LABLES_HEIGHT,
        false
      );
      this._highScoreLabel = new objects.Label(
        "High Score: 999999",
        "60px",
        "Dock51",
        "#FFFF00",
        config.Screen.HALF_WIDTH,
        config.Screen.HALF_HEIGHT,
        true
      );

      this.HighScore = 0;
      this.Reset();
    }

    public Reset() {
      this.Lives = 5;
      this.Score = 0;
      this.setPickupNumber = 0;
    }
  }
}
