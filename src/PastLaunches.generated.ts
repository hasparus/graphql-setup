import * as Types from "./graphql-types.generated";

import { useQuery, UseQueryOptions } from "react-query";
import { gqlClient } from "~/gqlClient";
export type PastLaunchesQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars["Int"]>;
}>;

export type PastLaunchesQuery = {
  __typename?: "Query";
  launchesPast?: Array<{
    __typename?: "Launch";
    mission_name?: string | null;
    launch_date_local?: Date | null;
    launch_site?: {
      __typename?: "LaunchSite";
      site_name_long?: string | null;
    } | null;
    links?: {
      __typename?: "LaunchLinks";
      article_link?: string | null;
      video_link?: string | null;
    } | null;
    rocket?: {
      __typename?: "LaunchRocket";
      rocket_name?: string | null;
      first_stage?: {
        __typename?: "LaunchRocketFirstStage";
        cores?: Array<{
          __typename?: "LaunchRocketFirstStageCore";
          flight?: number | null;
          core?: {
            __typename?: "Core";
            reuse_count?: number | null;
            status?: string | null;
          } | null;
        } | null> | null;
      } | null;
      second_stage?: {
        __typename?: "LaunchRocketSecondStage";
        payloads?: Array<{
          __typename?: "Payload";
          payload_type?: string | null;
          payload_mass_kg?: number | null;
          payload_mass_lbs?: number | null;
        } | null> | null;
      } | null;
    } | null;
    ships?: Array<{
      __typename?: "Ship";
      name?: string | null;
      home_port?: string | null;
      image?: string | null;
    } | null> | null;
  } | null> | null;
};

export const PastLaunchesDocument = /*#__PURE__*/ `
    query PastLaunches($limit: Int) {
  launchesPast(limit: $limit) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
    `;
export const usePastLaunchesQuery = <
  TData = PastLaunchesQuery,
  TError = unknown
>(
  variables?: PastLaunchesQueryVariables,
  options?: UseQueryOptions<PastLaunchesQuery, TError, TData>
) =>
  useQuery<PastLaunchesQuery, TError, TData>(
    variables === undefined ? ["PastLaunches"] : ["PastLaunches", variables],
    gqlClient<PastLaunchesQuery, PastLaunchesQueryVariables>(
      PastLaunchesDocument,
      variables
    ),
    options
  );
