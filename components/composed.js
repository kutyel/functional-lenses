/**
 * Generic lenses
 */
const enabledLens = lensPath(['enabled'])

/**
 * Combined lenses
 */

const sshServiceLens = lensPath(['sshService'])
const sshServiceEnabledLens = compose(
  sshServiceLens,
  enabledLens
)

const telnetServiceLens = lensPath(['telentService'])
const telnetServiceEnabledLens = compose(
  telnetServiceLens,
  enabledLens
)

/**
 * Usage
 */

const services = {
  sshService: { enabled: true },
  telnetService: { enabled: false },
}

console.assert(view(sshServiceEnabledLens, services) === true)
console.assert(view(telnetServiceEnabledLens, services) === false)
