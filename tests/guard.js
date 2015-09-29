import { equal } from 'assert';
import guard from '../guard';

test('#guard', () => {
  const x = 1;

  equal(
    guard([[x === 0, "Untrue"]]),
    null
  );

  equal(
    guard([
      [x === 1, "Yes!"],
      [x === 0, "No!"],
      [true, "Default return value"]
    ]),
    "Yes!"
  );

  equal(
    guard([
      [x !== 1, "No..."],
      [undefined, "Try again..."],
      [true, "Ok, fine."]
    ]),
    "Ok, fine."
  );
});
