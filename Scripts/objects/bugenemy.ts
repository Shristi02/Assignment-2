namespace objects {
  export class BugEnemy extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    /**
     * Creates an instance of bugenemy.
     * @memberof bugEnemy
     */
    constructor() {
      super("bugEnemy");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (
        this.x < -this.width ||
        this.y < -this.height ||
        this.y > config.Screen.HEIGHT
      ) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;

      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this.x -= this._horizontalSpeed;

      this._checkBounds();
    }

    public Reset(): void {
      this._verticalSpeed = Math.floor(Math.random() * 4 - 2); // between -2 and 2 ppf
      this._horizontalSpeed = Math.floor(Math.random() * 5 + 1); // between 0 and 5 ppf

      this.x = config.Screen.WIDTH + this.width;
      this.y = Math.floor(
        Math.random() * (config.Screen.HEIGHT - this.height) + this.height
      );
    }
  }
}
