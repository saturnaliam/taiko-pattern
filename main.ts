interface Side {
  don: string;
  ka: string;
};

export function parse_sequence(input: string): string {
  let output = "";

  const [ right_hand, left_hand ] = read_sides("keys.json");
  let current_hand = right_hand;

  for(const note of input) {
    if (note == "k") {
      output += current_hand.ka;
    } else if (note == "d") {
      output += current_hand.don;
    } else {
      console.error(`unknown note: "${note}"!`);
      Deno.exit(1);
    }

    current_hand = (current_hand == right_hand) ? left_hand : right_hand;
  }

  return output;
}

function read_sides(file: string): [Side, Side] {
  try {
    const file_contents = Deno.readTextFileSync(file);
    const file_json = JSON.parse(file_contents) as [Side, Side];
    if (file_json[0].don == undefined || file_json[0].ka == undefined || file_json[1].don == undefined || file_json[1].ka == undefined) {
      throw("could not find a ka/don field!");
    }

    return file_json;
  } catch (err) {
    console.error(`error reading keys: ${err}`);
    Deno.exit(1);
  }
}

const input = Deno.args[0];
console.log(parse_sequence(input));