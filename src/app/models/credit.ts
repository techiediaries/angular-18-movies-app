export interface Credits {
  cast: Actor[];
}

export interface Actor {
  name: string;
  profile_path: string;
  character: string;
  id: number;
}
