// recoil/atoms.ts

import { atom } from 'recoil';

export const isDeleteState = atom<boolean>({
  key: 'isDeleteState',
  default: false,
});

export const nicknameState = atom<any>({
  key:'nickname',
  default: '',
})

export const mapCenterState = atom<{lat: number, lon: number} | null>({
  key: 'mapCenter',
  default: null
})