export default function breakInstructionsToSteps(instructions: string) {
  const steps = instructions.split('\r\n');

  const filteredSteps = steps.filter((step) => {
    if (step !== '') {
      return true;
    }
  });
  return filteredSteps;
}
