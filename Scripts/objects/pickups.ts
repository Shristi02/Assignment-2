namespace objects {
  export class PickUps extends objects.GameObject {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of PickUps.
     * @memberof PickUps
     */
    constructor() {
      super("PickUps");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < -(config.Screen.HALF_WIDTH+this.width)   ) {
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
     
      this._horizontalSpeed = Math.floor((Math.random() * 2) +1); // between 0 and 1 ppf

      this.x = config.Screen.WIDTH + this.width;
      this.y = (Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.height));

    }
  }
}
