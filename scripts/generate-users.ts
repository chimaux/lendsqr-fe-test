// scripts/generate-users.ts
import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

const ORGANIZATIONS = [
  "Lendsqr",
  "Irorun",
  "Carbon",
  "FairMoney",
  "Renmoney",
  "Branch",
  "PalmPay",
  "Kuda",
  "Moniepoint",
];

const BANKS = [
  "Access Bank",
  "GTBank",
  "Zenith Bank",
  "UBA",
  "First Bank",
  "Providus Bank",
  "Fidelity Bank",
  "Stanbic IBTC",
];

const STATUSES = ["Active", "Inactive", "Pending", "Blacklisted"];
const EDUCATION = ["B.Sc", "HND", "OND", "M.Sc", "MBA"];
const EMPLOYMENT = ["Employed", "Self Employed", "Unemployed"];
const RESIDENCE = ["Parent's Apartment", "Rented Apartment", "Own House"];
const LOAN_TYPES = [
  "Salary Loan",
  "Business Loan",
  "Car Loan",
  "Mortgage",
  "Personal Loan",
];
const DOC_TYPES = [
  "Government ID",
  "Passport",
  "Driver License",
  "Utility Bill",
];

const pick = <T,>(arr: T[]) => faker.helpers.arrayElement(arr);

// Common Nigerian mobile prefixes
const PHONE_PREFIXES = [
  "0701",
  "0702",
  "0703",
  "0704",
  "0705",
  "0706",
  "0707",
  "0708",
  "0802",
  "0803",
  "0804",
  "0805",
  "0806",
  "0807",
  "0808",
  "0809",
  "0810",
  "0811",
  "0812",
  "0813",
  "0814",
  "0815",
  "0816",
  "0817",
  "0818",
  "0819",
  "0901",
  "0902",
  "0903",
  "0904",
  "0905",
  "0906",
  "0907",
  "0908",
  "0909",
  "0911",
  "0912",
  "0913",
  "0915",
];

function generatePhoneNumber() {
  const prefix = faker.helpers.arrayElement(PHONE_PREFIXES);
  const remaining = faker.string.numeric(11 - prefix.length);

  return `${prefix}${remaining}`;
}

function guarantor() {
  return {
    full_name: faker.person.fullName(),
    phone_number: generatePhoneNumber(),
    email_address: faker.internet.email(),
    relationship: pick([
      "Brother",
      "Sister",
      "Father",
      "Mother",
      "Friend",
    ]),
    home_address: faker.location.streetAddress(),
  };
}

function document() {
  return {
    document_id: faker.string.uuid(),
    document_type: pick(DOC_TYPES),
    document_name: pick([
      "National ID",
      "International Passport",
      "Driver License",
      "Electricity Bill",
    ]),
    document_number: faker.string.alphanumeric(12).toUpperCase(),
    verification_status: pick(["Verified", "Pending"]),
    uploaded_at: faker.date.past().toISOString(),
    expiry_date: faker.date.future().toISOString(),
    file_url: "/documents/sample.pdf",
  };
}

function loan() {
  const amount = faker.number.int({
    min: 50_000,
    max: 5_000_000,
  });

  const paid = faker.number.int({
    min: 0,
    max: amount,
  });

  return {
    loan_id: faker.string.uuid(),
    loan_type: pick(LOAN_TYPES),
    loan_status: pick(["Ongoing", "Completed", "Overdue"]),
    loan_amount: amount,
    interest_rate: faker.number.int({
      min: 5,
      max: 25,
    }),
    loan_duration: pick([6, 12, 24, 36]),
    monthly_repayment: Math.round(amount / 12),
    amount_paid: paid,
    amount_remaining: amount - paid,
    next_payment_date: faker.date.future().toISOString(),
    loan_created_at: faker.date.past().toISOString(),
  };
}

function transaction() {
  return {
    transaction_id: faker.string.uuid(),
    transaction_type: pick(["Credit", "Debit"]),
    transaction_amount: faker.number.int({
      min: 1_000,
      max: 500_000,
    }),
    transaction_description: pick([
      "Salary",
      "Transfer",
      "Savings",
      "Loan Repayment",
    ]),
    transaction_status: "Successful",
    transaction_date: faker.date.recent().toISOString(),
  };
}

