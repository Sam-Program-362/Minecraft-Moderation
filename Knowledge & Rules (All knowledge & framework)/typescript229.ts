import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
  if (event.block.typeId !== "custom:arcane_generator") return;
  event.cancel = true;

  const player = event.player;
  system.run(() => {
    new ActionFormData()
      .title("Arcane Generator")
      .body("Current Power: 5,000 / 10,000 RF")
      .button("Charge Held Item", "textures/items/diamond")
      .button("Overclock Reactor", "textures/ui/flame")
      .show(player)
      .then((response) => {
        if (response.selection === 0) {
          // Custom charge logic
        }
      });
  });
});
