[ STEP 1: VERSION HANDSHAKE ]
AI checks existing workspace (`package.json`, `manifest.json`)
OR asks: "What target Minecraft version and @minecraft/server version are you building for?"
               │
               ▼
[ STEP 2: SCHEMA & SYNTAX VERIFICATION ]
AI verifies features against that specific version:
• Correct `format_version` for blocks/items/entities
• Valid module versions in `manifest.json`
• Current Script API event names and imports
               │
               ▼
[ STEP 3: ARTIFACT GENERATION ]
AI outputs production-ready JSON and TypeScript matched to your build.