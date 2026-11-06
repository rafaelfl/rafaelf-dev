export const TRUNK_X = 8;
export const BRANCH_X = 28;
const CURVE = 40;

/**
 * Builds pixel-space SVG paths for a vertical git graph, from each commit's y.
 * shortcut: a branch is one commit between two trunk commits, extend if two consecutive jobs ever overlap the trunk.
 */
export function gitGraphPaths(ys: number[], onBranch: boolean[]) {
  const trunkYs = ys.filter((_, i) => !onBranch[i]);
  const trunk = trunkYs.length
    ? `M${TRUNK_X} ${trunkYs[0]}V${trunkYs[trunkYs.length - 1]}`
    : "";

  const branches = ys.flatMap((_, i) => {
    if (!onBranch[i] || i === 0 || i === ys.length - 1) return [];
    const merge = ys[i - 1];
    const fork = ys[i + 1];
    return [
      `M${TRUNK_X} ${merge}` +
        `C${TRUNK_X} ${merge + CURVE / 2} ${BRANCH_X} ${merge + CURVE / 2} ${BRANCH_X} ${merge + CURVE}` +
        `V${fork - CURVE}` +
        `C${BRANCH_X} ${fork - CURVE / 2} ${TRUNK_X} ${fork - CURVE / 2} ${TRUNK_X} ${fork}`,
    ];
  });

  return { trunk, branches };
}
