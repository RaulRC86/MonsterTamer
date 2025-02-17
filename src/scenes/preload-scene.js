import { BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS, BATTLE_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
      active: true,
    });
    console.log(SCENE_KEYS);
  }
  preload() {
    console.log(`[${PreloadScene.name}:preload] invoked`);
    const monsterTamerAssetPath = "assets/images/monster-tamer/";
    const kenneysAssetPath = "assets/images/kenneys-assets/";

    //Battle Backgrounds
    this.load.image(
      BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
      `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
    );

    //Battle Assets
    this.load.image(
        BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
        `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`
      );
    //Health Bar Assets
      this.load.image(
        HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
        `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
      );
      this.load.image(
        HEALTH_BAR_ASSET_KEYS.MIDDLE,
        `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
      );
      this.load.image(
        HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
        `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
      );
    //Monster Assets
    this.load.image(
      MONSTER_ASSET_KEYS.IGUANIGNITE,
      `${monsterTamerAssetPath}/monsters/iguanignite.png`
    );
    this.load.image(
      MONSTER_ASSET_KEYS.CARNODUSK,
      `${monsterTamerAssetPath}/monsters/carnodusk.png`
    );
    this.load.image(
      MONSTER_ASSET_KEYS.CAKY,
      `${monsterTamerAssetPath}/monsters/caky.png`
    );
  }
  create() {
    console.log(`[${PreloadScene.name}:create] invoked`);
    this.scene.start(SCENE_KEYS.BATTLE_SCENE);
  }
}
