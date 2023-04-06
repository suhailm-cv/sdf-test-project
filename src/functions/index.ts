export type projectRoles = "Initiator" | "Reviewer" | "Member" | "Guest";

export interface IUser {
  id: number;
  name: string;
}

export interface IProjectAllocation {
	id: number;
	allocationStartDate: string;
	allocationEndDate: string;
	role: string;
	user: IUser;
	isActive: boolean;
}

export interface IProjectAllocationState {
	data: IProjectAllocation[];
	status: "idle" | "loading" | "failed" | "success";
}

export interface IGetCurrentProjectRole { 
  initiatorId: string | number; 
  reviewerId: string | number; 
  projectAllocation: IProjectAllocationState; 
  loggedInUserId: number;
}

export const getCurrentProjectRoleOfUser = ({
	initiatorId,
	reviewerId,
	projectAllocation,
  loggedInUserId,
}: IGetCurrentProjectRole): projectRoles => {
  if (loggedInUserId === reviewerId) {
    return "Reviewer";
  } 
  if (loggedInUserId === initiatorId) {
    return "Initiator";
  }
	if (projectAllocation.data.filter((member) => member.user.id === loggedInUserId).length > 0) {
				return "Member";
	}
	return "Guest";
};

export default {
	getCurrentProjectRoleOfUser,
	
}

//5	Star Performance		Performance above and beyond set objectives and consistently exceeds expectations 			
// 4	Exceeds expectations		Performance above expectations within several areas			
// 3	Meets expectations		Meets the performance objectives set at all levels			
// 2	Below expectations		From time to time, does not meets expected performance			
// 1	Needs attention		Consistently does not meet expected performance level			
// ND	No data		Appraisee has not had the opportunity work in this area			
// NA	Not Applicable		This is not relevant to the appraisee			

const selfReview = {
	question: "Quality of Deliverables -  Strive for quality work; put forth extra effort to ensure quality work. Develops and implements new solutions, procedures and concepts. Demonstrates accuracy, thoroughness, and reliability. Shows organization and completeness, Pays attention to detail, Consistently delivers what is required when required",
	rate: 4,
	myCommentBecause: "Last project I able to write and test owen test cases based on the requirement. Because I believe without quality there is no product.",
}
