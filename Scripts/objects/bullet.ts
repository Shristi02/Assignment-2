namespace objects {
  export class Bullet extends objects.GameObject {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Bullet.
     * @memberof Bullet
     */
    constructor() {
      super("Bullet");

      this.Start();
    }

    // private methods
    private _checkBounds(): boolean {
      if (this.x >= config.Screen.WIDTH) {
        console.info("bullet reset   " + this.x);
        this.Reset();
        return true;
      }
      return false;
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;

      this.Reset();
    }

    public Update(): boolean {
      this.x += this._horizontalSpeed;

      return this._checkBounds();
    }

    public Reset(): void {
      this._horizontalSpeed = config.Screen.BACKGROUND_SPEED;
      this.x = 0;
      this.y = 0;

      console.info("reseted x and y", this.x, this.y);
    }
  }
}
