export interface Photo {
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

export interface PhotosData {
  photos: {
    data: Photo[]
    meta: {
      totalCount: number
    }
  }
}
