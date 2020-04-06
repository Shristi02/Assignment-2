namespace objects {
  export class Stone extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("Stone");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = Math.floor((Math.random() * 4) +1); // between 0 and 4 ppf
      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
this.x-=this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.y = -this.height;
      this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
    }
  }
}
