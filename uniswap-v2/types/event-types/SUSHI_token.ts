import type {ReturnNumber} from "@supercolony/typechain-types";
import type * as ReturnTypes from '../types-returns/SUSHI_token';

export interface Transfer {
	from: ReturnTypes.AccountId | null;
	to: ReturnTypes.AccountId | null;
	value: ReturnNumber;
}

export interface Approval {
	owner: ReturnTypes.AccountId;
	spender: ReturnTypes.AccountId;
	value: ReturnNumber;
}
