namespace config {
  export class Screen {
    public static WIDTH: number = 960;
    public static HEIGHT: number = 480;
    public static HALF_WIDTH: number = Screen.WIDTH / 2;
    public static HALF_HEIGHT: number = Screen.HEIGHT / 2;
    public static DISTANCE: number = 120;

    public static BACKGROUND_SPEED: number = 5;
    public static BUG_ENEMY_NUMBER: number = 7;
    public static PICKUP_NUMBER: number = 1;
    public static ALIEN_ENEMY_NUMBER: number = 5;
    public static PICKUP_LIFE_RENEW_NUMBER: number = 5;

    public static TOP_SPACE: number = 20;

    public static SMALL_BACKBUTTON_X: number = Screen.TOP_SPACE * 2;
    public static SMALL_BACKBUTTON_Y: number = Screen.TOP_SPACE * 2;

    public static BACKBUTTON_X: number = Screen.DISTANCE - Screen.TOP_SPACE;
    public static BACKBUTTON_Y: number = Screen.TOP_SPACE * 4;

    public static INSTUCTION_BUTTON_X: number = Screen.DISTANCE;
    public static INSTUCTION_BUTTON_Y: number =
      Screen.HEIGHT - Screen.TOP_SPACE * 4;

    public static EXIT_BUTTON_X: number = Screen.WIDTH - Screen.DISTANCE;
    public static EXIT_BUTTON_Y: number = Screen.HEIGHT - Screen.TOP_SPACE * 4;

    public static PLAY_BUTTON_X: number = Screen.HALF_WIDTH;
    public static PLAY_BUTTON_Y: number =
      Screen.HALF_HEIGHT - Screen.TOP_SPACE * 2;

    public static PLAY_NEXTLEVEL_BUTTON_X: number = Screen.HALF_WIDTH;
    public static PLAY_NEXTLEVEL_BUTTON_Y: number =
      Screen.HALF_HEIGHT + Screen.TOP_SPACE * 2;

    public static PLAY_LABEL_X: number = Screen.HALF_WIDTH;
    public static PLAY_LABEL_Y: number = Screen.TOP_SPACE * 2;

    public static SCOREBORD_LABLES_HEIGHT: number = Screen.TOP_SPACE;

    public static LIVES_LABEL: number = Screen.TOP_SPACE;
    public static SCORE_LABEL: number = 390;

    public static LIVES_LABEL_X: number = Screen.WIDTH - Screen.DISTANCE;
    public static LIVES_IMAGE_X: number = Screen.WIDTH - 180;
    public static LIVES_Y: number = Screen.TOP_SPACE * 3;

    public static PICKUP_LABEL: number = Screen.WIDTH - Screen.DISTANCE;
    public static PICKUP_IMAGE: number = Screen.WIDTH - 180;

    public static POINTS_FOR_BUG_ENEMY: number = 150;
    public static POINTS_FOR_ALENE_ENEMY: number = 100;
    public static POINTS_FOR_PICKUP: number = 50;
    public static POINTS_FOR_NEW_LIFE: number = 2000;
  }
}
