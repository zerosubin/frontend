// recoil/atoms.ts

import { atom } from 'recoil';

export const isDeleteState = atom<boolean>({
  key: 'isDeleteState',
  default: false,
});
