export interface AccountType {
  type: "account" | "college";
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CollegeType {
  type: "account" | "college";
  city: string;
  college: string;
  group: string;
}