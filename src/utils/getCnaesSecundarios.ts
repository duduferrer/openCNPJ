export default function getCnaesSecundarios(
  cnaesList: string[] | undefined
): undefined | string[] {
  if (cnaesList === undefined) {
    return undefined;
  } else {
    return cnaesList;
  }
}
