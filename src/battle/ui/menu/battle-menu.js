import { MONSTER_ASSET_KEYS } from "../../../assets/asset-keys.js";

const BATTLE_MENU_OPTIONS = Object.freeze({
  FIGHT: "FIGHT",
  SWITCH: "SWITCH",
  ITEMS: "ITEMS",
  RUN: "RUN",
})

const battleUITextStyle = {
    color: 'black',
    fontSize: '30px',
    fontStyle: 'bold'
}

export class BattleMenu {
    #scene;
    #mainBattleMenuPhaserContainerGameObject;
    #moveSelectionSubBattleMenuPhaserContainerGameObject;
    #battleTextGameObjectLine1;
    #battleTextGameObjectLine2;

    constructor(scene) {
        this.#scene = scene;

        // Inicializamos los textos aquí para que estén disponibles desde el inicio
        this.#battleTextGameObjectLine1 = this.#scene.add.text(20, 468, 'What should', battleUITextStyle);
        this.#battleTextGameObjectLine2 = this.#scene.add.text(20, 512, `${MONSTER_ASSET_KEYS.IGUANIGNITE} do next?`, battleUITextStyle);

        this.#createMainInfoPane();
        this.#createMainBattleMenu();
        this.#createMonsterAttackSubMenu();
    }

    showMainBattleMenu() {
        this.#battleTextGameObjectLine1.setText('What should');
        this.#mainBattleMenuPhaserContainerGameObject.setAlpha(1);
        this.#battleTextGameObjectLine1.setAlpha(1);
        this.#battleTextGameObjectLine2.setAlpha(1);
    }

    hideMainBattleMenu() {
        this.#mainBattleMenuPhaserContainerGameObject.setAlpha(0);
        this.#battleTextGameObjectLine1.setAlpha(0);
        this.#battleTextGameObjectLine2.setAlpha(0);
    }

    showMonsterAttackSubmenu() {
        this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(1);
    }

    hideMonsterAttackSubmenu() {
        this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(0);
    }

    #createMainBattleMenu() {
        this.#mainBattleMenuPhaserContainerGameObject = this.#scene.add.container(
            520, 448, [
            this.#createMainInfoSubPane(),
            this.#scene.add.text(55, 22, BATTLE_MENU_OPTIONS.FIGHT, battleUITextStyle),
            this.#scene.add.text(240, 22, BATTLE_MENU_OPTIONS.SWITCH, battleUITextStyle),
            this.#scene.add.text(55, 70, BATTLE_MENU_OPTIONS.ITEMS, battleUITextStyle),
            this.#scene.add.text(240, 70, BATTLE_MENU_OPTIONS.RUN, battleUITextStyle),
            ]
        );

        this.hideMainBattleMenu();
    }

    #createMonsterAttackSubMenu() {
        this.#moveSelectionSubBattleMenuPhaserContainerGameObject = this.#scene.add.container(
            0, 448, [
                this.#scene.add.text(55, 22, 'Slash', battleUITextStyle),
                this.#scene.add.text(240, 22, 'Growl', battleUITextStyle),
                this.#scene.add.text(55, 70, '-', battleUITextStyle),
                this.#scene.add.text(240, 70, '-', battleUITextStyle),
            ]
        );
        this.hideMonsterAttackSubmenu();
    }

    #createMainInfoPane() {
        const padding = 4;
        const rectHeight = 124;
    
        this.#scene.add
          .rectangle(
            padding,
            this.#scene.scale.height - rectHeight - padding,
            this.#scene.scale.width - padding * 2,
            rectHeight,
            0xede4f3,
            1
          )
          .setOrigin(0)
          .setStrokeStyle(8, 0xe4434a, 1);
    }

    #createMainInfoSubPane() {
        const rectWidth = 500;
        const rectHeight = 124;
    
        return this.#scene.add
          .rectangle(
            0, 0,
            rectWidth,
            rectHeight,
            0xede4f3,
            1
          )
          .setOrigin(0)
          .setStrokeStyle(8, 0x905ac2, 1);
    }
}