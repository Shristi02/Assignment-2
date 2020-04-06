namespace objects {
  export class Background extends createjs.Bitmap {
    // member variables
    private _horizontalSpeed: number;
    
    /**
     * Creates an instance of Ocean.
     * @memberof Ocean
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("background"));

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check right boundary
      if (this.x <=-((config.Screen.WIDTH)*2)) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._horizontalSpeed = -config.Screen.BACKGROUND_SPEED; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x += this._horizontalSpeed;
      this._checkBounds();




    }

    public Reset(): void {
      this.x = 0;
    }
  }
}
