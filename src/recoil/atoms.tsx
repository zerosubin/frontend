// recoil/atoms.ts

import { atom } from 'recoil';

export const isDeleteState = atom<boolean>({
  key: 'isDeleteState',
  default: false,
});

export const nicknameState = atom<any>({
  key:'nickname',
  default: '테스트',
})

export const mapCenterState = atom<{lat: number, lon: number} | null>({
  key: 'mapCenter',
  default: null
})

export const likelist = atom<any>({
  key:'likelist',
  default: [],
})

export const idState = atom<any>({
  key: 'id',
  default: ''
})