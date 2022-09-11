import { createAction } from '@reduxjs/toolkit';

export const postOrder = createAction('data/postOrder', (value) => ({payload: value}));
