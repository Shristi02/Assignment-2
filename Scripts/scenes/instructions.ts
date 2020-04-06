module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _instructionLabel: objects.Label;
        private _backButton: objects.Button;

        private _winLabel: objects.Label;
        private _winText: objects.Label;
        private _loseLabel: objects.Label;
        private _loseText: objects.Label;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Main():void {
            console.log(`Starting - INSTRUCTION SCENE`);
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);

            //adds labels to the scene
            this.addChild(this._winLabel);
            this.addChild(this._winText);
            this.addChild(this._loseLabel);
            this.addChild(this._loseText);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }

        public Start():void {

            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#FFFF00", 450, 100, true);
            // Instantiates objects
            this._winLabel = new objects.Label("For the Win:", "45px", "Consolas", "#FFFF00", 450, 200, true);
            this._winText = new objects.Label("Shoot the enemies or sun to score!", "35px", "Consolas", "#FFFFFF", 450, 250, true);
            this._loseText = new objects.Label("Dodge the incoming enemies!", "35px", "Consolas", "#FFFFFF", 450, 300, true);
            this._backButton = new objects.Button("BackButton", 450, 400, true);

            this.Main();
        }

        public Update():void {
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background.Update();
            }
        }

        public Reset():void {}

        public Destroy():void {
            this.removeAllChildren();
        }
    }
}