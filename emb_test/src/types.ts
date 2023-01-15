export type Rocket = {
  id: string;
  mission_name: string;
  ships: Ship[];
};

export type QueryRockets = {
  launchesPast: Rocket[];
};

export type Ship = {
  name: string;
  home_port: string;
  type: string;
  id: string;
};


export type QueryPages = {
  launchesPast: string[]
}