function createUser(index: number) {
  const first = faker.person.firstName();
  const last = faker.person.lastName();

  const minIncome = faker.number.int({
    min: 100_000,
    max: 400_000,
  });

  const maxIncome =
    minIncome +
    faker.number.int({
      min: 50_000,
      max: 500_000,
    });

  return {
    id: `usr_${String(index + 1).padStart(6, "0")}`,
    status: pick(STATUSES),

    organization: {
      organization_id: `org_${faker.string
        .alphanumeric(6)
        .toLowerCase()}`,
      organization_name: pick(ORGANIZATIONS),
      organization_industry: "FinTech",
      organization_branch: faker.location.city(),
    },

    general_details: {
      profile: {
        avatar: faker.image.avatar(),
        user_name: faker.internet.username({
          firstName: first,
          lastName: last,
        }),
        full_name: `${first} ${last}`,
        first_name: first,
        last_name: last,
        email_address: faker.internet.email({
          firstName: first,
          lastName: last,
        }),
        phone_number: generatePhoneNumber(),
        bvn: faker.string.numeric(11),
        gender: pick(["Male", "Female"]),
        marital_status: pick(["Single", "Married"]),
        children: pick(["None", "1", "2", "3"]),
        type_of_residence: pick(RESIDENCE),
        date_joined: faker.date.past().toISOString(),
        user_tier: faker.number.int({
          min: 1,
          max: 3,
        }),
      },

      education_and_employment: {
        level_of_education: pick(EDUCATION),
        employment_status: pick(EMPLOYMENT),
        sector_of_employment: faker.company.buzzNoun(),
        duration_of_employment: `${faker.number.int({
          min: 1,
          max: 15,
        })} years`,
        office_email: faker.internet.email(),
        monthly_income: {
          minimum: minIncome,
          maximum: maxIncome,
          currency: "NGN",
        },
        loan_repayment: faker.number.int({
          min: 10_000,
          max: 150_000,
        }),
      },

      socials: {
        twitter: "@" + faker.internet.username(),
        facebook: faker.person.fullName(),
        instagram: "@" + faker.internet.username(),
        linkedin: faker.person.fullName(),
      },

      guarantors: Array.from(
        {
          length: faker.number.int({
            min: 1,
            max: 2,
          }),
        },
        () => guarantor()
      ),
    },

    documents: Array.from(
      {
        length: faker.number.int({
          min: 2,
          max: 5,
        }),
      },
      () => document()
    ),

    bank_details: {
      bank_name: pick(BANKS),
      account_name: `${first} ${last}`,
      account_number: faker.finance.accountNumber(10),
      account_type: pick(["Savings", "Current"]),
      currency: "NGN",
      balance: faker.number.int({
        min: 10_000,
        max: 5_000_000,
      }),
      available_balance: faker.number.int({
        min: 5_000,
        max: 3_000_000,
      }),
      sort_code: faker.string.numeric(3),
      verification_status: "Verified",
    },

    loans: Array.from(
      {
        length: faker.number.int({
          min: 0,
          max: 3,
        }),
      },
      () => loan()
    ),

    savings: {
      wallet_balance: faker.number.int({
        min: 1_000,
        max: 3_000_000,
      }),
      locked_savings: faker.number.int({
        min: 0,
        max: 1_000_000,
      }),
      target_savings: faker.number.int({
        min: 100_000,
        max: 5_000_000,
      }),
      interest_earned: faker.number.int({
        min: 0,
        max: 50_000,
      }),
      total_deposits: faker.number.int({
        min: 10_000,
        max: 6_000_000,
      }),
      last_deposit_date: faker.date.recent().toISOString(),
      saving_transactions: Array.from(
        {
          length: faker.number.int({
            min: 2,
            max: 10,
          }),
        },
        () => transaction()
      ),
    },

    app_and_system: {
      account_status: pick(STATUSES),
      kyc_status: pick(["Verified", "Pending"]),
      email_verified: faker.datatype.boolean(),
      phone_verified: faker.datatype.boolean(),
      two_factor_authentication: faker.datatype.boolean(),
      last_login: faker.date.recent().toISOString(),
      last_active: faker.date.recent().toISOString(),
      login_count: faker.number.int({
        min: 1,
        max: 500,
      }),
      failed_login_attempts: faker.number.int({
        min: 0,
        max: 5,
      }),
      device_name: pick([
        "Windows 11",
        "MacBook Pro",
        "iPhone",
        "Samsung Galaxy",
      ]),
      browser: pick([
        "Chrome",
        "Edge",
        "Firefox",
        "Safari",
      ]),
      operating_system: pick([
        "Windows",
        "macOS",
        "Android",
        "iOS",
      ]),
      ip_address: faker.internet.ip(),
      preferred_language: "English",
      time_zone: "Africa/Lagos",

      notification_preferences: {
        email_notifications: true,
        sms_notifications: false,
        push_notifications: true,
      },
    },
  };
}

const users = Array.from(
  { length: 500 },
  (_, i) => createUser(i)
);

const outDir = path.join(process.cwd(), "data");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, {
    recursive: true,
  });
}

fs.writeFileSync(
  path.join(outDir, "users.json"),
  JSON.stringify(users, null, 2),
  "utf8"
);

console.log("✅ Generated 500 users.");