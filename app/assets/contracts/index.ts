interface ChainContracts {
  [chainId: number]: string;
}

interface PaymentTokens {
  [chainId: number]: string[];
}

export const presaleFactoryContracts: ChainContracts = {
  84531: "0xBe0C7950a8912756a8E61fC39D6B1D1Df8B378c4"
};
export const sparkFiTokenContracts: ChainContracts = {
  84531: "0xf6a6a429a0b9676293Df0E3616A6a33cA673b5C3"
};
export const allocatorContracts: ChainContracts = {
  84531: "0xA209292B45DB74C0c8699b266cB9087a34D6A2b1"
};
export const launchpadPaymentTokens: PaymentTokens = {
  84531: [
    "0x4200000000000000000000000000000000000006",
    "0x6D0F8D488B669aa9BA2D0f0b7B75a88bf5051CD3",
    "0x290B54A504A3b0cB21888e3E405AFC1b2946598C",
    "0x2e9F75DF8839ff192Da27e977CD154FD1EAE03cf"
  ]
};
