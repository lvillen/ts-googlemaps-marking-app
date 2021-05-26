import { User } from './User';
import { Company } from './company';
import { CustomMap } from './CustomMap';

const user = new User();

const customMap = new CustomMap('map');

customMap.addMarker(user);

const company = new Company();

customMap.addMarker(company);