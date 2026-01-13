#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

import { FishJsonSchema } from './FishJsonSchema.js';
import { LocationsJsonSchema } from './LocationsJsonSchema.js';
import { ObjectsJsonSchema } from './ObjectsJsonSchema.js';

const SOURCEDATA_FOLDER = path.join(
  process.cwd(),
  'scripts',
  'sv-fishing',
  'Content',
  'Data'
);
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sv-fishing.json');

const SourceKeys = {
  FISH: 'FISH',
  LOCATIONS: 'LOCATIONS',
  OBJECTS: 'OBJECTS',
} as const;
type SourceKeys = keyof typeof SourceKeys;

interface SourceFile {
  path: string;
  parser: { parse: (json: unknown) => object };
}

const SOURCE_FILES: Record<SourceKeys, SourceFile> = {
  FISH: {
    path: path.join(SOURCEDATA_FOLDER, 'Fish.json'),
    parser: FishJsonSchema,
  },
  LOCATIONS: {
    path: path.join(SOURCEDATA_FOLDER, 'Locations.json'),
    parser: LocationsJsonSchema,
  },
  OBJECTS: {
    path: path.join(SOURCEDATA_FOLDER, 'Objects.json'),
    parser: ObjectsJsonSchema,
  },
};

const DATA = Object.fromEntries(
  Object.entries(SOURCE_FILES).map(([k, v]) => {
    return [
      k,
      v.parser.parse(
        JSON.parse(fs.readFileSync(v.path, { encoding: 'utf-8' }))
      ),
    ];
  })
) as Record<SourceKeys, object>;

// --- Main ---
function main() {
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(DATA), { encoding: 'utf-8' });
  return;
  // const OUTPUT_TO_CONSOLE = process.argv.length > 2 && process.argv[2] === '-';

  //   // Parse simples
  //   args.forEach((arg, i) => {
  //     switch (arg) {
  //       case '--fish_path':
  //         fishPath = args[i + 1];
  //         break;
  //       case '--locations_path':
  //         locationsPath = args[i + 1];
  //         break;
  //       case '--objects_path':
  //         objectsPath = args[i + 1];
  //         break;
  //       case '-o':
  //       case '--output':
  //         output = args[i + 1];
  //         break;
  //     }
  //   });

  // Load
  // let sourceData: SourceData;
  // try {
  //   sourceData = loadSourceData();
  // } catch (e) {
  //   console.error(
  //     'Erro ao ler arquivo de entrada: ',
  //     e instanceof Error ? e.message : JSON.stringify(e)
  //   );
  //   process.exit(1);
  // }

  // const locationsJson = parseLocationsJson(
  //   fs.readFileSync(path.resolve(DEFAULT_PATHS.locations), {
  //     encoding: 'utf-8',
  //   })
  // );
  // assert(locationsJson);
  //console.log(locationsJson);

  // console.log(
  //   aaa(
  //     JSON.parse(
  //       fs.readFileSync(path.resolve(DEFAULT_PATHS.fish), {
  //         encoding: 'utf-8',
  //       })
  //     )
  //   )
  // );

  // // Pipeline
  // const result: ResultType = {
  //   fish: {},
  //   locations: null,
  //   availability: [],
  // };

  // const fishDatas: Record<string, FishData> = Object.fromEntries(
  //   Object.entries(sourceData.fish).map(([id, fishData]) => [
  //     id,
  //     parseFishJson(fishData),
  //   ])
  // );
  // assert(fishDatas);
  // //console.log(JSON.stringify(fishDatas));

  // for (const [, sourceLocation] of Object.entries(sourceData.locations)) {
  //   for (const locationFish of sourceLocation.Fish) {
  //     assert(locationFish);
  //     // const [fishId, fish] = processFish(locationFish);
  //     //console.log([fishId, fish]);
  //   }
  // }

  // // Output
  // if (OUTPUT_TO_CONSOLE) {
  //   console.log(JSON.stringify(result));
  //   return;
  // }

  // // try {
  // //   saveJson(result);
  // // } catch (e) {
  // //   console.error(
  // //     'Erro ao escrever arquivo de saída: ',
  // //     e instanceof Error ? e.message : JSON.stringify(e)
  // //   );
  // //   process.exit(1);
  // // }
}

main();

// function processFish(locationFish: LocationFish): [string, Fish] {
//   return [
//     locationFish.ItemId ?? locationFish.Id,
//     {
//       name: locationFish.ItemId ?? locationFish.Id,
//       texture: 'springobjects',
//       spriteIndex: 0,
//       time: [],
//     },
//   ];
// }

// function processObject(
//   [id, obj]: [string, SVObject],
//   sourceData: SourceData
// ): Fish {
//   return {
//     name: obj.Name,
//     texture: obj.Texture ?? 'springobjects',
//     spriteIndex: obj.SpriteIndex,
//     time: [],
//   };
// }
