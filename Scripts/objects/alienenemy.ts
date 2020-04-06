namespace objects {
  export class AlienEnemy extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    /**
     * Creates an instance of alianEnemy.
     * @memberof alianEnemy
     */
    constructor() {
      super("alienEnemy");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < -(this.width)  ||   this.y < -this.height || this.y>config.Screen.HEIGHT   ) {
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
      this.x -= this._horizontalSpeed;

      this._checkBounds();
    }

    public Reset(): void {
     
      this._horizontalSpeed = Math.floor((Math.random() * 5) +1); // between 1 and 5 ppf

      this.x = config.Screen.WIDTH + this.width;
      this.y = (Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.height));

    }
  }
}
