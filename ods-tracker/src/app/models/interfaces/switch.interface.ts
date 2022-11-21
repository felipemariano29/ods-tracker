export interface SwitchInterface {
  options: SwitchOptions;
  id?: string;
  switch?: () => void;
}

export interface SwitchOptions {
  on: string;
  off: string;
}
