import { maths } from './maths';
import { francais } from './francais';
import { histoire } from './histoire';
import { geo } from './geo';
import { emc } from './emc';
import { physique } from './physique';
import { svt } from './svt';
import { techno } from './techno';
import { Subject } from '../types';

export const subjects: Subject[] = [
  maths,
  francais,
  histoire,
  geo,
  emc,
  physique,
  svt,
  techno
];

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};
