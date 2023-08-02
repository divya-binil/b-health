export const classes = [
  "Analytics",
  "Asset Management",
  "Collaboration",
  "Content",
  "Design",
  "Engineering",
  "Knowledge Management",
  "Marketing",
  "Product Management",
  "Sales",
  "Telemetry",
  "Testing",
  "Framework",
  "test data",
] as const;
export type Class = (typeof classes)[number];

export const priorities = [
  "Primary",
  "Secondary",
  "Tertiary",
  "Quaternary",
  "",
] as const;
export type Priority = (typeof priorities)[number];

export const needs = [
  "Annotations",
  "Browser Extension Framework",
  "Chat - One on One",
  "Code Repo",
  "Configuration and Feature Flags",
  "Content Management",
  "Content Writing",
  "CRM",
  "Diagramming",
  "End-two-end testing",
  "Enterprise Database",
  "File Sharing",
  "Funnel Management, User Journey",
  "Group Whiteboard",
  "Knowledge Representation",
  "Mailing List Management",
  "Observability and Analytics",
  "Project Management",
  "SEO",
  "SMTP and Transactional E-mail",
  "Taming Volatile Ideas",
  "Task Management",
  "Telemetry Tracking",
  "Text Editor and IDE",
  "Threaded Discussions",
  "UI Design",
  "Web Conference",
  "Wiki",
  "Email Testing",
  "Static Site Generator",
  "User Interface Builder",
  "Server Environment",
  "Identity and Access Management",
] as const;
export type Need = (typeof needs)[number];

export const tools = [
  "Camunda Modeler",
  "Diagrams.net",
  "FatFree CRM",
  "Figma",
  "Funnelytics",
  "GitLab EE",
  "Google Analytics",
  "Google Keyword Planner",
  "GoToMeeting",
  "GPM",
  "Grafana",
  "Hypothes.is",
  "jBPM",
  "Kroki",
  "ListMonk",
  "Mailgun",
  "Markdown",
  "Mermaid",
  "Miniflux",
  "Nautobot",
  "Notion",
  "OpenProject CE",
  "PlantUML",
  "Playwright",
  "Plasmo",
  "PostgreSQL",
  "Prometheus",
  "Protege",
  "SigNoz",
  "Skype",
  "Unleash",
  "Visual Studio Code",
  "Webmaster",
  "Xmind",
  "TBD",
  "Imgproxy",
  "Gotenberg",
  "Clarity",
  "Email on Acid",
  "Hugo",
  "React",
  "Node",
  "Keycloak",
  "Astro",
] as const;

export type Tool = (typeof tools)[number];
export interface Instance {
  readonly SlNo: number;
  readonly class: Class;
  readonly need: Need;
  readonly tool: Tool;
  readonly purpose?: string;
  readonly priority?: Priority;
  readonly links?: string;
  readonly versionInProduction?: string;
  readonly versionInExperimental?: string;
  readonly versionLatestFromVendor?: string;
  readonly latestRelaeseDateFromVendor?: string;
  readonly releaseNoteURL?: string;
}
