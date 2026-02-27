export interface IImage {
  src: any
  thumbnail?: string
  title: string
}

export interface IProject {
  key: string
  name: string
  thumbnail: any
  url: string
  tech: string[]
}

export interface ISocial {
  name: string
  desc: string
  url: string
  icon: string
}

export type SocialType = 'resume' | 'linkedin' | 'github' | 'gmail'
