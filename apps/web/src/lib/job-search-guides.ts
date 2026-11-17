type GuideSection = {
  title: string;
  paragraphs: string[];
  examples?: { label: string; text: string }[];
};

type JobSearchGuide = {
  slug: string;
  title: string;
  summary: string;
  sections: GuideSection[];
  workspaceTip: string;
};

export const guides: JobSearchGuide[] = [
  {
    slug: 'tailor-resume-to-job-description',
    title: 'How to tailor your resume to a job description',
    summary: 'Match the employer’s priorities to your experience and see how a vague resume bullet becomes evidence you can discuss in an interview.',
    sections: [
      {
        title: 'Identify what the employer needs',
        paragraphs: [
          'Start with the responsibilities and required qualifications. Pick the three capabilities that seem most important to doing the job. For each one, write down a project, role, or achievement that shows what you did and how it helped.',
          'Suppose a software engineering posting asks for REST APIs, automated tests, and production support. Your matching evidence could be an endpoint you built, a regression test you added, and an incident you helped resolve. If you have a gap, look for related experience you can explain accurately.',
        ],
      },
      {
        title: 'Rewrite the bullets that carry the most weight',
        paragraphs: [
          'Start with a verb that describes your contribution, name the work, and include a result or the reason it mattered. Put your strongest relevant bullets near the top of the applicable role. Make skills easy to spot by using terminology from the posting when it accurately describes your work.',
        ],
        examples: [
          { label: 'Sample bullet before editing', text: 'Worked on backend services and fixed bugs.' },
          { label: 'Sample bullet after editing', text: 'Built a REST endpoint for shipment status and added regression tests for duplicate events, so the support team could rely on the updates customers saw.' },
        ],
      },
      {
        title: 'Check the final version against your records',
        paragraphs: [
          'Read each edited bullet aloud and check that you can explain it with a real example. Confirm names, job titles, dates, tools, and any numbers against your original records. Open the exported file and inspect page breaks, section labels, and contact details before sending it.',
          'Keep a master resume and save the tailored version alongside the posting. You can then see which claims and projects you highlighted when an interview is scheduled.',
        ],
      },
    ],
    workspaceTip: 'Start an application with your saved profile and paste the job description. Review the draft against your records, edit it, and export the version you want to submit.',
  },
  {
    slug: 'write-a-tailored-cover-letter',
    title: 'How to write a tailored cover letter',
    summary: 'Choose one story that fits the role, connect it to the employer’s needs, and edit the letter with a worked example.',
    sections: [
      {
        title: 'Choose one reason to apply and one story',
        paragraphs: [
          'Read the job description and find a responsibility that genuinely interests you. Then pick an example from your experience that shows you can help with it. A specific connection, such as improving a handoff or making a recurring process easier to maintain, gives the reader something concrete to remember.',
          'For a data analyst role focused on dependable reporting, choose a story about the accuracy or usefulness of a report. Explain your contribution, who used the result, and how it relates to what the new employer needs.',
        ],
      },
      {
        title: 'Draft a short letter in three parts',
        paragraphs: [
          'Name the position and the part of the work that interests you. In the middle, use a few sentences to describe your example and connect it to the job. Close by thanking the reader and naming the contribution you would like to discuss.',
        ],
        examples: [
          { label: 'Sample opening', text: 'I’m applying for the Data Analyst role because I enjoy turning inconsistent reporting into information teams can use to make decisions.' },
          { label: 'Sample evidence', text: 'On a weekly operations dashboard, I wrote a SQL check that surfaced duplicate records before the report went out. I documented the check so an analyst on rotation could verify the figures without needing to ask me.' },
        ],
      },
      {
        title: 'Read the draft as a hiring manager would',
        paragraphs: [
          'Check that the company and job title match the posting and that the letter explains a reason to consider you. Verify any claim about the organization against a source you have read. Tighten repeated points from the resume and check that the letter still sounds like something you would say.',
          'Save the final letter with the resume you actually submitted. Use the file format the posting requests, and reopen the exported document before attaching it.',
        ],
      },
    ],
    workspaceTip: 'Use the same saved profile and job description for your cover letter and resume. Review and edit each draft, then keep the exported versions with your application record.',
  },
  {
    slug: 'track-your-job-applications',
    title: 'How to track your job applications',
    summary: 'Set up a practical tracker for posting links, the documents you submit, and your next action for each role.',
    sections: [
      {
        title: 'Make a record while the posting is open',
        paragraphs: [
          'Save the employer, job title, original posting URL, and a short note about the requirements or team. Company career pages can remove closed postings, so retain the details you’ll want to review later, such as the core responsibilities and location or work authorization requirements.',
          'Use the posting URL or requisition number to spot listings that appear on multiple job boards. When you apply to two roles at the same company, use separate records so each conversation and document stays tied to the right role.',
        ],
      },
      {
        title: 'Record what happened and what to do next',
        paragraphs: [
          'Choose a few statuses that reflect your process, such as saved, applied, assessment, interview, and closed. When a status changes, record the date and the next useful action. For a scheduled interview, that may be to prepare a specific project example or confirm the time zone.',
        ],
        examples: [
          { label: 'Sample application record', text: 'Northwind Lab · Backend Engineer · Applied November 12 · Resume and cover letter version 2 · Next action: review the role and draft questions before the recruiter call.' },
        ],
      },
      {
        title: 'Review the tracker on a regular schedule',
        paragraphs: [
          'Set aside time each week to check deadlines, close out completed processes, and see which roles deserve attention next. Give priority to actions with a real deadline, such as an assessment due date or an interview confirmation.',
          'Before a call, open the posting, the notes from any earlier conversation, and the exact documents you sent. After the call, record the decision or follow-up date while the details are fresh.',
        ],
      },
    ],
    workspaceTip: 'Keep the job description, URL, status, notes, and document versions together in your AnchorProposal application. Update the record after applying on the employer’s site.',
  },
];
