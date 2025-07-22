import { generateDiagnosticLoop } from '../lib/diagnosticLoop'

describe('generateDiagnosticLoop', () => {
  test('logs correct diagnostic info', () => {
    console.log = jest.fn()

    const avatar = { name: 'Test Avatar' }
    const dream = { currentSymbol: '★' }
    const timeline = { position: 42 }

    generateDiagnosticLoop(avatar, dream, timeline)

    expect(console.log).toHaveBeenCalledWith('Running diagnostic loop with:', {
      avatarName: 'Test Avatar',
      dreamSymbol: '★',
      timelinePosition: 42,
    })
  })
})
