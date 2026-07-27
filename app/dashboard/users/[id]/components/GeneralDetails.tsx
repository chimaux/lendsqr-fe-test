import styles from "../page.module.scss";
import DetailItem from "./DetailItem";

import type { User } from "@/lib/schemas/users";

type Props = {
  user: User;
};

export default function GeneralDetails({ user }: Props) {
  const {
    profile,
    education_and_employment,
    socials,
    guarantors,
  } = user.general_details;

  const {
    minimum,
    maximum,
    currency,
  } = education_and_employment.monthly_income;

  return (
    <div className={styles.contentCard}>
      {/* ============================
          Personal Information
      ============================ */}

      <section className={styles.section}>
        <h3>Personal Information</h3>

        <div className={styles.infoGrid}>
          <DetailItem
            label="Full Name"
            value={profile.full_name}
          />

          <DetailItem
            label="Phone Number"
            value={profile.phone_number}
          />

          <DetailItem
            label="Email Address"
            value={profile.email_address}
          />

          <DetailItem
            label="BVN"
            value={profile.bvn}
          />

          <DetailItem
            label="Gender"
            value={profile.gender}
          />

          <DetailItem
            label="Marital Status"
            value={profile.marital_status}
          />

          <DetailItem
            label="Children"
            value={profile.children}
          />

          <DetailItem
            label="Type of Residence"
            value={profile.type_of_residence}
          />
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      {/* ============================
          Education & Employment
      ============================ */}

      <section className={styles.section}>
        <h3>Education and Employment</h3>

        <div className={styles.infoGrid}>
          <DetailItem
            label="Level of Education"
            value={education_and_employment.level_of_education}
          />

          <DetailItem
            label="Employment Status"
            value={education_and_employment.employment_status}
          />

          <DetailItem
            label="Sector of Employment"
            value={education_and_employment.sector_of_employment}
          />

          <DetailItem
            label="Duration of Employment"
            value={education_and_employment.duration_of_employment}
          />

          <DetailItem
            label="Office Email"
            value={education_and_employment.office_email}
          />

          <DetailItem
            label="Monthly Income"
            value={`${currency}${minimum.toLocaleString()} - ${currency}${maximum.toLocaleString()}`}
          />

          <DetailItem
            label="Loan Repayment"
            value={`${currency}${education_and_employment.loan_repayment.toLocaleString()}`}
          />
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      {/* ============================
          Socials
      ============================ */}

      <section className={styles.section}>
        <h3>Socials</h3>

        <div className={styles.infoGrid}>
          <DetailItem
            label="Twitter"
            value={socials.twitter}
          />

          <DetailItem
            label="Facebook"
            value={socials.facebook}
          />

          <DetailItem
            label="Instagram"
            value={socials.instagram}
          />

          <DetailItem
            label="LinkedIn"
            value={socials.linkedin}
          />
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      {/* ============================
          Guarantor
      ============================ */}

      <section className={styles.section}>
        <h3>Guarantor</h3>

        {guarantors.map((guarantor, index) => (
          <div
            key={index}
            className={styles.infoGrid}
            style={index > 0 ? { marginTop: "var(--space-8)" } : undefined}
          >
            <DetailItem
              label="Full Name"
              value={guarantor?.full_name}
            />

            <DetailItem
              label="Phone Number"
              value={guarantor?.phone_number}
            />

            <DetailItem
              label="Email Address"
              value={guarantor?.email_address}
            />

            <DetailItem
              label="Relationship"
              value={guarantor?.relationship}
            />

            <DetailItem
              label="Home Address"
              value={guarantor?.home_address}
            />
          </div>
        ))}
      </section>
    </div>
  );
}