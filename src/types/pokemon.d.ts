// --- Interfaces Cấp Độ Cơ Bản ---

interface NamedAPIResource {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface Item {
  name: string;
  url: string;
}

// --- Interfaces Cấp Độ Trung Bình ---

interface PokemonAbility {
  ability: NamedAPIResource; // ability (e.g., "limber", "imposter")
  is_hidden: boolean;
  slot: number;
}

interface PokemonHeldItemVersion {
  rarity: number;
  version: Version; // e.g., "ruby", "sapphire"
}

interface PokemonHeldItem {
  item: Item; // e.g., "metal-powder", "quick-powder"
  version_details: PokemonHeldItemVersion[];
}

interface VersionGameIndex {
  game_index: number;
  version: Version;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource; // type (e.g., "normal")
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource; // stat (e.g., "hp", "attack")
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | null;
  version_group: VersionGroup;
}

interface PokemonMove {
  move: NamedAPIResource; // move (e.g., "transform")
  version_group_details: PokemonMoveVersion[];
}

interface PokemonSpritesVersionDetail {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface PokemonSpritesVersionIcons {
  front_default: string | null;
  front_female: string | null;
}

interface PokemonSpritesVersionGroup {
  "red-blue"?: PokemonSpritesVersionDetail;
  yellow?: PokemonSpritesVersionDetail;
  crystal?: PokemonSpritesVersionDetail & {
    back_shiny_transparent: string | null;
    back_transparent: string | null;
    front_shiny_transparent: string | null;
    front_transparent: string | null;
  };
  gold?: PokemonSpritesVersionDetail & { front_transparent: string | null };
  silver?: PokemonSpritesVersionDetail & { front_transparent: string | null };
  emerald?: { front_default: string | null; front_shiny: string | null };
  "firered-leafgreen"?: PokemonSpritesVersionDetail;
  "ruby-sapphire"?: PokemonSpritesVersionDetail;
  "diamond-pearl"?: PokemonSpritesVersionDetail;
  "heartgold-soulsilver"?: PokemonSpritesVersionDetail;
  platinum?: PokemonSpritesVersionDetail;
  "black-white"?: PokemonSpritesVersionDetail & {
    animated?: PokemonSpritesVersionDetail;
  };
  "omegaruby-alphasapphire"?: PokemonSpritesVersionDetail;
  "x-y"?: PokemonSpritesVersionDetail;
  "ultra-sun-ultra-moon"?: PokemonSpritesVersionDetail;
  icons?: PokemonSpritesVersionIcons;
}

interface PokemonSpritesOther {
  dream_world: PokemonSpritesVersionIcons;
  home: PokemonSpritesVersionDetail;
  "official-artwork": {
    front_default: string | null;
    front_shiny: string | null;
  };
  showdown: PokemonSpritesVersionDetail; // Dựa trên cấu trúc của showdown
}

interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: PokemonSpritesOther;
  versions: {
    "generation-i": { [key: string]: PokemonSpritesVersionDetail }; // Sử dụng index signature cho các thế hệ
    "generation-ii": {
      [key: string]:
        | PokemonSpritesVersionDetail
        | (PokemonSpritesVersionDetail & {
            front_transparent: string | null;
            back_shiny_transparent: string | null;
            back_transparent: string | null;
            front_shiny_transparent: string | null;
          });
    };
    "generation-iii": {
      [key: string]:
        | PokemonSpritesVersionDetail
        | { front_default: string | null; front_shiny: string | null };
    };
    "generation-iv": { [key: string]: PokemonSpritesVersionDetail };
    "generation-v": {
      [key: string]: PokemonSpritesVersionDetail & {
        animated: PokemonSpritesVersionDetail;
      };
    };
    "generation-vi": { [key: string]: PokemonSpritesVersionDetail };
    "generation-vii": {
      [key: string]: PokemonSpritesVersionDetail | PokemonSpritesVersionIcons;
    };
    "generation-viii": { [key: string]: PokemonSpritesVersionIcons };
  };
}

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface PastAbility {
  abilities: {
    ability: NamedAPIResource | null;
    is_hidden: boolean;
    slot: number;
  }[];
  generation: NamedAPIResource;
}

// --- Interface Chính (Root) ---

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  location_area_encounters: string;

  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  moves: PokemonMove[];
  stats: PokemonStat[];
  types: PokemonType[];
  cries: PokemonCries;

  // Các trường rỗng trong JSON có thể là mảng rỗng hoặc null
  past_abilities: PastAbility[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  past_types: any[]; // Dữ liệu trống trong JSON, có thể là NamedAPIResource[] nếu có

  species: NamedAPIResource;
  sprites: PokemonSprites;
}
