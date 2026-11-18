import { part1 } from './part1';
import { part2 } from './part2';
import { part3 } from './part3';
import { procedures, tests } from './part4';
export type { Service, Body } from './types';
export const services = [...part1, ...part2, ...part3, ...procedures];
export const eyeTests = tests;
