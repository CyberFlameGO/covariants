import type { Mutation } from 'src/types'

export function formatMutation({ gene, left, pos, right }: Mutation) {
  const geneStr = gene ? `${gene}:` : ''
  const leftStr = left ?? ''
  const posStr = pos ?? ''
  const rightStr = right ?? ''

  return `${geneStr}${leftStr}${posStr}${rightStr}`
}
