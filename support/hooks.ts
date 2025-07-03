/// <reference types="@wdio/globals/types" />
import { Before, After } from '@wdio/cucumber-framework';

Before(async () => {
  // This resets the browser completely before every scenario
  await browser.reloadSession();
});

/*
After(async () => {
  // Optional: additional cleanup
});
*/
