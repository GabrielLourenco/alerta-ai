import { ComplaintType } from './enums';

export interface Complaint {
	lat: number;
	lng: number;
	description: string;
	type: ComplaintType;
	created_at: Date;
	up_votes: number;
	down_votes: number;
	is_resolved: boolean;
	user: any;
}
