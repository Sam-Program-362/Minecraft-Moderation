import { world, system, DimensionLocation } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe((event) => {
  const { block } = event;
  if (block.typeId !== "custom:arcane_generator") return;

  const loc = block.location;
  const marker = block.dimension.spawnEntity("custom:block_marker", {
    x: loc.x + 0.5,
    y: loc.y,
    z: loc.z + 0.5
  });

  // Storing arbitrary machine state
  marker.setDynamicProperty("stored_energy", 0);
  marker.setDynamicProperty("owner_id", event.player.id);
});
