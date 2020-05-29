import React from 'react';

import { TestResults, TestWarnings } from '../../types';
import { Typography } from '@material-ui/core';
import { Link, Row } from './shared';

const row: Row = {
  label: 'Media Servers Reachable',
  getValue: (testResults: TestResults) => 'Yes',
  getWarning: (testResults: TestResults) => TestWarnings.none,
  tooltipContent: {
    label: (
      <Typography>
        Tests connectivity to the Media servers. See{' '}
        <Link href="https://www.twilio.com/docs/voice/client/javascript/voice-client-js-and-mobile-sdks-network-connectivity-requirements#voice-media-servers-connectivity-requirements">
          media connectivity requirements
        </Link>
        for more information. Unreachable media servers cause the call to drop prematurely and could cause one way audio
        type issues.
      </Typography>
    ),
    [TestWarnings.error]: (
      <Typography>
        The media server could not be reached. Ensure your device has internet connectivity, and any firewalls allow
        access to Twilio’s{' '}
        <Link href="https://www.twilio.com/docs/voice/client/javascript/voice-client-js-and-mobile-sdks-network-connectivity-requirements#voice-media-servers-connectivity-requirements">
          Media servers
        </Link>
      </Typography>
    ),
  },
};

export default row;
