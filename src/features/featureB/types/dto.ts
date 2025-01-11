export type EventDto = {
  id: string;
  created_at: string;
  title: string;
  host_name: string;
  destination: string;
  expiry: string;
  num_started: number;
  num_completed: number;
  remaining_num: number;
  coordinates: [number, number];
  image_url: string;
};
