interface Side {
  don: string;
  ka: string;
};

export function parse_sequence(input: string): string {
  let output = "";

  const rh: Side = { don: 'j', ka: 'k' };
  const lh: Side = { don: 'f', ka: 'd' };
  let ch = rh;

  for(const c of input) {
    if (c == 'k') output += ch.ka;
    if (c == 'd') output += ch.don;

    ch = (ch == rh) ? lh : rh;
  }

  return output;
}

const a = parse_sequence(Deno.args[0]);
console.log(a);