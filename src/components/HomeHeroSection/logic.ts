type slidePositions = [number, number, number, number, number];

export function decreaseSlidePositions(
  positions: slidePositions
): slidePositions {
  const newPositionsArray = positions.map((val) => {
    return val == 1 ? 5 : val - 1;
  });
  return newPositionsArray as slidePositions;
}

export function nextButtonHandler(
  dispatcher: React.Dispatch<React.SetStateAction<slidePositions>>,
  e?: React.MouseEvent<HTMLButtonElement>
) {
  e?.preventDefault();
  dispatcher(decreaseSlidePositions);
}
