/**
 * Allowed hostnames for Vite dev (`bun dev`) and preview (`bun run preview`) servers.
 *
 * - Add domains you own and deploy to (e.g. `fcdex.com`).
 * - Prefix with `.` to allow that domain and all subdomains (e.g. `.fcdex.com`).
 * - `localhost` and IP addresses are always permitted by Vite by default.
 *
 * Optional env overrides (comma-separated or single host):
 * - `VITE_ALLOWED_HOSTS` — e.g. `fcdex.com,www.fcdex.com`
 * - `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` — single extra host (Vite built-in)
 */

/** Domains allowed to access the site. Edit this list for your deployment. */
export const allowedHosts: string[] = [
  // "fcdex.xyz",
  // "www.fcdex.xyz",
  // ".fcdex.xyz",
];

export function resolveAllowedHosts(): string[] {
  const fromEnv =
    process.env.VITE_ALLOWED_HOSTS?.split(",")
      .map((host) => host.trim())
      .filter(Boolean) ?? [];

  const additional = process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS?.trim();

  return [
    ...new Set([
      ...allowedHosts,
      ...fromEnv,
      ...(additional ? [additional] : []),
    ]),
  ];
}

/** Applied to `server` in vite.config.ts (development). */
export const serverOptions = {
  allowedHosts: resolveAllowedHosts(),
};

/** Applied to `preview` in vite.config.ts (local production preview). */
export const previewOptions = {
  allowedHosts: resolveAllowedHosts(),
};
