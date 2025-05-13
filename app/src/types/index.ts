export interface GameTranslation {
  title: string;
  description: string;
  story: string;
}

export interface Game {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  platform: string;
  translations: {
    en: GameTranslation;
    de: GameTranslation;
    fr: GameTranslation;
    ru: GameTranslation;
    zh: GameTranslation;
    ar: GameTranslation;
    vi: GameTranslation;
  };
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
    };
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface RedeemFormData {
  tiktokUsername: string;
  gameName: string;
  cardSerialNumber: string;
  cvv: string;
}

export interface RedeemCardPayload {
  type: string;
  data: {
    number: string;
    cvv: string;
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}