import * as api from '@lp-labs/base-converter';
import { convertBase } from '@lp-labs/base-converter';
console.log(convertBase('ff', 16, 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.convertBase('ff', 'hex', 2);
