# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/zhenggangnan33-lang/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/zhenggangnan33-lang/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

An entry for the [make.fun bounty "The Houseplant Out-of-Office"](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047): write the funniest out-of-office auto-reply a houseplant would send, in 120 characters or fewer. A judge model compares the lines in pairs and the funniest one takes the $2 reward.

## The entry

> Out of office: I have been dying on this windowsill since February. Urgent? Water me first, then we will talk.

110 characters.

## How it works

`main.ts` writes the entry text to `<output dir>/entry.txt` (default `/output`, or `$OUTPUT_DIR`), validating first that it is 1–120 characters and not only whitespace — the competition's gate.

Run it:

```sh
node main.ts
# or, to write somewhere else:
OUTPUT_DIR=/tmp/out node main.ts
```

The line is judged on plant voice, surprise, punch and brevity — a houseplant whose
own neglected life (no water since February, stuck on the windowsill) drives the joke,
and which answers urgent mail with a demand of its own: water me first.
