import React from "react";
import { styles } from "../styles/style";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Icon } from "@mui/material";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "35px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              1. Purpose :
            </h1>
            <SubdirectoryArrowRightIcon /> The purpose of this policy is to
            ensure the effective and secure use of the course management tool
            provided by CoursePool. This policy outlines the guidelines and
            responsibilities for users of the tool.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              2. User Access :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Access to the course management
              tool is restricted to authorized users, including Admin, enrolled
              students, and registered students.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Users must protect their login
              credentials and not share their account information with others.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Any unauthorized access or use of
              another users account is strictly prohibited.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              3. Data Security :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users are responsible for
              safeguarding sensitive information within the course management
              tool, including student records, grades, and other confidential
              data.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Users must adhere to applicable
              data protection laws and institutional data security policies.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              4. Content Guidelines :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users are responsible for the
              accuracy and appropriateness of the content they upload or share
              within the course management tool.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Content that is offensive,
              discriminatory, or violates intellectual property rights is
              strictly prohibited.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              5. Communication :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users should use the communication
              features of the tool responsibly and professionally.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Harassment, bullying, or any form
              of abusive communication is not tolerated.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              6. Intellectual Property :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users must respect intellectual
              property rights, including copyrights and trademarks, when
              uploading or sharing content within the tool.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Users should not upload or
              distribute copyrighted materials without proper authorization.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              7. Technical Guidelines :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users must use the course
              management tool in a manner that does not disrupt the system or
              compromise its security.
            </p>
            <p>
              <SubdirectoryArrowRightIcon /> Users should report any technical
              issues or vulnerabilities to the IT support team promptly.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              8. Compliance :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Users must comply with all
              applicable laws, regulations, and institutional policies while
              using the course management tool.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              9. Consequences of Violation :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> Violation of this policy may result
              in account suspension, disciplinary action, or legal consequences,
              depending on the severity of the violation.
            </p>
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            <h1 className="py-2 ml-[-18px] text-[20px] font-Poppins leading-8 whitespace-pre-line">
              10. Policy Review :
            </h1>
            <p>
              <SubdirectoryArrowRightIcon /> This policy will be reviewed
              periodically and updated as necessary to ensure its effectiveness
              and relevance.
            </p>
          </p>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Policy;
