import Fs from 'fs';
import mergeOptions from 'merge-options';

import { mergeArrays } from './util';
import {
  SPARKLES,
  FACES,
  HALLUMANCER_FACES,
  LOVE_CASTS,
  LOVEMANCER_MOUTHES,
  LOVEMANCER_EYES,
} from './strings';


/** DEFAULT OPTIONS */
const TOOT_OPTIONS = {
  visibility: 'public',
  sensitive: false,
};
/** */

export const getSettings = (file) => {
  const data = Fs.readFileSync(file);
  if (data == null) {
    throw new Error('Unable to load settings');
  }

  const customSettings = JSON.parse(data);
  let { instanceUrl } = customSettings;
  const { accessToken } = customSettings;

  if (instanceUrl == null || accessToken == null) {
    throw new Error('accessToken and instanceUrl are mandatory');
  }
  if (instanceUrl.endsWith('/') === false) {
    instanceUrl = `${instanceUrl}/`;
  }

  const tootOptions = mergeOptions(TOOT_OPTIONS, customSettings.tootOptions || {});

  return {
    instanceUrl,
    accessToken,
    tootOptions,
    strings: {
      sparkles: mergeArrays(SPARKLES, customSettings.customSparkles),
      faces: mergeArrays(FACES, customSettings.customFaces),
      halluFaces: mergeArrays(HALLUMANCER_FACES, customSettings.customHalluFaces),
      loveCasts: mergeArrays(LOVE_CASTS, customSettings.customLoveCasts),
      loveMouthes: mergeArrays(LOVEMANCER_MOUTHES, customSettings.customLoveMouthes),
      loveEyes: mergeArrays(LOVEMANCER_EYES, customSettings.customLoveEyes),
    },
  };
};

export default getSettings;
