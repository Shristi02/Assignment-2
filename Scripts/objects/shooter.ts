namespace objects {
  export class Shooter extends objects.GameObject {
    
    /**
     * Creates an instance of Shooter.
     * @memberof Shooter
     */
    constructor() {
      super("Shooter");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check bottom boundary
        if(this.y > config.Screen.HEIGHT - this.halfHeight ) {
            this.y = config.Screen.HEIGHT - this.halfHeight;
        }

        // check top boundary
        if(this.y < this.halfHeight) {
            this.y = this.halfHeight;
        }
    }

    // public methods
    public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this.x = config.Screen.DISTANCE;
    }

    public Update(): void {
        this.y = managers.Game.Stage.mouseY;
        this._checkBounds();
    }

    public Reset(): void {}
  }
}
