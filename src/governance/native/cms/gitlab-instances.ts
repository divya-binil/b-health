import os from "node:os";
import * as m from "../../../lib/universal/memoize";
import * as mAPI from "../../../lib/universal/memoize-api";

export const gitLabInstanceIDs = [
  "git.netspective.io",
  "gl.infra.medigy.com",
] as const;
export type GitLabInstanceID = (typeof gitLabInstanceIDs)[number];

export interface Props {
  readonly identity: GitLabInstanceID;
  readonly host: URL;
  readonly description: string;
  readonly token: () => string | undefined;
  readonly memoizableApiResponse: <A extends unknown[], V>(
    queryFn: (...args: A) => Promise<V>,
    key: string,
  ) => (...args: A) => Promise<V>;
  readonly noTokenError: (defn: Props) => string;
}

export type GitLabInstanceDefn = Props;

export const glInstanceDefn = (
  identity: GitLabInstanceID,
  props: Omit<
    GitLabInstanceDefn,
    "identity" | "host" | "memoizableApiResponse"
  >,
): GitLabInstanceDefn => {
  const marInstances = new Map<string, (...args: any) => Promise<any>>();
  const result: GitLabInstanceDefn = {
    identity,
    host: new URL(`https://${identity}`),
    memoizableApiResponse: <A extends unknown[], V>(
      apiCallFn: (...args: A) => Promise<V>,
      key: string,
    ): ((...args: A) => Promise<V>) => {
      let instance = marInstances.get(key);
      if (!instance) {
        instance = m.memoize(
          apiCallFn,
          mAPI.apiMssFactory({
            isApiAvailable: () => (result.token() ? true : false),
          })<V>(key),
        );
        marInstances.set(key, instance);
      }
      return instance;
    },
    ...props,
  };
  return result;
};

export const glInstanceDefns: Record<GitLabInstanceID, GitLabInstanceDefn> = {
  "git.netspective.io": glInstanceDefn("git.netspective.io", {
    description: "Netspective Canonical GitLab",
    token: () =>
      import.meta.env.UPI_GIT_NETSPECTIVE_IO_TOKEN ??
      import.meta.env.NLH_GIT_NETSPECTIVE_IO_PASSWORD,
    noTokenError: (defn) =>
      `No GitLab Token for host ${defn.host} on ${os.hostname}, expected UPI_GIT_NETSPECTIVE_IO_TOKEN or NLH_GIT_NETSPECTIVE_IO_PASSWORD in environment.`,
  }),
  "gl.infra.medigy.com": glInstanceDefn("git.netspective.io", {
    description: "Medigy Canonical GitLab",
    token: () =>
      import.meta.env.UPI_GL_INFRA_MEDIGY_COM_TOKEN ??
      import.meta.env.NLH_GL_INFRA_MEDIGY_COM_PASSWORD,
    noTokenError: (defn) =>
      `No GitLab Token for host ${defn.host} on ${os.hostname}, expected UPI_GL_INFRA_MEDIGY_COM_TOKEN or NLH_GL_INFRA_MEDIGY_COM_PASSWORD in environment.`,
  }),
};
