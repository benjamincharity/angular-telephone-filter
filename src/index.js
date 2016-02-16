import { TelephoneFilter } from './telephone.filter';

angular.module('bc.TelephoneFilter', [])
    .filter('bcTelephone', TelephoneFilter)
;

