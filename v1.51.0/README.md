# v1.51.0

## Negative Durations

Seems to affect `Linux` only. Run one of the following to reproduce.

* `test:negative-duration:chromium`
* `test:negative-duration:firefox`
* `test:negative-duration:webkit`

The output will include one of the following if there are negative durations
reported.

* If a negative duration is reported to the reporter via a `TestResult` within
  the `onTestEnd()` callback
  * `!!!!!!!!!!!! Negative test duration !!!!!!!!!!!!`
* if a negative duration was reported to the reporter via a `FullResult` within
  the `onEnd()` callback
  * `!!!!!!!!!!!! Negative total duration !!!!!!!!!!!!`
