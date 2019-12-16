import regs from "./regs";
/**
 * clones and object and extends it with passed props
 * @param obj {object} - object that we want to clone
 * @param props { object } - props that we want to add to our clone
 */
export function shallowClone(
  obj: object,
  props: { [index: string]: any } = {}
) {
  const res = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );

  Object.keys(props).forEach(k => {
    res[k] = props[k];
  });

  return res;
}

/**
 * transform string to the pascal case format
 * @param str
 */
export function toPascalCase(str: string) {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

/**
 * removes all special chars from the string except spaces
 * @param str
 */
export function cleanStr(str: string) {
  return str.replace(regs.wordsAndSpacesOnly, "");
}
