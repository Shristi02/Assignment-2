namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _shooter: objects.Shooter;
    private _background: objects.Background;
    private _stone: objects.Stone;
    private _backButton: objects.Button;

    private _bulletClicked: objects.Bullet[];

    private _bugEnemy: objects.BugEnemy[];
    private _pickUps: objects.PickUps[];

    private _bugEnemyNum: number;
    private _pickUpsNum: number;
    private _stoneCollision: number;
    private _bugEnemyCollision: number;
    private _pickupCollision: number;

    public engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();
      this.Start();
    }

    // private methods
    // crates enemies
    private _buildBugEnemy(): void {
      for (let count = 0; count < this._bugEnemyNum; count++) {
        this._bugEnemy[count] = new objects.BugEnemy();
      }
    }

    // crates powerups
    private _generatePowerups(): void {
      for (let count = 0; count < this._pickUpsNum; count++) {
        this._pickUps[count] = new objects.PickUps();
      }
    }

    // this function will remove bullets from array list and scene
    private _removeCurrentBullet(bullet): void {
      let temp = bullet;
      this._bulletClicked = this._bulletClicked.filter(obj => obj !== bullet);

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
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("bgMusic");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._shooter = new objects.Shooter();
      this._background = new objects.Background();
      this._stone = new objects.Stone();

      // creates an empty array of type bugenemy
      this._bugEnemy = new Array<objects.BugEnemy>();
      this._bugEnemyNum = config.Screen.BUG_ENEMY_NUMBER;
      this._buildBugEnemy();

      this._pickUps = new Array<objects.PickUps>();
      this._pickUpsNum = config.Screen.PICKUP_NUMBER;
      this._generatePowerups();

      // back button
      this._backButton = new objects.Button(
        "SmallBackButton",
        config.Screen.SMALL_BACKBUTTON_X,
        config.Screen.SMALL_BACKBUTTON_Y,
        true
      );

      // bullet
      this._bulletClicked = new Array<objects.Bullet>();

      this.Main();
    }

    public Update(): void {
      this._shooter.Update();
      this._background.Update();
      this._stone.Update();

      this._bulletClicked.forEach(bullet => {
        if (bullet.Update()) {
          // it will check the boundary of bullet and will updated if bullete reach to boundary
          this._removeCurrentBullet(bullet);
        } else {
          // check cololision between enemy and bullet
          this._bugEnemy.forEach(enemy => {
            this._bugEnemyCollision = managers.Collision.check(enemy, bullet);

            if (this._bugEnemyCollision == 1) {
              // reset and remove enemy
              enemy.Reset();
              this.removeChildAt(enemy.x);

              //   reset and remove bullet
              this._removeCurrentBullet(bullet);
              managers.Game.ScoreBoard.Score +=
                config.Screen.POINTS_FOR_BUG_ENEMY;
            }
          });
        }
      });

      this._stoneCollision = managers.Collision.check(
        this._shooter,
        this._stone
      );
      if (this._stoneCollision == 1) {
        this._stone.Reset();
        this.removeChildAt(this._stone.x);
      }

      // update of enemy
      this._bugEnemy.forEach(enemy => {
        enemy.Update();

        if (enemy.x >= config.Screen.DISTANCE - this._shooter.width) {
          this._bugEnemyCollision = managers.Collision.check(
            this._shooter,
            enemy
          );
          if (this._bugEnemyCollision == 1) {
            enemy.Reset();
            this.removeChildAt(enemy.x);
          }
        }
      });

      // updates of pickups
      this._pickUps.forEach(pickup => {
        pickup.Update();
        if (pickup.x >= config.Screen.DISTANCE - this._shooter.width) {
          this._pickupCollision = managers.Collision.check(
            this._shooter,
            pickup
          );
          if (this._pickupCollision == 1) {
            pickup.Reset();
            this.removeChildAt(pickup.x);
          }
        }
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the background to the scene
      this.addChild(this._background);

      // adding the island to the scene
      this.addChild(this._stone);

      // adding the shooter charecter to the scene
      this.addChild(this._shooter);

      // adding the bug enemy to the scene
      for (const bugEnemy of this._bugEnemy) {
        this.addChild(bugEnemy);
      }

      // adding the pickups to the scene
      for (const pickups of this._pickUps) {
        this.addChild(pickups);
      }

      // adding the back button to the scene
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );

      // handaling click event for bullets
      this._background.on(
        "click",
        function() {
          // cerate a new object every time and add into list
          let bullet: objects.Bullet;
          bullet = new objects.Bullet();
          bullet.y = this._shooter.y;
          bullet.x = this._shooter.x;
          this._bulletClicked.push(bullet);
          this.addChild(bullet);
        },
        this
      );

      // score board
      this.addChild(managers.Game.ScoreBoard.LivesImage);
      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
      this.addChild(managers.Game.ScoreBoard.PickupLable);
      this.addChild(managers.Game.ScoreBoard.PickUpImage);
    }
  }
}
