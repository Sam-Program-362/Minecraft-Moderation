import { Player, Vector3 } from "@minecraft/server";

export function castLaser(player: Player, maxDistance = 30) {
  const headLoc = player.getHeadLocation();
  const viewDir = player.getViewDirection();
  const dimension = player.dimension;

  const hitEntities = dimension.getEntitiesFromRay(headLoc, viewDir, {
    maxDistance,
    excludeTypes: ["minecraft:player"]
  });

  if (hitEntities.length > 0) {
    const target = hitEntities[0].entity;
    target.applyDamage(15, {
      damagingEntity: player,
      cause: "magic"
    });
  }

  // Draw particle trace
  for (let i = 1; i <= maxDistance; i += 2) {
    const tracePoint = {
      x: headLoc.x + viewDir.x * i,
      y: headLoc.y + viewDir.y * i,
      z: headLoc.z + viewDir.z * i
    };
    dimension.spawnParticle("custom:laser_beam", tracePoint);
  }
}
