import { Education } from './Education';
import { Experience } from './Experience';
import { Maybe } from './helpers';
import { Link } from './Links';
import { Profile } from './Profile';
import { Skill } from './Skills';

type QueryType<T> = Maybe<Array<Maybe<T>>>;

export type Query = {
  __typename?: 'Query';
  skills?: QueryType<Skill>;
  profiles?: QueryType<Profile>;
  links?: QueryType<Link>;
  experiences?: QueryType<Experience>;
  education?: QueryType<Education>;
};
