export interface Song{
  songName:string,
  artist:Artist[]
  albumArtists:Artist[]
  images:Images[]|null
  previewUrl:string
}

export interface Artist{
  name:string,
  href:string,
  type:string
}

export interface Images{
  height:number|null,
  url:string|null,
  width:number|null
}