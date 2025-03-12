# v1.51.0

## Negative Durations

Seems to affect `Linux` only.

Run one of the following to reproduce.

* `test:negative-duration:chromium`
* `test:negative-duration:firefox`
* `test:negative-duration:webkit`

There are also variants that only seem to occur when a test is interrupted.

* `test:negative-duration:chromium:timeout`
* `test:negative-duration:firefox:timeout`
* `test:negative-duration:webkit:timeout`

The output will include one of the following if there are negative durations
reported.

* `!!!!!!!!!!!! Negative test duration !!!!!!!!!!!!`
* `!!!!!!!!!!!! Negative total duration !!!!!!!!!!!!`
