// Skapa på mina vänner!

export type Beer = {
    id: number,
    name: string,
    description: string,
    food_pairing: string;
    image_url?: string
    }

    export type Button = {
        text: string;
        onClick: () => void;
      };