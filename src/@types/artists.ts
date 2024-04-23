import { Images } from "./songs";

export interface Artist{
  artistName:string,
  followers:FollowerInterface,
  genres:string[],
  href:string,
  images:Images[]
}

interface FollowerInterface{
  href:string|null,
  total:number
}