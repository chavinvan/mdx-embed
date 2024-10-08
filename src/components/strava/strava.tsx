import React, { FunctionComponent } from 'react';
import { GeneralObserver } from '../general-observer';
export interface IStravaProps {
  /** The Strava activityId */
  activityId: string;
}

export const Strava: FunctionComponent<IStravaProps> = ({ activityId }: IStravaProps) => {
  return (
    <GeneralObserver>
      <div
        data-testid="strava"
        className="strava-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <iframe
          title={`strava-${activityId}`}
          className="strava-mdx-embed"
          height="100%"
          width="100%"
          style={{
            minWidth: '380px',
            minHeight: '699px',
            display: 'block',  
          }}
          frameBorder="0"
          src={`https://strava-embeds.com/activity/${activityId}`}
        />
      </div>
    </GeneralObserver>
  );
};
