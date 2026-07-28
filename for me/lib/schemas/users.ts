import { z } from "zod";

export const userStatusSchema = z.enum([
  "Active",
  "Pending",
  "Inactive",
  "Blacklisted",
]);

export const organizationSchema = z.object({
  organization_id: z.string(),
  organization_name: z.string(),
  organization_industry: z.string(),
  organization_branch: z.string(),
});

export const monthlyIncomeSchema = z.object({
  minimum: z.number(),
  maximum: z.number(),
  currency: z.string(),
});

export const educationEmploymentSchema = z.object({
  level_of_education: z.string(),
  employment_status: z.string(),
  sector_of_employment: z.string(),
  duration_of_employment: z.string(),
  office_email: z.string().email(),
  monthly_income: monthlyIncomeSchema,
  loan_repayment: z.number(),
});

export const socialsSchema = z.object({
  twitter: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
});

export const guarantorSchema = z.object({
  full_name: z.string(),
  phone_number: z.string(),
  email_address: z.string().email(),
  relationship: z.string(),
  home_address: z.string(),
});

export const profileSchema = z.object({
  avatar: z.string(),
  user_name: z.string(),
  full_name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email_address: z.string().email(),
  phone_number: z.string(),
  bvn: z.string(),
  gender: z.string(),
  marital_status: z.string(),
  children: z.string(),
  type_of_residence: z.string(),
  date_joined: z.string().datetime(),
  user_tier: z.number(),
});

export const generalDetailsSchema = z.object({
  profile: profileSchema,
  education_and_employment: educationEmploymentSchema,
  socials: socialsSchema,
  guarantors: z.array(guarantorSchema),
});

export const documentSchema = z.object({
  document_id: z.string(),
  document_type: z.string(),
  document_name: z.string(),
  document_number: z.string(),
  verification_status: z.enum(["Verified", "Pending"]),
  uploaded_at: z.string().datetime(),
  expiry_date: z.string().datetime(),
  file_url: z.string(),
});

export const loanSchema = z.object({
  loan_id: z.string(),
  loan_type: z.string(),
  loan_status: z.enum([
    "Ongoing",
    "Completed",
    "Overdue",
  ]),
  loan_amount: z.number(),
  interest_rate: z.number(),
  loan_duration: z.number(),
  monthly_repayment: z.number(),
  amount_paid: z.number(),
  amount_remaining: z.number(),
  next_payment_date: z.string().datetime(),
  loan_created_at: z.string().datetime(),
});

export const transactionSchema = z.object({
  transaction_id: z.string(),
  transaction_type: z.enum([
    "Credit",
    "Debit",
  ]),
  transaction_amount: z.number(),
  transaction_description: z.string(),
  transaction_status: z.string(),
  transaction_date: z.string().datetime(),
});

export const savingsSchema = z.object({
  wallet_balance: z.number(),
  locked_savings: z.number(),
  target_savings: z.number(),
  interest_earned: z.number(),
  total_deposits: z.number(),
  last_deposit_date: z.string().datetime(),
  saving_transactions: z.array(transactionSchema),
});

export const bankDetailsSchema = z.object({
  bank_name: z.string(),
  account_name: z.string(),
  account_number: z.string(),
  account_type: z.string(),
  currency: z.string(),
  balance: z.number(),
  available_balance: z.number(),
  sort_code: z.string(),
  verification_status: z.enum([
    "Verified",
    "Pending",
  ]),
});

export const notificationPreferencesSchema = z.object({
  email_notifications: z.boolean(),
  sms_notifications: z.boolean(),
  push_notifications: z.boolean(),
});

export const appSystemSchema = z.object({
  account_status: userStatusSchema,
  kyc_status: z.enum([
    "Verified",
    "Pending",
  ]),
  email_verified: z.boolean(),
  phone_verified: z.boolean(),
  two_factor_authentication: z.boolean(),
  last_login: z.string().datetime(),
  last_active: z.string().datetime(),
  login_count: z.number(),
  failed_login_attempts: z.number(),
  device_name: z.string(),
  browser: z.string(),
  operating_system: z.string(),
  ip_address: z.string(),
  preferred_language: z.string(),
  time_zone: z.string(),
  notification_preferences: notificationPreferencesSchema,
});

export const userSchema = z.object({
  id: z.string(),
  status: userStatusSchema,
  organization: organizationSchema,
  general_details: generalDetailsSchema,
  documents: z.array(documentSchema),
  bank_details: bankDetailsSchema,
  loans: z.array(loanSchema),
  savings: savingsSchema,
  app_and_system: appSystemSchema,
});

export const usersSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;
export type Users = z.infer<typeof usersSchema>;
export type UserStatus = z.infer<typeof userStatusSchema>;